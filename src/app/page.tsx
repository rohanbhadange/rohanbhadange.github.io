import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Hero } from "@/components/hero";
import { CursorProjectShowcase } from "@/components/cursor-project-showcase";
import { ExperienceJourney } from "@/components/experience-journey";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TechnologyMarquee } from "@/components/stack-grid";
import { portfolio } from "@/config/portfolio";

export default function HomePage() {
  const featured = portfolio.projects.items
    .filter((project) => project.featured)
    .toSorted((a, b) => (a.featuredRank ?? Number.MAX_SAFE_INTEGER) - (b.featuredRank ?? Number.MAX_SAFE_INTEGER));
  return <main id="main-content">
    <Hero />
    <section id="about-preview" className="section-space border-b border-zinc-800"><div className="container-shell grid gap-12 lg:grid-cols-[1fr_.7fr] lg:items-end"><Reveal><SectionHeading eyebrow={portfolio.about.eyebrow} title={portfolio.about.previewTitle} body={portfolio.about.previewBody} /></Reveal><Reveal delay={.08} className="lg:justify-self-end"><Link href="/about" className="focus-ring inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 text-sm text-zinc-200 transition hover:bg-zinc-800">{portfolio.labels.viewAbout}<ArrowRight size={16} /></Link></Reveal></div></section>
    <TechnologyMarquee />
    <section id="projects-preview" className="section-space border-b border-zinc-800"><div className="container-shell"><Reveal><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionHeading eyebrow={portfolio.projects.eyebrow} title={portfolio.projects.previewTitle} body={portfolio.projects.previewIntro} /><Link href="/projects" className="focus-ring inline-flex items-center gap-2 self-start rounded-xl border border-zinc-700 px-5 py-3 text-sm text-zinc-200 transition hover:bg-zinc-800">{portfolio.labels.viewAllProjects}<ArrowRight size={16} /></Link></div></Reveal><Reveal className="mt-12"><CursorProjectShowcase projects={featured} /></Reveal></div></section>
    <ExperienceJourney />
    <section id="contact" className="section-space"><div className="container-shell"><Reveal className="panel relative overflow-hidden rounded-[28px] p-7 sm:p-12 lg:p-16"><div className="relative"><p className="eyebrow">{portfolio.contact.eyebrow}</p><h2 className="section-title">{portfolio.contact.title}</h2><p className="body-copy mt-5 max-w-xl">{portfolio.contact.body}</p><div className="mt-9 flex flex-wrap gap-3"><a href={`mailto:${portfolio.site.email}`} className="focus-ring inline-flex items-center gap-2 rounded-xl bg-zinc-50 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"><Mail size={16} />{portfolio.contact.emailLabel}</a>{portfolio.contact.links.map((link) => <a key={link.label} href={link.href} className="focus-ring rounded-xl border border-zinc-700 px-5 py-3 text-sm text-zinc-300 transition hover:bg-zinc-800 hover:text-zinc-50">{link.label}</a>)}</div></div></Reveal></div></section>
  </main>;
}
