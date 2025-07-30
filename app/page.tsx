"use client";

import AnimatedBackground from "@/components/AnimatedBackground";

export default function HomePage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-gradient-to-tr from-black via-zinc-900 to-red-950 flex flex-col items-center px-6 text-center pt-20">
      {/* Анимирана позадина (можеш да ја замениш со karate gif/video background) */}
      <AnimatedBackground />

      {/* Кинески натпис - Karate-dō */}
      <div className="z-10 text-5xl md:text-6xl font-bold text-red-600 drop-shadow-[0_0_12px_rgba(255,0,0,0.5)] mb-4 select-none">
        空手道
      </div>

      {/* Лого */}
      <img
        src="/logo.png"
        alt="Bushido San Logo"
        className="z-10 mb-6 w-36 h-auto object-contain select-none drop-shadow-[0_0_8px_rgba(255,0,0,0.4)]"
      />

      {/* Главен наслов */}
      <h1 className="z-10 text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-red-700 to-red-600 drop-shadow-[0_0_8px_rgba(139,0,0,0.7)] leading-tight select-none">
        Добродошли у Bushido San
      </h1>

      {/* Поднаслов */}
      <p className="z-10 mt-6 max-w-3xl text-lg md:text-2xl text-zinc-300 font-light tracking-wide leading-relaxed">
        Званична страница карате клуба Bushido San. Тренинзи, такмичења и традиција.
      </p>
    </main>
  );
}
