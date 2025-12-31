"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";

// Import Dynamique : '../Scene3D' signifie "Remonte d'un dossier et trouve Scene3D"
const Scene3D = dynamic(() => import("../Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="text-cyan-500 animate-pulse text-xs flex items-center justify-center h-full">
      CHARGEMENT DU NOYAU...
    </div>
  ),
});

export default function ArtefactOne() {
  return (
    <div className="h-screen w-screen bg-[#020617] relative overflow-hidden">
      {/* Bouton retour flottant */}
      <Link
        href="/musee-virtuel"
        className="absolute top-8 left-8 z-50 flex items-center gap-2 text-white/70 hover:text-cyan-400 transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
      >
        <ArrowLeft size={18} /> Retour à la Galerie
      </Link>

      {/* Titre discret */}
      <div className="absolute bottom-8 left-8 z-50 pointer-events-none">
        <h1 className="text-4xl font-serif text-white">Artefact #01</h1>
        <p className="text-cyan-400 text-sm font-mono tracking-widest">
          ARCHITECTURE DES DONNÉES
        </p>
      </div>

      {/* La 3D prend tout l'écran */}
      <div className="absolute inset-0 z-10">
        <Scene3D />
      </div>
    </div>
  );
}
