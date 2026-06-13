// Main_tomateras.tsx — Video 1 "Poda de tomateras" (La Huerta de Timoteo).
// Cues de beatsheet/tomateras.json → cues_tomateras.gen.tsx (NO editar a mano).
// El AVATAR (video 1) provee el audio de TODO el video y se posiciona por ventanas:
// full en momentos personales, esquina (PiP) sobre la b-roll, oculto en los impactos.
import { AbsoluteFill, Sequence } from "remotion";
import { CUES } from "./cues_tomateras.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";
import { AvatarLayer, AvatarWindow } from "./scenes/AvatarLayer";
import { BOLD } from "./scenes/Bold";

export const TOTAL_FRAMES_TOMATERAS = sec(214.6); // narración completa ~3:34

// Cronograma del avatar (start en segundos), alineado a la timeline sincronizada del
// beatsheet. VARÍA mucho las posiciones (4 esquinas + left/right + full + hidden) y el
// TAMAÑO (scale) para que no se vuelva predecible. hidden solo en beats que mandan a
// pantalla completa: impactos, quote, journey, diagramas y listas full-card.
const AV: AvatarWindow[] = [
  { start: 0, mode: "full" }, // t01 hook — Timoteo presenta
  { start: 14.86, mode: "cornerBL", scale: 1.05 }, // t02 clip buscar
  { start: 18.3, mode: "cornerTR", scale: 0.85 }, // t03
  { start: 20.8, mode: "cornerTR", scale: 1.0 }, // t04 bars (cifras) — avatar presente
  { start: 28.44, mode: "cornerTR", scale: 0.9 }, // t05 annotated (manchas)
  { start: 44.28, mode: "cornerBR", scale: 1.1 }, // t06
  { start: 51.08, mode: "cornerTR", scale: 1.0 }, // t07 bubbles (izq)
  { start: 55.52, mode: "hidden" }, // t08 impacto "¿tantas hojas?"
  { start: 65.82, mode: "hidden" }, // t09 quote "quitarle"
  { start: 73.32, mode: "cornerTL", scale: 1.1 }, // t10 clip arbusto
  { start: 84.58, mode: "hidden" }, // t11 JOURNEY inmersivo
  { start: 96.28, mode: "cornerTR", scale: 1.0 }, // t12 bubbles (izq)
  { start: 107.78, mode: "cornerBR", scale: 0.9 }, // t13 process (3 podas)
  { start: 112.22, mode: "cornerBR", scale: 1.1 }, // t13b clip hojas
  { start: 117.68, mode: "cornerTR", scale: 1.05 }, // t13c clip punta
  { start: 128.04, mode: "cornerTR", scale: 1.0 }, // t14 bars 15→30
  { start: 134.16, mode: "cornerTL", scale: 0.95 }, // t15 infocard (izq)
  { start: 142.36, mode: "full" }, // t16 "mi madre lo sabía" — personal
  { start: 146.28, mode: "cornerBL", scale: 1.0 }, // t17 stat 100 años
  { start: 155.8, mode: "hidden" }, // t18 impacto "hoy te lo explico"
  { start: 159.42, mode: "hidden" }, // t19 DIAGRAMA (trae su propio avatar)
  { start: 166.76, mode: "hidden" }, // t20 splitlist (regla de oro)
  { start: 171.1, mode: "cornerTL", scale: 1.1 }, // t21 clip corte final
  { start: 182.88, mode: "full" }, // t22 "40 años podando" — personal
  { start: 191.84, mode: "hidden" }, // t23 splitlist (la cuenta honesta)
  { start: 197.22, mode: "cornerTL", scale: 1.0 }, // t24 infocard (der)
  { start: 206.28, mode: "cornerTR", scale: 0.9 }, // t25 cierre clip cosecha
];

export const MainTomateras: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg0 }}>
      <CinematicWrap handheld={0}>
        {CUES.map((c) => (
          <Sequence key={c.key} from={sec(c.start)} durationInFrames={sec(c.dur)}>
            {c.el(sec(c.dur))}
          </Sequence>
        ))}
      </CinematicWrap>
      {/* El avatar va ENCIMA y trae el audio de la narración. */}
      <AvatarLayer src="tomateras_opt.mp4" windows={AV} accent={BOLD.yellow} />
    </AbsoluteFill>
  );
};
