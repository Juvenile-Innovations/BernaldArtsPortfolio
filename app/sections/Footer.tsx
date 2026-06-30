import React from "react";
import Image from "next/image";
import { spaceGrotesk, shareTechMono } from "@/app/lib/fonts";

export default function Footer() {
  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <footer className="fixed bottom-0 w-full h-screen bg-white text-black flex flex-col justify-between p-8 md:p-16">
        {/* Massive Blurred Logo in the Background (Moved to Right, Angled, Reduced Blur) */}
        <div className="absolute top-1/2 right-[-20vw] md:right-[-10vw] -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] opacity-20 rotate-[15deg] pointer-events-none">
          <Image
            src="/images/BernaldArtsLogo.png"
            alt="Bernald Arts Logo Background"
            fill
            className="object-contain"
          />
        </div>

        {/* Top Section */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start">
          <div className="max-w-md">
            <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter ${spaceGrotesk.className}`}>
              Let's create <br /> something timeless.
            </h2>
          </div>
          <div className={`mt-8 md:mt-0 flex flex-col gap-2 font-mono uppercase text-sm font-bold tracking-widest ${shareTechMono.className}`}>
            <a href="mailto:contact@bernaldarts.com" className="hover:text-rose-600 transition-colors">
              contact@bernaldarts.com
            </a>
            <a href="tel:+919876543210" className="hover:text-rose-600 transition-colors">
              +91 98765 43210
            </a>
          </div>
        </div>

        {/* Bottom Section with Portrait and Overlapping Text */}
        <div className="relative z-10 flex flex-col items-center justify-end mt-auto h-full">
          
          {/* Overlapping Text (Moved to Front) */}
          <div className="absolute bottom-4 md:bottom-8 w-full text-center pointer-events-none z-20">
            <h1 
              className={`text-[13vw] leading-none font-black tracking-tight text-transparent ${spaceGrotesk.className}`}
            >
              <span style={{ WebkitTextStroke: "2px black", textStroke: "2px black" }}>BERN</span>
              <span style={{ WebkitTextStroke: "2px white", textStroke: "2px white" }}>ALD</span>
              <span style={{ WebkitTextStroke: "2px black", textStroke: "2px black" }}> ARTS</span>
            </h1>
          </div>

          {/* Artist Portrait (Centered, stuck to bottom, massive scale, Moved to Back) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] md:w-[100vw] h-[75vh] md:h-[95vh] z-10 pointer-events-none">
            <Image
              src="/images/footer_boss.png"
              alt="Bernald Arts Portrait"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        <div className={`relative z-30 flex flex-col md:flex-row justify-between items-center mt-4 pt-4 border-t border-black/10 font-mono text-xs uppercase tracking-widest text-black/50 ${shareTechMono.className}`}>
          <p>© {new Date().getFullYear()} Bernald Arts. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">Behance</a>
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
