// Captions.tsx — subtítulos animados QUEMADOS, generados desde la transcripción
// palabra-por-palabra de Whisper (public/captions_<slug>.json). Estilo karaoke:
// líneas cortas centradas abajo, scrim oscuro detrás (legible sobre foto/avatar),
// y la palabra que se está diciendo se resalta. Brand-native (FONT_STACK / COLORS).
//
// Uso (capa ENCIMA de todo, dentro del Main):
//   <Captions src="captions_botella1.json" />
import { AbsoluteFill, useCurrentFrame, useVideoConfig, staticFile, delayRender, continueRender, interpolate, Easing } from "remotion";
import { useState, useEffect } from "react";
import { COLORS, FONT_STACK } from "../theme";

type Word = { text: string; startMs: number; endMs: number };
type Line = { startMs: number; endMs: number; words: Word[] };

// agrupa palabras en líneas cortas: corta por nº de palabras, por pausa, o por puntuación final
function buildLines(words: Word[], maxWords: number, gapMs: number): Line[] {
  const lines: Line[] = [];
  let cur: Word[] = [];
  const flush = () => {
    if (cur.length) lines.push({ startMs: cur[0].startMs, endMs: cur[cur.length - 1].endMs, words: cur });
    cur = [];
  };
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    cur.push(w);
    const next = words[i + 1];
    const endsPunct = /[.?!:;]$/.test(w.text.trim());
    const gap = next ? next.startMs - w.endMs : Infinity;
    if (cur.length >= maxWords || endsPunct || gap > gapMs) flush();
  }
  flush();
  return lines;
}

export const Captions: React.FC<{ src: string; maxWords?: number; gapMs?: number; fontSize?: number }> = ({
  src,
  maxWords = 4,
  gapMs = 380,
  fontSize = 52,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [lines, setLines] = useState<Line[] | null>(null);

  useEffect(() => {
    const h = delayRender(`captions:${src}`);
    fetch(staticFile(src))
      .then((r) => r.json())
      .then((raw: Word[]) => {
        const words = (Array.isArray(raw) ? raw : []).filter((w) => (w.text || "").trim());
        setLines(buildLines(words, maxWords, gapMs));
        continueRender(h);
      })
      .catch(() => continueRender(h));
  }, [src, maxWords, gapMs]);

  if (!lines) return null;
  const tMs = (frame / fps) * 1000;
  const line = lines.find((l) => tMs >= l.startMs && tMs <= l.endMs + 140);
  if (!line) return null;

  const inP = interpolate(tMs - line.startMs, [0, 130], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill style={{ pointerEvents: "none", justifyContent: "flex-end", alignItems: "center" }}>
      <div
        style={{
          marginBottom: "9%",
          maxWidth: "82%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          columnGap: 18,
          rowGap: 2,
          padding: "14px 32px",
          borderRadius: 20,
          background: "rgba(22,17,11,0.5)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.45)",
          transform: `translateY(${(1 - inP) * 26}px)`,
          opacity: inP,
        }}
      >
        {line.words.map((w, i) => {
          const active = tMs >= w.startMs && tMs <= w.endMs;
          return (
            <span
              key={i}
              style={{
                fontFamily: FONT_STACK,
                fontWeight: 700,
                fontSize,
                lineHeight: 1.1,
                color: active ? "#FFFFFF" : "rgba(239,231,211,0.66)",
                textShadow: "0 2px 9px rgba(0,0,0,0.85), 0 0 2px rgba(0,0,0,0.95)",
                transform: active ? "scale(1.07)" : "scale(1)",
                display: "inline-block",
                // borde inferior acento solo en la palabra activa (sutil, brand)
                borderBottom: active ? `3px solid ${COLORS.accent}` : "3px solid transparent",
              }}
            >
              {w.text.trim()}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
