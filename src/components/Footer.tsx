"use client";

export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-black/80 backdrop-blur-md text-zinc-300 py-8 border-t border-red-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

        {/* Leva sekcija: info */}
        <div className="space-y-2">
          <h3 className="text-red-500 text-lg font-semibold">Bushido San Karate Klub</h3>
          <p>Wado-ryu karate škola, obogaćena elementima džudoa i džiu džicua.</p>
          <p className="text-zinc-400">Sportski tim · Novi Beograd, Srbija</p>
        </div>

        {/* Srednja sekcija: kontakt */}
        <div className="space-y-2">
          <h4 className="text-red-500 text-lg font-semibold">Kontakt</h4>
          <p>
            📍 Novi Beograd, Srbija
          </p>
          <p>
            📞 <a href="tel:+381645798126" className="hover:text-red-400 transition">+381 64 5798126</a>
          </p>
          <p>
            ✉️ <a href="mailto:bushido.san3@gmail.com" className="hover:text-red-400 transition">bushido.san3@gmail.com</a>
          </p>
        </div>

        {/* Desna sekcija: društvene mreže */}
        <div className="space-y-2">
          <h4 className="text-red-500 text-lg font-semibold">Društvene mreže</h4>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/_bushido_san_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-6 h-6 hover:opacity-70 transition"
              />
            </a>
            <a
              href="https://www.facebook.com/bushido.san.nbg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-6 h-6 hover:opacity-70 transition"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Donji red */}
      <div className="mt-8 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} Bushido San Karate Klub. Sva prava zadržana.
      </div>
    </footer>
  );
}
