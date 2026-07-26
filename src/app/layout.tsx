import type { Metadata } from "next";
import { FloatingDock } from "@/components/floating-dock";
import { AmbientShader } from "@/components/ambient-shader";
import { portfolio } from "@/config/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: portfolio.site.title,
  description: portfolio.site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <AmbientShader className="z-0" />
        <a className="focus-ring fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-zinc-50 px-4 py-2 text-sm text-zinc-950 transition-transform focus:translate-y-0" href="#main-content">
          {portfolio.labels.skipToContent}
        </a>
        <div className="site-shell relative z-10">{children}</div>
        <FloatingDock />
      </body>
    </html>
  );
}
