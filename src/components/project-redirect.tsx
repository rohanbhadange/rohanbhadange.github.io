"use client";
import { useEffect } from "react";
import Link from "next/link";
export function ProjectRedirect() { useEffect(()=>{location.replace('/projects/nudge-desktop-companion/');},[]);return <main className="container-shell py-24"><h1 className="text-3xl">This project is Nudge</h1><Link className="focus-ring mt-6 inline-block text-cyan-200 underline" href="/projects/nudge-desktop-companion/">Open Nudge Desktop Companion</Link></main>; }
