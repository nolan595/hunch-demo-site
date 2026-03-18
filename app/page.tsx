"use client";

import { motion } from "framer-motion";
import { GameCard } from "@/components/GameCard";
import { games } from "@/lib/games";

const globalStats = [
  { label: "Live Markets", value: "8" },
  { label: "Active Players", value: "412K+" },
  { label: "Total Prizes Awarded", value: "£16M+" },
  { label: "Rounds Played", value: "56M+" },
];

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,226,0,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,226,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top, #FFE200 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFE200]/20 bg-[#FFE200]/5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFE200] animate-pulse" />
            <span className="text-xs font-semibold text-[#FFE200] uppercase tracking-widest">
              Internal Demo Portal
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight mb-4 leading-none"
          >
            Hunch{" "}
            <span className="text-gradient-gold">Games</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-white/50 max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Free-to-play games built for engagement, retention, and prize excitement —
            across every market we operate in.
          </motion.p>

          {/* Global stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
          >
            {globalStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white/4 border border-white/8 px-4 py-3"
              >
                <div className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-[#FFE200]">
                  {stat.value}
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-wide mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/5" />
      </div>

      {/* Games grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-4 rounded-full bg-[#FFE200]" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/50">
              Game Library
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
            {games.map((game, i) => (
              <GameCard key={game.slug} game={game} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 font-medium">
            Hunch Games — Internal Demo Portal. Not for external distribution.
          </p>
          <p className="text-xs text-white/20">
            Stats are indicative. For official figures contact the data team.
          </p>
        </div>
      </footer>
    </div>
  );
}
