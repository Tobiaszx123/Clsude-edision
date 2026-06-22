// scripts/clips/run.mjs — PIPELINE de clips reales de YouTube (local, SIN modelos de visión).
//
// Flujo (todo local; el render pesado sigue yendo a GitHub Actions):
//   1. BUSCAR    yt-dlp ytsearch → baja SOLO subtítulos + metadata (sin video todavía).
//   2. LOCALIZAR parsea los subtítulos y encuentra la VENTANA donde se dicen las keywords.
//   3. BAJAR     yt-dlp --download-sections → baja SOLO esa ventana (~8-12s) a ≤720p.
//   4. PUNTUAR   por clip:  relevancia(keywords) + penalización OCR(texto) + penalización
//                marca-de-agua(OCR de marcas + esquina estática). Sin Vision: OCR clásico
//                (tesseract.js) y análisis de píxeles (jimp).
//   5. ELEGIR    el de mayor puntaje por item → normaliza a public/vid/<id>.mp4 + manifest.
//
// Uso:
//   node scripts/clips/run.mjs clips_plan.json [--candidates=6] [--keep-src] [--outdir=public/vid]
//
// clips_plan.json:
//   { "items": [
//       { "id":"ajo_diente", "query":"planting garlic clove in soil close up",
//         "keywords":["garlic","clove","plant","soil"], "n":1, "lang":"en" }
//   ]}
import fs from "node:fs";
import path from "node:path";
import { Jimp } from "jimp";
import { createWorker } from "tesseract.js";
import {
  ROOT, FFMPEG, ffmpeg, ytdlp, probeDuration, parseVtt, sec2tc, ensureDir, slug,
  WATERMARK_BRANDS,
} from "./util.mjs";

const FFDIR = path.dirname(FFMPEG); // yt-dlp necesita saber dónde está ffmpeg para cortar/mergear

const args = process.argv.slice(2);
const planPath = args.find((a) => !a.startsWith("--")) || "clips_plan.json";
const opt = (k, d) => { const a = args.find((x) => x.startsWith(`--${k}=`)); return a ? a.split("=")[1] : d; };
const CANDS = parseInt(opt("candidates", "6"), 10);
const KEEP_SRC = args.includes("--keep-src");
const OUTDIR = path.resolve(ROOT, opt("outdir", "public/vid"));
const SRCROOT = path.resolve(ROOT, "public/clips_src");
const TMP = path.resolve(ROOT, "public/clips_src/_tmp");

const plan = JSON.parse(fs.readFileSync(path.resolve(ROOT, planPath), "utf8"));
ensureDir(OUTDIR); ensureDir(SRCROOT); ensureDir(TMP);

let WORKER = null;
const ocr = async (img) => {
  if (!WORKER) WORKER = await createWorker("eng");
  const { data } = await WORKER.recognize(img);
  return data; // {text, words:[{text,confidence}], ...}
};

// ── 1+2. buscar candidatos y localizar ventanas por keywords ──────────────────
async function findWindows(item) {
  const srcDir = path.join(SRCROOT, slug(item.id));
  ensureDir(srcDir);
  const lang = item.lang || "en";
  console.log(`  buscando «${item.query}» …`);
  await ytdlp([
    `ytsearch${CANDS}:${item.query}`,
    "--skip-download", "--write-auto-subs", "--write-subs",
    "--sub-langs", `${lang},${lang}-orig,${lang}.*`, "--sub-format", "vtt",
    "--write-info-json", "--no-warnings", "--no-playlist",
    "--match-filter", "duration > 30 & duration < 3600 & !is_live",
    "-o", path.join(srcDir, "%(id)s.%(ext)s"),
  ], { quiet: true, timeout: 180000 });

  const windows = [];
  const kws = (item.keywords || []).map((k) => k.toLowerCase());
  for (const f of fs.readdirSync(srcDir).filter((f) => f.endsWith(".info.json"))) {
    const info = JSON.parse(fs.readFileSync(path.join(srcDir, f), "utf8"));
    const vid = info.id;
    const vtt = fs.readdirSync(srcDir).find((x) => x.startsWith(vid) && x.endsWith(".vtt"));
    if (!vtt) continue;
    const cues = parseVtt(fs.readFileSync(path.join(srcDir, vtt), "utf8"));
    // une cues consecutivos que contienen keywords en una ventana de 8-12s
    for (const c of cues) {
      const txt = c.text.toLowerCase();
      const hits = kws.filter((k) => txt.includes(k));
      if (!hits.length) continue;
      const start = Math.max(0, c.start - 1.5);
      const dur = info.duration || (c.end + 12);
      const end = Math.min(dur, Math.max(c.end + 1.5, start + 8));
      windows.push({
        url: info.webpage_url, vid, channel: info.uploader, title: info.title,
        start, end: Math.min(end, start + 12), text: c.text, hits: hits.length,
      });
    }
  }
  // mejores ventanas primero (más keywords); cap para no bajar de más
  windows.sort((a, b) => b.hits - a.hits);
  return { srcDir, windows: windows.slice(0, Math.max(3, (item.n || 1) * 3)) };
}

