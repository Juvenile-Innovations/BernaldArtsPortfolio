"use client";
import React from "react";
import Image from "next/image";
import { spaceGrotesk, shareTechMono } from "@/app/lib/fonts";
import { FloatingNav } from "./ui/floating-navbar";
import {
  IconHome,
  IconUser,
  IconBrush,
  IconPhoto,
  IconAward,
} from "@tabler/icons-react";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <IconHome className="h-4 w-4" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4" />,
    },
    {
      name: "Services",
      link: "#services",
      icon: <IconBrush className="h-4 w-4" />,
    },
    {
      name: "Gallery",
      link: "#gallery",
      icon: <IconPhoto className="h-4 w-4" />,
    },
    {
      name: "Achievements",
      link: "#achievement",
      icon: <IconAward className="h-4 w-4" />,
    },
  ];

  return (
    <>
      {/* Fixed Logo in Top Left */}
      <div className="fixed top-4 left-4 sm:top-6 sm:left-6 md:left-10 z-[4999] flex items-center gap-2 sm:gap-3 bg-neutral-950/30 backdrop-blur-xl p-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full border border-white/[0.08] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.5),0px_1px_0px_0px_rgba(255,255,255,0.05)]">
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-white/10 overflow-hidden flex items-center justify-center bg-neutral-950">
          <Image
            src="/images/BernaldArtsLogo.png"
            alt="Bernald Arts Logo"
            fill
            sizes="(max-width: 768px) 32px, 36px"
            className="object-cover"
            priority
          />
        </div>
        <div className="hidden sm:block">
          <p className={`text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-black text-white leading-tight ${spaceGrotesk.className}`}>
            Bernald Arts
          </p>
          <p className={`text-[6px] md:text-[7px] uppercase tracking-[0.15em] text-white/50 leading-none ${shareTechMono.className}`}>
            Multi-Surface Artist
          </p>
        </div>
      </div>

      <FloatingNav navItems={navItems} />
    </>
  );
}