"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Box, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function MuseeVirtuel() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Barre de navigation du musée */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-md border-b border-white/5">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft size={20} /> Retour à l&apos;accueil
        </Link>
        <div className="font-serif tracking-widest text-xl">
          NOVA <span className="text-cyan-400">MÉTA</span>
        </div>
        <div className="hidden md:block text-xs text-gray-500 uppercase tracking-tighter font-mono">
          Statut : Connexion au sanctuaire établie
        </div>
      </nav>

      {/* Zone d'exposition 3D (Simulée avec Framer Motion pour la fluidité) */}
      <main className="relative h-screen flex items-center justify-center">
        {/* Fond d'ambiance */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-[#020617] to-[#020617] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto px-6 gap-12 items-center relative z-10">
          {/* Texte de présentation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} /> Pièce d&apos;Exception #01
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              Le Gardien des <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                Origines
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Cette relique numérisée représente la fusion entre la protection
              ancestrale et la pérennité numérique. Explorez chaque détail en
              haute définition dans notre environnement WebGL.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                Lancer l&apos;Expérience
              </button>
              <button className="px-8 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-all flex items-center gap-2 text-sm font-medium">
                <ShieldCheck size={18} className="text-cyan-400" /> Certifié
                Blockchain
              </button>
            </div>
          </motion.div>

          {/* Élément 3D Interactif (Placeholder animé) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center h-[400px]"
          >
            {/* Halo lumineux derrière l'objet */}
            <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-cyan-500/20 to-blue-900/10 rounded-full blur-[80px] absolute animate-pulse-slow" />

            {/* L'Objet en lévitation */}
            <motion.div
              animate={{
                rotateY: 360,
                y: [0, -20, 0],
              }}
              transition={{
                rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="relative z-10"
            >
              <Box
                size={280}
                className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                strokeWidth={0.5}
              />
            </motion.div>

            {/* Cercles orbitaux */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[350px] h-[350px] border border-cyan-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="w-[450px] h-[450px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer Musée */}
      <footer className="fixed bottom-0 w-full p-6 text-center z-50 pointer-events-none">
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-mono">
          © {new Date().getFullYear()} NOVA ENT. Network v2.4.0 / Latency: 12ms
        </p>
      </footer>
    </div>
  );
}
