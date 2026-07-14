"use client";

import { useEffect, useRef } from "react";

export default function CanvasPaintTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);

    let lastX = -1;
    let lastY = -1;
    let hue = 0;

    let rafId: number;
    const fadeCanvas = () => {
      // Fade out the canvas constantly
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Adjust this value to make the tail longer or shorter (0.1 = long tail)
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";
      rafId = requestAnimationFrame(fadeCanvas);
    };
    fadeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (lastX === -1 || lastY === -1) {
        lastX = x;
        lastY = y;
        return;
      }

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 14; 
      ctx.strokeStyle = `hsl(${hue}, 100%, 60%)`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `hsl(${hue}, 100%, 50%)`;
      ctx.stroke();

      lastX = x;
      lastY = y;
      hue += 5; 
      if (hue >= 360) hue = 0;
    };

    // Reset last position if mouse leaves screen or stops moving for a long time
    // Actually, simply resetting on enter is fine
    const handleMouseEnter = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
    };
    
    // When scrolling, the mouse might not move, but the document moves underneath.
    // That's fine, we are only doing this on mousemove.

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 999999,
        mixBlendMode: "screen",
      }}
    />
  );
}
