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
  Infinity as InfinityIcon,
} from "lucide-react";
import { Inter, Cinzel } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// L'ASTUCE PERFORMANCE : Chargement différé de la 3D (Zéro blocage)
const SceneDan = dynamic(() => import("./SceneDan"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03010a] rounded-3xl border border-white/10">
      <InfinityIcon size={32} className="text-cyan-500 animate-spin mb-4" />
      <span className="text-cyan-400 font-mono text-xs tracking-widest animate-pulse">
        CALIBRAGE QUANTIQUE...
      </span>
    </div>
  ),
});

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
            {/* C'est ici que la magie du loading opère */}
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
                L&apos;Étreinte Cosmique.
              </span>
            </h1>
            <p className="text-slate-400 italic">
              &quot;Le gardien du mouvement, là où l&apos;énergie ne meurt
              jamais, mais se transforme.&quot;
            </p>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base border-l-2 border-white/20 pl-6">
            <p>
              Dans la pensée endogène, l&apos;univers n&apos;est pas figé. Pour
              que la Terre demeure stable, il fallait une force d&apos;amour et
              de cohésion : <strong>Dan Ayido Hwédo</strong>. Ce n&apos;est pas
              un simple reptile, mais l&apos;énergie sacrée qui s&apos;enroule
              autour du monde, maintenant chaque océan et chaque montagne à sa
              juste place.
            </p>
            <p>
              Cet artefact numérique, construit sur un Ouroboros infini, simule{" "}
              <strong>la danse des fluides</strong>. Comme Dan qui fait monter
              la sève des arbres et battre le sang dans nos veines, cette
              matrice illustre la loi de la prospérité Vodun : la véritable
              richesse, comme l&apos;eau, doit circuler et être partagée pour ne
              jamais se dessécher.
            </p>
            <p>
              L&apos;arc-en-ciel qui l&apos;habite n&apos;est pas un hasard
              optique, mais un pont d&apos;harmonie jeté entre le royaume de
              l&apos;invisible et notre réalité. Un rappel apaisant que tout est
              un éternel recommencement.
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
