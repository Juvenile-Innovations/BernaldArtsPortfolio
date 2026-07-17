"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { shareTechMono } from "@/app/lib/fonts";

export default function GlobalLoader() {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scrolling while the app is loading
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    
    // Simulate a steady, cinematic loading sequence
    const interval = setInterval(() => {
      // Increment progress randomly between 3 and 15
      currentProgress += Math.floor(Math.random() * 12) + 3; 
      if (currentProgress > 100) currentProgress = 100;
      
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(interval);
        
        // When 100% is reached, wait a brief moment then fire the cinematic exit
        setTimeout(() => {
          gsap.to(logoRef.current, {
            scale: 1.1,
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
          });
          
          gsap.to(textRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
          });

          // Slide the entire dark screen up and away
          gsap.to(loaderRef.current, {
            y: "-100%",
            duration: 1.2,
            ease: "power4.inOut",
            delay: 0.3,
            onComplete: () => {
              document.body.style.overflow = ""; // Re-enable scrolling
              if (loaderRef.current) {
                loaderRef.current.style.display = "none";
              }
              if (typeof window !== "undefined") {
                window.dispatchEvent(new Event("globalLoaderFinished"));
              }
            }
          });
        }, 600);
      }
    }, 120);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#050505] text-white origin-top"
    >
      <div ref={logoRef} className="relative w-48 h-48 md:w-64 md:h-64 mb-12">
        <Image
          src="/images/brand/BernaldArtsLogo.png"
          alt="Bernald Arts Logo"
          fill
          priority
          sizes="(max-width: 768px) 192px, 256px"
          className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
        />
        {/* Pulsing glow ring behind logo */}
        <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl animate-pulse" />
      </div>
      
      <div ref={textRef} className="flex flex-col items-center gap-4">
        {/* Sleek loading bar */}
        <div className="h-[1px] w-48 md:w-64 bg-white/10 overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 h-full bg-white transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Percentage Counter */}
        <p
          className={`text-xs md:text-sm tracking-[0.3em] text-neutral-400 font-bold ${shareTechMono.className}`}
        >
          {progress === 100 ? "READY" : `LOADING... ${progress}%`}
        </p>
      </div>
    </div>
  );
}
