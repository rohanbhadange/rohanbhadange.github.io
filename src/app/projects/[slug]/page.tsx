import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { ProjectCollection, ProjectMetricStrip, ProjectStorySections } from "@/components/project-case-study-details";
import { ProjectFigureGallery } from "@/components/project-figure-gallery";
import { ProjectMedia } from "@/components/project-media";
import { ScoutExplodedAssembly } from "@/components/scout-exploded-assembly";
import { TechnicalSchematic } from "@/components/technical-schematic";
import { getProject, portfolio, type ProjectMediaAsset } from "@/config/portfolio";

export function generateStaticParams() {
  return portfolio.projects.items.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: `${project.title} — ${portfolio.site.name}`, description: project.excerpt };
}

function ProjectIntroSection({ heading, paragraphs, media }: { heading: string; paragraphs: string[]; media?: ProjectMediaAsset }) {
  const mediaOnLeft = media?.side === "left";
  if (!media) {
    return (
      <section className="section-space border-b border-zinc-800">
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)] lg:gap-20">
          <h2 className="max-w-xl text-3xl font-medium tracking-[-.04em] text-zinc-50 sm:text-4xl">{heading}</h2>
          <div className="max-w-3xl space-y-6">
            {paragraphs.map((paragraph) => <p key={paragraph} className="body-copy">{paragraph}</p>)}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-space border-b border-zinc-800">
      <div className="container-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:gap-16">
        <figure className={`overflow-hidden rounded-[24px] border border-zinc-700 bg-zinc-900 ${mediaOnLeft ? "lg:order-1" : "lg:order-2"}`}>
          <div className="relative aspect-[4/3]">
            {media.kind === "video" ? (
              <video className="h-full w-full object-contain" autoPlay muted loop playsInline controls preload="metadata" aria-label={media.alt}>
                <source src={media.src} type="video/mp4" />
              </video>
            ) : (
              <Image src={media.src} alt={media.alt} fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-contain p-5" />
            )}
          </div>
          <figcaption className="border-t border-zinc-700 bg-zinc-950 px-4 py-3 text-xs leading-5 text-zinc-500">{media.caption}</figcaption>
        </figure>
        <div className={mediaOnLeft ? "lg:order-2" : "lg:order-1"}>
          <h2 className="max-w-3xl text-3xl font-medium tracking-[-.04em] text-zinc-50 sm:text-4xl">{heading}</h2>
          <div className="mt-7 space-y-6">
            {paragraphs.map((paragraph) => <p key={paragraph} className="body-copy">{paragraph}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const combinedIntroHeading = project.combinedIntroHeading ?? project.overviewHeading;
  const combinedIntroParagraphs = [
    ...project.overview,
    ...project.analysis,
    ...(project.combinedIntroWhy ? [project.combinedIntroWhy] : []),
  ];

  return (
    <main id="main-content">
      <header className="border-b border-zinc-800 pt-24">
        <div className="container-shell">
          <Link href="/projects" className="focus-ring inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-zinc-50">
            <ArrowLeft size={16} />
            {portfolio.labels.backToProjects}
          </Link>
          <div className={`grid gap-10 py-16 ${project.headerImage ? "lg:grid-cols-[.92fr_.72fr] lg:items-center" : "lg:grid-cols-[1fr_.46fr] lg:items-end"}`}>
            <div>
              <p className="eyebrow">{project.discipline}</p>
              <h1 className="display-title">{project.title}</h1>
              <p className="body-copy mt-7 max-w-3xl">{project.excerpt}</p>
              {project.headerImage ? (
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
            {project.headerImage ? (
              <figure className="overflow-hidden rounded-[24px] border border-zinc-700 bg-zinc-900">
                <div className="relative aspect-[4/3]">
                  <Image src={project.headerImage.src} alt={project.headerImage.alt} fill priority sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
                </div>
                <figcaption className="flex flex-wrap items-center gap-x-2 border-t border-zinc-700 bg-zinc-950 px-4 py-3 text-xs text-zinc-500">
                  <span>{project.headerImage.caption}</span>
                  {project.headerImage.creditUrl ? <a href={project.headerImage.creditUrl} className="text-zinc-400 underline decoration-zinc-700 underline-offset-4">Source</a> : null}
                  {project.headerImage.licenseUrl ? <a href={project.headerImage.licenseUrl} className="text-zinc-400 underline decoration-zinc-700 underline-offset-4">License</a> : null}
                </figcaption>
              </figure>
            ) : (
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {!project.explodedView && !project.headerImage ? (
        <div data-testid="standard-project-media" className="container-shell pt-8">
          <div className="overflow-hidden rounded-[28px] border border-zinc-700 bg-zinc-900 shadow-2xl shadow-zinc-950/40">
            <ProjectMedia project={project} priority className="aspect-[16/9]" />
          </div>
        </div>
      ) : null}

      {project.explodedView ? <ScoutExplodedAssembly config={project.explodedView} /> : null}
      {project.metrics?.length ? <ProjectMetricStrip metrics={project.metrics} /> : null}

      {!project.hideIntroSections ? (
        project.combineIntroSections ? (
          <ProjectIntroSection
            heading={combinedIntroHeading}
            paragraphs={combinedIntroParagraphs}
            media={project.overviewMedia}
          />
        ) : (
          <>
            <ProjectIntroSection heading={project.overviewHeading} paragraphs={project.overview} media={project.overviewMedia} />
            <ProjectIntroSection heading={project.analysisHeading} paragraphs={project.analysis} media={project.analysisMedia} />
          </>
        )
      ) : null}

      {project.storySections?.length ? <ProjectStorySections sections={project.storySections} /> : null}
      {project.collectionItems?.length ? <ProjectCollection items={project.collectionItems} /> : null}
      {project.schematic ? <TechnicalSchematic config={project.schematic} /> : null}

      {project.figures.length ? (
        <section className="section-space">
          <div className="container-shell">
            <p className="eyebrow">{portfolio.labels.figures}</p>
            <ProjectFigureGallery figures={project.figures} />
          </div>
        </section>
      ) : null}
    </main>
  );
}
