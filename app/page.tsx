"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Inter, Cinzel } from "next/font/google";
import {
  Database,
  Server,
  ArrowRight,
  Box,
  Cpu,
  Code,
  Palette,
  MapPin,
  Mail,
  MessageCircle,
  Send,
  Menu,
  X,
  ExternalLink,
  History,
  Landmark,
} from "lucide-react";

// Polices
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

// --- CONFIGURATION ---
const CONTACT_EMAIL = "joindre.novaent@gmail.com";
const WHATSAPP_NUMBER = "22969783365";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Ouidah+Benin";

// --- LOGO N.E ---
const LogoNE = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
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

// --- COMPOSANTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#0a0a0b]/90 backdrop-blur-xl border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-3 cursor-pointer z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full opacity-50"></div>
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
          {["Expertise", "Héritage Vodun"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
              className="text-sm font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-2 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all text-sm flex items-center gap-2 group"
          >
            Initialiser{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        <div className="md:hidden z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 left-0 w-full h-screen bg-[#0a0a0b] flex flex-col items-center justify-center gap-10 md:hidden z-40"
        >
          {["Expertise", "Héritage Vodun"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
              className="text-2xl font-bold text-white uppercase tracking-widest"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="text-2xl font-bold text-cyan-400 uppercase tracking-widest"
          >
            Initialiser le projet
          </button>
        </motion.div>
      )}
    </nav>
  );
};

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
    whileHover={{ y: -5 }}
    className={`glass-panel p-6 md:p-8 rounded-3xl flex flex-col justify-between group relative overflow-hidden transition-all duration-500 ${className}`}
  >
    <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />
    <div className="relative z-10">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:border-cyan-500/30 transition-colors shadow-[0_0_15px_rgba(0,247,255,0.05)]">
        <Icon
          className="text-cyan-300 group-hover:text-cyan-200 transition-colors"
          size={24}
        />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base">
        {desc}
      </p>
    </div>
  </motion.div>
);

