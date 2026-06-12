// Main_rodillas.tsx — Video "Frota esto en tus rodillas" (La Huerta de Timoteo).
// SECCION 1 (apertura: hook + historia). Los cues salen de beatsheet/rodillas.json
// → cues_rodillas.gen.tsx (NO editar ese a mano; cambiar el beatsheet y re-correr).
// La narración real corre como UNA pista de audio continua (public/audio.wav).
// Sin AvatarLayer todavía (no hay talking-head sincronizado): solo b-roll + narración.
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { CUES } from "./cues_rodillas.gen";
import { sec, COLORS } from "./theme";
import { CinematicWrap } from "./components/CinematicWrap";

// La composición dura hasta el final del último cue (+1s de aire).
const LAST = CUES.reduce((m, c) => Math.max(m, c.start + c.dur), 0);
export const TOTAL_FRAMES_RODILLAS = sec(LAST + 1);

export const MainRodillas: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg0 }}>
      {/* Narración (la voz de Timoteo). La apertura recorta los primeros ~2 min. */}
      <Audio src={staticFile("audio.wav")} />
      {/* handheld={0} = SIN temblor (pedido del usuario). Queda solo viñeta + grano sutil. */}
      <CinematicWrap handheld={0}>
        {CUES.map((c) => (
          <Sequence
            key={c.key}
            from={sec(c.start)}
            durationInFrames={sec(c.dur)}
          >
            {c.el(sec(c.dur))}
          </Sequence>
        ))}
      </CinematicWrap>
    </AbsoluteFill>
  );
};
