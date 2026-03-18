"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Radio } from "lucide-react";
import type { Game } from "@/lib/types";

type Props = {
  game: Game;
  index: number;
};

export function GameCard({ game, index }: Props) {
  const isComingSoon = game.status === "coming-soon";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link
        href={`/games/${game.slug}`}
        className="group block relative rounded-2xl overflow-hidden border border-white/8 bg-[#0f0f12] cursor-pointer focus-visible:outline-[#FFE200]"
        aria-label={`View ${game.name} demo`}
      >
        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{ boxShadow: `inset 0 0 60px ${game.theme.cardGlow}` }}
        />

        {/* Top gradient bar */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${game.theme.primary}, ${game.theme.accent})`,
          }}
        />

        {/* Background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${game.theme.gradient} opacity-30`}
        />

        <div className="relative p-6 md:p-8">
          {/* Status badge */}
          <div className="flex items-center justify-between mb-6">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${
                isComingSoon
                  ? "border-white/10 text-white/40 bg-white/5"
                  : "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
              }`}
            >
              {!isComingSoon && (
                <Radio size={8} className="fill-emerald-400 text-emerald-400" />
              )}
              {game.badge}
            </span>
            {game.launchDate && (
              <span className="text-xs text-white/30 font-medium">{game.launchDate}</span>
            )}
          </div>

          {/* Game name */}
          <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-white mb-2 group-hover:text-[#FFE200] transition-colors duration-300">
            {game.name}
          </h3>

          <p className="text-sm text-white/50 leading-relaxed mb-6 line-clamp-2">
            {game.description}
          </p>

          {/* Stats strip */}
          {!isComingSoon ? (
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: "Active Players", value: game.globalStats.activePlayers },
                { label: "Total Prizes", value: game.globalStats.totalPrizes },
                { label: "Markets", value: String(game.globalStats.markets) },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white/5 border border-white/5 p-3 text-center"
                >
                  <div className="text-base font-[family-name:var(--font-display)] text-[#FFE200]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wide mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-white/5 border border-dashed border-white/10 p-4 mb-6 text-center">
              <p className="text-xs text-white/30">Launching {game.launchDate}</p>
            </div>
          )}

          {/* Region tags */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            {game.regions.map((r) => (
              <span
                key={r.code}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 border border-white/8 text-xs text-white/50"
              >
                <span>{r.flag}</span>
                <span>{r.code}</span>
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/30 font-medium">
              {game.howToPlay.length} steps to play
            </span>
            <span
              className="flex items-center gap-1.5 text-sm font-semibold text-[#FFE200] group-hover:gap-2.5 transition-all duration-200"
            >
              View Demo
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
