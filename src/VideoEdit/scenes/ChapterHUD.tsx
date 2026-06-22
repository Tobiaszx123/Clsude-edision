// ChapterHUD.tsx — overlay global estilo documental premium: un marcador de CAPÍTULO
// fijo arriba-izquierda ("01 · LA TOMATERA") que cambia por sección. Brand-native
// (paleta cálida, serif), legible sobre foto o crema gracias a un chip suave + sombra.
// Inspirado en el doc de referencia (barcos.mp4) pero adaptado al look cálido del canal.
//
// Uso (capa encima de todo, en el Main):
//   <ChapterHUD chapters={[{start:0,num:"01",label:"La tomatera"}, ...]} />
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { COLORS, FONT_STACK } from "../theme";

export type Chapter = { start: number; num: string; label: string };

export const ChapterHUD: React.FC<{ chapters: Chapter[] }> = ({ chapters }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;
  if (!chapters.length) return null;

  let i = 0;
  for (let k = 0; k < chapters.length; k++) if (t >= chapters[k].start) i = k;
  const ch = chapters[i];
  const since = t - ch.start;
  // entra suave al cambiar de capítulo y se mantiene
  const op = interpolate(since, [0, 0.5], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const slide = interpolate(since, [0, 0.5], [-12, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          top: 46,
          left: 56,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "8px 16px 8px 14px",
          borderRadius: 10,
          background: "rgba(20,16,10,0.42)",
          opacity: op,
          transform: `translateX(${slide}px)`,
        }}
      >
        <span style={{ fontFamily: FONT_STACK, fontWeight: 800, fontSize: 30, color: COLORS.amber, textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
          {ch.num}
        </span>
        <span style={{ width: 1, height: 26, background: "rgba(244,238,222,0.5)" }} />
        <span
          style={{
            fontFamily: FONT_STACK,
            fontWeight: 600,
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "rgba(244,238,222,0.95)",
            textShadow: "0 1px 5px rgba(0,0,0,0.7)",
          }}
        >
          {ch.label}
        </span>
      </div>
    </AbsoluteFill>
  );
};
