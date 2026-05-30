"use client";

import React from "react";

import {
  motion,
} from "framer-motion";

import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden

        bg-[#f7f4ef]

        text-black

        pt-24
        pb-10
      "
    >
      {/* NOISE */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          mix-blend-multiply

          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('/noise.png')",
        }}
      />

      {/* GOLD LIGHT */}
      <motion.div
        className="
          absolute
          top-[-20%]
          left-[-10%]

          w-[700px]
          h-[700px]

          rounded-full

          bg-[#d4a24c]/10

          blur-[180px]
        "
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* PINK LIGHT */}
      <motion.div
        className="
          absolute
          bottom-[-20%]
          right-[-10%]

          w-[700px]
          h-[700px]

          rounded-full

          bg-[#ff8ab8]/10

          blur-[200px]
        "
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* FLOATING PARTICLES */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="
            absolute

            w-[2px]
            h-[2px]

            rounded-full

            bg-[#d4a24c]

            blur-[1px]
          "
          style={{
            left: `${(i * 8) % 100}%`,
            top: `${(i * 9) % 100}%`,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <Container>
        {/* TOP */}
        <div
          className="
            relative
            z-10

            grid
            grid-cols-1
            md:grid-cols-3

            gap-12

            pb-20
          "
        >
          {/* BRAND */}
          <div>
            <p
              className="
                text-[11px]

                uppercase

                tracking-[0.45em]

                text-[#b8862d]

                mb-5
              "
            >
              Bernald Arts
            </p>

            <h3
              className="
                text-[14vw]
                sm:text-[9vw]
                md:text-[4vw]

                leading-[0.82]

                font-black

                tracking-[-0.08em]

                uppercase

                mb-6
              "
            >
              Visual
              <br />
              Luxury
            </h3>

            <p
              className="
                max-w-sm

                text-black/55

                text-sm
                md:text-base

                leading-relaxed
              "
            >
              Crafting immersive artistic
              experiences through cinematic
              textures, luxury aesthetics,
              and timeless visual storytelling.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <p
              className="
                text-[12px]

                uppercase

                tracking-[0.35em]

                text-black/40

                mb-8
              "
            >
              Navigation
            </p>

            <ul
              className="
                space-y-5
              "
            >
              {[
                "About",
                "Services",
                "Gallery",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="
                      group

                      inline-flex
                      items-center

                      gap-3

                      text-black/70

                      hover:text-black

                      transition-all
                      duration-500
                    "
                  >
                    <span
                      className="
                        w-0
                        group-hover:w-6

                        h-px

                        bg-[#b8862d]

                        transition-all
                        duration-500
                      "
                    />

                    <span
                      className="
                        text-lg
                        md:text-xl

                        tracking-[-0.03em]
                      "
                    >
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p
              className="
                text-[12px]

                uppercase

                tracking-[0.35em]

                text-black/40

                mb-8
              "
            >
              Contact
            </p>

            <div
              className="
                space-y-5
              "
            >
              <div>
                <p
                  className="
                    text-black/35

                    text-[11px]

                    uppercase

                    tracking-[0.25em]

                    mb-2
                  "
                >
                  Email
                </p>

                <a
                  href="mailto:hello@bernaldarts.com"
                  className="
                    text-black/75

                    hover:text-black

                    transition
                  "
                >
                  hello@bernaldarts.com
                </a>
              </div>

              <div>
                <p
                  className="
                    text-black/35

                    text-[11px]

                    uppercase

                    tracking-[0.25em]

                    mb-2
                  "
                >
                  Phone
                </p>

                <a
                  href="tel:+15551234567"
                  className="
                    text-black/75

                    hover:text-black

                    transition
                  "
                >
                  +1 (555) 123-4567
                </a>
              </div>

              <div>
                <p
                  className="
                    text-black/35

                    text-[11px]

                    uppercase

                    tracking-[0.25em]

                    mb-2
                  "
                >
                  Location
                </p>

                <p
                  className="
                    text-black/75
                  "
                >
                  New York, NY
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className="
            relative

            h-px

            bg-gradient-to-r
            from-transparent
            via-black/10
            to-transparent

            mb-10
          "
        />

        {/* BOTTOM */}
        <div
          className="
            relative
            z-10

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-6
          "
        >
          <p
            className="
              text-black/45

              text-sm
            "
          >
            © {currentYear} Bernald Arts.
            All rights reserved.
          </p>

          {/* SOCIALS */}
          <div
            className="
              flex
              items-center

              gap-6
            "
          >
            {[
              "Instagram",
              "Twitter",
              "LinkedIn",
            ].map((social) => (
              <a
                key={social}
                href="#"
                className="
                  relative

                  text-black/55

                  hover:text-black

                  uppercase

                  tracking-[0.25em]

                  text-[11px]

                  transition-all
                  duration-500
                "
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}