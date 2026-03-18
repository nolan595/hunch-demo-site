"use client";

import { useState } from "react";
import { Maximize2, RefreshCw } from "lucide-react";

type Props = {
  embedSrc: string;
  title: string;
  accentColor?: string;
};

export function PhoneMockup({ embedSrc, title, accentColor = "#FFE200" }: Props) {
  const [key, setKey] = useState(0);

  const handleRefresh = () => setKey((k) => k + 1);

  return (
    <div className="phone-mockup flex flex-col items-center gap-4">
      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleRefresh}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50 hover:text-white/90 hover:bg-white/10 transition-all duration-200 cursor-pointer"
          aria-label="Restart prototype"
        >
          <RefreshCw size={12} />
          Restart
        </button>
        <a
          href={embedSrc.replace("embed.figma.com/proto", "www.figma.com/proto")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50 hover:text-white/90 hover:bg-white/10 transition-all duration-200 cursor-pointer"
          aria-label="Open in Figma"
        >
          <Maximize2 size={12} />
          Open Figma
        </a>
      </div>

      {/* Phone frame */}
      <div className="relative" style={{ filter: `drop-shadow(0 30px 60px ${accentColor}22)` }}>
        {/* Outer bezel */}
        <div
          className="relative rounded-[44px] p-[3px]"
          style={{
            background: `linear-gradient(145deg, #2a2a2e, #1a1a1e, #111113)`,
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.08),
              0 20px 60px rgba(0,0,0,0.8),
              0 0 40px ${accentColor}18,
              inset 0 1px 0 rgba(255,255,255,0.12)
            `,
          }}
        >
          {/* Inner bezel */}
          <div className="rounded-[42px] overflow-hidden bg-black relative" style={{ width: 320, height: 693 }}>
            {/* Status bar notch area */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-black z-10 flex items-end justify-center pb-1">
              {/* Dynamic Island */}
              <div className="w-24 h-7 rounded-full bg-black border border-white/10" />
            </div>

            {/* Screen content */}
            <iframe
              key={key}
              src={embedSrc}
              title={`${title} — Figma prototype`}
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              loading="lazy"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />

            {/* Bottom home bar area */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent z-10 flex items-end justify-center pb-2">
              <div className="w-28 h-1 rounded-full bg-white/25" />
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div
          className="absolute left-[-3px] top-[120px] w-[3px] h-8 rounded-l-sm"
          style={{ background: "linear-gradient(180deg, #1a1a1e, #2a2a2e)" }}
        />
        <div
          className="absolute left-[-3px] top-[165px] w-[3px] h-10 rounded-l-sm"
          style={{ background: "linear-gradient(180deg, #1a1a1e, #2a2a2e)" }}
        />
        <div
          className="absolute left-[-3px] top-[220px] w-[3px] h-10 rounded-l-sm"
          style={{ background: "linear-gradient(180deg, #1a1a1e, #2a2a2e)" }}
        />
        <div
          className="absolute right-[-3px] top-[160px] w-[3px] h-14 rounded-r-sm"
          style={{ background: "linear-gradient(180deg, #1a1a1e, #2a2a2e)" }}
        />
      </div>
    </div>
  );
}

/* Mobile: full-width embed without phone frame */
export function MobileEmbed({ embedSrc, title }: { embedSrc: string; title: string }) {
  const [key, setKey] = useState(0);

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between">
        <p className="text-xs text-white/40 font-medium uppercase tracking-wide">
          Interactive Demo
        </p>
        <button
          onClick={() => setKey((k) => k + 1)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50 hover:text-white/90 transition-all duration-200 cursor-pointer"
        >
          <RefreshCw size={12} />
          Restart
        </button>
      </div>
      <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-black" style={{ aspectRatio: "375/812" }}>
        <iframe
          key={key}
          src={embedSrc}
          title={`${title} — Figma prototype`}
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </div>
    </div>
  );
}
