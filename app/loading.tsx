"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden">
      {/* Halo lumineux d'arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-600/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative flex flex-col items-center gap-10 z-10">
        {/* Mécanisme d'Anneaux Rotatifs (Style Agence Tech) */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Anneau extérieur lent */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-[2px] border-cyan-500/20 rounded-full"
            style={{
              borderTopColor: "transparent",
              borderBottomColor: "transparent",
            }}
          />
          {/* Anneau intérieur rapide */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-3 border-[2px] border-cyan-400/40 rounded-full"
            style={{
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
            }}
          />

          {/* Initiales au centre avec pulsation */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white font-extrabold text-2xl tracking-tighter"
          >
            N<span className="text-cyan-500">.</span>
          </motion.div>
        </div>

        {/* Typographie Terminal & Barre de progression */}
        <div className="flex flex-col items-center gap-4">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-cyan-500 font-mono text-[10px] sm:text-xs tracking-[0.4em] uppercase"
          >
            Initialisation de l&apos;environnement
          </motion.div>

          {/* Ligne de balayage fluide */}
          <div className="w-56 h-[1px] bg-white/10 overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
