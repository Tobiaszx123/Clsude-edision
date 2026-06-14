// cues_sandia1.gen.tsx — GENERADO por beatsheet.mjs desde sandia1.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/sandia1.json
import { ReactNode } from "react";
import { sec } from "./theme";
import { RawShot } from "./scenes/RawShot";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { AvatarPresentation } from "./scenes/AvatarPresentation";
import { StatBig } from "./scenes/StatBig";
import { ImpactReveal } from "./scenes/ImpactReveal";
import { KineticHeadline } from "./scenes/KineticHeadline";
import { ProcessSteps } from "./scenes/ProcessSteps";
import { RuleNumberScene } from "./scenes/RuleNumberScene";
import { AnnotatedImage } from "./scenes/AnnotatedImage";

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "s1_01", start: 9.14, dur: 8.82, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_cortar_sandia.mp4" hue="red" kicker="Hundís el cuchillo..." zoom={[1.05,1.16]} /> },
  { key: "s1_02", start: 17.96, dur: 9.4, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/sandia_palida.png" hue="cold" kicker="Pálida, casi blanca" zoom={[1.18,1.04]} /> },
  { key: "s1_03", start: 27.36, dur: 15.88, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/sandia_palida.png" eyebrow="Y la probás" words={parseQuote("No sabe a nada. A *agua*.")} accent="danger" hue="red" fontSize={86} /> },
  { key: "s1_03b", start: 43.24, dur: 4.4, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/sandia_fea.png" hue="red" kicker="La más linda del cajón" zoom={[1.05,1.16]} /> },
  { key: "s1_03c", start: 47.64, dur: 4.22, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/sandia_palida.png" eyebrow="Y acá está" words={parseQuote("No fue mala suerte.")} accent="danger" hue="red" fontSize={84} /> },
  { key: "s1_04", start: 51.86, dur: 9.02, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/sandia_palida.png" impact="ELEGISTE MAL" setup="No fue mala suerte" impactAccent="danger" hitAt={2} boom={1} /> },
  { key: "s1_05", start: 60.88, dur: 5.84, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/sandia_fea.png" eyebrow="La verdad" words={parseQuote("La sandía dulce casi siempre es la que se ve *fea*.")} accent="good" hue="amber" fontSize={74} /> },
  { key: "s1_06", start: 66.72, dur: 8.68, kind: "headline", el: (d) => <KineticHeadline durationInFrames={d} tokens={[{"t":"A "},{"t":"leer","hl":true},{"t":" una sandía. No a adivinar."}]} eyebrow="Hoy te enseño" hue="amber" bg="image" image="img/sandia_fea.png" /> },
  { key: "s1_07", start: 75.4, dur: 3.22, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={7} suffix=" señales" label="te lo grita por fuera" eyebrow="La sandía te habla" accent="good" hue="amber" /> },
  { key: "s1_08", start: 78.62, dur: 10.42, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_mercado_sandias.mp4" hue="amber" kicker="Me las enseñó mi abuelo" zoom={[1.04,1.14]} /> },
  { key: "s1_09", start: 89.04, dur: 10.46, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/supermercado_sandias.png" eyebrow="Algo que el súper esconde" words={parseQuote("No le conviene que sepas *elegir*.")} accent="danger" hue="red" fontSize={78} /> },
  { key: "s1_10", start: 99.5, dur: 9.12, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/supermercado_sandias.png" annotations={[{"kind":"circle","x":50,"y":60,"w":24,"h":24,"label":"Mancha tapada"}]} eyebrow="Por eso las paran" caption="Para que NO veas la mancha" hue="red" /> },
  { key: "s1_11", start: 108.62, dur: 16.12, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Las 7 señales" hue="amber" accent="amber" avatar="sandia1_opt.mp4" avatarFrom={sec(108.62)} slides={[{"image":"img/dg_7senales.png","title":"De la más importante a la última"}]} /> },
  { key: "s1_12", start: 124.74, dur: 7.18, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="01" title="La mancha del campo" label="La más importante" hue="amber" /> },
  { key: "s1_13", start: 131.92, dur: 2.26, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_dar_vuelta_sandia.mp4" hue="amber" kicker="Dala vuelta" zoom={[1.06,1.18]} /> },
  { key: "s1_13b", start: 134.18, dur: 14.12, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/mancha_amarilla.png" hue="amber" kicker="El lado que tocó la tierra" zoom={[1.2,1.05]} /> },
  { key: "s1_13c", start: 148.3, dur: 5.58, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/mancha_blanca.png" eyebrow="Si es blanca" words={parseQuote("La arrancaron *verde*.")} accent="danger" hue="red" fontSize={80} /> },
  { key: "s1_14", start: 153.88, dur: 8.4, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/mancha_amarilla.png" annotations={[{"kind":"circle","x":50,"y":55,"w":30,"h":26,"label":"Amarillo manteca"}]} eyebrow="Mancha amarilla cremosa" caption="Maduró al sol = DULCE" hue="cold" /> },
  { key: "s1_15", start: 162.28, dur: 7, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/mancha_amarilla.png" eyebrow="Cuanto más cremosa" words={parseQuote("Más maduró. Más *dulce*.")} accent="good" hue="amber" fontSize={88} /> },
  { key: "s1_16", start: 169.28, dur: 15.9, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/mancha_blanca.png" annotations={[{"kind":"circle","x":50,"y":55,"w":28,"h":24,"label":"Blanca = verde"}]} eyebrow="Mancha blanca" caption="La arrancaron verde → soltala" hue="red" /> },
  { key: "s1_17", start: 185.18, dur: 20.52, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/sandia_palida.png" impact="NO MADURA TRAS CORTARLA" setup="Ojo con esto" impactAccent="danger" hitAt={2} boom={1} /> },
  { key: "s1_17b", start: 205.7, dur: 12.3, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/supermercado_sandias.png" hue="red" kicker="La esconden hacia abajo" zoom={[1.05,1.16]} /> },
  { key: "s1_18", start: 218, dur: 3.7, kind: "process", el: (d) => <ProcessSteps durationInFrames={d} steps={[{"title":"Dala vuelta","desc":"Buscá el lado que tocó la tierra","image":"img/mancha_amarilla.png"},{"title":"Que sea amarilla","desc":"Cremosa, como manteca","image":"img/mancha_amarilla.png"}]} eyebrow="Señal 1, en 2 pasos" title="La mancha del campo" accent="good" hue="amber" /> },
  { key: "s1_17c", start: 221.7, dur: 2.88, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/mancha_amarilla.png" eyebrow="Solo con eso" words={parseQuote("Elegís mejor que el *90%*.")} accent="good" hue="amber" fontSize={82} /> },
  { key: "s1_19", start: 224.58, dur: 13.4, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="02" title="Las marcas de las abejas" label="La marca del tesoro" hue="amber" /> },
  { key: "s1_20", start: 237.98, dur: 13.98, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/marcas_abejas.png" annotations={[{"kind":"arrow","x":50,"y":50,"fromX":72,"fromY":28,"label":"Rastro de abejas"}]} eyebrow="Líneas marrones ásperas" caption="No es fea: es dulce" hue="amber" /> },
  { key: "s1_20b", start: 251.96, dur: 3, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/marcas_abejas.png" eyebrow="Esas marcas" words={parseQuote("Cuentan una historia *dulce*.")} accent="good" hue="amber" fontSize={84} /> },
  { key: "s1_21", start: 254.96, dur: 26.68, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Por qué la fea es dulce" hue="cold" accent="good" avatar="sandia1_opt.mp4" avatarFrom={sec(254.96)} slides={[{"image":"img/dg_abejas.png","title":"Más abejas → más azúcar"}]} /> },
  { key: "s1_21b", start: 281.64, dur: 2.2, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/sandia_fea.png" hue="amber" kicker="La que el abuelo agarraba" zoom={[1.05,1.16]} /> },
  { key: "s1_22", start: 282.72, dur: 3.16, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/marcas_abejas.png" impact="LA FEA ES LA DULCE" setup="Acordate" impactAccent="good" hitAt={2} boom={1} /> },
  { key: "s1_23", start: 285.88, dur: 13.52, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="03" title="El círculo de abajo" label="El ombligo" hue="amber" /> },
  { key: "s1_24", start: 299.4, dur: 11.98, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/circulo_chico.png" annotations={[{"kind":"circle","x":50,"y":52,"w":12,"h":12,"label":"Chiquito = mejor"}]} eyebrow="Círculo chiquito" caption="Más dulce y firme" hue="cold" /> },
  { key: "s1_25", start: 311.38, dur: 10.16, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/circulo_grande.png" annotations={[{"kind":"circle","x":50,"y":52,"w":26,"h":24,"label":"Grande = aguada"}]} eyebrow="Círculo grande" caption="Más aguada, más semillas" hue="red" /> },
  { key: "s1_26", start: 321.54, dur: 6.06, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/circulo_chico.png" eyebrow="La regla" words={parseQuote("Círculo *chiquito*, mejor.")} accent="good" hue="amber" fontSize={88} /> },
  { key: "s1_27", start: 327.6, dur: 14.6, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="04" title="El zarcillo" label="Casi nadie la conoce" hue="amber" /> },
  { key: "s1_28", start: 342.2, dur: 6.32, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/zarcillo_verde.png" annotations={[{"kind":"arrow","x":48,"y":48,"fromX":70,"fromY":26,"label":"Verde = no lista"}]} eyebrow="Zarcillo verde" caption="Todavía le falta" hue="cold" /> },
  { key: "s1_29", start: 348.52, dur: 14.24, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/zarcillo_seco.png" annotations={[{"kind":"arrow","x":48,"y":48,"fromX":70,"fromY":26,"label":"Seco = lista"}]} eyebrow="Zarcillo seco" caption="En su punto" hue="cold" /> },
  { key: "s1_29b", start: 362.76, dur: 6.02, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_mercado_sandias.mp4" hue="amber" kicker="En la feria casi nunca falla" zoom={[1.05,1.14]} /> },
  { key: "s1_30", start: 368.78, dur: 2.22, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/zarcillo_seco.png" impact="ZARCILLO SECO = LISTA" setup="Esta casi nunca falla" impactAccent="good" hitAt={2} boom={1} /> },
];

export const REFRAME: { start: number; end: number }[] = [];