const FloatingWhatsApp = () => (
  <motion.a
    href={`https://wa.me/${WHATSAPP_NUMBER}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1 }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform cursor-pointer group"
  >
    <MessageCircle size={30} className="text-white" fill="white" />
    <span className="absolute right-16 bg-white text-black px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
      Discuter sur WhatsApp
    </span>
  </motion.a>
);

// --- COMPOSANT CONTACT FORM ---
const ContactSection = () => {
  const [formData, setFormData] = useState({
    subject: "Demande de Devis",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[NOVA ENT] ${formData.subject}`);
    const body = encodeURIComponent(formData.message);
    window.open(
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-10">
            <div>
              <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase">
                Canal Sécurisé
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-2 mb-6">
                Initialiser la <br />
                Communication.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Prêt à redéfinir les standards ? Notre équipe est basée à
                Ouidah, mais nous opérons sur le cloud mondial.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href={MAP_LINK}
                target="_blank"
                className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-900/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Quartier Général</h4>
                  <p className="text-gray-400 text-sm">
                    Ouidah, Bénin (Google Maps)
                  </p>
                </div>
                <ExternalLink
                  size={16}
                  className="ml-auto text-gray-600 group-hover:text-white"
                />
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Courriel Crypté</h4>
                  <p className="text-gray-400 text-sm">{CONTACT_EMAIL}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[#121214] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full"></div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Transmission de Données
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Type de Requête
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Développement Web",
                    "Architecture Logicielle",
                    "Héritage Vodun",
                    "Autre",
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, subject: opt })}
                      className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all text-left ${
                        formData.subject === opt
                          ? "bg-cyan-500/20 border-cyan-500 text-cyan-300"
                          : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Décrivez votre vision..."
                  className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-900/20 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02]"
              >
                <Send size={18} /> Transmettre la Demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-[#0a0a0b] selection:bg-cyan-500/30 selection:text-cyan-50 ${inter.className}`}
    >
      <Navbar />
      <FloatingWhatsApp />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 pt-20 md:pt-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[500px] bg-blue-800/20 rounded-[100%] blur-[80px] md:blur-[140px] animate-pulse-slow" />

        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-6 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-semibold text-cyan-300 backdrop-blur-md"
          >
            <Cpu size={14} className="animate-pulse" />
            <span className="uppercase tracking-wider">
              Ingénierie & Culture
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tighter leading-none text-white"
          >
            L&quotArchitecture de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-500 pb-2 md:pb-4">
              l&quotInvisible.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium px-4"
          >
            Édition logicielle, Systèmes complexes et Héritage culturel. Nous
            forgeons les écosystèmes numériques qui redéfinissent votre
            industrie.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-4 md:pt-8 px-4"
          >
            <button
              onClick={() =>
                document
                  .getElementById("expertise")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-8 py-4 bg-cyan-400 text-black font-extrabold text-lg rounded-lg overflow-hidden flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(0,247,255,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explorer Nos Services{" "}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("heritage-vodun")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold text-lg rounded-lg hover:bg-white/5 transition-all text-center"
            >
              Le Studio
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION EXPERTISE */}
      <section id="expertise" className="py-20 md:py-40 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 md:mb-24 md:w-2/3">
            <h2 className="text-4xl md:text-7xl font-extrabold mb-6 md:mb-8 tracking-tight leading-tight text-white">
              Domination <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Par la Technologie.
              </span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
              Une suite complète de compétences pour transformer n&quot;importe
              quel défi en solution logicielle souveraine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
            <BentoCard
              className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-[#1a1a2e] to-transparent border-blue-900/30 min-h-[300px]"
              title="Architecture & Édition"
              desc="Conception de systèmes névralgiques et logiciels sur-mesure. Fondations de souveraineté numérique."
              icon={Server}
            />
            <BentoCard
              className="md:col-span-1 min-h-[250px]"
              title="Dév. Web & Mobile"
              desc="Next.js 15, React, TypeScript. Interfaces ultra-rapides sans friction."
              icon={Code}
            />
            <BentoCard
              className="md:col-span-1 min-h-[250px]"
              title="Design & UI/UX"
              desc="Graphisme avancé. L'identité visuelle rencontre l'ergonomie immersive."
              icon={Palette}
            />
            <BentoCard
              className="md:col-span-2 bg-gradient-to-tr from-[#111] to-[#1a1a2e] min-h-[250px]"
              title="Administration de Données"
              desc="Architecture et sécurisation de bases de données. Transformer le chaos en avantage stratégique."
              icon={Database}
            />
          </div>
        </div>
      </section>

      {/* SECTION HERITAGE VODUN - STORYTELLING IMMERSIF */}
      <section
        id="heritage-vodun"
        className={`py-20 md:py-40 relative overflow-hidden bg-black ${cinzel.className}`}
      >
        {/* Fond texturé profond */}
        <div className="absolute inset-0 bg-[#020202]" />
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] mix-blend-overlay"></div>

        {/* Halo Doré Central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-gradient-to-b from-amber-600/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 text-amber-500 mb-4"
            >
              <div className="h-[1px] w-12 bg-amber-500/50"></div>
              <span className="uppercase tracking-[0.4em] text-xs font-bold">
                Ouidah, Bénin
              </span>
              <div className="h-[1px] w-12 bg-amber-500/50"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-serif text-white tracking-tight leading-none"
            >
              HÉRITAGE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-900">
                VODUN
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-amber-100/60 max-w-2xl mx-auto text-lg md:text-xl italic font-light leading-relaxed font-sans"
            >
              &quot;Nous ne sommes pas seulement des architectes du code, nous
              sommes les gardiens du temple. Nova ENT fusionne la tradition
              millénaire et l&apos;éternité numérique.&quot;
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-[2rem] overflow-hidden border border-amber-900/30 bg-[#0a0500]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-amber-900/20 opacity-60"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay"></div>

              <div className="absolute top-8 right-8 p-4 bg-amber-950/30 rounded-full border border-amber-500/20 backdrop-blur-md">
                <Landmark className="text-amber-500" size={32} />
              </div>

              <div className="absolute bottom-0 left-0 p-10 w-full bg-gradient-to-t from-black to-transparent pt-32">
                <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
                  Le Pilier Physique
                </span>
                <h3 className="text-3xl md:text-4xl text-white mb-4 font-serif">
                  Le Centre Culturel
                </h3>
                <p className="text-gray-400 font-sans text-sm md:text-base mb-6 leading-relaxed">
                  Un lieu de rassemblement physique à Ouidah. Nous organisons
                  des conférences, des rituels de médiation et des expositions
                  pour que l&apos;histoire se vive en chair et en os.
                </p>
                <button className="flex items-center gap-3 text-amber-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
                  Voir la Programmation <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-[2rem] overflow-hidden border border-cyan-900/30 bg-[#00050a]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-cyan-900/20 opacity-60"></div>
              <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-20"></div>

              <div className="absolute top-8 right-8 p-4 bg-cyan-950/30 rounded-full border border-cyan-500/20 backdrop-blur-md">
                <History className="text-cyan-400" size={32} />
              </div>

              <div className="absolute bottom-0 left-0 p-10 w-full bg-gradient-to-t from-black to-transparent pt-32">
                <span className="text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
                  Le Pilier Numérique
                </span>
                <h3 className="text-3xl md:text-4xl text-white mb-4 font-serif">
                  Le Sanctuaire Digital
                </h3>
                <p className="text-gray-400 font-sans text-sm md:text-base mb-6 leading-relaxed">
                  Numérisation 3D d&apos;artefacts sacrés et création de musées
                  virtuels. Nous protégeons les reliques contre l&apos;érosion
                  du temps en les encodant dans la blockchain.
                </p>
                <button className="flex items-center gap-3 text-cyan-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
                  Entrer dans le Métavers <Box size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection />

      <footer className="border-t border-white/5 bg-black py-12 px-6 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <LogoNE />
            <span className="text-white font-bold">NOVA ENT.</span>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} NOVA ENT. Ouidah, Bénin.
          </p>
        </div>
      </footer>
    </div>
  );
}
