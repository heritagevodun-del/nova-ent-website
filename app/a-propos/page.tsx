"use client";

import React from "react";
import { motion } from "framer-motion";
import { Inter, Cinzel } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  Zap,
  Globe,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

// Polices
const inter = Inter({ subsets: ["latin"] });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

export default function AboutPage() {
  return (
    <div
      className={`min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 ${inter.className}`}
    >
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-cyan-600/10 blur-[120px] will-change-transform" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] will-change-transform" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        {/* RETOUR ACCUEIL */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-12 group font-medium"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Retour à l&apos;accueil
        </Link>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-bold tracking-widest uppercase backdrop-blur-md">
            Notre Manifeste
          </div>
          <h1
            className={`text-5xl md:text-7xl font-extrabold leading-[1.1] ${cinzel.className}`}
          >
            De Ouidah au <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Métavers.
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
            NOVA ENT n&apos;est pas une agence classique. C&apos;est un pont
            architectural entre la sagesse ancestrale et la technologie
            souveraine de demain.
          </p>
        </motion.div>

        {/* SECTION 1: L'ADN NOVA */}
        <section className="mb-24 space-y-8">
          <div className="p-8 md:p-10 rounded-3xl bg-[#0a0f18] border border-white/10 backdrop-blur-sm shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
              Pourquoi NOVA ?
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
              <p>
                Le monde digital évolue à une vitesse vertigineuse. Pour
                beaucoup d&apos;entreprises, c&apos;est une course effrénée.
                Pour nous, c&apos;est l&apos;opportunité de construire des
                infrastructures logicielles durables et rentables.
              </p>
              <p>
                Basés à{" "}
                <strong className="text-cyan-400 font-semibold">Ouidah</strong>,
                terre d&apos;histoire, nous croyons que l&apos;innovation
                n&apos;a de sens que si elle a des racines. Nous ne créons pas
                juste des sites web ou des applications : nous bâtissons votre
                patrimoine numérique avec une exigence internationale.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: NOS PILIERS */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-white tracking-tight">
            Nos Piliers d&apos;Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-[#0a0f18] border border-white/5 hover:border-cyan-500/50 transition-all duration-300 group">
              <Zap
                className="text-yellow-400 mb-6 group-hover:scale-110 group-hover:text-cyan-400 transition-all"
                size={36}
              />
              <h3 className="text-xl font-bold text-white mb-3">
                Vitesse & Performance
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pas de chargement lent. Nous optimisons chaque ligne de code
                pour une expérience utilisateur instantanée et un SEO
                irréprochable.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0a0f18] border border-white/5 hover:border-cyan-500/50 transition-all duration-300 group">
              <Globe
                className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform"
                size={36}
              />
              <h3 className="text-xl font-bold text-white mb-3">
                Ambition Globale
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nos standards sont mondiaux. Que vous soyez à Cotonou, Paris ou
                New York, la qualité d&apos;architecture reste la même :
                Premium.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0a0f18] border border-white/5 hover:border-cyan-500/50 transition-all duration-300 group">
              <ShieldCheck
                className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform"
                size={36}
              />
              <h3 className="text-xl font-bold text-white mb-3">
                Fiabilité Absolue
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nous livrons ce que nous promettons. Pas de bugs cachés, pas de
                retards inexpliqués. La rigueur technique est notre signature.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0a0f18] border border-white/5 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span
                  className={`font-bold text-amber-500 text-lg ${cinzel.className}`}
                >
                  V
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Héritage Vodun
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Notre division culturelle unique au monde numérise
                l&apos;histoire en 3D pour qu&apos;elle ne s&apos;efface jamais
                du Web.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: VISION DU FONDATEUR */}
        <section className="mb-24 relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-[#050505] border border-cyan-500/20 p-8 md:p-12 text-center md:text-left shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-24 h-24 rounded-full bg-black border-2 border-cyan-500/50 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(6,182,212,0.2)] overflow-hidden p-3">
              <Image
                src="/logo-nova.png"
                alt="Logo Nova ENT"
                fill
                className="object-contain p-4"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Le Mot de la Direction
              </h3>
              <p className="text-slate-300 italic mb-6 leading-relaxed font-light">
                &quot;NOVA ENT est née d&apos;un constat simple : le Bénin
                regorge de talents et d&apos;histoires, mais manque parfois des
                infrastructures pour les magnifier à l&apos;international. Notre
                mission est de fournir ces armes digitales, avec un niveau
                d&apos;exigence que rien ne peut compromettre.&quot;
              </p>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="h-[1px] w-8 bg-cyan-500"></div>
                <p className="text-cyan-400 font-bold text-xs tracking-widest uppercase">
                  Fondateur & CEO de NOVA ENT
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <div className="text-center space-y-8 pt-12 border-t border-white/10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Prêt à écrire votre chapitre ?
          </h2>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-black font-extrabold rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all transform hover:scale-105"
          >
            <CheckCircle2 size={20} />
            Démarrer un projet
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
