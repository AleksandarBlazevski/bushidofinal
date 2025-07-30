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
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Галерија</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={`/gallery/${img}`}
              alt={`Слика ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-[200px]"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-6 text-white text-4xl font-bold z-60"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            &times;
          </button>

          <button
            className="absolute left-6 text-white text-4xl font-bold z-60 px-4 py-2 hover:text-red-500"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            &#8592;
          </button>

          <div
            className="relative w-[90vw] max-w-[900px] h-[80vh] rounded-lg border-2 border-red-700 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/gallery/${images[selectedIndex]}`}
              alt={`Слика ${selectedIndex + 1}`}
              fill
              sizes="(max-width: 900px) 90vw, 900px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          <button
            className="absolute right-6 text-white text-4xl font-bold z-60 px-4 py-2 hover:text-red-500"
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
