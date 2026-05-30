"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: "01",
    title: "Wall Art",
    description:
      "Customized wall art and mural works for homes and commercial spaces.",
    image: "/images/services/wall-art.jpg",
    border: "border-red-400/20",
    glow: "shadow-[0_0_80px_rgba(255,80,80,0.22)]",
  },

  {
    id: "02",
    title: "Pencil Art",
    description:
      "Detailed pencil portraits with realistic cinematic detailing.",
    image: "/images/services/pencil-art.jpg",
    border: "border-blue-400/20",
    glow: "shadow-[0_0_80px_rgba(80,140,255,0.22)]",
  },

  {
    id: "03",
    title: "Colour Pencil",
    description:
      "Premium colour pencil artworks with rich textures.",
    image: "/images/services/colour-pencil.jpg",
    border: "border-orange-300/20",
    glow: "shadow-[0_0_80px_rgba(255,170,70,0.22)]",
  },

  {
    id: "04",
    title: "Acrylic",
    description:
      "Emotion-driven acrylic paintings with storytelling visuals.",
    image: "/images/services/acrylic.jpg",
    border: "border-violet-400/20",
    glow: "shadow-[0_0_80px_rgba(170,120,255,0.22)]",
  },

  {
    id: "05",
    title: "Oil Painting",
    description:
      "Classic oil paintings with gallery-style finish.",
    image: "/images/services/oil.jpg",
    border: "border-yellow-300/20",
    glow: "shadow-[0_0_90px_rgba(255,220,100,0.22)]",
  },
];

function Card({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const direction = index % 2 === 0 ? -250 : 250;

  // ENTRY ANIMATION ONLY
  const x = useTransform(scrollYProgress, [0, 1], [direction, 0]);

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -6 : 6, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div
      ref={ref}
      className="
        relative

        h-[100vh]
      "
    >
      {/* STICKY WRAPPER */}
      <div
        className="
          sticky
          top-[90px]

          flex
          justify-center
        "
      >
        <motion.div
          style={{
            x,
            rotate,
            opacity,
            scale: 1 - index * 0.04,
          }}
          className={`
            relative

            w-full

            h-[380px]
            sm:h-[460px]
            md:h-[620px]

            overflow-hidden

            rounded-[30px]
            md:rounded-[42px]

            border

            bg-white/[0.05]

            backdrop-blur-2xl

            ${service.border}
            ${service.glow}
          `}
        >
          {/* IMAGE */}
          <motion.img
            src={service.image}
            alt={service.title}
            style={{
              scale: imageScale,
            }}
            className="
              absolute
              inset-0

              w-full
              h-full

              object-cover

              brightness-[0.72]
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black
              via-black/25
              to-black/5
            "
          />

          {/* PREMIUM LIGHT */}
          <div
            className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_60%)]

              pointer-events-none
            "
          />

          {/* CONTENT */}
          <div
            className="
              absolute
              inset-0

              flex
              flex-col
              justify-end

              p-6
              md:p-12
            "
          >
            <p
              className="
                text-white/40

                text-[10px]
                md:text-[11px]

                uppercase

                tracking-[0.45em]

                mb-4
              "
            >
              {service.id}
            </p>

            <h2
              className="
                text-white

                text-[11vw]
                sm:text-[8vw]
                md:text-[4vw]

                leading-[0.82]

                font-black

                tracking-[-0.08em]

                uppercase

                mb-5
              "
            >
              {service.title}
            </h2>

            <p
              className="
                max-w-xl

                text-white/65

                text-[13px]
                md:text-[16px]

                leading-relaxed
              "
            >
              {service.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative

        overflow-hidden

        bg-black

        px-4
        md:px-8

        py-24
        md:py-32
      "
    >
      {/* HEADER */}
      <div className="mb-24 md:mb-32">
        <p
          className="
            text-white/35

            uppercase

            tracking-[0.45em]

            text-[10px]
            md:text-[11px]

            mb-6
          "
        >
          Creative Services
        </p>

        <h1
          className="
            text-white

            text-[15vw]
            sm:text-[12vw]
            md:text-[7vw]

            leading-[0.78]

            font-black

            tracking-[-0.09em]

            uppercase
          "
        >
          Artistic
          <br />
          Expertise
        </h1>
      </div>

      {/* CARDS */}
      <div className="relative">
        {services.map((service, index) => (
          <Card
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}