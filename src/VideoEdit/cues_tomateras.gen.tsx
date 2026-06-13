// cues_tomateras.gen.tsx — GENERADO por beatsheet.mjs desde tomateras.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/tomateras.json
import { ReactNode } from "react";
import { sec, COLORS } from "./theme";
import { RawShot } from "./scenes/RawShot";
import { BigImpact, FloatingBubbles, InfoCard } from "./scenes/Bold";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { SplitList } from "./scenes/SplitList";
import { AvatarPresentation } from "./scenes/AvatarPresentation";
import { StatBig } from "./scenes/StatBig";
import { JourneyCanvas } from "./scenes/JourneyCanvas";
import { BarCompare } from "./scenes/BarCompare";
import { ProcessSteps } from "./scenes/ProcessSteps";
import { AnnotatedImage } from "./scenes/AnnotatedImage";

const G = COLORS.good, D = COLORS.danger;

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "t01", start: 0, dur: 14.86, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/tomatera_grande.png" hue="amber" kicker="Tu tomatera, hermosa" zoom={[1.04,1.16]} /> },
  { key: "t02", start: 14.86, dur: 3.44, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/buscar_tomates.mp4" kicker="Pero casi no hay tomates" zoom={[1.06,1.14]} /> },
  { key: "t03", start: 18.3, dur: 2.5, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/tomate_pocos.png" kicker="Chiquitos, en la sombra" zoom={[1.18,1.05]} /> },
  { key: "t04", start: 20.8, dur: 7.64, kind: "bars", el: (d) => <BarCompare durationInFrames={d} bars={[{"label":"Tu mata hoy","value":12,"display":"≈12","tone":"danger"},{"label":"Debería dar","value":50,"display":"50","tone":"good","winner":true}]} title="Lo que da vs lo que debería" unit="tomates" accent="amber" hue="amber" /> },
  { key: "t05", start: 28.44, dur: 15.84, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/manchas_hoja.png" annotations={[{"kind":"circle","x":38,"y":46,"w":16,"h":16,"label":"Círculo café"},{"kind":"arrow","x":64,"y":34,"fromX":82,"fromY":22,"label":"Halo amarillo"}]} eyebrow="Tizón temprano" caption="La señal en las hojas de abajo" hue="red" /> },
  { key: "t06", start: 44.28, dur: 6.8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/rascandose.png" kicker="¿Qué hice mal?" zoom={[1.05,1.13]} /> },
  { key: "t07", start: 51.08, dur: 4.44, kind: "bubbles", el: (d) => <FloatingBubbles durationInFrames={d} image="img/huerta_junio.png" bubbles={["Buena tierra","Buena semilla","Agua a tiempo","Buena estaca"]} side="left" hue="amber" /> },
  { key: "t08", start: 55.52, dur: 10.3, kind: "impact2", el: (d) => <BigImpact durationInFrames={d} image="img/tomatera_hojas.png" lines={["¿TANTAS HOJAS?","¿TAN POCOS TOMATES?"]} align="left" hue="amber" /> },
  { key: "t09", start: 65.82, dur: 7.5, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/tierra_base.png" eyebrow="La respuesta suena al revés" words={parseQuote("Necesitabas *quitarle* cosas. No darle más.")} accent="danger" hue="amber" fontSize={86} /> },
  { key: "t10", start: 73.32, dur: 11.26, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/arbusto_verde.mp4" kicker="Dejada a su aire" zoom={[1.05,1.16]} /> },
  { key: "t11", start: 84.58, dur: 11.7, kind: "journey", el: (d) => <JourneyCanvas durationInFrames={d} eyebrow="Una mata a su aire" title="Por qué casi no hay fruta" worldImage="img/arbusto_verde.png" accent="amber" waypoints={[{"x":18,"y":30,"z":0,"image":"img/marana_centro.png","num":"1","label":"Maraña de hojas","dwell":3,"travel":1.8},{"x":52,"y":58,"z":1,"image":"img/planta_sobrevive.png","num":"2","label":"Ramitas a todos lados","dwell":3,"travel":1.8},{"x":82,"y":36,"z":0,"image":"img/tomate_pocos.png","num":"3","label":"Fruta sin sol","dwell":3.2,"travel":1.6}]} /> },
  { key: "t12", start: 96.28, dur: 11.5, kind: "bubbles", el: (d) => <FloatingBubbles durationInFrames={d} image="img/planta_sobrevive.png" bubbles={["Crece para todos lados","Piensa en reproducirse","No en darte fruta a ti"]} side="left" hue="cold" /> },
  { key: "t13", start: 107.78, dur: 4.44, kind: "process", el: (d) => <ProcessSteps durationInFrames={d} steps={[{"title":"Quitá los brotes laterales","desc":"Antes de que se vuelvan ramas que compiten","image":"img/quitar_brotes.png"},{"title":"Quitá las hojas de abajo","desc":"Para que la tierra no salpique la enfermedad","image":"img/quitar_hojas.png"},{"title":"Cortá la punta al final","desc":"La última fuerza, a madurar la fruta","image":"img/cortar_punta.png"}]} eyebrow="El saber antiguo" title="Las 3 podas que importan" accent="amber" hue="amber" /> },
  { key: "t13b", start: 112.22, dur: 5.46, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/quitar_hojas.mp4" hue="amber" kicker="Las hojas de abajo" zoom={[1.1,1.22]} /> },
  { key: "t13c", start: 117.68, dur: 10.36, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/cortar_punta.mp4" hue="amber" kicker="El corte de la punta" zoom={[1.08,1.24]} /> },
  { key: "t14", start: 128.04, dur: 6.12, kind: "bars", el: (d) => <BarCompare durationInFrames={d} bars={[{"label":"Sin podar","value":15,"display":"15 kg","tone":"danger"},{"label":"Podada","value":30,"display":"30 kg","tone":"good","winner":true}]} title="Misma planta, el doble" unit="kilos" accent="amber" hue="amber" /> },
  { key: "t15", start: 134.16, dur: 8.2, kind: "infocard", el: (d) => <InfoCard durationInFrames={d} image="img/cosecha_canasto.png" title="Misma planta, el doble" items={[{"text":"El doble de tomates"},{"text":"Maduran más temprano"},{"text":"Mucha menos enfermedad"}]} side="left" hue="amber" /> },
  { key: "t16", start: 142.36, dur: 3.92, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/mujer_campo.png" kicker="El saber de siempre" zoom={[1.04,1.14]} /> },
  { key: "t17", start: 146.28, dur: 9.52, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={100} suffix=" años" label="Lo supieron siempre" eyebrow="El saber de la huerta" accent="good" hue="amber" /> },
  { key: "t18", start: 155.8, dur: 3.62, kind: "impact2", el: (d) => <BigImpact durationInFrames={d} image="img/dos_tomateras.png" lines={["HOY TE LO","EXPLICO ENTERO"]} align="left" hue="amber" /> },
  { key: "t19", start: 159.42, dur: 7.34, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Los 2 tipos de tomatera" hue="amber" accent="amber" avatar="tomateras_opt.mp4" avatarFrom={sec(159.42)} slides={[{"image":"img/dg_tipos_tomatera.png","title":"Determinada vs Indeterminada"},{"image":"img/dg_cual_tienes.png","title":"Cómo saber cuál tenés"}]} /> },
  { key: "t20", start: 166.76, dur: 4.34, kind: "splitlist", el: (d) => <SplitList durationInFrames={d} title="La regla de oro" items={["Cortar: brotes laterales y hojas de abajo","Cortar: la punta al final","JAMÁS tocar: el tallo principal con fruta"]} accent={G} /> },
  { key: "t21", start: 171.1, dur: 11.78, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/corte_final.mp4" hue="amber" kicker="El último corte de la temporada" zoom={[1.06,1.18]} /> },
  { key: "t22", start: 182.88, dur: 8.96, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/manos_podando.png" kicker="40 años podando así" zoom={[1.05,1.15]} /> },
  { key: "t23", start: 191.84, dur: 5.38, kind: "splitlist", el: (d) => <SplitList durationInFrames={d} title="La cuenta honesta" items={["El récord de una sola planta para el periódico","El tomate gigante de concurso","Reventar la mata por un número"]} accent={D} cross /> },
  { key: "t24", start: 197.22, dur: 9.06, kind: "infocard", el: (d) => <InfoCard durationInFrames={d} image="img/cosecha_sana.png" title="Lo que de verdad buscamos" items={[{"text":"Más fruta por planta"},{"text":"Plantas más sanas"},{"text":"Una cosecha más larga"}]} side="right" hue="amber" /> },
  { key: "t25", start: 206.28, dur: 8.32, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_cosecha_roja.mp4" kicker="Cosecha pareja y sana" zoom={[1.04,1.12]} /> },
];

export const REFRAME: { start: number; end: number }[] = [{"start":166.76,"end":171.1}];
