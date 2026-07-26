export function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{body ? <p className="body-copy mt-5 max-w-xl">{body}</p> : null}</div>;
}
