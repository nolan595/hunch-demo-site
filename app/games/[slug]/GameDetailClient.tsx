"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Radio, Globe } from "lucide-react";
import type { Game } from "@/lib/types";
import { RegionStats } from "@/components/RegionStats";
import { PrizeBreakdown } from "@/components/PrizeBreakdown";
import { HowToPlay } from "@/components/HowToPlay";
import { PhoneMockup, MobileEmbed } from "@/components/PhoneMockup";
import { SectionLabel } from "@/components/SectionLabel";
import { AnimatedCounter } from "@/components/AnimatedCounter";

type Props = { game: Game };

export function GameDetailClient({ game }: Props) {
  const isComingSoon = game.status === "coming-soon";
  const hasEmbed = !!game.figmaEmbedSrc;

  return (
    <div className="min-h-dvh">
      {/* ── Hero ── */}
      <section className="relative pt-20 overflow-hidden">
        {/* Background gradient based on game theme */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${game.theme.gradient}`}
          style={{ opacity: 0.7 }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(${game.theme.primary}30 1px, transparent 1px),
              linear-gradient(90deg, ${game.theme.primary}30 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top, ${game.theme.primary}40 0%, transparent 70%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/80 transition-colors duration-200 mb-8 cursor-pointer"
          >
            <ArrowLeft size={14} />
            All Games
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Left: title + meta */}
            <div className="flex-1">
              {/* Status + markets */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${
                    isComingSoon
                      ? "border-white/10 text-white/40 bg-white/5"
                      : "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
                  }`}
                >
                  {!isComingSoon && (
                    <Radio
                      size={8}
                      className="fill-emerald-400 text-emerald-400"
                    />
                  )}
                  {game.badge}
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-white/30 font-medium uppercase tracking-widest">
                  <Globe size={10} />
                  {game.regions.length} {game.regions.length === 1 ? "market" : "markets"}
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none mb-3"
              >
                {game.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base text-white/50 max-w-lg leading-relaxed"
              >
                {game.description}
              </motion.p>
            </div>

            {/* Right: global stats */}
            {!isComingSoon && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 lg:min-w-[420px]"
              >
                {[
                  { label: "Active Players", value: game.globalStats.activePlayers },
                  { label: "Total Prizes", value: game.globalStats.totalPrizes },
                  { label: "Markets", value: String(game.globalStats.markets) },
                  { label: "Rounds Played", value: game.globalStats.roundsPlayed },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-white/6 border border-white/8 backdrop-blur-sm px-4 py-3 text-center"
                  >
                    <div
                      className="font-[family-name:var(--font-display)] text-xl"
                      style={{ color: game.theme.accent }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wide mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Region flag strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mt-6 flex-wrap"
          >
            {game.regions.map((r) => (
              <div
                key={r.code}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/6 border border-white/8 text-xs text-white/60 font-medium"
              >
                <span className="text-base leading-none">{r.flag}</span>
                <span>{r.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* ── Demo section (top, most prominent) ── */}
        <section>
          <SectionLabel accentColor={game.theme.accent}>Interactive Demo</SectionLabel>

          {hasEmbed ? (
            <>
              {/* Desktop: phone mockup */}
              <div className="hidden lg:flex items-start gap-12">
                <div className="flex-shrink-0">
                  <PhoneMockup
                    embedSrc={game.figmaEmbedSrc!}
                    title={game.name}
                    accentColor={game.theme.accent}
                  />
                </div>

                {/* Explainer beside the phone */}
                <div className="flex-1 pt-6 space-y-8">
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mb-2">
                      Try the prototype
                    </h2>
                    <p className="text-sm text-white/50 leading-relaxed max-w-md">
                      This is an interactive Figma prototype — click through the
                      screens exactly as a player would on their mobile device.
                      The design is pixel-perfect to the live product.
                    </p>
                  </div>

                  {/* How to play inline */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">
                      How it works
                    </p>
                    <HowToPlay steps={game.howToPlay} accentColor={game.theme.accent} />
                  </div>
                </div>
              </div>

              {/* Tablet/Mobile: stacked */}
              <div className="lg:hidden space-y-8">
                {/* Mobile embed (no phone frame — too small) */}
                <div className="sm:hidden">
                  <MobileEmbed
                    embedSrc={game.figmaEmbedSrc!}
                    title={game.name}
                  />
                </div>

                {/* Tablet: constrained phone mockup centered */}
                <div className="hidden sm:flex justify-center">
                  <PhoneMockup
                    embedSrc={game.figmaEmbedSrc!}
                    title={game.name}
                    accentColor={game.theme.accent}
                  />
                </div>

                <HowToPlay steps={game.howToPlay} accentColor={game.theme.accent} />
              </div>
            </>
          ) : (
            /* No embed yet — placeholder */
            <div className="rounded-2xl border border-dashed border-white/10 bg-white/2 p-12 text-center space-y-3">
              <div
                className="w-12 h-12 rounded-full mx-auto flex items-center justify-center border border-white/10"
                style={{ background: `${game.theme.primary}20` }}
              >
                <span className="text-xl">{game.regions[0]?.flag}</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg text-white/60">
                Prototype Coming Soon
              </h3>
              <p className="text-sm text-white/30 max-w-sm mx-auto">
                The designer is building the Figma prototype for{" "}
                {game.name}. It will appear here automatically once
                the embed URL is added.
              </p>
            </div>
          )}
        </section>

        {/* ── Divider ── */}
        <div className="border-t border-white/5" />

        {/* ── Two column: Region stats + Prize breakdown ── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-12">
          {/* Region stats */}
          <section>
            <SectionLabel accentColor={game.theme.accent}>
              Performance by Market
            </SectionLabel>
            <RegionStats
              regions={game.regions}
              accentColor={game.theme.accent}
              isComingSoon={isComingSoon}
            />
          </section>

          {/* Prize breakdown + how to play (if no embed) */}
          <section>
            <SectionLabel accentColor={game.theme.accent}>
              Prize Structure
            </SectionLabel>
            <PrizeBreakdown
              headline={game.prizePool.headline}
              subheadline={game.prizePool.subheadline}
              breakdown={game.prizePool.breakdown}
              accentColor={game.theme.accent}
              isComingSoon={isComingSoon}
            />

            {/* How to play (only shown here if no figma embed) */}
            {!hasEmbed && (
              <div className="mt-8">
                <SectionLabel accentColor={game.theme.accent}>
                  How to Play
                </SectionLabel>
                <HowToPlay
                  steps={game.howToPlay}
                  accentColor={game.theme.accent}
                />
              </div>
            )}
          </section>
        </div>

        {/* ── Bottom nav: other games ── */}
        <div className="border-t border-white/5 pt-12">
          <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">
            Other Games
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFE200] hover:gap-3 transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft size={14} />
            Back to all games
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 font-medium">
            Hunch Games — Internal Demo Portal. Not for external distribution.
          </p>
          <p className="text-xs text-white/20">
            Stats are indicative mock data. For official figures contact the data team.
          </p>
        </div>
      </footer>
    </div>
  );
}
