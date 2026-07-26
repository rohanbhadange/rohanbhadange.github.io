"use client";
import { ContactShadows, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import type { ModelConfig } from "@/config/portfolio";

function TurntableModel({ config }: { config: ModelConfig }) {
  const source = useGLTF(config.modelUrl);
  const group = useRef<THREE.Group>(null);
  const model = useMemo(() => {
    const clone = cloneSkeleton(source.scene);
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material instanceof THREE.MeshStandardMaterial) {
          const material = child.material.clone();
          material.envMapIntensity = 1.35;
          material.roughness = Math.max(material.roughness, .28);
          child.material = material;
        }
      }
    });
    return clone;
  }, [source.scene]);
  useFrame((_, delta) => { if (group.current) group.current.rotation.y += delta * config.rotationSpeed; });
  return <group ref={group} scale={config.scale} position={config.position}><primitive object={model} /></group>;
}

export function ModelViewer({ config }: { config: ModelConfig }) {
  const shell = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  useEffect(() => {
    if (!shell.current) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { rootMargin: "120px" });
    observer.observe(shell.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={shell} data-testid="model-canvas" className="relative h-full overflow-hidden rounded-[26px] bg-zinc-200 text-zinc-950">
    <Canvas frameloop={active ? "always" : "never"} camera={{ position: config.camera, fov: 31 }} dpr={[1, 1.35]} gl={{ alpha: false, antialias: true, powerPreference: "high-performance" }} onCreated={({ gl }) => gl.setClearColor("#e4e4e7", 1)}>
      <ambientLight intensity={1.65} />
      <directionalLight position={[-4, 6, 5]} intensity={4.8} color="#ffffff" />
      <directionalLight position={[4, 2, -4]} intensity={2.4} color="#cbd5e1" />
      <Suspense fallback={null}><TurntableModel config={config} /><ContactShadows position={[0, config.position[1] - .03, 0]} opacity={.3} scale={5} blur={2.7} far={4} color="#52525b" /></Suspense>
    </Canvas>
    <div className="pointer-events-none absolute inset-x-5 bottom-4 flex justify-between border-t border-zinc-400/70 pt-3 font-mono text-[9px] uppercase tracking-[.15em] text-zinc-600"><span>{config.caption}</span>{config.status ? <span>{config.status}</span> : null}</div>
  </div>;
}

export function preloadModel(config: ModelConfig) { useGLTF.preload(config.modelUrl); }
