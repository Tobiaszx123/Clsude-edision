---
name: doc-broll-video
description: >-
  Edit the user's Spanish (Argentine voice) documentary-style YouTube videos in
  Remotion for the "real footage" niches: gardening/home-remedy/construction
  (sometimes with an on-camera avatar/presenter), retirement/finance-for-seniors,
  and any niche whose identity is built on a near-continuous stream of REAL,
  casual, documentary photos + short animated clips behind the narration. Use
  this skill whenever the user wants to edit one of these videos, mentions
  termitas/borax/jardinería/casero/jubilados/avatar, asks for "imágenes reales"
  b-roll, or hands you a transcript/voiceover to turn into a dense real-footage
  video. THE NON-NEGOTIABLE FIRST STEP this skill enforces: generate HUNDREDS of
  niche-accurate images + clips with the deAPI.ai API BEFORE touching the edit.
---

# Documentary B-roll Video (real images + clips niche)

Edit dense, retention-optimized Spanish documentary videos in **Remotion** where
the channel's identity is a **near-continuous stream of real, casual, handheld
documentary photos and short animated clips** running behind the narration. This
is the OPPOSITE of the minimalist stickman niche: here density of *real imagery*
is the whole point.

Reference project: `C:\Users\<USER>\Downloads\video2` (Remotion 4 + whisper.cpp +
the deAPI scripts `gen_deapi.mjs` / `gen_video.mjs` + the `RawShot` scene).

## ★ THE MOST IMPORTANT RULE — DO THIS FIRST, BEFORE ANY EDITING ★

**In this niche, the single most important thing — and the very first thing you
do before editing a single scene — is to GENERATE HUNDREDS of niche-accurate
images and clips.** The user has stated this explicitly and repeatedly. Image
volume IS the channel identity and the #1 retention driver.

Do NOT start wiring scenes, designing cards, or rendering until you have a large
library of real imagery generated. Concretely:

1. **Read the transcript first** (`public/captions_*.json`, word-level Whisper).
   Walk it top to bottom and list EVERY concrete noun/action/object/place the
   narration mentions — "camión fumigador", "una reina termita", "fuelle de
   polvo", "fila de hormigas", "destornillador en la madera", etc.
2. **Map one image (often a clip) to each concrete moment**, and also to the
   *process* steps (show the thing AND the how-to, step by step).
3. **Target volume: 100-200 images per video** (~US$0.004 each → ~US$0.40-0.80
   total, 0 Claude vision tokens — see "Token budget"). The **first minute is
   sacred**: pack it with a NEW animated image every ~2-4 seconds following what
   the avatar says — that's where retention is won or lost.
4. **Animate the key moments** with img2video (LTX): anything with motion (spray
   drifting, powder puffing, ants marching, termites moving, liquid stirring).
5. Only AFTER the library exists do you wire scenes and edit.

If you find yourself editing scenes against a thin image set, STOP and go generate
more first.

> **And never repeat an image.** Every cue gets its OWN generated asset — that is
> WHY the generate-hundreds-first step is non-negotiable. If you're tempted to reuse
> a photo/clip, generate a new one instead.

## ★★ 4 REGLAS DURAS — feedback del usuario (video Bisontes, jun 2026) ★★

El usuario revisó un video y marcó CUATRO problemas a no repetir nunca. Son tan
importantes como la regla #1. Aplicalas en TODOS los videos del nicho:

1. **NUNCA durations uniformes — varía el tiempo de cada toma.** El error: que casi
   todas las tomas duren ~lo mismo (ej. todas ~4s) → se siente PREDECIBLE y robótico.
   La duración es expresiva: tomas de relleno 2.5-3.5s, tomas que importan se SOSTIENEN
   **7-9 segundos** (kept alive por slow-mo / Ken-Burns / un kicker que tipea). Mezclá
   cortas y largas a propósito (ritmo en olas, ver R7). ⚠ OJO con `thinning`/auto-tiling
   por gap: tienden a igualar duraciones — NO dejes que aplane todo. Asigná holds largos
   a mano en los beats clave (revelaciones, emoción, la mejor foto/clip, el cierre).

2. **Faltan COMPONENTES, sobre todo al inicio y en cifras/lugares.** El error: el arranque
   y los datos quedaron como puras fotos full-bleed. CADA cifra → `StatBig`/`CountUp`/
   `DataViz` o un `ImpactReveal`. CADA lugar nombrado → `JourneyCanvas`/mapa (`MapReveal`
   del kit mograph, o un mapa dibujado como `worldImage`) + `LocationPin`. CADA cronología
   (años, "1870→1890", "28→960→544") → una **línea de tiempo** (`Timeline` mograph o un
   journey timeline-dolly). El PRIMER MINUTO especialmente: no lo dejes en fotos sueltas,
   meté el componente que corresponde a cada idea (número, mapa, timeline, comparación).
   Al caminar el guion, por cada sustantivo preguntá "¿esto es cifra/lugar/proceso/
   cronología/comparación?" y asigná el componente, no una foto.

3. **El avatar NO puede usar siempre las mismas 2 posiciones.** El error: alternar solo
   `full` y `cornerTR` (esquina sup-der). HAY QUE VARIAR MUCHO: `left`/`right` (recuadro
   grande a un lado con contenido al otro), las CUATRO esquinas (cornerTR/TL/BR/BL),
   distintos TAMAÑOS de PiP, y entradas variadas. Si `AvatarLayer` no tiene esos modos,
   AGREGALOS (cornerTL/cornerBR/cornerBL + un `scale` por ventana). Repartí las posiciones
   a lo largo del video para que ninguna se repita demasiado seguida — el espectador no
   debe poder predecir dónde aparece.

4. **★ MÁXIMA DIVERSIDAD DE EDICIÓN — usá casi TODOS los componentes, y creá nuevos.**
   Meta-regla: en cada video tratá de tocar la mayor variedad posible del catálogo
   (RawShot, AnnotatedImage, CalloutMark, KineticQuote, KineticHeadline, AgedDoc,
   SplitList, ChipsCluster, StatBig, BarCompare, CrossSection, ProcessSteps, Checklist,
   RuleNumberScene, DiagramBoard/AvatarPresentation, JourneyCanvas, InfiniteZoom,
   ImpactReveal, FloatingInsert, DepthText, los del kit **mograph**: Timeline, MapReveal,
   LocationPin, RouteMap, RangeCounter, DrawnCallout, etc.) — y cuando un beat lo pida,
   CREÁ un componente a medida. Si terminás un video usando solo 4-5 componentes, está MAL.
   La riqueza visual = variedad de FORMATOS, no solo variedad de fotos. (Ver
   [[feedback_video_editor_mindset]]: el kit es paleta, no jaula.)

## ★ BRAND — earthy vintage serif (ONE look, do not improvise) ★

This niche (gardening / construction / home-remedy / homestead / retirement) has
ONE locked visual identity, matching the competitor. The user set this explicitly
and asked it be marked HARD so it never has to be re-explained in a new chat. Both
the old looks are **deprecated — do not use them**:

- ❌ **NO modern sans (Montserrat/Inter/Helvetica).** Wrong for the niche.
- ❌ **NO dark graphite + gold "cold" palette.** Removed from `theme.ts` at the root.

✅ **Typography = CLASSIC SERIF with old-style numerals.** Implemented in
`src/VideoEdit/theme.ts`: `FONT_STACK` = **EB Garamond** (`@remotion/google-fonts/EBGaramond`,
exported as `SERIF`). The old-style (text-figure) numerals give the archival "1903"
look the competitor uses. Everything reads through `FONT_STACK` — headlines, body,
chips, captions — so it's already global. Don't reintroduce a sans.

