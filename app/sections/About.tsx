"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cormorant } from "@/app/lib/fonts";

// ── Bernald's "Description" phrases (mirrors reference Description component) ─
const phrases = [
  "Bernald George Raj J —",
  "a Multi-Surface Mixed-Media Artist",
  "bridging traditional craftsmanship",
  "with modern visual storytelling",
  "across walls, canvas, and public space.",
];

// ── Bernald's "Projects" (mirrors reference Projects component) ──────────────
const works = [
  {
    title: "Wall Murals",
    src: "/images/about/about_1.png",
    desc1:
      "Large-scale architectural murals fusing industrial spray paint, heavy acrylic overlays, and custom stencils on concrete walls — redefining public space as tactile material art.",
    desc2:
      "Commissioned across Tamil Nadu, each mural is adaptive to its environment and engineered to weather time and exposure.",
  },
  {
    title: "Mixed Media Art",
    src: "/images/about/about_2.png",
    desc1:
      "Dense multi-surface compositions blending canvas fabrics with industrial resin, gold-leaf highlights, and textured pastes to create tangible, multidimensional artwork.",
    desc2:
      "Every piece is a custom sensory installation — no two works share the same material palette.",
  },
];

// ── AnimatedText — smooth cinematic slide from the left ───────────────────
function AnimatedText({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        scrub: 2, // slow, buttery drag
        start: "top 95%",
        end: "top 40%",
      },
      x: -180, // GPU-accelerated — no layout repaint
      opacity: 0,
      filter: "blur(8px)",
      ease: "power4.out",
    });
  }, []);

  // First phrase in italic, rest in light normal
  const isName = index === 0;

  return (
    <p
      ref={textRef}
      style={{
        margin: 0,
        marginBottom: "0.15em",
        fontStyle: isName ? "italic" : "normal",
        fontWeight: isName ? 400 : 300,
        position: "relative", // required for x transform to work
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </p>
  );
}

export default function About() {
  const [selectedWork, setSelectedWork] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // ── Projects: pin the image panel only within the About container ────────
  // Using endTrigger scoped to containerRef so the image unpins the moment
  // the About section's bottom reaches the viewport bottom — it won't bleed
  // into any subsequent sections.
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: imageContainerRef.current,
        pin: true,
        pinSpacing: false,
        start: "top-=100px top",
        endTrigger: containerRef.current,
        end: "bottom bottom",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      data-scroll
      data-scroll-section
      className="relative bg-black text-white overflow-hidden min-h-screen"
      style={{ zIndex: 10 }}
    >
      {/* Subtle Light Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0">
        <div className="absolute inset-0 bg-black/40 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_90%)] pointer-events-none" />
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          PART 1 — DESCRIPTION
          Cormorant Garamond italic — cinematic slide-in from left per phrase
          ════════════════════════════════════════════════════════════════════ */}
      <div
        className={`relative z-10 pointer-events-none ${cormorant.className}`}
        style={{
          color: "white",
          fontSize: "clamp(1.6rem, 3.2vw, 4rem)",
          lineHeight: 1.35,
          letterSpacing: "0.02em",
          marginTop: "30vw",
          marginLeft: "10vw",
          overflow: "hidden",
        }}
      >
        {phrases.map((phrase, index) => (
          <AnimatedText key={index} index={index}>
            {phrase}
          </AnimatedText>
        ))}
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          PART 2 — PROJECTS / WORKS
          Exact mirror of reference Projects component:
          • Pinned image on left (40% width, 700px height) -> Adjusted for mobile
          • Two text columns flanking -> Stacked on mobile
          • Project list on right — onMouseOver swaps the pinned image
          ════════════════════════════════════════════════════════════════════ */}
      <div
        ref={containerRef}
        className="relative z-10 pointer-events-auto text-white mt-[15vh] md:mt-[25vh] px-[5%] md:px-[10%]"
      >
        {/* ── Image + description row ── */}
        <div className="flex flex-col md:flex-row h-auto md:h-[700px] justify-between gap-8 md:gap-[5%]">
          {/* Pinned image panel */}
          <div
            ref={imageContainerRef}
            className="relative h-[400px] md:h-full w-full md:w-[40%] flex-shrink-0"
          >
            <Image
              src={works[selectedWork].src}
              fill
              alt={works[selectedWork].title}
              priority
              className="object-cover rounded-lg md:rounded-none"
            />
          </div>

          {/* Text Content Container (Mobile: below image, Desktop: side-by-side) */}
          <div className="flex flex-col sm:flex-row md:flex-row w-full md:w-[55%] gap-6 md:gap-[5%] justify-between">
            {/* Column 1 — primary description */}
            <div className="flex w-full sm:w-[45%] md:w-[45%] text-[4vw] sm:text-[2.5vw] md:text-[1.6vw] leading-relaxed">
              <p className="m-0">{works[selectedWork].desc1}</p>
            </div>

            {/* Column 2 — secondary description, aligned to bottom on desktop */}
            <div className="flex w-full sm:w-[45%] md:w-[45%] text-[3.5vw] sm:text-[2vw] md:text-[1vw] items-start md:items-end leading-relaxed text-neutral-400 md:text-white">
              <p className="m-0">{works[selectedWork].desc2}</p>
            </div>
          </div>
        </div>

        {/* ── Project / Work list ── */}
        <div className="flex flex-col relative mt-24 md:mt-[200px] pb-24 md:pb-0">
          {works.map((work, index) => (
            <div
              key={index}
              onMouseOver={() => setSelectedWork(index)}
              onClick={() => setSelectedWork(index)} // For mobile touch
              className={`w-full uppercase border-b flex justify-start md:justify-end transition-colors duration-300 cursor-pointer md:cursor-default ${selectedWork === index
                  ? "text-orange-500 border-orange-500 md:border-white"
                  : "text-white border-white border-opacity-30 md:border-opacity-100"
                }`}
            >
              <h2 className="m-0 mt-6 mb-3 md:mt-[40px] md:mb-[20px] text-[8vw] md:text-[3vw] tracking-tight">
                {work.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
