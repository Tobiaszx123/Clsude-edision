// scripts/clips/util.mjs — helpers compartidos del pipeline de clips reales de YouTube.
// Node 24 NO puede spawnear npx (EINVAL), así que resolvemos los .exe y los spawneamos
// directo: ffmpeg/ffprobe vienen del compositor de Remotion; yt-dlp es el binario standalone.
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, "..", "..");           // raíz del proyecto

const COMP = path.join(ROOT, "node_modules", "@remotion", "compositor-win32-x64-msvc");
export const FFMPEG = path.join(COMP, "ffmpeg.exe");
export const FFPROBE = path.join(COMP, "ffprobe.exe");
export const YTDLP = path.join(ROOT, "scripts", "bin", "yt-dlp.exe");

for (const [n, p] of [["ffmpeg", FFMPEG], ["ffprobe", FFPROBE], ["yt-dlp", YTDLP]]) {
  if (!fs.existsSync(p)) throw new Error(`No encuentro ${n} en ${p}`);
}

// spawn directo de un .exe (sin shell). Devuelve {code, stdout, stderr}.
export function run(exe, args, { cwd = ROOT, quiet = true, timeout = 0 } = {}) {
  return new Promise((resolve) => {
    const ch = spawn(exe, args, { cwd, windowsHide: true });
    let out = "", err = "";
    ch.stdout.on("data", (d) => { out += d; if (!quiet) process.stdout.write(d); });
    ch.stderr.on("data", (d) => { err += d; if (!quiet) process.stderr.write(d); });
    let t = null;
    if (timeout > 0) t = setTimeout(() => ch.kill("SIGKILL"), timeout);
    ch.on("close", (code) => { if (t) clearTimeout(t); resolve({ code, stdout: out, stderr: err }); });
    ch.on("error", (e) => { if (t) clearTimeout(t); resolve({ code: -1, stdout: out, stderr: String(e) }); });
  });
}

export const ffmpeg = (args, opts) => run(FFMPEG, ["-hide_banner", "-loglevel", "error", ...args], opts);
export const ytdlp = (args, opts) => run(YTDLP, args, opts);

export async function probeDuration(file) {
  const r = await run(FFPROBE, ["-v", "error", "-show_entries", "format=duration",
    "-of", "default=noprint_wrappers=1:nokey=1", file]);
  const d = parseFloat((r.stdout || "").trim());
  return Number.isFinite(d) ? d : 0;
}

// ── VTT parsing ──────────────────────────────────────────────────────────────
const tcToSec = (tc) => {
  const m = tc.trim().match(/(?:(\d+):)?(\d{1,2}):(\d{2})[.,](\d{1,3})/);
  if (!m) return null;
  const [, h, mm, ss, ms] = m;
  return (+(h || 0)) * 3600 + (+mm) * 60 + (+ss) + (+ms) / 1000;
};

// Devuelve [{start,end,text}] limpiando tags de karaoke/posición de los auto-subs.
export function parseVtt(vttText) {
  const cues = [];
  const blocks = vttText.replace(/\r/g, "").split("\n\n");
  for (const b of blocks) {
    const line = b.split("\n").find((l) => l.includes("-->"));
    if (!line) continue;
    const [a, rest] = line.split("-->");
    const start = tcToSec(a); const end = tcToSec(rest);
    if (start == null || end == null) continue;
    const text = b.split("\n").filter((l) => !l.includes("-->") && !/^\d+$/.test(l.trim()) && l.trim())
      .join(" ").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (text) cues.push({ start, end, text });
  }
  return cues;
}

export const sec2tc = (s) => {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), ss = (s % 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${ss.toFixed(2).padStart(5, "0")}`;
};

export const ensureDir = (d) => fs.mkdirSync(d, { recursive: true });
export const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "").slice(0, 60);

// marcas de agua / bancos de stock que penalizan fuerte si OCR las detecta
export const WATERMARK_BRANDS = [
  "national geographic", "natgeo", "bbc", "discovery", "getty", "gettyimages",
  "shutterstock", "istock", "pond5", "storyblocks", "dreamstime", "alamy",
  "adobe stock", "vimeo", "tiktok", "@", "subscribe", "youtube.com",
];
