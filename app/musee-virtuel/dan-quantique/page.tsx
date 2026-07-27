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
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Share2,
  Mail,
  Cpu,
  Infinity as InfinityIcon,
} from "lucide-react";
import { Inter, Cinzel } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// --- L'ARTEFACT : DAN (LA MATRICE INFINIE ARC-EN-CIEL) ---
function DanMatrix() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  // Mouvement perpétuel (Dan ne s'arrête jamais)
  useFrame((state, delta) => {
    if (groupRef.current && ringRef.current && wireframeRef.current) {
      // Rotation cosmique lente globale
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.3;

      // L'anneau principal tourne sur lui-même comme un serpent qui rampe
      ringRef.current.rotation.x -= delta * 0.5;
      wireframeRef.current.rotation.x -= delta * 0.5;
    }
  });

  // Matériau de la cage "Matrice" autour du serpent
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
      {/* L'OUROBOROS / NŒUD DE MÖBIUS ARC-EN-CIEL */}
      <Trail
        width={3}
        color={"#ff00ff"} // Traînée magenta
        length={5}
        decay={1}
        local={false}
        stride={0}
        interval={1}
      >
        {/* Le corps fluide du serpent (Les normales génèrent l'arc-en-ciel) */}
        <mesh ref={ringRef} scale={1.5}>
          <torusKnotGeometry args={[1, 0.4, 256, 64, 2, 3]} />
          <meshNormalMaterial />
        </mesh>
      </Trail>

      {/* SURCOUCHE WIREFRAME (La cage de la Matrice) */}
      <mesh ref={wireframeRef} scale={1.51}>
        <torusKnotGeometry args={[1, 0.4, 256, 32, 2, 3]} />
        <primitive object={matrixWireframeMaterial} attach="material" />
      </mesh>

      {/* LE COEUR QUANTIQUE (Source d'énergie) */}
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

      {/* ANNEAUX D'ONDES GRAVITATIONNELLES (Spectre de l'arc-en-ciel) */}
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

// --- COMPOSANT DE LA SCÈNE 3D ---
function SceneDan() {
  return (
    <div className="h-[50vh] md:h-full w-full bg-[#03010a] rounded-3xl overflow-hidden relative border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* ÉCLAIRAGE */}
        <ambientLight intensity={0.3} />

        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <DanMatrix />
        </Float>

        {/* ENVIRONNEMENT (Le cosmos profond) */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={1}
          fade
          speed={0.5}
        />

        {/* PARTICULES D'ÉNERGIE (Nuée arc-en-ciel) */}
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

// --- LA PAGE COMPLÈTE ---
export default function DanQuantiquePage() {
  const handleContact = () => {
    const email = "joindre.novaent@gmail.com";
    const subject = encodeURIComponent(
      "[Musée Virtuel] Projet autour de l'artefact DAN",
    );
    const body = encodeURIComponent(
      "Bonjour NOVA ENT,\n\nJe suis fasciné par la représentation de DAN (La Matrice Infinie) sur votre musée virtuel. J'aimerais échanger sur un projet.\n\nCordialement,",
    );
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
  };

  const handleShare = async () => {
    const shareData = {
      title: "DAN : La Matrice Infinie - NOVA ENT",
      text: "Découvre la représentation quantique de Dan, le serpent cosmique arc-en-ciel du Vodun !",
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papier ! 📋");
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#03010a] text-white selection:bg-cyan-500/30 ${inter.className}`}
    >
      <nav className="fixed w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-[#03010a] to-transparent">
        <Link
          href="/musee-virtuel"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-bold tracking-widest uppercase">
            Retour au Musée
          </span>
        </Link>
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md">
          <InfinityIcon size={18} className="text-white" />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 pt-24 pb-12 min-h-screen flex flex-col md:flex-row items-center gap-12">
        {/* COLONNE GAUCHE : VISUEL 3D */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-[500px] md:h-[700px] relative z-10"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-red-600/10 via-purple-600/10 to-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="w-full h-full p-1 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-3xl">
            <SceneDan />
          </div>
        </motion.div>

        {/* COLONNE DROITE : CONTENU */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 space-y-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold tracking-widest uppercase mb-4">
              <Cpu size={12} /> Entité Cosmique #001
            </div>
            <h1
              className={`text-4xl md:text-6xl font-bold leading-tight mb-2 ${cinzel.className}`}
            >
              DAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500">
                L&quot;Étreinte Cosmique.
              </span>
            </h1>
            <p className="text-slate-400 italic">
              &quot;Le gardien du mouvement, là où l&quot;énergie ne meurt jamais,
              mais se transforme.&quot;
            </p>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base border-l-2 border-white/20 pl-6">
            <p>
              Dans la pensée endogène, l&quot;univers n&quot;est pas figé. Pour que la
              Terre demeure stable, il fallait une force d&quot;amour et de cohésion
              : <strong>Dan Ayido Hwédo</strong>. Ce n&quot;est pas un simple
              reptile, mais l&quot;énergie sacrée qui s&quot;enroule autour du monde,
              maintenant chaque océan et chaque montagne à sa juste place.
            </p>
            <p>
              Cet artefact numérique, construit sur un Ouroboros infini, simule{" "}
              <strong>la danse des fluides</strong>. Comme Dan qui fait monter
              la sève des arbres et battre le sang dans nos veines, cette
              matrice illustre la loi de la prospérité Vodun : la véritable
              richesse, comme l&quot;eau, doit circuler et être partagée pour ne
              jamais se dessécher.
            </p>
            <p>
              L&quot;arc-en-ciel qui l&quot;habite n&quot;est pas un hasard optique, mais un
              pont d&quot;harmonie jeté entre le royaume de l&quot;invisible et notre
              réalité. Un rappel apaisant que tout est un éternel
              recommencement.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <h4 className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                Principe Actif
              </h4>
              <p className="font-bold text-white flex items-center gap-2">
                Circulation & Partage
              </p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <h4 className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                Manifestation
              </h4>
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-green-400 to-blue-400">
                Pont Arc-en-ciel
              </p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={handleContact}
              className="flex-1 py-4 bg-white text-black font-extrabold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-95"
            >
              <Mail size={18} /> Échanger sur un projet
            </button>
            <button
              onClick={handleShare}
              className="px-6 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-all border border-white/10 hover:scale-[1.02] active:scale-95"
            >
              <Share2 size={18} />
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
