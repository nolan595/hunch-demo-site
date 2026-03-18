import type { Game } from "./types";

export const games: Game[] = [
  {
    slug: "money-heist",
    name: "Money Heist",
    shortName: "Money Heist",
    tagline: "Unlock the safe. Claim the cash.",
    description:
      "A free-to-play code game where every player holds a unique code. When the heist goes live, only the winning code cracks the safe — and takes home up to £10,000.",
    status: "live",
    theme: {
      primary: "#C80015",
      accent: "#FFE200",
      gradient: "from-[#410001] via-[#1a0001] to-[#070708]",
      cardGlow: "rgba(200,0,21,0.3)",
    },
    figmaEmbedSrc:
      "https://embed.figma.com/proto/9EIgAKApJ6kznmNZ84HJ83/Money-Heist?page-id=389%3A675&node-id=389-816&viewport=323%2C288%2C0.14&scaling=scale-down&content-scaling=fixed&starting-point-node-id=389%3A816&embed-host=share",
    heroImageAlt: "Money Heist — safe cracking game",
    badge: "FREE TO PLAY",
    globalStats: {
      activePlayers: "142K",
      totalPrizes: "£2.4M",
      markets: 3,
      roundsPlayed: "8.1M",
    },
    regions: [
      {
        code: "GB",
        name: "United Kingdom",
        flag: "🇬🇧",
        activePlayers: 98500,
        totalPrizesAwarded: "£1.8M",
        engagementRate: 94,
        roundsPlayed: "5.2M",
        avgSessionMinutes: 4,
      },
      {
        code: "IE",
        name: "Republic of Ireland",
        flag: "🇮🇪",
        activePlayers: 28200,
        totalPrizesAwarded: "£420K",
        engagementRate: 91,
        roundsPlayed: "1.9M",
        avgSessionMinutes: 3,
      },
      {
        code: "CA",
        name: "Canada",
        flag: "🇨🇦",
        activePlayers: 15400,
        totalPrizesAwarded: "£180K",
        engagementRate: 87,
        roundsPlayed: "1.0M",
        avgSessionMinutes: 3,
      },
    ],
    prizePool: {
      headline: "£10,000",
      subheadline: "plus 1,000+ more prizes",
      breakdown: [
        { label: "Jackpot Code", value: "£10,000", count: 1, highlight: true },
        { label: "Winning Codes each", value: "£500", count: 10 },
        { label: "Winning Codes worth", value: "£5 Free Bets", count: 1000 },
      ],
    },
    howToPlay: [
      {
        step: 1,
        title: "Secure Your Codes",
        description:
          "Enter for free and receive a unique code. Every player gets the same fair chance at cracking the safe.",
      },
      {
        step: 2,
        title: "The Heist Begins",
        description:
          "Once every code is sold, the countdown ends and the Money Heist goes live for all players simultaneously.",
      },
      {
        step: 3,
        title: "Crack the Safe",
        description:
          "When the heist runs, the safe opens for one winning code. If it's yours, you walk away with the jackpot — or one of 1,000+ other prizes.",
      },
    ],
  },
  {
    slug: "hunch-superstreak",
    name: "Hunch Superstreak",
    shortName: "Superstreak",
    tagline: "Predict. Streak. Win big.",
    description:
      "A daily prediction game where players answer football questions to build streaks. Higher streaks unlock bigger prizes — from free spins to cash payouts.",
    status: "live",
    theme: {
      primary: "#1B6B3A",
      accent: "#FFE200",
      gradient: "from-[#0d3320] via-[#0a1f14] to-[#070708]",
      cardGlow: "rgba(27,107,58,0.3)",
    },
    figmaEmbedSrc: null,
    heroImageAlt: "Hunch Superstreak — football prediction game",
    badge: "FREE TO PLAY",
    globalStats: {
      activePlayers: "270K",
      totalPrizes: "R$14.2M",
      markets: 2,
      roundsPlayed: "48M",
    },
    regions: [
      {
        code: "BR",
        name: "Brazil",
        flag: "🇧🇷",
        activePlayers: 248000,
        totalPrizesAwarded: "R$12.8M",
        engagementRate: 88,
        roundsPlayed: "42.1M",
        avgSessionMinutes: 6,
      },
      {
        code: "PT",
        name: "Portugal",
        flag: "🇵🇹",
        activePlayers: 22000,
        totalPrizesAwarded: "R$1.4M",
        engagementRate: 85,
        roundsPlayed: "5.9M",
        avgSessionMinutes: 5,
      },
    ],
    prizePool: {
      headline: "R$50,000",
      subheadline: "Ouro tier monthly jackpot",
      breakdown: [
        {
          label: "Ouro (Gold) — Top leaderboard",
          value: "R$50,000",
          count: 16,
          highlight: true,
        },
        {
          label: "Prata (Silver) — Mid leaderboard",
          value: "R$70,000 pool",
          count: 500,
        },
        {
          label: "Bronze — Free Spins",
          value: "Giros Grátis",
          count: 2000,
        },
      ],
    },
    howToPlay: [
      {
        step: 1,
        title: "Answer Daily Questions",
        description:
          "Each day features a set of football questions. Answer correctly to build your streak and climb the leaderboard.",
      },
      {
        step: 2,
        title: "Build Your Streak",
        description:
          "Consecutive correct answers grow your streak level. The higher the streak, the bigger the potential prize you can unlock.",
      },
      {
        step: 3,
        title: "Climb the Leaderboard",
        description:
          "Points accumulate across the bi-weekly period. Top finishers in Gold, Silver, and Bronze tiers all take home prizes.",
      },
    ],
  },
  {
    slug: "superspin",
    name: "SuperSpin",
    shortName: "SuperSpin",
    tagline: "Spin. Win. Repeat.",
    description:
      "A loyalty-driven free spin game that rewards engaged players with daily spin opportunities. Prizes scale with player value tier — the more you play, the more you can win.",
    status: "coming-soon",
    launchDate: "Q2 2026",
    theme: {
      primary: "#6B21A8",
      accent: "#FFE200",
      gradient: "from-[#2d0a52] via-[#1a0630] to-[#070708]",
      cardGlow: "rgba(107,33,168,0.3)",
    },
    figmaEmbedSrc: null,
    heroImageAlt: "SuperSpin — daily free spin game",
    badge: "COMING SOON",
    globalStats: {
      activePlayers: "—",
      totalPrizes: "—",
      markets: 5,
      roundsPlayed: "—",
    },
    regions: [
      {
        code: "GB",
        name: "United Kingdom",
        flag: "🇬🇧",
        activePlayers: 0,
        totalPrizesAwarded: "—",
        engagementRate: 0,
        roundsPlayed: "—",
        avgSessionMinutes: 0,
      },
      {
        code: "BR",
        name: "Brazil",
        flag: "🇧🇷",
        activePlayers: 0,
        totalPrizesAwarded: "—",
        engagementRate: 0,
        roundsPlayed: "—",
        avgSessionMinutes: 0,
      },
      {
        code: "DE",
        name: "Germany",
        flag: "🇩🇪",
        activePlayers: 0,
        totalPrizesAwarded: "—",
        engagementRate: 0,
        roundsPlayed: "—",
        avgSessionMinutes: 0,
      },
    ],
    prizePool: {
      headline: "TBA",
      subheadline: "Prize structure to be confirmed",
      breakdown: [
        { label: "Daily Jackpot", value: "TBA", count: 1, highlight: true },
        { label: "Tier 2 Prizes", value: "TBA", count: 10 },
        { label: "Free Spin Credits", value: "TBA", count: 1000 },
      ],
    },
    howToPlay: [
      {
        step: 1,
        title: "Earn Your Spins",
        description:
          "Daily spins are awarded based on your player engagement. Log in each day to collect and keep your spin streak alive.",
      },
      {
        step: 2,
        title: "Spin the Wheel",
        description:
          "Each spin reveals an instant prize. Higher value tiers unlock premium wheel segments with bigger prize pools.",
      },
      {
        step: 3,
        title: "Collect Your Prize",
        description:
          "Prizes are credited instantly to your account — free bets, cash bonuses, or entries into the weekly jackpot draw.",
      },
    ],
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}
