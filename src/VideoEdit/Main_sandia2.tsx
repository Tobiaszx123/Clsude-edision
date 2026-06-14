// Main_sandia2.tsx — Video SANDÍA parte 2 (señales 5-7 + recap + cierre).
import { AbsoluteFill, Sequence } from "remotion";
import { CUES } from "./cues_sandia2.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";
import { AvatarLayer, AvatarWindow } from "./scenes/AvatarLayer";
import { BOLD } from "./scenes/Bold";

const LAST = CUES.reduce((m, c) => Math.max(m, c.start + c.dur), 0);
export const TOTAL_FRAMES_SANDIA2 = sec(LAST + 0.5);

// hidden en diagramas/impactos: [104,109][176,179][231,251]
const AV: AvatarWindow[] = [
  { start: 0, mode: "cornerTR", scale: 1.0 },
  { start: 6, mode: "cornerBL", scale: 1.05 },
  { start: 13, mode: "cornerTR", scale: 0.9 },
  { start: 20, mode: "cornerTL", scale: 1.0 },
  { start: 28, mode: "cornerTR", scale: 1.0 },
  { start: 35, mode: "cornerBR", scale: 1.05 },
  { start: 41, mode: "cornerTR", scale: 0.9 },
  { start: 48, mode: "cornerBL", scale: 1.05 },
  { start: 55, mode: "cornerTR", scale: 1.0 },
  { start: 63, mode: "full" },
  { start: 69, mode: "cornerTR", scale: 1.0 },
  { start: 75, mode: "cornerBL", scale: 1.05 },
  { start: 83, mode: "cornerTR", scale: 0.9 },
  { start: 91, mode: "cornerTL", scale: 1.0 },
  { start: 98, mode: "cornerTR", scale: 1.0 },
  { start: 104, mode: "hidden" },
  { start: 109, mode: "cornerBL", scale: 1.05 },
  { start: 120, mode: "cornerTR", scale: 0.9 },
  { start: 136, mode: "cornerTL", scale: 1.0 },
  { start: 145, mode: "cornerTR", scale: 1.0 },
  { start: 160, mode: "cornerBL", scale: 1.05 },
  { start: 169, mode: "cornerTR", scale: 0.9 },
  { start: 176, mode: "hidden" },
  { start: 179, mode: "cornerTR", scale: 1.0 },
  { start: 190, mode: "cornerBL", scale: 1.05 },
  { start: 196, mode: "cornerTR", scale: 0.9 },
  { start: 210, mode: "cornerTL", scale: 1.0 },
  { start: 219, mode: "cornerTR", scale: 1.0 },
  { start: 231, mode: "hidden" },
  { start: 251, mode: "cornerTR", scale: 1.0 },
  { start: 260, mode: "cornerBL", scale: 1.05 },
  { start: 270, mode: "full" },
];

export const MainSandia2: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg0 }}>
      <CinematicWrap handheld={0}>
        {CUES.map((c) => (
          <Sequence key={c.key} from={sec(c.start)} durationInFrames={sec(c.dur)}>
            {c.el(sec(c.dur))}
          </Sequence>
        ))}
      </CinematicWrap>
      <AvatarLayer src="sandia2_opt.mp4" windows={AV} accent={BOLD.yellow} />
    </AbsoluteFill>
  );
};
