"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Patrick_Hand } from "next/font/google";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
});

const GALLERY_ITEMS = [
  {
    src: "/images/gallery/image01.jpg",
    label: "Graphite Study",
    category: "Sketch",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery/image02.jpg",
    label: "Mural Execution",
    category: "Street Art",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/images/gallery/image03.jpg",
    label: "Canvas Texture",
    category: "Oil Painting",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/gallery/image04.jpg",
    label: "Mixed Media",
    category: "Collage",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/gallery/image05.jpg",
    label: "Charcoal Depth",
    category: "Drawing",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/gallery/image06.jpg",
    label: "Vibrant Pigment",
    category: "Acrylic",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/images/gallery/image07.jpg",
    label: "Acrylic Wash",
    category: "Abstract",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery/image08.jpg",
    label: "Oil Glaze",
    category: "Classical",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/gallery/image09.jpg",
    label: "Cinematic Lighting",
    category: "Digital Art",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/images/gallery/image10.jpg",
    label: "Final Varnish",
    category: "Mixed Media",
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Keyboard navigation and modal closing
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImageIndex]);

  // Listen for custom event to open lightbox from navbar
  useEffect(() => {
    const handleOpenItem = (e: Event) => {
      const customEvent = e as CustomEvent<number>;
      if (typeof customEvent.detail === "number") {
        setSelectedImageIndex(customEvent.detail);
      }
    };

    window.addEventListener("open-gallery-item", handleOpenItem);
    return () => window.removeEventListener("open-gallery-item", handleOpenItem);
  }, []);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null
    );
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null
    );
  };

  // Framer Motion Variants for Staggered Entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14,
      },
    },
  };

  return (
    <section
      id="gallery"
      className={`relative w-full min-h-screen bg-white overflow-hidden px-4 md:px-8 py-20 md:py-32 ${patrickHand.variable}`}
    >
      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* HEADER SECTION */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
          <div>
            <p className="text-sky-600 uppercase tracking-[0.3em] text-[10px] md:text-[11px] mb-2 font-bold font-mono">
              EXH // THE ARCHIVE
            </p>
            <h1 className="text-[12vw] md:text-[6.5vw] leading-[0.85] font-black tracking-tight uppercase text-black select-none drop-shadow-sm">
              <span className="bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
                GALLERY
              </span>
            </h1>
          </div>
          <p
            className="text-black/60 text-lg md:text-2xl max-w-sm md:text-right leading-snug"
            style={{ fontFamily: "var(--font-patrick-hand), cursive" }}
          >
            A majestic collection of bespoke pieces, capturing raw emotion and structural depth.
          </p>
        </div>

        {/* RESPONSIVE CSS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 md:auto-rows-[220px] lg:auto-rows-[280px]"
        >
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedImageIndex(index)}
              className={`group relative w-full h-64 sm:h-80 md:h-full overflow-hidden rounded-2xl border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 ease-out bg-black/5 cursor-pointer ${item.gridClass}`}
            >
              {/* Glassmorphic Item Number */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/40 shadow-sm text-xs font-semibold text-black font-mono">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              {/* Image component */}
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Hover overlay details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 z-10">
                <span className="text-sky-400 uppercase tracking-widest text-[10px] font-bold mb-1 font-mono">
                  {item.category}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">
                  {item.label}
                </h3>
                <span className="text-white/60 text-xs mt-2.5 flex items-center gap-1.5 group/btn font-semibold">
                  View Artwork{" "}
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8 select-none"
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between w-full text-white/80 z-50">
              <span className="font-mono text-sm tracking-wider font-semibold">
                {(selectedImageIndex + 1).toString().padStart(2, "0")} //{" "}
                {GALLERY_ITEMS.length.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 transition-all cursor-pointer"
                aria-label="Close lightbox"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content / Navigation */}
            <div className="relative w-full h-[65vh] md:h-[75vh] flex items-center justify-center my-auto">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-0 md:left-4 z-50 p-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 transition-all text-white cursor-pointer"
                aria-label="Previous artwork"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Interactive Image Frame */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={GALLERY_ITEMS[selectedImageIndex].src}
                      alt={GALLERY_ITEMS[selectedImageIndex].label}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-0 md:right-4 z-50 p-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 transition-all text-white cursor-pointer"
                aria-label="Next artwork"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Bottom Bar details */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl mx-auto text-center space-y-2 pb-2 md:pb-6 z-50"
            >
              <span className="text-sky-400 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold font-mono">
                {GALLERY_ITEMS[selectedImageIndex].category}
              </span>
              <h2 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tight leading-none">
                {GALLERY_ITEMS[selectedImageIndex].label}
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}