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
  { key: "p01", start: 0, dur: 6.3, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/p1_tomatera_frondosa.png" impact="Y casi sin tomates." setup="Enorme, verde, más alta que tus hijos." impactAccent="danger" hitAt={4} /> },
  { key: "p02", start: 6.3, dur: 3.5, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_amarrar_tomate.mp4" hue="amber" kicker="La cuidaste todo el verano" /> },
  { key: "p03", start: 9.8, dur: 5.2, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/p1_buscar_tomates.png" hue="cold" kicker="¿Y los tomates?" /> },
  { key: "p04", start: 15, dur: 4.8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/p1_tomates_chicos.png" hue="cold" kicker="Pocos, verdes, escondidos" /> },
  { key: "p05", start: 19.8, dur: 5.1, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={50} suffix=" tomates" label="...y apenas tenés una docena" eyebrow="Una mata sana debería darte" accent="danger" hue="amber" /> },
  { key: "p06", start: 24.9, dur: 4.8, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/p1_hoja_manchas.png" annotations={[{"kind":"circle","x":0.4,"y":0.45,"w":0.2,"h":0.2,"label":"Círculos cafés"},{"kind":"arrow","x":0.66,"y":0.32,"fromX":0.86,"fromY":0.18,"label":"Halo amarillo"}]} eyebrow="La señal" caption="Manchas en las hojas de abajo" hue="amber" /> },
  { key: "p07", start: 29.7, dur: 9.1, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="El tizón sube desde la tierra" hue="amber" accent="danger" avatar="prueba1_opt.mp4" avatarFrom={sec(29.7)} slides={[{"image":"img/d_tizon_1.png","title":"Sube desde la tierra"},{"image":"img/d_tizon_2.png","title":"Se come las hojas y mata al fruto"}]} /> },
  { key: "p08", start: 38.8, dur: 4, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/p1_fruto_verde_enfermo.png" hue="cold" kicker="Mata al fruto antes de madurar" /> },
  { key: "p09", start: 42.8, dur: 5.2, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/p1_manos_tierra.png" title="Hiciste todo bien" chips={["Buena tierra","Buena semilla","Agua a tiempo","Buena estaca"]} hue="amber" /> },
  { key: "p10", start: 48, dur: 5, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="La pregunta" words={parseQuote("¿Por qué tantas *hojas* y tan pocos *tomates*?")} accent="amber" hue="cold" /> },
  { key: "p11", start: 53, dur: 4.4, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Si fuiste cuidadoso" words={parseQuote("¿Por qué se mete la *enfermedad*?")} accent="danger" hue="cold" /> },
  { key: "p12", start: 57.4, dur: 7.4, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="La respuesta" words={parseQuote("Suena al *revés* de todo lo que te enseñaron.")} accent="amber" hue="cold" /> },
  { key: "p13", start: 64.8, dur: 5.9, kind: "headline", el: (d) => <KineticHeadline durationInFrames={d} tokens={[{"t":"Necesitabas"},{"t":"QUITARLE","hl":true},{"t":"cosas,"},{"t":"no"},{"t":"DARLE","danger":true},{"t":"más."}]} eyebrow="El saber antiguo" hue="amber" bg="black" /> },
  { key: "p14", start: 70.7, dur: 4.5, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Quedáte conmigo" words={parseQuote("Esto lo *cambia* todo.")} accent="good" hue="amber" /> },
  { key: "p15", start: 75.2, dur: 5, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/p1_arbusto_salvaje.png" hue="cold" kicker="Dejada a su aire" /> },
  { key: "p16", start: 80.2, dur: 5.2, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_brotes_laterales.mp4" hue="cold" kicker="100 ramitas que compiten" /> },
  { key: "p17", start: 85.4, dur: 9.1, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/p1_fruta_sombra.png" hue="cold" kicker="Donde el sol no llega" /> },
  { key: "p18", start: 94.5, dur: 9.5, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="La planta piensa en sobrevivir" hue="amber" accent="accent" avatar="prueba1_opt.mp4" avatarFrom={sec(94.5)} slides={[{"image":"img/d_planta_1.png","title":"Crece para todos lados"},{"image":"img/d_planta_2.png","title":"Vos concentrás su fuerza"}]} /> },
  { key: "p19", start: 104, dur: 19, kind: "process", el: (d) => <ProcessSteps durationInFrames={d} steps={[{"title":"Quitá los brotes laterales","desc":"Antes de que se vuelvan ramas que compiten","image":"img/p1_brote_lateral.png"},{"title":"Quitá las hojas de abajo","desc":"Antes de que la tierra le salpique la enfermedad","image":"img/p1_hojas_abajo.png"},{"title":"Cortá la punta al final","desc":"Su última fuerza va a madurar la fruta","image":"img/p1_cortar_punta.png"}]} eyebrow="El saber antiguo" title="Tres cortes" accent="good" hue="amber" /> },
  { key: "p20", start: 123, dur: 2.6, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/p1_tomates_rojos.png" hue="amber" kicker="El doble de tomates" /> },
];

export const REFRAME: { start: number; end: number }[] = [];
