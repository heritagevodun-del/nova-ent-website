"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import {
  Database,
  Layout,
  Server,
  Globe,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Box,
} from "lucide-react";

// Chargement de la police Pro "Inter"
const inter = Inter({ subsets: ["latin"] });

// --- Composants ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-black/50 backdrop-blur-xl border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            NOVA<span className="text-blue-500">ENT</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Expertise", "Solutions", "Héritage Vodun", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            )
          )}
          <button className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Démarrer
          </button>
        </div>
      </div>
    </nav>
  );
};

// Composant BentoCard optimisé
const BentoCard = ({
  title,
  desc,
  icon: Icon,
  className = "",
}: {
  title: string;
  desc: string;
  icon: React.ElementType;
  className?: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={`glass-panel p-8 rounded-3xl flex flex-col justify-between group relative overflow-hidden ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10">
      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-blue-400" size={24} />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
  </motion.div>
);

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 ${inter.className}`}
    >
      <Navbar />

      {/* HERO SECTION - STYLE PREMIUM */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-4">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 backdrop-blur-sm"
          >
            <Sparkles size={12} />
            <span>Architecture Logicielle & Design Avancé</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500"
          >
            Forged in Code. <br />
            Rooted in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Future.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Nous ne créons pas seulement des sites web. Nous bâtissons des
            infrastructures numériques complexes et des expériences culturelles
            immersives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
              Nos Solutions <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
              Découvrir le Studio
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
        </div>
      </section>

      {/* SECTION BENTO GRID */}
      <section id="expertise" className="py-32 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            L&apos;Arsenal Technique
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Une suite complète de compétences pour transformer n&apos;importe
            quel défi en solution logicielle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* Grande carte gauche */}
          <BentoCard
            className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-blue-900/10 to-transparent"
            title="Architecture Logicielle"
            desc="Conception de systèmes distribués, micro-services et infrastructures cloud-native robustes."
            icon={Server}
          />

          {/* Carte haut milieu */}
          <BentoCard
            className="md:col-span-1"
            title="Développement Web"
            desc="Next.js 15, React, TypeScript. Performance absolue."
            icon={Globe}
          />

          {/* Carte haut droite */}
          <BentoCard
            className="md:col-span-1"
            title="Design UI/UX"
            desc="Interfaces fluides centrées sur l'humain."
            icon={Layout}
          />

          {/* Large carte bas */}
          <BentoCard
            className="md:col-span-2"
            title="Engineering & Data"
            desc="Optimisation de bases de données complexes et algorithmes performants."
            icon={Database}
          />
        </div>
      </section>

      {/* SECTION HERITAGE VODUN */}
      <section id="heritage-vodun" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a1200] to-black" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center rounded-3xl bg-white/5 border border-yellow-500/20 p-8 md:p-16 backdrop-blur-md overflow-hidden">
            {/* Background Texture for Card */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

            <div className="w-full md:w-1/2 space-y-8">
              <div className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">
                Division Culturelle
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-white">
                L&apos;Esprit{" "}
                <span className="text-yellow-500 italic">Vodun</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Nova ENT ne se contente pas du code. Nous préservons
                l&apos;histoire. À travers notre filiale{" "}
                <strong>Héritage Vodun</strong>, nous utilisons la technologie
                de pointe pour archiver, diffuser et magnifier le patrimoine
                culturel immatériel.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 text-yellow-100/70">
                  <ShieldCheck size={20} className="text-yellow-500" />{" "}
                  Numérisation 3D
                </div>
                <div className="flex items-center gap-3 text-yellow-100/70">
                  <ShieldCheck size={20} className="text-yellow-500" />{" "}
                  Événementiel
                </div>
              </div>

              <button className="mt-8 px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black font-bold rounded-lg shadow-lg shadow-yellow-900/40 hover:scale-105 transition-transform">
                Explorer l&apos;Héritage
              </button>
            </div>

            <div className="w-full md:w-1/2 relative h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-2xl blur-3xl"></div>
              <div className="relative z-10 bg-black/80 p-8 rounded-2xl border border-yellow-500/30 text-center max-w-sm">
                <Box className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                <h3 className="text-2xl font-serif text-white mb-2">
                  Musée Virtuel
                </h3>
                <p className="text-gray-400 text-sm">
                  Prochainement : Une expérience immersive en réalité virtuelle
                  au cœur des temples sacrés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER PREMIUM */}
      <footer className="border-t border-white/10 bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter text-white">
              NOVA<span className="text-blue-600">ENT</span>.
            </h2>
            <p className="text-gray-500 max-w-sm">
              Définir les standards de l&apos;ingénierie numérique en Afrique et
              dans le monde.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Développement
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Design System
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Cloud Architecture
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Société</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-white transition-colors cursor-pointer">
                À propos
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Carrières
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
