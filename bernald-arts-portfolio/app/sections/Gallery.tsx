"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  "/images/gallery/IMG_20230305_144727_290.jpg",
  "/images/gallery/IMG-20240721-WA0040.jpg",
  "/images/gallery/IMG-20240723-WA0048.jpg",
  "/images/gallery/IMG-20240926-WA0001.jpg",
  "/images/gallery/IMG_20260225_100436_892.jpg",
  "/images/gallery/IMG_20260225_100439_745.jpg",
  "/images/gallery/IMG_20260225_100442_146.jpg",
  "/images/gallery/IMG_20260225_100444_307.jpg",
  "/images/gallery/IMG_20260225_100446_588.jpg",
  "/images/gallery/IMG_20260225_100448_730.jpg",
];

// Duplicate for seamless looping
const ROW_1 = [...IMAGES, ...IMAGES];
const ROW_2 = [...IMAGES.slice().reverse(), ...IMAGES.slice().reverse()];

// Native CSS gradient for the Black & Gold Caution Tape effect
const CAUTION_TAPE_STYLE = {
  backgroundImage: "repeating-linear-gradient(-45deg, #000, #000 20px, #D4AF37 20px, #D4AF37 40px)",
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedImage]);

  return (
    <>
      {/* NATIVE CSS ANIMATIONS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slide-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: slide-left 35s linear infinite;
        }
        .marquee-right {
          animation: slide-right 40s linear infinite;
        }
        .marquee-left:hover, .marquee-right:hover {
          animation-play-state: paused;
        }
      `}} />

      <section id="gallery" className="relative bg-white pt-5 pb-5 overflow-hidden">
        
        {/* TOP CAUTION TAPE BORDER */}
        <div 
          className="absolute top-0 left-0 w-full h-4 md:h-6 z-10 shadow-md border-b-2 border-black"
          style={CAUTION_TAPE_STYLE} 
        />

        <div className="py-20 md:py-24">
          {/* ROW 1 (Moves Left) */}
          <div className="overflow-hidden mb-6 md:mb-8">
            <div className="flex gap-4 md:gap-6 w-[max-content] marquee-left">
              {ROW_1.map((image, index) => (
                <div
                  key={`r1-${index}`}
                  onClick={() => setSelectedImage(image)}
                  className="group relative cursor-pointer flex-shrink-0 w-[240px] h-[320px] md:w-[320px] md:h-[420px] overflow-hidden bg-black/5"
                >
                  <Image
                    src={image}
                    alt={`Gallery Image ${index}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 border-[2px] border-[black]"
                    sizes="(max-width: 768px) 240px, 320px"
                  />
                  {/* Hover Frame */}
                  <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-[#D4AF37] transition-colors duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 (Moves Right) */}
          <div className="overflow-hidden">
            <div className="flex gap-4 md:gap-6 w-[max-content] marquee-right">
              {ROW_2.map((image, index) => (
                <div
                  key={`r2-${index}`}
                  onClick={() => setSelectedImage(image)}
                  className="group relative cursor-pointer flex-shrink-0 w-[240px] h-[320px] md:w-[320px] md:h-[420px] overflow-hidden bg-black/5"
                >
                  <Image
                    src={image}
                    alt={`Gallery Image ${index}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 border-[2px] border-[black]"
                    sizes="(max-width: 768px) 240px, 320px"
                  />
                  {/* Hover Frame */}
                  <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-[#D4AF37] transition-colors duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM CAUTION TAPE BORDER */}
        <div 
          className="absolute bottom-0 left-0 w-full h-4 md:h-6 z-10 shadow-md border-t-2 border-black"
          style={CAUTION_TAPE_STYLE} 
        />

      </section>

      {/* FULLSCREEN MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center cursor-pointer p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-8 text-white/50 hover:text-white uppercase tracking-widest text-xs font-bold transition-colors">
            Close [X]
          </button>
          
          <div className="relative w-full max-w-5xl h-[85vh]">
            <Image
              src={selectedImage}
              alt="Fullscreen view"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}