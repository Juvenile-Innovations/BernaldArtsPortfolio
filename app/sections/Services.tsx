"use client";

import { useRef } from "react";
import { spaceGrotesk, elsie } from "@/app/lib/fonts";
import { useScroll } from "framer-motion";
import ServiceCard from "./services_components/ServiceCard";
import { SilkWaveBg } from "@/app/components/ui/silk-wave-bg";

const servicesData = [
  {
    title: "Wall Art",
    description:
      "Architectural-scale mural integration synthesized with environment-specific spatial planning and structural surface mapping. Executed with high-viscosity aerosol polymers to transform massive vertical surfaces.",
    images: ["/images/services/wall_art_1.jpg", "/images/services/wall_art_2.jpg", "/images/services/wall_art_3.jpg"],
    color: "#081014", // Deep Midnight Teal
  },
  {
    title: "Pencil Art",
    description:
      "Hyper-realistic monochromatic rendering protocols using fine-grain archival graphite, exploring extreme light values, microscopic skin texture details, and absolute shadow depth.",
    images: ["/images/services/pencil_art_1.jpg", "/images/services/pencil_art_2.png", "/images/services/pencil_art_4.png"],
    color: "#0d0d0d", // Dark Charcoal
  },
  {
    title: "Colour Pencil",
    description:
      "Wax-core pigment synthesis overlaying multiple translucent layers to create vibrant, photorealistic depth and high-contrast saturation on archival heavy paper.",
    images: ["/images/services/pencil_art_4.png", "/images/services/pencil_art_5.png", "/images/services/pencil_art_1.jpg"],
    color: "#140a13", // Deep Amethyst
  },
  {
    title: "Acrylic Art",
    description:
      "Acrylic structural polymer patterns observing knife density along custom canvas substrates, creating tactile, multi-dimensional surface textures.",
    images: ["/images/services/acrylic_art_1.png", "/images/services/acrylic_art_2.png", "/images/services/acrylic_art_3.png"],
    color: "#06120e", // Deep Forest Emerald
  },
  {
    title: "Oil Painting",
    description:
      "Traditional slow-drying oil paint systems, leveraging multi-layered translucent glazes and rich oil mediums to achieve archival depth and complex physical light scattering.",
    images: ["/images/services/wall_art_4.jpg", "/images/services/wall_art_5.jpg", "/images/services/wall_art_2.jpg"],
    color: "#140a05", // Deep Espresso Brown
  },
  {
    title: "Watercolor",
    description:
      "Translucent wash fluid dynamics executed on 100% cotton press substrate, controlling organic pigment bleeds and granulation for delicate landscape atmospheric depth.",
    images: ["/images/services/acrylic_art_3.png", "/images/services/acrylic_art_4.png", "/images/services/acrylic_art_1.png"],
    color: "#07131c", // Deep Ocean Blue
  },
  {
    title: "Blood Art",
    description:
      "Avant-garde exploration using organic bio-pigments as a medium on custom substrates, exploring concepts of mortality, genetic history, and vital structures.",
    images: ["/images/services/blood_art_1.png", "/images/services/blood_art_2.png", "/images/services/blood_art_4.png"],
    color: "#170505", // Dark Crimson
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
      {/* Dynamic Silk Wave Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="sticky top-0 w-full h-screen">
          <SilkWaveBg />
        </div>
      </div>

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
