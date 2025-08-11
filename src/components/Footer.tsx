"use client";

export default function Footer() {
  return (
    <footer
      className="relative z-10 w-full bg-black/30 backdrop-blur-sm text-zinc-200 py-3 md:py-5 border-t border-red-700 font-sans"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-7">
        {/* Лого и текст */}
        <div className="flex items-center gap-4 md:gap-5 flex-shrink-0 max-w-xs">
          <img
            src="/logo.png"
            alt="Bushido San Logo"
            className="h-14 max-h-14 max-w-[130px] object-contain cursor-pointer transition-shadow duration-300 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.9)]"
          />
          <div className="space-y-1 leading-snug">
            <h3
              className="text-red-500 text-base md:text-lg font-semibold leading-tight
                transition-colors duration-300 cursor-pointer hover:text-red-400 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.9)]"
            >
              Karate Klub
              <br />
              BUSHIDO SAN
            </h3>
            <p className="text-sm md:text-base">
              Wado-ryu karate škola, sa elementima džudoa i džiu-džicue.
            </p>
            <p className="text-sm md:text-base">Sportski tim · Novi Beograd, Srbija</p>
          </div>
        </div>

        {/* Контакт, друштвени мрежи и NGC секција */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-7 w-full max-w-3xl justify-between text-base md:text-lg">
          {/* Контакт */}
          <div className="space-y-2 text-center md:text-left min-w-[180px]">
            <h4
              className="text-red-500 font-semibold mb-2
                transition-colors duration-300 cursor-pointer hover:text-red-400 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.9)]"
            >
              Kontakt
            </h4>
            <p>
              📍{" "}
              <a
                href="https://www.google.com/maps?q=Bulevar+Arsenija+Čarnojevića+165,+Novi+Beograd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(239,68,68,0.7)] break-words"
              >
                Bulevar Arsenija Čarnojevića 165 (Puls Fitness)
              </a>
            </p>
            <p>
              📞{" "}
              <a
                href="tel:+381645798126"
                className="hover:text-red-400 transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(239,68,68,0.7)] break-words"
              >
                +381 64 5798126
              </a>
            </p>
            <p>
              ✉️{" "}
              <a
                href="mailto:bushido.san3@gmail.com"
                className="hover:text-red-400 transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(239,68,68,0.7)] break-words"
              >
                bushido.san3@gmail.com
              </a>
            </p>
          </div>

          {/* Друштвени мрежи */}
          <div className="space-y-2 text-center md:text-left min-w-[140px]">
            <h4
              className="text-red-500 font-semibold mb-2
                transition-colors duration-300 cursor-pointer hover:text-red-400 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.9)]"
            >
              Društvene mreže
            </h4>
            <div className="flex items-center justify-center md:justify-start gap-6">
              <a
                href="https://www.instagram.com/_bushido_san_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-70 transition-opacity duration-300 hover:drop-shadow-[0_0_5px_rgba(239,68,68,0.7)]"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="w-7 h-7"
                />
              </a>
              <a
                href="https://www.facebook.com/bushido.san.nbg/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-70 transition-opacity duration-300 hover:drop-shadow-[0_0_5px_rgba(239,68,68,0.7)]"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  className="w-7 h-7"
                />
              </a>
            </div>
          </div>

          {/* NGC лого и текст */}
          <div className="flex flex-col items-center md:items-end text-center min-w-[140px] group">
            <a
              href="https://www.ngc.mk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img
                src="/ngc-logo.png"
                alt="NGC - Next Generation Code"
                className="h-12 max-h-12 max-w-[150px] w-auto mb-1 cursor-pointer transition-opacity duration-300 group-hover:opacity-80 group-hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.9)]"
              />
              <p className="text-sm font-semibold text-zinc-300 tracking-wide transition duration-300 group-hover:text-red-400 group-hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.8)]">
                Next Generation Code
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Донен ред со авторски права */}
      <div className="mt-5 md:mt-6 text-center text-sm text-zinc-400">
        &copy; {new Date().getFullYear()} Bushido San Karate Klub. Sva prava zadržana.
      </div>
    </footer>
  );
}
