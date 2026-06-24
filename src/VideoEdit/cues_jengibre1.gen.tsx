// cues_jengibre1.gen.tsx — GENERADO por beatsheet.mjs desde jengibre1.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/jengibre1.json
import { ReactNode } from "react";
import { sec } from "./theme";
import { RawShot } from "./scenes/RawShot";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { ChipsCluster } from "./scenes/ReframeContent";
import { AvatarPresentation } from "./scenes/AvatarPresentation";
import { KineticHeadline } from "./scenes/KineticHeadline";
import { ProcessSteps } from "./scenes/ProcessSteps";
import { Checklist } from "./scenes/Checklist";
import { AnnotatedImage } from "./scenes/AnnotatedImage";

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "j01", start: 0, dur: 6.5, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j1_jengibre_cocina.png" hue="amber" kicker="Plantalo así." /> },
  { key: "j02", start: 6.5, dur: 8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j1_jengibre_arrugado.png" hue="cold" kicker="Feo, arrugado… y vivo" /> },
  { key: "j03", start: 14.5, dur: 5.5, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j1_jengibre_brote.png" hue="amber" kicker="Una planta entera esperando" /> },
  { key: "j04", start: 20, dur: 6, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j1_balde_lleno.png" hue="amber" kicker="Un balde ENTERO." /> },
  { key: "j05", start: 26, dur: 5.5, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Tu huerta en casa" words={parseQuote("Yo soy *Timoteo*.")} accent="good" hue="amber" /> },
  { key: "j06", start: 31.5, dur: 6.5, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j1_jengibre_precio.png" hue="amber" kicker="Carísimo, por gramos" /> },
  { key: "j07", start: 38, dur: 10, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/j1_jengibre_mano.png" title="La planta más generosa" chips={["Fácil de dar","Muy generosa","No la comprás más"]} hue="amber" /> },
  { key: "j08", start: 48.5, dur: 6.5, kind: "headline", el: (d) => <KineticHeadline durationInFrames={d} tokens={[{"t":"UN"},{"t":"solo"},{"t":"DETALLE","hl":true},{"t":"decide"},{"t":"todo."}]} eyebrow="Te soy honesto" hue="amber" bg="black" /> },
  { key: "j09", start: 55, dur: 6, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j1_jengibre_podrido.png" hue="cold" kicker="O se pudre en la tierra" /> },
  { key: "j10", start: 61, dur: 7, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Por eso fracasan" words={parseQuote("Casi todos se *saltean* este paso.")} accent="danger" hue="cold" /> },
  { key: "j11", start: 72.5, dur: 6.5, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Acá empieza el secreto" words={parseQuote("No cualquier pedazo *sirve*.")} accent="amber" hue="cold" /> },
  { key: "j12", start: 79, dur: 9, kind: "checklist", el: (d) => <Checklist durationInFrames={d} title="Cómo elegir el jengibre" items={[{"text":"Fresco y gordito","state":"done"},{"text":"Firme, no blandito","state":"done"},{"text":"Sin arrugas de viejo","state":"done"}]} eyebrow="Para plantar" hue="amber" /> },
  { key: "j13", start: 88, dur: 7.5, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/j1_yemas_macro.png" annotations={[{"kind":"circle","x":0.38,"y":0.42,"w":0.16,"h":0.16,"label":"Yemas"},{"kind":"arrow","x":0.62,"y":0.3,"fromX":0.82,"fromY":0.16,"label":"Ojitos / cuernitos"}]} eyebrow="Mirá la superficie" caption="Los puntos donde nace la planta" hue="amber" /> },
  { key: "j14", start: 95.5, dur: 13.5, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Las yemas = más brotes" hue="amber" accent="accent" avatar="jengibre1_opt.mp4" avatarFrom={sec(95.5)} slides={[{"image":"img/d_yemas.png","title":"Cada yema, un brote"}]} /> },
  { key: "j15", start: 109, dur: 13, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="El detalle" words={parseQuote("Acá viene lo que *nadie* te cuenta.")} accent="danger" hue="cold" /> },
  { key: "j16", start: 122, dur: 16, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Viene TRATADO" hue="amber" accent="danger" avatar="jengibre1_opt.mp4" avatarFrom={sec(122)} slides={[{"image":"img/d_tratado.png","title":"Le ponen un producto para que no brote"}]} /> },
  { key: "j17", start: 138, dur: 20, kind: "process", el: (d) => <ProcessSteps durationInFrames={d} steps={[{"title":"Remojo de una noche","desc":"En un bowl con agua tibia, le saca el producto","image":"img/j1_remojo.png"},{"title":"Envolvé en papel húmedo","desc":"Lugar tibio y oscuro, unos días","image":"img/j1_papel_humedo.png"},{"title":"Las yemas se hinchan","desc":"Puntitas verdes o rosadas = está vivo","image":"img/j1_yemas_brotando.png"}]} eyebrow="Despertá el jengibre" title="Sacarle el producto" accent="good" hue="amber" /> },
  { key: "j18", start: 178, dur: 6, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Antes de plantar" words={parseQuote("Es como darle el *desayuno* a la planta.")} accent="good" hue="amber" /> },
  { key: "j19", start: 184.5, dur: 13.5, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Crece a lo ANCHO" hue="amber" accent="accent" avatar="jengibre1_opt.mp4" avatarFrom={sec(184.5)} slides={[{"image":"img/d_crece_ancho.png","title":"No para abajo como la zanahoria"}]} /> },
  { key: "j20", start: 198.5, dur: 12.5, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j1_maceta_ancha.png" hue="amber" kicker="Ancho y bajito, no angosto" /> },
  { key: "j21", start: 211, dur: 28, kind: "process", el: (d) => <ProcessSteps durationInFrames={d} steps={[{"title":"Cortá en trozos","desc":"Cada trozo con al menos 1 o 2 yemas","image":"img/j1_cortar.png"},{"title":"Dejá al aire 1 día","desc":"La herida del corte forma costra y no se pudre","image":"img/j1_secar_corte.png"}]} eyebrow="Antes de plantar" title="Cortar y secar" accent="good" hue="amber" /> },
  { key: "j22", start: 239, dur: 14, kind: "process", el: (d) => <ProcessSteps durationInFrames={d} steps={[{"title":"Tierra rica con abono","desc":"El jengibre es comelón, le gusta la tierra rica","image":"img/j1_tierra_abono.png"},{"title":"Yemas para arriba","desc":"Acostados, tapá con 2-3 dedos de tierra","image":"img/j1_plantar_yemas.png"}]} eyebrow="Poca profundidad" title="A plantar" accent="good" hue="amber" /> },
  { key: "j23", start: 253, dur: 9.5, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j1_regar.png" hue="amber" kicker="Húmeda como esponja, nunca empapada" /> },
];

export const REFRAME: { start: number; end: number }[] = [];
