import "./index.css";
import { Composition } from "remotion";
import { MainTomateras, TOTAL_FRAMES_TOMATERAS } from "./VideoEdit/Main_tomateras";
import { MainRodillas, TOTAL_FRAMES_RODILLAS } from "./VideoEdit/Main_rodillas";
import { MainParte2, TOTAL_FRAMES_PARTE2 } from "./VideoEdit/Main_parte2";
import { MainParte3, TOTAL_FRAMES_PARTE3 } from "./VideoEdit/Main_parte3";
import { MainParte4, TOTAL_FRAMES_PARTE4 } from "./VideoEdit/Main_parte4";
import { MainSandia1, TOTAL_FRAMES_SANDIA1 } from "./VideoEdit/Main_sandia1";
import { MainSandia2, TOTAL_FRAMES_SANDIA2 } from "./VideoEdit/Main_sandia2";
import { MainBotella1, TOTAL_FRAMES_BOTELLA1 } from "./VideoEdit/Main_botella1";

// ── Root ─────────────────────────────────────────────────────────────────────
// Videos del usuario (La Huerta de Timoteo).
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Tomateras"
        component={MainTomateras}
        durationInFrames={TOTAL_FRAMES_TOMATERAS}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Rodillas"
        component={MainRodillas}
        durationInFrames={TOTAL_FRAMES_RODILLAS}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Parte2"
        component={MainParte2}
        durationInFrames={TOTAL_FRAMES_PARTE2}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Parte3"
        component={MainParte3}
        durationInFrames={TOTAL_FRAMES_PARTE3}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Parte4"
        component={MainParte4}
        durationInFrames={TOTAL_FRAMES_PARTE4}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Sandia1"
        component={MainSandia1}
        durationInFrames={TOTAL_FRAMES_SANDIA1}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Sandia2"
        component={MainSandia2}
        durationInFrames={TOTAL_FRAMES_SANDIA2}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Botella1"
        component={MainBotella1}
        durationInFrames={TOTAL_FRAMES_BOTELLA1}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
