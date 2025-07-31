"use client";

import AnimatedBackground from "@/components/AnimatedBackground";

export default function HomePage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-gradient-to-tr from-black via-zinc-900 to-red-900 flex flex-col items-center px-6 text-center pt-20 font-sans text-zinc-200">
      {/* Animirana pozadina */}
      <AnimatedBackground />

      {/* Kineski natpis - Karate-dō */}
      <div
        className="z-10 text-6xl md:text-7xl font-semibold text-red-600 mb-6 select-none
        transition duration-300
        hover:drop-shadow-[0_0_15px_rgba(255,50,50,0.9)]"
      >
        空手道
      </div>

      {/* Logo */}
      <img
        src="/logo.png"
        alt="Bushido San Logo"
        className="z-10 mb-8 w-36 h-auto object-contain select-none drop-shadow-[0_0_8px_rgba(255,50,50,0.7)]"
      />

      {/* Glaven naslov */}
      <h1
        className="z-10 text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-500 to-red-600 leading-tight select-none
        transition duration-300
        hover:drop-shadow-[0_0_12px_rgba(255,70,70,0.8)]"
      >
        Dobrodošli u Bushido San
      </h1>

      {/* Podnaslov */}
      <p
        className="z-10 mt-8 max-w-3xl text-xl md:text-2xl font-light tracking-wide leading-relaxed text-zinc-200
        transition duration-300
        hover:drop-shadow-[0_0_10px_rgba(255,80,80,0.9)]"
      >
        Zvanična stranica karate kluba Bushido San. Treninzi, takmičenja i tradicija.
      </p>
    </main>
  );
}
