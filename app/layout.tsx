import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

// 1. Configuration des polices
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

// 2. Stratégie SEO & Métadonnées (Prestige)
export const metadata: Metadata = {
  metadataBase: new URL("https://nova-ent.agency"),

  title: {
    default: "NOVA ENT | Architecte de Solutions Numériques & SaaS",
    template: "%s | NOVA ENT",
  },
  description:
    "Agence d'ingénierie logicielle et de design numérique. De la Landing Page ultra-rapide au SaaS d'entreprise complexe, nous transformons votre vision en infrastructures souveraines.",

  keywords: [
    "Agence Web Bénin",
    "Développement Logiciel",
    "Création SaaS",
    "Nova ENT",
    "Ouidah",
    "Métavers Vodun",
    "Transformation Digitale",
    "Architecte Logiciel",
  ],

  authors: [{ name: "NOVA ENT" }],
  creator: "NOVA ENT",
  publisher: "NOVA ENT Network",

  // Apparence sur Facebook / LinkedIn / WhatsApp
  openGraph: {
    title: "NOVA ENT | L'Excellence Numérique",
    description:
      "Solutions digitales premium, infrastructures SaaS et innovation culturelle au Bénin.",
    siteName: "NOVA ENT",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo-nova.png",
        width: 800,
        height: 800,
        alt: "Logo NOVA ENT",
      },
    ],
  },

  // Apparence sur Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "NOVA ENT | Architecte Logiciel",
    description:
      "Agence d'ingénierie logicielle experte. Web, Mobile, SaaS & Métavers.",
    images: ["/logo-nova.png"],
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
    /* Suppression de "scroll-smooth" natif pour laisser Lenis gérer la physique */
    <html lang="fr">
      <body
        className={`${inter.className} ${cinzel.variable} bg-[#050505] text-white antialiased selection:bg-cyan-500/30`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
