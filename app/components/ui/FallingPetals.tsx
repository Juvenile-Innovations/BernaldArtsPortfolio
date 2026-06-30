"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export const FallingPetals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const petals = useMemo(() => {
    // Just a few petals
    return Array.from({ length: 12 }).map((_, i) => {
      const size = Math.random() * 15 + 10; // 10px to 25px
      const duration = Math.random() * 25 + 20; // 20s to 45s (very slow floating)
      const delay = Math.random() * -20; // Negative delay so they start immediately in motion

      // Generate random floating waypoints across the screen
      const waypoints = 6;
      const xPath = Array.from({ length: waypoints }).map(() => `${Math.random() * 100}vw`);
      const yPath = Array.from({ length: waypoints }).map(() => `${Math.random() * 100}vh`);
      
      // Close the loop to make it repeat seamlessly
      xPath.push(xPath[0]);
      yPath.push(yPath[0]);

      const rotationPath = Array.from({ length: waypoints + 1 }).map((_, idx) => idx * 360);

      // Random opacity fading throughout the journey
      const opacityPath = Array.from({ length: waypoints + 1 }).map((_, idx) => 
        idx === 0 || idx === waypoints ? 0 : Math.random() * 0.6 + 0.3
      );

      return { id: i, size, xPath, yPath, opacityPath, duration, delay, rotationPath };
    });
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: petal.size,
            height: petal.size * 0.8,
            left: 0,
            top: 0,
            background: "radial-gradient(ellipse at center, #ff1a55 0%, #c10037 100%)",
            borderRadius: "50% 0 50% 50%", 
            filter: "blur(0.5px)",
            boxShadow: "0 2px 4px rgba(255, 26, 85, 0.2)",
          }}
          animate={{
            x: petal.xPath,
            y: petal.yPath,
            rotate: petal.rotationPath,
            opacity: petal.opacityPath,
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: petal.delay,
          }}
        />
      ))}
    </div>
  );
};
