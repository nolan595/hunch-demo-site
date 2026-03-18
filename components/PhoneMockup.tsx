"use client";

import { useState, useEffect } from "react";
import { RefreshCw, Maximize2, X, ExternalLink } from "lucide-react";

// iPhone 14 native screen dimensions
const SCREEN_W = 390;
const SCREEN_H = 844;
// Extra iframe height — clips Figma's bottom chrome (~116px: nav arrows + file bar)
const IFRAME_H = 960;

type Props = {
  embedSrc: string;
  title: string;
  accentColor?: string;
};

export function PhoneMockup({ embedSrc, title, accentColor = "#FFE200" }: Props) {
  const [key, setKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        {/* Device */}
        <div
          className="relative flex-shrink-0"
          style={{
            filter: `drop-shadow(0 50px 100px ${accentColor}28) drop-shadow(0 0 1px rgba(255,255,255,0.08))`,
          }}
        >
          {/* Outer device body — no fake chrome, just the physical shell */}
          <div
            className="relative"
            style={{
              width: SCREEN_W + 20,
              borderRadius: 54,
              padding: "10px",
              background: "linear-gradient(160deg, #2e2e36 0%, #1c1c22 40%, #111114 100%)",
              boxShadow: `
                0 0 0 1px rgba(255,255,255,0.07),
                inset 0 1px 0 rgba(255,255,255,0.10),
                inset 0 -1px 0 rgba(0,0,0,0.4),
                0 30px 90px rgba(0,0,0,0.85),
                0 0 80px ${accentColor}12
              `,
            }}
          >
            {/* Screen — clips Figma's bottom chrome via overflow hidden */}
            <div
              className="relative bg-black"
              style={{
                width: SCREEN_W,
                height: SCREEN_H,
                borderRadius: 44,
                overflow: "hidden",
              }}
            >
              <iframe
                key={key}
                src={embedSrc}
                title={`${title} — Interactive Prototype`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: SCREEN_W,
                  height: IFRAME_H,
                  border: "none",
                  display: "block",
                }}
                allowFullScreen
                loading="eager"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />

              {/* Subtle screen glare — top edge only */}
              <div
                className="absolute inset-x-0 top-0 h-24 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.035) 0%, transparent 100%)",
                  borderRadius: "44px 44px 0 0",
                  zIndex: 10,
                }}
              />
            </div>

            {/* Side hardware buttons */}
            {/* Silent switch */}
            <div
              className="absolute rounded-l-full"
              style={{
                left: -4,
                top: 104,
                width: 4,
                height: 22,
                background: "linear-gradient(180deg, #28282e, #1e1e24)",
              }}
            />
            {/* Volume up */}
            <div
              className="absolute rounded-l-full"
              style={{
                left: -4,
                top: 138,
                width: 4,
                height: 34,
                background: "linear-gradient(180deg, #28282e, #1e1e24)",
              }}
            />
            {/* Volume down */}
            <div
              className="absolute rounded-l-full"
              style={{
                left: -4,
                top: 184,
                width: 4,
                height: 34,
                background: "linear-gradient(180deg, #28282e, #1e1e24)",
              }}
            />
            {/* Power */}
            <div
              className="absolute rounded-r-full"
              style={{
                right: -4,
                top: 162,
                width: 4,
                height: 58,
                background: "linear-gradient(180deg, #28282e, #1e1e24)",
              }}
            />
          </div>
        </div>

        {/* Controls below the phone */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setKey((k) => k + 1)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50 hover:text-white/80 hover:bg-white/8 transition-all duration-200 cursor-pointer"
            aria-label="Restart prototype"
          >
            <RefreshCw size={12} />
            Restart
          </button>
          <button
            onClick={() => setIsFullscreen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all duration-200 cursor-pointer"
            style={{
              background: `${accentColor}18`,
              borderColor: `${accentColor}40`,
              color: accentColor,
            }}
            aria-label="Fullscreen demo"
          >
            <Maximize2 size={12} />
            Full Screen
          </button>
          <a
            href={embedSrc.replace("embed.figma.com/proto", "www.figma.com/proto")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50 hover:text-white/80 hover:bg-white/8 transition-all duration-200 cursor-pointer"
            aria-label="Open in Figma"
          >
            <ExternalLink size={12} />
            Open in Figma
          </a>
        </div>
      </div>

      {/* ── Fullscreen modal ── */}
      {isFullscreen && (
        <FullscreenModal
          embedSrc={embedSrc}
          title={title}
          accentColor={accentColor}
          onClose={() => setIsFullscreen(false)}
        />
      )}
    </>
  );
}

function FullscreenModal({
  embedSrc,
  title,
  accentColor,
  onClose,
}: {
  embedSrc: string;
  title: string;
  accentColor: string;
  onClose: () => void;
}) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(16px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/8 border border-white/12 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all duration-200 cursor-pointer z-10"
        aria-label="Close fullscreen"
      >
        <X size={16} />
      </button>

      {/* Restart in fullscreen */}
      <button
        onClick={() => setKey((k) => k + 1)}
        className="absolute top-5 right-16 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50 hover:text-white/90 transition-all duration-200 cursor-pointer z-10"
        aria-label="Restart prototype"
      >
        <RefreshCw size={12} />
        Restart
      </button>

      {/* Phone at full-screen scale */}
      <div className="flex flex-col items-center gap-4">
        <div
          className="relative"
          style={{
            filter: `drop-shadow(0 60px 120px ${accentColor}35)`,
          }}
        >
          <div
            className="relative"
            style={{
              borderRadius: 54,
              padding: "10px",
              background: "linear-gradient(160deg, #2e2e36 0%, #1c1c22 40%, #111114 100%)",
              boxShadow: `
                0 0 0 1px rgba(255,255,255,0.08),
                inset 0 1px 0 rgba(255,255,255,0.12),
                0 40px 120px rgba(0,0,0,0.9),
                0 0 100px ${accentColor}20
              `,
            }}
          >
            <div
              className="relative bg-black"
              style={{
                width: SCREEN_W,
                height: SCREEN_H,
                borderRadius: 44,
                overflow: "hidden",
              }}
            >
              <iframe
                key={key}
                src={embedSrc}
                title={`${title} — Fullscreen Prototype`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: SCREEN_W,
                  height: IFRAME_H,
                  border: "none",
                  display: "block",
                }}
                allowFullScreen
                loading="eager"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
              <div
                className="absolute inset-x-0 top-0 h-24 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)",
                  borderRadius: "44px 44px 0 0",
                  zIndex: 10,
                }}
              />
            </div>

            {/* Side buttons */}
            <div className="absolute rounded-l-full" style={{ left: -4, top: 104, width: 4, height: 22, background: "linear-gradient(180deg, #28282e, #1e1e24)" }} />
            <div className="absolute rounded-l-full" style={{ left: -4, top: 138, width: 4, height: 34, background: "linear-gradient(180deg, #28282e, #1e1e24)" }} />
            <div className="absolute rounded-l-full" style={{ left: -4, top: 184, width: 4, height: 34, background: "linear-gradient(180deg, #28282e, #1e1e24)" }} />
            <div className="absolute rounded-r-full" style={{ right: -4, top: 162, width: 4, height: 58, background: "linear-gradient(180deg, #28282e, #1e1e24)" }} />
          </div>
        </div>

        <p className="text-xs text-white/25 text-center">
          Press <kbd className="px-1 py-0.5 rounded bg-white/10 font-mono text-[10px]">Esc</kbd> or click outside to close
        </p>
      </div>
    </div>
  );
}

/* Mobile: full-width embed without phone frame */
export function MobileEmbed({ embedSrc, title }: { embedSrc: string; title: string }) {
  const [key, setKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => setKey((k) => k + 1)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50 hover:text-white/90 transition-all duration-200 cursor-pointer"
          >
            <RefreshCw size={12} />
            Restart
          </button>
          <button
            onClick={() => setIsFullscreen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50 hover:text-white/90 transition-all duration-200 cursor-pointer"
          >
            <Maximize2 size={12} />
            Full Screen
          </button>
        </div>
        <div
          className="w-full rounded-2xl overflow-hidden border border-white/10 bg-black"
          style={{ aspectRatio: `${SCREEN_W}/${SCREEN_H}` }}
        >
          <iframe
            key={key}
            src={embedSrc}
            title={`${title} — Figma prototype`}
            className="w-full"
            style={{ height: "110%", border: "none", display: "block" }}
            allowFullScreen
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>

      {isFullscreen && (
        <FullscreenModal
          embedSrc={embedSrc}
          title={title}
          accentColor="#FFE200"
          onClose={() => setIsFullscreen(false)}
        />
      )}
    </>
  );
}
