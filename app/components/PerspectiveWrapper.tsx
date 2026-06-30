"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PerspectiveWrapper({
  children,
  nextSection
}: {
  children: React.ReactNode;
  nextSection?: React.ReactNode;
}) {
  const nextSectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: nextSectionRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div className="relative w-full">
      <motion.div
        style={{ scale, rotateX: rotate, opacity, transformPerspective: 1200, transformOrigin: "bottom" }}
        className="sticky bottom-0 w-full"
      >
        {children}
      </motion.div>
      {nextSection && (
        <div ref={nextSectionRef} className="relative z-10 w-full bg-black shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          {nextSection}
        </div>
      )}
    </div>
  );
}
