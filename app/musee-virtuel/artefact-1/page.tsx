"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Share2,
  Mail,
  Cpu,
  Server,
  Database,
  Network,
} from "lucide-react";
import { Inter, Cinzel } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Chargement différé de la 3D pour la performance
const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020617] rounded-3xl border border-white/10">
      <div className="w-12 h-12 border-t-2 border-cyan-500 border-solid rounded-full animate-spin mb-4"></div>
      <span className="text-cyan-400 font-mono text-xs tracking-widest animate-pulse">
        CALIBRAGE DU NOYAU...
      </span>
    </div>
  ),
});

export default function ArtefactOnePage() {
  const handleContact = () => {
    const email = "joindre.novaent@gmail.com";
    const subject = encodeURIComponent(
      "[Musée Virtuel] Projet d'Infrastructure / Omni-Noyau",
    );
    const body = encodeURIComponent(
      "Bonjour NOVA ENT,\n\nJ'ai découvert l'artefact de l'Omni-Noyau sur votre musée virtuel. Je souhaite échanger avec vous sur une architecture logicielle ou un projet SaaS.\n\nCordialement,",
    );
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
  };

  const handleShare = async () => {
    const shareData = {
      title: "L'Omni-Noyau - NOVA ENT",
      text: "Découvre l'artefact de l'Omni-Noyau, la vision architecturale des infrastructures souveraines par NOVA ENT.",
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
      className={`min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 ${inter.className}`}
    >
      {/* NAVIGATION HAUT */}
      <nav className="fixed w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-[#020617] via-[#020617]/80 to-transparent">
        <Link
          href="/musee-virtuel"
          className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-bold tracking-widest uppercase">
            Retour au Musée
          </span>
        </Link>
        <div className="w-10 h-10 rounded-full border border-cyan-500/20 flex items-center justify-center bg-cyan-500/5 backdrop-blur-md shadow-[0_0_15px_rgba(0,247,255,0.1)]">
          <Server size={18} className="text-cyan-400" />
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
          {/* Halos lumineux en arrière-plan */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-cyan-600/10 to-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="w-full h-full p-1 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm rounded-3xl relative overflow-hidden group">
            {/* Scanners décoratifs */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/50 shadow-[0_0_10px_#00F7FF] -translate-y-full group-hover:translate-y-[700px] transition-transform duration-[3s] ease-linear pointer-events-none z-20"></div>

            <Scene3D />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
              <Cpu size={12} /> Modèle d&apos;Infrastructure #001
            </div>
            <h1
              className={`text-4xl md:text-6xl font-bold leading-tight mb-2 ${cinzel.className}`}
            >
              L&apos;OMNI-NOYAU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                L&apos;Architecture Pure.
              </span>
            </h1>
            <p className="text-slate-400 font-mono text-sm tracking-wide mt-4">
              &quot;L&apos;ordre naît du chaos ; la donnée devient fondation.&quot;
            </p>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base border-l-2 border-cyan-500/30 pl-6">
            <p>
              Dans l&apos;univers numérique, la stabilité n&apos;est pas une option, c&apos;est
              un prérequis.
              <strong> L&apos;Omni-Noyau</strong> est la représentation conceptuelle
              des infrastructures souveraines conçues par NOVA ENT.
            </p>
            <p>
              Son cœur battant traite l&apos;information en temps réel, sans
              friction. La coque en verre quantique qui l&apos;entoure symbolise la
              sécurité et la transparence de nos systèmes SaaS. Rien ne filtre
              sans autorisation, mais tout circule avec une fluidité absolue.
            </p>
            <p>
              Cet artefact rappelle qu&apos;une application n&apos;est jamais qu&apos;une
              interface ; sa véritable force réside dans la robustesse des
              fondations invisibles qui la soutiennent.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
              <h4 className="text-[10px] text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Database size={12} /> Base de Données
              </h4>
              <p className="font-bold text-white font-mono text-sm">
                PostgreSQL / Vector
              </p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
              <h4 className="text-[10px] text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Network size={12} /> Scalabilité
              </h4>
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono text-sm">
                Horizontale Infinie
              </p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={handleContact}
              className="flex-1 py-4 bg-white text-black font-extrabold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,247,255,0.4)] hover:scale-[1.02] active:scale-95"
            >
              <Mail size={18} /> Discuter d&apos;une infrastructure
            </button>
            <button
              onClick={handleShare}
              className="px-6 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-all border border-white/10 hover:border-cyan-500/50 hover:scale-[1.02] active:scale-95 group"
            >
              <Share2
                size={18}
                className="group-hover:text-cyan-400 transition-colors"
              />
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
