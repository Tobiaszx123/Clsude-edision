// Main_polvo1.tsx — Video POLVO parte 1 (hook plaga/veneno + qué es la tierra de diatomeas + cómo mata + a qué + reglas).
import { AbsoluteFill, Sequence } from "remotion";
import { CUES } from "./cues_polvo1.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";
import { AvatarLayer, AvatarWindow } from "./scenes/AvatarLayer";

const LAST = CUES.reduce((m, c) => Math.max(m, c.start + c.dur), 0);
export const TOTAL_FRAMES_POLVO1 = sec(LAST + 0.5);

const AV: AvatarWindow[] = [
  { start: 0, mode: "hidden" },
  { start: 11, mode: "cornerTR", scale: 1 },
  { start: 17, mode: "cornerBL", scale: 1.05 },
  { start: 21, mode: "cornerTL", scale: 0.95 },
  { start: 28, mode: "cornerBR", scale: 1.05 },
  { start: 38, mode: "hidden" },
  { start: 51, mode: "cornerTR", scale: 0.9 },
  { start: 56, mode: "hidden" },
  { start: 63, mode: "cornerTR", scale: 1 },
  { start: 77, mode: "cornerBL", scale: 1.05 },
  { start: 101, mode: "hidden" },
  { start: 105, mode: "cornerTL", scale: 0.95 },
  { start: 117, mode: "hidden" },
  { start: 187, mode: "cornerBR", scale: 1.05 },
  { start: 194, mode: "hidden" },
  { start: 205, mode: "cornerTR", scale: 0.9 },
  { start: 219, mode: "hidden" },
  { start: 225, mode: "cornerTR", scale: 1 },
  { start: 235, mode: "cornerBL", scale: 1.05 },
  { start: 246, mode: "cornerTL", scale: 0.95 },
  { start: 260, mode: "hidden" },
  { start: 282, mode: "cornerBR", scale: 1.05 },
  { start: 289, mode: "cornerTR", scale: 0.9 },
  { start: 305, mode: "hidden" },
  { start: 329, mode: "cornerTR", scale: 1 },
  { start: 337, mode: "cornerBL", scale: 1.05 },
  { start: 356, mode: "cornerTL", scale: 0.95 },
  { start: 362, mode: "hidden" },
  { start: 382, mode: "cornerBR", scale: 1.05 },
];

export const MainPolvo1: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg0 }}>
      <CinematicWrap handheld={0}>
        {CUES.map((c) => (
          <Sequence key={c.key} from={sec(c.start)} durationInFrames={sec(c.dur)}>
            {c.el(sec(c.dur))}
          </Sequence>
        ))}
      </CinematicWrap>
      <AvatarLayer src="polvo1_opt.mp4" windows={AV} accent={COLORS.accent} />
    </AbsoluteFill>
  );
};
