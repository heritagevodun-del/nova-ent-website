"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useAnimationFrame } from "framer-motion";

export default function SmoothScroll() {
  // On stocke l'instance de Lenis dans une référence pour ne pas re-déclencher de rendus React
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialisation du moteur de scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2, // Scroll réactif et luxueux sur mobile
    });

    lenisRef.current = lenis;

    // Nettoyage clinique au démontage
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // 🚀 L'ASTUCE DU CTO : Synchronisation parfaite avec la boucle de Framer Motion
  // Plus de conflit, une seule boucle de rendu (60 ou 120 FPS selon l'écran)
  useAnimationFrame((time) => {
    if (lenisRef.current) {
      lenisRef.current.raf(time);
    }
  });

  return null;
}
