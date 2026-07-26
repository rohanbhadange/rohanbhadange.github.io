"use client";

import Link from "next/link";
import { useEffect } from "react";

const destination = "/projects/scout-autonomous-platform/";

export default function LegacyRoboticEndEffectorPage() {
  useEffect(() => {
    window.location.replace(destination);
  }, []);

  return (
    <main className="grid min-h-screen place-items-center bg-zinc-950 px-6 text-center text-zinc-50">
      <p className="text-sm text-zinc-400">
        This project has moved. <Link className="text-cyan-300 underline underline-offset-4" href={destination}>Open Scout Autonomous Platform</Link>
      </p>
    </main>
  );
}
