// Main_sandia1.tsx — Video SANDÍA parte 1 (hook + secreto del súper + señales 1-4).
import { AbsoluteFill, Sequence } from "remotion";
import { CUES } from "./cues_sandia1.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";
import { AvatarLayer, AvatarWindow } from "./scenes/AvatarLayer";
import { BOLD } from "./scenes/Bold";

const LAST = CUES.reduce((m, c) => Math.max(m, c.start + c.dur), 0);
export const TOTAL_FRAMES_SANDIA1 = sec(LAST + 0.5);

// hidden en diagramas/impactos: [51,61][108,125][185,206][254,286][368,371]
const AV: AvatarWindow[] = [
  { start: 0, mode: "full" },
  { start: 9, mode: "cornerTR", scale: 1.0 },
  { start: 18, mode: "cornerBL", scale: 1.05 },
  { start: 27, mode: "cornerTR", scale: 0.9 },
  { start: 43, mode: "cornerBR", scale: 1.05 },
  { start: 51, mode: "hidden" },
  { start: 61, mode: "cornerTR", scale: 1.0 },
  { start: 67, mode: "cornerTL", scale: 0.95 },
  { start: 75, mode: "cornerTR", scale: 1.0 },
  { start: 89, mode: "cornerBL", scale: 1.05 },
  { start: 99, mode: "cornerTR", scale: 0.9 },
  { start: 108, mode: "hidden" },
  { start: 125, mode: "cornerTR", scale: 1.0 },
  { start: 132, mode: "cornerBL", scale: 1.05 },
  { start: 148, mode: "cornerTR", scale: 0.9 },
  { start: 154, mode: "cornerTL", scale: 1.0 },
  { start: 169, mode: "cornerTR", scale: 1.0 },
  { start: 185, mode: "hidden" },
  { start: 206, mode: "cornerTR", scale: 1.0 },
  { start: 218, mode: "cornerBL", scale: 1.05 },
  { start: 224, mode: "cornerTR", scale: 0.9 },
  { start: 238, mode: "cornerTL", scale: 1.0 },
  { start: 254, mode: "hidden" },
  { start: 286, mode: "cornerTR", scale: 1.0 },
  { start: 299, mode: "cornerBL", scale: 1.05 },
  { start: 311, mode: "cornerTR", scale: 0.9 },
  { start: 321, mode: "cornerTL", scale: 1.0 },
  { start: 327, mode: "cornerTR", scale: 1.0 },
  { start: 342, mode: "cornerBL", scale: 1.05 },
  { start: 348, mode: "cornerTR", scale: 0.9 },
  { start: 368, mode: "hidden" },
];

export const MainSandia1: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg0 }}>
      <CinematicWrap handheld={0}>
        {CUES.map((c) => (
          <Sequence key={c.key} from={sec(c.start)} durationInFrames={sec(c.dur)}>
            {c.el(sec(c.dur))}
          </Sequence>
        ))}
      </CinematicWrap>
      <AvatarLayer src="sandia1_opt.mp4" windows={AV} accent={BOLD.yellow} />
    </AbsoluteFill>
  );
};
