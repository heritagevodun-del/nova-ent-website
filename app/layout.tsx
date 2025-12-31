import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google"; // Ajout de Cinzel
import "./globals.css";

// Configuration optimisée des polices
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

// --- STRATÉGIE SEO EXPERT ---
export const metadata: Metadata = {
  // URL de base pour que les images sociales fonctionnent (à mettre à jour après déploiement)
  metadataBase: new URL("https://nova-ent-website.vercel.app/"),

  title: {
    default: "NOVA ENT | Agence Digitale & Métavers à Ouidah",
    template: "%s | NOVA ENT", // Permet d'avoir "Musée | NOVA ENT" automatiquement
  },
  description:
    "Agence experte en développement web, logiciels sur-mesure et préservation numérique du patrimoine Vodun. Basée à Ouidah, Bénin. Transformez votre vision en réalité.",

  keywords: [
    "Agence Web Bénin",
    "Développement Logiciel Ouidah",
    "Métavers Vodun",
    "Transformation Digitale Afrique",
    "NOVA ENT",
    "Création Site Web Cotonou",
    "Musée Virtuel 3D",
    "Patrimoine Culturel Numérique",
  ],

  authors: [{ name: "NOVA ENT Team" }],
  creator: "NOVA ENT",
  publisher: "NOVA ENT Network",

  // Apparence sur Facebook / LinkedIn / WhatsApp
  openGraph: {
    title: "NOVA ENT | L'Excellence Numérique au Bénin",
    description:
      "Solutions digitales premium et innovation culturelle. Découvrez le premier Métavers Vodun.",
    siteName: "NOVA ENT",
    locale: "fr_FR",
    type: "website",
  },

  // Apparence sur Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "NOVA ENT | Futur & Tradition",
    description: "Agence digitale experte à Ouidah. Web, Mobile & Métavers.",
  },

  // Instructions pour Google
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      {/* On applique ici les classes globales :
         - inter.className : police par défaut
         - cinzel.variable : variable pour la police secondaire
         - bg-[#020617] : fond sombre global
         - text-white : texte blanc par défaut
      */}
      <body
        className={`${inter.className} ${cinzel.variable} bg-[#020617] text-white antialiased selection:bg-cyan-500/30`}
      >
        {children}
      </body>
    </html>
  );
}
