"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ARTWORKS = [
  { id: "001", label: "Graphite Study" },
  { id: "002", label: "Mural Execution" },
  { id: "003", label: "Canvas Texture" },
  { id: "004", label: "Mixed Media" },
  { id: "005", label: "Charcoal Depth" },
  { id: "006", label: "Vibrant Pigment" },
  { id: "007", label: "Acrylic Wash" },
  { id: "008", label: "Oil Glaze" },
  { id: "009", label: "Cinematic Lighting" },
  { id: "010", label: "Final Varnish" },
];

const SERVICES = [
  { id: "01", label: "Wall Art" },
  { id: "02", label: "Pencil Art" },
  { id: "03", label: "Colour Pencil" },
  { id: "04", label: "Acrylic Art" },
  { id: "05", label: "Oil Painting" },
  { id: "06", label: "Watercolor" },
  { id: "07", label: "Blood Art" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const logoNameColor = scrolled || isOpen ? "text-neutral-900" : "text-white";
  const logoSubColor = scrolled || isOpen ? "text-neutral-500" : "text-white/60";
  const logoBorder = scrolled || isOpen ? "border-black/10" : "border-white/40";
  const hamburgerBg = scrolled || isOpen ? "bg-neutral-800" : "bg-white";

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        scrolled && !isOpen
          ? "bg-white/70 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_2px_20px_rgba(0,0,0,0.04)]" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-5 md:px-10">
        <nav className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16 md:h-20" : "h-20 md:h-24"}`}>
          
          {/* LOGO */}
          <div className="flex items-center gap-3 relative z-[1001]">
            <div className={`relative w-11 h-11 md:w-14 md:h-14 rounded-full border ${logoBorder} overflow-hidden flex items-center justify-center transition-all duration-500`}>
              <Image src="/images/BernaldArtsLogo.png" alt="Bernald Arts Logo" fill sizes="(max-width: 768px) 44px, 56px" className="object-cover" priority />
            </div>
            <div>
              <p className={`text-[12px] md:text-[14px] uppercase tracking-[0.18em] font-medium transition-colors duration-500 ${logoNameColor}`}>Bernald Arts</p>
              <p className={`text-[9px] md:text-[11px] uppercase tracking-[0.22em] transition-colors duration-500 ${logoSubColor}`}>Multi-Surface Mixed-Media Artist</p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden xl:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group/nav">
                <a href={link.href} className="flex flex-col uppercase transition-all duration-500 pb-2">
                  <span className={`text-[9px] tracking-[0.28em] mb-1 transition-colors duration-500 ${scrolled ? "text-neutral-400" : "text-white/35"}`}>{link.number}</span>
                  <span className={`relative text-[12px] tracking-[0.24em] font-semibold transition-all duration-500 group-hover/nav:tracking-[0.3em] ${scrolled ? "text-neutral-700 group-hover/nav:text-sky-600" : "text-white group-hover/nav:text-sky-400"}`}>
                    {link.label}
                    <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-gradient-to-r from-fuchsia-500 to-sky-400 transition-all duration-500 group-hover/nav:w-full" />
                  </span>
                </a>

                {/* Dropdown Menu for Services */}
                {link.label === "SERVICES" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 opacity-0 scale-95 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:scale-100 group-hover/nav:pointer-events-auto transition-all duration-300 ease-out z-50">
                    <div className="bg-white/95 backdrop-blur-xl border border-black/10 shadow-2xl rounded-2xl p-4">
                      <p className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold border-b border-black/5 pb-2 mb-2 font-mono">
                        All Services
                      </p>
                      <div className="space-y-1 max-h-60 overflow-y-auto pr-1 scrollbar-hide">
                        {SERVICES.map((service, index) => (
                          <a
                            key={index}
                            href={`#service-${service.id}`}
                            className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-sky-500/10 transition-colors cursor-pointer group/item"
                          >
                            <span className="font-mono text-[10px] text-sky-600 font-bold">
                              {service.id}
                            </span>
                            <span className="text-xs font-bold text-neutral-800 group-hover/item:text-sky-600 transition-colors">
                              {service.label}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Dropdown Menu for Gallery */}
                {link.label === "GALLERY" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 opacity-0 scale-95 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:scale-100 group-hover/nav:pointer-events-auto transition-all duration-300 ease-out z-50">
                    <div className="bg-white/95 backdrop-blur-xl border border-black/10 shadow-2xl rounded-2xl p-4">
                      <p className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold border-b border-black/5 pb-2 mb-2 font-mono">
                        All Artworks
                      </p>
                      <div className="space-y-1 max-h-60 overflow-y-auto pr-1 scrollbar-hide">
                        {ARTWORKS.map((art, index) => (
                          <a
                            key={index}
                            href="#gallery"
                            onClick={() => {
                              window.dispatchEvent(new CustomEvent("open-gallery-item", { detail: index }));
                            }}
                            className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-sky-500/10 transition-colors cursor-pointer group/item"
                          >
                            <span className="font-mono text-[10px] text-sky-600 font-bold">
                              {art.id}
                            </span>
                            <span className="text-xs font-bold text-neutral-800 group-hover/item:text-sky-600 transition-colors">
                              {art.label}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* MOBILE HAMBURGER */}
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" aria-expanded={isOpen} className="xl:hidden relative z-[1002] w-12 h-12 flex items-center justify-center">
            <div className="relative w-7 h-7">
              {[1, 2, 3].map((i) => (
                <span key={i} className={`absolute left-0 w-7 h-[1.5px] transition-all duration-500 ${hamburgerBg} ${i === 1 ? (isOpen ? "rotate-45 top-3.5" : "top-1") : i === 2 ? (isOpen ? "opacity-0" : "top-3.5") : (isOpen ? "-rotate-45 top-3.5" : "top-6")}`} />
              ))}
            </div>
          </button>
        </nav>
      </div>

      {/* MOBILE MENU overlay */}
      <div 
        className={`
          fixed top-0 left-0 w-full h-[100dvh] z-[1000] xl:hidden 
          transition-all duration-500 ease-in-out overflow-y-auto
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Light Glassmorphic Background */}
        <div className="fixed inset-0 bg-white/95 backdrop-blur-2xl" />

        {/* Cohesive Neon Lighting Ambient Accents */}
        <div className="fixed -top-20 -left-20 w-80 h-80 rounded-full bg-fuchsia-500/5 blur-[100px] pointer-events-none" />
        <div className="fixed bottom-10 right-10 w-96 h-96 rounded-full bg-sky-500/5 blur-[130px] pointer-events-none" />

        {/* Content Layer */}
        <div className="relative min-h-full flex flex-col px-8 pt-32 pb-12 justify-between">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <div key={link.href} className="space-y-2">
                <a
                  href={link.href}
                  onClick={() => {
                    if (link.label !== "GALLERY" && link.label !== "SERVICES") {
                      setIsOpen(false);
                    }
                  }}
                  className="block group"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] tracking-[0.2em] font-semibold text-neutral-400 group-hover:text-fuchsia-500 transition-colors">
                      {link.number}
                    </span>
                    <span className="text-[24px] uppercase tracking-[0.1em] font-bold text-neutral-800 group-hover:text-sky-600 transition-colors">
                      {link.label}
                    </span>
                  </div>
                </a>

                {/* Mobile Submenu for SERVICES */}
                {link.label === "SERVICES" && (
                  <div className="pl-10 pt-1 pb-2 space-y-2 max-h-48 overflow-y-auto scrollbar-hide border-l border-neutral-100">
                    {SERVICES.map((service, index) => (
                      <a
                        key={index}
                        href={`#service-${service.id}`}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className="block text-xs font-semibold text-neutral-500 hover:text-sky-600 transition-colors"
                      >
                        <span className="font-mono mr-2 text-[10px] text-sky-500">{service.id}</span>
                        {service.label}
                      </a>
                    ))}
                  </div>
                )}

                {/* Mobile Submenu for GALLERY */}
                {link.label === "GALLERY" && (
                  <div className="pl-10 pt-1 pb-2 space-y-2 max-h-48 overflow-y-auto scrollbar-hide border-l border-neutral-100">
                    {ARTWORKS.map((art, index) => (
                      <a
                        key={index}
                        href="#gallery"
                        onClick={() => {
                          setIsOpen(false);
                          setTimeout(() => {
                            window.dispatchEvent(new CustomEvent("open-gallery-item", { detail: index }));
                          }, 100);
                        }}
                        className="block text-xs font-semibold text-neutral-500 hover:text-sky-600 transition-colors"
                      >
                        <span className="font-mono mr-2 text-[10px] text-sky-500">{art.id}</span>
                        {art.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-8">
            {/* Clean Call To Action Trigger */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full py-4 text-center font-bold uppercase tracking-[0.2em] text-neutral-800 rounded-full bg-black/5 border border-black/10 hover:bg-black/10 transition-all duration-300"
            >
              Book An Art Session
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}