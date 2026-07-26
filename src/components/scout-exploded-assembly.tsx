"use client";

import Image from "next/image";
import { ContactShadows, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { createTimeline, onScroll } from "animejs";
import "animejs/adapters/three";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import type { ExplodedViewConfig } from "@/config/portfolio";
import { portfolio } from "@/config/portfolio";

function ScoutModel({ config, section, onProgress }: { config: ExplodedViewConfig; section: HTMLElement; onProgress: (value: number) => void }) {
  const source = useGLTF(config.modelUrl);
  const turntable = useRef<THREE.Group>(null);
  const progress = useRef(0);
  const { camera } = useThree();
  const assembledCamera = useMemo(() => new THREE.Vector3(...config.camera), [config.camera]);
  const explodedCamera = useMemo(() => new THREE.Vector3(...config.explodedCamera), [config.explodedCamera]);
  const model = useMemo(() => {
    const clone = cloneSkeleton(source.scene);
    clone.traverse(child => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material instanceof THREE.MeshStandardMaterial) {
          child.material = child.material.clone();
          child.material.roughness = Math.max(child.material.roughness, .48);
        }
        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(child.geometry, 24),
          new THREE.LineBasicMaterial({ color: "#71717a", transparent: true, opacity: .32, depthWrite: false }),
        );
        edges.renderOrder = 2;
        child.add(edges);
      }
    });
    return clone;
  }, [source.scene]);

  useEffect(() => {
    const timeline = createTimeline({ autoplay: false, defaults: { ease: "inOut(3)" } });
    const animatedNodes: THREE.Object3D[] = [];
    for (const group of config.groups) {
      for (const [nodeIndex, name] of group.nodeNames.entries()) {
        const node = model.getObjectByName(name);
        if (!node) continue;
        animatedNodes.push(node);
        const basePosition = node.position.clone();
        const baseRotation = node.rotation.clone();
        const mirror = group.offset[0] && basePosition.x < 0 ? -1 : 1;
        const spread = 1 + (nodeIndex - (group.nodeNames.length - 1) / 2) * .055;
        const start = group.stage[0] * 1000 + nodeIndex * 18;
        timeline.add(node, {
          x: basePosition.x + group.offset[0] * mirror * spread,
          y: basePosition.y + group.offset[1] * spread,
          z: basePosition.z + group.offset[2] * spread,
          rotateX: THREE.MathUtils.radToDeg(baseRotation.x) + (group.rotation?.[0] ?? 0),
          rotateY: THREE.MathUtils.radToDeg(baseRotation.y) + (group.rotation?.[1] ?? 0) * mirror,
          rotateZ: THREE.MathUtils.radToDeg(baseRotation.z) + (group.rotation?.[2] ?? 0) * mirror,
          duration: (group.stage[1] - group.stage[0]) * 1000 - nodeIndex * 8,
        }, start);
        timeline.add(node, {
          x: basePosition.x,
          y: basePosition.y,
          z: basePosition.z,
          rotateX: THREE.MathUtils.radToDeg(baseRotation.x),
          rotateY: THREE.MathUtils.radToDeg(baseRotation.y),
          rotateZ: THREE.MathUtils.radToDeg(baseRotation.z),
          duration: 100,
        }, 900);
      }
    }
    const observer = onScroll({ target: section, enter: "top top", leave: "bottom bottom", sync: true, onUpdate: self => { progress.current = self.progress; onProgress(self.progress); } });
    observer.link(timeline);
    return () => { observer.revert(); timeline.revert(); animatedNodes.length = 0; };
  }, [config, model, onProgress, section]);

  useFrame(() => {
    if (!turntable.current) return;
    const p = THREE.MathUtils.smoothstep(Math.min(progress.current / .82, 1), 0, 1);
    const assembled = config.assembledRotation.map(THREE.MathUtils.degToRad) as [number, number, number];
    const exploded = config.explodedRotation.map(THREE.MathUtils.degToRad) as [number, number, number];
    turntable.current.rotation.x = THREE.MathUtils.lerp(assembled[0], exploded[0], p);
    turntable.current.rotation.z = THREE.MathUtils.lerp(assembled[2], exploded[2], p);
    turntable.current.rotation.y = THREE.MathUtils.lerp(assembled[1], exploded[1], p) + Math.sin(performance.now() * .00018) * (1 - p) * .12;
    camera.position.lerpVectors(assembledCamera, explodedCamera, p);
    camera.lookAt(0, .2 + p * .35, 0);
    camera.updateProjectionMatrix();
  });
  return <group ref={turntable} scale={config.scale} position={config.position}><primitive object={model}/></group>;
}

