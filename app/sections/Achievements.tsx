import Image from "next/image";
import Container from "../components/Container";

const STATS_DATA = [
  {
    value: "08+",
    label: "Years Mastery",
    description: "Perfecting the craft of visual storytelling and large-scale murals.",
    image: "/images/gallery/image01.jpg",
  },
  {
    value: "150+",
    label: "Projects Crafted",
    description: "Unique artworks delivered across commercial and residential spaces.",
    image: "/images/gallery/image02.jpg",
  },
  {
    value: "100+",
    label: "Happy Clients",
    description: "Collaborating with brands and individuals to bring visions to life.",
    image: "/images/gallery/image03.jpg",
  },
  {
    value: "05+",
    label: "Art Awards",
    description: "Recognized for excellence in mixed media and contemporary art.",
    image: "/images/gallery/image04.jpg",
  },
  {
    value: "12+",
    label: "Exhibitions Held",
    description: "Showcasing signature collections in galleries worldwide.",
    image: "/images/gallery/image05.jpg",
  },
  {
    value: "40+",
    label: "Art Workshops",
    description: "Teaching traditional and modern painting techniques to new artists.",
    image: "/images/gallery/image06.jpg",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievement"
      className="relative w-full bg-black overflow-hidden border-b border-white/10"
    >
      {/* NATIVE CSS BLUEPRINT GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:100px_100px] pointer-events-none" />

      {/* CURVED WHITE TOP DIVIDER */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[120px] text-white fill-current"
        >
          <path d="M0,0 L1440,0 L1440,80 C1080,160 360,0 0,80 Z" />
        </svg>
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 pt-28 md:pt-40 pb-12 md:pb-16 relative z-10">
        <p className="text-[#d4af37] uppercase tracking-[0.3em] text-[10px] md:text-[11px] mb-2 font-bold font-mono">
          EXP // MILESTONES
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight">
          Hear my achievements
        </h2>
      </div>

      {/* 6 DIVISION GRID LAYOUT - NO MARGIN */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-0 relative z-10 border-t border-white/10">
        {STATS_DATA.map((stat, index) => {
          return (
            <div
              key={index}
              className="group relative overflow-hidden bg-white/[0.01] border-b border-white/10 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(n+4)]:border-b-0 sm:[&:nth-child(n+5)]:border-b-0 last:border-b-0 transition-all duration-500 hover:bg-white/[0.03] flex flex-col w-full"
            >
              {/* Header Image */}
              {stat.image && (
                <div className="relative w-full h-52 sm:h-60 md:h-64 overflow-hidden">
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                </div>
              )}

              {/* Card Content */}
              <div className="p-8 md:p-10 flex flex-col flex-grow relative justify-center bg-black/40">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.06),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Animated Gold Top Border */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />

                {/* Numeric Value */}
                <div className="text-[#d4af37] text-5xl md:text-6xl font-black leading-none mb-3 tracking-tighter drop-shadow-lg">
                  {stat.value}
                </div>

                {/* Title */}
                <h3 className="text-white uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                {stat.description && (
                  <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-sm">
                    {stat.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}