export default function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white shadow-md border-b border-red-600">
      <div className="w-full px-0 py-4 flex justify-between items-center">
        {/* Лого и текст – скроз лево и поголемо */}
        <div className="flex items-center space-x-3 pl-4">
          <img
            src="/logosku.png"
            alt="Bushido San Logo"
            className="w-20 max-h-16 object-contain"
          />
          <span className="text-3xl font-bold text-red-600 select-none">
            Bushido San
          </span>
        </div>

        {/* Навигација десно – поголем фонт */}
        <ul className="flex space-x-6 text-base md:text-lg font-medium pr-6">
          <li><a href="/" className="hover:text-red-500 transition-colors">Početna</a></li>
          <li><a href="/about" className="hover:text-red-500 transition-colors">O nama</a></li>
          <li><a href="/gallery" className="hover:text-red-500 transition-colors">Galerija</a></li>
          <li><a href="/contact" className="hover:text-red-500 transition-colors">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
}
