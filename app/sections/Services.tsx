"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { anton, elsie } from "@/app/lib/fonts";

const SERVICES_DATA = [
  {
    id: "01",
    title: "Wall Art",
    descriptionPoints: [
      "Large-scale mural integration.",
      "Luxury residential spatial planning.",
      "Corporate office environmental branding.",
      "Bespoke illustration synthesis.",
      "Architectural surface mapping.",
      "Immersive narrative development.",
      "Advanced UV-resistant pigments.",
      "Structural site analysis.",
    ],
    images: ["/images/services/wall_art_5.jpg", "/images/services/wall_art_4.jpg", "/images/services/wall_art_3.jpg", "/images/services/wall_art_1.jpg"],
  },
  {
    id: "02",
    title: "Pencil Art",
    descriptionPoints: [
      "Hyper-realistic rendering protocols.",
      "Archival-grade graphite application.",
      "Cinematic tonal staging.",
      "Advanced backlighting methodology.",
      "Monochromatic depth exploration.",
      "Micro-texture surface detailing.",
      "Human emotion psycho-analysis.",
      "Long-term conservation sealing.",
    ],
    images: ["/images/services/pencil_art_1.jpg", "/images/services/pencil_art_2.png", "/images/services/pencil_art_5.png", "/images/services/pencil_art_4.png"],
  },
  {
    id: "03",
    title: "Colour Pencil",
    descriptionPoints: [
      "Professional lightfast pigment selection.",
      "Multi-layered rendering workflows.",
      "Seamless gradient interpolation.",
      "Vibrant structural color theory.",
      "Boundary-defying dry medium precision.",
      "Saturation balance calibration.",
      "Fiber-tooth density optimization.",
      "Reflective highlight isolation.",
    ],
    images: ["/images/gallery/image01.jpg", "/images/gallery/image02.jpg", "/images/gallery/image03.jpg", "/images/gallery/image04.jpg"],
  },
  {
    id: "04",
    title: "Acrylic Art",
    descriptionPoints: [
      "High-contrast visual language.",
      "Contemporary abstraction framework.",
      "Figurative element composition.",
      "Textured impasto layering.",
      "Deep-field brushwork dynamics.",
      "Protective varnish polymerization.",
      "Structural centerpiece stability.",
      "Gallery-ready ambient light tuning.",
    ],
    images: ["/images/services/acrylic_art_1.png", "/images/services/acrylic_art_2.png", "/images/services/acrylic_art_3.png", "/images/services/acrylic_art_4.png"],
  },
  {
    id: "05",
    title: "Oil Painting",
    descriptionPoints: [
      "Museum-grade linen foundation.",
      "Classical glazing techniques.",
      "Slow-drying medium kinetics.",
      "Profound luminosity rendering.",
      "Subtle value gradation mapping.",
      "Timeless structural presence.",
      "Oil-to-pigment ratio precision.",
      "Archival moisture barrier sealing.",
    ],
    images: ["/images/gallery/image01.jpg", "/images/gallery/image02.jpg", "/images/gallery/image03.jpg", "/images/gallery/image01.jpg"],
  },
  {
    id: "06",
    title: "Watercolor",
    descriptionPoints: [
      "Translucent wash fluid dynamics.",
      "100% cotton press substrate.",
      "Atmospheric vignette construction.",
      "Organic pigment bleed control.",
      "Precise line work integration.",
      "Botanical form morphology.",
      "Fluid landscape atmospheric depth.",
      "Hygroscopic stability protocols.",
    ],
    images: ["/images/gallery/image01.jpg", "/images/gallery/image02.jpg", "/images/gallery/image03.jpg", "/images/gallery/image01.jpg"],
  },
  {
    id: "07",
    title: "Blood Art",
    descriptionPoints: [
      "Synthetic medium experimentation.",
      "Crimson palette calibration.",
      "Non-toxic conceptual stability.",
      "High-impact atmospheric density.",
      "UV-protective barrier sealing.",
      "Monochrome visual tension.",
      "Experimental structural integrity.",
      "Statement installation physics.",
    ],
    images: ["/images/services/blood_art_1.png", "/images/services/blood_art_3.jpg", "/images/services/blood_art_4.png", "/images/services/blood_art_2.png"],
  },
];

