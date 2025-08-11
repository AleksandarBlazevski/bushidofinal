"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/about", label: "O nama" },
  { href: "/gallery", label: "Galerija" },
  { href: "/clenstvo", label: "Učlanjenje" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="bg-zinc-900 text-white shadow-md border-b border-red-600"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      <div className="flex items-center justify-between py-4 pl-0 pr-4 md:pr-8">
        {/* Лого и Bushido San - буквално скроз лево */}
        <Link href="/" className="flex items-center space-x-4 flex-shrink-0 ml-0">
          <img
            src="/logosku.png"
            alt="Bushido San Logo"
            className="w-24 max-h-16 object-contain cursor-pointer transition-shadow duration-300 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.9)]"
          />
          <span
            className="
              text-3xl font-bold text-white select-none
              drop-shadow-[2px_2px_4px_rgba(0,0,0,0.85)]
              transition duration-300 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]
            "
          >
            Bushido San
          </span>
        </Link>

        {/* Desktop мени - скроз десно */}
        <ul className="hidden md:flex space-x-6 text-base md:text-lg font-medium whitespace-nowrap">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="hover:text-red-500 transition-colors duration-300 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Мобилен toggle копче */}
        <button
          className="md:hidden flex items-center justify-center p-3 border border-white rounded-lg text-white hover:text-red-500 hover:border-red-500 transition focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 7h18" />
                <path d="M3 12h18" />
                <path d="M3 17h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Мобилно мени */}
      <div
        className={`md:hidden bg-zinc-800 border-t border-red-600 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="space-y-4 px-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block text-white text-lg hover:text-red-500 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
