// cues_parte2.gen.tsx — GENERADO por beatsheet.mjs desde parte2.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/parte2.json
import { ReactNode } from "react";
import { sec, COLORS } from "./theme";
import { RawShot } from "./scenes/RawShot";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { ChipsCluster } from "./scenes/ReframeContent";
import { SplitList } from "./scenes/SplitList";
import { AvatarPresentation } from "./scenes/AvatarPresentation";
import { StatBig } from "./scenes/StatBig";
import { ProcessSteps } from "./scenes/ProcessSteps";
import { AnnotatedImage } from "./scenes/AnnotatedImage";

const A = COLORS.accent;

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "p2_01", start: 1.06, dur: 9.66, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/huerta_junio.png" hue="amber" kicker="El saber de la huerta" zoom={[1.04,1.14]} /> },
  { key: "p2_02", start: 10.72, dur: 3.74, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/tomatera_grande.png" hue="amber" kicker="Cómo se hace" zoom={[1.06,1.18]} /> },
  { key: "p2_03", start: 14.46, dur: 8.46, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Los 2 tipos de tomatera" hue="amber" accent="amber" avatar="parte2_opt.mp4" avatarFrom={sec(14.46)} slides={[{"image":"img/dg_tipos_tomatera.png","title":"Determinada vs Indeterminada"}]} /> },
  { key: "p2_04", start: 22.92, dur: 10.6, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/dos_tomateras.png" eyebrow="Ojo" words={parseQuote("Si podás uno como el otro, le *bajás* la cosecha.")} accent="danger" hue="amber" fontSize={76} /> },
  { key: "p2_05", start: 33.52, dur: 2.2, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/etiqueta_vivero.png" hue="cold" kicker="Lo dice la etiqueta" zoom={[1.2,1.05]} /> },
  { key: "p2_06", start: 35.72, dur: 8.6, kind: "splitlist", el: (d) => <SplitList durationInFrames={d} title="Las dos familias" items={["Determinado: sabe cuándo parar","Indeterminado: no para nunca"]} accent={A} /> },
  { key: "p2_07", start: 44.32, dur: 4.4, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/determinada_planta.png" hue="amber" kicker="Determinado: de mata" zoom={[1.05,1.16]} /> },
  { key: "p2_08", start: 48.72, dur: 6.92, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={1} suffix=" metro" label="crece hasta ~1 metro y para" eyebrow="Determinado" accent="amber" hue="amber" /> },
  { key: "p2_09", start: 55.64, dur: 10.72, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={3} suffix=" semanas" label="toda la fruta casi de golpe" eyebrow="Madura junto" accent="amber" hue="amber" /> },
  { key: "p2_10", start: 66.36, dur: 9.12, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/frascos_salsa.png" hue="red" kicker="Ideal para conservas" zoom={[1.06,1.2]} /> },
  { key: "p2_11", start: 75.48, dur: 6.42, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/roma_tomates.png" title="Variedades determinadas" chips={["Roma","San Marzano","Perita","De salsa"]} hue="amber" /> },
  { key: "p2_12", start: 81.9, dur: 8.56, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/indeterminada_planta.png" hue="cold" kicker="Indeterminado: trepador" zoom={[1.04,1.18]} /> },
  { key: "p2_13", start: 90.46, dur: 3.42, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/marana_centro.png" hue="cold" kicker="Flores y fruta sin parar" zoom={[1.16,1.04]} /> },
  { key: "p2_14", start: 93.88, dur: 8.22, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/helada_planta.png" hue="cold" kicker="Hasta que llega la helada" zoom={[1.05,1.16]} /> },
  { key: "p2_15", start: 102.1, dur: 6.98, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={100} suffix=" tomates" label="de una sola planta, todo el verano" eyebrow="Indeterminado" accent="good" hue="amber" /> },
  { key: "p2_16", start: 109.08, dur: 11.04, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/cosecha_canasto.png" hue="cold" kicker="Fresco todo el verano" zoom={[1.05,1.18]} /> },
  { key: "p2_17", start: 120.12, dur: 2.2, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/cherry_tomates.png" title="Variedades indeterminadas" chips={["Cherry","De semilla heredada","Antiguos"]} hue="amber" /> },
  { key: "p2_18", start: 121.78, dur: 7.08, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="¿Cuál tenés?" hue="amber" accent="amber" avatar="parte2_opt.mp4" avatarFrom={sec(121.78)} slides={[{"image":"img/dg_cual_tienes.png","title":"Mirá la punta a mitad del verano"}]} /> },
  { key: "p2_19", start: 128.86, dur: 11.46, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/punta_tallo.png" annotations={[{"kind":"circle","x":50,"y":28,"w":18,"h":18,"label":"Botón en la punta"}]} eyebrow="Si la punta ya floreció" caption="= Determinada (llegó a su fin)" hue="amber" /> },
  { key: "p2_20", start: 140.32, dur: 14.08, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/indeterminada_planta.png" hue="cold" kicker="Si sigue creciendo = Indeterminada" zoom={[1.06,1.2]} /> },
  { key: "p2_21", start: 154.4, dur: 5.12, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Las partes de la planta" hue="cold" accent="good" avatar="parte2_opt.mp4" avatarFrom={sec(154.4)} slides={[{"image":"img/dg_partes_planta.png","title":"Tallo, hojas, racimos y chupón"}]} /> },
  { key: "p2_22", start: 159.52, dur: 14.5, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/tallo_principal.png" annotations={[{"kind":"arrow","x":50,"y":50,"fromX":72,"fromY":28,"label":"Tallo principal"}]} eyebrow="El tallo principal" caption="El tronco vertical del centro" hue="cold" /> },
  { key: "p2_23", start: 174.02, dur: 12.1, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/hoja_sol.png" annotations={[{"kind":"circle","x":48,"y":46,"w":22,"h":22,"label":"Capta la luz"}]} eyebrow="Las hojas son buenas" caption="Fábrica de energía con el sol" hue="cold" /> },
  { key: "p2_24", start: 186.12, dur: 11.9, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/racimo_flores.png" annotations={[{"kind":"circle","x":50,"y":50,"w":24,"h":24,"label":"Futuro tomate"}]} eyebrow="Los racimos de flores" caption="Esto se vuelve tomate" hue="amber" /> },
  { key: "p2_25", start: 198.02, dur: 6.08, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/racimo_flores.png" eyebrow="Regla de oro" words={parseQuote("Un racimo de flores *jamás* se corta. Nunca.")} accent="danger" hue="amber" fontSize={84} /> },
  { key: "p2_26", start: 204.1, dur: 19.24, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="El chupón" hue="red" accent="danger" avatar="parte2_opt.mp4" avatarFrom={sec(204.1)} slides={[{"image":"img/dg_chupon.png","title":"Una segunda planta robando fuerza"}]} /> },
  { key: "p2_27", start: 223.34, dur: 13.68, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/planta_sobrevive.png" hue="red" kicker="Es otra planta arrancando" zoom={[1.05,1.18]} /> },
  { key: "p2_28", start: 237.02, dur: 12.36, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/marana_centro.png" title="El chupón compite por" chips={["Agua","Comida","Sol"]} hue="red" /> },
  { key: "p2_29", start: 249.38, dur: 8.7, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/chupon_axila.png" annotations={[{"kind":"arrow","x":52,"y":48,"fromX":74,"fromY":26,"label":"Chupón a 45°"}]} eyebrow="Cómo reconocerlo" caption="Brote en diagonal, en la axila" hue="red" /> },
  { key: "p2_30", start: 258.08, dur: 5.02, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/quitar_brotes.mp4" hue="amber" kicker="Joven: con los dedos" zoom={[1.1,1.24]} /> },
  { key: "p2_31", start: 263.1, dur: 4.28, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/tijeras_planta.png" hue="amber" kicker="Grande: tijera limpia" zoom={[1.08,1.22]} /> },
  { key: "p2_32", start: 267.38, dur: 5.98, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/quitar_brotes.png" eyebrow="Toda la poda, en una frase" words={parseQuote("Saber qué chupones *quitar* y cuáles dejar.")} accent="good" hue="amber" fontSize={80} /> },
  { key: "p2_33", start: 273.36, dur: 16.26, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/determinada_planta.png" hue="amber" kicker="El determinado: el fácil" zoom={[1.05,1.16]} /> },
  { key: "p2_34", start: 289.62, dur: 6.26, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/racimo_flores.png" eyebrow="Cuidado" words={parseQuote("Si cortás de más, le cortás *fruta*.")} accent="danger" hue="amber" fontSize={78} /> },
  { key: "p2_35", start: 295.88, dur: 17.94, kind: "process", el: (d) => <ProcessSteps durationInFrames={d} steps={[{"title":"Buscá el 1º racimo de flores","desc":"A un palmo del suelo","image":"img/racimo_flores.png"},{"title":"Quitá solo los chupones de abajo","desc":"Los que salen por debajo del racimo","image":"img/quitar_brotes.png"},{"title":"Arriba, nada","desc":"No toques sobre el racimo","image":"img/determinada_planta.png"}]} eyebrow="Poda del determinado" title="Casi no tocás nada" accent="amber" hue="amber" /> },
  { key: "p2_36", start: 313.82, dur: 2.22, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/manchas_hoja.png" annotations={[{"kind":"arrow","x":50,"y":70,"fromX":70,"fromY":90,"label":"Sube del suelo"}]} eyebrow="Por qué los de abajo" caption="La enfermedad vive en la tierra" hue="red" /> },
  { key: "p2_37", start: 316.04, dur: 6.62, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/manchas_hoja.png" title="Vive en el suelo" chips={["Tizón","Mancha de la hoja","Septoria"]} hue="red" /> },
  { key: "p2_38", start: 322.66, dur: 7.62, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/tierra_base.mp4" hue="cold" kicker="El agua salpica la enfermedad" zoom={[1.06,1.2]} /> },
  { key: "p2_40", start: 330.28, dur: 2.78, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/quitar_hojas.mp4" hue="amber" kicker="Quitá los 6-7 de abajo" zoom={[1.1,1.22]} /> },
  { key: "p2_39", start: 333.06, dur: 2.2, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Levantar la falda" hue="cold" accent="good" avatar="parte2_opt.mp4" avatarFrom={sec(333.06)} slides={[{"image":"img/dg_falda_aire.png","title":"Aire que circula = planta sana"}]} /> },
  { key: "p2_41", start: 335.1, dur: 2.26, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/quitar_hojas.png" hue="cold" kicker="Aire para que circule" zoom={[1.05,1.16]} /> },
  { key: "p2_42", start: 337.36, dur: 5.58, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/arbusto_verde.mp4" hue="cold" kicker="La planta respira mejor" zoom={[1.04,1.14]} /> },
  { key: "p2_43", start: 342.94, dur: 2.2, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/cosecha_sana.png" hue="cold" kicker="La enfermedad la tiene difícil" zoom={[1.05,1.18]} /> },
];

export const REFRAME: { start: number; end: number }[] = [];
