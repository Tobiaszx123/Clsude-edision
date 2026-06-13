import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_STACK } from "../theme";
import { TechBackground } from "./TechBackground";
import { ImageBackdrop, PlainBackdrop } from "./Backdrops";
import { useReveal, kenBurns, panOffset } from "../lib/anim";

// Opaque full-screen scene wrapper. Covers the avatar, paints the background,
// and guarantees constant motion: a permanent Ken-Burns camera zoom (Rule 10A)
// plus a fluid zoom-blur enter/exit (Rule 6 #1 — no hard cuts).
// Rule 12 — `bg` varies the base so we don't always use the navy grid:
//   "grid"  (default) navy + white dots
//   "image" full-screen blurred+darkened photo (pass `image`)
//   "black" / "white" plain tone + subtle dots
export const SceneFrame: React.FC<{
  durationInFrames: number;
  children: React.ReactNode;
  hue?: "blue" | "cold" | "amber" | "red";
  glowX?: number;
  glowY?: number;
  zoom?: [number, number];
  drift?: number;
  contentStyle?: React.CSSProperties;
  bg?: "grid" | "image" | "black" | "white";
  image?: string; // staticFile path when bg="image"
  imageBlur?: number;
  imageDarken?: number;
  imageTint?: string;
  noReveal?: boolean; // RawShot: HARD-CUT, sin fade/blur de entrada NI salida (regla del nicho)
  pan?: [number, number]; // travel del FONDO en px (dx,dy) de inicio a fin → cámara que se desplaza
  staticContent?: boolean; // el texto NO hereda el Ken-Burns (queda clavado, no se descoloca con el zoom)
  scrim?: "left" | "right" | "bottom" | "center" | "none"; // scrim oscuro detrás del texto para contraste
}> = ({
  durationInFrames,
  children,
  hue = "blue",
  glowX = 50,
  glowY = 42,
  zoom = [1.04, 1.12],
  drift = 0.7,
  contentStyle,
  bg = "grid",
  image,
  imageBlur,
  imageDarken,
  imageTint,
  noReveal = false,
  pan = [0, 0],
  staticContent = false,
  scrim = "none",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const reveal = useReveal(frame, fps, durationInFrames);
  // noReveal = corte duro: opacidad plena, sin scale-spring ni blur de transición.
  // Se mantiene el Ken-Burns interno (cam), que NO es una transición sino movimiento vivo.
  const opacity = noReveal ? 1 : reveal.opacity;
  const scale = noReveal ? 1 : reveal.scale;
  const blur = noReveal ? 0 : reveal.blur;
  const cam = kenBurns(frame, durationInFrames, zoom[0], zoom[1]);
  const pn = panOffset(frame, durationInFrames, pan);

  // parallax 2.5D: deriva de perspectiva muy sutil → la foto se siente con profundidad
  const pRotY = Math.sin(frame / 115) * 1.1;
  const pRotX = Math.cos(frame / 137) * 0.7;

  // scrim de contraste detrás del texto (side-aware) → las tarjetas/píldoras siempre
  // se leen, aunque la foto sea clara. Va entre el fondo y el contenido.
  const scrimBg: Record<string, string> = {
    left: "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 38%, rgba(0,0,0,0) 62%)",
    right: "linear-gradient(270deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 38%, rgba(0,0,0,0) 62%)",
    bottom: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 32%, rgba(0,0,0,0) 60%)",
    center: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%)",
  };

  return (
    <AbsoluteFill style={{ fontFamily: FONT_STACK, opacity }}>
      {/* background gets its own slightly stronger parallax zoom + perspective for depth */}
      <AbsoluteFill style={{ transform: `perspective(1800px) rotateY(${pRotY}deg) rotateX(${pRotX}deg) translate(${pn.x}px, ${pn.y}px) scale(${cam * 1.06})`, transformOrigin: "center center" }}>
        {bg === "image" && image ? (
          <ImageBackdrop
            src={image}
            blur={imageBlur}
            darken={imageDarken}
            tint={imageTint}
            durationInFrames={durationInFrames}
          />
        ) : bg === "black" || bg === "white" ? (
          <PlainBackdrop
            tone={bg}
            glowHue={hue === "amber" || hue === "red" ? hue : "blue"}
            glowY={glowY}
          />
        ) : (
          <TechBackground glowX={glowX} glowY={glowY} hue={hue} drift={drift} />
        )}
      </AbsoluteFill>

      {/* scrim de contraste detrás del texto (no se mueve con el zoom) */}
      {scrim !== "none" && (
        <AbsoluteFill style={{ background: scrimBg[scrim], pointerEvents: "none" }} />
      )}

      <AbsoluteFill
        style={{
          // staticContent: el texto NO hereda el Ken-Burns (cam) → queda clavado y no
          // se descoloca/recorta cuando la foto se agranda. RawShot deja cam (no tiene panel).
          transform: `scale(${staticContent ? scale : scale * cam})`,
          filter: blur > 0.3 ? `blur(${blur}px)` : undefined,
          alignItems: "center",
          justifyContent: "center",
          willChange: "transform, filter",
          ...contentStyle,
        }}
      >
        {children}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
