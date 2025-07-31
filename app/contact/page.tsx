"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    ime: "",
    email: "",
    poruka: "",
  });

  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.ime || !form.email || !form.poruka) {
      setStatus({ type: "error", message: "Molimo popunite sva polja." });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Poruka je uspešno poslata." });
        setForm({ ime: "", email: "", poruka: "" });
      } else {
        const json = await res.json();
        setStatus({ type: "error", message: json.error || "Greška prilikom slanja." });
      }
    } catch {
      setStatus({ type: "error", message: "Greška prilikom povezivanja sa serverom." });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        max-w-3xl mx-auto space-y-6 bg-zinc-900 p-8 rounded-2xl border border-red-600 text-white mt-10
        shadow-lg transition-shadow duration-300
        hover:shadow-[0_0_20px_4px_rgba(239,68,68,0.8)]
        cursor-pointer
      "
    >
      <h1
        className="text-3xl font-bold text-red-600 mb-6 text-center select-none
          transition duration-300
          hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.8)]"
      >
        Kontakt
      </h1>

      <div>
        <label
          htmlFor="ime"
          className="block mb-1 font-semibold
            transition duration-300
            hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] cursor-text"
        >
          Ime i prezime:
        </label>
        <input
          type="text"
          id="ime"
          name="ime"
          value={form.ime}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white
            transition duration-300
            hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.7)] focus:drop-shadow-[0_0_12px_rgba(255,0,0,0.9)] outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-1 font-semibold
            transition duration-300
            hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] cursor-text"
        >
          Email adresa:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white
            transition duration-300
            hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.7)] focus:drop-shadow-[0_0_12px_rgba(255,0,0,0.9)] outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="poruka"
          className="block mb-1 font-semibold
            transition duration-300
            hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] cursor-text"
        >
          Poruka:
        </label>
        <textarea
          id="poruka"
          name="poruka"
          value={form.poruka}
          onChange={handleChange}
          rows={5}
          required
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white resize-none
            transition duration-300
            hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.7)] focus:drop-shadow-[0_0_12px_rgba(255,0,0,0.9)] outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition-colors duration-300
          hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]"
      >
        Pošalji
      </button>

      {status && (
        <p
          className={`mt-4 text-center font-semibold ${
            status.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
