"use client";

import AnimatedBackground from "@/components/AnimatedBackground";

export default function GalerijaPage() {
  const images = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
  ];

  return (
    <div className="relative min-h-screen px-6 py-16 bg-gradient-to-tr from-black via-zinc-900 to-red-950 text-zinc-300 overflow-hidden">
      {/* Анимација и позадина */}
      <AnimatedBackground />

      <div className="relative max-w-6xl mx-auto z-10">
        <h1 className="text-4xl font-bold text-red-600 text-center mb-10">Galerija</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg border border-red-800">
              <img
                src={src}
                alt={`Slika ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
