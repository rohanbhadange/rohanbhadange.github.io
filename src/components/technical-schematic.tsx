"use client";
import { animate, createScope, onScroll, stagger, svg } from "animejs";
import { useEffect, useRef } from "react";
import type { SchematicConfig } from "@/config/portfolio";

export function TechnicalSchematic({ config }: { config: SchematicConfig }) {
  const root=useRef<HTMLElement>(null);
  useEffect(()=>{if(!root.current)return;const scope=createScope({root:root.current,mediaQueries:{reduce:"(prefers-reduced-motion: reduce)"}}).add(self=>{const paths=root.current!.querySelectorAll<SVGPathElement>("[data-schematic-path]");if(self?.matches.reduce){paths.forEach(path=>{path.style.strokeDasharray="none"});return}animate(svg.createDrawable(paths),{draw:["0 0","0 1"],delay:stagger(160),duration:1500,ease:"inOut(3)",autoplay:onScroll({target:root.current!,enter:"bottom-=15% bottom",leave:"top+=20% top",sync:true})});});return()=>scope.revert()},[config]);
  return <section ref={root} data-testid="technical-schematic" className="section-space border-b border-zinc-700"><div className="container-shell grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><div><p className="eyebrow">{config.eyebrow}</p><h2 className="mt-4 text-3xl font-medium tracking-[-.04em] sm:text-4xl">{config.title}</h2><p className="body-copy mt-5">{config.intro}</p></div><div className="overflow-hidden rounded-[24px] border border-zinc-700 bg-zinc-900 p-5 sm:p-8"><svg viewBox={config.viewBox} role="img" aria-label={config.title} className="h-auto w-full"><g fill="none" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round">{config.paths.map(path=><path key={path.id} data-schematic-path d={path.d}/>)}</g>{config.paths.map((path,index)=><text key={`${path.id}-label`} x={index<2?55:index===2?430:735} y={index===1?345:index===3?365:85} fill="#a1a1aa" fontSize="16" fontFamily="monospace">{path.label}</text>)}</svg></div></div></section>;
}
