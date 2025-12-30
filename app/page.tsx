"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import {
  Database,
  Layout,
  Server,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Box,
  Cpu,
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
              Ingénierie Haute Performance
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
            Nous ne construisons pas des sites. Nous forgeons des écosystèmes
            numériques critiques capables de redéfinir votre industrie. La
            puissance sans compromis.
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
                Explorer les Capacités{" "}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold text-lg rounded-lg hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm">
              Le Studio
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator Cyberpunk */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-cyan-500 font-bold uppercase tracking-[0.3em] animate-pulse">
            Scroll
          </span>
          <div className="w-[1px] h-24 bg-gradient-to-b from-cyan-500 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scrolldown blur-[1px]"></div>
          </div>
        </div>
      </section>

      {/* SECTION EXPERTISE - REWRITE PREMIUM */}
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
              Une maîtrise absolue des couches invisibles qui propulsent les
              leaders du marché. Pas de stack technique à étaler, juste des
              résultats bruts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-8 h-auto md:h-[700px]">
            {/* Grande carte gauche - Infrastructure */}
            <BentoCard
              className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-[#1a1a2e] to-transparent border-blue-900/30"
              title="Infrastructure Critique"
              desc="Conception de systèmes névralgiques capables d'encaisser une charge planétaire sans faillir. Résilience militaire."
              icon={Server}
            />

            {/* Carte haut milieu - Performance */}
            <BentoCard
              className="md:col-span-1"
              title="Vélocité Pure"
              desc="Des interfaces instantanées. Nous supprimons la friction entre l'intention de l'utilisateur et l'action."
              icon={Sparkles}
            />

            {/* Carte haut droite - Design */}
            <BentoCard
              className="md:col-span-1"
              title="Expérience Immersive"
              desc="Quand l'esthétique radicale rencontre la fonction pure. Un design qui marque les esprits."
              icon={Layout}
            />

            {/* Large carte bas - Data */}
            <BentoCard
              className="md:col-span-2 bg-gradient-to-tr from-[#111] to-[#1a1a2e]"
              title="Intelligence des Données"
              desc="Transformer le chaos informationnel en avantage stratégique. Algorithmes prédictifs et traitement massif en temps réel."
              icon={Database}
            />
          </div>
        </div>
      </section>

      {/* SECTION HERITAGE VODUN - MYSTIQUE ET PUISSANTE */}
      <section id="heritage-vodun" className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-[#1a1200] to-[#0a0a0b]" />
        {/* Lumière dorée mystique */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center rounded-[3rem] bg-white/5 border border-yellow-500/20 p-10 md:p-20 backdrop-blur-xl shadow-[0_0_50px_rgba(255,200,0,0.1)] overflow-hidden group">
            {/* Background Texture subtle */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

            <div className="w-full md:w-1/2 space-y-10 relative z-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-bold tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(255,200,0,0.2)]">
                <ShieldCheck size={16} /> Division Culturelle
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-none">
                L&apos;Esprit{" "}
                <span className="text-yellow-500 italic">Vodun.</span>
                <br />
                Magnifié.
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed font-medium">
                Notre technologie ne sert pas qu&apos;à l&apos;industrie. Elle
                préserve l&apos;âme. Via <strong>Héritage Vodun</strong>, nous
                déployons nos capacités pour archiver le patrimoine immatériel
                dans l&apos;éternité numérique.
              </p>

              <button className="mt-8 px-10 py-5 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black font-extrabold text-lg rounded-lg shadow-[0_0_30px_rgba(255,200,0,0.4)] hover:scale-105 transition-transform hover:shadow-[0_0_50px_rgba(255,200,0,0.6)]">
                Pénétrer le Sanctuaire Digital
              </button>
            </div>

            <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center perspective-1000">
              {/* Effet 3D Holographique */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-3xl blur-3xl animate-pulse-slow"></div>
              <div className="relative z-10 bg-black/60 p-12 rounded-3xl border border-yellow-500/40 text-center max-w-md transform transition-transform duration-700 group-hover:rotate-y-6 group-hover:scale-105 backdrop-blur-md shadow-2xl">
                <Box className="w-20 h-20 text-yellow-400 mx-auto mb-8 animate-float" />
                <h3 className="text-3xl font-serif text-white mb-4">
                  Le Musée Virtuel
                </h3>
                <p className="text-yellow-100/80 text-lg">
                  Une immersion en réalité étendue au cœur des temples sacrés,
                  défiant l&apos;espace et le temps.
                </p>
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
              Définir les nouveaux standards de l&apos;ingénierie numérique.
              Puissance, précision, pérennité.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider">
              Capacités
            </h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Systèmes Critiques
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Interfaces Avancées
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Architecture Cloud
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
                Ouidah, Bénin
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-gray-600 text-sm font-medium">
          <p>
            © {new Date().getFullYear()} NOVA ENT. Tous droits réservés.
            Excellence en ingénierie.
          </p>
          <p>Fabriqué par N.E pour vous</p>
        </div>
      </footer>
    </div>
  );
}
