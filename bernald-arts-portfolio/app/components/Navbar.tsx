"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("hero");

  const navLinks = [
    { number: "01", label: "ABOUT", href: "#about" },
    { number: "02", label: "SERVICES", href: "#services" },
    { number: "03", label: "GALLERY", href: "#gallery" },
    { number: "04", label: "ACHIEVEMENTS", href: "#achievement" },
    { number: "05", label: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.3, 0.7, 1],
      rootMargin: "-50% 0px -50% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id || "hero");
        }
      });
    }, observerOptions);

    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const isLightSection = currentSection === "about";
  const isDarkText = isLightSection;

  return (
    <header className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${isLightSection ? (scrolled ? "bg-[#f5f1eb]/90 backdrop-blur-2xl border-b border-black/10" : "bg-[#f5f1eb]/70 backdrop-blur-2xl border-b border-black/10") : (scrolled ? "bg-black/40 backdrop-blur-2xl border-b border-white/10" : "bg-transparent")}`}>
      <div className="w-full px-5 md:px-10">
        <nav className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16 md:h-20" : "h-20 md:h-24"}`}>
          
          {/* LOGO */}
          <div className="flex items-center gap-3 relative z-[1001]">
            <div className={`relative w-11 h-11 md:w-14 md:h-14 rounded-full border overflow-hidden flex items-center justify-center transition-all duration-500 ${isDarkText ? "border-black/20" : "border-white/70"}`}>
              <Image src="/images/BernaldArtsLogo.png" alt="Bernald Arts Logo" fill sizes="(max-width: 768px) 44px, 56px" className="object-cover" priority />
            </div>
            <div>
              <p className={`text-[12px] md:text-[14px] uppercase tracking-[0.18em] font-medium transition-colors ${isDarkText ? "text-black" : "text-white"}`}>Bernald Arts</p>
              <p className={`text-[9px] md:text-[11px] uppercase tracking-[0.22em] transition-colors ${isDarkText ? "text-black/40" : "text-white/50"}`}>Multi-Surface Mixed-Media Artist</p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden xl:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="group relative overflow-hidden flex flex-col uppercase transition-all duration-500">
                <span className={`text-[9px] tracking-[0.28em] mb-1 transition-all duration-500 ${isDarkText ? "text-black/35" : "text-white/35"}`}>{link.number}</span>
                <span className={`relative text-[12px] tracking-[0.24em] font-semibold transition-all duration-500 group-hover:tracking-[0.3em] ${isDarkText ? "text-black" : "text-white"}`}>
                  {link.label}
                  <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-current transition-all duration-500 group-hover:w-full" />
                </span>
              </a>
            ))}
          </div>

          {/* MOBILE HAMBURGER */}
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" aria-expanded={isOpen} className="xl:hidden relative z-[1002] w-12 h-12 flex items-center justify-center">
            <div className="relative w-7 h-7">
              {[1, 2, 3].map((i) => (
                <span key={i} className={`absolute left-0 w-7 h-[1.5px] transition-all duration-500 ${isDarkText ? "bg-black" : "bg-white"} ${i === 1 ? (isOpen ? "rotate-45 top-3.5" : "top-1") : i === 2 ? (isOpen ? "opacity-0" : "top-3.5") : (isOpen ? "-rotate-45 top-3.5" : "top-6")}`} />
              ))}
            </div>
          </button>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <div 
        className={`
          fixed top-0 left-0 w-full h-[100dvh] z-[1000] xl:hidden 
          transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Background Layer with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: isLightSection ? "none" : "url('/images/menu-bg.png')",
            backgroundColor: isLightSection ? "#f5f1eb" : "#000" 
          }}
        />
        <div className={`absolute inset-0 backdrop-blur-xl ${isLightSection ? "bg-[#f5f1eb]/80" : "bg-black/60"}`} />

        {/* Content Layer */}
        <div className="relative h-full flex flex-col px-8 pt-28 pb-12">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block group"
              >
                <div className="flex items-center gap-6">
                  <span className={`text-[10px] tracking-[0.2em] font-semibold ${isLightSection ? "text-black/40" : "text-white/40"}`}>
                    {link.number}
                  </span>
                  <span className={`text-[24px] uppercase tracking-[0.1em] font-bold ${isLightSection ? "text-black" : "text-white"}`}>
                    {link.label}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="flex-1" />

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={`w-full py-5 text-center font-bold uppercase tracking-[0.2em] rounded-lg border transition-all duration-300 ${
              isLightSection 
                ? "bg-black text-white border-black" 
                : "bg-white text-black border-white"
            }`}
          >
            Book An Art Session
          </a>
        </div>
      </div>
    </header>
  );
}