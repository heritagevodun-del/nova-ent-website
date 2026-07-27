"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Box,
  Layers,
  ArrowRight,
  ShieldCheck,
  Infinity as InfinityIcon,
} from "lucide-react";
import Link from "next/link";

// DONNÉES DES EXPOSITIONS (Mises à jour avec DAN et optimisation des couleurs)
const exhibits = [
  {
    id: "01",
    title: "L'Esprit Numérique",
    subtitle: "Architecture Algorithmique",
    desc: "Visualisation interactive de nos structures de données. Observez l'information circuler au cœur d'une géométrie parfaite.",
    icon: Box,
    theme: {
      text: "text-blue-400",
      border: "group-hover:border-blue-500/50",
      glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    },
    link: "/musee-virtuel/artefact-1",
    status: "Disponible",
  },
  {
    id: "02",
    title: "DAN : La Matrice",
    subtitle: "Mouvement Perpétuel",
    desc: "L'Ouroboros numérique. Une représentation quantique du serpent cosmique Vodun symbolisant la fluidité éternelle des réseaux.",
    icon: InfinityIcon,
    theme: {
      text: "text-cyan-400",
      border: "group-hover:border-cyan-500/50",
      glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    },
    link: "/musee-virtuel/dan-quantique", // Pense à renommer ton dossier /masque-quantique en /dan-quantique
    status: "Disponible",
  },
  {
    id: "03",
    title: "L'Oracle Fa",
    subtitle: "Big Data & Divination",
    desc: "Cartographie des nœuds de communication globaux. La toile invisible où la géomancie traditionnelle rencontre l'analyse de données.",
    icon: Layers,
    theme: {
      text: "text-emerald-400",
      border: "group-hover:border-emerald-500/50",
      glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    },
    link: "#",
    status: "Verrouillé",
  },
];

export default function MuseeGallery() {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-cyan-500/30">
      {/* HEADER */}
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
          Gallery Access: Authorized
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* TITRE */}
        <div className="text-center mb-20 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white"
          >
            Archives{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Immersives
            </span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Bienvenue dans le sanctuaire numérique de NOVA ENT. Sélectionnez un
            artefact pour lancer la simulation 3D correspondante.
          </p>
        </div>

        {/* GRILLE DES ARTEFACTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibits.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden ${
                item.theme.border
              } ${item.theme.glow} ${
                item.status === "Verrouillé" ? "opacity-50 grayscale" : ""
              }`}
            >
              {/* Icône de fond décorative */}
              <item.icon
                className={`absolute -right-10 -top-10 text-white/5 rotate-12 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110`}
                size={200}
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span
                      className={`text-xs font-mono border px-2 py-1 rounded transition-colors border-white/20 text-gray-400 group-hover:border-current group-hover:${item.theme.text}`}
                    >
                      #{item.id}
                    </span>
                    {item.status === "Verrouillé" && (
                      <ShieldCheck size={16} className="text-gray-500" />
                    )}
                  </div>

                  <h3
                    className={`text-2xl font-bold font-serif mb-2 text-white transition-colors group-hover:${item.theme.text}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>

                {item.status !== "Verrouillé" ? (
                  <Link
                    href={item.link}
                    className={`inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider hover:gap-4 transition-all ${item.theme.text}`}
                  >
                    Lancer l&apos;expérience <ArrowRight size={16} />
                  </Link>
                ) : (
                  <div className="text-gray-600 text-sm font-mono cursor-not-allowed">
                    {`// ACCÈS RESTREINT`}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="w-full p-6 text-center mt-auto relative z-10">
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-mono">
          © {new Date().getFullYear()} NOVA ENT. • SYSTEM READY
        </p>
      </footer>
    </div>
  );
}
