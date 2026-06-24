// cues_jengibre2.gen.tsx — GENERADO por beatsheet.mjs desde jengibre2.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/jengibre2.json
import { ReactNode } from "react";
import { sec } from "./theme";
import { RawShot } from "./scenes/RawShot";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";
import { ChipsCluster } from "./scenes/ReframeContent";
import { AvatarPresentation } from "./scenes/AvatarPresentation";
import { StatBig } from "./scenes/StatBig";
import { KineticHeadline } from "./scenes/KineticHeadline";
import { AnnotatedImage } from "./scenes/AnnotatedImage";

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "k01", start: 0, dur: 8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j2_selva.png" hue="amber" kicker="Viene de la selva" /> },
  { key: "k02", start: 8, dur: 8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j2_media_sombra.png" hue="amber" kicker="Luz suave, media sombra" /> },
  { key: "k03", start: 16, dur: 9, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j2_helada.png" hue="cold" kicker="El frío lo mata" /> },
  { key: "k04", start: 25, dur: 7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j2_maceta_ventana.png" hue="amber" kicker="En maceta, adentro en invierno" /> },
  { key: "k05", start: 32, dur: 7, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/j2_balcon.png" title="Te alcanza un rincón con calorcito" chips={["El patio","El balcón","La cocina, junto a la ventana"]} hue="amber" /> },
  { key: "k06", start: 39, dur: 9, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j2_riego_esponja.png" hue="amber" kicker="Húmeda como esponja" /> },
  { key: "k07", start: 48, dur: 7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j2_rociar.png" hue="amber" kicker="Rociá las hojas" /> },
  { key: "k08", start: 55, dur: 7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j2_compost.png" hue="amber" kicker="Una mano de abono" /> },
  { key: "k09", start: 62, dur: 8, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Aporcar = más cosecha" hue="amber" accent="accent" avatar="jengibre2_opt.mp4" avatarFrom={sec(62)} slides={[{"image":"img/d2_aporcar.png","title":"Tapá las raíces que asoman"}]} /> },
  { key: "k10", start: 70, dur: 22, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Pausa de corazón, vecino" words={parseQuote("Dejá tu *me gusta* y suscribite.")} accent="good" hue="amber" /> },
  { key: "k11", start: 92, dur: 8, kind: "headline", el: (d) => <KineticHeadline durationInFrames={d} tokens={[{"t":"El"},{"t":"momento"},{"t":"de"},{"t":"la"},{"t":"COSECHA","hl":true}]} eyebrow="Ahora lo más importante" hue="amber" bg="black" /> },
  { key: "k12", start: 100, dur: 8, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="El otro secreto" words={parseQuote("¿*Cuándo* cosechar?")} accent="amber" hue="cold" /> },
  { key: "k13", start: 108, dur: 8, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="La virtud del huertero" words={parseQuote("La *paciencia*. El jengibre no es para apurados.")} accent="amber" hue="amber" /> },
  { key: "k14", start: 116, dur: 9, kind: "stat", el: (d) => <StatBig durationInFrames={d} value={10} suffix=" meses" label="8 a 10 meses. La planta trabaja sola." eyebrow="Desde que lo plantás" accent="amber" hue="amber" /> },
  { key: "k15", start: 133, dur: 9, kind: "annotated", el: (d) => <AnnotatedImage durationInFrames={d} image="img/j2_hojas_amarillas.png" annotations={[{"kind":"circle","x":0.45,"y":0.4,"w":0.22,"h":0.22,"label":"Se ponen amarillas"}]} eyebrow="La planta te avisa" caption="Hojas amarillas y secas = está lista" hue="amber" /> },
  { key: "k16", start: 142, dur: 9, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="La planta te dice" words={parseQuote("Ya está. *Vení a buscar tu premio*.")} accent="good" hue="amber" /> },
  { key: "k17", start: 151, dur: 7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j2_cosecha_mano.png" hue="amber" kicker="Meté la mano y sacá" /> },
  { key: "k18", start: 158, dur: 8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j2_mata_raices.png" hue="amber" kicker="Una mata ENTERA." /> },
  { key: "k19", start: 166, dur: 16, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="Una alacena viva" hue="amber" accent="accent" avatar="jengibre2_opt.mp4" avatarFrom={sec(166)} slides={[{"image":"img/d2_cortar_lado.png","title":"Cortá un pedazo del costado, dejá el resto"}]} /> },
  { key: "k20", start: 182, dur: 8, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Sin matar la planta" words={parseQuote("Jengibre fresco *cuando quieras*.")} accent="good" hue="amber" /> },
  { key: "k21", start: 190, dur: 18, kind: "diagram", el: (d) => <AvatarPresentation durationInFrames={d} eyebrow="El círculo se cierra" hue="amber" accent="accent" avatar="jengibre2_opt.mp4" avatarFrom={sec(190)} slides={[{"image":"img/d2_circulo.png","title":"Guardá el mejor pedazo y replantalo"}]} /> },
  { key: "k22", start: 208, dur: 8, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Para siempre" words={parseQuote("Eso, vecino, es *riqueza* de verdad.")} accent="good" hue="amber" /> },
  { key: "k23", start: 216, dur: 9, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j2_te_jengibre.png" hue="amber" kicker="El té de Rosa, para los dolores" /> },
  { key: "k24", start: 234, dur: 8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j2_cajon_ventana.png" hue="amber" kicker="En un cajón viejo, junto a la ventana" /> },
  { key: "k25", start: 242, dur: 9, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j2_balde_rosa.png" hue="amber" kicker="Un balde de UN pedazo." /> },
  { key: "k26", start: 259, dur: 9, kind: "headline", el: (d) => <KineticHeadline durationInFrames={d} tokens={[{"t":"No"},{"t":"es"},{"t":"solo"},{"t":"comida."},{"t":"Es"},{"t":"MEDICINA","hl":true}]} eyebrow="Date cuenta" hue="amber" bg="black" /> },
  { key: "k27", start: 268, dur: 8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j2_capsulas.png" hue="cold" kicker="Carísimo en la farmacia" /> },
  { key: "k28", start: 276, dur: 8, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Dejaste de pagar" words={parseQuote("Lo sembraste *gratis* en tu casa.")} accent="good" hue="amber" /> },
  { key: "k29", start: 290, dur: 9, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Comida, remedios, agua, luz" words={parseQuote("¿Cuántas cosas pagás que *podrías darte vos*?")} accent="amber" hue="cold" /> },
  { key: "k30", start: 307, dur: 14, kind: "chips", el: (d) => <ChipsCluster durationInFrames={d} bg="image" image="img/j2_manual.png" title="El manual del constructor libre" chips={["Tu comida","Tu agua","Tu energía","Tus remedios"]} hue="amber" /> },
  { key: "k31", start: 334, dur: 14, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Sin mentirte" words={parseQuote("No es magia: *trabajo y paciencia*, como el jengibre.")} accent="amber" hue="amber" /> },
  { key: "k32", start: 348, dur: 15, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Si querés vivir más libre" words={parseQuote("El enlace está *abajo*, en la descripción.")} accent="good" hue="amber" /> },
  { key: "k33", start: 363, dur: 15, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="En los comentarios" words={parseQuote("¿Vos tomás jengibre? ¿*Para qué*?")} accent="amber" hue="amber" /> },
  { key: "k34", start: 378, dur: 7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/j2_rodilla_hoja.png" hue="amber" kicker="El próximo video" /> },
  { key: "k35", start: 385, dur: 14, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="No te lo pierdas" words={parseQuote("Una hoja que esconde un *poder* que no imaginás.")} accent="amber" hue="amber" /> },
  { key: "k36", start: 399, dur: 7, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} eyebrow="Nos vemos del otro lado" words={parseQuote("Soy *Timoteo*. Cuidate mucho, vecino.")} accent="good" hue="amber" /> },
];

export const REFRAME: { start: number; end: number }[] = [];
