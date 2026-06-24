// cues_botella2.gen.tsx — GENERADO por beatsheet.mjs desde botella2.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/botella2.json
import { ReactNode } from "react";
import { sec, COLORS } from "./theme";
import { RawShot } from "./scenes/RawShot";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { ChipsCluster } from "./scenes/ReframeContent";
import { SplitList } from "./scenes/SplitList";
import { AvatarPresentation } from "./scenes/AvatarPresentation";
import { StatBig } from "./scenes/StatBig";
import { ImpactReveal } from "./scenes/ImpactReveal";
import { KineticHeadline } from "./scenes/KineticHeadline";
import { AgedDoc } from "./scenes/AgedDoc";
import { BarCompare } from "./scenes/BarCompare";
import { ProcessSteps } from "./scenes/ProcessSteps";
import { Checklist } from "./scenes/Checklist";
import { RuleNumberScene } from "./scenes/RuleNumberScene";
import { CalloutMark } from "./scenes/CalloutMark";

const D = COLORS.danger;

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "b2_01", start: 1.1, dur: 5.08, kind: "headline", el: (d) => <KineticHeadline durationInFrames={d} tokens={[{"t":"Mirá todo lo que "},{"t":"ganaste","hl":true}]} eyebrow="Con una botella de basura" hue="amber" bg="image" image="img/huerta_verde_botella.png" /> },
  { key: "b2_02", start: 6.18, dur: 3.1, kind: "checklist", el: (d) => <Checklist durationInFrames={d} title="Lo que ganaste" items={[{"text":"Tiempo: regás cada 3-5 días, no cada día","state":"done"},{"text":"Poder irte tranquilo un finde entero","state":"done"},{"text":"Plantas más fuertes (raíces hondas)","state":"done"},{"text":"Plantas más sanas (sin hojas mojadas)","state":"done"},{"text":"Ahorro de agua: cero evaporación","state":"doing"}]} eyebrow="Cinco cosas" accent="good" hue="amber" image="img/huerta_prospera.png" /> },
  { key: "b2_03", start: 9.28, dur: 7.72, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={5} prefix="3-" suffix=" días" label="entre llenada y llenada" eyebrow="Ganaste tiempo" accent="good" hue="amber" /> },
  { key: "b2_04", start: 17, dur: 6.18, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_valija_viaje.mp4" hue="blue" kicker="Te vas tranquilo" zoom={[1.05,1.18]} /> },
  { key: "b2_05", start: 23.18, dur: 2.2, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/plantas_verdes_volver.png" eyebrow="Volvés y..." words={parseQuote("Tus plantas siguen *verdes*, esperándote.")} accent="good" hue="amber" fontSize={82} /> },
  { key: "b2_06", start: 25.04, dur: 8.02, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/raices_hondas_robustas.png" hue="amber" kicker="Raíces hondas y robustas" zoom={[1.18,1.05]} /> },
  { key: "b2_07", start: 33.06, dur: 2.92, kind: "bars", el: (d) => <BarCompare durationInFrames={d} bars={[{"label":"Planta con botella","value":9,"display":"Aguanta","tone":"good","winner":true},{"label":"Planta del vecino","value":3,"display":"Se marchita","tone":"danger"}]} eyebrow="En pleno calor" title="Quién aguanta" accent="good" hue="amber" /> },
  { key: "b2_08", start: 35.98, dur: 4.26, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/hojas_sanas.png" hue="amber" kicker="Plantas más sanas" zoom={[1.06,1.16]} /> },
  { key: "b2_09", start: 40.24, dur: 13.1, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Por qué se enferman menos" hue="amber" accent="good" avatar="botella2_opt.mp4" avatarFrom={sec(40.24)} slides={[{"image":"img/dg_hongos.png","title":"Hojas mojadas = hongos"},{"image":"img/dg_riega_alimenta.png","title":"Riega y alimenta"}]} /> },
  { key: "b2_10", start: 53.34, dur: 6.26, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/gota_raiz_macro.png" eyebrow="Ahorro de agua" words={parseQuote("Cada gota va a la raíz. En sequía, esto es *oro*.")} accent="amber" hue="amber" fontSize={78} /> },
  { key: "b2_11", start: 59.6, dur: 4.58, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="01" title="Tres secretos extra" label="De yapa" hue="amber" /> },
  { key: "b2_12", start: 64.18, dur: 7.1, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/abono_liquido.png" hue="amber" kicker="También alimenta" zoom={[1.16,1.06]} /> },
  { key: "b2_13", start: 71.28, dur: 9.36, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/compost_puñado.png" hue="amber" kicker="Agua de compost o estiércol" zoom={[1.04,1.14]} /> },
  { key: "b2_14", start: 80.64, dur: 5.66, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/abono_gota.png" eyebrow="El primer secreto" words={parseQuote("Riego y *comida* en el mismo gesto.")} accent="good" hue="amber" fontSize={84} /> },
  { key: "b2_15", start: 86.3, dur: 5.66, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/tomate_cargado.png" hue="amber" kicker="Plantas grandes: botella grande" zoom={[1.05,1.18]} /> },
  { key: "b2_16", start: 91.96, dur: 3.22, kind: "callout", el: (d) => <CalloutMark durationInFrames={d} figure="x2" image="img/dos_botellas.png" eyebrow="Plantas grandes" caption="una botella de cada lado" accent="good" hue="amber" /> },
  { key: "b2_17", start: 95.18, dur: 5.24, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_maceta_balcon.mp4" hue="blue" kicker="Las macetas son las que más sufren" zoom={[1.18,1.05]} /> },
  { key: "b2_18", start: 100.42, dur: 11.92, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/maceta_botellita.png" impact="casi un MILAGRO" setup="En la maceta, una botellita chica..." impactAccent="good" hitAt={2.5} boom={1} /> },
  { key: "b2_19", start: 112.34, dur: 5.38, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/trapo_botella.png" hue="amber" kicker="Zona seca: envolvela en un trapo" zoom={[1.06,1.16]} /> },
  { key: "b2_20", start: 117.72, dur: 27.44, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/trapo_botella_seca.png" eyebrow="El tercer secreto" words={parseQuote("Sale más *lento* y dura más.")} accent="amber" hue="amber" fontSize={84} /> },
  { key: "b2_21", start: 145.16, dur: 7.74, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="02" title="¿Por qué nadie te lo enseña?" label="El fondo del asunto" hue="red" /> },
  { key: "b2_22", start: 152.9, dur: 4.94, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/billetes_planta.png" impact="NO hay plata en lo gratis" setup="La respuesta de siempre:" impactAccent="danger" hitAt={2.5} boom={2} /> },
  { key: "b2_23", start: 157.84, dur: 6.22, kind: "splitlist", el: (d) => <SplitList durationInFrames={d} title="Lo que te quieren vender" items={["Maceta autorregante carísima","Sistema de riego por goteo","Medidor de humedad","Gel que retiene agua"]} accent={D} cross /> },
  { key: "b2_24", start: 164.06, dur: 10.78, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_tienda_jardineria.mp4" hue="red" kicker="Todo lo que te venden" zoom={[1.16,1.06]} /> },
  { key: "b2_25", start: 174.84, dur: 7.9, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/plantas_caidas.png" eyebrow="Y sobre todo" words={parseQuote("Venderte la *planta nueva* cuando la tuya se muere.")} accent="danger" hue="red" fontSize={76} /> },
  { key: "b2_26", start: 182.74, dur: 4.06, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/familia_huerta.png" title="Una familia que sabe..." chips={["riega con basura","y compra menos de todo"]} hue="amber" /> },
  { key: "b2_27", start: 186.8, dur: 10.92, kind: "aged", el: (d) => <AgedDoc durationInFrames={d} heading="En las huertas viejas" lines={[{"text":"Ellos no tenían para comprar nada."},{"text":"Tenían que saber. Y por saber, sus plantas vivían.","mark":true}]} eyebrow="Sabiduría guardada" accent="amber" hue="amber" /> },
  { key: "b2_28", start: 197.72, dur: 3.76, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/abuelo_huerta.png" hue="amber" kicker="Vos podés ser el que recuerda" zoom={[1.04,1.14]} /> },
  { key: "b2_29", start: 201.48, dur: 9.38, kind: "process", el: (d) => <ProcessSteps durationInFrames={d} steps={[{"title":"Lavala","desc":"La próxima botella, no la tires","image":"img/paso_lavar.png"},{"title":"Agujeritos abajo","desc":"Chicos, en la mitad de abajo","image":"img/botella_agujeros.png"},{"title":"Enterrala","desc":"Al lado de la planta que más sufre","image":"img/botella_enterrada.png"},{"title":"Llenala","desc":"Y en unos días mirá cómo está","image":"img/botella_goteo.png"}]} eyebrow="Esta semana" title="Hacelo vos" accent="good" hue="amber" /> },
  { key: "b2_30", start: 210.86, dur: 24.26, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/tomate_sano_maduro.png" eyebrow="Te apuesto" words={parseQuote("La vas a ver *mejor que nunca*.")} accent="good" hue="amber" fontSize={84} /> },
  { key: "b2_31", start: 235.12, dur: 17.16, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/tierra_negra.png" hue="amber" kicker="La próxima: tierra negra y rica" zoom={[1.05,1.18]} /> },
  { key: "b2_32", start: 252.28, dur: 6.54, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/botella_enterrada_final.png" impact="Despacio y profundo" setup="No tires esa botella. Enterrala." impactAccent="good" hitAt={2.5} boom={1} /> },
  { key: "b2_33", start: 258.82, dur: 2.2, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/el_huerta_orgullo.png" eyebrow="Y mirá cómo dejan de sufrir" words={parseQuote("Así lo hacían *los de antes*.")} accent="amber" hue="amber" fontSize={88} /> },
];

export const REFRAME: { start: number; end: number }[] = [];
