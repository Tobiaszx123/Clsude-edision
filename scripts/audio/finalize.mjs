// scripts/audio/finalize.mjs — paso de AUDIO PRO sobre el video YA renderizado.
// 1) mete una CAMA DE MÚSICA suave por debajo de la narración (volumen bajo fijo;
//    el ffmpeg recortado de Remotion NO trae sidechaincompress, así que no hay
//    ducking dinámico — una cama baja constante es el estándar documental igual).
// 2) NORMALIZA el loudness a -14 LUFS (estándar de YouTube) → volumen parejo y pro.
// El VIDEO no se recodifica (-c:v copy): es rápido y sin pérdida.
//
// Uso:
//   node scripts/audio/finalize.mjs <video.mp4> [musica.mp3] [salida.mp4] [--vol=0.10] [--lufs=-14]
//   (sin música → solo normaliza loudness)
import fs from "node:fs";
import path from "node:path";
import { FFMPEG, run } from "../clips/util.mjs";

const args = process.argv.slice(2);
const pos = args.filter((a) => !a.startsWith("--"));
const flag = (k, d) => { const a = args.find((x) => x.startsWith(`--${k}=`)); return a ? a.split("=")[1] : d; };

const video = pos[0];
if (!video || !fs.existsSync(video)) { console.error("Falta <video.mp4> válido"); process.exit(1); }
const music = pos[1] && fs.existsSync(pos[1]) ? pos[1] : null;
if (pos[1] && !music) console.warn(`⚠ no encuentro música «${pos[1]}» → solo normalizo loudness`);
const out = pos[2] || video.replace(/\.mp4$/i, "_audiopro.mp4");
const vol = parseFloat(flag("vol", "0.10"));   // volumen de la cama de música (0.08-0.12 recomendado)
const lufs = flag("lufs", "-14");

const ff = (a) => run(FFMPEG, ["-hide_banner", "-y", ...a], { quiet: false, timeout: 0 });
const LN = `loudnorm=I=${lufs}:TP=-1.5:LRA=11`;

(async () => {
  let r;
  if (music) {
    console.log(`🎵 cama de música «${path.basename(music)}» a vol ${vol} + loudnorm ${lufs} LUFS`);
    r = await ff([
      "-i", video, "-stream_loop", "-1", "-i", music,
      "-filter_complex",
      `[1:a]volume=${vol}[bg];[0:a][bg]amix=inputs=2:duration=first:normalize=0[mx];[mx]${LN}[a]`,
      "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", out,
    ]);
  } else {
    console.log(`🔊 solo loudnorm a ${lufs} LUFS (sin música)`);
    r = await ff(["-i", video, "-af", LN, "-map", "0:v", "-map", "0:a", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", out]);
  }
  if (r.code === 0 && fs.existsSync(out)) console.log(`\n✔ listo → ${out}`);
  else { console.error(`\n✘ ffmpeg salió con código ${r.code}`); process.exit(1); }
})();
