"use client";

import AnimatedBackground from "@/components/AnimatedBackground";

export default function KontaktPage() {
  return (
    <div className="relative min-h-screen px-6 py-16 bg-gradient-to-tr from-black via-zinc-900 to-red-950 text-zinc-300 overflow-hidden">
      {/* Анимација и позадина */}
      <AnimatedBackground />

      {/* Содржина над анимацијата */}
      <div className="relative max-w-4xl mx-auto z-10">
        <h1 className="text-4xl font-bold text-red-600 mb-10 text-center">Kontakt</h1>

        <form className="bg-zinc-900 rounded-lg p-8 shadow-lg space-y-6 border border-red-700">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-red-500">
              Ime i Prezime
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-md border border-red-600 bg-black px-4 py-2 text-white placeholder-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              placeholder="Unesite vaše ime"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-red-500">
              Email adresa
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border border-red-600 bg-black px-4 py-2 text-white placeholder-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              placeholder="Unesite vaš email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-red-500">
              Poruka
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-md border border-red-600 bg-black px-4 py-2 text-white placeholder-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition resize-none"
              placeholder="Vaša poruka"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 px-6 rounded-md w-full"
          >
            Pošalji
          </button>
        </form>
      </div>
    </div>
  );
}