✅ **Palette = earthy / vintage / sun-faded** (the single `COLORS` = `PALETTE_EARTH`
in `theme.ts`). Muted, natural, archival:
- `bg0 #EFE7D3` cream parchment · `bg1 #E6DCC4` · `bg2 #D8CBAD` aged-paper card
- `text/ink #2A2620` dark warm-brown ink
- `accent #7C8A5A` muted sage/herb green (primary highlight) · `accentSoft #AEBA8C`
- `amber #A9794A` sepia/tobacco · `cold #6F8478` muted eucalyptus (secondary)
- `danger #B0503C` faded terracotta · `good #6E8B47` garden green
- `mode: "light"` — cards are warm parchment (`glass("light")` is now the default),
  not frosted neon glass.

✅ **The palette ALSO drives the gpt-image-2 diagram prompts** for brand consistency.
Every diagram/lámina prompt must request this world: end diagram prompts with
something like *"muted sage green, cream parchment background, dark warm-brown ink
linework, sepia accents, vintage botanical / archival textbook illustration look,
slightly aged paper texture"*. So footage, cards, type AND diagrams all read as one
brand. (Photo/RawShot prompts keep the realism format below — the earthy palette is
mostly carried there by the "natural soft daylight, muted colors" wording.)

If a future video imports `COLORS`/`FONT_STACK`, it inherits the brand automatically;
do NOT add a per-video palette override unless the user asks for a different niche.

## How to generate (deAPI.ai — cheap, async)

Full reference lives in the user's memory `reference_deapi.md`. Essentials:

- **Image model**: `Flux_2_Klein_4B_BF16` (FLUX.2 Klein). 1536x832 (16:9), steps
  fixed=4. The API's `guidance`/`negative_prompt` fields are IGNORED — all realism
  control is in the positive-prompt wording.
- **Video model**: `Ltxv_13B_0_9_8_Distilled_FP8` (LTX 0.9.8). img2video only
  (text2video is worse): generate the image first, then animate it. 768x432,
  fps=30, frames 30-120 (120=4s).
- **Scripts** (in video2): `node gen_deapi.mjs public/img/prompts.json` (batch
  text→image, skips existing, writes img_index.json) and `node gen_video.mjs
  public/vid/clips.json` (batch image→video; clips.json = `[{name,image,prompt,
  frames?}]`, "image" = png name in public/img without extension).
- **API key inline** (not .env): `DEAPI_API_KEY='<TU_DEAPI_API_KEY>'`.
- **429 throttle**: deAPI rate-limits by time window counting ALL requests
  (submit + polls). Generate in batch with a self-retrying bash loop: re-run the
  gen script (it skips existing files) with `sleep 75` cooldowns between passes
  until the missing count hits 0.

## ★ The winning prompt format (validated by the user) ★

Every image prompt MUST follow this shape — it produces the best realism:

1. **Opener**: `Realistic handheld 16:9 documentary-style video frame [of the place/scene]`.
2. **Detailed SPATIAL description**: what object is where (left / center-left /
   right / below / background), exact colors, the TEXT on labels/packaging,
   materials ("wrinkled reflective plastic", "weathered gray vertical boards").
   For PEOPLE/the avatar (no reference image can be attached): describe age,
   face, hair, clothing, posture, what they hold — in detail, verbatim and
   consistent across every prompt that features them.
3. **Concrete lighting**: e.g. "indoor fluorescent store lighting" / "natural
   soft outdoor daylight, slightly overcast, muted colors".
4. **Imperfection tags (the realism key)**: "realistic imperfect handheld camera
   angle, slightly tilted frame, practical documentary look, no cinematic
   lighting, no perfect studio setup, natural video compression, low-resolution
   YouTube documentary screenshot look, casual DIY aesthetic, not staged, ultra
   realistic".
5. **★ NEGATIVE PROMPT INLINE ★**: even though the API `negative_prompt` field is
   ignored, appending the negatives as TEXT at the end of the positive prompt
   WORKS. Format literally:
   `Negative prompt: clean studio product photo, perfect packaging, cinematic
   lighting, overly saturated colors, fake labels, cartoon, CGI, 3D render,
   luxury advertisement, sharp perfect text, dramatic shadows, watermark, logo
   overlay, perfect symmetrical face, extra fingers, distorted hands, blurry
   face, fantasy style.` Adapt the negative list to the subject (product vs
   person vs landscape).

## Showing the imagery: RawShot, RAW and full-bleed

Use the `RawShot` scene (`src/VideoEdit/scenes/RawShot.tsx`) for this imagery:
full-bleed, CLEAN, **no darkening text card over it** (the user explicitly does
NOT want text that obscures/darkens the photo). `RawShot` accepts both
`src="img/name.png"` and `src="vid/name.mp4"` (the backdrop is video-aware via
`Media`). Optional tiny corner kicker only; default is fully raw.

- **All clips play in SLOW MOTION** by default (`Media` speed=0.6) — LTX clips are
  short, slow-mo makes the motion smooth and "lasts" longer. This is a standing
  user rule; do not override to real speed without being asked.
- Wire RawShots into the timeline without disturbing existing cue timing using
  REPLACE (swap a cue's element) or SUBDIVIDE (shorten the original cue + prepend
  a short non-overlapping RawShot cue in the freed window).

### ★ NO entrance animations on photos/clips; NO transitions BETWEEN consecutive shots ★ (user rule)

Two standing rules the user gave after reviewing — both about runs of real imagery:

1. **No entrance/intro animation on the image itself.** Do NOT scale-in / fade-in /
   zoom-reveal a RawShot photo or clip. The picture should just BE there (a clean
   hard cut to the full-bleed frame). Entrance animations on the photos "queda mal".
   Keep the gentle internal Ken-Burns drift if anything, but no reveal-on-enter.
2. **Consecutive image/video shots must HARD-CUT — no transition between them.**
   Transitions (the avatar-split → photo wipe/fade, section stingers, etc.) are fine
   *between distinct scene TYPES / sections*, but when several RawShots (photos
   and/or clips) play back-to-back, do NOT put a transition between each one. The
   bug the user saw: each transition flashes the avatar in and back out, so a run of
   photos makes the avatar "appear and disappear constantly" — looks bad. Within a
   run of consecutive real-imagery shots: straight cuts only, transition only at the
   boundary where you ENTER and EXIT the run.

So a dense minute-1 stream of 15-20 RawShots = clean straight cuts, zero entrance
animation, zero per-shot transitions; reserve motion/transitions for section
boundaries and avatar↔broll handoffs.

> **⚙ Enforced in code (no excuse to regress):** `SceneFrame` tiene un flag `noReveal`
> y `RawShot` lo pasa SIEMPRE → 0 fade/blur de entrada **y de salida** (antes `useReveal`
> metía un blur 0→14 + fade en CADA escena = una "transición de salida con brillo" en
> cada foto, que el usuario marcó como bug). Solo queda el Ken-Burns interno (movimiento
> vivo, NO transición). Si creás un componente de imagen nuevo, NO uses el reveal de
> entrada/salida para fotos/clips — corte duro.

### ⚠ Gotchas de render ya resueltos (no re-introducir)
- **Avatar PiP en negro (marco sin avatar):** `AvatarPresentation` usaba `<Video>` de
  `@remotion/media` con `trimBefore={avatarFrom}` para lipsync del recuadro chico → con
  ese offset (y en el render distribuido) salía NEGRO. Fix: usar **`OffthreadVideo` de
  remotion core** con `trimBefore`. Para cualquier video con SEEK a un frame global,
  preferí `OffthreadVideo` (seek robusto), no el `<Video>` de @remotion/media.

## ★ Editorial rhythm & anti-chaos (editor's rules) ★

Density ≠ fast cutting. The failure mode (user reviewed and flagged it) is
"machine-gun": 1 image per noun, hard cut every ~2.5s at a flat rate, avatar
flashing in/out between beats. The brain reads that as a *glitch*, not as richness.
Good density = *something is always happening*, but with **rhythm and hierarchy**.
Apply these on EVERY video in this niche:

