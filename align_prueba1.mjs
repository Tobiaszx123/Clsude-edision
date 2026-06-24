// align_prueba1.mjs — RE-ALINEA los beats de prueba1 al tiempo EXACTO de la narración.
// Para cada beat, busca su "frase ancla" en la transcripción (captions_prueba1.json) y
// pone beat.start = el tiempo de esa palabra. Las duraciones se calculan sin huecos
// (cada beat dura hasta que arranca el siguiente). Así el video va 100% acorde a la voz.
import fs from "node:fs";

const caps = JSON.parse(fs.readFileSync("public/captions_prueba1.json", "utf8"));
const bsPath = "beatsheet/prueba1.json";
const bs = JSON.parse(fs.readFileSync(bsPath, "utf8"));

const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();

// palabras normalizadas con su startMs
const words = [];
for (const c of caps) { const w = norm(c.text); if (w) for (const part of w.split(" ")) words.push({ w: part, ms: c.startMs }); }
const flat = words.map((x) => x.w).join(" ");

// devuelve el startMs (seg) donde empieza la frase, o null
function timeOf(phrase) {
  const p = norm(phrase);
  const idx = flat.indexOf(p);
  if (idx < 0) return null;
  // contar palabras antes del match para ubicar el token
  const before = flat.slice(0, idx).trim();
  const wi = before === "" ? 0 : before.split(" ").length;
  return words[wi] ? +(words[wi].ms / 1000).toFixed(2) : null;
}

// ancla por beat (frase distintiva de la narración donde debe arrancar)
const ANCHOR = {
  p01: 0, p02: "amarrado", p03: "buscas los tomates", p04: "unos pocos verdes",
  p05: "deberia darte", p06: "empiezan a aparecer", p07: "la senal", p08: "mata al fruto",
  p08b: "rascandote", p09: "hiciste todo bien", p10: "tantas hojas", p11: "metiendo la enfermedad",
  p12: "al reves", p13: "necesitabas quitarle", p14: "lo cambia todo", p15: "dejada a su aire",
  p16: "ramitas laterales", p17: "donde el sol no llega", p18: "pensando en sobrevivir",
  p19: "jamas haria", p20: "frio va a matar",
};

const beats = [...bs.beats].sort((a, b) => a.start - b.start);
let prev = null, misses = [];
for (const b of beats) {
  const a = ANCHOR[b.id];
  let t = a === 0 ? 0 : (typeof a === "string" ? timeOf(a) : null);
  if (t == null) { misses.push(b.id + " («" + a + "»)"); t = b.start; } // si no se encuentra, deja el viejo
  // J-cut: la imagen entra ~0.3s antes de la palabra (se siente más natural)
  b.start = Math.max(prev ? prev.start + 0.8 : 0, +(t - 0.3).toFixed(2));
  if (b.start < 0) b.start = 0;
  prev = b;
}
// duraciones sin huecos
const AUDIO_END = +(caps[caps.length - 1].endMs / 1000).toFixed(2);
for (let i = 0; i < beats.length; i++) {
  const end = i < beats.length - 1 ? beats[i + 1].start : AUDIO_END;
  beats[i].dur = +(end - beats[i].start).toFixed(2);
}
bs.beats = beats;
fs.writeFileSync(bsPath, JSON.stringify(bs, null, 2));
console.log("re-alineado. audio_end=" + AUDIO_END + "s");
console.log("beats:", beats.map((b) => `${b.id}@${b.start}s/${b.dur}s`).join("  "));
if (misses.length) console.log("⚠ anclas no encontradas (dejé tiempo viejo):", misses.join(", "));
