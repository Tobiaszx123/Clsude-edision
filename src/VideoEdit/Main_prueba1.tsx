// Main_prueba1.tsx — video de prueba (poda de tomateras). Avatar Higgsfield + clips reales
// de YouTube + subtítulos. Ventanas de avatar en ./av_prueba1.gen, cues en ./cues_prueba1.gen.
import { AbsoluteFill, Sequence } from "remotion";
import { CUES } from "./cues_prueba1.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";
import { AvatarLayer } from "./scenes/AvatarLayer";
import { AV } from "./av_prueba1.gen";
import { Captions } from "./scenes/Captions";
import { ChapterHUD } from "./scenes/ChapterHUD";

const LAST = CUES.reduce((m, c) => Math.max(m, c.start + c.dur), 0);
export const TOTAL_FRAMES_PRUEBA1 = sec(LAST + 0.5);

export const MainPrueba1: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg0 }}>
      <CinematicWrap handheld={0}>
        {CUES.map((c) => (
          <Sequence key={c.key} from={sec(c.start)} durationInFrames={sec(c.dur)}>
            {c.el(sec(c.dur))}
          </Sequence>
        ))}
      </CinematicWrap>
      <AvatarLayer src="prueba1_opt.mp4" windows={AV} />
      <ChapterHUD chapters={[
        { start: 0, num: "01", label: "La tomatera" },
        { start: 64.8, num: "02", label: "El secreto" },
        { start: 104, num: "03", label: "Los tres cortes" },
      ]} />
      <Captions src="captions_prueba1.json" />
    </AbsoluteFill>
  );
};
