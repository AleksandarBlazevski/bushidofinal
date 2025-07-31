"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/about", label: "O nama" },
  { href: "/gallery", label: "Galerija" },
  { href: "/clenstvo", label: "Učlanjenje" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  return (
    <nav
      className="bg-zinc-900 text-white shadow-md border-b border-red-600"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      <div className="w-full px-0 py-4 flex justify-between items-center">
        {/* Лого и текст – скроз лево и поголемо */}
        <div className="flex items-center space-x-3 pl-4">
          <Link href="/">
            <img
              src="/logosku.png"
              alt="Bushido San Logo"
              className="w-20 max-h-16 object-contain cursor-pointer transition-shadow duration-300 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.9)]"
            />
          </Link>
          <Link href="/">
            <span
              className="text-3xl font-bold text-red-600 select-none cursor-pointer
                transition-colors duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]"
            >
              Bushido San
            </span>
          </Link>
        </div>

        {/* Навигација десно – поголем фонт */}
        <ul className="flex space-x-6 text-base md:text-lg font-medium pr-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="hover:text-red-500 transition-colors duration-300 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]"
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
