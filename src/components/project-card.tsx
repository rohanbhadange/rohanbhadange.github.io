import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/config/portfolio";
import { portfolio } from "@/config/portfolio";
import { ProjectMedia } from "./project-media";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const size = project.size === "wide"
    ? "md:col-span-2 lg:col-span-7"
    : project.size === "tall"
      ? "lg:col-span-5"
      : "lg:col-span-5";

  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`${portfolio.labels.openProject}: ${project.title}`}
      className={`focus-ring group relative flex min-h-[430px] flex-col overflow-hidden rounded-[22px] border border-zinc-800 bg-zinc-900/70 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 ${size}`}
    >
      <ProjectMedia project={project} priority={priority} className="aspect-[16/10] min-h-[240px]" />
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow">{project.discipline}</p>
          <ArrowUpRight size={18} className="text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-50" />
        </div>
        <h3 className="mt-4 text-2xl font-medium tracking-[-.03em]">{project.title}</h3>
        <p className="mt-3 text-base leading-7 text-zinc-400">{project.excerpt}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-md border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
