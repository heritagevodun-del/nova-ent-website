"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Box,
  Hexagon,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

// DONNÉES DES EXPOSITIONS
const exhibits = [
  {
    id: "01",
    title: "L'Esprit Numérique",
    subtitle: "Architecture Algorithmique",
    desc: "Une représentation visuelle de nos structures de données. Observez comment l'information circule dans une géométrie parfaite.",
    icon: Box,
    color: "cyan",
    link: "/musee-virtuel/artefact-1",
    status: "Disponible",
  },
  {
    id: "02",
    title: "Le Masque Quantique",
    subtitle: "Héritage & Futur",
    desc: "Fusion entre l'art traditionnel béninois et le calcul quantique. (Bientôt disponible : numérisation en cours).",
    icon: Hexagon,
    color: "purple",
    link: "#",
    status: "Verrouillé",
  },
  {
    id: "03",
    title: "Réseau Vodun",
    subtitle: "Connexion Globale",
    desc: "Visualisation des nœuds de communication à travers le monde. La toile invisible qui relie nos cultures.",
    icon: Layers,
    color: "emerald",
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
              className={`relative group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all overflow-hidden ${
                item.status === "Verrouillé" ? "opacity-50 grayscale" : ""
              }`}
            >
              {/* Icône de fond décorative */}
              <item.icon
                className="absolute -right-10 -top-10 text-white/5 rotate-12 transition-transform group-hover:rotate-45"
                size={200}
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-mono text-cyan-500 border border-cyan-500/30 px-2 py-1 rounded">
                      #{item.id}
                    </span>
                    {item.status === "Verrouillé" && (
                      <ShieldCheck size={16} className="text-gray-500" />
                    )}
                  </div>

                  <h3 className="text-2xl font-bold font-serif mb-2 text-white group-hover:text-cyan-400 transition-colors">
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
                    className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider hover:gap-4 transition-all"
                  >
                    Lancer l&apos;expérience <ArrowRight size={16} />
                  </Link>
                ) : (
                  <div className="text-gray-600 text-sm font-mono cursor-not-allowed">
                    {/* Correction du commentaire ici : on utilise des accolades */}
                    {`// ACCÈS RESTREINT`}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="fixed bottom-0 w-full p-6 text-center z-50 pointer-events-none">
        {/* Correction du // SYSTEM READY dans le footer */}
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-mono">
          © {new Date().getFullYear()} NOVA ENT. • SYSTEM READY
        </p>
      </footer>
    </div>
  );
}
