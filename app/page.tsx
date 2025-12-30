"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Server,
  Palette,
  Globe,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Terminal,
} from "lucide-react";

// --- Composants UI ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Expertise IT", href: "#expertise-it" },
    { name: "Héritage Vodun", href: "#heritage-vodun" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              NOVA<span className="text-white">ENT</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-blue-400 hover:text-white transition-all text-sm">
                Démarrer un projet
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// CORRECTION 1 : Remplacement de "any" par "React.ElementType" pour satisfaire TypeScript
const ServiceCard = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-colors group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-blue-500/10" />
    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
      <Icon className="text-blue-400 group-hover:text-blue-300" size={24} />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

// --- Page Principale ---

export default function Home() {
  // CORRECTION 2 : Suppression des variables inutilisées (yBg) pour nettoyer le code

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-medium text-blue-200 uppercase tracking-wider">
                Disponible pour nouveaux projets
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="block text-white">Digital Architects.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
                Cultural Guardians.
              </span>
            </h1>

            {/* CORRECTION 3 : Remplacement des apostrophes (') par &apos; */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Nova ENT fusionne l&apos;excellence de l&apos;ingénierie
              logicielle et la profondeur de l&apos;héritage culturel. Nous
              construisons des écosystèmes numériques puissants.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20 group">
                Nos Services IT{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 rounded-full font-semibold transition-all flex items-center gap-2">
                <Terminal size={18} className="text-gray-400" />
                Découvrir Héritage Vodun
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH SERVICES SECTION */}
      <section id="expertise-it" className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ingénierie & Créativité
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Une maîtrise complète de la chaîne de valeur numérique, du backend
              robuste au frontend pixel-perfect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={Globe}
              title="Développement Web"
              desc="Sites vitrines, e-commerce et applications web progressives (PWA) utilisant Next.js 15."
            />
            <ServiceCard
              icon={Code2}
              title="Édition Logiciel"
              desc="Solutions SAAS sur mesure, architectures scalables et API RESTful performantes."
            />
            <ServiceCard
              icon={Database}
              title="Data Engineering"
              desc="Administration BDD, sécurisation des données et infrastructure Cloud (AWS/Azure)."
            />
            <ServiceCard
              icon={Server}
              title="Architecture SI"
              desc="Audit technique, refonte de systèmes hérités et conception de micro-services."
            />
            <ServiceCard
              icon={Layout}
              title="UI/UX Design"
              desc="Interfaces centrées utilisateur, maquettage Figma et prototypage haute fidélité."
            />
            <ServiceCard
              icon={Palette}
              title="Branding & Graphisme"
              desc="Création d'identité visuelle forte pour marquer les esprits durablement."
            />
          </div>
        </div>
      </section>

      {/* HERITAGE VODUN SECTION */}
      <section id="heritage-vodun" className="py-32 relative overflow-hidden">
        {/* Background Theme: Gold/Earth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a1200] to-black z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="inline-block px-3 py-1 mb-6 border border-yellow-600/30 rounded text-yellow-500 text-xs font-bold tracking-widest uppercase bg-yellow-900/10">
              Département Culturel
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
              Héritage <span className="text-yellow-500 italic">Vodun</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed border-l-2 border-yellow-500/30 pl-6">
              Au-delà de la technologie, Nova ENT s&apos;engage pour la
              valorisation du patrimoine. Sous l&apos;égérie{" "}
              <strong>HÉRITAGE VODUN</strong>, nous digitalisons la tradition
              pour la rendre éternelle.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Promotion d'événements culturels internationaux",
                "Digitalisation d'archives historiques & Musées virtuels",
                "Expériences immersives (VR/AR) & E-Tourisme",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-yellow-100/80"
                >
                  <CheckCircle2
                    size={20}
                    className="text-yellow-500 flex-shrink-0 mt-1"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(202,138,4,0.3)]">
              Explorer le projet culturel
            </button>
          </div>

          <div className="w-full md:w-1/2 relative min-h-[500px] bg-yellow-900/5 rounded-2xl border border-yellow-600/20 overflow-hidden flex items-center justify-center group">
            {/* Abstract Visual Representation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/40 to-black mix-blend-overlay"></div>
            <div className="relative z-10 p-10 bg-black/40 backdrop-blur-md border border-yellow-500/30 rounded-xl text-center max-w-xs transform group-hover:scale-105 transition-transform duration-500">
              <Globe className="w-16 h-16 text-yellow-500 mx-auto mb-4 opacity-80" />
              {/* CORRECTION 4 : Remplacement des guillemets doubles par &quot; */}
              <p className="text-yellow-100 font-serif text-2xl italic">
                &quot;La technologie au service de la tradition&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6 block">
              NOVA<span className="text-white">ENT</span>
            </span>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Votre partenaire expert pour la transformation digitale et la
              valorisation culturelle. Aytré, Nouvelle-Aquitaine &
              International.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Expertise</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Dév Web & Mobile
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Data Engineering
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                UI/UX Design
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Consulting SEO
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Légal</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Mentions Légales
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Confidentialité
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                CGV
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Nova ENT. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Systems Operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
