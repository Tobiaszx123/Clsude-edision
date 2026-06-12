# Cheatsheet de componentes (video2) — NO re-leas los archivos, mirá acá

Props de cada escena/componente del proyecto `video2/src/VideoEdit`. Mantener esto
al día evita abrir los .tsx (el mayor gasto de tokens). Todos leen `COLORS`/`FONT_STACK`
de `theme.ts`. `accent` = keyof TONES = `"accent"|"amber"|"good"|"cold"|"danger"`
salvo aclaración. `hue` = `"blue"|"cold"|"amber"|"red"` (algunos sin "cold"). Todo
recibe `durationInFrames`.

## B-roll / imagen real
- **RawShot** `{src:"img/x.png"|"vid/x.mp4", hue?, kicker?}` — foto/clip full-bleed, crudo. El default.
- **AnnotatedImage** `{image, eyebrow?, caption?, annotations:[{kind:"circle"|"arrow"|"underline",x,y,w?,h?,fromX?,fromY?,label?,color?}], hue?, startAt?, stagger?}`
- **CalloutMark** `{figure, eyebrow?, caption?, image?, accent?, hue?, startAt?}` — número/fecha manuscrita sobre foto.

## Hook / revelación
- **ImpactReveal** `{image, setup?, impact, impactAccent?:"danger"|"accent"|"amber"|"cold"|"good"|"ink", hitAt?(s), zoom?, darken?, align?:"center"|"bottom", fontSize?, boom?:0|1|2, boomVolume?}` — speed-ramp + oscurecido + texto que aterriza + sub-boom.
- **TitleCardOpen** `{image, kicker?, title, subtitle?, glowAt?:[x,y]}` — apertura: penumbra + resplandor que crece + brasas + god-rays. Va sobre la 1ª línea de narración.

## Texto cinético
- **KineticQuote** `{words:parseQuote("texto con *énfasis*"), eyebrow?, cite?, accent?, hue?, image?, startAt?, perWord?, fontSize?}` — frase palabra por palabra; `*x*` en acento. Sobre foto = texto claro auto.
- **KineticHeadline** `{tokens:[{t,hl?,danger?,good?}], eyebrow?, hue?:"blue"|"amber"|"red", size?, bg?:"grid"|"image"|"black"|"white", image?, imageDarken?}` — punchline con tracking-in + barrido de luz en énfasis. `bg="image"` → texto claro + scrim auto.
- **AgedDoc** `{heading, lines:[{text,mark?}], eyebrow?, image?, accent?, hue?, startAt?, perLine?, markDelay?}` — papel envejecido + subrayado que se dibuja.
- **TextCardReveal** `{eyebrow?, lines:string[], accent?(color string)}` — tarjetas de texto escalonadas.
- **SplitList** `{title, items:string[], accent?(color string), cross?}` — lista; `cross` = tachada (ítems legibles en tinta + tachado terracota).
- **ChipsCluster** `{chips:string[], title?, hue?:"blue"|"amber"|"red", bg?, image?, imageDarken?}` — chips con follow-cam + pop 3D + sonido por chip.

## Datos / diagramas vectoriales (follow-cam de fábrica)
- **StatBig** (de `scenes/StatBig`, NO DataViz) `{value, prefix?, suffix?, decimals?, label?, eyebrow?, accent?, hue?, startAt?, countFrames?, ticks?}` — count-up + push-in + numberRoll/Slam.
- **BarCompare** `{bars:[{label,value,display?,sub?,tone?,winner?}], eyebrow?, title?, orientation?:"vertical"|"horizontal", unit?, accent?, hue?, startAt?, stagger?}` — barras líquidas + follow-cam. stagger default 1.5s.
- **CrossSection** `{layers:[{label,depth?,color(hex),weight?}], eyebrow?, title?, marker?:{label?,atDepth?,color?}|null, hue?, startAt?, stagger?}` — capas + follow-cam zoom capa-a-capa.
- **ProcessSteps** `{steps:[{title,desc?,image?}], eyebrow?, title?, orientation?, accent?, hue?, startAt?, stagger?}` — camino curvo flotante + nodos IMAGEN + follow-cam + DoF. stagger default 1.9s. (Para journeys largos usar JourneyCanvas.)
- **Checklist** `{title, items:[{text,state?:"done"|"doing"|"todo",note?}], eyebrow?, accent?, hue?, startAt?, stagger?, image?, imageDarken?, pin?}`
- **RuleNumberScene** `{number:"01", label?, title, hue?:"blue"|"amber"|"red"}` — separador de sección.

## Diagramas EXPLICATIVOS (gpt-image-2, estáticos)
- **DiagramBoard** `{pages:[{image,eyebrow?}], avatar?, avatarFrom?(frame global), fit?:"cover"|"contain"(def contain)}` — lámina estática + avatar PiP esquina sup-der. SIN zoom. Hard-cut entre páginas. ~10s o paginar.

