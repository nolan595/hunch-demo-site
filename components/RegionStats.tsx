"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import type { RegionStat } from "@/lib/types";

type Props = {
  regions: RegionStat[];
  accentColor: string;
  isComingSoon?: boolean;
};

export function RegionStats({ regions, accentColor, isComingSoon }: Props) {
  if (isComingSoon) {
    return (
      <div className="rounded-2xl border border-dashed border-white/10 bg-white/2 p-8 text-center">
        <p className="text-white/30 text-sm">
          Region statistics will be available at launch.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {regions.map((region, i) => (
        <motion.div
          key={region.code}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="rounded-2xl border border-white/8 bg-[#0f0f12] overflow-hidden"
        >
          {/* Top accent bar */}
          <div className="h-0.5 w-full" style={{ background: accentColor }} />

          <div className="p-5">
            {/* Region header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl" role="img" aria-label={region.name}>
                {region.flag}
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white">{region.name}</h4>
                <span className="text-[10px] text-white/40 uppercase tracking-wider font-medium">
                  {region.code}
                </span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              <StatCell
                label="Active Players"
                value={
                  region.activePlayers > 0 ? (
                    <AnimatedCounter
                      value={region.activePlayers}
                      suffix={region.activePlayers >= 1000 ? "" : ""}
                    />
                  ) : (
                    "—"
                  )
                }
                accentColor={accentColor}
              />
              <StatCell
                label="Prizes Awarded"
                value={region.totalPrizesAwarded}
                accentColor={accentColor}
              />
              <StatCell
                label="Engagement"
                value={
                  region.engagementRate > 0 ? (
                    <>
                      <AnimatedCounter value={region.engagementRate} />%
                    </>
                  ) : (
                    "—"
                  )
                }
                accentColor={accentColor}
              />
              <StatCell
                label="Rounds Played"
                value={region.roundsPlayed}
                accentColor={accentColor}
              />
            </div>

            {/* Engagement bar */}
            {region.engagementRate > 0 && (
              <div className="mt-4">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[10px] text-white/30 uppercase tracking-wide">
                    Engagement Rate
                  </span>
                  <span className="text-[10px] text-white/50">{region.engagementRate}%</span>
                </div>
                <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${region.engagementRate}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: accentColor }}
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function StatCell({
  label,
  value,
  accentColor,
}: {
  label: string;
  value: React.ReactNode;
  accentColor: string;
}) {
  return (
    <div className="rounded-xl bg-white/4 border border-white/5 p-3">
      <div
        className="text-sm font-[family-name:var(--font-display)] tabular-nums"
        style={{ color: accentColor }}
      >
        {value}
      </div>
      <div className="text-[10px] text-white/35 uppercase tracking-wide mt-0.5 leading-tight">
        {label}
      </div>
    </div>
  );
}
