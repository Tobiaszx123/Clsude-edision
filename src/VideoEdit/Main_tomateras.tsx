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

// Cronograma del avatar (start en segundos). full=personal, cornerTR=PiP sobre b-roll,
// hidden=solo se oye (durante los textos de impacto a pantalla completa).
const AV: AvatarWindow[] = [
  { start: 0, mode: "full" }, // hook — Timoteo presenta
  { start: 7, mode: "cornerTR" }, // arranca la b-roll
  { start: 13, mode: "hidden" }, // impacto "una docena / debería dar 50"
  { start: 19, mode: "cornerTR" },
  { start: 43, mode: "hidden" }, // impacto "¿tantas hojas?"
  { start: 50, mode: "full" }, // la frase clave "QUITARLE" — personal
  { start: 60, mode: "cornerTR" },
  { start: 116, mode: "hidden" }, // impacto "de 15 a 30 kilos"
  { start: 126, mode: "cornerTR" },
  { start: 134, mode: "full" }, // herencia "mi madre lo sabía" — personal
  { start: 155, mode: "hidden" }, // impacto "hoy te lo explico"
  { start: 165, mode: "cornerTR" },
  { start: 200, mode: "full" }, // cierre "40 años" — personal
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
