// cues_rodillas.gen.tsx — GENERADO por beatsheet.mjs desde rodillas.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/rodillas.json
import { ReactNode } from "react";
import { RawShot } from "./scenes/RawShot";
import { FloatingCard } from "./scenes/FloatingCard";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { ChipsCluster } from "./scenes/ReframeContent";
import { ImpactReveal } from "./scenes/ImpactReveal";
import { KineticHeadline } from "./scenes/KineticHeadline";

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "h1", start: 0, dur: 8, kind: "impact", el: (d) => <ImpactReveal durationInFrames={d} image="img/hook_masaje.png" impact="7 NOCHES" impactAccent="good" hitAt={1.4} boom={1} /> },
  { key: "b02", start: 8, dur: 6, kind: "floatcard", el: (d) => <FloatingCard durationInFrames={d} image="img/consulta.png" title="Lo que ningún reumatólogo me dijo" kicker="20 años de consultas" side="left" accent="amber" hue="cold" /> },
  { key: "b03", start: 14, dur: 7, kind: "headline", el: (d) => <KineticHeadline durationInFrames={d} tokens={[{"t":"El dolor de rodillas "},{"t":"NO es inevitable","danger":true}]} eyebrow="Lo primero que tenés que saber" bg="image" image="img/rodilla_dolor.png" /> },
  { key: "b04", start: 21, dur: 7, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/rodilla_inflamada.png" title="La causa real" chips={["Inflamación","Mala circulación","Tejido sin nutrir"]} hue="red" /> },
  { key: "b05", start: 28, dur: 8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/timoteo_rodilla.png" kicker="A los 48 empezó" zoom={[1.06,1.24]} /> },
  { key: "b06", start: 36, dur: 4, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/escaleras.png" zoom={[1.08,1.3]} /> },
  { key: "b07", start: 40, dur: 4, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/silla.png" zoom={[1.22,1.05]} /> },
  { key: "b08", start: 44, dur: 6, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/primeros_pasos.png" kicker="Los primeros pasos del día" zoom={[1.05,1.2]} /> },
  { key: "b09", start: 50, dur: 8, kind: "floatcard", el: (d) => <FloatingCard durationInFrames={d} image="img/pastillas.png" title="«Antiinflamatorios y reposo»" body="Diclofenaco. Funcionaba mientras lo tomaba." kicker="El médico" side="right" accent="danger" hue="cold" /> },
  { key: "b10", start: 58, dur: 7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/gastritis.png" kicker="Ahora también el estómago" zoom={[1.06,1.22]} /> },
  { key: "b11", start: 65, dur: 8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/huerta_viento.mp4" hue="amber" kicker="El vecino de la huerta" /> },
  { key: "b12", start: 73, dur: 7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/aurelio_malezas.png" zoom={[1.2,1.04]} /> },
  { key: "b13", start: 80, dur: 7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/charla_cerca.png" zoom={[1.05,1.2]} /> },
  { key: "b14", start: 87, dur: 7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="vid/frasco_mov.mp4" hue="amber" kicker="Un frasco de vidrio oscuro" /> },
  { key: "q1", start: 94, dur: 6, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/frasco_noche.png" eyebrow="Me dijo" words={parseQuote("Frótate esto. *Siete noches*.")} accent="good" hue="cold" fontSize={98} /> },
  { key: "q2", start: 100, dur: 9, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/sangre_rodilla.png" eyebrow="Y algo que no olvidé" words={parseQuote("El problema no está en la rodilla. Está en la *sangre que no llega*.")} accent="danger" hue="cold" fontSize={78} /> },
  { key: "b15", start: 109, dur: 9, kind: "floatcard", el: (d) => <FloatingCard durationInFrames={d} image="img/ingredientes_mesa.png" title="El preparado, la ciencia y la rutina de 7 noches" body="Todo lo que cambia ese dolor que llevás meses cargando." kicker="Hoy te lo enseño" side="left" accent="good" hue="amber" /> },
];

export const REFRAME: { start: number; end: number }[] = [];
