// Main_botella2.tsx — ventanas de avatar en ./av_botella2.gen (generado), look webcam + cutaways del presentador.
import { AbsoluteFill, Sequence } from "remotion";
import { CUES } from "./cues_botella2.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";
import { AvatarLayer } from "./scenes/AvatarLayer";
import { AV } from "./av_botella2.gen";

const LAST = CUES.reduce((m, c) => Math.max(m, c.start + c.dur), 0);
export const TOTAL_FRAMES_BOTELLA2 = sec(LAST + 0.5);

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
      <AvatarLayer src="botella2_opt.mp4" windows={AV} />
    </AbsoluteFill>
  );
};
