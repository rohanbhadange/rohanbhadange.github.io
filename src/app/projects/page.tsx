import type { Metadata } from "next";
import { ProjectsHero } from "@/components/projects-hero";
import { UnfurlingProjectGallery } from "@/components/unfurling-project-gallery";
import { portfolio } from "@/config/portfolio";

export const metadata: Metadata = { title: `${portfolio.projects.eyebrow} — ${portfolio.site.name}`, description: portfolio.projects.intro };

export default function ProjectsPage() {
  const projects = portfolio.projects.items.toSorted((a, b) => a.order - b.order);
  return <main id="main-content"><ProjectsHero /><UnfurlingProjectGallery projects={projects} /></main>;
}
