import { portfolio } from "@/config/portfolio";
import type { TechnologyIconKey } from "@/config/portfolio";
import { Cuboid, Database, Layers3, Network, Ruler } from "lucide-react";
import Image from "next/image";
import { siAnsys, siDatabricks, siLangchain, siLanggraph, siNvidia, siOnnx, siPytorch, siPython, siRos, siSiemens, siUltralytics, siWebrtc, siYolo } from "simple-icons";

const brandIcons = {
  siemens: siSiemens,
  ansys: siAnsys,
  python: siPython,
  pytorch: siPytorch,
  langchain: siLangchain,
  langgraph: siLanggraph,
  databricks: siDatabricks,
  nvidia: siNvidia,
  ros: siRos,
  onnx: siOnnx,
  webrtc: siWebrtc,
  yolo: siYolo,
  ultralytics: siUltralytics,
} as const;

const conceptIcons = {
  database: Database,
  layers: Layers3,
  network: Network,
  tolerance: Ruler,
  prototype: Cuboid,
} as const;

function TechnologyLogo({ icon, logoUrl, name }: { icon: TechnologyIconKey; logoUrl?: string; name: string }) {
  if (logoUrl) return <span className="grid h-12 w-16 shrink-0 place-items-center rounded-xl bg-zinc-50 p-2.5 shadow-sm"><Image src={logoUrl} alt={`${name} logo`} width={48} height={32} unoptimized className="max-h-8 max-w-12 object-contain" /></span>;
  if (icon in brandIcons) {
    const brand = brandIcons[icon as keyof typeof brandIcons];
    return <span className="grid h-12 w-16 shrink-0 place-items-center rounded-xl bg-zinc-50 shadow-sm"><svg viewBox="0 0 24 24" role="img" aria-label={`${name} logo`} className="size-7" style={{color:`#${brand.hex}`}}><path fill="currentColor" d={brand.path}/></svg></span>;
  }
  const ConceptIcon = conceptIcons[icon as keyof typeof conceptIcons];
  return <span className="grid h-12 w-16 shrink-0 place-items-center rounded-xl border border-white/20 bg-white/10 text-cyan-50"><ConceptIcon size={25} strokeWidth={1.6} aria-hidden="true"/></span>;
}

function TechnologySequence({ duplicate = false }: { duplicate?: boolean }) {
  return <div className="technology-marquee-group" aria-hidden={duplicate || undefined}>{portfolio.stack.tools.map(tool => <div key={tool.name} className="flex shrink-0 items-center gap-4 border-r border-white/10 px-6 sm:px-9"><TechnologyLogo icon={tool.icon} logoUrl={tool.logoUrl} name={tool.name}/><div><p className="whitespace-nowrap text-base font-medium tracking-[-.02em] text-white">{tool.name}</p><p className="mt-1 whitespace-nowrap font-mono text-[9px] uppercase tracking-[.14em] text-cyan-100/65">{tool.category}</p></div></div>)}</div>;
}

export function TechnologyMarquee() {
  return <section aria-label={portfolio.stack.eyebrow} className="overflow-hidden border-y border-cyan-800/60 bg-[#12343d] py-8 sm:py-10"><div className="technology-marquee-mask"><div className="technology-marquee-track"><TechnologySequence/><TechnologySequence duplicate/></div></div></section>;
}
