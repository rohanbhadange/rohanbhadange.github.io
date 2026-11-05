import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-grid";
import { getOrderedProjects, portfolio } from "@/config/portfolio";
export const metadata: Metadata = { title: `${portfolio.projects.eyebrow} - ${portfolio.site.name}`, description: portfolio.projects.intro };
export default function ProjectsPage() { return <main id="main-content"><header className="container-shell pb-8 pt-16 sm:pt-20"><h1 className="text-4xl font-medium tracking-tight sm:text-5xl">All projects</h1><p className="mt-4 max-w-3xl rounded-lg bg-zinc-950/95 p-3 text-base leading-7 text-zinc-300">{portfolio.projects.intro}</p></header><section className="container-shell pb-24" data-testid="project-catalog"><ProjectGrid projects={getOrderedProjects()} /></section></main>; }
