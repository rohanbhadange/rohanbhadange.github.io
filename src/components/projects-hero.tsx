"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { portfolio } from "@/config/portfolio";
import { ModelViewer } from "./model-viewer";

export function ProjectsHero() {
  const [desktop, setDesktop] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const query = matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <header className="relative overflow-hidden border-b border-zinc-700 py-24 sm:py-28">
      <div className="page-grid absolute inset-0 opacity-45" />
      <div className="container-shell relative grid gap-12 lg:grid-cols-[1.15fr_.65fr] lg:items-center">
        <div>
          <p className="eyebrow">{portfolio.labels.projectIndex}</p>
          <h1 className="project-display-title">{portfolio.projects.title}</h1>
          <p className="body-copy mt-6 max-w-xl">{portfolio.projects.intro}</p>
        </div>
        <div className="h-[430px] rounded-[28px] border border-zinc-500/70 bg-zinc-200 p-2 shadow-2xl shadow-zinc-950/40">
          {desktop && !reduce ? (
            <ModelViewer config={portfolio.projects.model} />
          ) : (
            <div className="relative h-full overflow-hidden rounded-[24px] bg-zinc-200">
              <Image
                src={portfolio.projects.model.posterUrl}
                alt={portfolio.projects.model.label}
                fill
                priority
                sizes="(max-width:1024px) 92vw, 40vw"
                className="object-contain p-8"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
