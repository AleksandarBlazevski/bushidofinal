export default function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white shadow-md border-b border-red-600">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">Bushido San</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="/" className="hover:text-red-500">Početna</a></li>
          <li><a href="/about" className="hover:text-red-500">O nama</a></li>
          <li><a href="/gallery" className="hover:text-red-500">Galerija</a></li>
          <li><a href="/contact" className="hover:text-red-500">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
}
