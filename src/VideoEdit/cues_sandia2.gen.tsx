// cues_sandia2.gen.tsx — GENERADO por beatsheet.mjs desde sandia2.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/sandia2.json
import { ReactNode } from "react";
import { sec, COLORS } from "./theme";
import { RawShot } from "./scenes/RawShot";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { SplitList } from "./scenes/SplitList";
import { AvatarPresentation } from "./scenes/AvatarPresentation";
import { ImpactReveal } from "./scenes/ImpactReveal";
import { ProcessSteps } from "./scenes/ProcessSteps";
import { Checklist } from "./scenes/Checklist";
import { RuleNumberScene } from "./scenes/RuleNumberScene";
import { AnnotatedImage } from "./scenes/AnnotatedImage";

const A = COLORS.accent;

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "s2_01", start: 3.8, dur: 13.32, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="05" title="El sonido" label="Lo hacés mal" hue="amber" /> },
  { key: "s2_02", start: 17.12, dur: 8.4, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/sandia_sonido.png" hue="amber" kicker="Golpe firme con los nudillos" zoom={[1.06,1.18]} /> },
  { key: "s2_03", start: 25.52, dur: 16.1, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/sandia_sonido.png" eyebrow="Madura" words={parseQuote("Suena *hueca y profunda*. Un tambor hondo.")} accent="good" hue="amber" fontSize={74} /> },
  { key: "s2_05", start: 41.62, dur: 14.7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/sandia_sonido.png" hue="cold" kicker="Agudo = verde" zoom={[1.1,1.22]} /> },
  { key: "s2_04", start: 56.32, dur: 8.14, kind: "splitlist", el: (d) => <SplitList durationInFrames={d} title="El sonido lo dice" items={["Grave y hueco = DULCE","Agudo y tieso = verde","Sordo y apagado = pasada"]} accent={A} /> },
  { key: "s2_06", start: 64.46, dur: 2.2, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="06" title="El peso" label="Lo sentís en el brazo" hue="amber" /> },
  { key: "s2_07", start: 66.2, dur: 8.38, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_pesar_sandia.mp4" hue="amber" kicker="Tiene que pesar" zoom={[1.05,1.16]} /> },
  { key: "s2_08", start: 74.58, dur: 8.1, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/comparar_peso.png" eyebrow="Por qué pesa" words={parseQuote("Ese peso es *agua*. Es jugo.")} accent="good" hue="amber" fontSize={84} /> },
  { key: "s2_08b", start: 82.68, dur: 11.62, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/sandia_palida.png" eyebrow="Liviana" words={parseQuote("Más seca, más *vieja*.")} accent="danger" hue="red" fontSize={84} /> },
  { key: "s2_09", start: 94.3, dur: 10.2, kind: "process", el: (d) => <ProcessSteps durationInFrames={d} steps={[{"title":"Dos del mismo tamaño","desc":"Una en cada mano","image":"img/comparar_peso.png"},{"title":"La más pesada","desc":"Esa te llevás","image":"img/comparar_peso.png"}]} eyebrow="El truco del abuelo" title="Comparála" accent="amber" hue="amber" /> },
  { key: "s2_10", start: 104.5, dur: 3.64, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/comparar_peso.png" impact="LA MÁS PESADA" setup="Del mismo tamaño" impactAccent="good" hitAt={2} boom={1} /> },
  { key: "s2_11", start: 108.14, dur: 16.46, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="07" title="La cáscara mate" label="El ojo te engaña" hue="amber" /> },
  { key: "s2_12", start: 124.6, dur: 9.9, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/sandia_brillante.png" annotations={[{"kind":"circle","x":50,"y":48,"w":28,"h":24,"label":"Brillo = joven"}]} eyebrow="Muy brillante" caption="Encerada = VERDE" hue="cold" /> },
  { key: "s2_13", start: 134.5, dur: 10.08, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/sandia_mate.png" annotations={[{"kind":"circle","x":50,"y":48,"w":28,"h":24,"label":"Mate = madura"}]} eyebrow="Madura" caption="Mate y opaca = lista" hue="cold" /> },
  { key: "s2_13b", start: 144.58, dur: 8.86, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/sandia_brillante.png" hue="cold" kicker="La más brillante = verde" zoom={[1.05,1.16]} /> },
  { key: "s2_14", start: 153.44, dur: 23.22, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/sandia_mate.png" eyebrow="La opaca y fea" words={parseQuote("Esa es la *joya*.")} accent="good" hue="amber" fontSize={92} /> },
  { key: "s2_15", start: 176.66, dur: 2.2, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Las 7 señales, juntas" hue="amber" accent="amber" avatar="sandia2_opt.mp4" avatarFrom={sec(176.66)} slides={[{"image":"img/dg_7senales.png","title":"De la más importante a la última"}]} /> },
  { key: "s2_14b", start: 176.66, dur: 13.7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/sandia_roja.png" hue="cold" kicker="Juntemos todo" zoom={[1.06,1.18]} /> },
  { key: "s2_16", start: 190.36, dur: 7, kind: "checklist", el: (d) => <Checklist durationInFrames={d} title="Las 7 señales" items={[{"text":"Mancha amarilla cremosa","state":"done"},{"text":"Marcas marrones (abejas)","state":"done"},{"text":"Círculo de abajo chiquito","state":"done"},{"text":"Zarcillo seco","state":"done"},{"text":"Suena hueca y grave","state":"done"},{"text":"Pesada para su tamaño","state":"done"},{"text":"Cáscara mate, no brillante","state":"done"}]} eyebrow="En orden, rapidito" accent="good" hue="amber" /> },
  { key: "s2_r2", start: 197.36, dur: 9.28, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/marcas_abejas.png" hue="amber" kicker="2 · Marcas marrones" zoom={[1.1,1.05]} /> },
  { key: "s2_r3", start: 206.64, dur: 2.2, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/circulo_chico.png" hue="cold" kicker="3 · Círculo chico" zoom={[1.18,1.04]} /> },
  { key: "s2_r4", start: 208.82, dur: 4.56, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/zarcillo_seco.png" hue="cold" kicker="4 · Zarcillo seco" zoom={[1.1,1.22]} /> },
  { key: "s2_r5", start: 213.38, dur: 3.8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/sandia_sonido.png" hue="amber" kicker="5 · Hueca y grave" zoom={[1.06,1.18]} /> },
  { key: "s2_r6", start: 217.18, dur: 5.32, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/comparar_peso.png" hue="amber" kicker="6 · Pesada" zoom={[1.05,1.16]} /> },
  { key: "s2_r7", start: 222.5, dur: 9.2, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/sandia_mate.png" hue="cold" kicker="7 · Mate" zoom={[1.06,1.18]} /> },
  { key: "s2_17", start: 231.7, dur: 18.84, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/sandia_fea.png" impact="CON ESAS 3 NO FALLÁS" setup="Mancha + sonido + peso" impactAccent="good" hitAt={2} boom={1} /> },
  { key: "s2_18", start: 250.54, dur: 8.7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_sandia_heladera.mp4" hue="cold" kicker="Último consejo: al fresco" zoom={[1.05,1.16]} /> },
  { key: "s2_19", start: 259.24, dur: 5.38, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/sandia_roja.png" eyebrow="Sandía fría, día de calor" words={parseQuote("De las cosas más *buenas* que da la tierra.")} accent="good" hue="amber" fontSize={74} /> },
  { key: "s2_19b", start: 264.62, dur: 8.66, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/sandia_brillante.png" hue="cold" kicker="Dejaste de elegir con el ojo" zoom={[1.05,1.16]} /> },
  { key: "s2_19c", start: 273.28, dur: 20.3, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/mancha_amarilla.png" hue="cold" kicker="Por las señales verdaderas" zoom={[1.18,1.05]} /> },
  { key: "s2_20", start: 293.58, dur: 7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_familia_sandia.mp4" hue="cold" kicker="Roja, jugosa y dulce" zoom={[1.04,1.14]} /> },
  { key: "s2_21", start: 300.58, dur: 2.7, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/sandia_roja.png" eyebrow="Y va a parecer que vos" words={parseQuote("Siempre *elegís bien*.")} accent="good" hue="amber" fontSize={90} /> },
  { key: "s2_22", start: 303.28, dur: 20.68, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/comentarios_huerta.png" hue="cold" kicker="Contame en los comentarios" zoom={[1.05,1.16]} /> },
  { key: "s2_23", start: 323.96, dur: 17.66, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/melon.png" hue="amber" kicker="La próxima: el melón" zoom={[1.06,1.18]} /> },
  { key: "s2_24", start: 341.62, dur: 2.2, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/sandia_mate.png" eyebrow="No te dejes engañar" words={parseQuote("Así elegían *los viejos*.")} accent="good" hue="amber" fontSize={88} /> },
];

export const REFRAME: { start: number; end: number }[] = [];