1. **Cut to the SENTENCE, not the word.** One narrated idea = one "visual unit"
   (which can be a single held photo OR a 3-shot mini-sequence). Never cut in the
   middle of a spoken sentence. Map the edit to the script's grammar.

2. **Rhythm in WAVES, not a flat rate.** Tension–release retains; a constant 2.5s
   cadence fatigues.
   - **HOLD** key shots 4-6s, kept alive by *internal* motion (slow-mo clip, subtle
     Ken-Burns drift, a kicker that types in) — never by a cut. Holding ≠ static.
   - **BURST** only at emphasis moments: 3 quick shots (rule of three — feels
     musical) then **LAND** on a held shot. Burst → landing, never endless burst.

3. **Avatar is the ANCHOR, not a cutaway.** This is the fix for "appears and
   disappears constantly." The avatar OPENS a thought and stays a beat, then hands
   off to an **uninterrupted run of b-roll** and does NOT return until the topic
   changes. No ping-pong avatar↔photo every line.
   > Pattern: `Avatar (introduces topic) → 3-5 real shots back-to-back (straight
   > cuts, no transitions) → Avatar returns (next topic)`.

4. **Group b-roll into thematic PODS.** Instead of loose inventory-style stray
   photos, group 3-4 images of the SAME sub-topic and order them with **visual
   continuity** (matching color / framing / angle) so it feels designed. Inside a
   pod use a tiny grammar the eye understands:
   > **Establish** (wide) → **Detail** (macro) → **Payoff** (avatar reaction or text).

5. **Retention micro-tricks (deliberate, not constant):**
   - **Open loop in the first 5s**: a promise/question that only resolves later
     ("esta viga la pusieron en 1962… y mirá cómo está hoy").
   - **Tease → reveal**: name it BEFORE you show it. The reveal retains more than
     showing immediately.
   - **Pattern interrupt every ~30-40s**: a hard zoom, a section color change, a
     sound hit — FEW and on purpose, never every beat.
   - **Kicker discipline**: a corner caption only when it names something the viewer
     can't infer from the image. A different cartelito on every shot = noise.

6. **Sound glues fast cuts.** A soft whoosh ONLY on section changes (not every cut)
   + a low ambient bed makes quick cuts read as intentional instead of nervous. SFX
   live in `public/sfx/` (see `reference_video_sfx.md`).

7. **Section color-coding.** Use the `hue`/accent system so each section has a
   consistent tint → the viewer always knows "where am I", which kills the chaos
   feeling even at high density.

8. **J-cut / L-cut (audio leads or trails the picture)** — user's favorite pro move.
   Don't cut audio and video on the exact same frame. Let the NEXT idea's narration
   start ~0.3-0.5s BEFORE its visual appears (J-cut), or let the current shot hold a
   beat AFTER the narration moved on (L-cut). In the cue model: start the b-roll cue
   slightly later than, or earlier than, the word it illustrates (offset start by
   ~9-15 frames) instead of snapping every cut to the word boundary. This single
   thing is what makes the edit feel professionally "woven" instead of robotic.

9. **Match cut / cut on action** — user's favorite. Order consecutive shots so they
   share a SHAPE or MOTION across the cut: powder pouring → powder landing in the
   box; hand reaching → hand on the wood; a round lid → a round colony. The shared
   form hides the cut, so a run of photos reads as one continuous sequence instead
   of an inventory. Pick the generation prompts and the shot ORDER with this in mind.

One-liner to remember: **fewer but more intentional cuts** — anchoring avatar,
b-roll in continuity pods, rhythm in waves, hold what matters. Just as *full*, far
less chaotic.

## ★ The RETENTION CURVE (structure every video to this shape) ★

Density keeps a viewer; STRUCTURE keeps them to the end. Lay every video on this
arc (user approved encoding it). It's the macro-rhythm that the wave-cutting above
serves locally:

