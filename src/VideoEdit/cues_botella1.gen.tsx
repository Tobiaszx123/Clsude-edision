// cues_botella1.gen.tsx — GENERADO por beatsheet.mjs desde botella1.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/botella1.json
import { ReactNode } from "react";
import { sec, COLORS } from "./theme";
import { RawShot } from "./scenes/RawShot";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { ChipsCluster } from "./scenes/ReframeContent";
import { SplitList } from "./scenes/SplitList";
import { AvatarPresentation } from "./scenes/AvatarPresentation";
import { StatBig } from "./scenes/StatBig";
import { ImpactReveal } from "./scenes/ImpactReveal";
import { JourneyCanvas } from "./scenes/JourneyCanvas";
import { KineticHeadline } from "./scenes/KineticHeadline";
import { AgedDoc } from "./scenes/AgedDoc";
import { CrossSection } from "./scenes/CrossSection";
import { ProcessSteps } from "./scenes/ProcessSteps";
import { Checklist } from "./scenes/Checklist";
import { RuleNumberScene } from "./scenes/RuleNumberScene";
import { AnnotatedImage } from "./scenes/AnnotatedImage";
import { CalloutMark } from "./scenes/CalloutMark";

const A = COLORS.accent;

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "b1_01", start: 0, dur: 9.4, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/plantas_caidas.png" impact="y volviste a ESTO" setup="Te fuiste un fin de semana..." impactAccent="danger" hitAt={3} boom={2} /> },
  { key: "b1_02", start: 9.4, dur: 5.56, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_planta_marchita.mp4" hue="cold" kicker="Hojas mustias, colgando" /> },
  { key: "b1_03", start: 14.96, dur: 3.6, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/tomate_doblado.png" hue="cold" kicker="Doblado sobre sí mismo" zoom={[1.04,1.16]} /> },
  { key: "b1_04", start: 18.56, dur: 7.32, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/tomate_doblado_macro.png" eyebrow="Y duele" words={parseQuote("Bastó un *fin de semana* de calor.")} accent="danger" hue="red" fontSize={88} /> },
  { key: "b1_05", start: 25.88, dur: 8.22, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_regar_regadera.mp4" hue="amber" kicker="Regaste todos los días" /> },
  { key: "b1_06", start: 34.1, dur: 5.02, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/planta_marchita_close.png" eyebrow="Y aún así..." words={parseQuote("Se *marchitó*. ¿Y no entendés por qué?")} accent="danger" hue="cold" fontSize={84} /> },
  { key: "b1_07", start: 39.12, dur: 2.2, kind: "headline", el: (d) => <KineticHeadline durationInFrames={d} tokens={[{"t":"Dos cosas","hl":true},{"t":" que lo cambian todo"}]} eyebrow="Hoy" hue="amber" bg="image" image="img/huerta_seca.png" /> },
  { key: "b1_08", start: 41.2, dur: 5.68, kind: "splitlist", el: (d) => <SplitList durationInFrames={d} title="Lo que vas a aprender" items={["Por qué se mueren de sed aunque las riegues","El remedio: una botella de basura"]} accent={A} /> },
  { key: "b1_09", start: 46.88, dur: 11.22, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/botella_plastica.png" hue="blue" kicker="No cuesta ni una moneda" zoom={[1.05,1.14]} /> },
  { key: "b1_10", start: 58.1, dur: 2.46, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/botella_luz.png" eyebrow="Sabiduría vieja" words={parseQuote("El truco más *viejo* de la tierra, en una botella.")} accent="good" hue="amber" fontSize={80} /> },
  { key: "b1_10b", start: 60.56, dur: 6.1, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_botellas_basura.mp4" hue="blue" kicker="Con lo que tirás a la basura" /> },
  { key: "b1_10c", start: 66.66, dur: 17.68, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/vivero_caja.png" eyebrow="Por qué nadie te lo cuenta" words={parseQuote("No hay *ganancia* en que riegues gratis con la basura.")} accent="danger" hue="amber" fontSize={74} /> },
  { key: "b1_11", start: 84.34, dur: 9.7, kind: "aged", el: (d) => <AgedDoc durationInFrames={d} heading="Tú riegas mal." lines={[{"text":"No es tu culpa."},{"text":"Es como te enseñaron.","mark":true}]} eyebrow="La verdad incómoda" accent="amber" hue="amber" /> },
  { key: "b1_12", start: 94.04, dur: 5.04, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_regar_manguera.mp4" hue="amber" kicker="Mojás la tierra por arriba" /> },
  { key: "b1_13", start: 99.08, dur: 4.7, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/tierra_seca_sol.png" title="Pasan dos cosas malas" chips={["Se evapora con el sol","Las raíces se quedan arriba"]} hue="amber" /> },
  { key: "b1_14", start: 103.78, dur: 7.22, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Por qué el riego de arriba falla" hue="amber" accent="amber" avatar="botella1_opt.mp4" avatarFrom={sec(103.78)} slides={[{"image":"img/dg_evaporacion.png","title":"El sol se roba el agua"},{"image":"img/dg_raices_arriba.png","title":"Raíces cortas y flojas"}]} /> },
  { key: "b1_15", start: 111, dur: 8.14, kind: "cross", el: (d) => <CrossSection durationInFrames={d} layers={[{"label":"Superficie mojada (se evapora)","depth":"0-3 cm","weight":1.2,"color":"#A9794A"},{"label":"Capa media (apenas pasa)","depth":"3-10 cm","weight":1.6,"color":"#7C8A5A"},{"label":"Raíces reales (llega muy poco)","depth":"15-20 cm","weight":2,"color":"#6F8478"}]} eyebrow="Dónde llega de verdad el agua" title="El perfil del suelo" marker={{"label":"Acá está la sed","atDepth":0.8,"color":"danger"}} hue="amber" /> },
  { key: "b1_16", start: 119.14, dur: 2.64, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/raices_cortas.png" eyebrow="El problema de fondo" words={parseQuote("Estás criando una planta *consentida*.")} accent="danger" hue="amber" fontSize={82} /> },
  { key: "b1_16b", start: 121.78, dur: 9.04, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/raices_flojas_maceta.png" hue="amber" kicker="Raíces que suben, no bajan" /> },
  { key: "b1_16c", start: 130.82, dur: 16.84, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/planta_muerta_seca.png" eyebrow="Una planta que depende de vos" words={parseQuote("El día que faltás... *se muere*.")} accent="danger" hue="cold" fontSize={80} /> },
  { key: "b1_17", start: 147.66, dur: 2.2, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_planta_seca_maceta.mp4" hue="cold" kicker="El día que faltás, se muere" /> },
  { key: "b1_18", start: 149.1, dur: 3.98, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="01" title="Llevar el agua ABAJO" label="Lo que hacían los viejos" hue="amber" /> },
  { key: "b1_19", start: 153.08, dur: 4.68, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="El secreto: agua profunda" hue="amber" accent="good" avatar="botella1_opt.mp4" avatarFrom={sec(153.08)} slides={[{"image":"img/dg_agua_profunda.png","title":"El agua va directo a la raíz"},{"image":"img/dg_raices_hondas.png","title":"Raíces hondas y fuertes"}]} /> },
  { key: "b1_16d", start: 157.76, dur: 8.66, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/raices_hondas_real.png" hue="amber" kicker="Raíces hondas, fuertes" /> },
  { key: "b1_19b", start: 166.42, dur: 8.32, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/tierra_humeda_honda.png" eyebrow="Su propia despensa" words={parseQuote("Tiene su *despensa* de agua allá abajo.")} accent="good" hue="amber" fontSize={78} /> },
  { key: "b1_20", start: 174.74, dur: 11.84, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/raices_profundas.png" eyebrow="Toda la diferencia" words={parseQuote("No es *cuánta* agua. Es a qué *profundidad*.")} accent="good" hue="amber" fontSize={78} /> },
  { key: "b1_21", start: 186.58, dur: 3.06, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/olla_barro_enterrada.png" hue="blue" kicker="Hace miles de años" zoom={[1.04,1.15]} /> },
  { key: "b1_22", start: 189.64, dur: 22, kind: "journey", el: (d) => <JourneyCanvas durationInFrames={d} eyebrow="Sabiduría de supervivencia" title="La olla de barro por el mundo" worldImage="img/dg_mapa_ollas.png" accent="cold" waypoints={[{"x":0.2,"y":0.55,"z":0,"num":"1","label":"Norte de África","dwell":3,"travel":1.8},{"x":0.5,"y":0.4,"z":0.2,"num":"2","label":"Medio Oriente","dwell":3,"travel":1.8},{"x":0.78,"y":0.5,"z":0,"num":"3","label":"China","dwell":3.2,"travel":1.8},{"x":0.5,"y":0.7,"z":0.1,"num":"4","label":"Donde casi no llovía","dwell":3,"travel":1.6}]} /> },
  { key: "b1_23", start: 211.64, dur: 14.96, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/olla_barro_goteo.png" eyebrow="El truco de hoy" words={parseQuote("La botella es esa *olla de barro*, hecha con lo que ibas a tirar.")} accent="good" hue="blue" fontSize={72} /> },
  { key: "b1_24", start: 226.6, dur: 2.2, kind: "rule", el: (d) => <RuleNumberScene durationInFrames={d} number="02" title="Cómo hacer la botella" label="Manos a la obra" hue="amber" /> },
  { key: "b1_25", start: 228.26, dur: 9.22, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/botella_gaseosa.png" hue="amber" kicker="De 1.5 o 2 litros, mejor" /> },
  { key: "b1_26", start: 237.48, dur: 13.22, kind: "process", el: (d) => <ProcessSteps durationInFrames={d} steps={[{"title":"Lavá la botella","desc":"Sin restos de azúcar ni jabón","image":"img/paso_lavar.png"},{"title":"Agujeritos abajo","desc":"6 a 8, chicos, costados y fondo","image":"img/paso_agujeros.png"},{"title":"Enterrá al lado","desc":"A un palmo, 15-20 cm de hondo","image":"img/paso_enterrar.png"},{"title":"Llená de agua","desc":"Y dejá que trabaje sola","image":"img/paso_llenar.png"}]} eyebrow="Paso a paso" title="Cuatro pasos" accent="good" hue="amber" /> },
  { key: "b1_27", start: 250.7, dur: 8.32, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/botella_agujeros.png" annotations={[{"kind":"circle","x":0.5,"y":0.7,"w":0.4,"h":0.32,"label":"Mitad de abajo: costados y fondo","color":"good"},{"kind":"arrow","x":0.5,"y":0.25,"fromX":0.8,"fromY":0.12,"label":"Acá NO"}]} eyebrow="La clave de todo" caption="Los agujeros van ABAJO, no en el cuello" hue="amber" /> },
  { key: "b1_28", start: 259.02, dur: 8.88, kind: "callout", el: (d) => <CalloutMark durationInFrames={d} figure="6-8" image="img/clavo_caliente.png" eyebrow="Cantidad justa" caption="agujeritos chicos, repartidos abajo" accent="good" hue="amber" /> },
  { key: "b1_29", start: 267.9, dur: 12.08, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/botella_goteo.png" eyebrow="El secreto fino" words={parseQuote("Pocos y *chicos*. Despacio es la palabra.")} accent="good" hue="amber" fontSize={80} /> },
  { key: "b1_30", start: 279.98, dur: 14.58, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={5} prefix="3-" suffix=" días" label="vaciándose de a poquito" eyebrow="Una sola llenada" accent="good" hue="amber" /> },
  { key: "b1_31", start: 294.56, dur: 9.46, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_cavar_pozo.mp4" hue="amber" kicker="Cavás al lado, a un palmo" /> },
  { key: "b1_32", start: 304.02, dur: 14.74, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/botella_enterrada.png" annotations={[{"kind":"arrow","x":0.5,"y":0.78,"fromX":0.2,"fromY":0.9,"label":"Agujeros a la altura de la raíz"},{"kind":"underline","x":0.5,"y":0.2,"w":0.3,"label":"El cuello queda afuera"}]} eyebrow="Cómo enterrarla" caption="Agujeros abajo, a 15-20 cm; solo el cuello afuera" hue="amber" /> },
  { key: "b1_33", start: 318.76, dur: 22.98, kind: "checklist", el: (d) => <Checklist durationInFrames={d} title="Para que salga perfecto" items={[{"text":"Ideal: enterrarla con la planta recién trasplantada","state":"done"},{"text":"A un palmo del tallo, sin cortar raíces gruesas","state":"done"},{"text":"Tapa con un agujerito de alfiler (entra aire, no mosquitos)","state":"doing"}]} eyebrow="Detalles que importan" accent="good" hue="amber" image="img/botella_plantada_chica.png" /> },
  { key: "b1_34", start: 341.74, dur: 9.82, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/botella_tapa_agujero.png" hue="amber" kicker="Un agujerito de nada en la tapa" /> },
  { key: "b1_35", start: 351.56, dur: 3.42, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_llenar_botella.mp4" hue="amber" kicker="Llenala y listo" /> },
  { key: "b1_36", start: 354.98, dur: 6.06, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/goteo_raiz.png" impact="CERO desperdicio" setup="El agua baja sola, derecho a la raíz:" impactAccent="good" hitAt={2.5} boom={1} /> },
  { key: "b1_37", start: 361.04, dur: 9.96, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/planta_sana_botella.png" title="Lo que conseguís" chips={["Cero evaporación","Cero desperdicio","Cero hojas mojadas"]} hue="amber" /> },
];

export const REFRAME: { start: number; end: number }[] = [];
