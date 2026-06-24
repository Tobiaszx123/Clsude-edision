// cues_prueba1.gen.tsx — GENERADO por beatsheet.mjs desde prueba1.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/prueba1.json
import { ReactNode } from "react";
import { sec } from "./theme";
import { RawShot } from "./scenes/RawShot";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { ChipsCluster } from "./scenes/ReframeContent";
import { AvatarPresentation } from "./scenes/AvatarPresentation";
import { StatBig } from "./scenes/StatBig";
import { ImpactReveal } from "./scenes/ImpactReveal";
import { KineticHeadline } from "./scenes/KineticHeadline";
import { ProcessSteps } from "./scenes/ProcessSteps";
import { AnnotatedImage } from "./scenes/AnnotatedImage";

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "p01", start: 0, dur: 7.26, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/p1_tomatera_frondosa.png" impact="Y casi sin tomates." setup="Enorme, verde, más alta que tus hijos." impactAccent="danger" hitAt={4} /> },
  { key: "p02", start: 7.26, dur: 5.82, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_amarrar_tomate.mp4" hue="amber" kicker="La cuidaste todo el verano" /> },
  { key: "p03", start: 13.08, dur: 2.9, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/p1_buscar_tomates.png" hue="cold" kicker="¿Y los tomates?" /> },
  { key: "p04", start: 15.98, dur: 7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/p1_tomates_chicos.png" hue="cold" kicker="Pocos, verdes, escondidos" /> },
  { key: "p05", start: 22.98, dur: 4.04, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={50} suffix=" tomates" label="...y apenas tenés una docena" eyebrow="Una mata sana debería darte" accent="danger" hue="amber" /> },
  { key: "p06", start: 27.02, dur: 5.36, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/p1_hoja_manchas.png" annotations={[{"kind":"circle","x":0.4,"y":0.45,"w":0.2,"h":0.2,"label":"Círculos cafés"},{"kind":"arrow","x":0.66,"y":0.32,"fromX":0.86,"fromY":0.18,"label":"Halo amarillo"}]} eyebrow="La señal" caption="Manchas en las hojas de abajo" hue="amber" /> },
  { key: "p07", start: 32.38, dur: 8.5, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="El tizón sube desde la tierra" hue="amber" accent="danger" avatar="prueba1_opt.mp4" avatarFrom={sec(32.38)} slides={[{"image":"img/d_tizon_1.png","title":"Sube desde la tierra"},{"image":"img/d_tizon_2.png","title":"Se come las hojas y mata al fruto"}]} /> },
  { key: "p08", start: 40.88, dur: 3.1, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_tomate_enfermo.mp4" hue="cold" kicker="Mata al fruto antes de madurar" /> },
  { key: "p08b", start: 43.98, dur: 5.44, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Te vas a la casa" words={parseQuote("¿Qué hiciste *mal*?")} accent="danger" hue="cold" /> },
  { key: "p09", start: 49.42, dur: 5.8, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/p1_manos_tierra.png" title="Hiciste todo bien" chips={["Buena tierra","Buena semilla","Agua a tiempo","Buena estaca"]} hue="amber" /> },
  { key: "p10", start: 55.22, dur: 2.54, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="La pregunta" words={parseQuote("¿Por qué tantas *hojas* y tan pocos *tomates*?")} accent="amber" hue="cold" /> },
  { key: "p11", start: 57.76, dur: 5.3, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Si fuiste cuidadoso" words={parseQuote("¿Por qué se mete la *enfermedad*?")} accent="danger" hue="cold" /> },
  { key: "p12", start: 63.06, dur: 2.46, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="La respuesta" words={parseQuote("Suena al *revés* de todo lo que te enseñaron.")} accent="amber" hue="cold" /> },
  { key: "p13", start: 65.52, dur: 5.48, kind: "headline", el: (d) => <KineticHeadline durationInFrames={d} tokens={[{"t":"Necesitabas"},{"t":"QUITARLE","hl":true},{"t":"cosas,"},{"t":"no"},{"t":"DARLE","danger":true},{"t":"más."}]} eyebrow="El saber antiguo" hue="amber" bg="black" /> },
  { key: "p14", start: 71, dur: 2.02, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Quedáte conmigo" words={parseQuote("Esto lo *cambia* todo.")} accent="good" hue="amber" /> },
  { key: "p15", start: 73.02, dur: 9.54, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/p1_arbusto_salvaje.png" hue="cold" kicker="Dejada a su aire" /> },
  { key: "p16", start: 82.56, dur: 7.4, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/p1_ramitas_laterales.png" hue="cold" kicker="100 ramitas que compiten" /> },
  { key: "p17", start: 89.96, dur: 6.22, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/p1_fruta_sombra.png" hue="cold" kicker="Donde el sol no llega" /> },
  { key: "p18", start: 96.18, dur: 9.52, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="La planta piensa en sobrevivir" hue="amber" accent="accent" avatar="prueba1_opt.mp4" avatarFrom={sec(96.18)} slides={[{"image":"img/d_planta_1.png","title":"Crece para todos lados"},{"image":"img/d_planta_2.png","title":"Vos concentrás su fuerza"}]} /> },
  { key: "p19", start: 105.7, dur: 17.7, kind: "process", el: (d) => <ProcessSteps durationInFrames={d} steps={[{"title":"Quitá los brotes laterales","desc":"Antes de que se vuelvan ramas que compiten","image":"img/p1_brote_lateral.png"},{"title":"Quitá las hojas de abajo","desc":"Antes de que la tierra le salpique la enfermedad","image":"img/p1_hojas_abajo.png"},{"title":"Cortá la punta al final","desc":"Su última fuerza va a madurar la fruta","image":"img/p1_cortar_punta.png"}]} eyebrow="El saber antiguo" title="Tres cortes" accent="good" hue="amber" /> },
  { key: "p20", start: 123.4, dur: 2.06, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/p1_tomates_rojos.png" hue="amber" kicker="El doble de tomates" /> },
];

export const REFRAME: { start: number; end: number }[] = [];
