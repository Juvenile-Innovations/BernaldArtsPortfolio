import Image from "next/image";

const SERVICES_DATA = [
  {
    id: "01",
    title: "Wall Art",
    description: "Customized wall art and mural works for homes and commercial spaces.",
    fullDescription: "Large-scale wall art designed for homes, cafes, offices and commercial spaces.\n\n• Custom themes\n• Premium paints\n• Weather resistant coating\n• Indoor & outdoor projects",
    image: "/videos/services/wall-art.webm",
  },
  {
    id: "02",
    title: "Pencil Art",
    description: "Detailed pencil portraits with realistic cinematic detailing.",
    fullDescription: "Hyper-realistic pencil portraits with cinematic lighting and fine details.\n\n• Graphite & charcoal options\n• Custom portrait commissions\n• Museum-grade paper\n• Framing available",
    image: "/videos/services/pencil-art.webm",
  },
  {
    id: "03",
    title: "Colour Pencil",
    description: "Premium colour pencil artworks with rich textures.",
    fullDescription: "Vibrant colour pencil artworks with layered textures and smooth gradients.\n\n• Professional-grade pencils\n• Lightfast pigments\n• Detailed illustrative style\n• Custom sizes available",
    image: "/images/services/colour-pencil.gif",
  },
  {
    id: "04",
    title: "Acrylic",
    description: "Emotion-driven acrylic paintings with storytelling visuals.",
    fullDescription: "Expressive acrylic paintings that capture emotions and narratives.\n\n• Stretched canvas or panel\n• High-quality acrylics\n• Abstract & figurative styles\n• Varnished for protection",
    image: "/images/services/acrylic.gif",
  },
  {
    id: "05",
    title: "Oil Painting",
    description: "Classic oil paintings with gallery-style finish.",
    fullDescription: "Traditional oil paintings with rich depth and gallery-ready finish.\n\n• Archival linen or cotton canvas\n• Professional oil paints\n• Classical techniques\n• Ready to hang",
    image: "/videos/services/pint-art.webm",
  },
  {
    id: "06",
    title: "Watercolor Art",
    description: "Flowing watercolor paintings with vibrant washes and translucent layers.",
    fullDescription: "Delicate watercolor artworks with luminous washes and soft transitions.\n\n• 100% cotton paper\n• Lightfast watercolors\n• Botanical & landscape themes\n• Protected with UV fixative",
    image: "/images/services/watercolor.gif",
  },
  {
    id: "07",
    title: "Blood Art",
    description: "Edgy and expressive blood art pieces with bold impact.",
    fullDescription: "Bold, unconventional blood art pieces that make a striking statement.\n\n• Non-toxic synthetic medium\n• Deep red and monochrome palette\n• Experimental techniques\n• Sealed with protective coating",
    image: "/videos/services/blood-art.webm",
  },
];

function Media({ src, alt }: { src: string; alt: string }) {
  const isVideo = src.endsWith(".webm");
  const isGif = src.endsWith(".gif");

  const className = "w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 brightness-[0.8]";

  if (isVideo) {
    return (
      <video autoPlay muted loop playsInline preload="metadata" className={className}>
        <source src={src} type="video/webm" />
      </video>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized={isGif}
      className={className}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}

export default function Services() {
  return (
    <section 
      id="services" 
      className="relative px-6 md:px-12 py-24 md:py-32 bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{ backgroundImage: "url('/images/service-bg.jpg')" }} // Ensure this path matches your public folder
    >
      {/* Dark overlay to ensure the cards and text stand out against the doodle */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 md:mb-24">
          <p className="text-[#d4af37] uppercase tracking-[0.45em] text-[10px] md:text-xs mb-4 md:mb-6 font-bold">
            Creative Services
          </p>
          <h1 className="text-[14vw] md:text-[7vw] leading-[0.85] font-black tracking-[-0.05em] uppercase text-white drop-shadow-md">
            Artistic
            <br />
            Expertise
          </h1>
        </div>

        {/* SERVICES LIST */}
        <div className="flex flex-col gap-8 md:gap-12">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`group flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } w-full overflow-hidden border border-white/10 bg-black/60 backdrop-blur-md rounded-2xl hover:border-[#d4af37]/40 transition-colors duration-500 shadow-2xl`}
              >
                {/* MEDIA CONTAINER */}
                <div className="relative h-72 md:h-auto md:w-1/2 overflow-hidden bg-black">
                  <Media src={service.image} alt={service.title} />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
                </div>

                {/* TEXT CONTENT */}
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 md:w-1/2">
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.45em] mb-4">
                    {service.id}
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.02em] uppercase text-[#d4af37] mb-4 drop-shadow-sm">
                    {service.title}
                  </h2>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>
                  
                  <div className="text-white/60 text-sm leading-relaxed whitespace-pre-line mb-8 border-l-2 border-[#d4af37]/40 pl-4">
                    {service.fullDescription}
                  </div>

                  <a 
                    href="#contact" 
                    className="w-fit px-8 py-4 text-xs font-bold uppercase tracking-widest border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}