const COLLAGE_STYLES = [
  {
    container: "grid grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-6 min-h-[400px] lg:min-h-[600px]",
    img1: "col-span-2 lg:col-span-8 lg:row-span-2 relative h-[250px] lg:h-[480px] z-10",
    img2: "col-span-1 lg:col-span-4 relative h-[160px] lg:h-[260px] lg:mt-8 z-20",
    img3: "col-span-1 lg:col-span-4 relative h-[180px] lg:h-[300px] lg:-mt-12 z-0",
    img4: "col-span-2 lg:col-span-12 relative h-[140px] lg:h-[240px] mt-2 lg:mt-4 z-10"
  },
  {
    container: "grid grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-6 min-h-[400px] lg:min-h-[600px]",
    img1: "col-span-1 lg:col-span-4 relative h-[180px] lg:h-[340px] lg:mt-16 z-10",
    img2: "col-span-1 lg:col-span-8 relative h-[200px] lg:h-[460px] z-20",
    img3: "col-span-2 lg:col-span-6 relative h-[220px] lg:h-[360px] -mt-4 lg:-mt-8 z-0",
    img4: "col-span-2 lg:col-span-6 relative h-[160px] lg:h-[240px] mt-2 z-10"
  },
  {
    container: "grid grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-6 min-h-[400px] lg:min-h-[600px]",
    img1: "col-span-2 lg:col-span-12 relative h-[240px] lg:h-[380px] z-10",
    img2: "col-span-1 lg:col-span-5 relative h-[160px] lg:h-[320px] -mt-6 lg:-mt-16 z-20",
    img3: "col-span-1 lg:col-span-7 relative h-[180px] lg:h-[400px] z-0",
    img4: "hidden lg:block col-span-2 lg:col-span-8 lg:col-start-3 relative h-[100px] lg:h-[220px] lg:-mt-12 z-10"
  }
];

function ServiceSection({ service, index }: { service: typeof SERVICES_DATA[0]; index: number }) {
  const sectionRef = useRef(null);
  const isEven = index % 2 === 0;
  const layout = COLLAGE_STYLES[index % COLLAGE_STYLES.length];
  const frameStyles = "border-[6px] md:border-[3px] border-[#181818] bg-[#181818] shadow-[0_15px_40px_rgba(0,0,0,0.25)] rounded-sm";

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yImageFast = useTransform(scrollYProgress, [0, 1], [-50, 70]);
  const yImageSlow = useTransform(scrollYProgress, [0, 1], [30, -50]);

  return (
    <div
      id={`service-${service.id}`}
      ref={sectionRef}
      className="relative w-full py-16 md:py-32 border-b border-black/5 last:border-0 z-10 scroll-mt-24 md:scroll-mt-28"
    >
      <div className={`relative z-10 flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 md:gap-16 xl:gap-20 items-stretch`}>
        <motion.div style={{ y: yText }} className="w-full lg:w-5/12 flex flex-col py-4 lg:py-10 z-30">
          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.3em] text-black/40 block">PRFL // {service.id}</span>
              <h2 className={`${elsie.className} text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase text-black leading-none select-none drop-shadow-sm`}>{service.title}</h2>
            </div>
            <ol className="list-decimal list-outside ml-4 space-y-1.5 text-black/80 text-sm font-mono tracking-wide leading-relaxed max-w-xl">
              {service.descriptionPoints.map((point, i) => (
                <li key={i} className="pl-2">{point}</li>
              ))}
            </ol>
            <div className="pt-4 lg:pt-6">
              <a
                href="#contact"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("select-art-type", { detail: service.title }));
                }}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black">BOOK IT</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#c1121f] to-[#fcbf49] text-white transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="w-full lg:w-7/12 relative mt-8 lg:mt-0">
          <div className={layout.container}>
            {service.images[0] && <motion.div style={{ y: yImageSlow }} className={`${layout.img1} ${frameStyles}`}><Image src={service.images[0]} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" /></motion.div>}
            {service.images[1] && <motion.div style={{ y: yImageFast }} className={`${layout.img2} ${frameStyles}`}><Image src={service.images[1]} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 30vw" /></motion.div>}
            {service.images[2] && <motion.div style={{ y: yImageSlow }} className={`${layout.img3} ${frameStyles}`}><Image src={service.images[2]} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 30vw" /></motion.div>}
            {service.images[3] && <motion.div style={{ y: yImageFast }} className={`${layout.img4} ${frameStyles}`}><Image src={service.images[3]} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></motion.div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className={`relative w-full min-h-screen bg-[#fafafa] overflow-hidden text-black px-5 md:px-12 py-16 md:py-28 ${anton.className}`}>
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed opacity-[0.2] pointer-events-none z-0 mix-blend-multiply" style={{ backgroundImage: "url('/images/service-bg.jpg')" }} />
      <div className="relative z-10 max-w-[1500px] mx-auto">
        <div className="mb-12 md:mb-24 border-b border-black/10 pb-6 md:pb-8">
          <p className="text-black/50 uppercase tracking-[0.25em] md:tracking-[0.3em] text-[9px] md:text-[11px] mb-2 md:mb-3 font-bold font-mono">EXP // CURATED EXPERTISE</p>
          <h1 className={`${anton.className} text-[12vw] md:text-[5.5vw] uppercase select-none bg-gradient-to-br from-[#5a0000] via-[#c1121f] to-[#fcbf49] bg-clip-text text-transparent drop-shadow-[0_6px_20px_rgba(255,80,0,0.4)]`}>
            <span className="block">Artistic</span>
            <span className="block -mt-3 md:-mt-6">Specializations</span>
          </h1>
        </div>
        <div className="w-full flex flex-col gap-6 md:gap-16">
          {SERVICES_DATA.map((service, index) => (
            <ServiceSection key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}