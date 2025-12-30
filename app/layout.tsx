import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll"; // 1. On importe le moteur

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NOVA ENT | Engineering Excellence",
  description: "Agence digitale et Héritage Vodun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* 2. On injecte le SmoothScroll juste avant les children dans le body */}
      <body className={inter.className}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
