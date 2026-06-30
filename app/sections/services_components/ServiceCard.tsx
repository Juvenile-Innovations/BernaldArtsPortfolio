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

  // Different parallax effects for each image in the grid
  const imageScale1 = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const imageScale2 = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const imageScale3 = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  const yParallax1 = useTransform(scrollYProgress, [0, 1], [150, -50]);
  const yParallax2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const yParallax3 = useTransform(scrollYProgress, [0, 1], [50, -150]);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-10vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative h-[500px] sm:h-[600px] md:h-[650px] w-full max-w-[1000px] lg:max-w-[1150px] rounded-[30px] md:rounded-[40px] p-8 sm:p-10 md:p-[50px] lg:p-[60px] origin-top mx-4 md:mx-auto shadow-2xl border border-white/5"
      >
        <h2
          className={`text-left m-0 text-4xl md:text-6xl font-black uppercase tracking-tight text-white ${spaceGrotesk.className}`}
        >
          {title}
        </h2>

        <div className="flex flex-col md:flex-row h-full mt-8 md:mt-[40px] gap-8 md:gap-[60px]">
          <div className="w-full md:w-[35%] relative flex flex-col justify-between">
            <p
              className={`text-base md:text-lg lg:text-xl leading-relaxed text-neutral-300 font-medium ${spaceGrotesk.className}`}
            >
              {description}
            </p>
            <div className="mt-8 md:mt-0 mb-4 md:mb-10">
              <a
                href="#contact"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("select-art-type", { detail: title }),
                  );
                }}
                className={`inline-block px-8 py-4 rounded-full border border-white/30 text-xs md:text-sm uppercase text-white tracking-[0.2em] font-bold hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 ${shareTechMono.className}`}
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Floating Grid of 3 Images */}
          <div className="relative w-full md:w-[65%] h-64 sm:h-80 md:h-full">
            
            {/* Main Floating Image (Center/Left) */}
            <motion.div 
              className="absolute top-[5%] md:top-[10%] left-[0%] md:left-[5%] w-[55%] md:w-[45%] h-[60%] md:h-[65%] rounded-[15px] md:rounded-[25px] overflow-hidden shadow-2xl z-20 border border-white/10" 
              style={{ y: yParallax1 }}
            >
              <motion.div className="relative w-full h-full" style={{ scale: imageScale1 }}>
                <Image fill sizes="(max-width: 768px) 100vw, 50vw" src={images[0]} alt={`${title} 1`} className="object-cover" />
              </motion.div>
            </motion.div>

            {/* Secondary Floating Image (Bottom Right) */}
            <motion.div 
              className="absolute bottom-[5%] right-[0%] md:right-[5%] w-[60%] md:w-[50%] h-[55%] md:h-[60%] rounded-[15px] md:rounded-[25px] overflow-hidden shadow-2xl z-30 border border-white/10" 
              style={{ y: yParallax2 }}
            >
              <motion.div className="relative w-full h-full" style={{ scale: imageScale2 }}>
                <Image fill sizes="(max-width: 768px) 100vw, 50vw" src={images[1]} alt={`${title} 2`} className="object-cover" />
              </motion.div>
            </motion.div>

            {/* Tertiary Floating Image (Top Right - Small) */}
            <motion.div 
              className="absolute top-[-5%] right-[10%] md:right-[20%] w-[40%] md:w-[35%] h-[40%] md:h-[45%] rounded-[15px] md:rounded-[25px] overflow-hidden shadow-xl z-10 border border-white/5 opacity-90" 
              style={{ y: yParallax3 }}
            >
              <motion.div className="relative w-full h-full" style={{ scale: imageScale3 }}>
                <Image fill sizes="(max-width: 768px) 100vw, 30vw" src={images[2]} alt={`${title} 3`} className="object-cover" />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
