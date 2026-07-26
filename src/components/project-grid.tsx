import type { Project } from "@/config/portfolio";
import { ProjectCard } from "./project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} priority={index === 0} />)}</div>;
}
