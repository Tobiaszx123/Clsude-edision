// Main_parte2.tsx — Parte 2 del video completo de tomateras (los 2 tipos, partes,
// el chupón, poda del determinado). Cues de beatsheet/parte2.json. El avatar
// (parte 2) provee el audio y rota por muchas posiciones; oculto durante los
// diagramas (que traen su propio avatar en la esquina).
import { AbsoluteFill, Sequence } from "remotion";
import { CUES } from "./cues_parte2.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";
import { AvatarLayer, AvatarWindow } from "./scenes/AvatarLayer";
import { BOLD } from "./scenes/Bold";

const LAST = CUES.reduce((m, c) => Math.max(m, c.start + c.dur), 0);
export const TOTAL_FRAMES_PARTE2 = sec(LAST + 0.5);

// hidden en los rangos de diagrama (traen su propio avatar): ~14-23, 122-129, 154-160, 204-223, 333-335
const AV: AvatarWindow[] = [
  { start: 0, mode: "full" },
  { start: 6, mode: "cornerTR", scale: 1.0 },
  { start: 14.46, mode: "hidden" },
  { start: 23, mode: "cornerBL", scale: 1.05 },
  { start: 36, mode: "cornerTR", scale: 0.9 },
  { start: 49, mode: "cornerBR", scale: 1.1 },
  { start: 56, mode: "cornerTR", scale: 1.0 },
  { start: 66, mode: "cornerTL", scale: 0.95 },
  { start: 76, mode: "cornerTR", scale: 1.0 },
  { start: 90, mode: "cornerBL", scale: 1.05 },
  { start: 102, mode: "cornerTR", scale: 0.9 },
  { start: 110, mode: "cornerTL", scale: 1.0 },
  { start: 121.78, mode: "hidden" },
  { start: 129, mode: "cornerTR", scale: 1.0 },
  { start: 140, mode: "cornerBR", scale: 1.05 },
  { start: 154.4, mode: "hidden" },
  { start: 160, mode: "cornerTR", scale: 0.9 },
  { start: 174, mode: "cornerBL", scale: 1.05 },
  { start: 186, mode: "cornerTR", scale: 1.0 },
  { start: 198, mode: "cornerTL", scale: 0.95 },
  { start: 204.1, mode: "hidden" },
  { start: 223.34, mode: "cornerTR", scale: 1.0 },
  { start: 237, mode: "cornerBR", scale: 1.1 },
  { start: 249, mode: "cornerTL", scale: 0.95 },
  { start: 258, mode: "cornerTR", scale: 1.0 },
  { start: 267, mode: "cornerBL", scale: 1.05 },
  { start: 273, mode: "cornerTR", scale: 0.9 },
  { start: 289.62, mode: "full" },
  { start: 296, mode: "cornerTR", scale: 1.0 },
  { start: 314, mode: "cornerBL", scale: 1.05 },
  { start: 322, mode: "cornerTR", scale: 0.9 },
  { start: 333.06, mode: "hidden" },
  { start: 335.1, mode: "cornerTR", scale: 1.0 },
];

export const MainParte2: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg0 }}>
      <CinematicWrap handheld={0}>
        {CUES.map((c) => (
          <Sequence key={c.key} from={sec(c.start)} durationInFrames={sec(c.dur)}>
            {c.el(sec(c.dur))}
          </Sequence>
        ))}
      </CinematicWrap>
      <AvatarLayer src="parte2_opt.mp4" windows={AV} accent={BOLD.yellow} />
    </AbsoluteFill>
  );
};
