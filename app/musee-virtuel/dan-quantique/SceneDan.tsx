"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Stars,
  Sparkles,
  MeshDistortMaterial,
  Trail,
} from "@react-three/drei";
import * as THREE from "three";
import { Infinity as InfinityIcon } from "lucide-react";

function DanMatrix() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current && ringRef.current && wireframeRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      ringRef.current.rotation.x -= delta * 0.5;
      wireframeRef.current.rotation.x -= delta * 0.5;
    }
  });

  const matrixWireframeMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#ffffff",
        emissive: "#ffffff",
        emissiveIntensity: 0.2,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      }),
    [],
  );

  return (
    <group ref={groupRef}>
      <Trail
        width={3}
        color={"#ff00ff"}
        length={5}
        decay={1}
        local={false}
        stride={0}
        interval={1}
      >
        <mesh ref={ringRef} scale={1.5}>
          <torusKnotGeometry args={[1, 0.4, 256, 64, 2, 3]} />
          <meshNormalMaterial />
        </mesh>
      </Trail>

      <mesh ref={wireframeRef} scale={1.51}>
        <torusKnotGeometry args={[1, 0.4, 256, 32, 2, 3]} />
        <primitive object={matrixWireframeMaterial} attach="material" />
      </mesh>

      <mesh scale={0.75}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#ff0055"
          emissive="#ff0055"
          emissiveIntensity={1}
          distort={0.6}
          speed={3}
          transparent={true}
          opacity={0.4}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} scale={2.6}>
        <ringGeometry args={[0.9, 0.92, 64]} />
        <meshBasicMaterial
          color="#00ff00"
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={3.4}>
        <ringGeometry args={[0.9, 0.915, 64]} />
        <meshBasicMaterial
          color="#0000ff"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={4.2}>
        <ringGeometry args={[0.9, 0.91, 64]} />
        <meshBasicMaterial
          color="#ff0000"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default function SceneDan() {
  return (
    <div className="h-[50vh] md:h-full w-full bg-[#03010a] rounded-3xl overflow-hidden relative border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <DanMatrix />
        </Float>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={1}
          fade
          speed={0.5}
        />
        <Sparkles
          count={100}
          scale={8}
          size={2}
          speed={1}
          opacity={0.8}
          color="#ff0000"
        />
        <Sparkles
          count={100}
          scale={8}
          size={2}
          speed={1}
          opacity={0.8}
          color="#00ff00"
        />
        <Sparkles
          count={100}
          scale={8}
          size={2}
          speed={1}
          opacity={0.8}
          color="#0000ff"
        />
        <Sparkles
          count={100}
          scale={8}
          size={2}
          speed={1}
          opacity={0.8}
          color="#ffff00"
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>

      <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
        <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
          <p className="text-[10px] text-gray-300 font-mono uppercase tracking-widest flex items-center gap-1">
            <InfinityIcon size={10} /> Signature Énergétique
          </p>
          <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 font-bold font-mono">
            SPECTRE COMPLET
          </p>
        </div>
      </div>
    </div>
  );
}
