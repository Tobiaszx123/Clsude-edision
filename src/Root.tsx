import "./index.css";
import { Composition } from "remotion";
import { MainTomateras, TOTAL_FRAMES_TOMATERAS } from "./VideoEdit/Main_tomateras";
import { MainRodillas, TOTAL_FRAMES_RODILLAS } from "./VideoEdit/Main_rodillas";

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
    </>
  );
};