// ── 3. bajar solo la sección ──────────────────────────────────────────────────
async function downloadSection(w, srcDir, idx) {
  const base = path.join(srcDir, `clip_${idx}_${w.vid}`);
  await ytdlp([
    "-f", "bv*[height<=720]+ba/b[height<=720]/b",
    "--download-sections", `*${sec2tc(w.start)}-${sec2tc(w.end)}`,
    "--force-keyframes-at-cuts", "--no-playlist", "--no-warnings",
    "--ffmpeg-location", FFDIR,
    "--merge-output-format", "mp4", "-o", `${base}.%(ext)s`, w.url,
  ], { quiet: true, timeout: 240000 });
  const out = fs.readdirSync(srcDir).find((x) => x.startsWith(path.basename(base)) && /\.(mp4|mkv|webm)$/.test(x));
  return out ? path.join(srcDir, out) : null;
}

// ── 4. puntuar ────────────────────────────────────────────────────────────────
async function extractFrames(file, n, width) {
  const dur = await probeDuration(file);
  const frames = [];
  for (let i = 0; i < n; i++) {
    const t = dur * ((i + 0.5) / n);
    const out = path.join(TMP, `f_${Date.now()}_${i}.png`);
    await ffmpeg(["-y", "-ss", String(t.toFixed(2)), "-i", file, "-frames:v", "1",
      "-vf", `scale=${width}:-2`, out]);
    if (fs.existsSync(out)) frames.push(out);
  }
  return frames;
}

function cornerStatic(imgs) {
  // varianza temporal baja + bordes presentes en alguna esquina ⇒ posible marca de agua
  if (imgs.length < 2) return 0;
  const W = imgs[0].bitmap.width, H = imgs[0].bitmap.height;
  const cw = Math.floor(W * 0.30), chh = Math.floor(H * 0.22);
  const corners = [[0, 0], [W - cw, 0], [0, H - chh], [W - cw, H - chh]];
  const lum = (im, x, y) => { const i = (y * im.bitmap.width + x) * 4, d = im.bitmap.data; return 0.3 * d[i] + 0.59 * d[i + 1] + 0.11 * d[i + 2]; };
  let worst = 0;
  for (const [ox, oy] of corners) {
    let varSum = 0, edgeSum = 0, n = 0;
    for (let y = oy + 1; y < oy + chh; y += 2) for (let x = ox + 1; x < ox + cw; x += 2) {
      const vals = imgs.map((im) => lum(im, x, y));
      const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
      const v = vals.reduce((a, b) => a + (b - mean) ** 2, 0) / vals.length;
      const edge = Math.abs(lum(imgs[0], x, y) - lum(imgs[0], x - 1, y));
      varSum += v; edgeSum += edge; n++;
    }
    const tempVar = varSum / n;        // bajo = estático
    const edge = edgeSum / n;          // alto = hay estructura (logo/texto), no cielo liso
    if (tempVar < 35 && edge > 12) worst = Math.max(worst, Math.min(1, edge / 40));
  }
  return worst;
}

