"use client";

export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-black/80 backdrop-blur-md text-zinc-300 py-8 border-t border-red-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Лого и текст блиску */}
        <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
          <img src="/logo.png" alt="Bushido San Logo" className="h-20 object-contain" />
          <div className="space-y-1 leading-snug max-w-xs">
            <h3 className="text-red-500 text-lg font-semibold">Bushido San Karate Klub</h3>
            <p>Wado-ryu karate škola, obogaćena elementima džudoa i džiu džicua.</p>
            <p>Sportski tim · Novi Beograd, Srbija</p>
          </div>
        </div>

        {/* Контакт и друштвени мрежи во ист ред */}
        <div className="flex items-center gap-12 flex-wrap justify-center md:justify-start w-full max-w-xl">

          {/* Kontakt */}
          <div className="space-y-1 text-center md:text-left min-w-[180px]">
            <h4 className="text-red-500 text-lg font-semibold mb-2">Kontakt</h4>
            <p>
              📍{" "}
              <a
                href="https://www.google.com/maps?q=Bulevar+Arsenija+Čarnojevića+165,+Novi+Beograd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition"
              >
                Bulevar Arsenija Čarnojevića 165 (Pils Fitness)
              </a>
            </p>
            <p>
              📞 <a href="tel:+381645798126" className="hover:text-red-400 transition">+381 64 5798126</a>
            </p>
            <p>
              ✉️ <a href="mailto:bushido.san3@gmail.com" className="hover:text-red-400 transition">bushido.san3@gmail.com</a>
            </p>
          </div>

          {/* Društvene mreže */}
          <div className="space-y-1 text-center md:text-left min-w-[180px]">
            <h4 className="text-red-500 text-lg font-semibold mb-2">Društvene mreže</h4>
            <div className="flex items-center justify-center md:justify-start gap-6">
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
      </div>

      {/* Donji red */}
      <div className="mt-4 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} Bushido San Karate Klub. Sva prava zadržana.
      </div>

      {/* NGC logo i tekst */}
      <div className="mt-4 text-center flex flex-col items-center gap-2">
        <a href="https://www.ngc.mk/" target="_blank" rel="noopener noreferrer" className="inline-block">
          <img
            src="/ngc-logo.png"
            alt="NGC - Next Generation Code"
            className="h-12 cursor-pointer hover:opacity-80 transition"
          />
        </a>
        <span className="text-xs text-zinc-500 select-none">Izradio NGC</span>
      </div>
    </footer>
  );
}
