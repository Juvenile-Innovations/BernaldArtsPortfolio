"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import * as THREE from "three";

type VantaEffect =
  | "net"
  | "waves"
  | "globe"
  | "birds"
  | "fog"
  | "halo"
  | "cells"
  | "topology"
  | "dots"
  | "trunk"
  | "rings"
  | "clouds"
  | "clouds2";

interface VantaBackgroundProps {
  children: ReactNode;
  type?: VantaEffect;

  color?: number;
  backgroundColor?: number;

  color1?: number;
  color2?: number;
}

export default function VantaBackground({
  children,
  type = "net",

  color = 0xd4af37,
  backgroundColor = 0x080808,

  color1 = 0x000000,
  color2 = 0x2e2d27,
}: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    let mounted = true;

    const loadVanta = async () => {
      let Effect: any = null;

      try {
        switch (type) {
          case "net":
            Effect = (await import("vanta/dist/vanta.net.min")).default;
            break;

          case "waves":
            Effect = (await import("vanta/dist/vanta.waves.min")).default;
            break;

          case "globe":
            Effect = (await import("vanta/dist/vanta.globe.min")).default;
            break;

          case "birds":
            Effect = (await import("vanta/dist/vanta.birds.min")).default;
            break;

          case "fog":
            Effect = (await import("vanta/dist/vanta.fog.min")).default;
            break;

          case "halo":
            Effect = (await import("vanta/dist/vanta.halo.min")).default;
            break;

          case "cells":
            Effect = (await import("vanta/dist/vanta.cells.min")).default;
            break;

          case "topology":
            Effect = (await import("vanta/dist/vanta.topology.min")).default;
            break;

          case "dots":
            Effect = (await import("vanta/dist/vanta.dots.min")).default;
            break;

          case "trunk":
            Effect = (await import("vanta/dist/vanta.trunk.min")).default;
            break;

          case "rings":
            Effect = (await import("vanta/dist/vanta.rings.min")).default;
            break;

          case "clouds":
            Effect = (await import("vanta/dist/vanta.clouds.min")).default;
            break;

          case "clouds2":
            Effect = (await import("vanta/dist/vanta.clouds2.min")).default;
            break;
        }

        if (!mounted || !Effect || !vantaRef.current) return;

        const commonConfig = {
          el: vantaRef.current,
          THREE,

          mouseControls: true,
          touchControls: true,
          gyroControls: false,

          minHeight: 200,
          minWidth: 200,

          scale: 1,
          scaleMobile: 1,
        };

        if (type === "cells") {
          effectRef.current = Effect({
            ...commonConfig,
            color1,
            color2,
            size: 1.4,
            speed: 1.2,
          });
        } else if (type === "waves") {
          effectRef.current = Effect({
            ...commonConfig,
            color,
            backgroundColor,
            shininess: 40,
            waveHeight: 18,
            waveSpeed: 0.8,
            zoom: 0.85,
          });
        } else {
          effectRef.current = Effect({
            ...commonConfig,
            color,
            backgroundColor,
          });
        }
      } catch (error) {
        console.error("Vanta Error:", error);
      }
    };

    loadVanta();

    return () => {
      mounted = false;

      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, [
    type,
    color,
    backgroundColor,
    color1,
    color2,
  ]);

  return (
    <div className="relative w-full">
      <div
        ref={vantaRef}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}