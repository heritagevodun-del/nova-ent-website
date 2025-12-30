import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // <--- C'EST LA LIGNE VITALE

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NOVA ENT",
  description: "Agence digitale et Héritage Vodun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
