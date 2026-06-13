// Main_parte4.tsx — Parte 4 del video completo de tomateras (truco del esqueje,
// recap, verdad de la industria, tarea de la semana y cierre).
import { AbsoluteFill, Sequence } from "remotion";
import { CUES } from "./cues_parte4.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";
import { AvatarLayer, AvatarWindow } from "./scenes/AvatarLayer";
import { BOLD } from "./scenes/Bold";

const LAST = CUES.reduce((m, c) => Math.max(m, c.start + c.dur), 0);
export const TOTAL_FRAMES_PARTE4 = sec(LAST + 0.5);

// hidden durante el diagrama (70-74) y los impactos (128-132, 163-167)
const AV: AvatarWindow[] = [
  { start: 0, mode: "cornerTR", scale: 1.0 },
  { start: 11, mode: "cornerBL", scale: 1.05 },
  { start: 20, mode: "cornerTR", scale: 0.9 },
  { start: 36, mode: "cornerBR", scale: 1.05 },
  { start: 44, mode: "cornerTR", scale: 1.0 },
  { start: 49, mode: "cornerTL", scale: 0.95 },
  { start: 58, mode: "full" },
  { start: 67, mode: "cornerTR", scale: 1.0 },
  { start: 70, mode: "hidden" },
  { start: 74, mode: "cornerBL", scale: 1.05 },
  { start: 81, mode: "cornerTR", scale: 0.9 },
  { start: 95, mode: "cornerBR", scale: 1.0 },
  { start: 109, mode: "cornerTL", scale: 1.0 },
  { start: 122, mode: "cornerTR", scale: 0.95 },
  { start: 128.6, mode: "hidden" },
  { start: 132, mode: "cornerTR", scale: 1.0 },
  { start: 146, mode: "cornerBL", scale: 1.05 },
  { start: 154, mode: "hidden" },
  { start: 163.3, mode: "hidden" },
  { start: 167, mode: "cornerTR", scale: 1.0 },
  { start: 179, mode: "full" },
  { start: 187, mode: "hidden" },
  { start: 191, mode: "cornerTR", scale: 1.0 },
  { start: 202, mode: "cornerBL", scale: 1.05 },
  { start: 210, mode: "cornerTR", scale: 0.9 },
  { start: 225, mode: "cornerBR", scale: 1.05 },
  { start: 241, mode: "cornerTR", scale: 1.0 },
  { start: 258, mode: "cornerTL", scale: 1.0 },
  { start: 266, mode: "full" },
];

export const MainParte4: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg0 }}>
      <CinematicWrap handheld={0}>
        {CUES.map((c) => (
          <Sequence key={c.key} from={sec(c.start)} durationInFrames={sec(c.dur)}>
            {c.el(sec(c.dur))}
          </Sequence>
        ))}
      </CinematicWrap>
      <AvatarLayer src="parte4_opt.mp4" windows={AV} accent={BOLD.yellow} />
    </AbsoluteFill>
  );
};
