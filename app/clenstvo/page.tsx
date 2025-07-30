"use client";

import { useState } from "react";

export default function ClanstvoForm() {
  const [form, setForm] = useState({
    ime: "",
    prezime: "",
    godina: "",
    email: "",
    telefon: "",
    poruka: "",
  });

  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.ime || !form.prezime || !form.godina || !form.email || !form.telefon) {
      setStatus({ type: "error", message: "Molimo popunite sva obavezna polja." });
      return;
    }

    // Ovde možeš dodati poziv ka backend-u za čuvanje podataka

    setStatus({ type: "success", message: "Uspešno ste se prijavili!" });

    setForm({
      ime: "",
      prezime: "",
      godina: "",
      email: "",
      telefon: "",
      poruka: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto space-y-6 bg-zinc-900 p-8 rounded-xl shadow-lg border border-red-600 text-white"
    >
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Prijava za članstvo</h1>

      <div>
        <label htmlFor="ime" className="block mb-1 font-semibold">
          Ime:
        </label>
        <input
          type="text"
          id="ime"
          name="ime"
          value={form.ime}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white"
        />
      </div>

      <div>
        <label htmlFor="prezime" className="block mb-1 font-semibold">
          Prezime:
        </label>
        <input
          type="text"
          id="prezime"
          name="prezime"
          value={form.prezime}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white"
        />
      </div>

      <div>
        <label htmlFor="godina" className="block mb-1 font-semibold">
          Godina rođenja:
        </label>
        <input
          type="number"
          id="godina"
          name="godina"
          value={form.godina}
          onChange={handleChange}
          required
          min={1900}
          max={new Date().getFullYear()}
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 font-semibold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white"
        />
      </div>

      <div>
        <label htmlFor="telefon" className="block mb-1 font-semibold">
          Telefon:
        </label>
        <input
          type="tel"
          id="telefon"
          name="telefon"
          value={form.telefon}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white"
        />
      </div>

      <div>
        <label htmlFor="poruka" className="block mb-1 font-semibold">
          Poruka (opciono):
        </label>
        <textarea
          id="poruka"
          name="poruka"
          value={form.poruka}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition-colors"
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
