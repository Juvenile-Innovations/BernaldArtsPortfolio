"use client";

import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import { spaceGrotesk, shareTechMono } from "@/app/lib/fonts";

interface CardProps {
  i: number;
  title: string;
  description: string;
  images: string[];
  bgImage?: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export default function ServiceCard({
  i,
  title,
  description,
  images,
  bgImage,
  color,
  progress,
  range,
  targetScale,
}: CardProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"], // continuous parallax while visible
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: "#ffffff",
          scale,
          top: `calc(-10vh + ${i * 25}px)`,
          borderColor: color,
          borderWidth: "3px",
        }}
        className="flex flex-col relative h-auto min-h-[550px] sm:min-h-[600px] md:h-[650px] w-full max-w-[1000px] lg:max-w-[1300px] rounded-[30px] md:rounded-[40px] p-6 sm:p-10 md:p-[50px] lg:p-[60px] origin-top mx-4 md:mx-auto shadow-[0_-10px_50px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        {/* Unique Background Texture & Image Blur */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Blurry Image Background */}
          <Image
            src={bgImage || images[0]}
            alt="Card background blur"
            fill
            className="object-cover opacity-80 blur-[6px] scale-110"
          />
          
          {/* Extremely light transparent wash overlay */}
          <div className="absolute inset-0 bg-white/20" />

          {/* Subtle architectural dot pattern */}
          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: 'radial-gradient(black 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row h-full gap-8 md:gap-12">
          
          {/* Left Content Area */}
          <div className="w-full md:w-[35%] flex flex-col justify-between">
            <div className="flex flex-col gap-4 items-start">
              <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.1] font-black tracking-tighter text-neutral-900 ${spaceGrotesk.className}`}>
                {title}
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 font-medium leading-relaxed mt-4 w-full md:max-w-[90%]">
                {description}
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col items-start gap-4">
              {title === "Wall Art" && (
                <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r from-neutral-900 to-black text-[#d4af37] text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.25)] flex items-center gap-2 backdrop-blur-md ${shareTechMono.className}`}>
                  <svg className="w-3.5 h-3.5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  Specialist
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a
                href="#contact"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("select-art-type", { detail: title }),
                  );
                }}
                className={`inline-block px-6 py-3 md:px-8 md:py-4 rounded-full border border-black bg-black text-[10px] md:text-sm uppercase text-white tracking-[0.2em] font-bold hover:bg-neutral-800 hover:scale-105 transition-all duration-300 text-center ${shareTechMono.className}`}
              >
                Book Now
              </a>
              {title === "Wall Art" && (
                <a
                  href="/wall-art"
                  className={`inline-block px-6 py-3 md:px-8 md:py-4 rounded-full bg-[#d4af37] border-2 border-black text-black text-[10px] md:text-sm uppercase tracking-[0.2em] font-black hover:bg-[#b8860b] hover:scale-105 shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.7)] transition-all duration-300 text-center ${shareTechMono.className}`}
                >
                  View More Wall Arts
                </a>
              )}
              </div>
            </div>
          </div>

          {/* Creative Editorial Bento Gallery */}
          <div className="relative w-full md:w-[65%] h-64 sm:h-80 md:h-full grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2 md:gap-4">
            
            {/* Main Feature Image (Left Half on Desktop, Top Left on Mobile) */}
            <div className={`col-span-1 md:col-span-2 relative w-full h-full overflow-hidden rounded-[10px] md:rounded-[20px] group shadow-md border border-black/5 ${images.length === 2 ? "row-span-2" : "row-span-1 md:row-span-2"}`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              {/\.(mp4|webm|ogg)$/i.test(images[0]) ? (
                <video src={images[0]} autoPlay loop muted playsInline className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out absolute inset-0" />
              ) : (
                <Image fill sizes="(max-width: 768px) 50vw, 33vw" src={images[0]} alt={`${title} 1`} className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              )}
            </div>

            {/* Second Feature Image (Top Right on Mobile, Right Half if only 2 images) */}
            <div className={`col-span-1 md:col-span-2 relative w-full h-full overflow-hidden rounded-[10px] md:rounded-[20px] group shadow-md border border-black/5 ${images.length === 2 ? "row-span-2" : "row-span-1"}`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              {/\.(mp4|webm|ogg)$/i.test(images[1]) ? (
                <video src={images[1]} autoPlay loop muted playsInline className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out absolute inset-0" />
              ) : (
                <Image fill sizes="(max-width: 768px) 50vw, 33vw" src={images[1]} alt={`${title} 2`} className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              )}
            </div>

            {/* Bottom Right Small Image 1 (Only rendered if more than 2 images exist) */}
            {images.length > 2 && images[2] && (
              <div className="col-span-1 row-span-1 relative w-full h-full overflow-hidden rounded-[10px] md:rounded-[20px] group shadow-md border border-black/5">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                {/\.(mp4|webm|ogg)$/i.test(images[2]) ? (
                  <video src={images[2]} autoPlay loop muted playsInline className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out absolute inset-0" />
                ) : (
                  <Image fill sizes="(max-width: 768px) 50vw, 15vw" src={images[2]} alt={`${title} 3`} className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                )}
              </div>
            )}

            {/* Bottom Right Small Image 2 (Only rendered if more than 2 images exist) */}
            {images.length > 2 && images[3] && (
              <div className="col-span-1 row-span-1 relative w-full h-full overflow-hidden rounded-[10px] md:rounded-[20px] group shadow-md border border-black/5">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                {/\.(mp4|webm|ogg)$/i.test(images[3]) ? (
                  <video src={images[3]} autoPlay loop muted playsInline className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out absolute inset-0" />
                ) : (
                  <Image fill sizes="(max-width: 768px) 50vw, 15vw" src={images[3]} alt={`${title} 4`} className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                )}
              </div>
            )}

          </div>
        </div>
      </motion.div>
    </div>
  );
}
