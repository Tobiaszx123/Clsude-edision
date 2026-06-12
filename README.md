# doc-broll-video — proyecto Remotion (starter kit)

Kit completo para editar **videos documentales en español** estilo "flujo continuo de
footage real + IA" en **Remotion**: componentes reutilizables + scripts del flujo +
render farm gratis. Limpio de claves: poné las tuyas.

## Qué incluye
- **`src/VideoEdit/`** — todos los componentes/escenas reutilizables (RawShot, JourneyCanvas,
  FloatingInsert, AvatarLayer, AvatarPresentation, KineticHeadline, AgedDoc, BarCompare,
  CrossSection, ProcessSteps, Checklist, RuleNumberScene, AnnotatedImage, CalloutMark,
  InfiniteZoom, ImpactReveal, StatBig, etc.), el `theme.ts` (paleta + fuente), el kit
  `mograph/`, helpers (`lib/`) y demos.
- **`beatsheet.mjs`** — el corazón del flujo: de UN `beatsheet/<slug>.json` deriva las
  listas de assets a generar + el archivo de cues (`cues_<slug>.gen.tsx`).
- **Generadores**: `gen_deapi.mjs` (FLUX img + LTX video, deAPI), `gen_video.mjs`,
  `gen_images.mjs` (gpt-image-2, diagramas), `fetchstock.mjs` (Pexels, video real),
  `fetch_real.mjs` (Wikimedia/Wikidata/Openverse, archivo histórico, SIN key), `preblur.mjs`.
- **`transcribe.mjs`** — whisper.cpp (transcripción ES con timestamps por palabra).
- **Render farm gratis** — `scripts/farm.mjs` + `.github/workflows/render.yml` + `RENDER_FARM.md`.
- **`SKILL.md`** — la guía completa (reglas, flujo, prompts, retención, layouts, 4 reglas duras).
- **`COMPONENTS.md`** — cheatsheet de props + los `kind` que soporta el beatsheet.

## Setup
1. `npm install`
2. `cp .env.example .env` y poné **tus** claves:
   - `DEAPI_API_KEY` (deAPI.ai — imágenes/clips, barato)
   - `OPENAI_API_KEY` (diagramas gpt-image-2)
   - `PEXELS_API_KEY` (video de stock real, gratis en pexels.com/api)
   - `GH_TOKEN` (opcional, para el render farm con `gh`)
   - Wikimedia/Wikidata/Openverse no requieren key.
3. `npx remotion studio` → ya andan los demos `Mograph` / `MographShowcase`.

## Flujo para un video nuevo (resumen — ver SKILL.md para el detalle)
1. Poné el video en `public/video.mp4` → `node transcribe.mjs` (genera captions).
2. Caminá el guion y escribí `beatsheet/<slug>.json` (cada beat = un componente + su prompt).
3. `node beatsheet.mjs beatsheet/<slug>.json` → emite prompts + clips + `src/VideoEdit/cues_<slug>.gen.tsx`.
4. Generá TODA la librería en una corrida: `node gen_deapi.mjs ...`, `gen_video.mjs`,
   `gen_images.mjs`, `fetchstock.mjs`, `fetch_real.mjs`.
5. Creá `src/VideoEdit/Main_<slug>.tsx` (importa los cues) y registralo en `src/Root.tsx`.
6. `node preblur.mjs` y revisá en `npx remotion studio`.
7. Render: `npx remotion render <Comp> out/<slug>.mp4 --concurrency=16`
   o el render farm gratis (ver `RENDER_FARM.md`).

> Los scripts leen las claves de variables de entorno / `.env`. No hay ninguna clave
> ajena en este bundle. El `public/` viene vacío (vos generás tus assets).
