"use client";

import { useRef } from "react";
import { spaceGrotesk, elsie } from "@/app/lib/fonts";
import { useScroll } from "framer-motion";
import ServiceCard from "./services_components/ServiceCard";

const servicesData = [
  {
    title: "Wall Art",
    description:
      "Architectural-scale mural integration synthesized with environment-specific spatial planning and structural surface mapping. Executed with high-viscosity aerosol polymers to transform massive vertical surfaces.",
    images: ["/images/services/wall_art/wall_art_4.jpg", "/images/services/wall_art/wall_art_1.jpg", "/images/services/wall_art/wall_art_3.jpg", "/images/services/wall_art/wall_art_2.jpg"],
    color: "#06b6d4", // Vibrant Cyan
    bgImage: "/images/services/wall_art/wall_art_1.jpg", 
  },
  {
    title: "Pencil Art",
    description:
      "Hyper-realistic monochromatic rendering protocols using fine-grain archival graphite, exploring extreme light values, microscopic skin texture details, and absolute shadow depth.",
    images: ["/images/services/pencil_art/pencil_art_1.jpg", "/images/services/pencil_art/pencil_art_2.png", "/images/services/pencil_art/pencil_art_4.png", "/images/services/pencil_art/pencil_art_5.png"],
    color: "#64748b", // Slate Gray
    bgImage: "/images/services/pencil_art/pencil_art_2.png", // ADD SPECIFIC BG IMAGE HERE
  },
  {
    title: "Colour Pencil",
    description:
      "Wax-core pigment synthesis overlaying multiple translucent layers to create vibrant, photorealistic depth and high-contrast saturation on archival heavy paper.",
    images: ["/images/services/colour_pencil/1.png", "/images/services/colour_pencil/2.png", "/images/services/colour_pencil/3.jpg", "/images/services/colour_pencil/4.png"],
    color: "#a855f7", // Vibrant Purple
    bgImage: "", // ADD SPECIFIC BG IMAGE HERE
  },
  {
    title: "Acrylic Art",
    description:
      "Acrylic structural polymer patterns observing knife density along custom canvas substrates, creating tactile, multi-dimensional surface textures.",
    images: ["/images/services/acrylic_art/acrylic_art_1.png", "/images/services/acrylic_art/acrylic_art_4.png", "/images/services/acrylic_art/acrylic_art_3.png", "/images/services/acrylic_art/acrylic_art_2.png"],
    color: "#10b981", // Bright Emerald
    bgImage: "", // ADD SPECIFIC BG IMAGE HERE
  },
  {
    title: "Live Painting",
    description:
      "Dynamic, real-time artistic performance capturing the raw energy of live events. Engaging audiences through rapid structural composition and spontaneous chromatic expressions.",
    images: ["/images/services/live_painting/1.jpg", "/images/services/live_painting/2.jpg", "/images/services/live_painting/3.jpg", "/images/services/live_painting/4.jpg"],
    color: "#eab308", // Golden Yellow
    bgImage: "", // ADD SPECIFIC BG IMAGE HERE
  },
  {
    title: "Blood Art",
    description:
      "Avant-garde exploration using organic bio-pigments as a medium on custom substrates, exploring concepts of mortality, genetic history, and vital structures.",
    images: ["/images/services/blood_art/blood_art_1.png", "/images/services/blood_art/blood_art_2.png", "/images/services/blood_art/blood_art_4.png", "/images/services/blood_art/blood_art_3.jpg"],
    color: "#e11d48", // Vivid Rose Red
    bgImage: "/images/services/blood_art/blood_art_2.png", // ADD SPECIFIC BG IMAGE HERE
  },
  {
    title: "Feather Art",
    description:
      "Intricate microscopic illustration and pigment application on fragile, organically sourced avian feathers. Requires extreme precision and zero-gravity brush control.",
    images: ["/images/services/feather_art/feather_art_3.jpg", "/images/services/feather_art/feather_art_4.jpg", "/images/services/feather_art/feather_art_1.jpg", "/images/services/feather_art/feather_art_2.jpg"],
    color: "#fbbf24", // Amber Gold
    bgImage: "", // ADD SPECIFIC BG IMAGE HERE
  },
  {
    title: "Paper Cut",
    description:
      "Meticulous extraction of negative space from single sheets of archival paper using surgical scalpels, resulting in delicate, multi-layered silhouette architectures.",
    images: ["/images/services/paper_cut/paper_cut_1.jpg", "/images/services/paper_cut/paper_cut_2.jpg"],
    color: "#c084fc", // Soft Lavender
    bgImage: "/images/services/paper_cut/paper_cut_2.jpg", // ADD SPECIFIC BG IMAGE HERE
  },
  {
    title: "Digital Art",
    description:
      "High-fidelity digital illustration and conceptual rendering using advanced stylus technologies, specializing in cinematic lighting, complex matte painting, and ultra-detailed character concepts.",
    images: ["/images/services/digital_art/digital_art_1.JPG", "/images/services/digital_art/digital_art_2.JPG", "/images/services/digital_art/digital_art_3.JPG", "/images/services/digital_art/digital_art_4.JPG"],
    color: "#3b82f6", // Vibrant Blue
    bgImage: "/images/services/digital_art/digital_art_1.JPG", // ADD SPECIFIC BG IMAGE HERE
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="services"
      data-scroll
      data-scroll-section
      className="relative w-full bg-neutral-950 text-white pb-32 border-t border-neutral-900"
    >


      <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-12">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/20">
          <h2
            className={`text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-400 font-bold ${spaceGrotesk.className}`}
          >
            SPOTLIGHT{" "}
            <span
              className={`${elsie.className} text-orange-500 lowercase tracking-normal font-normal px-1.5`}
            >
              specializations
            </span>{" "}
            ///
          </h2>
          <span
            className={`text-xs md:text-sm uppercase tracking-[0.25em] text-neutral-500 font-black ${spaceGrotesk.className}`}
          >
            bernald arts*
          </span>
        </div>
      </div>

      {/* Stacked Cards Parallax Container */}
      <div ref={containerRef} className="relative mt-[5vh] mb-[10vh]">
        {servicesData.map((project, i) => {
          const targetScale = 1 - (servicesData.length - i) * 0.05;
          return (
            <ServiceCard
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * (1 / servicesData.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
