// Main_parte3.tsx — Parte 3 del video completo de tomateras (chupón fuerte, poda
// del indeterminado 1/2/3 guías, herramientas, poda de mañana, despunte final).
import { AbsoluteFill, Sequence } from "remotion";
import { CUES } from "./cues_parte3.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";
import { AvatarLayer, AvatarWindow } from "./scenes/AvatarLayer";
import { BOLD } from "./scenes/Bold";

const LAST = CUES.reduce((m, c) => Math.max(m, c.start + c.dur), 0);
export const TOTAL_FRAMES_PARTE3 = sec(LAST + 0.5);

// hidden durante el diagrama (76-85, trae su propio avatar) y el impacto (197-201)
const AV: AvatarWindow[] = [
  { start: 0, mode: "cornerTR", scale: 1.0 },
  { start: 14, mode: "cornerBL", scale: 1.05 },
  { start: 24, mode: "cornerTR", scale: 0.9 },
  { start: 40, mode: "full" },
  { start: 47, mode: "cornerBR", scale: 1.05 },
  { start: 54, mode: "cornerTR", scale: 1.0 },
  { start: 62, mode: "cornerTL", scale: 0.95 },
  { start: 70, mode: "cornerTR", scale: 1.0 },
  { start: 76.2, mode: "hidden" },
  { start: 85, mode: "cornerTR", scale: 1.0 },
  { start: 103, mode: "cornerBL", scale: 1.05 },
  { start: 119, mode: "cornerTR", scale: 0.9 },
  { start: 135, mode: "cornerBR", scale: 1.05 },
  { start: 143, mode: "full" },
  { start: 150, mode: "cornerTR", scale: 1.0 },
  { start: 166, mode: "cornerTL", scale: 0.95 },
  { start: 174, mode: "cornerTR", scale: 1.0 },
  { start: 183, mode: "cornerBL", scale: 1.05 },
  { start: 196.7, mode: "hidden" },
  { start: 201, mode: "cornerTR", scale: 1.0 },
  { start: 217, mode: "cornerBR", scale: 1.05 },
  { start: 225, mode: "cornerTR", scale: 0.9 },
  { start: 241, mode: "cornerTL", scale: 1.0 },
  { start: 248, mode: "cornerTR", scale: 1.0 },
  { start: 263, mode: "full" },
  { start: 272, mode: "cornerTR", scale: 1.0 },
  { start: 287, mode: "cornerBL", scale: 1.05 },
  { start: 295, mode: "cornerTR", scale: 0.9 },
  { start: 311, mode: "cornerTL", scale: 1.0 },
];

export const MainParte3: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg0 }}>
      <CinematicWrap handheld={0}>
        {CUES.map((c) => (
          <Sequence key={c.key} from={sec(c.start)} durationInFrames={sec(c.dur)}>
            {c.el(sec(c.dur))}
          </Sequence>
        ))}
      </CinematicWrap>
      <AvatarLayer src="parte3_opt.mp4" windows={AV} accent={BOLD.yellow} />
    </AbsoluteFill>
  );
};
