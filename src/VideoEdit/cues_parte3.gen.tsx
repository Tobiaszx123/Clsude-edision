// cues_parte3.gen.tsx — GENERADO por beatsheet.mjs desde parte3.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/parte3.json
import { ReactNode } from "react";
import { sec } from "./theme";
import { RawShot } from "./scenes/RawShot";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { ChipsCluster } from "./scenes/ReframeContent";
import { AvatarPresentation } from "./scenes/AvatarPresentation";
import { StatBig } from "./scenes/StatBig";
import { ImpactReveal } from "./scenes/ImpactReveal";
import { ProcessSteps } from "./scenes/ProcessSteps";
import { AnnotatedImage } from "./scenes/AnnotatedImage";

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "p3_01", start: 0.24, dur: 2.94, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/chupon_axila.png" eyebrow="Una excepción que vale oro" words={parseQuote("Hay *una* sola excepción.")} accent="good" hue="amber" fontSize={92} /> },
  { key: "p3_02", start: 3.18, dur: 4.3, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/universidad_estudio.png" hue="cold" kicker="Lo estudiaron los agrónomos" zoom={[1.05,1.16]} /> },
  { key: "p3_03", start: 7.48, dur: 5.28, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/chupon_fuerte.png" annotations={[{"kind":"arrow","x":50,"y":50,"fromX":74,"fromY":28,"label":"Dejá este"}]} eyebrow="El chupón fuerte" caption="El de justo debajo del 1er racimo" hue="cold" /> },
  { key: "p3_04", start: 12.76, dur: 5.1, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/chupon_fuerte.png" eyebrow="Ese sí" words={parseQuote("Se vuelve una rama *cargada de fruta*.")} accent="good" hue="amber" fontSize={80} /> },
  { key: "p3_05", start: 17.86, dur: 6.48, kind: "process", el: (d) => <ProcessSteps durationInFrames={d} steps={[{"title":"Quitá los 6-7 de abajo","desc":"Debajo del 1er racimo","image":"img/quitar_brotes.png"},{"title":"Dejá el fuerte","desc":"El de justo debajo del racimo","image":"img/chupon_fuerte.png"},{"title":"El resto, libre","desc":"Dejalo crecer como quiera","image":"img/determinada_planta.png"}]} eyebrow="Determinado: el resumen" title="Quitá abajo, dejá el fuerte" accent="amber" hue="amber" /> },
  { key: "p3_06", start: 24.34, dur: 14.92, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/cosecha_sana.png" hue="cold" kicker="Un buen empujón en la cosecha" zoom={[1.05,1.18]} /> },
  { key: "p3_07", start: 39.26, dur: 3.6, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/determinada_planta.png" eyebrow="Determinado" words={parseQuote("Poda *ligera*, solo abajo. Es suficiente.")} accent="amber" hue="amber" fontSize={80} /> },
  { key: "p3_08", start: 42.86, dur: 9.92, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/indeterminada_planta.png" hue="cold" kicker="El indeterminado: el trabajo grande" zoom={[1.04,1.18]} /> },
  { key: "p3_09", start: 52.78, dur: 4.5, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/selva_jungla.png" hue="red" kicker="Abandonada se vuelve una selva" zoom={[1.05,1.18]} /> },
  { key: "p3_10", start: 57.28, dur: 4.02, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={200} suffix=" chupones" label="cada uno quiere ser su propia planta" eyebrow="La selva" accent="danger" hue="red" /> },
  { key: "p3_11", start: 61.3, dur: 8.02, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/marana_centro.png" title="Condiciones para la enfermedad" chips={["Centro oscuro","Húmedo","Sin aire"]} hue="red" /> },
  { key: "p3_12", start: 69.32, dur: 6.92, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/tomate_pocos.png" eyebrow="Y la fruta" words={parseQuote("Chica: repartió su fuerza en *demasiados* puntos.")} accent="danger" hue="red" fontSize={74} /> },
  { key: "p3_13", start: 76.24, dur: 8.16, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="El principio: elegí cuántos tallos" hue="amber" accent="amber" avatar="parte3_opt.mp4" avatarFrom={sec(76.24)} slides={[{"image":"img/dg_guias.png","title":"1, 2 o 3 guías"}]} /> },
  { key: "p3_14", start: 84.4, dur: 10.92, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/una_guia.png" hue="cold" kicker="1 guía: un solo tallo" zoom={[1.06,1.18]} /> },
  { key: "p3_15", start: 95.32, dur: 12.58, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/una_guia.png" title="1 guía" chips={["Fruta más grande","Fácil de cuidar","Cosecha total menor"]} hue="amber" /> },
  { key: "p3_16", start: 107.9, dur: 21.46, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/dos_guias.png" hue="cold" kicker="2 guías: dos tallos (lo recomendado)" zoom={[1.05,1.16]} /> },
  { key: "p3_17", start: 129.36, dur: 2.2, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/dos_guias.png" eyebrow="Lo que la mayoría hace" words={parseQuote("Es lo que *yo* hago casi todos los años.")} accent="good" hue="amber" fontSize={80} /> },
  { key: "p3_18", start: 131.12, dur: 11.64, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/tres_guias.png" hue="amber" kicker="3 guías: para jaulas y espacio" zoom={[1.06,1.2]} /> },
  { key: "p3_19", start: 142.76, dur: 4.44, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/dos_guias.png" eyebrow="La regla" words={parseQuote("Elegí tu número y *mantenete* en él.")} accent="good" hue="amber" fontSize={84} /> },
  { key: "p3_20", start: 147.2, dur: 21.62, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/caminar_hilera.png" hue="cold" kicker="Una vez por semana" zoom={[1.04,1.16]} /> },
  { key: "p3_21", start: 168.82, dur: 11.2, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/quitar_brotes.mp4" hue="amber" kicker="Chiquitos: con los dedos" zoom={[1.1,1.24]} /> },
  { key: "p3_22", start: 180.02, dur: 11.94, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/tijeras_planta.png" hue="amber" kicker="Grandes y leñosos: tijera" zoom={[1.08,1.22]} /> },
  { key: "p3_23", start: 191.96, dur: 4.76, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/limpiar_tijera.png" hue="cold" kicker="Limpiá entre planta y planta" zoom={[1.06,1.2]} /> },
  { key: "p3_24", start: 196.72, dur: 4.54, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/limpiar_tijera.png" impact="TIJERA SUCIA" setup="El error número uno que veo" impactAccent="danger" hitAt={3} boom={1} /> },
  { key: "p3_25", start: 201.26, dur: 9.7, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/manchas_hoja.png" annotations={[{"kind":"circle","x":50,"y":50,"w":22,"h":22,"label":"Contagio"}]} eyebrow="Cómo se contagia" caption="La enfermedad viaja en la tijera" hue="red" /> },
  { key: "p3_26", start: 210.96, dur: 2.96, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/limpiar_tijera.png" eyebrow="Un trapito con alcohol" words={parseQuote("Eso es todo. Te ahorra la *huerta entera*.")} accent="good" hue="amber" fontSize={82} /> },
  { key: "p3_27", start: 213.92, dur: 14.62, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/poda_manana.png" hue="amber" kicker="Podá de mañana, día seco" zoom={[1.05,1.18]} /> },
  { key: "p3_28", start: 228.54, dur: 6.98, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/manchas_hoja.png" eyebrow="Nunca con humedad" words={parseQuote("Podar mojado = *repartir el tizón* por toda la huerta.")} accent="danger" hue="red" fontSize={70} /> },
  { key: "p3_29", start: 235.52, dur: 5.38, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/quitar_hojas.mp4" hue="cold" kicker="Quitá las hojas de abajo" zoom={[1.1,1.22]} /> },
  { key: "p3_30", start: 240.9, dur: 10.44, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/quitar_hojas.png" hue="cold" kicker="Las que tocan el suelo" zoom={[1.06,1.18]} /> },
  { key: "p3_31", start: 251.34, dur: 3.66, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/arbusto_verde.mp4" hue="cold" kicker="La falda despejada" zoom={[1.04,1.14]} /> },
  { key: "p3_32", start: 255, dur: 35.08, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/corte_final.mp4" hue="amber" kicker="El despunte: el corte final" zoom={[1.06,1.18]} /> },
  { key: "p3_33", start: 290.08, dur: 25.6, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/helada_planta.png" hue="cold" kicker="La helada se acerca" zoom={[1.05,1.16]} /> },
  { key: "p3_34", start: 315.68, dur: 11.48, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/marana_centro.png" eyebrow="El crecimiento tardío" words={parseQuote("Es fuerza *robada* a los tomates que ya tenés.")} accent="danger" hue="amber" fontSize={74} /> },
  { key: "p3_35", start: 327.16, dur: 4.68, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/cortar_punta.mp4" hue="amber" kicker="Cortarle la punta = despuntar" zoom={[1.08,1.24]} /> },
  { key: "p3_36", start: 331.84, dur: 19.79, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={4} suffix=" semanas" label="antes de la primera helada" eyebrow="El timing" accent="amber" hue="amber" /> },
  { key: "p3_37", start: 351.63, dur: 16, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/corte_final.png" eyebrow="Le decís a la planta" words={parseQuote("La temporada se acabó. *Madurá* lo que tenés.")} accent="good" hue="amber" fontSize={78} /> },
  { key: "p3_38", start: 367.63, dur: 11.78, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/tomate_madurando.png" hue="cold" kicker="Se ponen rosados y rojos" zoom={[1.05,1.18]} /> },
  { key: "p3_39", start: 379.41, dur: 6.96, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={30} suffix=" extra" label="tomates que se habrían perdido" eyebrow="El despunte rinde" accent="good" hue="amber" /> },
  { key: "p3_40", start: 386.37, dur: 2.2, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/cosecha_sana.png" eyebrow="El corte final" words={parseQuote("Fuerte, tardío y *vale oro*.")} accent="good" hue="amber" fontSize={88} /> },
];

export const REFRAME: { start: number; end: number }[] = [];
