// Main_botella2.tsx — Video BOTELLA parte 2 (beneficios + secretos de yapa + por qué nadie te lo enseña + cierre).
import { AbsoluteFill, Sequence } from "remotion";
import { CUES } from "./cues_botella2.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";
import { AvatarLayer, AvatarWindow } from "./scenes/AvatarLayer";

const LAST = CUES.reduce((m, c) => Math.max(m, c.start + c.dur), 0);
export const TOTAL_FRAMES_BOTELLA2 = sec(LAST + 0.5);

const AV: AvatarWindow[] = [
  { start: 0, mode: "hidden" },
  { start: 9, mode: "cornerTR", scale: 1 },
  { start: 17, mode: "cornerBL", scale: 1.05 },
  { start: 23, mode: "cornerTL", scale: 0.95 },
  { start: 25, mode: "cornerBR", scale: 1.05 },
  { start: 33, mode: "hidden" },
  { start: 36, mode: "cornerTR", scale: 0.9 },
  { start: 40, mode: "hidden" },
  { start: 53, mode: "cornerTR", scale: 1 },
  { start: 60, mode: "hidden" },
  { start: 64, mode: "cornerBL", scale: 1.05 },
  { start: 71, mode: "cornerTL", scale: 0.95 },
  { start: 81, mode: "cornerBR", scale: 1.05 },
  { start: 86, mode: "cornerTR", scale: 0.9 },
  { start: 92, mode: "hidden" },
  { start: 95, mode: "cornerTR", scale: 1 },
  { start: 100, mode: "hidden" },
  { start: 112, mode: "cornerBL", scale: 1.05 },
  { start: 118, mode: "cornerTL", scale: 0.95 },
  { start: 145, mode: "hidden" },
  { start: 164, mode: "cornerBR", scale: 1.05 },
  { start: 175, mode: "cornerTR", scale: 0.9 },
  { start: 183, mode: "cornerTR", scale: 1 },
  { start: 187, mode: "hidden" },
  { start: 198, mode: "cornerBL", scale: 1.05 },
  { start: 201, mode: "hidden" },
  { start: 211, mode: "cornerTL", scale: 0.95 },
  { start: 235, mode: "cornerBR", scale: 1.05 },
  { start: 252, mode: "hidden" },
  { start: 259, mode: "cornerTR", scale: 0.9 },
];

export const MainBotella2: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg0 }}>
      <CinematicWrap handheld={0}>
        {CUES.map((c) => (
          <Sequence key={c.key} from={sec(c.start)} durationInFrames={sec(c.dur)}>
            {c.el(sec(c.dur))}
          </Sequence>
        ))}
      </CinematicWrap>
      <AvatarLayer src="botella2_opt.mp4" windows={AV} accent={COLORS.good} />
    </AbsoluteFill>
  );
};
