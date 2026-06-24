"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconBrandInstagram } from "@tabler/icons-react";
import { spaceGrotesk, shareTechMono } from "@/app/lib/fonts";
import { classNames as cn } from "@/app/lib/utils";
import gsap from "gsap";

export default function Achievements() {
  const features = [
    {
      title: "2000+ Masterpieces Crafted",
      description:
        "Over 8+ years of visual storytelling across commercial spaces and residential galleries.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-900 bg-neutral-950/40",
    },
    {
      title: "Prestigious Art Awards",
      description:
        "05+ awards for mixed media art, traditional oil, and signature modern murals.",
      skeleton: <SkeletonTwo />,
      className: "border-b border-neutral-900 col-span-1 lg:col-span-2 bg-neutral-950/40",
    },
    {
      title: "50K+ Instagram Community",
      description:
        "Engaging with a global audience of art enthusiasts, collectors, and creators through daily visual updates.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r border-neutral-900 bg-neutral-950/40",
    },
    {
      title: "All India Art Services",
      description:
        "Spanning across India's creative hubs, delivering wall murals, canvas commissions, and workshops in major metro networks.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 bg-neutral-950/40",
    },
  ];

  return (
    <section
      id="achievement"
      className="relative w-full bg-neutral-950 overflow-hidden border-t border-b border-neutral-900 py-24 md:py-36"
    >
      {/* Matrix Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Decorative Crosshairs */}
      <div className="absolute top-10 left-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">+</div>
      <div className="absolute top-10 right-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">+</div>
      <div className="absolute bottom-10 left-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">+</div>
      <div className="absolute bottom-10 right-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">+</div>

      {/* Amber Glowing Accents */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-orange-600/5 blur-[130px] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Centered GSAP Animated "ART IS" Ticker as Header */}
        <div className="flex items-center justify-center mb-16 md:mb-20">
          <ArtIsTicker />
        </div>

        {/* Bento Grid */}
        <div className="relative">
          <div className="mt-12 grid grid-cols-1 rounded-xl lg:grid-cols-6 border border-neutral-900 bg-neutral-950/20 overflow-hidden">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} className={feature.className}>
                <div>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </div>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative overflow-hidden p-6 sm:p-10 flex flex-col justify-between", className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h3 className={cn("text-left text-xl tracking-tight text-white md:text-2xl font-bold uppercase", spaceGrotesk.className)}>
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className={cn("text-left text-xs md:text-sm font-normal text-neutral-400 mt-2 mb-6 max-w-md font-mono uppercase tracking-wider leading-relaxed", shareTechMono.className)}>
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-80 gap-10 px-2 py-4">
      <div className="group mx-auto h-full w-full bg-neutral-950 p-3 rounded-lg border border-neutral-900 shadow-2xl relative overflow-hidden">
        <div className="flex h-full w-full flex-1 flex-col space-y-2 relative">
          <Image
            src="/images/gallery/image01.jpg"
            alt="header"
            fill
            className="aspect-square h-full w-full rounded-sm object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 w-full bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-20 w-full bg-gradient-to-b from-neutral-950 to-transparent" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "/images/gallery/image01.jpg",
    "/images/gallery/image02.jpg",
    "/images/gallery/image03.jpg",
    "/images/gallery/image04.jpg",
    "/images/gallery/image05.jpg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex h-80 flex-col items-start gap-1 overflow-hidden p-4">
      <div className="-ml-10 flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: (idx % 2 === 0 ? 1 : -1) * (10 + idx * 2),
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-2 -mr-3 shrink-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 p-1"
          >
            <Image
              src={image}
              alt="portfolio milestone"
              width={140}
              height={140}
              className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-32 md:w-32"
            />
          </motion.div>
        ))}
      </div>
      <div className="-ml-4 flex flex-row">
        {images.slice().reverse().map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: (idx % 2 === 0 ? -1 : 1) * (8 + idx * 3),
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-2 -mr-3 shrink-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 p-1"
          >
            <Image
              src={image}
              alt="portfolio milestone details"
              width={140}
              height={140}
              className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-32 md:w-32"
            />
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-[100] h-full w-12 bg-gradient-to-r from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[100] h-full w-12 bg-gradient-to-l from-neutral-950 to-transparent" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group/image relative flex h-80 gap-10 w-full overflow-hidden rounded-lg border border-neutral-900 bg-neutral-950"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-25 pointer-events-none" />

      {/* Instagram Brand Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg group-hover/image:scale-110 transition-transform duration-300">
          <IconBrandInstagram className="h-10 w-10 text-white" />
        </div>
        <span className={`text-xs text-white/80 font-mono tracking-widest mt-4 uppercase ${shareTechMono.className}`}>
          50K+ followers
        </span>
      </div>

      {/* Background artwork */}
      <div className="relative w-full h-full">
        <Image
          src="/images/gallery/image03.jpg"
          alt="Instagram Feed Snapshot"
          fill
          className="object-cover transition-all duration-300 blur-[2px] group-hover/image:blur-[1px] group-hover/image:scale-[1.03]"
        />
      </div>
    </a>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative mt-4 w-full h-[340px] overflow-hidden rounded-lg border border-neutral-900 bg-neutral-950/20 group [perspective:1200px]">
      {/* Glowing backdrop overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-20 pointer-events-none" />

      {/* Ambient pulse decoration behind map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full bg-amber-500/10 blur-3xl animate-pulse pointer-events-none [animation-delay:1s]" />

      {/* Angled and full frame image container */}
      <div className="absolute inset-0 w-full h-full transition-all duration-700 [transform:rotateX(28deg)_rotateY(-18deg)_rotateZ(2deg)] origin-center group-hover:[transform:rotateX(20deg)_rotateY(-10deg)_rotateZ(0deg)]">
        <Image
          src="/images/india_neon_map.png"
          alt="India Art Service Network Map"
          fill
          className="object-cover scale-155 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Status indicator block */}
      <div className={`absolute bottom-3 left-4 z-30 flex items-center gap-2 text-[8px] uppercase tracking-widest text-cyan-400 font-mono ${shareTechMono.className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>Active Service: INDIA</span>
      </div>
    </div>
  );
};

export const ArtIsTicker = () => {
  const wordRef = useRef<HTMLSpanElement>(null);

  const words = [
    "honor.",
    "truth.",
    "freedom.",
    "soul.",
    "life.",
    "vision.",
    "feeling.",
    "silence.",
    "passion.",
    "timeless.",
    "courage.",
    "expression.",
    "wonder.",
    "beauty.",
    "memory.",
    "identity.",
    "legacy.",
    "creation.",
    "emotion.",
    "infinite."
  ];

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;

    let index = 0;
    const timeline = gsap.timeline({ repeat: -1 });

    timeline
      .to(el, {
        yPercent: -50,
        opacity: 0,
        filter: "blur(4px)",
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          index = (index + 1) % words.length;
          el.innerText = words[index];
          gsap.set(el, { yPercent: 50, filter: "blur(4px)" });
        }
      })
      .to(el, {
        yPercent: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.45,
        ease: "power3.out"
      })
      .to({}, { duration: 1.0 }); // Pause of 2.0s

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="flex items-center justify-center py-6 w-full select-none">
      <div className="flex items-center gap-x-4 md:gap-x-6 text-left">
        <h1 className={`text-4xl md:text-6xl lg:text-9xl font-black uppercase tracking-tight text-white ${spaceGrotesk.className}`}>
          ART IS
        </h1>
        <div className="h-12 md:h-20 lg:h-36 min-w-[240px] md:min-w-[400px] lg:min-w-[560px] overflow-hidden relative flex items-center">
          <span
            ref={wordRef}
            className={`text-4xl md:text-6xl lg:text-9xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 block text-left ${spaceGrotesk.className}`}
          >
            honor.
          </span>
        </div>
      </div>
    </div>
  );
};