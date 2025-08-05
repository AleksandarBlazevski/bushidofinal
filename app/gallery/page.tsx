"use client";

import Image from "next/image";
import { useState } from "react";

const images = Array.from({ length: 25 }, (_, i) => `img${i + 1}.jpg`);

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );

  return (
    <div className="px-4 py-8 bg-gradient-to-tr from-black via-zinc-900 to-red-950 min-h-screen text-zinc-300">
      {/* Naslov – Galerija */}
      <h1
        className="
          text-3xl md:text-4xl font-bold mb-8 text-center text-red-500 select-none
          drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]
          transition duration-300
          hover:drop-shadow-[0_0_14px_rgba(239,68,68,1)]
        "
      >
        Galerija
      </h1>

      {/* Galerija slika */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-xl shadow-lg cursor-pointer overflow-hidden transition-transform hover:scale-105 
              border-2 border-red-600 hover:shadow-[0_0_15px_4px_rgba(239,68,68,0.8)]"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={`/gallery/${img}`}
              alt={`Slika ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-[200px]"
            />
          </div>
        ))}
      </div>

      {/* Modal slika */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-6 text-white text-5xl font-bold z-60 drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            &times;
          </button>

          {/* Previous */}
          <button
            className="absolute left-6 text-white text-5xl font-bold z-60 px-4 py-2 hover:text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            &#8592;
          </button>

          {/* Selected image */}
          <div
            className="relative w-[90vw] max-w-[900px] h-[80vh] rounded-lg border-4 border-red-600 shadow-[0_0_25px_8px_rgba(239,68,68,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/gallery/${images[selectedIndex]}`}
              alt={`Slika ${selectedIndex + 1}`}
              fill
              sizes="(max-width: 900px) 90vw, 900px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-6 text-white text-5xl font-bold z-60 px-4 py-2 hover:text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
}
