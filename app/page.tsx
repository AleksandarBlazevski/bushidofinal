"use client";

import AnimatedBackground from "@/components/AnimatedBackground";

export default function HomePage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-gradient-to-tr from-black via-zinc-900 to-red-900 flex flex-col items-center px-6 text-center pt-20 font-sans text-white">
      {/* Animirana pozadina */}
      <AnimatedBackground />

      {/* Kineski natpis - Karate-dō */}
      <div
        className="
          z-10 text-6xl md:text-7xl font-semibold
          text-white 
          select-none
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)]
          transition duration-300
          hover:drop-shadow-[0_0_15px_rgba(255,50,50,0.9)]
        "
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
        className="
          z-10 text-5xl md:text-7xl font-extrabold 
          text-white 
          select-none
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)]
          transition duration-300
          hover:drop-shadow-[0_0_12px_rgba(255,70,70,0.8)]
          leading-tight
        "
      >
        Dobrodošli u Bushido San
      </h1>

      {/* Podnaslov */}
      <p
        className="
          z-10 mt-8 max-w-3xl text-xl md:text-2xl font-light tracking-wide leading-relaxed
          text-white 
          select-none
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)]
          transition duration-300
          hover:drop-shadow-[0_0_10px_rgba(255,80,80,0.9)]
        "
      >
        Zvanična stranica karate kluba Bushido San. Treninzi, takmičenja i tradicija.
      </p>
    </main>
  );
}
