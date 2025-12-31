import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]">
      <div className="flex flex-col items-center gap-4">
        {/* Logo Pulsant */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-xl animate-ping" />
          <div className="absolute inset-0 border-4 border-t-cyan-500 border-r-transparent border-b-cyan-500 border-l-transparent rounded-xl animate-spin" />
        </div>

        {/* Texte de chargement style "Terminal" */}
        <div className="text-cyan-500 font-mono text-xs tracking-[0.3em] animate-pulse">
          CHARGEMENT DU SYSTÈME...
        </div>
      </div>
    </div>
  );
}
