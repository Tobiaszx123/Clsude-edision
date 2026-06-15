// cues_polvo2.gen.tsx — GENERADO por beatsheet.mjs desde polvo2.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/polvo2.json
import { ReactNode } from "react";
import { COLORS } from "./theme";
import { RawShot } from "./scenes/RawShot";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { ChipsCluster } from "./scenes/ReframeContent";
import { SplitList } from "./scenes/SplitList";
import { ImpactReveal } from "./scenes/ImpactReveal";
import { AgedDoc } from "./scenes/AgedDoc";
import { BarCompare } from "./scenes/BarCompare";
import { RuleNumberScene } from "./scenes/RuleNumberScene";
import { CalloutMark } from "./scenes/CalloutMark";

const G = COLORS.good;

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "p2_01", start: 2.44, dur: 11.98, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="01" title="Otros polvos de los viejos" label="De yapa" hue="amber" /> },
  { key: "p2_02", start: 14.42, dur: 7.86, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/el_ceniza.png" hue="amber" kicker="Ceniza: muralla contra babosas" zoom={[1.05,1.18]} /> },
  { key: "p2_03", start: 22.28, dur: 10.3, kind: "callout", el: (d) => <CalloutMark durationInFrames={d} figure="K" image="img/ceniza_mano.png" eyebrow="Y de regalo" caption="Le da potasio a la tierra" accent="good" hue="amber" /> },
  { key: "p2_04", start: 32.58, dur: 18.62, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/cascara_molida.png" hue="amber" kicker="Cáscara de huevo molida" zoom={[1.18,1.05]} /> },
  { key: "p2_05", start: 51.2, dur: 8.98, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/tomate_culo_negro.png" eyebrow="Y alimenta" words={parseQuote("Calcio: justo lo que le falta al tomate *podrido* abajo.")} accent="good" hue="amber" fontSize={70} /> },
  { key: "p2_06", start: 60.18, dur: 14.08, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/canela_plantines.png" hue="amber" kicker="Canela: contra el hongo de almácigos" zoom={[1.06,1.16]} /> },
  { key: "p2_07", start: 74.26, dur: 6, kind: "callout", el: (d) => <CalloutMark durationInFrames={d} figure="🐜" image="img/canela_cuchara.png" eyebrow="Bonus" caption="Las hormigas odian su olor y se van" accent="good" hue="amber" /> },
  { key: "p2_08", start: 80.26, dur: 12.61, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/el_borra_cafe.png" hue="amber" kicker="Borra de café: las plagas se alejan" zoom={[1.16,1.06]} /> },
  { key: "p2_09", start: 92.87, dur: 2.2, kind: "splitlist", el: (d) => <SplitList durationInFrames={d} title="Tu arsenal, de la basura" items={["Tierra de diatomeas (la reina)","Ceniza de madera","Cáscara de huevo molida","Canela y borra de café"]} accent={G} /> },
  { key: "p2_10", start: 94.85, dur: 14.32, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/cosas_tirar.png" title="Todo esto..." chips={["lo ibas a tirar","a la basura"]} hue="amber" /> },
  { key: "p2_11", start: 109.17, dur: 3.42, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="02" title="¿Por qué nadie te lo enseña?" label="El fondo del asunto" hue="red" /> },
  { key: "p2_12", start: 112.59, dur: 5.78, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/mostrador_veneno.png" hue="red" kicker="Te ponen el frasco en la mano" zoom={[1.04,1.14]} /> },
  { key: "p2_13", start: 118.37, dur: 2.2, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/polvo_mar_pila.png" impact="no hay plata en lo que DURA" setup="La respuesta de siempre:" impactAccent="danger" hitAt={1} boom={2} /> },
  { key: "p2_14", start: 120.07, dur: 10.02, kind: "bars", el: (d) => <BarCompare durationInFrames={d} bars={[{"label":"Veneno","value":9,"display":"Comprás cada año","tone":"danger"},{"label":"Polvo de mar","value":1,"display":"Una bolsa dura muchísimo","tone":"good","winner":true}]} eyebrow="El negocio" title="Quién te hace volver a comprar" accent="good" hue="red" /> },
  { key: "p2_15", start: 130.09, dur: 8.58, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/estante_venenos.png" eyebrow="La rueda" words={parseQuote("Más fuerte, más caro, todos los años. *Para siempre*.")} accent="danger" hue="red" fontSize={70} /> },
  { key: "p2_16", start: 138.67, dur: 15.86, kind: "aged", el: (d) => <AgedDoc durationInFrames={d} heading="Después de la guerra" lines={[{"text":"Los químicos coparon el campo."},{"text":"Estos saberes se empujaron al olvido. No porque no sirvieran: porque no se vendían.","mark":true}]} eyebrow="Cómo se perdió" accent="amber" hue="amber" /> },
  { key: "p2_17", start: 154.53, dur: 9.62, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/abuela_jardin.png" eyebrow="Los viejos lo recordaban" words={parseQuote("Vos podés ser *el que lo recuerda*.")} accent="good" hue="amber" fontSize={84} /> },
  { key: "p2_18", start: 164.15, dur: 6.26, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/primer_anillo.png" hue="amber" kicker="Esta semana: tu primer anillo" zoom={[1.05,1.18]} /> },
  { key: "p2_19", start: 170.41, dur: 27.62, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/armas_basura.png" title="Ahora sabés que son armas" chips={["ceniza","cáscaras","borra de café"]} hue="amber" /> },
  { key: "p2_20", start: 198.03, dur: 11.24, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/spray_natural.png" hue="blue" kicker="La próxima: spray natural casero" zoom={[1.18,1.05]} /> },
  { key: "p2_21", start: 209.27, dur: 3.7, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/polvo_blanco_mano2.png" impact="Agarrá el polvo de los abuelos" setup="Guardá el veneno." impactAccent="good" hitAt={2.5} boom={1} /> },
  { key: "p2_22", start: 212.97, dur: 2.2, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/el_huerta_orgullo.png" eyebrow="Cuidá tu mesa" words={parseQuote("Cuidá tu huerta sin envenenar tu mesa. Así lo hacían *los viejos*.")} accent="amber" hue="amber" fontSize={72} /> },
];

export const REFRAME: { start: number; end: number }[] = [];
