// Main_botella1.tsx — Video BOTELLA parte 1 (hook + por qué regás mal + secreto + historia olla + cómo hacerla).
import { AbsoluteFill, Sequence } from "remotion";
import { CUES } from "./cues_botella1.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";
import { AvatarLayer, AvatarWindow } from "./scenes/AvatarLayer";

const LAST = CUES.reduce((m, c) => Math.max(m, c.start + c.dur), 0);
export const TOTAL_FRAMES_BOTELLA1 = sec(LAST + 0.5);

const AV: AvatarWindow[] = [
  { start: 0, mode: "hidden" },
  { start: 9, mode: "cornerTR", scale: 1 },
  { start: 15, mode: "cornerBL", scale: 1.05 },
  { start: 19, mode: "cornerTL", scale: 0.95 },
  { start: 26, mode: "cornerBR", scale: 1.05 },
  { start: 34, mode: "cornerTR", scale: 0.9 },
  { start: 39, mode: "hidden" },
  { start: 47, mode: "cornerTR", scale: 1 },
  { start: 58, mode: "cornerBL", scale: 1.05 },
  { start: 61, mode: "cornerTL", scale: 0.95 },
  { start: 67, mode: "cornerBR", scale: 1.05 },
  { start: 84, mode: "hidden" },
  { start: 94, mode: "cornerTR", scale: 0.9 },
  { start: 99, mode: "cornerTR", scale: 1 },
  { start: 104, mode: "hidden" },
  { start: 119, mode: "cornerBL", scale: 1.05 },
  { start: 122, mode: "cornerTL", scale: 0.95 },
  { start: 131, mode: "cornerBR", scale: 1.05 },
  { start: 148, mode: "cornerTR", scale: 0.9 },
  { start: 149, mode: "hidden" },
  { start: 158, mode: "cornerTR", scale: 1 },
  { start: 166, mode: "cornerBL", scale: 1.05 },
  { start: 175, mode: "cornerTL", scale: 0.95 },
  { start: 187, mode: "cornerBR", scale: 1.05 },
  { start: 190, mode: "hidden" },
  { start: 212, mode: "cornerTR", scale: 0.9 },
  { start: 227, mode: "hidden" },
  { start: 228, mode: "cornerTR", scale: 1 },
  { start: 237, mode: "hidden" },
  { start: 268, mode: "cornerBL", scale: 1.05 },
  { start: 280, mode: "cornerTL", scale: 0.95 },
  { start: 295, mode: "cornerBR", scale: 1.05 },
  { start: 304, mode: "hidden" },
  { start: 342, mode: "cornerTR", scale: 0.9 },
  { start: 352, mode: "cornerTR", scale: 1 },
  { start: 355, mode: "hidden" },
  { start: 361, mode: "cornerBL", scale: 1.05 },
];

export const MainBotella1: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg0 }}>
      <CinematicWrap handheld={0}>
        {CUES.map((c) => (
          <Sequence key={c.key} from={sec(c.start)} durationInFrames={sec(c.dur)}>
            {c.el(sec(c.dur))}
          </Sequence>
        ))}
      </CinematicWrap>
      <AvatarLayer src="botella1_opt.mp4" windows={AV} accent={COLORS.good} />
    </AbsoluteFill>
  );
};
