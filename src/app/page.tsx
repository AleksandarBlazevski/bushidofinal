export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 py-20 overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-red-950">
      {/* Подобрен декор – црвени светлосни ореоли */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-600 opacity-30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-800 opacity-25 rounded-full blur-[100px] pointer-events-none" />

      {/* Главна содржина */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400 mb-6 text-center z-10 drop-shadow-lg">
        Добродошли у Bushido San
      </h1>
      <p className="text-lg md:text-xl text-zinc-200 text-center max-w-3xl z-10">
        Званична страница карате клуба Bushido San. Тренинзи, такмичења и традиција.
      </p>
    </div>
  );
}
