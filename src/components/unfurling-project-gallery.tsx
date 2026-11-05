"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import type { Project } from "@/config/portfolio";

function ProjectCardVisual({ project, sizes }: { project: Project; sizes: string }) {
  return (
    <Image
      src={project.imageUrl}
      alt={project.mediaAlt}
      fill
      sizes={sizes}
      className={`${project.mediaFit === "contain" ? "object-contain bg-zinc-100 p-4" : "object-cover"} transition duration-700 group-hover:scale-[1.035]`}
    />
  );
}

function ProjectCard({ project, sizes, compact = false }: { project: Project; sizes: string; compact?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`focus-ring group relative block overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 ${compact ? "aspect-[16/9]" : "aspect-[4/3]"}`}
    >
      <ProjectCardVisual project={project} sizes={sizes} />
      <div className="absolute inset-x-0 bottom-0 border-t border-zinc-700 bg-zinc-950/94 p-4 backdrop-blur sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-mono text-[9px] uppercase tracking-[.15em] text-cyan-300/80">{project.discipline}</p>
            <h2 className="mt-2 text-lg font-medium leading-tight tracking-[-.025em] text-zinc-50">{project.title}</h2>
            <p className={`mt-2 text-xs leading-5 text-zinc-400 ${compact ? "hidden xl:line-clamp-2" : "line-clamp-2"}`}>{project.excerpt}</p>
          </div>
          <ArrowUpRight size={17} className="mt-1 shrink-0 text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-50" />
        </div>
      </div>
    </Link>
  );
}

function GalleryColumn({
  projects,
  progress,
  offset,
}: {
  projects: Project[];
  progress: ReturnType<typeof useMotionValue<number>>;
  offset: number;
}) {
  const y = useTransform(progress, [0, 1], [offset === 1 ? -180 : 80, offset === 1 ? 80 : -20]);
  return (
    <motion.div style={{ y }} className="space-y-5">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} sizes="33vw" compact />
      ))}
    </motion.div>
  );
}

export function UnfurlingProjectGallery({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const gatedProgress = useMotionValue(0);
  const lastScroll = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScroll.current;
    lastScroll.current = latest;
    if (latest <= 2) {
      gatedProgress.set(0);
      return;
    }
    if (latest > previous) gatedProgress.set(Math.max(gatedProgress.get(), scrollYProgress.get()));
  });

  const rotateX = useTransform(gatedProgress, [0, .7], [reduce ? 0 : 18, 0]);
  const rotateY = useTransform(gatedProgress, [0, .7], [reduce ? 0 : -24, 0]);
  const rotateZ = useTransform(gatedProgress, [0, .7], [reduce ? 0 : 7, 0]);
  const scale = useTransform(gatedProgress, [0, .7], [reduce ? 1 : .78, 1]);
  // Keep the bounded animation a showcase. The complete collection below must
  // remain in normal document flow as more projects are published.
  const columns = [0, 1, 2].map((offset) => projects.slice(0, 3).filter((_, index) => index % 3 === offset));

  return (
    <>
    <section ref={ref} data-testid="unfurling-gallery" className="relative md:h-[300vh]">
      <div className="flex snap-x gap-4 overflow-x-auto px-5 py-16 md:hidden">
        {projects.map((project) => (
          <div key={project.slug} className="min-w-[86vw] snap-center">
            <ProjectCard project={project} sizes="86vw" />
          </div>
        ))}
      </div>
      <div className="sticky top-0 hidden h-screen overflow-hidden md:block [perspective:1200px]">
        <motion.div
          style={{ rotateX, rotateY, rotateZ, scale }}
          className="grid h-full grid-cols-3 gap-5 px-8 pb-36 pt-20 xl:px-14 xl:pb-40 xl:pt-24 [transform-style:preserve-3d]"
        >
          {columns.map((column, index) => (
            <GalleryColumn key={index} projects={column} progress={gatedProgress} offset={index} />
          ))}
        </motion.div>
      </div>
    </section>
    <section data-testid="project-catalog" className="container-shell hidden pb-24 pt-12 md:block">
      <h2 className="mb-8 text-3xl font-medium tracking-tight text-zinc-50">All projects</h2>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} sizes="(min-width: 1280px) 30vw, 45vw" />
        ))}
      </div>
    </section>
    </>
  );
}
