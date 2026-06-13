// Bold.tsx — SISTEMA GRÁFICO del canal (estilo pedido por el usuario, jun 2026):
// paleta AMARILLO + MARRÓN CLARO + CONTORNO NEGRO, look bold/pro tipo las referencias
// (texto impacto amarillo con borde negro, burbujas que aparecen, tarjeta checklist).
// Cada componente muestra la b-roll de fondo (SceneFrame bg=image) + el gráfico encima.
import { loadFont } from "@remotion/google-fonts/Montserrat";
import { SceneFrame } from "../components/SceneFrame";
import { sec } from "../theme";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";

// Sans pesada para el look bold. Pesos limitados (evita timeout de fuentes en render).
const { fontFamily: SANS } = loadFont("normal", {
  weights: ["600", "700", "800", "900"],
  subsets: ["latin"],
  ignoreTooManyRequestsWarning: true,
});

// ── Paleta del canal (bold) ──────────────────────────────────────────────────
export const BOLD = {
  yellow: "#F4C20D",
  yellowHi: "#FFD93B",
  brown: "#6E4A2A",
  brownDeep: "#4A3018",
  cream: "#F2E6C8",
  ink: "#17120C", // negro cálido para contornos
};

const enterOut = (frame: number, fps: number, dur: number, inAt = 0.12) => {
  const inn = spring({ frame: frame - sec(inAt), fps, config: { damping: 15, mass: 0.7 } });
  const out = spring({ frame: frame - (dur - sec(0.5)), fps, config: { damping: 20, mass: 0.6 } });
  return { appear: inn * (1 - out), inn, out };
};

