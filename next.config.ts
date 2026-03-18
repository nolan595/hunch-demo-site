import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/games/superspin",
        destination: "/games/super-streak",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
