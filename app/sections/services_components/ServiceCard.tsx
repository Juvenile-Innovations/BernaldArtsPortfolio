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
          background: "linear-gradient(135deg, #ffffff 0%, #f4f4f5 100%)",
          scale,
          top: `calc(-10vh + ${i * 25}px)`,
          borderColor: color,
          borderWidth: "3px",
        }}
        className="flex flex-col relative h-auto min-h-[550px] sm:min-h-[600px] md:h-[650px] w-full max-w-[1000px] lg:max-w-[1300px] rounded-[30px] md:rounded-[40px] p-6 sm:p-10 md:p-[50px] lg:p-[60px] origin-top mx-4 md:mx-auto shadow-[0_-10px_50px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        {/* Unique Background Texture & Glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Subtle colored glow matching the border */}
          <div 
            className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full blur-[100px] opacity-[0.15]"
            style={{ backgroundColor: color }}
          />
          {/* Subtle architectural dot pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(black 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />
        </div>

        <h2
          className={`relative z-10 text-left m-0 text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-neutral-900 ${spaceGrotesk.className}`}
        >
          {title}
        </h2>

        <div className="relative z-10 flex flex-col md:flex-row h-full mt-6 md:mt-[40px] gap-6 md:gap-[60px]">
          <div className="w-full md:w-[35%] relative flex flex-col justify-between">
            <p
              className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-neutral-600 font-medium ${spaceGrotesk.className}`}
            >
              {description}
            </p>
            <div className="mt-6 md:mt-0 mb-2 md:mb-10">
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
            <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 relative w-full h-full overflow-hidden rounded-[10px] md:rounded-[20px] group shadow-md border border-black/5">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <Image 
                fill 
                sizes="(max-width: 768px) 50vw, 33vw" 
                src={images[0]} 
                alt={`${title} 1`} 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
            </div>

            {/* Top Right Wide Image (Top Right on Mobile) */}
            <div className="col-span-1 md:col-span-2 row-span-1 relative w-full h-full overflow-hidden rounded-[10px] md:rounded-[20px] group shadow-md border border-black/5">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <Image 
                fill 
                sizes="(max-width: 768px) 50vw, 33vw" 
                src={images[1]} 
                alt={`${title} 2`} 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
            </div>

            {/* Bottom Right Small Image 1 */}
            <div className="col-span-1 row-span-1 relative w-full h-full overflow-hidden rounded-[10px] md:rounded-[20px] group shadow-md border border-black/5">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <Image 
                fill 
                sizes="(max-width: 768px) 50vw, 15vw" 
                src={images[2]} 
                alt={`${title} 3`} 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
            </div>

            {/* Bottom Right Small Image 2 */}
            <div className="col-span-1 row-span-1 relative w-full h-full overflow-hidden rounded-[10px] md:rounded-[20px] group shadow-md border border-black/5">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <Image 
                fill 
                sizes="(max-width: 768px) 50vw, 15vw" 
                src={images[3]} 
                alt={`${title} 4`} 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