## Animaciones inmersivas (el dispositivo estrella)
- **JourneyCanvas** `{waypoints:[{x,y,z?,image?,label?,sub?,num?,dwell?(s),travel?(s)}], worldImage?, eyebrow?, title?, accent?, focusScale?, travelScale?}` — cámara continua 2.5D, rack-focus, chispa, parallax, pull-back. LARGO (5-8 nodos, dwell 2.4-6s = 20-47s).
- **InfiniteZoom** `{images:[{src,label?}], zoom?, accent?}` — match-cut/Droste push-in continuo.
- **FirePathDiorama** `{eyebrow?, title?}` — corte pseudo-3D con fuego que recorre el sistema + bloom. (Hardcodeado a la rocket; adaptar el PATH para otro mecanismo.)
- **DepthText** `{back, fore(PNG alpha), title, accent?, fontSize?}` — texto DETRÁS del sujeto. `fore` = recorte transparente (gpt-image-2 transparent / remove.bg).

## Avatar
- **AvatarLayer** `{src:"presentador_opt.mp4", windows:[{start(s),mode:"full"|"right"|"left"|"cornerTR"|"hidden"}], accent?}` — 1 instancia = audio de TODO el video + visual posicionado. Borde reactivo a la voz. cornerTR sobre b-roll = avatar frecuente sin tapar imágenes. ⚠ REGLA: VARIAR mucho las posiciones, no solo full+cornerTR (ver SKILL regla dura #3). TODO: agregar modos cornerTL/cornerBR/cornerBL + `scale` por ventana.
- **FloatingInsert** (`scenes/FloatingInsert.tsx`) `{durationInFrames, src:"img|vid|real|broll/x", side?:"left"|"right", kicker?, hue?, accent?}` — foto/clip ENMARCADO flotando al lado del avatar full-screen, con "zoom al lugar" (anillo de foco + escala desde chico) ANTES de aparecer + bob + Ken-Burns. Se renderiza ENCIMA del avatar: en Main, los cues con key "f" van DESPUÉS del `<AvatarLayer>`; ventana del avatar = `full` en ese span. kind `float` en beatsheet.
- **AvatarPresentation** `{slides:[{image,title?,note?}], avatar?, avatarFrom?, eyebrow?, hue?, accent?}` — lámina grande + avatar chico esquina (versión con Ken-Burns; para diagramas ESTÁTICOS usar DiagramBoard).

## Capas globales (envuelven/overlay el Main)
- **CinematicWrap** `{children, handheld?(0.8), grain?(0.06)}` — MODO RÁPIDO: handheld+viñeta+grano sobre TODO (se QUITÓ polvo+halación: caros e imperceptibles, ~25-30% menos render).
- **SectionGrade** `{ranges:[{from(s),to(s),tint,strength,blend?}]}` — color-grade por sección. Dentro del CinematicWrap.
- **SectionStinger** `{durationInFrames?}` — whip + light-leak. Uno por frontera de sección (Sequence corto).
- **LightRays** `{x?,y?,count?,color?,strength?,angle?}` — god-rays. Drop-in en escenas con luz natural.

## Helpers
- **followCam** (`lib/followcam.ts`) `followCam({frame,fps,targets:[{at,x,y}],cx,cy,hold?,zPunch?,zHold?,zTravel?,endHold?,zoomOut?})` → `{transform,active,z,blur}`. Aplicá `transform`+`filter:blur(cam.blur)` al contenedor.
- **SFX** (`components/Sfx.tsx`) — map con: whoosh/whoosh2/transition/pops/clicks + booms (boom1/2/zoomHit) + pack ElevenLabs (camZoomPunch, camTravel, lineDraw, nodeLand, barGrow, winnerChime, digitTick, numberRoll, numberSlam, layerDrop, markerDrive, chipPop3d, textSlam, sectionSwell, stingerHit, amb_taller/fuego/campo/invierno). `<SfxCue at src volume? durationInFrames?/>`.
- **parseQuote("texto *x*")** de KineticQuote. **sec(s)** de theme.

## Kinds soportados por beatsheet.mjs (cada uno = un componente)
`raw` (RawShot) · `diagram` (AvatarPresentation) · `quote` (KineticQuote) · `chips`
(ChipsCluster) · `splitlist` (SplitList) · `stat` (StatBig) · `impact` (ImpactReveal) ·
`journey` (JourneyCanvas) · `float` (FloatingInsert) · `headline` (KineticHeadline) ·
`aged` (AgedDoc) · `bars` (BarCompare) · `cross` (CrossSection) · `process` (ProcessSteps) ·
`checklist` (Checklist) · `rule` (RuleNumberScene) · `annotated` (AnnotatedImage) ·
`callout` (CalloutMark) · `infzoom` (InfiniteZoom). Regla dura #4: usá MUCHOS distintos.
Notas de tipos: CrossSection layer `depth` es TAG string (grosor = `weight` número),
`marker.color` = token (no hex); RuleNumberScene/KineticHeadline `hue` solo blue|amber|red
(sin cold). El Main oculta el avatar bajo cualquier kind que NO sea raw/stat/quote/chips.

## Generación
- **`gen_deapi.mjs`** (FLUX, fotos b-roll, ~US$0.004) · **`gen_video.mjs`** (LTX img2video) · **`gen_images.mjs`** (gpt-image-2 DIAGRAMAS, 1536x1024, ~US$0.005). Key deAPI inline; OPENAI_API_KEY en .env.
