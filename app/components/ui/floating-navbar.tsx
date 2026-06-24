"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { classNames as cn } from "@/app/lib/utils";
import Link from "next/link";
import { spaceGrotesk, shareTechMono } from "@/app/lib/fonts";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.02) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className={cn(
          "flex max-w-[92vw] sm:max-w-fit fixed top-4 sm:top-6 inset-x-0 mx-auto border border-white/[0.08] rounded-full bg-neutral-950/30 backdrop-blur-xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.5),0px_1px_0px_0px_rgba(255,255,255,0.05)] z-[5000] px-4 py-2 sm:px-6 sm:py-2.5 items-center justify-center space-x-4 sm:space-x-6 md:space-x-8",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-400 hover:text-white flex items-center space-x-1 sm:space-x-1.5 transition-colors group shrink-0",
              spaceGrotesk.className
            )}
          >
            <span className="text-neutral-500 group-hover:text-rose-500 transition-colors [&>svg]:h-4.5 [&>svg]:w-4.5 sm:[&>svg]:h-5 sm:[&>svg]:w-5">
              {navItem.icon}
            </span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest hidden sm:block">{navItem.name}</span>
          </Link>
        ))}

        <a
          href="#contact"
          className={cn(
            "border text-[9px] sm:text-[10px] font-bold uppercase tracking-widest relative border-rose-500/30 text-white px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-rose-500/10 hover:bg-rose-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(244,63,94,0.15)] shrink-0",
            shareTechMono.className
          )}
        >
          <span className="inline sm:hidden">Book</span>
          <span className="hidden sm:inline">Book Art</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-rose-500 to-transparent h-px" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