async function scoreClip(file, w, item) {
  const kws = (item.keywords || []).map((k) => k.toLowerCase());
  const rel = kws.length ? Math.min(1, w.hits / kws.length) : 0.5;

  // OCR sobre 3 frames
  const ocrFrames = await extractFrames(file, 3, 960);
  let words = 0, brand = 0;
  for (const fp of ocrFrames) {
    const d = await ocr(fp);
    const conf = (d.words || []).filter((x) => x.confidence > 55 && x.text.trim().length > 1);
    words += conf.length;
    const low = (d.text || "").toLowerCase();
    if (WATERMARK_BRANDS.some((b) => low.includes(b))) brand = 1;
  }
  const avgWords = words / Math.max(1, ocrFrames.length);
  const textPenalty = Math.min(1, avgWords / 12);   // 12+ palabras/frame ⇒ penaliza full

  // marca de agua por esquina estática (5 frames chicos)
  const wmFrames = await extractFrames(file, 5, 320);
  const imgs = [];
  for (const fp of wmFrames) { try { imgs.push(await Jimp.read(fp)); } catch {} }
  const wmStatic = cornerStatic(imgs);
  const wm = Math.max(brand, 0.7 * wmStatic);

  [...ocrFrames, ...wmFrames].forEach((f) => { try { fs.unlinkSync(f); } catch {} });

  const score = Math.round(100 * (0.55 * rel + 0.25 * (1 - textPenalty) + 0.20 * (1 - wm)));
  return { score, rel: +rel.toFixed(2), avgWords: +avgWords.toFixed(1), brand, wmStatic: +wmStatic.toFixed(2), wm: +wm.toFixed(2) };
}

// ── 5. normalizar el elegido a public/vid/<id>.mp4 ────────────────────────────
async function normalize(src, id, n) {
  const name = n > 0 ? `${id}_${n + 1}` : id;
  const out = path.join(OUTDIR, `${name}.mp4`);
  // nota: el ffmpeg de Remotion es un build recortado SIN el filtro setsar → usamos -aspect
  await ffmpeg(["-y", "-i", src, "-an", "-vf",
    "scale=1536:864:force_original_aspect_ratio=increase,crop=1536:864",
    "-aspect", "16:9", "-c:v", "libx264", "-preset", "veryfast", "-crf", "20", "-pix_fmt", "yuv420p", out]);
  return path.relative(path.join(ROOT, "public"), out).replace(/\\/g, "/");
}

// ── orquestación ──────────────────────────────────────────────────────────────
(async () => {
  const manifest = [];
  for (const item of plan.items) {
    console.log(`\n▶ ${item.id}`);
    const { srcDir, windows } = await findWindows(item);
    if (!windows.length) { console.log("  ⚠ sin ventanas con keywords; ajustá query/keywords"); continue; }

    const scored = [];
    for (let i = 0; i < windows.length; i++) {
      const w = windows[i];
      const clip = await downloadSection(w, srcDir, i);
      if (!clip) { console.log(`  · ventana ${i}: no bajó`); continue; }
      const s = await scoreClip(clip, w, item);
      console.log(`  · ventana ${i} [${w.channel}] score=${s.score} (rel ${s.rel}, txt ${s.avgWords}p, wm ${s.wm}${s.brand ? " BRAND" : ""})`);
      scored.push({ clip, w, s });
    }
    scored.sort((a, b) => b.s.score - a.s.score);
    const take = scored.slice(0, item.n || 1);
    for (let k = 0; k < take.length; k++) {
      const { clip, w, s } = take[k];
      const rel = await normalize(clip, item.id, k);
      console.log(`  ✓ elegido score=${s.score} → public/${rel}`);
      manifest.push({ id: item.id, file: rel, score: s.score, source: w.url,
        channel: w.channel, title: w.title, at: sec2tc(w.start), scoring: s });
    }
    if (!KEEP_SRC) fs.rmSync(srcDir, { recursive: true, force: true });
  }
  if (WORKER) await WORKER.terminate();
  fs.rmSync(TMP, { recursive: true, force: true });
  const mpath = path.join(OUTDIR, "realclips.json");
  fs.writeFileSync(mpath, JSON.stringify(manifest, null, 2));
  console.log(`\n✔ ${manifest.length} clip(s) en ${OUTDIR}\n  manifest: ${path.relative(ROOT, mpath)}`);
})();
