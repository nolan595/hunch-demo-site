import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Hunch Games — Demo Portal",
  description:
    "Internal showcase of Hunch free-to-play games. Explore live game stats, prize structures, and interactive demos across all markets.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-dvh bg-[#070708] text-white font-[family-name:var(--font-body)]">
        <Navigation />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
