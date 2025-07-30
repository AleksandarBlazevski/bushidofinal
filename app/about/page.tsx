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
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen px-6 py-16 bg-gradient-to-tr from-black via-zinc-900 to-red-950 text-zinc-300 overflow-hidden">
      {/* Анимација и позадина */}
      <AnimatedBackground />

      {/* Содржина која е над анимацијата */}
      <div className="relative max-w-5xl mx-auto z-10">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
          O nama
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          Karate klub "Bušido SAN", je osnovan 10.03.2020. godine. Osnivači su višegodišnji vežbači ove plemenite veštine. Naziv, tj. ime kluba, inspirisano je pre svega samim značenjem Bušido koda samuraja, dok SAN (jap. broj 3) predstavlja sinboličan broj od tri osnivača.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Stil koji se vežba u ovom klubu je redak u Srbiji, a on u sebi, pored karate tehnika, sadrži i elemente iz džudoa i điudžice.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Metodologija treninga bazira se pre svega na disciplini i pedagoškim vrednostima, dok ako govorimo o psiho-fizičkim veštinama, akcenat se pored tehnika, taktika i motoričkih vežbi, stavlja na jačanju mentalnog sklopa, samokontroli i strpljennu.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Moto ovog kluba je da se svakim treningom, odnosno, svakim danom, u svim segmentima života, karatista bude bolji od sebe, a ne od protivnika. OSS
        </p>

        <h2 className="text-3xl font-semibold text-red-500 mb-8 text-center">Naši treneri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-xl p-4 text-center shadow-md cursor-pointer select-none"
              onClick={() => toggleCard(index)}
            >
              <img
                src={trainer.imgSrc}
                alt={trainer.alt}
                className="w-full h-52 object-cover object-top rounded-lg mb-4 border border-red-600"
              />
              <h3 className="text-xl font-semibold text-red-500">
                {trainer.name} {trainer.rank && `- ${trainer.rank}`}
              </h3>
              {openIndex === index && (
                <p className="text-sm mt-2 text-gray-300 text-left">
                  {trainer.birthDate}, {trainer.birthPlace}.
                  <br />
                  {trainer.bio.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
