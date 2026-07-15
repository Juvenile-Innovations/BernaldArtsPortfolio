import React from "react";
import Image from "next/image";
import { spaceGrotesk, shareTechMono } from "@/app/lib/fonts";
import { IconBrandInstagram, IconBrandWhatsapp, IconBrandYoutube, IconPhone } from "@tabler/icons-react";

const collabs = [
  "Salem RR Biriyani",
  "Detailing Marfia",
  "Meenchatti Food",
  "Abhi Food",
  "Alien Bistro",
  "Hungry JIMMS",
  "Tantra Tattoos",
  "Makilachi Events",
  "Dark Box"
];

export default function Footer() {
  return (
    <>
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <footer className="fixed bottom-0 w-full h-screen bg-white text-black flex flex-col justify-between p-8 md:p-16">
        {/* Massive Abstract Watermark Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] md:w-[90vw] md:h-[90vw] opacity-20 rotate-[-15deg] pointer-events-none">
          <Image
            src="/images/brand/BernaldArtsLogo.png"
            alt="Bernald Arts Logo Background"
            fill
            className="object-contain"
          />
        </div>

        {/* Top Section */}
        <div className="relative z-30 flex flex-col w-full pointer-events-auto">
          <div className="max-w-md">
            <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter ${spaceGrotesk.className}`}>
              Let's create <br /> something timeless.
            </h2>
          </div>
        </div>

        {/* Center Social & Contact Hub - Ultra Premium */}
        <div className="relative z-30 flex flex-wrap justify-center items-center gap-8 md:gap-16 w-full pointer-events-auto mt-auto mb-auto">
          
          <a href="#" className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-black text-white transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-[0_10px_40px_-10px_#E1306C] group-hover:text-[#E1306C]">
              <IconBrandInstagram size={36} stroke={1.2} />
            </div>
            <span className={`font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-black/40 group-hover:text-black transition-colors duration-500 ${shareTechMono.className}`}>Instagram</span>
          </a>

          <a href="#" className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-black text-white transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-[0_10px_40px_-10px_#25D366] group-hover:text-[#25D366]">
              <IconBrandWhatsapp size={36} stroke={1.2} />
            </div>
            <span className={`font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-black/40 group-hover:text-black transition-colors duration-500 ${shareTechMono.className}`}>WhatsApp</span>
          </a>

          <a href="#" className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-black text-white transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-[0_10px_40px_-10px_#FF0000] group-hover:text-[#FF0000]">
              <IconBrandYoutube size={36} stroke={1.2} />
            </div>
            <span className={`font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-black/40 group-hover:text-black transition-colors duration-500 ${shareTechMono.className}`}>YouTube</span>
          </a>

          <a href="tel:+919876543210" className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-black text-white transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-[0_10px_40px_-10px_#d4af37] group-hover:text-[#d4af37]">
              <IconPhone size={36} stroke={1.2} />
            </div>
            <span className={`font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-black/40 group-hover:text-black transition-colors duration-500 ${shareTechMono.className}`}>Call Us</span>
          </a>

        </div>

        {/* Bottom Section with Portrait and Overlapping Text */}
        <div className="relative z-10 flex flex-col items-center justify-end mt-auto h-full">
          
          {/* Overlapping Text (Moved to Front) */}
          <div className="absolute bottom-16 md:bottom-24 w-full text-center pointer-events-none z-20">
            <h1 
              className={`text-[13vw] leading-none font-black tracking-tight text-transparent ${spaceGrotesk.className}`}
              style={{ WebkitTextStroke: "2px black" }}
            >
              BERNALD ARTS
            </h1>
          </div>

        </div>
      </footer>
    </div>

    {/* Branded Collabs Marquee - Placed BELOW the entire footer */}
    <div className="w-full bg-black py-6 md:py-8 overflow-hidden flex flex-col relative z-50">
      <h3 className={`text-white/50 text-center text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-4 md:mb-6 ${shareTechMono.className}`}>
        Branded Collaborations
      </h3>
      <div className="relative w-full flex overflow-x-hidden">
        <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <style>{`
          @keyframes footerMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-footer-marquee {
            animation: footerMarquee 35s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-footer-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="animate-footer-marquee">
          {[...collabs, ...collabs].map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center px-4 md:px-8">
              <span className={`text-xl md:text-3xl font-black uppercase tracking-widest text-white hover:text-[#d4af37] transition-colors duration-300 whitespace-nowrap cursor-default ${spaceGrotesk.className}`}>
                {brand}
              </span>
              <span className="ml-4 md:ml-8 text-[#d4af37]/60 text-xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