- **0:00–0:15 — HOOK, fastest part of the whole video.** Cold-open on the single
  most striking image/clip (no logo, no "hoy les voy a contar"). State the payoff
  and open a loop in the first sentence ("esta viga lleva 60 años… y por dentro está
  así"). Pack minute-one densest (new image every ~2-4s) — this is where retention
  is won or lost. Promise what they'll get by the end.
- **0:15–1:00 — SET-UP / stakes.** Slightly slow the cut rate, let the avatar anchor
  the premise, but keep an image behind every idea. Plant the question the video
  answers.
- **1:00 → body — BREATHE in waves.** This is the bulk: thematic pods, hold key shots
  4-6s, burst-then-land. Use `AvatarPresentation` diagram boards for every mechanism.
  Vary the section hue/accent so progress is felt.
- **Every ~3-4 min — RE-HOOK (open a new loop before closing the old one).** Attention
  sags on a flat middle; counter it with a pattern interrupt + a fresh promise/tease
  ("pero hay un error que arruina todo esto — ahora lo vemos"). Each section should
  end by teasing the next so there's never a clean "stop" point.
- **Climax — PAYOFF the original loop.** Deliver the thing promised at 0:00 as the
  visual+narrative peak (best diagram, before/after, the reveal). This is the emotional
  high; give it room (a held shot, a beat of near-silence then a sound hit).
- **Last ~15s — resolve + soft forward-hook.** Quick recap value, then point to the
  next video / a related loop. No long dead outro — the curve should never flatline
  before the end card.

Rule of thumb: **every ~30-40s the viewer should get a small reward (reveal, payoff,
pattern interrupt) and every ~3-4 min a NEW open loop.** Map these onto the beatsheet
as you write it, not after.

## ★ Layouts — the two the user loves, USE THEM A LOT ★

Two avatar layouts the user explicitly wants leaned on much more (they retain and
explain better than plain full-screen talking head or loose b-roll):

1. **Split: avatar on one side, imagery on the other.** This is what the competition
   does and the user likes it. In this project it already exists as a GLOBAL layer:
   `ReframedVideo` (in `Main_termitas.tsx`) shows the talking-head full-screen, and
   during each `REFRAME` window it springs down to a box on the RIGHT (Wt≈720,
   Ht≈980) freeing the LEFT area for the b-roll/diagram cue. So to "split", you add a
   REFRAME window for that time-range and place the content cue in the freed half.
   (Competition uses avatar-LEFT/image-right; mirroring the box X is a one-line tweak
   if the user wants that orientation.)

2. **★ Diagram board — `AvatarPresentation` — THE BEST COMPONENT, use it constantly ★**
   Avatar shrinks to a small floating box TOP-RIGHT while a big beautiful
   **gpt-image-2 diagram/lámina** plays in the main area (Ken-Burns + crossfade
   between `slides[]`, slide dots, caption chip). The user says this is the single
   most effective thing in the niche — "la gente entiende SUPER bien gracias a los
   diagramas." Currently used only ~once per video; it should appear MANY times,
   ideally once per concept that benefits from a visual explanation (how borax
   reaches the colony, the moisture cycle, the trophallaxis chain, anatomy of a beam,
   a step-by-step process, a before/after). Props:
   `<AvatarPresentation durationInFrames slides={[{image,title,note},...]}
   avatar="termitas_opt.mp4" avatarFrom={sec(START)} eyebrow hue accent />`.
   `avatarFrom={sec(START)}` keeps the small box lip-synced to the narration. Each
   `slide.image` is a gpt-image-2 lámina (clean explanatory diagram, NOT a photo) —
   generate these as part of the batch.

**Diagrams = a first-class asset type now, not an afterthought.** When walking the
transcript, for every idea that is a *mechanism / process / comparison / structure*,
plan an `AvatarPresentation` board with a purpose-built gpt-image-2 diagram, the same
way you plan a RawShot for every concrete object. Explanatory diagrams + the avatar
corner is the channel's strongest comprehension+retention device.

## ★ Component catalog — REUSE these, don't reinvent ★

`video2/src/VideoEdit/scenes/` already has a deep, brand-themed (read `COLORS`/
`FONT_STACK`) library. Before building anything new, pick from here:

**Real imagery / b-roll (the bread & butter):**
- `RawShot` — full-bleed real photo/clip, raw, no darkening card. The default.
- `AnnotatedImage` — real photo with drawn labels/arrows pointing at parts.
- `CalloutMark` — handwritten number/date callout over a vintage photo (uses Caveat
  hand font ON PURPOSE — it's a marker annotation, not body text).

**Avatar layouts (the two the user loves — see above):**
- `AvatarPresentation` — diagram board, avatar top-right. THE gem; use constantly.
- `SplitList` / `ReframeContent` / `TextCardReveal` — left content while the presenter
  reframes to the right (pair with a REFRAME window).

**Text / typography (brand = serif now):**
- `AgedDoc` — serif text on an aged book/parchment page + a soft highlighter that
  draws in after `markDelay`. **Brand-native** (matches the competitor's aged-page
  look); great for facts, quotes, archival "1903"-style beats. Now uses `FONT_STACK`.
- `KineticQuote` — sentence in word-by-word; `*word*` lands in accent + soft glow.
- `KineticHeadline` — a punchline that lands word-by-word with weight.

**Diagrams / explainers (feed gpt-image-2 láminas into AvatarPresentation, or use):**
- `CrossSection` — layered cutaway (anatomy of a wall/beam/soil profile).
- `HeatFlowDiagram` — animated physics diagram (built for the cold niche; the PATTERN
  is reusable for any "flow" mechanism).
- `ProcessSteps` — numbered how-to timeline. `Checklist` — checklist / shopping-list
  card (the "homemade/honest" signature). `ActionCard` — green "what to do" payoff.

**Data / numbers:** `StatBig`, `CountUp`, `DataViz` (self-drawing counter),
`BarCompare`, `OptionCompare`, `ValueJourney` (travelling line graph).

**Structure / framing:** `CharacterIntro` (documentary lower-third), `RuleNumberScene`
(big number card), `HookGrid` (open-loop hook, all items in miniature), `ClosingScene`
(cinematic push-in outro), `FloatingCardsScene` (row of 3D cards, focus one).

### ⚠ Light-mode brand caveat (legacy dark-mode scenes)
The brand flip made `COLORS` a LIGHT (cream) palette. Token-driven components adapt
automatically (`COLORS.text` = dark brown reads correctly on cream). BUT several
legacy scenes built for the OLD dark niche have **hardcoded** white text / dark
surfaces (`#fff`, `rgba(255,255,255,…)`, near-black bgs) that now break on cream.
Already fixed: `TechBackground` (ink grid + warm vignette), `AgedDoc`,
`AvatarPresentation` (caption chip → dark chip + cream text). **When you REUSE any
other legacy scene** (HeatFlowDiagram, HookGrid, RuleNumberScene, OptionCompare,
DataViz, ReframeContent, etc.), grep it for hardcoded `#fff`/`255,255,255`/near-black
and swap to `COLORS.*` tokens or a dark-ink-chip-with-cream-text pattern BEFORE
shipping. Rule of thumb: dark text on cream paper; for chips/captions over photos,
a dark ink chip with `COLORS.bg0` (cream) text.

## ★ Production flow — do it in ONE pass, optimized (user rule) ★

The user wants the WHOLE video built before rendering (renders take ~30-60 min) and
ALL images generated in ONE batch (generating in parts is the #1 time-sink). Order:

### ★ The `beatsheet.mjs` pipeline — ONE source of truth (video2) ★

`beatsheet.mjs` (in video2 root) is THE optimization that kills both chaos and
double-work. You write ONE `beatsheet/<video>.json` describing every beat (timing +
which component + its props + the GEN PROMPT for that beat's asset), and the script
derives all three downstream artifacts so they can never drift:
- `public/img/prompts_<video>.json` + `public/vid/clips_<video>.json` (dedup'd) — feed
  straight into `gen_deapi.mjs` / `gen_video.mjs` (one batch, all assets).
- `src/VideoEdit/cues_<video>.gen.tsx` — `export const CUES` + `REFRAME`, imports only
  the components used; `Main_<video>.tsx` just does `import { CUES, REFRAME } from
  "./cues_<video>.gen"`. Validated: emitted TSX compiles clean under tsc.

Beat `kind`s supported: `raw` (RawShot photo/clip), `diagram` (AvatarPresentation
board — the gem), `quote` (KineticQuote, `*word*` = highlighted), `chips`
(ChipsCluster), `splitlist` (SplitList, `palette:"A|G|D|B"`), `talk` (avatar
full-screen, emits no cue). Add `"reframe": true` to a non-raw beat to emit a split
REFRAME window. The script also warns on overlapping cue windows and on any
referenced asset that is neither generated nor on disk — catches timing/typo chaos
before render. Full schema is documented in the `beatsheet.mjs` header.

Order of operations:
1. **Beatsheet FIRST (before generating a single image).** Walk the transcript
   sentence by sentence and fill `beatsheet/<video>.json` — each narrated idea = one
   beat with its component, target duration, hue, and gen prompt. The beatsheet IS
   the shotlist; this is what prevents the "thin image set → improvise → chaos" spiral.
2. **Expand + generate the ENTIRE library in one batch.** `node beatsheet.mjs
   beatsheet/<video>.json`, then run `gen_deapi.mjs` / `gen_video.mjs` ONCE on the
   emitted lists (100-200 images). The gen scripts now submit many jobs in parallel
   behind a global request-gate with 429 backoff — a full batch goes in one shot,
   no 75s cooldown loops (tune `DEAPI_INFLIGHT`, `DEAPI_GAP_MS`). See "How to generate".
3. **Wire the whole edit** by importing the generated CUES/REFRAME; iterate the
   beatsheet (re-run the script) following the rhythm rules above.
4. **Render ONCE** at the end with `--concurrency=16` (machine has 16 threads; 8
   wastes half) and C:\rtmp temp relocation. If the user wants to review mid-way,
   **open Remotion Studio** (`npx remotion studio`) so they scrub it live — do NOT
   burn a 30-60 min render just for a review.

## Render (this project's required pattern)

Windows Defender races the Remotion temp dir and breaks audio mixing
(`Error opening output ...remotion-audio-mixing\0.wav`). ALWAYS relocate temp:

```
TMP='C:\rtmp' TEMP='C:\rtmp' npx remotion render <Comp> out/x.mp4 --concurrency=16 --timeout=90000
```

**Use `--concurrency=16`** (machine has 8 cores / 16 threads; Remotion's default and
the old `=8` use half the CPU). With 32 GB RAM this is safe and ~40-50% faster, zero
quality loss.

**★ PASO ESTÁNDAR antes del render: `node preblur.mjs` ★** (decisión del usuario jun 2026).
El blur a pantalla completa en vivo es lo MÁS caro por frame. `preblur.mjs` ya está
generalizado: hornea un `<name>_blur.jpg` para cada foto de `public/img/` (salta `dg_*`
diagramas y `_avatar_ref`), y `ImageBackdrop` usa ese hermano con blur=0 automáticamente
(el video mantiene blur en vivo). Pixel-idéntico, 0 pérdida, saca el gaussiano del path
por-frame. Corré SIEMPRE `node preblur.mjs` después de generar las imágenes y antes del render.

**★ ENCODE DEL AVATAR para decode rápido (estándar) ★** El decode del video del presentador
es el costo #1 e irreducible (aparece en ~55% de los frames). Al crear el `*_opt.mp4`, encodealo
con **keyframes densos + fastdecode** para que Remotion (OffthreadVideo) encuentre cada frame
más barato — cero pérdida de calidad, solo acelera la búsqueda por frame:
```
npx remotion ffmpeg -y -i "<avatar>.mp4" -c:v libx264 -preset veryfast -crf 28 \
  -g 30 -keyint_min 30 -tune fastdecode -pix_fmt yuv420p -c:a aac -b:a 128k "public/<slug>_opt.mp4"
```
(`-g 30 -keyint_min 30` = un keyframe por segundo a 30fps → seeks baratos; `-tune fastdecode`
= sin features de decode caras.) NUNCA re-encodear un `_opt.mp4` mientras un render lo está
usando (OffthreadVideo lo lee del disco por frame → lo corromperías).

**★ PARTIR EL AVATAR EN CLIPS POR VENTANA (estándar, ataca el costo #1, 0 cambio visual) ★**
El decode del avatar es ~50%+ del costo de render. En vez de UN archivo de 50 min que se
busca por frame, cortalo en **clips cortos por ventana visible** y decouplá el audio:
- **Audio de narración** = UNA pista continua `<Audio src="<slug>.wav">` en el Main (AvatarLayer
  DEJA de proveer el audio).
- **Video del avatar** = clips cortos **mudos** (`avatar_clips/<name>.mp4`) mostrados SOLO en las
  ventanas visibles, cada uno ubicado en su `from` (sincroniza solo con el audio continuo). En
  ventanas `hidden` no se decodifica NADA de video.
- Script: `split_avatar.mjs <slug>` lee `public/avatar_windows_<slug>.json`
  (`[{name,from,to}]`, solo ventanas VISIBLES) y emite los clips fast-decode. Buscar en un clip
  de ~10s es muchísimo más barato que en uno de 50 min.
- **NO cambia nada de lo que se ve/oye** (es el mismo metraje, misma posición). Requiere wirear
  `AvatarLayer` para que cada ventana use su `clip` propio + verificar el sync en Studio antes de
  rendir. Combinado con menos efectos + distribución por rangos de frames = renders cortos sin
  perder calidad.

**Render GRATIS distribuido (GitHub Actions):** para escalar sin pagar, está `RENDER_FARM.md` +
`.github/workflows/render.yml` + `scripts/farm.mjs` + `scripts/chunkmath.mjs`. Repo PÚBLICO =
minutos ilimitados; parte el video en rangos de frames en paralelo y devuelve el mp4 como
artifact (NO sube a YouTube). Un comando: `node scripts/farm.mjs <slug> <comp> <frames> [chunks] [pref]`.
El usuario NO quiere pagar (ni Lambda ni VPS); este es el camino $0. Tu PC / Oracle ARM gratis se
suman como carriles extra (NO multicuentas de GitHub — viola ToS). **PROBADO end-to-end (jun 2026)**
en `<TU_USUARIO>/<TU_REPO>`: video 24 min ≈ 12-20 min de pared, gratis (~10× vs local).
Gotchas ya resueltos (ver RENDER_FARM.md): YAML `key: {` con espacio, `AvatarLayer` deriva el wav del
src (no hardcodear), tarball incluye `public/sfx/`, y el job `stitch` instala ffmpeg (los runners no lo traen).

Otros speedups sin pérdida: pre-dimensionar assets ~1600px, cerrar Studios extra durante el
render final. NEVER bajar crf/resolución/fps/`--scale` — pierde calidad, prohibido.
Ver `reference_video_render_optimization.md`.

A 20-min 1080p render is inherently ~30-40 min (39000 frames + OffthreadVideo clip
decode); the final H.264 encode alone is several minutes. Honest ceiling: you can cut
it ~half with concurrency, not to minutes. `| tail` buffers so the log stays empty
until done — judge progress by live ffmpeg/node processes, not the log. Build the
WHOLE video first and render ONCE; never render just to review (use Studio).

## ★ CÁMARA VIVA + componentes inmersivos (proyecto `Main_estufa` — usar siempre) ★

Tras editar el video de la estufa cohete el usuario pidió que **todo se sienta vivo,
con cámara que sigue en tiempo real lo que aparece**. Esto quedó codificado como
piezas REUSABLES en `video2/src/VideoEdit/`. En el próximo video de este nicho,
USALAS — no vuelvas a hacer gráficos estáticos.

**Regla madre — FOLLOW-CAM en todo gráfico animado.** `lib/followcam.ts` exporta
`followCam({frame,fps,targets,cx,cy,...})`. Dada una lista de `targets` (cada uno
`{at:frame, x, y}`) devuelve un `transform` que: hace un **gran zoom limpio sobre
cada target al aparecer** (punch ~1.3-1.5), lo **sostiene**, **viaja** al siguiente
con leve pull-back (para ver el camino), y al final **se aleja** (`zoomOut`) para
mostrar todo. Se aplica envolviendo el contenido (SVG/divs) en un div con
`transformOrigin:"center"` y `transform:cam.transform`, dejando el TÍTULO fuera de
la cámara (fijo). Ya está cableado en: `ProcessSteps`, `ChipsCluster`, `BarCompare`,
`CrossSection`. `StatBig` hace push-in al número mientras cuenta. **Cada aterrizaje
lleva un golpe de sonido** (whoosh de aproximación + boom grave). Subí el `stagger`
de estos componentes (~1.3-1.9s) para que cada elemento tenga su beat de cámara.

**Componentes nuevos / reescritos (todos brand-native, leen `COLORS`/`FONT_STACK`):**
- **`ImpactReveal`** — beat de HOOK/revelación: imagen full-bleed con **speed-ramp**
  (zoom que acelera y frena en seco) + **oscurecido de golpe** + texto que aterriza
  (blur→nítido, scale-punch, subrayado que se dibuja) + **sub-boom grave** (`SFX.boom1/2`,
  `BOOMS[]`) + flash cálido sepia + micro camera-shake. Props: `image,setup,impact,
  impactAccent,hitAt,boom`. Úsalo en el hook y en re-hooks de sección.
- **`AvatarLayer`** — el presentador con VARIEDAD de posiciones. UNA instancia del
  video (`estufa_opt.mp4`) abarca todo el timeline y **provee el audio de la narración
  siempre** (aunque esté oculto → NO uses `<Audio>` separado). Su posición se anima por
  un cronograma `AvatarWindow[]` con modos: `full` (pantalla entera), `right`/`left`
  (recuadro grande a un lado, imagen al otro), `cornerTR` (PiP redondeado esquina sup
  der), `hidden` (solo se oye). Transiciones fade-in-place. Si el video trae un
  `*_opt.mp4` de presentador, usalo así.
  - **★ EL AVATAR NO REEMPLAZA LAS IMÁGENES ★** (duda explícita del usuario). En `cornerTR`
    el avatar es un PiP CHICO en la esquina SOBRE el b-roll, que sigue a PANTALLA COMPLETA
    detrás. Avatar frecuente **Y** muchísimas imágenes a la vez: conviven, no compiten.
    NUNCA borres cues de RawShot para "hacer lugar" al avatar — el objetivo es densidad de
    imagen real ALTA + presencia del avatar ALTA al mismo tiempo.
  - **★ FRECUENCIA — el avatar debe aparecer SEGUIDO, no en momentos aislados ★**
    (corrección del usuario). El error a evitar: que el presentador salga 3-4 veces en
    todo el video y el resto sea puro b-roll. Lo correcto: que esté PRESENTE en la mayoría
    de los tramos hablados, sobre todo en **`cornerTR` (PiP esquina)** mientras corre el
    b-roll/los gráficos — así el espectador siente que TE está hablando todo el tiempo.
    Apuntá a que el avatar sea visible en **~50-65% del video** (corner la mayor parte,
    `full` en beats personales/cierre, `right`/`left` en explicaciones con lista al lado).
    Solo `hidden` en: el ImpactReveal del hook, runs densos de fotos puras, y los DIAGRAMA
    boards (que traen su propio avatar). Poné muchas ventanas `cornerTR`, no pocas.
  - **★ EL AVATAR COMO SUJETO de algunas b-roll (identidad fuerte) ★** (pedido del usuario).
    Cuando el video usa presentador, NO toda la b-roll debe ser solo del objeto: **generá
    algunas imágenes donde aparece ÉL haciendo la acción**, y alterná objeto ↔ él-haciéndolo.
    Ej: si el guion dice "se mezcla el barro con los pies", alterná una foto del barro con
    una foto REAL de él pisando el barro; si habla de fabricar algo, una del objeto y otra
    de él armándolo. Eso le da muchísima más identidad de canal (es SU historia, no stock).
    Herramienta que YA existe: **`gen_images_ref.mjs`** + **`public/img/_avatar_ref.png`** —
    genera imágenes con SU cara (gpt-image-2 edits sobre la referencia), look handheld/
    documental, texto en español (ver memoria `reference_video_avatar_imggen.md`). Al planear
    los prompts, marcá ~20-30% de los momentos de acción como "con el avatar" y generalos por
    esa vía; el resto, objeto puro por deAPI. Mezclados, el video se siente protagonizado por él.
- **`ProcessSteps`** (reescrito) — camino **curvo flotante** (Catmull-Rom, no recta) con
  nodos que son **imágenes reales flotantes** (pasá `image` en cada `Step`) con badge
  numerado, tilt 3D y la follow-cam que hace **gran zoom a cada imagen al aparecer +
  sonido**, viaja por la línea, y abre al final. Texto plano → reemplazado por foto.
- **`FirePathDiorama`** — animación inmersiva (~16-20s): corte pseudo-3D de la estufa
  donde una **corriente de fuego viaja por todo el sistema** (boca→túnel→riser 1000°→
  banco zigzag→chimenea), cambiando de naranja a frío al enfriarse, con la cámara
  siguiendo la llama y rótulos que aparecen por parte. Patrón replicable para cualquier
  "recorrido/mecanismo" (mejor que un diagrama estático). Reemplazó al `es_diag_*` plano.
- **`TitleCardOpen`** — apertura cinematográfica: imagen en penumbra + **resplandor
  cálido que crece** (fuego prendiéndose) + brasas + título con peso. Va SOBRE la
  primera línea de narración (no corta el audio). Hand-off con fade.

**★ DIAGRAMAS EXPLICATIVOS — reglas duras (corrección del usuario) ★**
El usuario quiere VARIOS diagramas por video (no uno solo), y bien hechos. Un diagrama
es una sección EXPLICATIVA: tiene que sentirse clara y casi ESTÁTICA, no llena de efectos.
Reglas obligatorias para CADA diagrama:
1. **Avatar chico en un recuadro en la esquina superior DERECHA del diagrama** (PiP,
   muted, lip-sync con `avatarFrom` = frame global de inicio). El diagrama se genera
   DEJANDO esa esquina libre justamente para esto. Mientras hay diagrama, el `AvatarLayer`
   global va en modo `hidden` (sigue dando el audio; el visual lo pone el board).
2. **NADA de animación/zoom/follow-cam/efectos** mientras el diagrama está en pantalla.
   Hard-cut entre páginas, sin Ken-Burns. Es lo OPUESTO al follow-cam de los gráficos:
   acá la quietud ES la función (si lo llenás de movimiento, no se entiende). Dura
   **~10 segundos**; si hay que explicar más, dividilo en **varias páginas** (slides) que
   cortan secas, cada una ~8-10s.
3. **Generá los diagramas con `gpt-image-2`** (`gen_images.mjs`, 1536x1024 16:9, ~$0.005),
   NO con FLUX/deAPI (FLUX no logra el look editorial ni el texto). Mostralos con el
   componente **`DiagramBoard`** (estático + avatar esquina + páginas). Adaptá el prompt
   al tema específico de cada diagrama.
4. **Plantilla de prompt para diagramas** (seguila siempre, adaptando el contenido):
   > *Crear una infografía horizontal 16:9, estilo ilustración hecha a mano pero muy
   > profesional, limpia, premium y editorial — lámina artesanal moderna, NO póster escolar.
   > Fondo marfil claro con textura de papel muy sutil, alto contraste, líneas marrón oscuro
   > o casi negras, acentos en verde oliva y terracota apagado. **Dejá COMPLETAMENTE LIBRE la
   > esquina superior derecha** (limpia, luminosa, sin texto ni dibujos ni decoración) para
   > colocar después el avatar. Composición minimalista, hermosa, MUY clara, mucho espacio
   > respirable; pocos bloques grandes (idealmente 4 pasos/secciones), cada uno en una tarjeta
   > suave con número grande, título breve, una ilustración simple y texto mínimo. Ilustraciones
   > refinadas: tinta fina, acuarela suave, sombras sutiles, excelente separación visual. UN
   > elemento protagonista grande en el centro o centro-izquierda (la esquina sup. der. queda
   > libre). Flechas simples y elegantes que guían el ojo. Se entiende en 1 segundo. Evitá
   > exceso de íconos, adornos, hojas, textos chicos, flechas finas o cualquier cosa que lo
   > haga ver escolar/infantil/sobrecargado. Estética: premium editorial, clara, artesanal,
   > limpia, contrastada, fácil de leer en pantalla.* (Los textos del diagrama, en español.)
5. **Cuántos**: planeá un diagrama por cada MECANISMO/PROCESO/comparación importante — varios
   por video. NO dejes que quede uno solo. (Las animaciones inmersivas tipo `FirePathDiorama`
   son otra cosa y SÍ se mueven; los diagramas `gpt-image-2` son los estáticos con avatar.)

**Legibilidad de texto sobre foto (fix permanente).** Texto oscuro (tinta marrón) solo
sobre papel; **sobre foto/negro usá texto CLARO (crema) + scrim oscuro radial detrás +
sombra fuerte**. Implementado en `KineticHeadline` (flag `onImage = bg==="image"`),
`KineticQuote` (flag `onImage = !!image` — arreglado jun 2026: antes pintaba las palabras
en tinta oscura sobre la foto y NO se leían), `ChipsCluster`/`CalloutMark`. Replicá este
criterio en CUALQUIER componente con `bg="image"`: si una escena muestra texto sobre una
foto y el texto es oscuro → está mal, va crema + scrim + sombra. (Es uno de los errores que
más se cuela; revisalo en cada componente nuevo.)

**Sonido = identidad.** El usuario genera SFX a medida en **ElevenLabs** y los pasa como
mp3 a `public/sfx/`. Tono SIEMPRE orgánico/analógico/vintage documental (nada sci-fi).
Eventos a cablear: zoom punch/travel/out, **línea que se traza** (sonido propio),
node/bar/layer land, number roll+slam, chip pop 3D, text-slam del hook, section swell/
stinger, y **camas ambientales loopables** (taller/fuego/campo/invierno) bajo la narración
— las camas son el mayor salto de inmersión. Registralos en el mapa `SFX`/`BOOMS` de
`components/Sfx.tsx`. Booms graves ya cargados: `boom1`, `boom2`, `zoomHit`.

**★ NIVELES DE AUDIO — REGLA DURA (corrección del usuario jun 2026) ★** Los SFX/camas
quedaban MUY fuertes. Topes: **camas ambientales `vol` 0.035–0.05** (apenas audibles bajo
la narración; las de viento/fuego/"invierno" son las que más saturan → al piso, ~0.035),
**swell/stinger de sección ≤0.22**, **ticks/pops de palabra ≤0.3**, **booms de ImpactReveal
≤0.45**. La narración del avatar SIEMPRE manda; todo lo demás es lecho de fondo. Nunca pongas
una cama a 0.1+ (queda fortísima). Ante la duda, más bajo.

**Animaciones inmersivas de 10-15s "llenas de cosas".** El usuario las quiere y valora.
Cuando un beat lo permita (un recorrido, una línea de tiempo, un mapa, una comparación),
armá una escena dedicada con parallax + partículas + follow-cam + rótulos por hito en vez
de una tarjeta estática. `FirePathDiorama` y `TitleCardOpen` son las plantillas.

**Lección de rate-limit deAPI (no repetir el error).** NUNCA corras varios procesos de
generación en paralelo: el polling async (≈10 requests/imagen) dispara un bloqueo
"Too Many Attempts" que persiste minutos/hora aunque después esté todo quieto. Un solo
proceso, `DEAPI_GAP_MS` alto e `INFLIGHT` bajo. **Cargar créditos sube el tier a 300 RPM**
y lo destraba al instante → ahí sí podés ir rápido (inflight 8, gap 250ms).

## ★ NIVEL EDITOR PRO — capa de pulido "de agencia" (usar siempre) ★

El usuario quiere que se vea hecho por un editor profesional, no "renderizado". Esto YA
está implementado como piezas reusables; aplicalas en cada video. (No son subtítulos ni
cosas obvias — son las capas que separan broadcast de plantilla.)

**Implementado y REUSABLE:**
- **`components/CinematicWrap.tsx`** — envolvé TODO el contenido visual del Main con esto.
  **MODO RÁPIDO (estándar desde jun 2026, decisión del usuario):** solo deja lo perceptible-y-barato
  — **micro-handheld** siempre activo (transform; lo que más "vende" el filmado a mano), **viñeta
  fílmica** (gradiente) y **grano de película** (textura estática tileada). Se QUITARON el **polvo
  con parallax** (22 capas con blur por frame) y la **halación** (pasada mixBlendMode extra) por ser
  CAROS e IMPERCEPTIBLES → ~25-30% menos de tiempo de render sin pérdida visible. Props `handheld` y
  `grain`. (El audio va FUERA del wrap.) Regla general que el usuario fijó: **sacar TODO lo que cueste
  render y sea imperceptible en la edición** — aplicá el mismo criterio a cualquier efecto nuevo.
- **`lib/followcam.ts` mejorado** — ahora el aterrizaje tiene **OVERSHOOT/settle** (la cámara
  pasa el punto y rebota como una real, no robótica) y devuelve **`blur`** = motion-blur
  proporcional a la velocidad de cámara (se desenfoca al pasar rápido entre nodos/barras).
  Aplicá `filter: blur(cam.blur)` al contenedor del gráfico. Ya está en BarCompare/CrossSection;
  ProcessSteps tiene su versión inline.
- **Depth of field (foco selectivo)** en `ProcessSteps`: el nodo ACTIVO va nítido y los demás
  con `blur + saturate(0.66) + dim` → lente real. En el plano abierto final, todo nítido.
  Replicá este patrón (activo nítido / resto desenfocado) en cualquier escena por-partes.
- **`components/SectionFx.tsx`** — `SectionGrade` (wash de color por mood de sección: dorado en
  fuego, eucalipto frío en "casas frías", sepia en el cierre; cruza-fundea) y `SectionStinger`
  (whip + light-leak diagonal cálido de ~0.6s en cada cambio de sección, en vez de corte seco).
  Cableá `SectionGrade` dentro del `CinematicWrap` y un `SectionStinger` en cada frontera de sección.
- **Bloom en el fuego** (`FirePathDiorama`): un path-halo ancho con `feGaussianBlur` + `mixBlendMode:
  screen` → la llama "sangra" luz. Patrón replicable para cualquier highlight (fuego/sol/lámpara).
- **`components/LightRays.tsx`** — god-rays volumétricos (haces cálidos desde una fuente, con deriva
  y resplandor). Drop-in en escenas con luz natural (apertura, galpón con ventana). Props x/y/angle/strength.
- **Audio-reactive** (`AvatarLayer`): el borde del PiP late con la amplitud de la voz vía
  `useAudioData` + `visualizeAudio` de `@remotion/media-utils` (sobre `estufa.wav`). Patrón reusable
  para que cualquier acento "respire" con la narración.
- **Barras líquidas** (`BarCompare`): gloss superior + menisco brillante en el borde + barrido
  specular que recorre la barra al crecer → data-viz glossy editorial.
- **Tipografía cinética** (`KineticHeadline`): tracking que se cierra al entrar + barrido de luz
  sobre las palabras enfatizadas (no neón).
- **Parallax 2.5D en fotos** (`SceneFrame`): deriva de perspectiva muy sutil (rotateY/X ~1°) sobre el
  fondo → las RawShot se sienten con profundidad, no planas. (Los `DiagramBoard` NO usan SceneFrame →
  siguen estáticos, como debe ser.)
- **`scenes/DepthText.tsx`** — TEXTO DETRÁS DEL SUJETO (profundidad de canales top): capas back →
  texto → `fore` (sujeto recortado con alpha). REQUIERE un PNG transparente del sujeto: generalo con
  `gpt-image-2` pidiendo fondo transparente (o pasá una foto por remove.bg). `back` puede ser cualquier
  backdrop (un galpón blureado); `fore` es el héroe recortado. Listo para usar cuando tengas el alpha.

**Lo único que queda "manual"**: la **gramática editorial en pods** (Establish→Detail→Payoff,
match-cut) y conseguir los **recortes alpha** para `DepthText` — son decisiones de montaje/asset, no
componentes. Todo el resto del look pro ya es automático al usar estos componentes.

## ★★ JOURNEY / CÁMARA CONTINUA — el dispositivo ESTRELLA del canal ★★

El usuario está OBSESIONADO (en el buen sentido) con la animación de "cámara que vuela por un
lienzo parando en cada elemento con zoom". Le dice que **HIPNOTIZA**. Su pedido textual: que
NO dure 5s y se corte, sino sostener esa hipnosis con animaciones LARGAS (15-25s) y hacer MÁS
de este tipo. Tratá esto como la firma del canal: en cada video, meté varios "journeys" largos.

**Por qué engancha (entendelo para diseñarlo):** es un *plano-secuencia* ("oner") — NO hay
cortes, la cámara FLUYE por un espacio 2.5D. El cerebro se engancha por **anticipación** (esperás
que llegue) + **recompensa** (el punch-in al posarse) + **flujo continuo**. Misma droga que el
"infinite zoom". Nombre técnico: *continuous-camera journey / camera-on-rails / spatial storytelling*.

**Motor reusable: `scenes/JourneyCanvas.tsx`** (generaliza y MEJORA a ProcessSteps). Pasale
`waypoints[]` (cada uno `{x,y,z,image,label,num,dwell,travel}`) y la cámara vuela sin cortes por
todos. Trae, de fábrica: **profundidad 2.5D** (cada nodo a distinto `z` → parallax cerca/lejos),
**rack-focus automático** (lo que está al centro nítido, el resto blureado), **chispa-cometa** que
viaja por la línea adelante de la cámara guiando el ojo, **anticipación** (mira al próximo nodo
antes de arrancar), **mundo de fondo** que se desliza (parallax lento → se siente explorar un lugar
real, no un fondo plano) y **pull-back final** que revela el recorrido entero. Para hacerlo LARGO:
poné 5-8 waypoints con `dwell` 2.4-3s y `travel` 1.5-2s (6 nodos ≈ 22s). USALO en vez de gráficos
cortos siempre que haya una secuencia/proceso/recorrido.

**`scenes/InfiniteZoom.tsx`** — match-cut / Droste: push-in CONTINUO que se mete en una imagen y
al llegar al centro se convierte en la siguiente. Lista de imágenes → loop hipnótico sin cortes.
Ideal para intros, transiciones entre secciones, o un "resumen" acelerado.

**Variantes = presets de `JourneyCanvas`** (mismo motor, otra disposición de waypoints):
- *Timeline dolly*: waypoints en línea horizontal (1979→hoy), la cámara viaja por la historia.
- *Descenso vertical (oner hacia abajo)*: waypoints apilados en Y → bajás por el corte de tierra
  o por la estufa.
- *Mosaico / zoom-out*: empezás metido en un nodo y el pull-back final revela una pared de cosas.
- *Mapa/flythrough*: `worldImage` = un plano/mapa dibujado y los waypoints son las partes.
(*Orbit/turntable* — cámara orbitando un objeto 3D — es lo único que pediría un componente nuevo aparte.)

**Reglas de uso:** varios journeys por video; largos (no 5s); variá la disposición de waypoints
entre ellos para que no se repitan; el `worldImage` siempre suma inmersión; y como NO hay cortes,
la narración puede correr por encima sin problema (encajá el journey en un tramo hablado largo).
Demo de referencia: composición `JourneyDemo` (en Root) — 6 nodos + un tramo de InfiniteZoom.

## ★ FLUJO RÁPIDO Y BARATO (menos tiempo, menos tokens) — leer ANTES de empezar ★

Lecciones de la sesión donde se construyó todo esto. Seguilas y un video sale en una
fracción del tiempo/tokens:

1. **NO re-leas los componentes** — sus props están en `COMPONENTS.md` (cheatsheet, en
   esta misma carpeta). Abrir .tsx para ver una firma fue el mayor gasto de tokens. Si
   creás/cambiás un componente, actualizá el cheatsheet en vez de re-leerlo después.

2. **★ DISCIPLINA VISUAL — REGLA DURA (el #1 gasto evitable de tokens) ★**
   Leer imágenes/stills con la herramienta Read cuesta MUCHO en tokens de visión. El usuario
   marcó explícitamente (jun 2026) que esto es lo que más se gasta de más. Por defecto:
   - **NO leas las imágenes GENERADAS por deAPI/gpt-image. NUNCA. 0 tokens de visión.**
     Referencialas por NOMBRE. Único permitido: **1 spot-check** de la cara del avatar la
     PRIMERA vez (para confirmar que la referencia tomó), nada más en todo el video.
   - **La revisión visual la hace EL USUARIO en Studio, no vos con stills.** Decile que abra
     `npx remotion studio` y scrubee en vivo (0 tokens míos). Vos NO renderices stills "para
     chequear" — eso es lo que hay que dejar de hacer. Render = solo el FINAL, una vez.
   - **Correctitud = `tsc --noEmit`**, no stills (filtrá `BankLevels`, son ajenos). Un edit
     compila o no; no necesitás "verlo".
   - Si EL USUARIO pide específicamente que mires algo, **1 still chico** (`--scale=0.4`),
     elegido a mitad de escena (no en el `start` exacto, que cae en fade-in y sale en blanco).
     NUNCA 5-7 stills "por las dudas". Nunca decenas de PNGs full.
   - `vstill.mjs`/`vsheet.mjs` están ROTOS en Node 24 de esta máquina (spawn npx.cmd EINVAL).
     Si hace falta un still, directo: `npx remotion still <Comp> out.png --frame=N --scale=0.4`
     con `TMP=D:\rtmp TEMP=D:\rtmp`.
   - **Recordatorio del reparto de generadores** (no confundir, ahorra re-trabajo): deAPI.ai
     (FLUX) para TODAS las fotos b-roll + deAPI (LTX) para los clips; **gpt-image-2 SOLO** para
     los diagramas y para las imágenes con el ROSTRO del avatar (referencia). El grueso es deAPI.

3. **Generá bien la PRIMERA vez (no pelees el rate-limit).** Un solo proceso. Si la cuenta
   es básica, **decile al usuario que cargue US$10 → 300 RPM** ANTES de generar en masa;
   con eso: inflight 8, gap 250ms, una sola corrida. Sin 300 RPM: inflight ≤3, gap ≥1.4s.
   Nunca dos procesos en paralelo (dispara "Too Many Attempts" por horas).

4. **Construí el video ENTERO antes del render — render UNA vez.** El error caro: renderizar
   (~2h) y DESPUÉS agregar la mejor escena y re-renderizar. Cerrá TODAS las decisiones
   creativas (incl. journeys/diagramas) y que el usuario las apruebe en el Studio, y RECIÉN
   ahí el render final. Un render = ~1.5-2h por los filtros pro; no lo repitas por gusto.

5. **Cués en lote, no a mano.** El timeline son 130+ cues; generalos con un script desde una
   tabla/beatsheet (key,start,componente,props) en vez de escribir 130 líneas JSX a mano.
   Para editar cues existentes, scripts node por `key` (no edits uno por uno).

6. **No re-leas archivos que acabás de editar** (Edit/Write ya confirma). No corras `tsc`
   después de cada micro-edit: agrupá cambios y corré tsc una vez.

7. **Friction de TS**: no destructures props que no usás (`fps`,`width`) → evita el ciclo de
   "error TS6133 → fix → recompilar". Si igual aparecen, son fixes de 1 línea: batchealos.

8. **Render**: `--concurrency=16`, preblur horneado, assets ~1600px. NUNCA bajar
   crf/resolución/fps/scale. Un render largo es inherente al minutaje + el video del avatar
   + los filtros — está bien que tarde. Lanzá en background y avisá al terminar.
   - **★ TEMP EN DISCO GRANDE (`D:\rtmp`), no C: ★** — Remotion en el merge de audio **rellena
     CADA pista a la duración COMPLETA** del video (~240 MB por pista en 21 min) y estos videos
     tienen 140+ pistas (avatar + ambientales + cientos de SFX) → necesita **~35 GB de temp**.
     Si el temp está en un disco con poco libre, el render hace TODOS los frames bien y RECIÉN
     al final **falla en el merge de audio con exit 4294967268 (= ENOSPC, sin espacio)** y NO
     genera el mp4 — perdés las 2h. Antes de renderizar: `Get-PSDrive` para ver discos y poné
     `TEMP/TMP/TMPDIR` en el que tenga ≥40 GB libres (en esta máquina, `D:` con 893 GB). El path
     corto sigue importando para el audio-mixing; `D:\rtmp` cumple ambas.

**Orden canónico de un video nuevo:** transcribir (`transcribe_*.mjs`) → caminar el guion y
listar TODOS los assets → escribir prompts (foto + diagramas) → generar TODO en una corrida
(300 RPM) → wirear cues por script (usando `COMPONENTS.md`, sin re-leer) → revisar en Studio
con el usuario → render final único. Validá con tsc (stills SOLO si el usuario los pide; la revisión visual la hace él en Studio).

## Token budget (reassure the user — this is cheap)

- Building prompts + deciding placements = text reasoning, cheap and linear.
- Generating images/clips = HTTP calls to deAPI, **0 Claude tokens**, ~cents of API.
- **Do NOT analyze generated images with vision** (that's the only expensive part)
  — reference them by name; spot-check at most 1 per batch if truly needed.
- The only real token driver is wiring many cues — script the cue generation when
  inserting 100+ images instead of hand-editing one by one.

So a video packed with hundreds of real animated images is entirely viable without
blowing up cost. Density here is ~free; do it generously.

## Related user memory (read when relevant)

`feedback_video_brand.md` (★ the locked serif+earthy brand), `reference_deapi.md`,
`feedback_video_density.md`, `feedback_video_slowmo.md`,
`feedback_video_must_apply.md`, `project_video_niche_gardening.md`,
`project_video_niche_retirement.md`, `reference_video_avatar_imggen.md`,
`project_video_style_guide.md`.
