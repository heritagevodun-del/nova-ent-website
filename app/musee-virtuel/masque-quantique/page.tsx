"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// CORRECTION 1 : Suppression de 'Check' qui était inutile
import { ArrowLeft, Box, Share2, Info, Cpu } from "lucide-react";
import { Inter, Cinzel } from "next/font/google";
import SceneMasque from "./SceneMasque";

// Polices
const inter = Inter({ subsets: ["latin"] });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

export default function MasqueQuantiquePage() {
  // FONCTION 1 : GESTION DU CLIC "DEMANDER LE SCAN" (WhatsApp)
  const handleScanRequest = () => {
    const message =
      "Bonjour NOVA ENT, je viens de voir le Masque Quantique. Je suis intéressé par vos services de numérisation 3D pour un projet culturel.";
    const whatsappUrl = `https://wa.me/22969783365?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // FONCTION 2 : GESTION DU CLIC "PARTAGER"
  const handleShare = async () => {
    const shareData = {
      title: "Le Masque Quantique - NOVA ENT",
      text: "Découvre cet artefact numérique incroyable fusionnant tradition et futur !",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // CORRECTION 2 : Suppression de la variable 'err' inutilisée dans le catch
        console.log("Partage annulé");
      }
    } else {
      // Sur PC (Fallback) : Copie le lien
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papier ! 📋");
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#020617] text-white selection:bg-purple-500/30 ${inter.className}`}
    >
      {/* Navbar simplifiée */}
      <nav className="fixed w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-[#020617] to-transparent">
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
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md">
          <Box size={18} className="text-purple-400" />
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
          {/* Effet de lueur arrière */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />

          {/* La Scène 3D */}
          <div className="w-full h-full border border-purple-500/20 rounded-3xl p-1 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm">
            <SceneMasque />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-widest uppercase mb-4">
              <Cpu size={12} /> Artefact #002
            </div>
            <h1
              className={`text-4xl md:text-6xl font-bold leading-tight mb-2 ${cinzel.className}`}
            >
              Le Gardien <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Quantique.
              </span>
            </h1>
            {/* CORRECTION 3 : Utilisation de &quot; pour les guillemets */}
            <p className="text-slate-400 italic">
              &quot;Quand la tradition Gélèdé rencontre la Blockchain.&quot;
            </p>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed text-lg border-l-2 border-purple-500/20 pl-6">
            <p>
              Ce masque n&apos;est pas fait de bois, mais de données pures. Il
              représente la numérisation d&apos;un masque Gélèdé sacré, utilisé
              traditionnellement pour honorer les mères et maintenir
              l&apos;harmonie sociale.
            </p>
            <p>
              Dans le Métavers NOVA, il agit comme un{" "}
              <strong>Gardien de la Mémoire</strong>. Sa structure en nœud
              infini symbolise la transmission éternelle du savoir Vodun à
              travers les réseaux décentralisés.
            </p>
          </div>

          {/* Stats Tech */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <h4 className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                Origine
              </h4>
              <p className="font-bold text-white">Kétou, Bénin</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <h4 className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                Polygones
              </h4>
              <p className="font-bold text-purple-400">12.4M (Optimisé)</p>
            </div>
          </div>

          {/* Actions Fonctionnelles */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={handleScanRequest}
              className="flex-1 py-4 bg-white text-black font-bold rounded-xl hover:bg-purple-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-[1.02] active:scale-95"
            >
              <Info size={18} /> Demander le scan
            </button>

            {/* CORRECTION 4 : Ajout de title="Partager" pour satisfaire le linter strict */}
            <button
              onClick={handleShare}
              aria-label="Partager"
              title="Partager"
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
