import type { Metadata } from "next";
import { ProjectRedirect } from "@/components/project-redirect";
export const metadata: Metadata = { title: "Nudge Desktop Companion", alternates: { canonical: "https://rohanbhadange.github.io/projects/nudge-desktop-companion/" }, robots: { index: false } };
export default function Page() { return <ProjectRedirect />; }
