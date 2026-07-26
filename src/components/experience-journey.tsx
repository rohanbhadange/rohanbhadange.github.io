"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useRef, useState } from "react";
import type { ExperienceEntry } from "@/config/portfolio";
import { portfolio } from "@/config/portfolio";

function JourneyRow({ entry, index, active }: { entry: ExperienceEntry; index: number; active: boolean }) {
  return <motion.article animate={{opacity:active?1:.42,x:active?0:10}} transition={{duration:.35,ease:[.22,1,.36,1]}} className="grid gap-5 border-b border-zinc-700 py-6 sm:grid-cols-[72px_1fr] sm:py-7"><div><span className={`grid size-11 place-items-center rounded-full border font-mono text-[10px] transition-colors ${active?"border-cyan-300 bg-cyan-300 text-zinc-950":"border-zinc-700 text-zinc-500"}`}>{String(index+1).padStart(2,"0")}</span></div><div><div className="flex flex-wrap items-baseline justify-between gap-3"><p className="font-mono text-[9px] uppercase tracking-[.16em] text-cyan-300/80">{entry.phase}</p><p className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">{entry.organization}</p></div><h3 className="mt-3 text-2xl font-medium tracking-[-.035em] text-zinc-50 sm:text-3xl">{entry.title}</h3><motion.div animate={{height:active?"auto":0,opacity:active?1:0}} transition={{duration:.35}} className="overflow-hidden"><p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">{entry.description}</p><div className="mt-5 flex flex-wrap gap-2">{entry.focus.map(item=><span key={item} className="rounded-full border border-cyan-800/70 bg-cyan-950/30 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-cyan-100/80">{item}</span>)}</div></motion.div></div></motion.article>;
}

export function ExperienceJourney() {
  const ref=useRef<HTMLElement>(null);
  const reduce=useReducedMotion();
  const [active,setActive]=useState(0);
  const {scrollYProgress}=useScroll({target:ref,offset:["start center","end center"]});
  useMotionValueEvent(scrollYProgress,"change",value=>{if(!reduce)setActive(Math.min(portfolio.experience.entries.length-1,Math.floor(value*portfolio.experience.entries.length)));});
  return <section ref={ref} id="experience" className="relative border-b border-zinc-800 md:h-[260vh]"><div className="container-shell py-20 md:sticky md:top-0 md:grid md:h-screen md:grid-cols-[.72fr_1.28fr] md:items-center md:gap-16 md:py-10"><div className="md:self-center"><p className="eyebrow">{portfolio.experience.eyebrow}</p><h2 className="section-title">{portfolio.experience.title}</h2><p className="body-copy mt-5 max-w-md">{portfolio.experience.intro}</p><div className="mt-9 hidden items-center gap-4 md:flex"><div className="h-px flex-1 bg-zinc-800"><motion.div className="h-full origin-left bg-cyan-300" style={{scaleX:scrollYProgress}}/></div><span className="font-mono text-[9px] text-zinc-500">{String(active+1).padStart(2,"0")} / {String(portfolio.experience.entries.length).padStart(2,"0")}</span></div></div><div className="mt-12 border-t border-zinc-700 md:mt-0">{portfolio.experience.entries.map((entry,index)=><JourneyRow key={entry.id} entry={entry} index={index} active={reduce||index===active}/>)}</div></div></section>;
}
