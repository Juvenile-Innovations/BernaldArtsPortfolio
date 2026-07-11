"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { spaceGrotesk, shareTechMono } from "@/app/lib/fonts";

export default function Achievements() {
  return (
    <section id="achievement" className="w-full bg-black">
      {/* 1. Awards */}
      <ParallaxSection
        src="/images/gallery/image17.jpg"
        title="Prestigious Art Awards"
        description="Recognized with 05+ national awards for mixed media art, traditional oil, and signature modern murals across galleries in India."
      />

      {/* 2. Community */}
      <ParallaxSection
        src="/images/backgrounds/communityBG.png"
        title="50K+ Community"
        description="Engaging with a global audience of art enthusiasts, collectors, and creators through daily visual updates on Instagram."
        action={{
          label: "Join on Instagram",
          url: "https://www.instagram.com/bernald_george_official/",
        }}
      />

      {/* 3. All Over India */}
      <ParallaxSection
        src="/images/gallery/image23.jpg"
        title="All India Services"
        description="Spanning across India's creative hubs, delivering wall murals, canvas commissions, and workshops in major metro networks."
      />
    </section>
  );
}

const ParallaxSection = ({
  src,
  title,
  description,
  action,
}: {
  src: string;
  title: string;
  description: string;
  action?: { label: string; url: string };
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  
  // Parallax subtle Y transform
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden border-b border-neutral-900"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 p-10 md:p-20 w-full h-full flex flex-col justify-between">
        <div className="w-full md:w-[40vw] md:self-end flex flex-col items-end md:items-start text-right md:text-left">
          <p
            className={`text-sm md:text-xl uppercase leading-relaxed text-white mix-blend-difference ${shareTechMono.className}`}
          >
            {description}
          </p>
          {action && (
            <a
              href={action.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 text-white hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95 font-bold uppercase tracking-widest text-xs md:text-sm rounded-full shadow-[0_4px_14px_0_rgba(220,39,67,0.39)] ${shareTechMono.className}`}
              style={{
                background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
              }}
            >
              {action.label}
            </a>
          )}
        </div>
        <p
          className={`text-5xl md:text-[7vw] leading-none font-black uppercase text-white mix-blend-difference ${spaceGrotesk.className}`}
        >
          {title}
        </p>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full pointer-events-none">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={src}
            fill
            alt={title}
            className="object-cover opacity-80"
            sizes="100vw"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};