// Main_jengibre2.tsx — Jengibre parte 2 (cuidados + cosecha + cierre).
import { AbsoluteFill, Sequence } from "remotion";
import { CUES } from "./cues_jengibre2.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";
import { AvatarLayer } from "./scenes/AvatarLayer";
import { AV } from "./av_jengibre2.gen";
import { Captions } from "./scenes/Captions";
import { ChapterHUD } from "./scenes/ChapterHUD";

const LAST = CUES.reduce((m, c) => Math.max(m, c.start + c.dur), 0);
export const TOTAL_FRAMES_JENGIBRE2 = sec(LAST + 0.5);

export const MainJengibre2: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg0 }}>
      <CinematicWrap handheld={0}>
        {CUES.map((c) => (
          <Sequence key={c.key} from={sec(c.start)} durationInFrames={sec(c.dur)}>
            {c.el(sec(c.dur))}
          </Sequence>
        ))}
      </CinematicWrap>
      <AvatarLayer src="jengibre2_opt.mp4" windows={AV} />
      <ChapterHUD chapters={[
        { start: 0, num: "04", label: "Cuidados" },
        { start: 92, num: "05", label: "La cosecha" },
        { start: 208, num: "06", label: "Tu propia riqueza" },
      ]} />
      <Captions src="captions_jengibre2.json" />
    </AbsoluteFill>
  );
};
