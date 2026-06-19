import Container from "../components/Container";

// I moved the data into the file for absolute compactness, 
// but you can still import it from "../data/stats" if you prefer.
const STATS_DATA = [
  {
    value: "08+",
    label: "Years Mastery",
    description: "Perfecting the craft of visual storytelling and large-scale murals.",
  },
  {
    value: "150+",
    label: "Projects Crafted",
    description: "Unique artworks delivered across commercial and residential spaces.",
  },
  {
    value: "100+",
    label: "Happy Clients",
    description: "Collaborating with brands and individuals to bring visions to life.",
  },
  {
    value: "05+",
    label: "Art Awards",
    description: "Recognized for excellence in mixed media and contemporary art.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievement"
      className="relative min-h-screen bg-black py-24 md:py-32 overflow-hidden flex items-center"
    >
      {/* NATIVE CSS BLUEPRINT GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:100px_100px] pointer-events-none" />

      {/* MASSIVE BACKGROUND WATERMARK */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
        <h2 className="text-[20vw] font-black uppercase leading-none text-transparent tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.03)' }}>
          Milestones
        </h2>
      </div>

      <Container>
        <div className="relative z-10">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 md:mb-32">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#d4af37]" />
                <p className="text-[#d4af37] uppercase tracking-[0.4em] text-xs font-bold">
                  Achievements
                </p>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] text-white tracking-[-0.04em]">
                Creative
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                  Milestones
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-white/60 text-sm md:text-base leading-relaxed border-l border-[#d4af37]/30 pl-6">
              Every artwork tells a story. Every milestone reflects years of dedication, creativity, and unyielding artistic excellence.
            </p>
          </div>

          {/* STAGGERED STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {STATS_DATA.map((stat, index) => {
              // Creates a staggered "waterfall" layout on desktop
              const marginTopClass = 
                index === 1 ? "lg:mt-12" : 
                index === 2 ? "lg:mt-24" : 
                index === 3 ? "lg:mt-36" : "";

              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-white/10 p-8 lg:p-10 transition-all duration-500 hover:border-[#d4af37]/60 hover:bg-[#d4af37]/5 ${marginTopClass}`}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Animated Gold Top Border */}
                  <div className="absolute top-0 left-0 w-0 h-1 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />

                  {/* Numeric Value */}
                  <div className="text-[#d4af37] text-6xl md:text-7xl font-black leading-none mb-6 tracking-tighter drop-shadow-lg">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <h3 className="text-white uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-4">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  {stat.description && (
                    <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}