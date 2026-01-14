import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google"; // Importation des polices
import "./globals.css";

// 1. Configuration des polices (Optimisation Next.js)
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

// 2. Stratégie SEO & Métadonnées
export const metadata: Metadata = {
  // URL de base (Indispensable pour les images OG sur les réseaux)
  metadataBase: new URL("https://nova-ent-website.vercel.app/"),

  title: {
    default: "NOVA ENT | Agence Digitale & Métavers à Ouidah",
    template: "%s | NOVA ENT",
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
    images: [
      {
        url: "/logo-nova.png", // ⚠️ Vérifie que ce fichier est bien dans le dossier /public
        width: 800,
        height: 800,
        alt: "Logo NOVA ENT",
      },
    ],
  }, // <--- C'était ici l'erreur : fermeture de l'objet openGraph

  // Apparence sur Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "NOVA ENT | Futur & Tradition",
    description: "Agence digitale experte à Ouidah. Web, Mobile & Métavers.",
    images: ["/logo-nova.png"], // Ajout recommandé pour Twitter aussi
  },

  // Instructions pour les robots d'indexation (Google)
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

// 3. Layout Racine
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      {/* Application des classes globales :
          - inter.className : Police corps de texte par défaut
          - cinzel.variable : Variable CSS pour les titres (ex: font-cinzel)
          - bg-[#020617] : Fond "Slate 950" (Thème sombre profond)
      */}
      <body
        className={`${inter.className} ${cinzel.variable} bg-[#020617] text-white antialiased selection:bg-cyan-500/30`}
      >
        {children}
      </body>
    </html>
  );
}
