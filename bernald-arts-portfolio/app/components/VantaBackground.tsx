"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import * as THREE from "three";

// @ts-ignore
import NET from "vanta/dist/vanta.net.min";
// @ts-ignore
import WAVES from "vanta/dist/vanta.waves.min";
// @ts-ignore
import GLOBE from "vanta/dist/vanta.globe.min";
// @ts-ignore
import BIRDS from "vanta/dist/vanta.birds.min";
// @ts-ignore
import FOG from "vanta/dist/vanta.fog.min";
// @ts-ignore
import HALO from "vanta/dist/vanta.halo.min";
// @ts-ignore
import CELLS from "vanta/dist/vanta.cells.min";
// @ts-ignore
import TOPOLOGY from "vanta/dist/vanta.topology.min";
// @ts-ignore
import DOTS from "vanta/dist/vanta.dots.min";
// @ts-ignore
import TRUNK from "vanta/dist/vanta.trunk.min";
// @ts-ignore
import RINGS from "vanta/dist/vanta.rings.min";
// @ts-ignore
import CLOUDS from "vanta/dist/vanta.clouds.min";
// @ts-ignore
import CLOUDS2 from "vanta/dist/vanta.clouds2.min";

const EFFECTS = {
  net: NET,
  waves: WAVES,
  globe: GLOBE,
  birds: BIRDS,
  fog: FOG,
  halo: HALO,
  cells: CELLS,
  topology: TOPOLOGY,
  dots: DOTS,
  trunk: TRUNK,
  rings: RINGS,
  clouds: CLOUDS,
  clouds2: CLOUDS2,
};

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

    const Effect = EFFECTS[type];

    if (!Effect) return;

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

    try {
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

    return () => {
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
      {/* Background */}
      <div
        ref={vantaRef}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}