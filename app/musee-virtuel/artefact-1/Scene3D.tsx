"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Environment,
  Sparkles,
  MeshTransmissionMaterial,
  Torus,
} from "@react-three/drei";
import * as THREE from "three";

function ArtefactCore() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  // Animation perpétuelle des éléments
  useFrame((state, delta) => {
    if (groupRef.current && ringRef1.current && ringRef2.current) {
      groupRef.current.rotation.y += delta * 0.1;
      ringRef1.current.rotation.x -= delta * 0.3;
      ringRef1.current.rotation.y -= delta * 0.2;
      ringRef2.current.rotation.x += delta * 0.4;
      ringRef2.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Noyau de calcul interne (Énergie) */}
      <mesh>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshStandardMaterial
          color="#00F7FF"
          emissive="#00F7FF"
          emissiveIntensity={2}
          wireframe
        />
      </mesh>

      {/* 2. Coque de protection en verre quantique (Glassmorphism 3D) */}
      <mesh scale={1.2}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#020617"
        />
      </mesh>

      {/* 3. Anneaux de données orbitaux */}
      <Torus
        ref={ringRef1}
        args={[1.8, 0.01, 16, 100]}
        rotation={[Math.PI / 3, 0, 0]}
      >
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={1}
        />
      </Torus>
      <Torus
        ref={ringRef2}
        args={[2.2, 0.01, 16, 100]}
        rotation={[-Math.PI / 4, 0, 0]}
      >
        <meshStandardMaterial
          color="#00F7FF"
          emissive="#00F7FF"
          emissiveIntensity={0.5}
        />
      </Torus>

      {/* 4. Flux de données (Particules) */}
      <Sparkles
        count={150}
        scale={5}
        size={1.5}
        speed={0.4}
        opacity={0.6}
        color="#00F7FF"
      />
      <Sparkles
        count={50}
        scale={4}
        size={2}
        speed={0.2}
        opacity={0.4}
        color="#8b5cf6"
      />
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="h-full w-full">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Éclairage studio dramatique */}
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          color="#00F7FF"
        />
        <spotLight
          position={[-10, -10, -10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          color="#8b5cf6"
        />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <ArtefactCore />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5} // Empêche de regarder complètement par en dessous
          minPolarAngle={Math.PI / 3}
        />

        {/* L'environnement HDRI est crucial pour que le verre ait des reflets */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
