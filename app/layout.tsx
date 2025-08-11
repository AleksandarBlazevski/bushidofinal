// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Bushido San",
  description: "Званична страница карате клуба Bushido San",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className="w-full h-full">
      <body
        className={`${inter.variable} antialiased min-h-screen w-full flex flex-col 
          bg-gradient-to-br from-black via-red-950 to-red-800 text-white overflow-x-hidden relative font-sans`}
      >
        {/* 🔴 Глобална позадина */}
        <AnimatedBackground />

        {/* Навигација */}
        <Navbar />

        {/* Главна содржина */}
        <main className="flex-grow w-full px-4 sm:px-6 py-6 sm:py-10 bg-transparent relative z-10">
          {children}
        </main>

        {/* Футер */}
        <Footer />
      </body>
    </html>
  );
}
