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
        src="/images/gallery/image03.jpg"
        title="50K+ Community"
        description="Engaging with a global audience of art enthusiasts, collectors, and creators through daily visual updates on Instagram."
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
}: {
  src: string;
  title: string;
  description: string;
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
      <div className="relative z-10 p-10 md:p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
        <p
          className={`w-full md:w-[40vw] text-sm md:text-xl md:self-end uppercase mix-blend-difference leading-relaxed text-right md:text-left ${shareTechMono.className}`}
        >
          {description}
        </p>
        <p
          className={`text-5xl md:text-[7vw] leading-none font-black uppercase mix-blend-difference ${spaceGrotesk.className}`}
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