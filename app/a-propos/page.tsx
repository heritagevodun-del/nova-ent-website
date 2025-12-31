"use client";

import React from "react";
import { motion } from "framer-motion";
import { Inter, Cinzel } from "next/font/google";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap, Globe, ShieldCheck } from "lucide-react";

// Polices
const inter = Inter({ subsets: ["latin"] });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

export default function AboutPage() {
  return (
    <div
      className={`min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 ${inter.className}`}
    >
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        {/* RETOUR ACCUEIL */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-12 group"
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
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-sm font-bold tracking-widest uppercase">
            Notre Histoire
          </div>
          <h1
            className={`text-5xl md:text-7xl font-bold leading-tight ${cinzel.className}`}
          >
            De Ouidah au <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Métavers.
            </span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            NOVA ENT n&apos;est pas une agence classique. C&apos;est un pont
            entre la sagesse ancestrale et la technologie de demain.
          </p>
        </motion.div>

        {/* SECTION 1: LE MANIFESTE */}
        <section className="mb-24 space-y-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Pourquoi NOVA ?
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Le monde digital évolue à une vitesse vertigineuse. Pour
                beaucoup d&apos;entreprises, c&apos;est une course effrénée.
                Pour nous, c&apos;est une opportunité de construire quelque
                chose de durable.
              </p>
              <p>
                Basés à <strong>Ouidah</strong>, terre d&apos;histoire, nous
                croyons que l&apos;innovation n&apos;a de sens que si elle a des
                racines. Nous ne créons pas juste des sites web ou des logiciels
                : nous bâtissons votre patrimoine numérique.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: NOS PILIERS */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-white">
            Nos Piliers d&apos;Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#0f172a] border border-white/5 hover:border-cyan-500/30 transition-all group">
              <Zap
                className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Vitesse & Performance
              </h3>
              <p className="text-slate-400 text-sm">
                Pas de chargement lent. Nous optimisons chaque ligne de code
                pour une expérience utilisateur instantanée.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f172a] border border-white/5 hover:border-cyan-500/30 transition-all group">
              <Globe
                className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Ambition Globale
              </h3>
              <p className="text-slate-400 text-sm">
                Nos standards sont internationaux. Que vous soyez à Cotonou,
                Paris ou New York, la qualité reste la même : Premium.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f172a] border border-white/5 hover:border-cyan-500/30 transition-all group">
              <ShieldCheck
                className="text-green-400 mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Fiabilité Absolue
              </h3>
              <p className="text-slate-400 text-sm">
                Nous livrons ce que nous promettons. Pas de bugs cachés, pas de
                retards inexpliqués. La rigueur est notre signature.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f172a] border border-white/5 hover:border-cyan-500/30 transition-all group">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="font-serif font-bold text-white">V</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Héritage Vodun
              </h3>
              <p className="text-slate-400 text-sm">
                Notre division culturelle unique au monde numérise
                l&apos;histoire pour qu&apos;elle ne s&apos;efface jamais.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: VISION DU FONDATEUR */}
        <section className="mb-24 relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/20 p-8 md:p-12 text-center md:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Logo NOVA en guise de photo pour l'instant */}
            <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-cyan-500/30 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(0,247,255,0.2)]">
              <span className="font-extrabold text-cyan-400 text-2xl">NE</span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Le Mot de la Direction
              </h3>
              <p className="text-slate-300 italic mb-4">
                &quot;NOVA ENT est née d&apos;un constat simple : le Bénin
                regorge de talents et d&apos;histoires, mais manque parfois des
                outils pour les magnifier. Notre mission est de fournir ces
                outils, avec un niveau d&apos;exigence que rien ne peut
                compromettre.&quot;
              </p>
              <p className="text-cyan-400 font-bold text-sm tracking-widest uppercase">
                — Fondateur & CEO de NOVA ENT
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <div className="text-center space-y-6 pt-10 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white">
            Prêt à écrire votre chapitre ?
          </h2>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-50 transition-all transform hover:scale-105"
          >
            <CheckCircle2 size={20} />
            Démarrer un projet
          </Link>
        </div>
      </div>
    </div>
  );
}
