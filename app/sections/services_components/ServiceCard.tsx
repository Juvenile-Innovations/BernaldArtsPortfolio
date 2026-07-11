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
            <div className="flex flex-col gap-4">
              <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.1] font-black tracking-tighter text-neutral-900 ${spaceGrotesk.className}`}>
                {title}
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 font-medium leading-relaxed mt-4 w-full md:max-w-[90%]">
                {description}
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a
                href="#contact"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("select-art-type", { detail: title }),
                  );
                }}
                className={`inline-block px-6 py-3 md:px-8 md:py-4 rounded-full border border-black bg-black text-[10px] md:text-sm uppercase text-white tracking-[0.2em] font-bold hover:bg-neutral-800 hover:scale-105 transition-all duration-300 ${shareTechMono.className}`}
              >
                Book Now
              </a>
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
