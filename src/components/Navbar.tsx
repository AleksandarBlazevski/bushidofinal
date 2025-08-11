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
      <div className="w-full flex justify-between items-center py-4 px-0 md:px-4">
        {/* Лого и текст */}
        <div className="flex items-center space-x-3 flex-shrink-0 pl-4 md:pl-0">
          <Link href="/">
            <img
              src="/logosku.png"
              alt="Bushido San Logo"
              className="w-20 max-h-16 object-contain cursor-pointer transition-shadow duration-300 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.9)]"
            />
          </Link>
          <Link href="/">
            <span
              className="
                text-3xl font-bold text-white select-none cursor-pointer
                drop-shadow-[2px_2px_4px_rgba(0,0,0,0.85)]
                transition duration-300
                hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]
              "
            >
              Bushido San
            </span>
          </Link>
        </div>

        {/* Мени за десктоп */}
        <ul className="hidden md:flex space-x-6 text-base md:text-lg font-medium max-w-[calc(100%-240px)] overflow-x-auto pr-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="
                  hover:text-red-500 transition-colors duration-300
                  hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]
                  whitespace-nowrap
                "
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger за мобилен */}
        <button
          className="md:hidden flex items-center px-4 py-2 border border-white rounded text-white hover:text-red-500 hover:border-red-500 transition mr-4 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.3 5.71a1 1 0 00-1.41-1.42L12 9.17 7.11 4.29A1 1 0 105.7 5.7L10.59 10.6 5.7 15.5a1 1 0 001.41 1.42L12 12.83l4.89 4.89a1 1 0 001.41-1.42l-4.88-4.89 4.89-4.89z"
              />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Мобилно мени - анимирано */}
      <div
        className={`md:hidden bg-zinc-800 border-t border-red-600 overflow-auto transition-max-height duration-300 ease-in-out px-4 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="space-y-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="
                  block text-white text-lg
                  hover:text-red-500
                  transition-colors duration-300
                "
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
