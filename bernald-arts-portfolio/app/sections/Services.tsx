"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Wall Art",
    description:
      "Customized wall art and mural works for homes and commercial spaces.",
    fullDescription: `Large-scale wall art designed for homes, cafes, offices and commercial spaces.

• Custom themes
• Premium paints
• Weather resistant coating
• Indoor & outdoor projects`,
    image: "/images/about/1.jpg",
  },
  {
    id: "02",
    title: "Pencil Art",
    description:
      "Detailed pencil portraits with realistic cinematic detailing.",
    fullDescription: `Hyper-realistic pencil portraits with cinematic lighting and fine details.

• Graphite & charcoal options
• Custom portrait commissions
• Museum-grade paper
• Framing available`,
    image: "/images/services/pencil-art.jpg",
  },
  {
    id: "03",
    title: "Colour Pencil",
    description:
      "Premium colour pencil artworks with rich textures.",
    fullDescription: `Vibrant colour pencil artworks with layered textures and smooth gradients.

• Professional-grade pencils
• Lightfast pigments
• Detailed illustrative style
• Custom sizes available`,
    image: "/images/services/colour-pencil.jpg",
  },
  {
    id: "04",
    title: "Acrylic",
    description:
      "Emotion-driven acrylic paintings with storytelling visuals.",
    fullDescription: `Expressive acrylic paintings that capture emotions and narratives.

• Stretched canvas or panel
• High-quality acrylics
• Abstract & figurative styles
• Varnished for protection`,
    image: "/images/services/acrylic.jpg",
  },
  {
    id: "05",
    title: "Oil Painting",
    description:
      "Classic oil paintings with gallery-style finish.",
    fullDescription: `Traditional oil paintings with rich depth and gallery-ready finish.

• Archival linen or cotton canvas
• Professional oil paints
• Classical techniques
• Ready to hang`,
    image: "/images/services/oil.jpg",
  },
  {
    id: "06",
    title: "Watercolor Art",
    description:
      "Flowing watercolor paintings with vibrant washes and translucent layers.",
    fullDescription: `Delicate watercolor artworks with luminous washes and soft transitions.

• 100% cotton paper
• Lightfast watercolors
• Botanical & landscape themes
• Protected with UV fixative`,
    image: "/images/services/watercolor.jpg",
  },
  {
    id: "07",
    title: "Blood Art",
    description:
      "Edgy and expressive blood art pieces with bold impact.",
    fullDescription: `Bold, unconventional blood art pieces that make a striking statement.

• Non-toxic synthetic medium
• Deep red and monochrome palette
• Experimental techniques
• Sealed with protective coating`,
    image: "/images/services/blood-art.jpg",
  },
];

// Card wrapper with parallax image
function ParallaxCard({ service }: { service: (typeof services)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <div ref={ref}>
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="relative h-80 w-full overflow-hidden">
          <motion.div
            className="relative w-full h-full"
            style={{ scale: imageScale, y: imageY }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover brightness-[0.72]"
            />
          </motion.div>
        </div>
        <div className="p-6">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.45em] mb-3">
            {service.id}
          </p>
          <h2 className="text-white text-3xl font-black tracking-[-0.02em] uppercase mb-3">
            {service.title}
          </h2>
          <p className="text-white/65 text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-6 border-t border-white/10">
              <div className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
                {service.fullDescription}
              </div>
            </div>
          </motion.div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="px-6 py-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all"
          >
            {expanded ? "Show Less" : "More Info"}
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex min-h-[480px]">
        <div className="relative w-1/2 overflow-hidden">
          <motion.div
            className="relative w-full h-full"
            style={{ scale: imageScale, y: imageY }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover brightness-[0.72]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
        </div>

        <div className="w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <p className="text-white/40 text-[11px] uppercase tracking-[0.45em] mb-4">
            {service.id}
          </p>
          <h2 className="text-white text-4xl lg:text-5xl font-black tracking-[-0.02em] uppercase mb-6">
            {service.title}
          </h2>
          <div className="text-white/70 leading-relaxed whitespace-pre-line mb-8">
            {service.fullDescription}
          </div>
          <button className="px-6 py-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all w-fit">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-transparent px-4 md:px-8 py-24 md:py-32"
    >
      <div className="mb-16 md:mb-24">
        <p className="text-white/35 uppercase tracking-[0.45em] text-[10px] md:text-[11px] mb-6">
          Creative Services
        </p>
        <h1 className="text-white text-[15vw] sm:text-[12vw] md:text-[7vw] leading-[0.78] font-black tracking-[-0.09em] uppercase">
          Artistic
          <br />
          Expertise
        </h1>
      </div>

      <div className="flex flex-col gap-12 md:gap-16">
        {services.map((service) => (
          <div
            key={service.id}
            className="
              w-full overflow-hidden
              border border-[#d4af37]   /* solid golden border */
              bg-white/[0.05] backdrop-blur-2xl
              rounded-2xl
            "
          >
            <ParallaxCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}