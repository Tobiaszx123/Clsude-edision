// cues_tomateras.gen.tsx — GENERADO por beatsheet.mjs desde tomateras.json.
// NO editar a mano: cambiá el beatsheet y re-corré  node beatsheet.mjs beatsheet/tomateras.json
import { ReactNode } from "react";
import { RawShot } from "./scenes/RawShot";
import { BigImpact, FloatingBubbles, InfoCard } from "./scenes/Bold";
import { KineticQuote, parseQuote } from "./scenes/KineticQuote";

export type Cue = { key: string; start: number; dur: number; kind: string; el: (d: number) => ReactNode };

export const CUES: Cue[] = [
  { key: "t01", start: 0, dur: 7, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/tomatera_grande.png" hue="amber" kicker="Tu tomatera, hermosa" zoom={[1.05,1.18]} /> },
  { key: "t02", start: 7, dur: 6, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/buscar_tomates.png" kicker="Pero casi no hay tomates" zoom={[1.06,1.2]} /> },
  { key: "t03", start: 13, dur: 6, kind: "impact2", el: (d) => <BigImpact durationInFrames={d} image="img/tomate_pocos.png" lines={["UNA DOCENA","DEBERÍA DAR 50"]} align="center" /> },
  { key: "t04", start: 19, dur: 8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/manchas_hoja.png" hue="red" kicker="Manchas: tizón temprano" zoom={[1.1,1.28]} /> },
  { key: "t05", start: 27, dur: 8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/rascandose.png" kicker="¿Qué hice mal?" zoom={[1.04,1.16]} /> },
  { key: "t06", start: 35, dur: 8, kind: "bubbles", el: (d) => <FloatingBubbles durationInFrames={d} image="img/huerta_junio.png" bubbles={["Buena tierra","Buena semilla","Agua a tiempo","Buena estaca"]} side="left" /> },
  { key: "t07", start: 43, dur: 7, kind: "impact2", el: (d) => <BigImpact durationInFrames={d} image="img/tomatera_hojas.png" lines={["¿TANTAS HOJAS?","¿TAN POCOS TOMATES?"]} align="left" hue="amber" /> },
  { key: "t08", start: 50, dur: 10, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/tierra_base.png" eyebrow="La respuesta suena al revés" words={parseQuote("Necesitabas *quitarle* cosas. No darle más.")} accent="danger" hue="amber" fontSize={86} /> },
  { key: "t09", start: 60, dur: 10, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/arbusto_verde.png" kicker="Dejada a su aire" zoom={[1.05,1.2]} /> },
  { key: "t10", start: 70, dur: 10, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/marana_centro.png" kicker="Fruta escondida, sin sol" zoom={[1.18,1.04]} /> },
  { key: "t11", start: 80, dur: 12, kind: "bubbles", el: (d) => <FloatingBubbles durationInFrames={d} image="img/planta_sobrevive.png" bubbles={["Crece para todos lados","Piensa en reproducirse","No en darte fruta a ti"]} side="left" hue="cold" /> },
  { key: "t12", start: 92, dur: 8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/quitar_brotes.png" hue="amber" kicker="1) Quita los brotes laterales" zoom={[1.12,1.3]} /> },
  { key: "t13", start: 100, dur: 8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/quitar_hojas.png" hue="amber" kicker="2) Quita las hojas de abajo" zoom={[1.08,1.24]} /> },
  { key: "t14", start: 108, dur: 8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/cortar_punta.png" hue="amber" kicker="3) Corta la punta al final" zoom={[1.1,1.26]} /> },
  { key: "t15", start: 116, dur: 10, kind: "impact2", el: (d) => <BigImpact durationInFrames={d} image="img/tomates_rojos.png" lines={["DE 15 KILOS","A 30 KILOS"]} align="center" hue="amber" /> },
  { key: "t16", start: 126, dur: 8, kind: "infocard", el: (d) => <InfoCard durationInFrames={d} image="img/cosecha_canasto.png" title="Misma planta, el doble" items={[{"text":"El doble de tomates"},{"text":"Maduran más temprano"},{"text":"Mucha menos enfermedad"}]} side="left" /> },
  { key: "t17", start: 134, dur: 10, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/mujer_campo.png" kicker="El saber de siempre" zoom={[1.05,1.18]} /> },
  { key: "t18", start: 144, dur: 11, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/manos_rama.png" eyebrow="Lo supieron siempre" words={parseQuote("Cada mujer de campo lo supo durante *100 años*.")} accent="good" hue="amber" fontSize={84} /> },
  { key: "t19", start: 155, dur: 10, kind: "impact2", el: (d) => <BigImpact durationInFrames={d} image="img/dos_tomateras.png" lines={["HOY TE LO","EXPLICO ENTERO"]} align="left" hue="amber" /> },
  { key: "t20", start: 165, dur: 13, kind: "infocard", el: (d) => <InfoCard durationInFrames={d} image="img/tomatera_tutor.png" title="Lo que vas a aprender" items={[{"text":"Los 2 tipos de tomatera"},{"text":"Cómo podar cada uno"},{"text":"Qué cortar y qué NO"},{"text":"A qué hora hacerlo"}]} side="left" /> },
  { key: "t21", start: 178, dur: 10, kind: "bubbles", el: (d) => <FloatingBubbles durationInFrames={d} image="img/tijeras_planta.png" bubbles={["¿Qué se corta?","¿Qué jamás se toca?","¿A qué hora del día?"]} side="left" hue="red" /> },
  { key: "t22", start: 188, dur: 12, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/corte_final.png" hue="amber" kicker="El último corte de la temporada" zoom={[1.06,1.2]} /> },
  { key: "t23", start: 200, dur: 8, kind: "raw", el: (d) => <RawShot durationInFrames={d} src="img/manos_podando.png" kicker="40 años podando así" zoom={[1.08,1.22]} /> },
  { key: "t24", start: 208, dur: 6.5, kind: "quote", el: (d) => <KineticQuote durationInFrames={d} image="img/cosecha_sana.png" eyebrow="La cuenta honesta" words={parseQuote("Más fruta, plantas más sanas, cosecha más *larga*.")} accent="good" hue="amber" fontSize={80} /> },
];

export const REFRAME: { start: number; end: number }[] = [];
