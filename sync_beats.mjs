// sync_beats.mjs — sincroniza los timings del beatsheet con la VOZ real.
//
// Problema que resuelve: hoy cada beat tiene start/dur a mano (aproximados) → casi
// todos duran lo mismo y los títulos/gráficas no caen cuando se narra. Acá leo las
// marcas de tiempo word-level de whisper (public/captions.json) y, por cada beat,
// busco su `anchor` (una frase textual de la narración) en la transcripción para
// fijar el `start` EXACTO. La duración sale del gap hasta el próximo beat → quedan
// naturalmente DESPAREJAS (relleno corto, beats clave largos) y todo cae con la voz.
//
// Uso:  node sync_beats.mjs [beatsheet/tomateras.json] [public/captions.json] [TOTAL_seg]
// Reescribe el beatsheet in-place (solo start/dur; conserva todo lo demás).
import fs from "fs";

const [bsArg = "beatsheet/tomateras.json", capArg = "public/captions.json", totalArg] =
  process.argv.slice(2);

const norm = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const bs = JSON.parse(fs.readFileSync(bsArg, "utf8"));
const caps = JSON.parse(fs.readFileSync(capArg, "utf8"));

// stream de palabras normalizadas con su tiempo de inicio (segundos)
const words = [];
for (const c of caps) {
  const t = norm(c.text || "");
  if (!t) continue;
  for (const w of t.split(" ")) words.push({ w, t: (c.startMs ?? c.timestampMs ?? 0) / 1000 });
}
const flat = words.map((x) => x.w);

// busca la secuencia de tokens del anchor; devuelve el tiempo de la 1ª palabra (o null)
function findAnchor(anchor, fromIdx = 0) {
  const toks = norm(anchor).split(" ").filter(Boolean);
  if (!toks.length) return null;
  for (let i = fromIdx; i <= flat.length - toks.length; i++) {
    let ok = true;
    for (let k = 0; k < toks.length; k++) if (flat[i + k] !== toks[k]) { ok = false; break; }
    if (ok) return { t: words[i].t, idx: i };
  }
  // fallback: probar desde el principio si no se encontró hacia adelante
  if (fromIdx > 0) return findAnchor(anchor, 0);
  return null;
}

const TOTAL = totalArg ? parseFloat(totalArg) : 214.6;
const MIN_DUR = 2.2;

// resolver start de cada beat (en orden), avanzando el cursor para evitar matches viejos
let cursor = 0;
const warnings = [];
for (const b of bs.beats) {
  if (!b.anchor) { warnings.push(`${b.id}: sin anchor (queda start=${b.start})`); continue; }
  const hit = findAnchor(b.anchor, cursor);
  if (!hit) { warnings.push(`${b.id}: anchor NO encontrado: "${b.anchor}" (queda start=${b.start})`); continue; }
  b.start = Math.round(hit.t * 100) / 100;
  cursor = hit.idx + 1;
}

// ordenar por start y recalcular dur = gap al próximo (último = hasta el final)
bs.beats.sort((a, b) => a.start - b.start);
for (let i = 0; i < bs.beats.length; i++) {
  const next = i + 1 < bs.beats.length ? bs.beats[i + 1].start : TOTAL;
  let dur = Math.round((next - bs.beats[i].start) * 100) / 100;
  if (dur < MIN_DUR) { dur = MIN_DUR; warnings.push(`${bs.beats[i].id}: gap < ${MIN_DUR}s → forzado a ${MIN_DUR} (puede solapar)`); }
  bs.beats[i].dur = dur;
}

fs.writeFileSync(bsArg, JSON.stringify(bs, null, 2) + "\n");

console.log(`=== sync ${bsArg} ===`);
console.log(`beats: ${bs.beats.length}  ·  palabras en captions: ${flat.length}  ·  total: ${TOTAL}s`);
console.log("timeline:");
for (const b of bs.beats) console.log(`  ${String(b.start).padStart(6)}s  +${String(b.dur).padEnd(5)}  ${b.id.padEnd(6)} ${b.kind}`);
if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} avisos:`);
  for (const w of warnings) console.log("  · " + w);
} else console.log("sin avisos: todos los anchors resueltos.");
