"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok) {
        setStatus("Poruka je uspešno poslata.");
        e.currentTarget.reset();
      } else {
        setStatus(json.error || "Greška prilikom slanja.");
      }
    } catch {
      setStatus("Greška prilikom povezivanja sa serverom.");
    }
  }

  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-tr from-black via-zinc-900 to-red-950 text-zinc-300 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-10 text-center">Kontakt</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 rounded-lg p-8 shadow-lg space-y-6 border border-red-700"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-red-500">
              Ime i prezime
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-red-600 bg-black px-4 py-2 text-white placeholder-red-400 focus:ring-red-500 outline-none transition"
              placeholder="Unesite ime"
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
              required
              className="w-full rounded-md border border-red-600 bg-black px-4 py-2 text-white placeholder-red-400 focus:ring-red-500 outline-none transition"
              placeholder="Unesite email"
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
              required
              className="w-full rounded-md border border-red-600 bg-black px-4 py-2 text-white placeholder-red-400 focus:ring-red-500 outline-none transition resize-none"
              placeholder="Vaša poruka"
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 px-6 rounded-md w-full"
          >
            Pošalji
          </button>
        </form>
        {status && <p className="mt-4 text-center text-red-500">{status}</p>}
      </div>
    </div>
  );
}
