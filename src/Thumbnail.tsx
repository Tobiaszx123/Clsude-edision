// Thumbnail.tsx — miniatura 1280x720 renderizada con Remotion (texto NÍTIDO y
// brand-native) sobre una imagen base con tu cara generada por gpt-image-2.
//
// Flujo:
//   1) generá la BASE (vos + escena, SIN texto) con gen_images_ref.mjs a public/thumbs/
//      ej. prompt: "...the SAME man from the reference, holding a buried plastic bottle in
//      a sunny garden, looking at camera, dramatic, leave the LEFT THIRD darker/empty for
//      text... ultra realistic. Negative: text, letters, watermark, logo."
//   2) renderá la miniatura final:
//      npx remotion still Thumb out/thumb.png --props='{"bg":"thumbs/base_botella.png",
//        "title":"LA BOTELLA DE $1","highlight":"QUE LO CAMBIA TODO","textSide":"left"}'
import { AbsoluteFill, Img, staticFile } from "remotion";
import { COLORS, FONT_STACK } from "./VideoEdit/theme";

export type ThumbProps = {
  bg: string;            // staticFile path de la base (public/...)
  title: string;        // línea principal (blanca)
  highlight?: string;   // línea de remate (en color acento, más grande)
  kicker?: string;      // etiqueta chica arriba (opcional)
  accent?: string;
  textSide?: "left" | "right";
};

const stroke = "0 4px 18px rgba(0,0,0,0.85), 0 0 3px rgba(0,0,0,0.9), 2px 2px 0 rgba(0,0,0,0.6)";

export const Thumbnail: React.FC<ThumbProps> = ({
  bg,
  title,
  highlight,
  kicker,
  accent = COLORS.amber,
  textSide = "left",
}) => {
  const align = textSide === "left" ? "flex-start" : "flex-end";
  const gradDir = textSide === "left" ? "to right" : "to left";
  return (
    <AbsoluteFill style={{ backgroundColor: "#1a1610", fontFamily: FONT_STACK }}>
      {bg ? <Img src={staticFile(bg)} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
      {/* oscurecido del lado del texto + viñeta general para que el título resalte */}
      <AbsoluteFill style={{ background: `linear-gradient(${gradDir}, rgba(10,8,5,0.86) 0%, rgba(10,8,5,0.5) 38%, rgba(10,8,5,0) 62%)` }} />
      <AbsoluteFill style={{ boxShadow: "inset 0 0 200px rgba(0,0,0,0.55)" }} />
      <AbsoluteFill style={{ padding: 64, justifyContent: "center", alignItems: align }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: align, maxWidth: "62%", gap: 8 }}>
          {kicker ? (
            <div
              style={{
                fontSize: 34,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: COLORS.bg0,
                background: accent,
                padding: "6px 18px",
                borderRadius: 8,
                textShadow: "none",
              }}
            >
              {kicker}
            </div>
          ) : null}
          <div
            style={{
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 0.98,
              color: "#FFFFFF",
              textShadow: stroke,
              WebkitTextStroke: "2px rgba(0,0,0,0.55)",
              textAlign: textSide,
              textTransform: "uppercase",
            }}
          >
            {title}
          </div>
          {highlight ? (
            <div
              style={{
                fontSize: 124,
                fontWeight: 800,
                lineHeight: 0.98,
                color: accent,
                textShadow: stroke,
                WebkitTextStroke: "2px rgba(0,0,0,0.55)",
                textAlign: textSide,
                textTransform: "uppercase",
              }}
            >
              {highlight}
            </div>
          ) : null}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
