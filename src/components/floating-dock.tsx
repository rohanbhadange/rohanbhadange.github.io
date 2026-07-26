"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Mail, PanelsTopLeft, UserRound } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "motion/react";
import { portfolio, type IconKey } from "@/config/portfolio";

const icons = { home: Home, user: UserRound, projects: PanelsTopLeft, mail: Mail } satisfies Partial<Record<IconKey, typeof Home>>;

function DockLink({ item, active, mouseX }: { item: (typeof portfolio.navigation)[number]; active: boolean; mouseX: MotionValue<number> }) {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect();
    return bounds ? value - (bounds.left + bounds.width / 2) : 999;
  });
  const width = useSpring(useTransform(distance, [-110, 0, 110], [44, reduce ? 44 : 62, 44]), { stiffness: 320, damping: 24, mass: .35 });
  const lift = useSpring(useTransform(distance, [-110, 0, 110], [0, reduce ? 0 : -9, 0]), { stiffness: 320, damping: 24, mass: .35 });
  const Icon = icons[item.icon] ?? Home;
  return <motion.div style={{ width, y: lift }} className="flex shrink-0 justify-center">
    <Link ref={ref} href={item.href} aria-label={item.label} aria-current={active ? "page" : undefined} className={`focus-ring group relative grid h-11 w-full place-items-center rounded-xl border transition-colors ${active ? "border-zinc-300 bg-zinc-50 text-zinc-950" : "border-transparent text-zinc-400 hover:border-zinc-700 hover:bg-zinc-800 hover:text-zinc-50"}`}>
      <Icon size={18} strokeWidth={1.8} />
      <span className="pointer-events-none absolute -top-10 scale-90 rounded-md border border-zinc-700 bg-zinc-900 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-zinc-300 opacity-0 transition group-hover:scale-100 group-hover:opacity-100">{item.label}</span>
      {active ? <motion.span layoutId="dock-active" className="absolute -bottom-1.5 h-1 w-1 rounded-full bg-zinc-50" /> : null}
    </Link>
  </motion.div>;
}

export function FloatingDock() {
  const pathname = usePathname();
  const mouseX = useMotionValue(Infinity);
  return (
    <nav aria-label="Primary navigation" className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-3 sm:bottom-6">
      <motion.div onMouseMove={(event) => mouseX.set(event.clientX)} onMouseLeave={() => mouseX.set(Infinity)} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .25 }} className="flex h-[60px] items-end gap-1 rounded-2xl border border-zinc-700/80 bg-zinc-900/88 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl sm:rounded-[22px]">
        {portfolio.navigation.map((item) => {
          const active = item.match === "exact" ? pathname === item.href : item.match === "prefix" ? pathname.startsWith(item.href) : false;
          return <DockLink key={item.label} item={item} active={active} mouseX={mouseX} />;
        })}
      </motion.div>
    </nav>
  );
}
