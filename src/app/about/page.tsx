'use client';

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
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
          {/* Marko Makić */}
          <div className="bg-zinc-900 rounded-xl p-4 text-center shadow-md">
            <img
              src="/trainers/marko.jpg"
              alt="Marko Makić"
              className="w-full h-52 object-cover rounded-lg mb-4 border border-red-600"
            />
            <h3 className="text-xl font-semibold text-red-500">Marko Makić - 1.Dan</h3>
            <p className="text-sm mt-2 text-gray-300 text-left">
              Rođen 09.01.1998. godine u Beogradu.<br />
              Prvi put počinje da trenira već 2006. godine. Osvajač je mnogobrojnih kako domaćih, tako i međunarodnih medalja.<br />
              2020. godine stiče licencu za trenera i ispitivača u karateu.<br />
              Godine 2022. postaje seniorski šampion sveta u borbama, a 2023. godine u Kataniji (ITA), osvaja srebrnu medalju na prvenstvu evrope.<br />
              Živi, studira i radi u Beogradu.<br />
              <strong>p.s.</strong> Predsednik je kluba i dalje aktivni reprezentativac Srbije u borbama. Veoma posvećen, uporan, smiren i strpljiv, ali žestok momak.
            </p>
          </div>

          {/* Uroš Jovanović */}
          <div className="bg-zinc-900 rounded-xl p-4 text-center shadow-md">
            <img
              src="/trainers/uros.jpg"
              alt="Uroš Jovanović"
              className="w-full h-52 object-cover rounded-lg mb-4 border border-red-600"
            />
            <h3 className="text-xl font-semibold text-red-500">Uroš Jovanović - 1.Dan</h3>
            <p className="text-sm mt-2 text-gray-300 text-left">
              Rođen 21.07.2001. godine u Beogradu.<br />
              Karateom se bavi od 2009. godine. Višestruki je osvajač domaćih i inostranih odličja.<br />
              Za najuspešnijeg takmičara dobija priznanje 2012. i 2019. godine.<br />
              Internacionalni je sudija.<br />
              Živi, studira i radi u Beogradu.<br />
              <strong>p.s.</strong> Pored zvanične funkcije potpredsednika kluba, Uroš je i glavni "stub" za sva tehnička pitanja. Odgovoran, sposoban i uvek spreman za sve izazove. Stabilan.
            </p>
          </div>

          {/* Aleksandar Makić */}
          <div className="bg-zinc-900 rounded-xl p-4 text-center shadow-md">
            <img
              src="/trainers/aleksandar.jpg"
              alt="Aleksandar Makić"
              className="w-full h-52 object-cover rounded-lg mb-4 border border-red-600"
            />
            <h3 className="text-xl font-semibold text-red-500">Aleksandar Makić SENSEI - 3.Dan</h3>
            <p className="text-sm mt-2 text-gray-300 text-left">
              Rođen 13.01.1986. godine u Beogradu.<br />
              U karateu je od 1993. godine.<br />
              Osvajao je kroz karijeru mnogo medalja, od kojih su tri donete sa svetskih prventava.<br />
              U sudijskum "vodama" je od 2007. godine, a 2019. i 2022. godine imenovan je za predsedika organizacionih međunarodnih takmičenja koja su se održala u Beogradu.<br />
              Diplomirani je trener borilačkih veština.<br />
              Živi i radi u Beogradu. Oženjen, otac jednog deteta.<br />
              <strong>p.s.</strong> Ponosan je na posebnu funkciju u klubu, a to je - prijatelj kluba.
            </p>
          </div>

          {/* Ana Ristić */}
          <div className="bg-zinc-900 rounded-xl p-4 text-center shadow-md flex flex-col items-center justify-center">
            <img
              src="/trainers/ana.jpg"
              alt="Ana Ristić"
              className="w-full h-52 object-cover rounded-lg mb-4 border border-red-600"
            />
            <h3 className="text-xl font-semibold text-red-500">Ana Ristić</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
