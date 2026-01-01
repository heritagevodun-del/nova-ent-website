"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment } from "@react-three/drei";

export default function Scene3D() {
  return (
    <div className="h-full w-full">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00F7FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#FF00AA" />

        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <group>
            {/* Cœur */}
            <mesh>
              <icosahedronGeometry args={[0.8, 0]} />
              <meshStandardMaterial
                color="#00F7FF"
                emissive="#00F7FF"
                emissiveIntensity={2}
              />
            </mesh>

            {/* Cage Wireframe */}
            <mesh scale={1.5}>
              <icosahedronGeometry args={[1, 2]} />
              <meshStandardMaterial
                color="#00F7FF"
                wireframe={true}
                transparent
                opacity={0.5}
              />
            </mesh>
          </group>
        </Float>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
