export type RegionStat = {
  code: string;
  name: string;
  flag: string;
  activePlayers: number;
  totalPrizesAwarded: string;
  engagementRate: number;
  roundsPlayed: string;
  avgSessionMinutes: number;
};

export type PrizeTier = {
  label: string;
  value: string;
  count: number;
  highlight?: boolean;
};

export type HowToPlayStep = {
  step: number;
  title: string;
  description: string;
};

export type Game = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  status: "live" | "coming-soon";
  launchDate?: string;
  theme: {
    primary: string;
    accent: string;
    gradient: string;
    cardGlow: string;
  };
  figmaEmbedSrc: string | null;
  heroImageAlt: string;
  badge: string;
  globalStats: {
    activePlayers: string;
    totalPrizes: string;
    markets: number;
    roundsPlayed: string;
  };
  regions: RegionStat[];
  prizePool: {
    headline: string;
    subheadline: string;
    breakdown: PrizeTier[];
  };
  howToPlay: HowToPlayStep[];
};
