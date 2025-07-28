// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full flex flex-col
          bg-gradient-to-br from-black via-red-950 to-red-800 text-white overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex-grow w-full px-6 py-10 bg-transparent">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
