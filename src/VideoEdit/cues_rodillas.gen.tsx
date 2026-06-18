// cues_rodillas.gen.tsx — GENERADO por beatsheet.mjs desde rodillas.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/rodillas.json
import { ReactNode } from "react";
import { COLORS } from "./theme";
import { RawShot } from "./scenes/RawShot";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { ChipsCluster } from "./scenes/ReframeContent";
import { SplitList } from "./scenes/SplitList";
import { AvatarPresentation } from "./scenes/AvatarPresentation";
import { StatBig } from "./scenes/StatBig";
import { ImpactReveal } from "./scenes/ImpactReveal";
import { KineticHeadline } from "./scenes/KineticHeadline";
import { ProcessSteps } from "./scenes/ProcessSteps";
import { Checklist } from "./scenes/Checklist";
import { AnnotatedImage } from "./scenes/AnnotatedImage";

const D = COLORS.danger;

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "r01", start: 0, dur: 8.26, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/manos_rodilla_crema.png" impact="EN 7 DÍAS" setup="Frota esto en tus rodillas antes de dormir" impactAccent="good" hitAt={3} boom={1} /> },
  { key: "r02", start: 8.26, dur: 4.74, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={20} suffix=" años" label="yendo a consultas médicas" eyebrow="Lo que nadie me dijo" accent="cold" hue="cold" /> },
  { key: "r03", start: 13, dur: 10.28, kind: "splitlist", el: (d) => <SplitList durationInFrames={d} title="El dolor de rodillas..." items={["No es inevitable","No es el precio de la edad","No es una condena de por vida"]} accent={D} cross /> },
  { key: "r04", start: 23.28, dur: 4.62, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/rodilla_inflamada.png" title="Entonces, ¿qué es?" chips={["Inflamación","Falta de circulación","Tejido sin nutrición"]} hue="red" /> },
  { key: "r05", start: 27.9, dur: 7.36, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Qué pasa dentro de la rodilla" hue="red" accent="danger" slides={[{"image":"img/dg_rodilla_dolor.png","title":"Inflamación y mala circulación"}]} /> },
  { key: "r06", start: 35.26, dur: 3.48, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={48} suffix=" años" label="empecé a sentir las rodillas" eyebrow="Me pasó a mí" accent="amber" hue="amber" /> },
  { key: "r07", start: 38.74, dur: 9.94, kind: "process", el: (d) => <ProcessSteps durationInFrames={d} steps={[{"title":"Al bajar escaleras","desc":"La primera señal, fácil de ignorar","image":"img/bajar_escaleras.png"},{"title":"Al levantarme de la silla","desc":"Cada vez que me paraba","image":"img/levantarse_silla.png"},{"title":"Los primeros pasos del día","desc":"Antes de que el cuerpo despierte","image":"img/pasos_manana.png"}]} eyebrow="Cómo fue avanzando" title="Primero poco, después siempre" accent="amber" hue="amber" /> },
  { key: "r08", start: 48.68, dur: 3.78, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/consulta_medico.png" hue="cold" kicker="Fui al médico" zoom={[1.04,1.14]} /> },
  { key: "r09", start: 52.46, dur: 7.86, kind: "checklist", el: (d) => <Checklist durationInFrames={d} title="Lo que me dijo" items={[{"text":"Antiinflamatorios cuando duela","state":"doing"},{"text":"Reposo cuando sea necesario","state":"doing"},{"text":"Y al final... la operación","state":"todo","note":"si sigue avanzando"}]} eyebrow="La receta de siempre" accent="cold" hue="cold" /> },
  { key: "r10", start: 60.32, dur: 3.02, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/diclofenaco_caja.png" hue="red" kicker="Diclofenaco" zoom={[1.2,1.05]} /> },
  { key: "r11", start: 63.34, dur: 6.26, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/diclofenaco_caja.png" eyebrow="El problema" words={parseQuote("Funcionaba mientras lo tomaba. Lo dejaba y el dolor *volvía*.")} accent="danger" hue="red" fontSize={78} /> },
  { key: "r12", start: 69.6, dur: 4.4, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/estomago_dolor.png" annotations={[{"kind":"circle","x":50,"y":54,"w":20,"h":20,"label":"Gastritis"}]} eyebrow="El efecto secundario" caption="El remedio me dio gastritis" hue="red" /> },
  { key: "r13", start: 74, dur: 3, kind: "headline", el: (d) => <KineticHeadline durationInFrames={d} tokens={[{"t":"Dolor de rodilla"},{"t":"+"},{"t":"dolor de estómago","danger":true},{"t":"por el remedio"}]} eyebrow="El círculo" hue="red" bg="image" image="img/estomago_dolor.png" /> },
  { key: "r14", start: 77, dur: 3.92, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/gente_mayor.png" hue="cold" kicker="Mucha gente lo conoce" zoom={[1.05,1.15]} /> },
  { key: "r15", start: 80.92, dur: 4.42, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/yt_vecino_huerta.mp4" hue="amber" kicker="Un vecino, 72 años" zoom={[1.04,1.12]} /> },
  { key: "r16", start: 85.34, dur: 9.66, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={72} suffix=" años" label="y se agachaba sin quejarse" eyebrow="El vecino de la huerta" accent="good" hue="amber" /> },
];

export const REFRAME: { start: number; end: number }[] = [];
