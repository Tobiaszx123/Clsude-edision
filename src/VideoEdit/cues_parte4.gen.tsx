// cues_parte4.gen.tsx — GENERADO por beatsheet.mjs desde parte4.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/parte4.json
import { ReactNode } from "react";
import { sec, COLORS } from "./theme";
import { RawShot } from "./scenes/RawShot";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { ChipsCluster } from "./scenes/ReframeContent";
import { SplitList } from "./scenes/SplitList";
import { AvatarPresentation } from "./scenes/AvatarPresentation";
import { StatBig } from "./scenes/StatBig";
import { ImpactReveal } from "./scenes/ImpactReveal";
import { ProcessSteps } from "./scenes/ProcessSteps";

const G = COLORS.good;

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "p4_01", start: 0.94, dur: 10.64, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/chupon_fuerte.png" eyebrow="Un regalo del tomate" words={parseQuote("Un truco que casi *nadie* sabe.")} accent="good" hue="amber" fontSize={88} /> },
  { key: "p4_02", start: 11.58, dur: 3.42, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/chupon_axila.png" hue="amber" kicker="Ese chupón: no lo tires" zoom={[1.08,1.22]} /> },
  { key: "p4_03", start: 15, dur: 2.2, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/esqueje_agua.png" hue="cold" kicker="En un vaso con agua" zoom={[1.06,1.18]} /> },
  { key: "p4_04", start: 16.12, dur: 4.38, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/esqueje_raices.png" hue="cold" kicker="Echa raíces solo" zoom={[1.2,1.05]} /> },
  { key: "p4_05", start: 20.5, dur: 15.58, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/esqueje_agua.png" title="La planta nueva es" chips={["Misma variedad","Mismo vigor","Gratis"]} hue="amber" /> },
  { key: "p4_06", start: 36.08, dur: 5.2, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/esqueje_maceta.png" hue="amber" kicker="O enterrado en una maceta" zoom={[1.06,1.18]} /> },
  { key: "p4_07", start: 41.28, dur: 8.34, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={2} suffix=" semanas" label="una planta joven para trasplantar" eyebrow="Y listo" accent="good" hue="amber" /> },
  { key: "p4_08", start: 49.62, dur: 8.64, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/planta_joven_nueva.png" hue="cold" kicker="Climas cálidos: 2ª cosecha" zoom={[1.05,1.16]} /> },
  { key: "p4_09", start: 58.26, dur: 3.2, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/nieto_huerta.png" hue="amber" kicker="O regalársela a un nieto" zoom={[1.05,1.18]} /> },
  { key: "p4_10", start: 61.46, dur: 5.2, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/planta_joven_nueva.png" eyebrow="El regalo" words={parseQuote("Plantas *gratis* de algo que ibas a tirar.")} accent="good" hue="amber" fontSize={78} /> },
  { key: "p4_11", start: 66.66, dur: 3.36, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/cosecha_sana.png" eyebrow="Mirá lo que recorrimos" words={parseQuote("Acá es donde *todo se junta*.")} accent="good" hue="amber" fontSize={88} /> },
  { key: "p4_12", start: 70.02, dur: 3.48, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="El recorrido" hue="amber" accent="amber" avatar="parte4_opt.mp4" avatarFrom={sec(70.02)} slides={[{"image":"img/dg_tipos_tomatera.png","title":"1 · Los 2 tipos, poda distinta"}]} /> },
  { key: "p4_13", start: 73.5, dur: 4.4, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/cosecha_canasto.png" hue="cold" kicker="2 · De 15 a 30 kilos" zoom={[1.05,1.18]} /> },
  { key: "p4_14", start: 77.9, dur: 3.6, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/quitar_hojas.png" hue="cold" kicker="3 · Hojas de abajo" zoom={[1.06,1.18]} /> },
  { key: "p4_15", start: 81.5, dur: 3.02, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/limpiar_tijera.png" hue="cold" kicker="4 · Herramienta limpia" zoom={[1.08,1.2]} /> },
  { key: "p4_16", start: 84.52, dur: 3.72, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/poda_manana.png" hue="amber" kicker="5 · Poda de mañana" zoom={[1.05,1.16]} /> },
  { key: "p4_17", start: 88.24, dur: 4.2, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/cortar_punta.mp4" hue="amber" kicker="6 · El corte final" zoom={[1.08,1.22]} /> },
  { key: "p4_18", start: 92.44, dur: 7.38, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/esqueje_maceta.png" hue="cold" kicker="7 · Plantas gratis" zoom={[1.06,1.18]} /> },
  { key: "p4_19", start: 99.82, dur: 8.42, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/mujer_campo.png" hue="amber" kicker="No es teoría: el saber de siempre" zoom={[1.04,1.14]} /> },
  { key: "p4_20", start: 108.24, dur: 16.86, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/universidad_estudio.png" hue="cold" kicker="Y la ciencia lo confirmó" zoom={[1.05,1.16]} /> },
  { key: "p4_21", start: 125.1, dur: 3.52, kind: "splitlist", el: (d) => <SplitList durationInFrames={d} title="Los viejos y la universidad" items={["Los viejos: por el tacto","La ciencia: en pruebas","Dicen lo mismo"]} accent={G} /> },
  { key: "p4_22", start: 128.62, dur: 2.82, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/semillas_paquetes.png" impact="TE CONVIENE PODAR" setup="Una verdad incómoda" impactAccent="danger" hitAt={1.2199999999999998} boom={1} /> },
  { key: "p4_23", start: 131.44, dur: 19.08, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/semillas_paquetes.png" eyebrow="A la industria de la semilla" words={parseQuote("No le conviene enseñarte a *podar bien*.")} accent="danger" hue="red" fontSize={76} /> },
  { key: "p4_24", start: 150.52, dur: 8.62, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/mujer_campo.png" hue="amber" kicker="El saber pasa de madre a hija" zoom={[1.05,1.16]} /> },
  { key: "p4_25", start: 159.14, dur: 4.12, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/dos_tomateras.png" eyebrow="Vos" words={parseQuote("Podés ser el que *recuerde* la forma de antes.")} accent="good" hue="amber" fontSize={80} /> },
  { key: "p4_26", start: 163.26, dur: 2.98, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/tomatera_grande.png" impact="ESTA SEMANA" setup="Esto es lo que quiero que hagas" impactAccent="good" hitAt={1.38} boom={1} /> },
  { key: "p4_27", start: 166.24, dur: 9.98, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/etiqueta_vivero.png" hue="cold" kicker="1 · Revisá la etiqueta" zoom={[1.18,1.05]} /> },
  { key: "p4_28", start: 176.22, dur: 10.48, kind: "process", el: (d) => <ProcessSteps durationInFrames={d} steps={[{"title":"Buscá el 1er racimo","desc":"A un palmo del suelo","image":"img/racimo_flores.png"},{"title":"Quitá los de abajo","desc":"Menos el fuerte","image":"img/quitar_brotes.png"},{"title":"Dejá el resto","desc":"No toques arriba","image":"img/determinada_planta.png"}]} eyebrow="La tarea" title="Determinadas" accent="amber" hue="amber" /> },
  { key: "p4_29", start: 186.7, dur: 13.48, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/dos_guias.png" hue="cold" kicker="Indeterminadas: elegí guías" zoom={[1.05,1.16]} /> },
  { key: "p4_30", start: 200.18, dur: 4.64, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/quitar_hojas.png" hue="cold" kicker="Sacá las hojas del suelo" zoom={[1.06,1.18]} /> },
  { key: "p4_31", start: 204.82, dur: 9.42, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/cortar_punta.mp4" hue="amber" kicker="Despuntá antes de la helada" zoom={[1.08,1.22]} /> },
  { key: "p4_32", start: 214.24, dur: 10.2, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/esqueje_maceta.png" hue="cold" kicker="Y plantá los chupones sanos" zoom={[1.06,1.18]} /> },
  { key: "p4_33", start: 224.44, dur: 8.9, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/comentarios_huerta.png" hue="cold" kicker="Contame en los comentarios" zoom={[1.05,1.16]} /> },
  { key: "p4_34", start: 233.34, dur: 23.46, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/mujer_campo.png" eyebrow="Contame" words={parseQuote("¿Cuál es la variedad de *tu familia*?")} accent="good" hue="amber" fontSize={80} /> },
  { key: "p4_35", start: 256.8, dur: 25.18, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/frascos_salsa.png" hue="red" kicker="La próxima: Rosa y las conservas" zoom={[1.05,1.18]} /> },
  { key: "p4_36", start: 281.98, dur: 2.2, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/cosecha_sana.png" eyebrow="Hasta entonces" words={parseQuote("Confiá: la planta da mejor con una *mano cuidadosa*.")} accent="good" hue="amber" fontSize={74} /> },
];

export const REFRAME: { start: number; end: number }[] = [];
