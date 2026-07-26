import Image from "next/image";
import type { ProjectFigure } from "@/config/portfolio";

export function ProjectFigureGallery({ figures }: { figures: ProjectFigure[] }) {
  return (
    <div data-testid="project-figure-gallery" className="mt-8 grid gap-5 md:grid-cols-2">
      {figures.map((figure, index) => (
        <figure
          key={figure.src + figure.caption}
          className={`overflow-hidden rounded-[20px] border border-zinc-700 ${figure.fit === "contain" ? "bg-zinc-100" : "bg-zinc-900"}`}
        >
          <div className="relative aspect-[16/10]">
            <Image
              src={figure.src}
              alt={figure.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={figure.fit === "contain" ? "object-contain p-3 sm:p-5" : "object-cover"}
            />
          </div>
          <figcaption className="flex items-center justify-between gap-5 border-t border-zinc-700 bg-zinc-950 px-4 py-3 text-xs leading-5 text-zinc-400">
            <span>{figure.caption}</span>
            <span className="shrink-0 font-mono text-[9px] text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
