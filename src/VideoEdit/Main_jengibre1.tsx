// Main_jengibre1.tsx — Jengibre parte 1. Avatar Higgsfield + subtítulos + HUD de capítulo.
import { AbsoluteFill, Sequence } from "remotion";
import { CUES } from "./cues_jengibre1.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";
import { AvatarLayer } from "./scenes/AvatarLayer";
import { AV } from "./av_jengibre1.gen";
import { Captions } from "./scenes/Captions";
import { ChapterHUD } from "./scenes/ChapterHUD";

const LAST = CUES.reduce((m, c) => Math.max(m, c.start + c.dur), 0);
export const TOTAL_FRAMES_JENGIBRE1 = sec(LAST + 0.5);

export const MainJengibre1: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg0 }}>
      <CinematicWrap handheld={0}>
        {CUES.map((c) => (
          <Sequence key={c.key} from={sec(c.start)} durationInFrames={sec(c.dur)}>
            {c.el(sec(c.dur))}
          </Sequence>
        ))}
      </CinematicWrap>
      <AvatarLayer src="jengibre1_opt.mp4" windows={AV} />
      <ChapterHUD chapters={[
        { start: 0, num: "01", label: "El pedacito" },
        { start: 109, num: "02", label: "El secreto" },
        { start: 184.5, num: "03", label: "A plantar" },
      ]} />
      <Captions src="captions_jengibre1.json" />
    </AbsoluteFill>
  );
};
