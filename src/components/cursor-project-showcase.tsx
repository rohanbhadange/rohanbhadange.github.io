"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useState } from "react";
import type { Project } from "@/config/portfolio";

export function CursorProjectShowcase({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 190, damping: 24, mass: .35 });
  const smoothY = useSpring(y, { stiffness: 190, damping: 24, mass: .35 });
  const reduce = useReducedMotion();

  return <>
    <div className="hidden md:block" onMouseMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); x.set(event.clientX - rect.left + 22); y.set(event.clientY - rect.top - 110); }} onMouseLeave={() => setActive(null)}>
      <div className="relative border-y border-zinc-800">
        <AnimatePresence>
          {active !== null ? <motion.div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-30 h-[210px] w-[320px] overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl" style={{ x: smoothX, y: smoothY }} initial={reduce ? false : { opacity: 0, scale: .86 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .92 }} transition={{ duration: .2 }}>
            <Image src={projects[active].imageUrl} alt="" fill sizes="320px" className={projects[active].mediaFit === "contain" ? "object-contain bg-zinc-100 p-3" : "object-cover"} />
            <div className="absolute inset-x-0 bottom-0 border-t border-zinc-700 bg-zinc-950/90 px-3 py-2 font-mono text-[9px] uppercase tracking-[.14em] text-zinc-400">{projects[active].discipline}</div>
          </motion.div> : null}
        </AnimatePresence>
        {projects.map((project, index) => <Link key={project.slug} href={`/projects/${project.slug}`} onMouseEnter={() => setActive(index)} className="focus-ring group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-zinc-800 px-2 py-7 last:border-b-0 sm:grid-cols-[4rem_1fr_auto] sm:px-4">
          <span className="font-mono text-[10px] text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
          <div><h3 className="text-2xl font-medium tracking-[-.035em] transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">{project.title}</h3><p className="mt-1 text-sm text-zinc-500">{project.discipline} · {project.tags.join(" / ")}</p></div>
          <ArrowUpRight size={19} className="text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-50" />
        </Link>)}
      </div>
    </div>
    <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:hidden">{projects.map((project) => <Link key={project.slug} href={`/projects/${project.slug}`} className="panel focus-ring w-[82vw] shrink-0 snap-center overflow-hidden rounded-[20px]"><div className="relative aspect-[4/3]"><Image src={project.imageUrl} alt={project.mediaAlt} fill sizes="82vw" className={project.mediaFit === "contain" ? "object-contain bg-zinc-100 p-3" : "object-cover"} /></div><div className="p-5"><p className="eyebrow">{project.discipline}</p><h3 className="mt-3 text-xl font-medium">{project.title}</h3><p className="mt-2 text-sm text-zinc-500">{project.tags.join(" / ")}</p></div></Link>)}</div>
  </>;
}
