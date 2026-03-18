"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award } from "lucide-react";
import type { PrizeTier } from "@/lib/types";

type Props = {
  headline: string;
  subheadline: string;
  breakdown: PrizeTier[];
  accentColor: string;
  isComingSoon?: boolean;
};

const icons = [Trophy, Star, Award];

export function PrizeBreakdown({
  headline,
  subheadline,
  breakdown,
  accentColor,
  isComingSoon,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#0f0f12] overflow-hidden">
      {/* Jackpot hero */}
      <div
        className="relative px-6 py-8 text-center overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at center, ${accentColor}18 0%, transparent 70%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 30px, ${accentColor} 30px, ${accentColor} 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, ${accentColor} 30px, ${accentColor} 31px)`,
          }}
        />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-2">
            Top Prize
          </p>
          <div
            className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-1"
            style={{ color: isComingSoon ? "rgba(255,255,255,0.2)" : accentColor }}
          >
            {headline}
          </div>
          <p className="text-sm text-white/50">{subheadline}</p>
        </div>
      </div>

      {/* Prize tiers */}
      <div className="divide-y divide-white/5">
        {breakdown.map((tier, i) => {
          const Icon = icons[i] || Award;
          return (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className={`flex items-center justify-between px-6 py-4 ${
                tier.highlight ? "bg-white/3" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: tier.highlight
                      ? `${accentColor}25`
                      : "rgba(255,255,255,0.05)",
                    border: `1px solid ${tier.highlight ? accentColor + "40" : "rgba(255,255,255,0.08)"}`,
                  }}
                >
                  <Icon
                    size={15}
                    style={{ color: tier.highlight ? accentColor : "rgba(255,255,255,0.4)" }}
                  />
                </div>
                <div>
                  <p
                    className={`text-sm font-medium ${tier.highlight ? "text-white" : "text-white/70"}`}
                  >
                    {tier.label}
                  </p>
                  <p className="text-[11px] text-white/30">
                    {tier.count.toLocaleString()} {tier.count === 1 ? "prize" : "prizes"}
                  </p>
                </div>
              </div>

              <div
                className={`font-[family-name:var(--font-display)] text-base ${
                  tier.highlight ? "" : "text-white/60"
                }`}
                style={{ color: tier.highlight ? accentColor : undefined }}
              >
                {isComingSoon ? "TBA" : tier.value}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