function DesktopExplodedAssembly({ config }: { config: ExplodedViewConfig }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [section, setSection] = useState<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => { setSection(sectionRef.current); }, []);
  const updateProgress = useCallback((value: number) => {
    setProgress(value);
    if (value > .01 && value < .99) document.documentElement.dataset.scoutAssembly = "active";
    else delete document.documentElement.dataset.scoutAssembly;
  }, []);
  useEffect(() => () => { delete document.documentElement.dataset.scoutAssembly; }, []);
  const activeGroup = [...config.groups].reverse().find(group => progress >= group.stage[0] && progress < .9);
  return <section ref={sectionRef} data-testid="scout-exploded-view" className="relative hidden h-[420vh] border-y border-zinc-700 md:block">
    <div className="sticky top-0 h-screen overflow-hidden bg-zinc-200 text-zinc-950">
      <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-8 p-6 sm:p-10"><div className="max-w-xl"><p className="font-mono text-[10px] uppercase tracking-[.18em] text-zinc-600">{config.eyebrow}</p><h2 className="mt-3 text-3xl font-medium tracking-[-.04em] sm:text-5xl">{config.title}</h2></div><p className="hidden max-w-xs text-sm leading-6 text-zinc-600 lg:block">{config.intro}</p></div>
      {section && !reduced ? <Canvas camera={{position:config.camera,fov:34}} dpr={[1,1.35]} gl={{antialias:true,powerPreference:"high-performance"}} onCreated={({gl})=>gl.setClearColor("#e4e4e7",1)}><ambientLight intensity={1.7}/><directionalLight position={[-4,6,5]} intensity={4.8}/><directionalLight position={[5,2,-4]} intensity={2.2} color="#a5b4fc"/><Suspense fallback={null}><ScoutModel config={config} section={section} onProgress={updateProgress}/><ContactShadows position={[0,-.9,0]} opacity={.28} scale={7} blur={2.8} far={5} color="#52525b"/></Suspense></Canvas> : <Image src={config.frames.at(-1)!.src} alt={config.frames.at(-1)!.alt} fill sizes="100vw" className="object-contain p-16"/>}
      <div className="absolute bottom-8 left-8 z-20 max-w-sm sm:bottom-12 sm:left-12"><p className="font-mono text-[9px] uppercase tracking-[.18em] text-zinc-500">{portfolio.labels.scrollToInspect}</p><div className="mt-3 h-px w-64 bg-zinc-400"><div className="h-full bg-zinc-950" style={{width:`${Math.round(progress*100)}%`}}/></div><p aria-label={portfolio.labels.assemblyProgress} className="mt-2 font-mono text-[9px] text-zinc-500">{String(Math.round(progress*100)).padStart(2,"0")}%</p></div>
      <motion.aside key={activeGroup?.id ?? "assembled"} initial={{opacity:0,x:16}} animate={{opacity:1,x:0}} className="absolute bottom-10 right-8 z-20 w-[290px] border-l border-zinc-500 bg-zinc-200/70 py-2 pl-5 backdrop-blur-sm sm:bottom-14 sm:right-12"><p className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">{activeGroup ? portfolio.labels.explodedState : portfolio.labels.assembledState}</p><h3 className="mt-2 text-lg font-medium">{activeGroup?.label ?? config.label}</h3><p className="mt-2 text-xs leading-5 text-zinc-600">{activeGroup?.detail ?? config.intro}</p></motion.aside>
      <style jsx global>{`html[data-scout-assembly="active"] nav[aria-label="Primary navigation"] { opacity: 0; pointer-events: none; transform: translateY(18px); }`}</style>
    </div>
  </section>;
}

function MobileAssemblyFrames({ config }: { config: ExplodedViewConfig }) {
  const ref=useRef<HTMLElement>(null); const [active,setActive]=useState(0); const {scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});
  useMotionValueEvent(scrollYProgress,"change",value=>setActive(Math.min(config.frames.length-1,Math.floor(value*config.frames.length))));
  return <section ref={ref} data-testid="scout-mobile-frames" className="relative h-[320vh] border-y border-zinc-700 md:hidden"><div className="sticky top-0 flex h-screen flex-col bg-zinc-200 p-5 text-zinc-950"><div><p className="font-mono text-[9px] uppercase tracking-widest text-zinc-600">{config.eyebrow}</p><h2 className="mt-3 text-3xl font-medium tracking-[-.04em]">{config.title}</h2></div><div className="relative my-5 flex-1 overflow-hidden rounded-2xl border border-zinc-400"><Image key={config.frames[active].src} src={config.frames[active].src} alt={config.frames[active].alt} fill priority sizes="100vw" className="object-contain"/></div><div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-zinc-600"><span>{config.frames[active].label}</span><span>{String(active+1).padStart(2,"0")} / {String(config.frames.length).padStart(2,"0")}</span></div></div></section>;
}

export function ScoutExplodedAssembly({ config }: { config: ExplodedViewConfig }) { return <><DesktopExplodedAssembly config={config}/><MobileAssemblyFrames config={config}/></>; }