// ── 1) TEXTO IMPACTO — amarillo con contorno negro grueso (tipo miniatura) ──────
export const BigImpact: React.FC<{
  durationInFrames: number;
  image: string;
  lines: string[]; // 1-3 líneas
  align?: "center" | "left";
  hue?: "blue" | "cold" | "amber" | "red";
}> = ({ durationInFrames, image, lines, align = "center", hue = "amber" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <SceneFrame
      durationInFrames={durationInFrames}
      hue={hue}
      bg="image"
      image={image}
      imageDarken={0.42}
      zoom={[1.08, 1.2]}
      noReveal
      staticContent
      scrim={align === "center" ? "center" : "left"}
      contentStyle={{
        alignItems: align === "center" ? "center" : "flex-start",
        justifyContent: "center",
        padding: align === "center" ? 0 : "0 0 0 90px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: align === "center" ? "center" : "flex-start" }}>
        {lines.map((ln, i) => {
          const pop = spring({ frame: frame - sec(0.1 + i * 0.16), fps, config: { damping: 12, mass: 0.6 } });
          return (
            <div
              key={i}
              style={{
                fontFamily: SANS,
                fontWeight: 900,
                fontSize: 116,
                lineHeight: 0.98,
                letterSpacing: -1,
                textTransform: "uppercase",
                color: BOLD.yellow,
                WebkitTextStroke: `9px ${BOLD.ink}`,
                paintOrder: "stroke fill",
                textShadow: "0 10px 0 rgba(0,0,0,0.35), 0 18px 40px rgba(0,0,0,0.5)",
                opacity: pop,
                transform: `scale(${interpolate(pop, [0, 1], [0.7, 1])}) rotate(${(1 - pop) * -2}deg)`,
                textAlign: align === "center" ? "center" : "left",
              }}
            >
              {ln}
            </div>
          );
        })}
      </div>
    </SceneFrame>
  );
};

// ── 2) BURBUJAS — píldoras que aparecen una por una (texto del avatar) ──────────
export const FloatingBubbles: React.FC<{
  durationInFrames: number;
  image: string;
  bubbles: string[];
  side?: "left" | "right";
  hue?: "blue" | "cold" | "amber" | "red";
}> = ({ durationInFrames, image, bubbles, side = "left", hue = "amber" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <SceneFrame
      durationInFrames={durationInFrames}
      hue={hue}
      bg="image"
      image={image}
      imageDarken={0.3}
      zoom={[1.05, 1.16]}
      noReveal
      staticContent
      scrim={side}
      contentStyle={{ alignItems: side === "left" ? "flex-start" : "flex-end", justifyContent: "center", padding: "0 90px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 22, alignItems: side === "left" ? "flex-start" : "flex-end" }}>
        {bubbles.map((b, i) => {
          const pop = spring({ frame: frame - sec(0.2 + i * 0.4), fps, config: { damping: 13, mass: 0.6 } });
          return (
            <div
              key={i}
              style={{
                fontFamily: SANS,
                fontWeight: 800,
                fontSize: 40,
                color: BOLD.ink,
                background: BOLD.cream,
                border: `4px solid ${BOLD.ink}`,
                borderRadius: 999,
                padding: "16px 34px",
                boxShadow: `0 8px 0 ${BOLD.brown}, 0 14px 30px rgba(0,0,0,0.4)`,
                opacity: pop,
                transform: `translateY(${(1 - pop) * 30}px) scale(${interpolate(pop, [0, 1], [0.8, 1])})`,
              }}
            >
              {b}
            </div>
          );
        })}
      </div>
    </SceneFrame>
  );
};

// ── 3) TARJETA CHECKLIST — crema + barra marrón + tildes (contorno negro) ────────
export const InfoCard: React.FC<{
  durationInFrames: number;
  image: string;
  title: string;
  items: { text: string; check?: boolean }[];
  side?: "left" | "right";
  hue?: "blue" | "cold" | "amber" | "red";
}> = ({ durationInFrames, image, title, items, side = "right", hue = "amber" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { appear, inn, out } = enterOut(frame, fps, durationInFrames);
  const tx = (1 - inn) * 40 - out * 40;
  return (
    <SceneFrame
      durationInFrames={durationInFrames}
      hue={hue}
      bg="image"
      image={image}
      imageBlur={3}
      imageDarken={0.22}
      zoom={[1.04, 1.14]}
      noReveal
      staticContent
      scrim={side}
      contentStyle={{ alignItems: side === "left" ? "flex-start" : "flex-end", justifyContent: "center", padding: "0 80px" }}
    >
      <div
        style={{
          width: 720,
          background: BOLD.cream,
          border: `5px solid ${BOLD.ink}`,
          borderRadius: 18,
          overflow: "hidden",
          boxShadow: `0 12px 0 ${BOLD.brownDeep}, 0 22px 50px rgba(0,0,0,0.45)`,
          opacity: appear,
          transform: `translateX(${tx}px)`,
        }}
      >
        <div
          style={{
            background: BOLD.brown,
            color: BOLD.cream,
            fontFamily: SANS,
            fontWeight: 900,
            fontSize: 38,
            letterSpacing: 1,
            textTransform: "uppercase",
            padding: "18px 30px",
            borderBottom: `5px solid ${BOLD.ink}`,
          }}
        >
          {title}
        </div>
        <div style={{ padding: "26px 30px", display: "flex", flexDirection: "column", gap: 18 }}>
          {items.map((it, i) => {
            const ip = spring({ frame: frame - sec(0.4 + i * 0.28), fps, config: { damping: 16, mass: 0.7 } });
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 18, opacity: ip, transform: `translateX(${(1 - ip) * 24}px)` }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    flexShrink: 0,
                    border: `4px solid ${BOLD.ink}`,
                    borderRadius: 8,
                    background: it.check === false ? "transparent" : BOLD.yellow,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: SANS,
                    fontWeight: 900,
                    fontSize: 26,
                    color: BOLD.ink,
                  }}
                >
                  {it.check === false ? "" : "✓"}
                </div>
                <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 34, color: BOLD.brownDeep }}>{it.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </SceneFrame>
  );
};
