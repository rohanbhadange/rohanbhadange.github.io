import Image from "next/image";
import type { Project } from "@/config/portfolio";
import { portfolio } from "@/config/portfolio";

export function ProjectMedia({ project, priority = false, className = "" }: { project: Project; priority?: boolean; className?: string }) {
  const mediaFit = project.mediaFit === "contain" ? "object-contain p-4 sm:p-7" : "object-cover";
  if (project.vimeoUrl) {
    return <div className={`relative overflow-hidden bg-zinc-900 ${className}`}><iframe className="absolute inset-0 h-full w-full" src={`${project.vimeoUrl}?background=1&autoplay=1&muted=1&loop=1`} title={`${portfolio.labels.vimeoTitle}: ${project.title}`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div>;
  }
  if (project.videoUrl) {
    return <video className={`h-full w-full object-cover ${className}`} autoPlay loop muted playsInline preload="metadata" poster={project.posterUrl ?? project.imageUrl} aria-label={project.mediaAlt}><source src={project.videoUrl} type="video/mp4" />{portfolio.labels.mediaFallback}</video>;
  }
  return <div className={`relative overflow-hidden ${project.mediaFit === "contain" ? "bg-zinc-100" : "bg-zinc-900"} ${className}`}><Image src={project.imageUrl} alt={project.mediaAlt} fill loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} sizes="(max-width: 768px) 100vw, 60vw" className={`${mediaFit} transition-transform duration-700 group-hover:scale-[1.025]`} /></div>;
}
