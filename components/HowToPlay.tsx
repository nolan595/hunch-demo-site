"use client";

import { motion } from "framer-motion";
import type { HowToPlayStep } from "@/lib/types";

type Props = {
  steps: HowToPlayStep[];
  accentColor: string;
};

export function HowToPlay({ steps, accentColor }: Props) {
  return (
    <div className="space-y-4">
      {steps.map((step, i) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="flex gap-4 group"
        >
          {/* Step number + connector */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-[family-name:var(--font-display)] text-sm border-2 transition-all duration-300 group-hover:scale-110"
              style={{
                borderColor: accentColor,
                color: accentColor,
                background: `${accentColor}12`,
                boxShadow: `0 0 16px ${accentColor}20`,
              }}
            >
              {step.step}
            </div>
            {i < steps.length - 1 && (
              <div
                className="w-px flex-1 mt-2 mb-0 min-h-[24px]"
                style={{ background: `linear-gradient(to bottom, ${accentColor}40, transparent)` }}
              />
            )}
          </div>

          {/* Content */}
          <div className="pb-6 flex-1">
            <h4 className="font-[family-name:var(--font-display)] text-base text-white mb-1.5 group-hover:text-[#FFE200] transition-colors duration-200">
              {step.title}
            </h4>
            <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
