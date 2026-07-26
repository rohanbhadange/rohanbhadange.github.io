import type { Metadata } from "next";
import { PortraitSlider } from "@/components/portrait-slider";
import { AboutMasonry } from "@/components/about-masonry";
import { Reveal } from "@/components/reveal";
import { portfolio } from "@/config/portfolio";

export const metadata: Metadata = { title: `${portfolio.about.eyebrow} — ${portfolio.site.name}`, description: portfolio.about.introBody[0] };

function CopyBlock({ title, paragraphs, number }: { title: string; paragraphs: string[]; number: string }) {
  return <div><p className="eyebrow">{number}</p>{title ? <h2 className="mt-5 text-3xl font-medium tracking-[-.04em] sm:text-4xl">{title}</h2> : null}<div className={title ? "mt-7 space-y-5" : "mt-5 space-y-5"}>{paragraphs.map((paragraph, index) => <p key={`${number}-${index}`} className="body-copy about-copy">{paragraph}</p>)}</div></div>;
}

export default function AboutPage() {
  return <main id="main-content">
    <header className="relative overflow-hidden border-b border-zinc-800 py-28 sm:py-36"><div className="page-grid absolute inset-0" /><div className="container-shell relative"><p className="eyebrow">{portfolio.about.eyebrow}</p><h1 className="display-title">{portfolio.about.title}</h1></div></header>
    <section className="section-space border-b border-zinc-800"><div className="about-shell grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-20"><Reveal className="min-w-0"><PortraitSlider id="about-carousel-one" slides={portfolio.about.firstCarousel} /></Reveal><Reveal className="min-w-0" delay={.08}><CopyBlock number="01 / 02" title={portfolio.about.introTitle} paragraphs={portfolio.about.introBody} /></Reveal></div></section>
    <section className="section-space border-b border-zinc-800"><div className="about-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20"><Reveal className="order-2 min-w-0 lg:order-1"><CopyBlock number="02 / 02" title={portfolio.about.detailTitle} paragraphs={portfolio.about.detailBody} /></Reveal><Reveal delay={.08} className="order-1 min-w-0 lg:order-2"><PortraitSlider id="about-carousel-two" slides={portfolio.about.secondCarousel} /></Reveal></div></section>
    <AboutMasonry />
  </main>;
}
