// Main_polvo2.tsx — Video POLVO parte 2 (otros polvos caseros + por qué nadie te lo enseña + cierre + tease).
import { AbsoluteFill, Sequence } from "remotion";
import { CUES } from "./cues_polvo2.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";
import { AvatarLayer, AvatarWindow } from "./scenes/AvatarLayer";

const LAST = CUES.reduce((m, c) => Math.max(m, c.start + c.dur), 0);
export const TOTAL_FRAMES_POLVO2 = sec(LAST + 0.5);

const AV: AvatarWindow[] = [
  { start: 0, mode: "hidden" },
  { start: 14, mode: "cornerTR", scale: 1 },
  { start: 22, mode: "hidden" },
  { start: 33, mode: "cornerBL", scale: 1.05 },
  { start: 51, mode: "cornerTL", scale: 0.95 },
  { start: 60, mode: "cornerBR", scale: 1.05 },
  { start: 74, mode: "hidden" },
  { start: 80, mode: "cornerTR", scale: 0.9 },
  { start: 93, mode: "hidden" },
  { start: 95, mode: "cornerTR", scale: 1 },
  { start: 109, mode: "hidden" },
  { start: 113, mode: "cornerBL", scale: 1.05 },
  { start: 118, mode: "hidden" },
  { start: 130, mode: "cornerTL", scale: 0.95 },
  { start: 139, mode: "hidden" },
  { start: 155, mode: "cornerBR", scale: 1.05 },
  { start: 164, mode: "cornerTR", scale: 0.9 },
  { start: 170, mode: "cornerTR", scale: 1 },
  { start: 198, mode: "cornerBL", scale: 1.05 },
  { start: 209, mode: "hidden" },
  { start: 213, mode: "cornerTL", scale: 0.95 },
];

export const MainPolvo2: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg0 }}>
      <CinematicWrap handheld={0}>
        {CUES.map((c) => (
          <Sequence key={c.key} from={sec(c.start)} durationInFrames={sec(c.dur)}>
            {c.el(sec(c.dur))}
          </Sequence>
        ))}
      </CinematicWrap>
      <AvatarLayer src="polvo2_opt.mp4" windows={AV} accent={COLORS.accent} />
    </AbsoluteFill>
  );
};
