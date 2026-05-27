"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Wall Art",
    description:
      "Customized wall art and mural works for homes, resorts, offices, schools, and commercial spaces.",
    image: "/images/services/wall-art.jpg",
  },

  {
    id: 2,
    title: "Pencil Art",
    description:
      "Detailed pencil portraits including family photos, anime art, pets, and personalized artworks.",
    image: "/images/services/pencil-art.jpg",
  },

  {
    id: 3,
    title: "Colour Pencil",
    description:
      "Realistic and vibrant colour pencil artworks with premium detailing.",
    image: "/images/services/colour-pencil.jpg",
  },

  {
    id: 4,
    title: "Acrylic",
    description:
      "Premium acrylic paintings crafted with cinematic textures and storytelling.",
    image: "/images/services/acrylic.jpg",
  },

  {
    id: 5,
    title: "Oil Painting",
    description:
      "Classic oil paintings with rich textures and gallery-style finishing.",
    image: "/images/services/oil.jpg",
  },

  {
    id: 6,
    title: "Water Colour",
    description:
      "Elegant watercolor artworks with handcrafted atmosphere.",
    image: "/images/services/watercolor.jpg",
  },

  {
    id: 7,
    title: "Blood Art",
    description:
      "Unique personalized blood artworks with cinematic expression.",
    image: "/images/services/blood-art.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-black
        py-24
      "
    >
      {/* NOISE */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          mix-blend-soft-light
          pointer-events-none
        "
        style={{
          backgroundImage: "url('/noise.png')",
        }}
      />

      {/* HEADER */}
      <div
        className="
          relative
          z-20
          mb-16
          px-6
          md:px-12
        "
      >
        <div
          className="
            flex
            items-center
            gap-5
            mb-7
          "
        >
          <div className="w-14 h-px bg-white/20" />

          <p
            className="
              text-[10px]
              md:text-[11px]

              uppercase

              tracking-[0.38em]

              text-white/40
            "
          >
            CREATIVE SERVICES
          </p>
        </div>

        <h2
          className="
            text-white

            text-[15vw]
            md:text-[7vw]

            leading-[0.82]

            font-black

            tracking-[-0.09em]

            uppercase
          "
        >
          Artistic
          <br />
          Expertise
        </h2>
      </div>

      {/* CAROUSEL */}
      <div
        className="
          relative
          overflow-hidden
        "
      >
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="
            flex
            gap-5
            w-max
            px-6
            md:px-12
          "
        >
          {[...services, ...services].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative

                min-w-[260px]
                md:min-w-[420px]

                h-[420px]
                md:h-[580px]

                overflow-hidden

                rounded-[24px]

                bg-white/[0.03]

                border
                border-white/10

                backdrop-blur-xl

                group
              "
            >
              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="
                  absolute
                  inset-0

                  w-full
                  h-full

                  object-cover

                  brightness-[0.72]
                  grayscale-[12%]

                  transition-all
                  duration-[1600ms]

                  group-hover:scale-105
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
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
                  md:p-10
                "
              >
                {/* NUMBER */}
                <p
                  className="
                    text-white/30

                    text-[10px]

                    tracking-[0.4em]

                    uppercase

                    mb-4
                  "
                >
                  0{service.id}
                </p>

                {/* TITLE */}
                <h3
                  className="
                    text-white

                    text-[11vw]
                    md:text-[3.4vw]

                    leading-[0.88]

                    font-black

                    tracking-[-0.08em]

                    uppercase
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-5

                    max-w-md

                    text-white/60

                    text-[13px]
                    md:text-[15px]

                    leading-relaxed
                  "
                >
                  {service.description}
                </p>

                {/* BUTTON */}
                <div className="mt-8">
                  <button
                    className="
                      inline-flex
                      items-center
                      justify-center

                      px-5
                      py-3

                      rounded-full

                      border
                      border-white/20

                      bg-white/10

                      backdrop-blur-md

                      text-white

                      text-[10px]

                      uppercase

                      tracking-[0.25em]

                      transition-all
                      duration-500

                      hover:bg-white
                      hover:text-black
                    "
                  >
                    Explore Service
                  </button>
                </div>
              </div>

              {/* GLOW */}
              <div
                className="
                  absolute
                  inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition-opacity
                  duration-700

                  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_70%)]
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM SHADE */}
      <div
        className="
          absolute
          bottom-0
          left-0

          w-full
          h-32

          bg-gradient-to-t
          from-black
          to-transparent

          pointer-events-none
        "
      />
    </section>
  );
}