# Clips reales de YouTube — pipeline local (sin Vision)

Saca clips reales de YouTube, los puntúa y elige los mejores para usarlos como b-roll,
**sin modelos de visión** (OCR clásico + análisis de píxeles) y **todo local**. El render
pesado sigue yendo a GitHub Actions; esto solo prepara los assets.

> ⚠️ **Copyright:** usar metraje de otros canales en un canal monetizado puede generar
> reclamos de Content ID / strikes. El usuario está al tanto y eligió este camino. Mantené
> los clips cortos y combinados con la mayoría de b-roll generado (FLUX/LTX).

## Herramientas (ya instaladas, una sola vez)
- `scripts/bin/yt-dlp.exe` — binario standalone (no necesita Python).
- ffmpeg/ffprobe = los de Remotion (`node_modules/@remotion/compositor-win32-x64-msvc/`).
  ⚠ Es un build **recortado**: NO tiene `lavfi` ni el filtro `setsar` (por eso normalizamos
  con `-aspect 16:9` en vez de `setsar`). `scale`/`crop`/`force_original_aspect_ratio` sí están.
- npm: `tesseract.js` (OCR WASM) + `jimp` (píxeles).
- Node 24 **no puede spawnear `npx`** (EINVAL) → los scripts spawnean los `.exe` directo.

## Uso
```
node scripts/clips/run.mjs clips_plan.json [--candidates=6] [--keep-src] [--outdir=public/vid]
```
`clips_plan.json`:
```json
{ "items": [
  { "id": "ajo_diente",
    "query": "planting garlic clove in garden soil close up",
    "keywords": ["garlic","clove","plant","soil","grow"],
    "n": 1, "lang": "en" }
]}
```
Sale `public/vid/<id>.mp4` (1536×864, 16:9, sin audio) + `public/vid/realclips.json`
(manifest con score, fuente, canal, timestamp — para registro/atribución). Después, en la
edición, una RawShot apunta a `vid/<id>.mp4` igual que a un clip generado.

## Qué hace (5 etapas)
1. **Buscar** — `yt-dlp ytsearchN` baja SOLO subtítulos + metadata (sin video).
2. **Localizar** — parsea los subtítulos, encuentra la ventana donde se dicen las `keywords`.
3. **Bajar** — `--download-sections` baja SOLO esa ventana (~8-12s) a ≤720p (mínimo disco).
4. **Puntuar** (0-100, sin Vision):
   - **relevancia** = cuántas keywords aparecen en la ventana.
   - **penalización de texto** = nº de palabras que el OCR (tesseract.js) lee en 3 frames
     (mucho texto en pantalla → baja).
   - **marca de agua**: (a) OCR detecta marcas conocidas (`National Geographic`, `Getty`,
     `Shutterstock`, `Subscribe`, `@handle`…) → penalización fuerte; (b) heurística de
     **esquina estática** con jimp (varianza temporal baja + bordes = logo fijo).
5. **Elegir** — el de mayor score por item → normaliza a 16:9 y escribe el manifest.

## Tuning
- `--candidates=N` candidatos por búsqueda (default 6).
- `--keep-src` no borra las descargas crudas (debug). Por defecto las borra (disco).
- Marcas en `scripts/clips/util.mjs` → `WATERMARK_BRANDS` (agregá las que quieras vetar).
- Pesos del score en `scripts/clips/run.mjs` → `scoreClip` (rel 0.55 / texto 0.25 / wm 0.20).

## ★ ESTÁNDAR OBLIGATORIO POR VIDEO (jun 2026, pedido del usuario)
Para CADA video (cada avatar que sube a `para editar`):
1. **Transcribir su audio** (modelo `medium` — large-v3 CRASHEA en esta PC de 2 núcleos, exit 0xC0000142) → PASO 1, nunca saltear. Verificar que el texto coincida con el tema del audio (si crashea, queda el transcript viejo).
2. **Generar SUS PROPIOS assets** (imágenes/diagramas) del tema del audio — NUNCA reusar de otro video.
3. **Buscar SUS PROPIOS clips** con `run.mjs` (búsqueda fresca por video, no reusar descargas).
4. **VERIFICAR VISUALMENTE cada clip** antes de usarlo: extraer 1 frame y confirmar que MUESTRA lo
   que se narra (el pipeline puntúa por lo que se DICE en el origen, no por lo que se VE → hay que
   chequear). Si ningún clip calza, usar la imagen generada (que sí calza por construcción).
5. Cada asset debe corresponder EXACTAMENTE a lo que se dice en ese segundo. Si el audio es de la
   botella, NADA de tomate de fondo. Coherencia audio↔imagen es lo primero.
