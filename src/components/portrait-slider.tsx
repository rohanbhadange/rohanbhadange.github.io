"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { CarouselSlide } from "@/config/portfolio";
import { portfolio } from "@/config/portfolio";

export function PortraitSlider({ slides, id }: { slides: CarouselSlide[]; id: string }) {
  const [viewportRef, api] = useEmblaCarousel({ axis: "y", loop: true }, [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })]);
  const [active, setActive] = useState(0);
  const sync = useCallback(() => { if (api) setActive(api.selectedScrollSnap()); }, [api]);
  const move = (step: number) => { const next = (active + step + slides.length) % slides.length; setActive(next); api?.scrollTo(next); };
  const select = (index: number) => { setActive(index); api?.scrollTo(index); };
  useEffect(() => { if (!api) return; api.on("select", sync); api.on("reInit", sync); return () => { api.off("select", sync); api.off("reInit", sync); }; }, [api, sync]);
  return <section id={id} data-testid={id} role="region" aria-label={portfolio.labels.carouselRegion} className="mx-auto w-full max-w-[680px]">
    <div className="space-y-3">
      <div ref={viewportRef} className="h-[min(76vh,720px)] min-h-[540px] overflow-hidden rounded-[28px] border border-zinc-700 bg-zinc-900"><div className="flex h-full flex-col touch-pan-x">{slides.map((slide,index)=><div key={slide.src} className="relative min-h-0 flex-[0_0_100%]" data-active-slide={index===active?"true":"false"}><Image src={slide.src} alt={slide.alt} fill priority={index===0} sizes="(max-width: 768px) 94vw, 52vw" className="object-contain p-4 sm:p-7"/></div>)}</div></div>
      <div className="flex min-w-0 items-center gap-2"><button onClick={()=>move(-1)} aria-label={portfolio.labels.previousSlide} className="focus-ring grid size-11 shrink-0 place-items-center rounded-full border border-zinc-700 bg-zinc-900"><ChevronLeft size={17}/></button><div className="min-w-0 flex-1 overflow-x-auto overscroll-x-contain"><div className="flex w-max gap-2 pb-1">{slides.map((slide,index)=><button key={slide.src} onClick={()=>select(index)} aria-label={`${portfolio.labels.slideOf} ${index+1}`} className={`relative aspect-[4/3] w-20 shrink-0 overflow-hidden rounded-lg border transition ${index===active?"border-zinc-50 opacity-100":"border-zinc-700 opacity-55 hover:opacity-100"}`}><Image src={slide.src} alt="" fill sizes="80px" className="object-cover"/></button>)}</div></div><button onClick={()=>move(1)} aria-label={portfolio.labels.nextSlide} className="focus-ring grid size-11 shrink-0 place-items-center rounded-full border border-zinc-700 bg-zinc-900"><ChevronRight size={17}/></button></div>
    </div>
    <div className="mt-4 flex justify-between font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500"><span>{portfolio.labels.carouselHint}</span><span>{String(active+1).padStart(2,"0")} / {String(slides.length).padStart(2,"0")}</span></div>
  </section>;
}
