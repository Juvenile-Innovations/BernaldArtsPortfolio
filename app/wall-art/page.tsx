"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { spaceGrotesk, shareTechMono } from "@/app/lib/fonts";
import { IconArrowLeft } from "@tabler/icons-react";

const wallArtImages = [
  { src: "/images/services/wall_art/wall_art_1.jpg", alt: "Large Scale Mural Integration", size: "large" },
  { src: "/images/services/wall_art/wall_art_2.jpg", alt: "Aerosol Polymer Work", size: "medium" },
  { src: "/images/services/wall_art/wall_art_3.jpg", alt: "Structural Surface Mapping", size: "medium" },
  { src: "/images/services/wall_art/wall_art_4.jpg", alt: "Environment-Specific Design", size: "large" },
  { src: "/images/services/wall_art/wall_art_5.jpg", alt: "Architectural Scale Art", size: "wide" },
  // Adding two gallery images to complete the masonry grid beautifully
  { src: "/images/gallery/gallery_3.jpg", alt: "Exhibition Feature", size: "medium" },
  { src: "/images/gallery/gallery_8.jpg", alt: "Textural Detail", size: "medium" },
];

export default function WallArtGallery() {
  return (
    <div className="min-h-screen bg-black w-full pb-32">
      
      {/* Fixed Top Rectangular Navigation Button */}
      <div className="fixed top-0 left-0 w-full z-[100] p-4 md:p-6 flex justify-center pointer-events-none">
        <Link 
          href="/" 
          className={`pointer-events-auto flex items-center justify-between w-full max-w-[1400px] h-14 md:h-16 px-6 md:px-10 rounded-2xl md:rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl text-white hover:bg-neutral-900 hover:border-[#d4af37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] ${shareTechMono.className}`}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <IconArrowLeft size={20} stroke={2} className="text-[#d4af37]" />
            <span className="text-[10px] md:text-sm uppercase tracking-[0.2em] font-bold">Return to Portfolio</span>
          </div>
          <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500">
            Wall Art Gallery
          </span>
        </Link>
      </div>

      {/* Hero Title */}
      <section className="relative w-full pt-40 pb-16 md:pb-24 flex flex-col items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center z-10 px-4"
        >
          <h1 className={`text-5xl sm:text-7xl md:text-[90px] lg:text-[120px] font-black uppercase tracking-tighter text-white leading-[0.9] ${spaceGrotesk.className}`}>
            Wall <span className="text-[#d4af37] block sm:inline">Art</span>
          </h1>
          <p className={`mt-6 text-neutral-400 text-xs md:text-sm uppercase tracking-[0.4em] font-bold ${shareTechMono.className}`}>
            Exclusive Gallery Collection
          </p>
        </motion.div>
      </section>

      {/* Masonry-style Grid */}
      <section className="w-full max-w-[1800px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {wallArtImages.map((img, idx) => {
            // Determine grid span based on "size" property to create a beautiful asymmetric grid
            let spanClass = "col-span-1 row-span-1";
            if (img.size === "large") spanClass = "col-span-1 md:col-span-2 row-span-1 md:row-span-2";
            else if (img.size === "wide") spanClass = "col-span-1 md:col-span-2 row-span-1";
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (idx % 4) * 0.1, ease: "easeOut" }}
                className={`relative group overflow-hidden rounded-[20px] bg-neutral-900 border border-white/10 ${spanClass}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className={`inline-block px-3 py-1 mb-3 rounded-full border border-[#d4af37]/50 bg-black/50 backdrop-blur-md text-[#d4af37] text-[9px] uppercase tracking-[0.2em] font-bold ${shareTechMono.className}`}>
                      Wall Art
                    </span>
                    <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase tracking-tight ${spaceGrotesk.className}`}>
                      {img.alt}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
