"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Inter, Cinzel } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import {
  Database,
  ArrowRight,
  Box,
  Cpu,
  Code,
  Palette,
  MapPin,
  Mail,
  Send,
  Menu,
  X,
  History,
  Landmark,
  Zap,
  ExternalLink,
  Info,
  CheckCircle,
  TrendingUp,
  ShoppingCart,
  AppWindow,
  type LucideIcon,
} from "lucide-react";

// Polices (Optimisées avec swap)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// --- CONFIGURATION ---
const CONTACT_EMAIL = "joindre.novaent@gmail.com";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Ouidah+Benin";
const HERITAGE_URL = "https://www.heritagevodun.com/";

// --- COMPOSANTS NAV & UI ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" },
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (key: string) => {
    setMobileMenuOpen(false);
    if (key === "heritage") {
      window.open(HERITAGE_URL, "_blank");
    } else {
      const element = document.getElementById(key);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div
        ref={triggerRef}
        className="absolute top-0 left-0 w-full h-1 pointer-events-none opacity-0"
      />

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div
            className="flex items-center gap-3 cursor-pointer z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo-nova.png"
                alt="Logo NOVA ENT"
                fill
                sizes="(max-width: 768px) 40px, 48px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              NOVA<span className="text-cyan-400">ENT</span>
            </span>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/a-propos"
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
            >
              À Propos
            </Link>
            <button
              onClick={() => handleNavClick("expertise")}
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
            >
              Expertise
            </button>
            <button
              onClick={() => handleNavClick("pricing")}
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
            >
              Tarifs
            </button>
            <button
              onClick={() => handleNavClick("heritage")}
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1"
            >
              Héritage Vodun <ExternalLink size={12} className="opacity-50" />
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="px-6 py-2 bg-white text-black hover:bg-cyan-50 font-bold rounded-lg transition-all text-sm flex items-center gap-2 shadow-lg hover:shadow-cyan-500/20"
            >
              CONTACT <ArrowRight size={16} />
            </button>
          </div>

          {/* BOUTON MOBILE */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 -mr-2 touch-manipulation active:scale-95 transition-transform"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-[#0f172a] z-40 flex flex-col items-center justify-center gap-8 md:hidden overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>

            <Link
              href="/a-propos"
              className="text-2xl font-bold text-white uppercase tracking-widest flex items-center gap-2 p-4 active:text-cyan-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              À Propos <Info size={20} className="text-cyan-400" />
            </Link>
            <button
              onClick={() => handleNavClick("expertise")}
              className="text-2xl font-bold text-white uppercase tracking-widest p-4 active:text-cyan-400"
            >
              Expertise
            </button>
            <button
              onClick={() => handleNavClick("pricing")}
              className="text-2xl font-bold text-white uppercase tracking-widest p-4 active:text-cyan-400"
            >
              Tarifs
            </button>
            <button
              onClick={() => handleNavClick("heritage")}
              className="text-2xl font-bold text-white uppercase tracking-widest flex items-center gap-2 p-4 active:text-cyan-400"
            >
              Héritage Vodun <ExternalLink size={20} />
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-2xl font-bold text-cyan-400 uppercase tracking-widest p-4 border border-cyan-500/30 rounded-xl bg-cyan-500/10"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- BENTO CARD ---
const BentoCard = ({
  title,
  desc,
  icon: Icon,
  className = "",
}: {
  title: string;
  desc: string;
  icon: LucideIcon;
  className?: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    viewport={{ once: true, margin: "-50px" }}
    className={`bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 backdrop-blur-sm ${className}`}
  >
    <div className="relative z-10">
      <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-colors">
        <Icon
          className="text-cyan-300 group-hover:text-cyan-100 transition-colors"
          size={28}
        />
      </div>
      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-gray-300 font-medium leading-relaxed text-sm md:text-base">
        {desc}
      </p>
    </div>
  </motion.div>
);

// --- SECTION PRICING (SaaS & Agence) ---
const PricingSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const plans = [
    {
      name: "Landing Page",
      icon: TrendingUp,
      desc: "Idéal pour valider une idée ou lancer un produit rapidement.",
      time: "1 à 2 semaines",
      tiers: [
        {
          name: "Essential",
          price: "150.000 FCFA",
          features: [
            "Design One-Page",
            "Responsive Mobile",
            "Formulaire de contact",
            "SEO Basique",
          ],
        },
        {
          name: "Business",
          price: "225.000 FCFA",
          features: [
            "Animations fluides",
            "Copywriting inclus",
            "Intégration Analytics",
            "Optimisation Vitesse",
          ],
          recommended: true,
        },
        {
          name: "Premium",
          price: "300.000 FCFA",
          features: [
            "Design sur-mesure",
            "Animations 3D légères",
            "A/B Testing",
            "Support prioritaire",
          ],
        },
      ],
    },
    {
      name: "Site Vitrine",
      icon: AppWindow,
      desc: "Votre image de marque digitale complète (5 à 10 pages).",
      time: "3 à 5 semaines",
      tiers: [
        {
          name: "Essential",
          price: "400.000 FCFA",
          features: [
            "Jusqu'à 5 pages",
            "Blog basique",
            "Formulaires avancés",
            "Formation CMS",
          ],
        },
        {
          name: "Business",
          price: "650.000 FCFA",
          features: [
            "Jusqu'à 10 pages",
            "SEO Avancé",
            "Multilingue",
            "Performances Premium",
          ],
          recommended: true,
        },
        {
          name: "Premium",
          price: "900.000 FCFA",
          features: [
            "Direction Artistique",
            "Animations Complexes",
            "Hébergement Cloud",
            "Maintenance 3 mois",
          ],
        },
      ],
    },
    {
      name: "E-Commerce",
      icon: ShoppingCart,
      desc: "Une boutique en ligne performante pour exploser vos ventes.",
      time: "4 à 8 semaines",
      tiers: [
        {
          name: "Essential",
          price: "800.000 FCFA",
          features: [
            "Catalogue produits",
            "Paiement Mobile/CB",
            "Gestion des stocks",
            "Design standard",
          ],
        },
        {
          name: "Business",
          price: "1.400.000 FCFA",
          features: [
            "Design sur-mesure",
            "Relance paniers",
            "Tableau de bord avancé",
            "Facturation auto",
          ],
          recommended: true,
        },
        {
          name: "Premium",
          price: "2.000.000+ FCFA",
          features: [
            "App Mobile E-commerce",
            "IA de recommandation",
            "Multidevises",
            "Infrastructure Haute Dispo",
          ],
        },
      ],
    },
    {
      name: "Application & SaaS",
      icon: Database,
      desc: "Logiciels métiers et infrastructures cloud souveraines.",
      time: "Sur devis strict",
      tiers: [
        {
          name: "MVP Essential",
          price: "1.500.000 FCFA",
          features: [
            "Core Features",
            "Authentification",
            "Base de données",
            "Déploiement Vercel",
          ],
        },
        {
          name: "Business MVP",
          price: "3.000.000 FCFA",
          features: [
            "SaaS Complet",
            "Abonnements (Stripe/Kkiapay)",
            "Espace Admin",
            "API Rest",
          ],
          recommended: true,
        },
        {
          name: "Enterprise Custom",
          price: "5.000.000+ FCFA",
          features: [
            "Architecture Microservices",
            "Conformité & Sécurité",
            "Intégration IA",
            "Support 24/7",
          ],
        },
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 relative border-t border-white/5 bg-[#080c16]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-bold text-sm tracking-widest uppercase mb-2 block">
            Transparence & Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Investissez dans votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Croissance
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Des solutions conçues pour générer du ROI. Choisissez la typologie
            de votre projet pour découvrir nos offres. Maintenance évolutive à
            partir de 30.000 FCFA / mois.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTab === index
                    ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <Icon size={18} /> {plan.name}
              </button>
            );
          })}
        </div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plans[activeTab].tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-3xl border transition-all ${
                  tier.recommended
                    ? "bg-gradient-to-b from-slate-800 to-slate-900 border-cyan-500/50 shadow-2xl scale-105 z-10"
                    : "bg-[#0f172a] border-white/10 hover:border-white/20"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-black text-xs font-black uppercase tracking-widest rounded-full">
                    Le plus demandé
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <div className="text-3xl font-extrabold text-white mb-6">
                  {tier.price}{" "}
                  <span className="text-sm text-gray-500 font-normal">
                    {plans[activeTab].name === "Application & SaaS"
                      ? ""
                      : "à partir de"}
                  </span>
                </div>
                <div className="text-sm text-cyan-400 font-medium mb-8 bg-cyan-500/10 inline-block px-3 py-1 rounded-md">
                  ⏱ Délai : {plans[activeTab].time}
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-300 text-sm"
                    >
                      <CheckCircle
                        size={18}
                        className="text-cyan-400 shrink-0"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`w-full py-4 rounded-xl font-bold transition-all ${
                    tier.recommended
                      ? "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Sélectionner
                </button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

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
      "_blank",
    );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-10">
            <div>
              <span className="text-cyan-400 font-bold text-sm tracking-widest uppercase mb-2 block">
                Démarrer une collaboration
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Concrétisez votre <br /> Ambition.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Vous avez une vision ? Nous avons l&apos;expertise pour la
                réaliser. <br />
                Basés à Ouidah, nous accompagnons les entreprises ambitieuses
                partout dans le monde.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href={MAP_LINK}
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 backdrop-blur-sm"
              >
                <div className="p-3 rounded-xl bg-blue-500/20 text-blue-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Siège Social</h4>
                  <p className="text-gray-400 text-sm">Ouidah, Bénin</p>
                </div>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 backdrop-blur-sm"
              >
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Email</h4>
                  <p className="text-gray-400 text-sm">{CONTACT_EMAIL}</p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-[#0f172a] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400">
                  Votre besoin concerne :
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Site Web / App Mobile",
                    "Logiciel Sur-Mesure",
                    "Projet Culturel",
                    "Autre",
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, subject: opt })}
                      className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all text-left ${
                        formData.subject === opt
                          ? "bg-cyan-500 text-black border-cyan-500 shadow-md"
                          : "bg-slate-800 border-slate-700 text-gray-300 hover:bg-slate-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400">
                  Détails du projet :
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Racontez-nous ce que vous souhaitez accomplir..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <Send size={18} /> Envoyer la demande
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
      className={`min-h-screen bg-[#050505] selection:bg-cyan-500/30 selection:text-white ${inter.className}`}
    >
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 pt-20 md:pt-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/15 blur-[120px] rounded-full pointer-events-none will-change-transform" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-sm font-semibold text-cyan-300 backdrop-blur-md"
          >
            <Zap size={16} className="text-yellow-400 fill-yellow-400" />
            <span>Architecte de Solutions Logicielles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[1.1] text-white drop-shadow-2xl"
          >
            L&apos;Excellence <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Numérique.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light px-4"
          >
            De la Landing Page ultra-rapide au SaaS d&apos;entreprise complexe.
            Nous transformons vos visions en infrastructures souveraines et
            rentables.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8 flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <button
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-cyan-500 text-black font-extrabold text-lg rounded-full shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] hover:scale-105 transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              Découvrir nos Tarifs <ArrowRight />
            </button>
            <Link
              href="/musee-virtuel"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              Visiter le Musée WebGL
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION SERVICES */}
      <section
        id="expertise"
        className="py-20 md:py-32 px-4 md:px-6 relative bg-black/40"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center md:text-left md:w-2/3">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
              Votre croissance, <br />
              <span className="text-cyan-400">Notre priorité.</span>
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed font-light">
              Nous ne vendons pas de la technique, nous vous apportons des
              résultats concrets et mesurables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
            <BentoCard
              className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-slate-900 to-[#050505] min-h-[350px]"
              title="Logiciels Sur-Mesure & SaaS"
              desc="Vous avez des processus uniques ? Nous créons des architectures logicielles (SaaS) complexes pour automatiser vos tâches et générer des revenus récurrents."
              icon={Cpu}
            />
            <BentoCard
              className="md:col-span-1 min-h-[250px] bg-[#0a0f18]"
              title="Sites & E-Commerce"
              desc="Soyez visible partout. Nous développons des plateformes web ultra-rapides conçues pour convertir vos visiteurs en clients fidèles."
              icon={Code}
            />
            <BentoCard
              className="md:col-span-1 min-h-[250px] bg-[#0a0f18]"
              title="Design Impactant"
              desc="Ne passez pas inaperçu. Nous créons une identité visuelle forte (UI/UX) qui rassure vos clients et vous distingue des amateurs."
              icon={Palette}
            />
            <BentoCard
              className="md:col-span-2 bg-gradient-to-r from-slate-900 to-slate-800 min-h-[250px]"
              title="Gestion & Sécurité des Données"
              desc="Vos informations sont le cœur de votre entreprise. Nous structurons et sécurisons vos bases de données PostgreSQL/Supabase pour une souveraineté totale."
              icon={Database}
            />
          </div>
        </div>
      </section>

      {/* INJECTION DE LA SECTION TARIFS */}
      <PricingSection />

      {/* SECTION HERITAGE VODUN */}
      <section
        id="heritage"
        className={`py-20 md:py-32 relative overflow-hidden bg-[#0a0500] ${cinzel.className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1000] to-black opacity-80" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm"
            >
              Division Culturelle
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-serif text-white leading-tight"
            >
              HÉRITAGE VODUN
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-amber-100/70 max-w-2xl mx-auto text-xl italic font-serif"
            >
              Préserver l&apos;histoire pour les générations futures grâce au
              numérique.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href={HERITAGE_URL}
              target="_blank"
              className="p-8 md:p-12 rounded-3xl bg-[#150a00] border border-amber-900/30 hover:border-amber-600/50 transition-colors group cursor-pointer block"
            >
              <div className="text-amber-500 mb-6">
                <Landmark size={40} />
              </div>
              <div className="text-amber-600 font-bold tracking-widest text-xs uppercase mb-2">
                Le Lieu Physique
              </div>
              <h3 className="text-3xl text-white mb-4 font-serif">
                Centre Culturel à Ouidah
              </h3>
              <p className="text-gray-400 font-sans leading-relaxed mb-6">
                Situé au cœur de la cité historique, notre centre est un espace
                vivant. Expositions, conférences et médiation culturelle pour
                vivre l&apos;histoire en direct.
              </p>
              <div className="inline-flex items-center gap-2 text-amber-500 font-bold uppercase text-xs">
                Visiter le site dédié <ArrowRight size={14} />
              </div>
            </a>
            <a
              href="/musee-virtuel"
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0c1220] to-black border border-cyan-900/30 hover:border-cyan-500/30 transition-colors group cursor-pointer block"
            >
              <div className="text-cyan-500 mb-6">
                <History size={40} />
              </div>
              <div className="text-cyan-600 font-bold tracking-widest text-xs uppercase mb-2">
                L&apos;Innovation
              </div>
              <h3 className="text-3xl text-white mb-4 font-serif">
                Musée Virtuel 3D
              </h3>
              <p className="text-gray-400 font-sans leading-relaxed mb-6">
                Nous numérisons les artefacts sacrés pour créer des archives
                éternelles. Une immersion accessible depuis le monde entier pour
                découvrir le patrimoine Vodun.
              </p>
              <div className="inline-flex items-center gap-2 text-cyan-500 font-bold uppercase text-xs">
                Accéder au Métavers <Box size={14} />
              </div>
            </a>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* FOOTER AMÉLIORÉ */}
      <footer className="border-t border-white/5 bg-[#020617] pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo-nova.png"
                    alt="Logo NOVA ENT"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-white font-bold text-xl">NOVA ENT.</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                L&apos;agence digitale de référence au Bénin. Nous fusionnons
                créativité, technologie et culture pour propulser les
                entreprises audacieuses.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link
                    href="/"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/a-propos"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    À Propos
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("expertise")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Expertise
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("pricing")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Tarifs
                  </button>
                </li>
                <li>
                  <Link
                    href="/musee-virtuel"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Musée Virtuel
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <MapPin size={14} /> Ouidah, Bénin
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} /> {CONTACT_EMAIL}
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} NOVA ENT. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-slate-600 text-xs">
              <span className="hover:text-slate-400 cursor-pointer">
                Mentions Légales
              </span>
              <span className="hover:text-slate-400 cursor-pointer">
                Politique de Confidentialité
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}