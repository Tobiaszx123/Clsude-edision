// yt_clips.mjs — clips REALES de YouTube por búsqueda + recorte (como la competencia).
//
// Para un momento de la narración (ej. "manos podando una tomatera") busca en YouTube,
// baja el mejor resultado, RECORTA el tramo pedido y lo re-encoda fast-decode a
// public/vid/<name>.mp4 (mismo formato que el avatar → seek barato en el render).
// Se wirea como RawShot con src "vid/<name>.mp4".
//
// ⚠ LEGAL: descargar de YouTube viola sus Términos de Servicio y los clips tienen
// copyright de terceros. Usar bajo criterio del canal (la competencia lo hace).
//
// Requisitos:
//   - yt-dlp en PATH (o env YT_DLP=ruta\yt-dlp.exe). ffmpeg lo aporta `npx remotion ffmpeg`.
//
// Lista — public/vid/yt_<video>.json:
//   [ { "name": "yt_cosecha_roja", "query": "tomato plant heavy with ripe red tomatoes garden",
//       "section": [12, 19] } ]   // section = [startSeg, endSeg] del video encontrado
//
// Uso:  node yt_clips.mjs [public/vid/yt_tomateras.json] [public/vid]
import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";

const [listArg = "public/vid/yt_tomateras.json", outArg = "public/vid"] = process.argv.slice(2);
// yt-dlp: env YT_DLP o ./yt-dlp.exe (win) o "yt-dlp" del PATH
const YT = process.env.YT_DLP
  ? path.resolve(process.env.YT_DLP)
  : process.platform === "win32" && fs.existsSync(path.resolve("yt-dlp.exe"))
    ? path.resolve("yt-dlp.exe")
    : "yt-dlp";
const NPX = process.platform === "win32" ? "npx.cmd" : "npx";

if (!fs.existsSync(listArg)) {
  console.error("No existe la lista:", listArg);
  process.exit(1);
}
const list = JSON.parse(fs.readFileSync(listArg, "utf8"));

// yt-dlp.exe → shell:false (el query con espacios NO se rompe). npx.cmd → shell:true
// (los .cmd de Windows requieren shell; sus args acá no tienen espacios).
const run = (cmd, args, shell = false) => {
  console.log("·", cmd, args.join(" "));
  const r = spawnSync(cmd, args, { stdio: "inherit", shell });
  return r.status === 0;
};

let ok = 0;
for (const item of list) {
  const { name, query, section = [0, 6] } = item;
  const dest = path.join(outArg, `${name}.mp4`);
  if (fs.existsSync(dest)) { console.log(`= ya existe  ${name}.mp4`); ok++; continue; }
  const tmp = path.join(outArg, `_yttmp_${name}.mp4`);
  const [start, end] = section;
  const dur = Math.max(1, end - start);

  // 1) descargar el primer resultado de búsqueda (cap 720p, mp4)
  const dl = run(YT, [
    `ytsearch1:${query}`,
    "-f", "mp4[height<=720]/best[height<=720]/best",
    "--no-playlist", "--no-warnings", "-o", tmp,
  ]);
  if (!dl || !fs.existsSync(tmp)) { console.error(`✗ ${name}: falló la descarga`); continue; }

  // 2) recortar el tramo + re-encodar fast-decode, mudo (la narración va aparte)
  const cut = run(NPX, [
    "remotion", "ffmpeg", "-y", "-ss", String(start), "-i", tmp, "-t", String(dur),
    "-c:v", "libx264", "-preset", "veryfast", "-crf", "24",
    "-g", "30", "-keyint_min", "30", "-tune", "fastdecode", "-pix_fmt", "yuv420p", "-an", dest,
  ], true);
  try { fs.unlinkSync(tmp); } catch { /* */ }
  if (cut && fs.existsSync(dest)) { console.log(`↓ ${name}.mp4  (${dur}s)`); ok++; }
  else console.error(`✗ ${name}: falló el recorte`);
}
console.log(`\n=== yt_clips: ${ok}/${list.length} listos ===`);
