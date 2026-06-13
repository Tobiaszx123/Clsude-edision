// transcribe_openai.mjs — transcribe con la API de OpenAI (whisper-1), palabra por palabra.
// Reemplazo de whisper.cpp local (crashea en esta máquina Windows: 0xC0000142).
// Salida idéntica al pipeline: public/captions.json (formato @remotion/captions) + transcript.txt
//   Uso: node transcribe_openai.mjs ["ruta/al/audio.m4a"]  (default = el de rodillas)
import fs from "fs";
import path from "path";

const envFile = path.join(process.cwd(), ".env");
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.+?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}
const KEY = process.env.OPENAI_API_KEY;
if (!KEY) { console.error("Falta OPENAI_API_KEY en .env"); process.exit(1); }

const INPUT = process.argv[2] || "C:\\Users\\tobia\\Downloads\\videos claude\\videoplayback.m4a";
if (!fs.existsSync(INPUT)) { console.error("No existe el audio:", INPUT); process.exit(1); }
const buf = fs.readFileSync(INPUT);
const sizeMB = buf.length / 1e6;
console.log(`Audio: ${INPUT} (${sizeMB.toFixed(1)} MB)`);
if (sizeMB > 25) { console.error("Audio > 25MB (límite OpenAI). Comprimí o partí el audio primero."); process.exit(1); }

const form = new FormData();
form.append("file", new Blob([buf]), path.basename(INPUT));
form.append("model", "whisper-1");
form.append("response_format", "verbose_json");
form.append("timestamp_granularities[]", "word");
form.append("language", "es");

console.log("Transcribiendo con OpenAI (whisper-1)... puede tardar ~1 min");
const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
  method: "POST",
  headers: { Authorization: `Bearer ${KEY}` },
  body: form,
});
if (!res.ok) { console.error("API error", res.status, (await res.text()).slice(0, 500)); process.exit(1); }
const data = await res.json();

const words = data.words || [];
const captions = words.map((w) => ({
  text: " " + w.word,
  startMs: Math.round(w.start * 1000),
  endMs: Math.round(w.end * 1000),
  timestampMs: Math.round(((w.start + w.end) / 2) * 1000),
  confidence: null,
}));
// argv[3] = slug de salida opcional → public/captions_<slug>.json + transcript_<slug>.txt
const slug = process.argv[3];
const capOut = slug ? path.join(process.cwd(), "public", `captions_${slug}.json`) : path.join(process.cwd(), "public", "captions.json");
const txtOut = slug ? path.join(process.cwd(), `transcript_${slug}.txt`) : path.join(process.cwd(), "transcript.txt");
fs.writeFileSync(capOut, JSON.stringify(captions, null, 2));
fs.writeFileSync(txtOut, (data.text || "").trim());

const dur = words.length ? words[words.length - 1].end : 0;
console.log(`\n=== LISTO === ${captions.length} palabras · ${(dur/60).toFixed(1)} min · ${capOut} + ${txtOut}`);
console.log("\n=== TRANSCRIPT (primeros 1500 chars) ===\n");
console.log((data.text || "").trim().slice(0, 1500));
