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
      "Commissioned across INDIA, each mural is adaptive to its environment and engineered to weather time and exposure.",
  }
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
      className="whitespace-normal md:whitespace-nowrap max-w-[90vw] md:max-w-none leading-snug md:leading-[1.35]"
      style={{
        margin: 0,
        marginBottom: "0.15em",
        fontStyle: isName ? "italic" : "normal",
        fontWeight: isName ? 400 : 300,
        position: "relative", // required for x transform to work
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
  const imageInnerRef = useRef<HTMLDivElement>(null);

  // ── Projects: pin the image panel only within the About container ────────
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Desktop: Pin at the top
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: imageContainerRef.current,
        pin: true,
        pinSpacing: false,
        start: "top-=100px top",
        endTrigger: containerRef.current,
        end: "bottom top", // Stay pinned until the entire container leaves the screen
      });
    });

    // Mobile: Pin at the bottom
    mm.add("(max-width: 767px)", () => {
      // Pin image when its bottom hits the bottom of the viewport
      ScrollTrigger.create({
        trigger: imageContainerRef.current,
        pin: true,
        pinSpacing: false, // We use a wrapper div to prevent jump
        start: "bottom bottom",
        endTrigger: containerRef.current,
        end: "bottom top", // Stay pinned until the entire container leaves the screen
      });
    });

    // All screens: Particle-like fade out at the very end
    mm.add("all", () => {
      gsap.to(imageInnerRef.current, {
        opacity: 0,
        filter: "blur(20px)",
        scale: 0.9,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 60%", // Starts fading when the stats are midway up the screen
          end: "bottom top",   // Finishes fading when the section completely leaves the screen
          scrub: true,
        }
      });
    });

    return () => mm.revert();
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
        className={`relative z-10 pointer-events-none mt-[35vw] ml-[5vw] md:mt-[20vw] md:ml-[10vw] ${cormorant.className}`}
        style={{
          color: "white",
          fontSize: "clamp(1.8rem, 3.2vw, 4rem)",
          lineHeight: 1.35,
          letterSpacing: "0.02em",
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
          {/* Pinned image panel Wrapper (preserves layout height when pinned) */}
          <div className="relative h-[400px] md:h-full w-full md:w-[40%] flex-shrink-0 z-0">
            {/* The actual pinned element */}
            <div
              ref={imageContainerRef}
              className="absolute inset-0 w-full h-full"
            >
              {/* Inner element for animations to prevent pin conflicts */}
              <div ref={imageInnerRef} className="relative w-full h-full">
                <Image
                  src={works[selectedWork].src}
                  fill
                  alt={works[selectedWork].title}
                  priority
                  className="object-cover rounded-lg md:rounded-none"
                />
              </div>
            </div>
          </div>

          {/* Text Content Container (Mobile: below image, Desktop: side-by-side) */}
          <div className="relative z-10 flex flex-col sm:flex-row md:flex-row w-full md:w-[55%] gap-6 md:gap-[5%] justify-between">
            {/* Column 1 — primary description */}
            <div className="flex flex-col w-full sm:w-[45%] md:w-[45%] drop-shadow-md">
              <p className="m-0 text-[4vw] sm:text-[2.5vw] md:text-[1.6vw] leading-relaxed">{works[selectedWork].desc1}</p>
              
              <style>{`
                @keyframes signatureGlow {
                  0% { 
                    text-shadow: 0 0 10px rgba(255, 10, 84, 0.5), 0 0 20px rgba(255, 10, 84, 0.3); 
                  }
                  100% { 
                    text-shadow: 0 0 20px rgba(255, 10, 84, 1), 0 0 40px rgba(255, 10, 84, 0.8), 0 0 60px rgba(255, 10, 84, 0.5), 0 0 80px rgba(255, 10, 84, 0.3); 
                  }
                }
                .glow-text-anim {
                  animation: signatureGlow 2s ease-in-out infinite alternate;
                }
              `}</style>
              <h4 className={`glow-text-anim m-0 mt-10 md:mt-16 text-5xl sm:text-6xl md:text-[4vw] font-bold italic text-[#ff0a54] tracking-wide ${cormorant.className}`}>
                HI I'M BERNALD GEORGE
              </h4>
            </div>

            {/* Column 2 — secondary description, aligned to bottom on desktop */}
            <div className="flex w-full sm:w-[45%] md:w-[45%] text-[3.5vw] sm:text-[2vw] md:text-[1vw] items-start md:items-end leading-relaxed text-neutral-300 md:text-white drop-shadow-md">
              <p className="m-0">{works[selectedWork].desc2}</p>
            </div>
          </div>
        </div>

        {/* ── Statistics / Milestones (Vertical) ── */}
        <div className="flex flex-col relative mt-24 md:mt-[200px] pb-24 md:pb-0">
          {[
            { value: "2000+", label: "Projects" },
            { value: "3X", label: "World Records" },
            { value: "15+", label: "Years Active" },
            { value: "10K+", label: "Happy Customers" },
          ].map((stat, index) => (
            <div
              key={index}
              className="w-full border-b border-white/20 flex flex-col md:flex-row items-start md:items-end justify-between py-8 md:py-[40px]"
            >
              <p className="m-0 mb-4 md:mb-2 text-xs md:text-sm uppercase tracking-[0.4em] text-neutral-400 font-bold order-2 md:order-1">
                {stat.label}
              </p>
              <h3 className={`m-0 text-6xl md:text-[6vw] font-light text-orange-500 leading-none order-1 md:order-2 mb-2 md:mb-0 ${cormorant.className}`}>
                {stat.value}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
