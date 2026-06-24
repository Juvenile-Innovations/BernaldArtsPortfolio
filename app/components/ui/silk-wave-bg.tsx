"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const STRANDS = [
  { color: "rgba(244, 63, 94, ", freq: 0.002, amp: 90, speed: 0.02, offset: 0 },       // Rose/Magenta
  { color: "rgba(168, 85, 247, ", freq: 0.0018, amp: 105, speed: -0.015, offset: 1.5 }, // Violet/Purple
  { color: "rgba(6, 182, 212, ", freq: 0.0022, amp: 80, speed: 0.025, offset: 3.0 },   // Cyan
  { color: "rgba(16, 185, 129, ", freq: 0.0015, amp: 95, speed: -0.018, offset: 4.5 },  // Emerald Green
  { color: "rgba(234, 179, 8, ", freq: 0.0025, amp: 70, speed: 0.022, offset: 6.0 },   // Holi Yellow
  { color: "rgba(249, 115, 22, ", freq: 0.0019, amp: 100, speed: -0.02, offset: 7.5 },  // Vivid Orange
];

export const SilkWaveBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // GSAP State for smooth parameter tweening (breathing & velocity mapping)
    const animState = {
      time: 0,
      amplitudeMultiplier: 1.0,
      frequencyMultiplier: 1.0,
    };

    // Breathe Amplitude in and out
    const ampTween = gsap.to(animState, {
      amplitudeMultiplier: 1.25,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Breathe Frequency in and out
    const freqTween = gsap.to(animState, {
      frequencyMultiplier: 0.8,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Uniform timeline drive
    const timeTween = gsap.to(animState, {
      time: 200,
      duration: 30,
      repeat: -1,
      ease: "none",
    });

    const draw = () => {
      if (!ctx || !canvas) return;

      // Dark background fill
      ctx.fillStyle = "rgba(10, 10, 10, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      const centerY = canvas.height / 2;
      const subStrandCount = 7; // Number of parallel silk fibers per strand

      STRANDS.forEach((s) => {
        const baseAmp = s.amp * animState.amplitudeMultiplier;
        const baseFreq = s.freq * animState.frequencyMultiplier;

        for (let j = 0; j < subStrandCount; j++) {
          ctx.beginPath();
          
          // Calculate slightly modified amplitudes and phase offsets for sub-strands
          const subAmp = baseAmp * (1.0 + (j - subStrandCount / 2) * 0.07);
          const subFreq = baseFreq * (1.0 + (j - subStrandCount / 2) * 0.015);
          const phaseOffset = j * 0.12 + s.offset;

          for (let x = 0; x <= canvas.width; x += 8) {
            const phase = animState.time * s.speed + phaseOffset;
            const modulation = Math.sin(animState.time * 0.1 + x * 0.0005) * 12;

            const y = centerY + 
              Math.sin(x * subFreq + phase) * subAmp + 
              modulation;

            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }

          // Very low opacity lines drawn on top of each other create the soft volumetric ribbon glow
          ctx.strokeStyle = `${s.color}0.085)`;
          ctx.lineWidth = 1.8;
          ctx.stroke();
        }
      });

      ctx.restore();
    };

    // Smooth render tick loop
    let frameId: number;
    const tick = () => {
      draw();
      frameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(frameId);
      ampTween.kill();
      freqTween.kill();
      timeTween.kill();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
