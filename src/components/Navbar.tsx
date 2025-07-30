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
    <nav className="bg-zinc-900 text-white shadow-md border-b border-red-600">
      <div className="w-full px-0 py-4 flex justify-between items-center">
        {/* Лого и текст – скроз лево и поголемо */}
        <div className="flex items-center space-x-3 pl-4">
          <Link href="/">
            <img
              src="/logosku.png"
              alt="Bushido San Logo"
              className="w-20 max-h-16 object-contain cursor-pointer"
            />
          </Link>
          <Link href="/">
            <span className="text-3xl font-bold text-red-600 select-none cursor-pointer">
              Bushido San
            </span>
          </Link>
        </div>

        {/* Навигација десно – поголем фонт */}
        <ul className="flex space-x-6 text-base md:text-lg font-medium pr-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-red-500 transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
