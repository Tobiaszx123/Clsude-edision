import { COLORS, FONT_STACK, glass, sec } from "../theme";
import { SceneFrame } from "../components/SceneFrame";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";

// FLOATING CARD — imagen real full-bleed con Ken-Burns (zoom) + una TARJETA flotante
// (título y/o explicación corta) que ENTRA con resorte y SALE antes de terminar.
// Para títulos/explicaciones sobre la b-roll mientras corre la narración.
// Marca: tarjeta de tinta oscura + texto crema (legible sobre foto), borde de acento.
export const FloatingCard: React.FC<{
  durationInFrames: number;
  image: string; // "img/name.png"
  title: string;
  body?: string;
  kicker?: string;
  side?: "left" | "right";
  accent?: string;
  hue?: "blue" | "cold" | "amber" | "red";
  zoom?: [number, number];
}> = ({
  durationInFrames,
  image,
  title,
  body,
  kicker,
  side = "left",
  accent = COLORS.accent,
  hue = "amber",
  zoom = [1.06, 1.22],
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  // entra ~0.15s, sale ~0.55s antes del final
  const inn = spring({ frame: frame - sec(0.15), fps, config: { damping: 16, mass: 0.8 } });
  const out = spring({
    frame: frame - (durationInFrames - sec(0.55)),
    fps,
    config: { damping: 20, mass: 0.6 },
  });
  const appear = inn * (1 - out);
  const ty = (1 - inn) * 70 - out * 70;
  const dir = side === "left" ? 1 : -1;
  const tx = (1 - inn) * -28 * dir + out * 28 * dir;

  return (
    <SceneFrame
      durationInFrames={durationInFrames}
      hue={hue}
      bg="image"
      image={image}
      imageBlur={4}
      imageDarken={0.34}
      zoom={zoom}
      noReveal
      contentStyle={{
        alignItems: side === "left" ? "flex-start" : "flex-end",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          ...glass("dark"),
          margin: side === "left" ? "0 0 0 96px" : "0 96px 0 0",
          maxWidth: 740,
          padding: "34px 44px",
          opacity: appear,
          transform: `translate(${tx}px, ${ty}px)`,
          borderLeft: side === "left" ? `5px solid ${accent}` : undefined,
          borderRight: side === "right" ? `5px solid ${accent}` : undefined,
        }}
      >
        {kicker && (
          <div
            style={{
              fontFamily: FONT_STACK,
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: accent,
              marginBottom: 12,
            }}
          >
            {kicker}
          </div>
        )}
        <div
          style={{
            fontFamily: FONT_STACK,
            fontSize: 54,
            fontWeight: 700,
            color: COLORS.bg0,
            lineHeight: 1.08,
          }}
        >
          {title}
        </div>
        {body && (
          <div
            style={{
              fontFamily: FONT_STACK,
              fontSize: 30,
              color: "rgba(239,231,211,0.82)",
              marginTop: 16,
              lineHeight: 1.35,
            }}
          >
            {body}
          </div>
        )}
      </div>
    </SceneFrame>
  );
};
