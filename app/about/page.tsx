"use client";

import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";

interface Trainer {
  name: string;
  rank?: string;
  birthDate: string;
  birthPlace: string;
  bio: string[];
  imgSrc: string;
  alt: string;
}

const trainers: Trainer[] = [
  {
    name: "Marko Makić",
    rank: "1.Dan",
    birthDate: "09.01.1998.",
    birthPlace: "Beograd",
    bio: [
      "Prvi put počinje da trenira već 2006. godine.",
      "Osvajač je mnogobrojnih kako domaćih, tako i međunarodnih medalja.",
      "2020. godine stiče licencu za trenera i ispitivača u karateu.",
      "Godine 2022. postaje seniorski šampion sveta u borbama, a 2023. godine u Kataniji (ITA), osvaja srebrnu medalju na prvenstvu evrope.",
      "Živi, studira i radi u Beogradu.",
      "Predsednik je kluba i dalje aktivni reprezentativac Srbije u borbama. Veoma posvećen, uporan, smiren i strpljiv, ali žestok momak.",
    ],
    imgSrc: "/trainers/marko.jpg",
    alt: "Marko Makić",
  },
  {
    name: "Uroš Jovanović",
    rank: "1.Dan",
    birthDate: "21.07.2001.",
    birthPlace: "Beograd",
    bio: [
      "Karateom se bavi od 2009. godine.",
      "Višestruki je osvajač domaćih i inostranih odličja.",
      "Za najuspešnijeg takmičara dobija priznanje 2012. i 2019. godine.",
      "Internacionalni je sudija.",
      "Živi, studira i radi u Beogradu.",
      "Pored zvanične funkcije potpredsednika kluba, Uroš je i glavni 'stub' za sva tehnička pitanja. Odgovoran, sposoban i uvek spreman za sve izazove. Stabilan.",
    ],
    imgSrc: "/trainers/uros.jpg",
    alt: "Uroš Jovanović",
  },
  {
    name: "Aleksandar Makić SENSEI",
    rank: "3.Dan",
    birthDate: "13.01.1986.",
    birthPlace: "Beograd",
    bio: [
      "U karateu je od 1993. godine.",
      "Osvajao je kroz karijeru mnogo medalja, od kojih su tri donete sa svetskih prventava.",
      "U sudijskum 'vodama' je od 2007. godine, a 2019. i 2022. godine imenovan je za predsedika organizacionih međunarodnih takmičenja koja su se održala u Beogradu.",
      "Diplomirani je trener borilačkih veština.",
      "Živi i radi u Beogradu. Oženjen, otac jednog deteta.",
      "Ponosan je na posebnu funkciju u klubu, a to je - prijatelj kluba.",
    ],
    imgSrc: "/trainers/aleksandar.jpg",
    alt: "Aleksandar Makić",
  },
  {
    name: "Ana Ranđelović",
    birthDate: "25.07.2002.",
    birthPlace: "Beograd",
    bio: [
      "Nosilac je crnog pojasa – 1. dan.",
      "Osvajač je mnogobrojnih domaćih i međunarodnih medalja.",
      "Internacionalni je sudija SKU i WKC organizacija.",
      "Aktivno radi kao trener u klubu.",
    ],
    imgSrc: "/trainers/ana.jpg",
    alt: "Ana Ranđelović",
  },
];

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative min-h-screen px-6 py-16 bg-gradient-to-tr from-black via-zinc-900 to-red-950 text-zinc-300 overflow-hidden">
      <AnimatedBackground />
      <div className="relative max-w-6xl mx-auto z-10">
        <h1
          className="text-6xl font-extrabold text-red-600 mb-12 text-center tracking-wide
          transition-colors duration-300 cursor-pointer hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]"
        >
          O nama
        </h1>

        {[
          `Karate klub `,
          `Stil koji se vežba u ovom klubu je redak u Srbiji, a on u sebi, pored karate tehnika, sadrži i elemente iz džudoa i điudžice.`,
          `Metodologija treninga bazira se pre svega na disciplini i pedagoškim vrednostima, dok ako govorimo o psiho-fizičkim veštinama, akcenat se pored tehnika, taktika i motoričkih vežbi, stavlja na jačanju mentalnog sklopa, samokontroli i strpljenju.`,
          `Moto ovog kluba je da se svakim treningom, odnosno, svakim danom, u svim segmentima života, karatista bude bolji od sebe, a ne od protivnika. OSS`,
        ].map((text, i) => (
          <p
            key={i}
            className="text-xl leading-relaxed mb-8 max-w-4xl mx-auto text-zinc-300"
          >
            {i === 0 ? (
              <>
                Karate klub{" "}
                <span className="font-semibold text-red-500">Bušido SAN</span>, je
                osnovan 10.03.2020. godine. Osnivači su višegodišnji vežbači ove
                plemenite veštine. Naziv, tj. ime kluba, inspirisano je pre svega
                samim značenjem Bušido koda samuraja, dok SAN (jap. broj 3)
                predstavlja simboličan broj od tri osnivača.
              </>
            ) : (
              text
            )}
          </p>
        ))}

        <h2 className="text-4xl font-extrabold text-red-500 mb-12 text-center tracking-wide">
          Naši treneri
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              className={`bg-zinc-800 rounded-2xl p-8 cursor-pointer select-none shadow-lg transition-shadow duration-300 flex flex-col items-center
                hover:shadow-[0_0_15px_4px_rgba(239,68,68,0.7)]`}
              style={{ minHeight: "510px" }}
            >
              <img
                src={trainer.imgSrc}
                alt={trainer.alt}
                className="w-full h-64 object-cover rounded-xl border-2 border-red-600 mb-6"
                loading="lazy"
                style={{ objectPosition: "center top" }}
              />
              <h3 className="text-3xl font-extrabold text-red-500 mb-4 text-center break-words whitespace-normal leading-tight">
                {trainer.name}{" "}
                {trainer.rank && (
                  <span className="text-red-400 font-semibold text-xl">
                    - {trainer.rank}
                  </span>
                )}
              </h3>

              {openIndex === index ? (
                <div
                  className="text-zinc-300 text-lg leading-relaxed max-w-xs text-center"
                  style={{ transition: "all 0.3s ease" }}
                >
                  <p className="mb-3 font-semibold">
                    Rođen: {trainer.birthDate}, {trainer.birthPlace}
                  </p>
                  {trainer.bio.map((line, i) => (
                    <p key={i} className="mb-3">
                      {line}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-lg text-zinc-400 italic max-w-xs text-center select-none">
                  Klikni za detalje
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Dodatna sekcija za termine treninga */}
        <section className="mt-16 max-w-4xl mx-auto bg-zinc-900 bg-opacity-70 rounded-2xl p-6 border border-red-600 shadow-md text-center text-zinc-300">
          <h2 className="text-3xl font-extrabold text-red-500 mb-6">
            Termini treninga
          </h2>
          <p className="mb-8 font-semibold text-lg">Od 1. septembra 2025. godine</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg font-medium">
            <div className="hover:text-red-500 transition cursor-default">
              <p>📅 <strong>Ponedeljak</strong> u 18:30h</p>
              <p>📍 Hala sportova, Pariske komune 20</p>
            </div>
            <div className="hover:text-red-500 transition cursor-default">
              <p>📅 <strong>Utorak</strong> u 18:30h</p>
              <p>📍 Puls Fitness, Bulevar Arsenija Čarnojevića 165</p>
            </div>
            <div className="hover:text-red-500 transition cursor-default">
              <p>📅 <strong>Četvrtak</strong> u 20:00h</p>
              <p>📍 Hala sportova, Pariske komune 20</p>
            </div>
            <div className="hover:text-red-500 transition cursor-default">
              <p>📅 <strong>Petak</strong> u 18:30h</p>
              <p>📍 Puls Fitness, Bulevar Arsenija Čarnojevića 165</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
