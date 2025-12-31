"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function QuantumMask() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Animation de rotation lente et hypnotique
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.8}>
      {/* Géométrie complexe : TorusKnot (Nœud torique) */}
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      {/* Matériau : Fil de fer violet brillant */}
      <meshStandardMaterial
        color="#8b5cf6" // Violet électrique
        wireframe={true}
        emissive="#4c1d95"
        emissiveIntensity={0.5}
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
}

export default function SceneMasque() {
  return (
    <div className="h-[50vh] md:h-full w-full bg-black/20 rounded-3xl overflow-hidden relative">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          color="#a78bfa"
        />
        <pointLight position={[-10, -10, -10]} color="#00F7FF" />

        {/* Effet de flottement */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <QuantumMask />
        </Float>

        {/* Particules d'ambiance (Poussière d'étoiles) */}
        <Stars
          radius={100}
          depth={50}
          count={2000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <Sparkles
          count={50}
          scale={6}
          size={4}
          speed={0.4}
          opacity={0.5}
          color="#00F7FF"
        />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      {/* Badge interactif */}
      <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-purple-300 border border-purple-500/30">
        Modèle : Gélèdé-V2.0
      </div>
    </div>
  );
}
