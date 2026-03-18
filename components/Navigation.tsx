"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { games } from "@/lib/games";

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-[#070708]/80">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group cursor-pointer"
          aria-label="Hunch Games home"
        >
          <div className="w-7 h-7 rounded-md bg-[#FFE200] flex items-center justify-center">
            <span className="text-[#070708] font-[family-name:var(--font-display)] text-xs font-bold leading-none">
              H
            </span>
          </div>
          <span className="font-[family-name:var(--font-display)] text-sm tracking-widest uppercase text-white group-hover:text-[#FFE200] transition-colors duration-200">
            Hunch Games
          </span>
          <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-white/5 text-white/40 border border-white/10 tracking-widest">
            DEMO
          </span>
        </Link>

        {/* Game links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {games.map((game) => {
            const isActive = pathname === `/games/${game.slug}`;
            return (
              <li key={game.slug}>
                <Link
                  href={`/games/${game.slug}`}
                  className={`relative px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#FFE200]"
                      : "text-white/50 hover:text-white/90"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md bg-white/5"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{game.shortName}</span>
                  {game.status === "live" && (
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile: current game indicator */}
        <div className="md:hidden flex items-center gap-2">
          <span className="text-xs text-white/40 font-medium">Internal use only</span>
        </div>

        {/* Status pill */}
        <div className="hidden md:flex items-center gap-1.5 text-xs text-white/30 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Internal Portal
        </div>
      </nav>
    </header>
  );
}
