// cues_polvo1.gen.tsx — GENERADO por beatsheet.mjs desde polvo1.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/polvo1.json
import { ReactNode } from "react";
import { sec, COLORS } from "./theme";
import { RawShot } from "./scenes/RawShot";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { ChipsCluster } from "./scenes/ReframeContent";
import { SplitList } from "./scenes/SplitList";
import { AvatarPresentation } from "./scenes/AvatarPresentation";
import { ImpactReveal } from "./scenes/ImpactReveal";
import { JourneyCanvas } from "./scenes/JourneyCanvas";
import { KineticHeadline } from "./scenes/KineticHeadline";
import { BarCompare } from "./scenes/BarCompare";
import { Checklist } from "./scenes/Checklist";
import { RuleNumberScene } from "./scenes/RuleNumberScene";
import { CalloutMark } from "./scenes/CalloutMark";

const G = COLORS.good;

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "p1_01", start: 5.16, dur: 5.8, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/hojas_agujeros.png" impact="y se te cayó el alma" setup="Saliste con el café a ver la huerta..." impactAccent="danger" hitAt={3} boom={2} /> },
  { key: "p1_02", start: 10.96, dur: 6.34, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/pulgones_tallo.png" hue="cold" kicker="Pulgones chupándole la vida" zoom={[1.05,1.18]} /> },
  { key: "p1_03", start: 17.3, dur: 3.34, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_fila_hormigas.mp4" hue="cold" kicker="Hormigas como en su casa" zoom={[1.05,1.18]} /> },
  { key: "p1_04", start: 20.64, dur: 7.06, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/pimientos_mordidos.png" hue="cold" kicker="Arruinados en una noche" zoom={[1.18,1.05]} /> },
  { key: "p1_05", start: 27.7, dur: 10.62, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_rociar_insecticida.mp4" hue="amber" kicker="Compraste el insecticida" zoom={[1.06,1.16]} /> },
  { key: "p1_06", start: 38.32, dur: 12.36, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/plaga_volvio.png" impact="pero volvieron PEOR" setup="Por una semana pareció que ganaste..." impactAccent="danger" hitAt={2.5} boom={2} /> },
  { key: "p1_07", start: 50.68, dur: 4.98, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/frasco_veneno.png" eyebrow="Lo que te incomoda" words={parseQuote("Veneno donde juegan tus *nietos*.")} accent="danger" hue="red" fontSize={84} /> },
  { key: "p1_08", start: 55.66, dur: 7.54, kind: "headline", el: (d) => <KineticHeadline durationInFrames={d} tokens={[{"t":"Otra cosa: "},{"t":"un polvo","hl":true}]} eyebrow="Hoy" hue="amber" bg="image" image="img/polvo_blanco_mano.png" /> },
  { key: "p1_09", start: 63.2, dur: 14.12, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/nietos_huerta.png" title="No le hace daño a" chips={["vos","tus animales","la tierra","tus nietos"]} hue="amber" /> },
  { key: "p1_10", start: 77.32, dur: 23.46, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/estante_venenos.png" eyebrow="Por qué no lo sabés" words={parseQuote("La industria del veneno preferiría que *no existiera*.")} accent="danger" hue="red" fontSize={70} /> },
  { key: "p1_11", start: 100.78, dur: 4.56, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="01" title="Tierra de diatomeas" label="Qué es" hue="blue" /> },
  { key: "p1_12", start: 105.34, dur: 11.22, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/polvo_textura.png" hue="blue" kicker="Suave como talco" zoom={[1.16,1.06]} /> },
  { key: "p1_13", start: 116.56, dur: 10.32, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="De dónde sale" hue="blue" accent="cold" avatar="polvo1_opt.mp4" avatarFrom={sec(116.56)} slides={[{"image":"img/dg_diatomeas.png","title":"Algas con caparazón de vidrio"},{"image":"img/dg_yacimiento.png","title":"Capas en el fondo del mar"}]} /> },
  { key: "p1_14", start: 126.88, dur: 23.3, kind: "journey", el: (d) => <JourneyCanvas durationInFrames={d} eyebrow="Polvo de un mar antiguo" title="Del mar antiguo a tu mano" worldImage="img/dg_mar_antiguo.png" accent="cold" waypoints={[{"x":0.18,"y":0.3,"z":0,"num":"1","label":"Mares de hace millones de años","dwell":3,"travel":1.8},{"x":0.45,"y":0.6,"z":0.2,"num":"2","label":"Las diatomeas mueren y caen","dwell":3,"travel":1.8},{"x":0.7,"y":0.72,"z":0,"num":"3","label":"Capas que se vuelven roca","dwell":3,"travel":1.6},{"x":0.85,"y":0.4,"z":0.1,"num":"4","label":"Se muele: polvo blanco","dwell":3,"travel":1.6}]} /> },
  { key: "p1_15", start: 150.18, dur: 36.88, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Cómo mata" hue="amber" accent="danger" avatar="polvo1_opt.mp4" avatarFrom={sec(150.18)} slides={[{"image":"img/dg_vidrio_micro.png","title":"Bajo el microscopio: vidrio con filos"},{"image":"img/dg_deshidrata.png","title":"Le raya la cera y se deshidrata"}]} /> },
  { key: "p1_16", start: 187.06, dur: 7.38, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/bicho_seco.png" eyebrow="Sin una gota de veneno" words={parseQuote("Lo mata la pura *física*.")} accent="danger" hue="amber" fontSize={92} /> },
  { key: "p1_17", start: 194.44, dur: 10.86, kind: "bars", el: (d) => <BarCompare durationInFrames={d} bars={[{"label":"Veneno químico","value":8,"display":"Sí: cada año más fuerte","tone":"danger"},{"label":"Polvo (vidrio)","value":1,"display":"Nunca","tone":"good","winner":true}]} eyebrow="Veneno vs polvo" title="¿Se vuelven resistentes?" accent="good" hue="amber" /> },
  { key: "p1_18", start: 205.3, dur: 13.24, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/polvo_planta.png" eyebrow="Un filo es un filo" words={parseQuote("Funcionó hace 100 años. Funciona *hoy*.")} accent="good" hue="amber" fontSize={80} /> },
  { key: "p1_19", start: 218.54, dur: 6.16, kind: "splitlist", el: (d) => <SplitList durationInFrames={d} title="A quién mata (plaga que camina)" items={["Hormigas","Pulgones","Babosas y caracoles","Escarabajos, tijeretas, cochinillas"]} accent={G} /> },
  { key: "p1_20", start: 224.7, dur: 10.64, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_babosa_hoja.mp4" hue="amber" kicker="Babosas que comen de noche" zoom={[1.04,1.14]} /> },
  { key: "p1_21", start: 235.34, dur: 10.96, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/polvo_casa.png" title="Y en la casa" chips={["pulgas","garrapatas","cucarachas"]} hue="amber" /> },
  { key: "p1_22", start: 246.3, dur: 13.52, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/mosca_vuela.png" eyebrow="Honestidad" words={parseQuote("No mata a la que *vuela*. Sí a la que *camina*.")} accent="amber" hue="amber" fontSize={74} /> },
  { key: "p1_23", start: 259.82, dur: 22.48, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="02" title="Cómo usarla bien" label="Reglas sagradas" hue="amber" /> },
  { key: "p1_24", start: 282.3, dur: 6.82, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/el_espolvorea.png" hue="amber" kicker="Regla 1: siempre en seco" zoom={[1.05,1.18]} /> },
  { key: "p1_25", start: 289.12, dur: 16.12, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/gotas_lluvia_hoja.png" eyebrow="Y tras la lluvia, repetí" words={parseQuote("*Seco* mata. *Mojado* no.")} accent="cold" hue="amber" fontSize={96} /> },
  { key: "p1_26", start: 305.24, dur: 16.88, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/el_anillo_polvo.png" hue="amber" kicker="Así lo hago yo" zoom={[1.18,1.05]} /> },
  { key: "p1_27", start: 322.12, dur: 7.18, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/abeja_flor.png" impact="CUIDÁ a las abejas" setup="Regla 3, de conciencia:" impactAccent="good" hitAt={2.5} boom={1} /> },
  { key: "p1_28", start: 329.3, dur: 7.8, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/flor_abierta.png" eyebrow="Nunca en las flores" words={parseQuote("En las hojas y la tierra. *Nunca* en las flores.")} accent="danger" hue="amber" fontSize={72} /> },
  { key: "p1_29", start: 337.1, dur: 19.12, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_huerta_atardecer.mp4" hue="amber" kicker="Al atardecer, sin abejas" zoom={[1.06,1.16]} /> },
  { key: "p1_30", start: 356.22, dur: 5.64, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/el_panuelo.png" hue="amber" kicker="Regla 4: pañuelo y sin viento" zoom={[1.16,1.06]} /> },
  { key: "p1_31", start: 361.86, dur: 12.34, kind: "callout", el: (d) => <CalloutMark durationInFrames={d} figure="★" image="img/el_muestra_bolsa.png" eyebrow="Al comprar" caption="Pedí el de GRADO ALIMENTICIO (no el de piletas)" accent="good" hue="amber" /> },
  { key: "p1_32", start: 374.2, dur: 8.18, kind: "checklist", el: (d) => <Checklist durationInFrames={d} title="Las reglas, en orden" items={[{"text":"Aplicar SECO; repetir tras lluvia o riego","state":"done"},{"text":"Capa fina + anillo en la base","state":"done"},{"text":"Nunca en flores; al atardecer, cuidá las abejas","state":"done"},{"text":"Pañuelo en la cara, sin viento","state":"done"},{"text":"Comprá GRADO ALIMENTICIO","state":"doing"}]} eyebrow="Repaso" accent="good" hue="amber" image="img/polvo_planta.png" /> },
  { key: "p1_33", start: 382.38, dur: 2.62, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/tomate_limpio.png" eyebrow="El resultado" words={parseQuote("Te limpia la huerta, sin envenenar *ni un tomate*.")} accent="good" hue="amber" fontSize={76} /> },
];

export const REFRAME: { start: number; end: number }[] = [];
