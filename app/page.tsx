"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import {
  Database,
  Server,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Box,
  Cpu,
  Code,
  Landmark,
  Palette,
} from "lucide-react";

// Police Inter configurée pour une lisibilité maximale
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

// --- NOUVEAU LOGO N.E ---
const LogoNE = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4H36V36H4V4Z"
      stroke="url(#paint0_linear)"
      strokeWidth="2"
      strokeOpacity="0.5"
    />
    <path
      d="M12 28V12L22 28V12"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M28 28V12H34M28 20H33M28 28H34"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="4"
        y1="4"
        x2="36"
        y2="36"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00F7FF" />
        <stop offset="1" stopColor="#0066FF" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

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
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled
          ? "py-4 bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          {/* Intégration du nouveau Logo N.E */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full group-hover:blur-xl transition-all duration-500 opacity-50"></div>
            <LogoNE />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white">
            NOVA
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              ENT
            </span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          {["Expertise", "Héritage Vodun", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
          <button className="relative group px-6 py-3 font-bold text-sm text-black overflow-hidden rounded-lg">
            <span className="absolute inset-0 w-full h-full transition duration-300 bg-cyan-400 opacity-100 group-hover:opacity-90"></span>
            <span className="absolute bottom-0 left-0 w-full h-1 transition duration-300 bg-white mix-blend-screen group-hover:h-full"></span>
            <span className="relative z-10 flex items-center gap-2">
              Initialiser <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

// BentoCard Premium V2
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
    whileHover={{ y: -5, scale: 1.01 }}
    className={`glass-panel p-8 rounded-3xl flex flex-col justify-between group relative overflow-hidden transition-all duration-500 ${className}`}
  >
    {/* Lumière dynamique au survol */}
    <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />

    <div className="relative z-10">
      <div className="w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:border-cyan-500/30 transition-colors duration-300 shadow-[0_0_15px_rgba(0,247,255,0.1)]">
        <Icon
          className="text-cyan-300 group-hover:text-cyan-200 transition-colors"
          size={26}
        />
      </div>
      <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-gray-300 font-medium leading-relaxed text-base">
        {desc}
      </p>
    </div>
  </motion.div>
);

export default function Home() {
  return (
    <div
      className={`min-h-screen selection:bg-cyan-500/30 selection:text-cyan-50 ${inter.className}`}
    >
      <Navbar />

      {/* HERO SECTION - PUISSANCE MAXIMALE */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-4">
        {/* Glow Effects Intenses */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-800/20 rounded-[100%] blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-800/10 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-cyan-300 backdrop-blur-md shadow-[0_0_20px_rgba(0,247,255,0.1)]"
          >
            <Cpu size={16} className="animate-pulse" />
            <span className="uppercase tracking-wider">
              Ingénierie & Culture
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-none text-white"
          >
            L&apos;Architecture de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-500 pb-4">
              l&apos;Invisible.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Édition logicielle, Systèmes complexes et Héritage culturel. Nous
            forgeons les écosystèmes numériques qui redéfinissent votre
            industrie.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <button className="group relative px-8 py-4 bg-cyan-400 text-black font-extrabold text-lg rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,247,255,0.3)] hover:shadow-[0_0_50px_rgba(0,247,255,0.5)] transition-shadow">
              <div className="absolute inset-0 w-0 bg-white transition-all duration-[400ms] ease-out group-hover:w-full"></div>
              <span className="relative z-10 flex items-center gap-2">
                Nos Services{" "}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold text-lg rounded-lg hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm">
              Le Studio
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-cyan-500 font-bold uppercase tracking-[0.3em] animate-pulse">
            Scroll
          </span>
          <div className="w-[1px] h-24 bg-gradient-to-b from-cyan-500 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scrolldown blur-[1px]"></div>
          </div>
        </div>
      </section>

      {/* SECTION EXPERTISE - MAPPÉE SUR TES VRAIS SERVICES */}
      <section id="expertise" className="py-40 px-4 relative overflow-hidden">
        {/* Background noise light */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24 md:w-2/3">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
              Domination <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Par la Technologie.
              </span>
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed font-medium">
              Une suite complète de compétences pour transformer n&apos;importe
              quel défi en solution logicielle souveraine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-8 h-auto">
            {/* 1. ARCHITECTURE & EDITION LOGICIELLE */}
            <BentoCard
              className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-[#1a1a2e] to-transparent border-blue-900/30"
              title="Architecture & Édition Logicielle"
              desc="Conception de systèmes névralgiques et création de logiciels sur-mesure. Nous bâtissons les fondations de votre souveraineté numérique."
              icon={Server}
            />

            {/* 2. DÉVELOPPEMENT WEB (Vélocité) */}
            <BentoCard
              className="md:col-span-1"
              title="Développement Web & Mobile"
              desc="Des interfaces ultra-rapides. Développement de sites et d'applications qui suppriment la friction entre l'intention et l'action."
              icon={Code}
            />

            {/* 3. GRAPHISME & DESIGN */}
            <BentoCard
              className="md:col-span-1"
              title="Design & Esthétique"
              desc="Graphisme avancé et Web Design. Quand l'identité visuelle rencontre l'ergonomie pour une expérience utilisateur immersive."
              icon={Palette}
            />

            {/* 4. BASE DE DONNÉES (Admin BDD) */}
            <BentoCard
              className="md:col-span-2 bg-gradient-to-tr from-[#111] to-[#1a1a2e]"
              title="Administration de Données"
              desc="Architecture et sécurisation de bases de données. Transformer le chaos informationnel en avantage stratégique et sécurisé."
              icon={Database}
            />
          </div>
        </div>
      </section>

      {/* SECTION HERITAGE VODUN - UPGRADE MAJESTUEUX */}
      <section id="heritage-vodun" className="py-40 relative overflow-hidden">
        {/* Changement d'ambiance : Noir profond vers Or Antique */}
        <div className="absolute inset-0 bg-[#050506]" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent"></div>

        {/* Halo Doré */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase">
              Département Culturel
            </span>
            <h2 className="text-5xl md:text-8xl font-serif text-white tracking-tight">
              HÉRITAGE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-700">
                VODUN
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Carte Gauche : Le Concept */}
            <div className="p-10 rounded-[2rem] bg-gradient-to-br from-[#12100a] to-black border border-yellow-900/30 relative overflow-hidden group hover:border-yellow-600/40 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Landmark size={120} className="text-yellow-500" />
              </div>
              <h3 className="text-3xl font-serif text-white mb-6">
                Le Centre Culturel
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Plus qu&apos;un projet digital, <strong>Heritage Vodun</strong>{" "}
                est un sanctuaire. Nous offrons des prestations de services
                culturels complètes pour la valorisation, la préservation et la
                diffusion de l&apos;histoire.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-yellow-100/70">
                  <ShieldCheck size={18} className="text-yellow-600" /> Gestion
                  d&apos;événements culturels
                </li>
                <li className="flex items-center gap-3 text-yellow-100/70">
                  <ShieldCheck size={18} className="text-yellow-600" />{" "}
                  Médiation historique
                </li>
              </ul>
              <button className="w-full py-4 bg-white/5 border border-yellow-500/20 text-yellow-500 font-bold rounded-xl hover:bg-yellow-500 hover:text-black transition-all">
                Découvrir le Centre
              </button>
            </div>

            {/* Carte Droite : L'Innovation */}
            <div className="p-10 rounded-[2rem] bg-gradient-to-bl from-[#0f1014] to-black border border-cyan-900/30 relative overflow-hidden group">
              {/* Fusion des couleurs : Or et Cyan */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-cyan-500/5 opacity-50"></div>

              <div className="relative z-10 text-right">
                <div className="inline-flex items-center justify-end gap-2 text-cyan-400 mb-4 font-mono text-sm">
                  <Sparkles size={14} /> INNOVATION HYBRIDE
                </div>
                <h3 className="text-3xl font-serif text-white mb-6">
                  Le Sanctuaire Numérique
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                  Quand l&apos;ingénierie de Nova ENT rencontre le sacré. Nous
                  numérisons les artefacts et créons des musées virtuels pour
                  que la mémoire traverse le temps.
                </p>

                <div className="relative h-40 bg-black/50 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                  <Box className="w-16 h-16 text-white/20 animate-float" />
                  <span className="absolute bottom-4 text-xs text-gray-500 uppercase tracking-widest">
                    Simulation 3D en cours...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MONOLITHIQUE */}
      <footer className="border-t border-white/5 bg-[#050506] py-24 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-cyan-900/10 rounded-[100%] blur-[120px]" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <LogoNE />
              <h2 className="text-3xl font-extrabold tracking-tighter text-white">
                NOVA<span className="text-cyan-500">ENT</span>.
              </h2>
            </div>
            <p className="text-gray-400 max-w-md text-lg font-medium leading-relaxed">
              Définir les nouveaux standards de l&apos;ingénierie numérique et
              de la préservation culturelle.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider">
              Expertise
            </h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Architecture Logicielle
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Web & Design
              </li>
              <li className="hover:text-yellow-500 transition-colors cursor-pointer">
                Héritage Vodun
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">
                Initialiser un projet
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Carrières
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Cotonou, Bénin
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-gray-600 text-sm font-medium">
          <p>© {new Date().getFullYear()} NOVA ENT. Tous droits réservés.</p>
          <p>Fabriqué par Nova ENT pour vous</p>
        </div>
      </footer>
    </div>
  );
}
