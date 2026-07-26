import Image from "next/image";
import type { ProjectCollectionItem, ProjectMetric, ProjectStorySection } from "@/config/portfolio";

function TechnicalEvidence({ section }: { section: ProjectStorySection }) {
  if (!section.equations?.length && !section.technicalDetails?.length) return null;
  return (
    <div className="mt-8 space-y-4">
      {section.equations?.length ? (
        <div className="space-y-3">
          {section.equations.map((equation) => (
            <div key={`${equation.label}-${equation.expression}`} className="rounded-xl border border-cyan-950/80 bg-zinc-950/70 px-4 py-3 sm:px-5">
              <p className="font-mono text-[9px] uppercase tracking-[.16em] text-cyan-300/80">{equation.label}</p>
              <p className="mt-2 overflow-x-auto font-mono text-sm tracking-[-.02em] text-zinc-100 sm:text-base">{equation.expression}</p>
            </div>
          ))}
        </div>
      ) : null}
      {section.technicalDetails?.length ? (
        <dl className="grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
          {section.technicalDetails.map((detail) => (
            <div key={`${detail.label}-${detail.value}`} className="bg-zinc-950 px-4 py-3">
              <dt className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">{detail.label}</dt>
              <dd className="mt-1.5 text-sm leading-5 text-zinc-200">{detail.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}

export function ProjectMetricStrip({ metrics }: { metrics: ProjectMetric[] }) {
  const desktopColumns = metrics.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <section aria-label="Project results" className="border-b border-zinc-800">
      <div className={`container-shell grid divide-y divide-zinc-800 border-x border-zinc-800 sm:grid-cols-2 sm:divide-x sm:divide-y-0 ${desktopColumns}`}>
        {metrics.map((metric) => (
          <div key={`${metric.value}-${metric.label}`} className="p-6 sm:p-7">
            <p className="text-2xl font-medium tracking-[-.04em] text-cyan-200 sm:text-3xl">{metric.value}</p>
            <p className="mt-2 text-sm font-medium text-zinc-100">{metric.label}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-500">{metric.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProjectStorySections({ sections }: { sections: ProjectStorySection[] }) {
  return (
    <div className="border-b border-zinc-800">
      {sections.map((section, index) => (
        <section key={`${section.eyebrow}-${section.title}`} className={index > 0 ? "border-t border-zinc-800" : ""}>
          {section.figure ? (
            <div className="container-shell grid gap-10 py-20 sm:py-24 lg:grid-cols-[.92fr_1.08fr] lg:items-start lg:gap-16">
              <figure className={`overflow-hidden rounded-[24px] border border-zinc-700 bg-zinc-100 ${section.figureSide === "left" ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative aspect-[4/3]">
                  <Image src={section.figure.src} alt={section.figure.alt} fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-contain p-4 sm:p-6" />
                </div>
                <figcaption className="border-t border-zinc-700 bg-zinc-950 px-4 py-3 text-xs leading-5 text-zinc-500">{section.figure.caption}</figcaption>
              </figure>
              <div className={section.figureSide === "left" ? "lg:order-2" : "lg:order-1"}>
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-[-.04em] text-zinc-50 sm:text-4xl">{section.title}</h2>
                <div className="mt-7 max-w-3xl space-y-5">
                  {section.body.map((paragraph) => <p key={paragraph} className="body-copy">{paragraph}</p>)}
                </div>
                <TechnicalEvidence section={section} />
              </div>
            </div>
          ) : (
            <div className="container-shell grid gap-10 py-20 sm:py-24 lg:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)] lg:gap-20">
              <div>
                <p className="eyebrow">{section.eyebrow}</p>
                <p className="mt-5 font-mono text-[10px] tracking-[.15em] text-zinc-600">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-8 max-w-xl text-3xl font-medium tracking-[-.04em] text-zinc-50 sm:text-4xl">{section.title}</h2>
              </div>
              <div>
                <div className="max-w-3xl space-y-5">
                  {section.body.map((paragraph) => <p key={paragraph} className="body-copy">{paragraph}</p>)}
                </div>
                <TechnicalEvidence section={section} />
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

function CollectionChapter({ item, index }: { item: ProjectCollectionItem; index: number }) {
  return (
    <article id={item.id} className="border-t border-zinc-800 py-20 first:border-t-0 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[10px] uppercase tracking-[.16em] text-cyan-300/80">
            {String(index + 1).padStart(2, "0")} · {item.discipline}
          </p>
          <h2 className="mt-5 text-3xl font-medium tracking-[-.04em] text-zinc-50 sm:text-5xl">{item.title}</h2>
          <div className="mt-7 space-y-5">
            {item.summary.map((paragraph) => (
              <p key={paragraph} className="body-copy">{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-cyan-900/80 bg-cyan-950/30 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-cyan-100/80">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          {item.figures.map((figure, figureIndex) => (
            <figure key={figure.src} className={`overflow-hidden rounded-[24px] border border-zinc-700 ${figure.fit === "contain" ? "bg-zinc-100" : "bg-zinc-900"}`}>
              <div className="relative aspect-[4/3]">
                <Image
                  src={figure.src}
                  alt={figure.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className={figure.fit === "contain" ? "object-contain p-4 sm:p-7" : "object-contain p-2"}
                />
              </div>
              <figcaption className="flex items-center justify-between gap-6 border-t border-zinc-700 bg-zinc-950 px-4 py-3 font-mono text-[9px] uppercase tracking-[.13em] text-zinc-400">
                <span>{figure.caption}</span>
                <span>{String(figureIndex + 1).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ProjectCollection({ items }: { items: ProjectCollectionItem[] }) {
  return (
    <section aria-label="Project collection" className="border-b border-zinc-800">
      <div className="container-shell">
        {items.map((item, index) => (
          <CollectionChapter key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
