export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 py-20 overflow-hidden bg-gradient-to-br from-red-900 via-red-700 to-black">
      {/* Dekorativni crveni blur kruzevi */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-red-600 opacity-30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-red-800 opacity-20 rounded-full blur-2xl" />

      {/* Glavna sodržina */}
      <h1 className="text-5xl font-bold text-red-400 mb-6 text-center z-10">
        Добродошли у Bushido San
      </h1>
      <p className="text-xl text-center max-w-3xl z-10 text-white/90">
        Званична страница карате клуба Bushido San. Тренинзи, такмичења и традиција.
      </p>
    </div>
  );
}
