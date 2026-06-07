"use client";

import Container from "./Container";
import VantaBackground from "./VantaBackground";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <VantaBackground
      type="globe"
      color={0xd4af37}
      backgroundColor={0x202428}
    >
      <footer
        className="
          relative

          min-h-screen

          flex
          items-center

          overflow-hidden
        "
      >
        {/* Soft White Overlay */}
        <div
          className="
            absolute
            inset-0

            bg-white/70

            backdrop-blur-[0px]
          "
        />

        <Container>
          <div
            className="
              relative
              z-10

              min-h-screen

              flex
              flex-col

              justify-between

              py-20
            "
          >
            {/* TOP */}
            <div
              className="
                flex
                flex-col

                lg:flex-row

                lg:items-end
                lg:justify-between

                gap-16
              "
            >
              <div>
                <p
                  className="
                    uppercase

                    tracking-[0.5em]

                    text-[#b8862d]

                    text-xs

                    mb-6
                  "
                >
                  Fine Art Studio
                </p>

                <h1
                  className="
                    text-[22vw]
                    md:text-[12vw]

                    leading-[0.8]

                    font-black

                    tracking-[-0.08em]

                    uppercase

                    text-[#b8862d]
                  "
                >
                  Bernald
                  <br />
                  Arts
                </h1>
              </div>

              <div
                className="
                  max-w-md
                "
              >
                <p
                  className="
                    text-black/60

                    text-lg

                    leading-relaxed
                  "
                >
                  Creating timeless artwork through
                  imagination, craftsmanship and
                  visual storytelling.
                </p>
              </div>
            </div>

            {/* MIDDLE */}
            <div
              className="
                grid

                grid-cols-1
                md:grid-cols-3

                gap-12
              "
            >
              <div>
                <h3
                  className="
                    text-[#b8862d]

                    uppercase

                    tracking-[0.3em]

                    text-xs

                    mb-6
                  "
                >
                  Navigation
                </h3>

                <div className="space-y-4">
                  {[
                    "About",
                    "Services",
                    "Gallery",
                    "Contact",
                  ].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="
                        block

                        text-2xl

                        text-black/70

                        hover:text-[#b8862d]

                        transition-all
                      "
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3
                  className="
                    text-[#b8862d]

                    uppercase

                    tracking-[0.3em]

                    text-xs

                    mb-6
                  "
                >
                  Contact
                </h3>

                <div className="space-y-4 text-black/70">
                  <p>hello@bernaldarts.com</p>
                  <p>+91 90475 76773</p>
                  <p>Tamil Nadu, India</p>
                </div>
              </div>

              <div>
                <h3
                  className="
                    text-[#b8862d]

                    uppercase

                    tracking-[0.3em]

                    text-xs

                    mb-6
                  "
                >
                  Follow
                </h3>

                <div className="space-y-4">
                  <a
                    href="#"
                    className="block text-black/70 hover:text-[#b8862d]"
                  >
                    Instagram
                  </a>

                  <a
                    href="#"
                    className="block text-black/70 hover:text-[#b8862d]"
                  >
                    Facebook
                  </a>

                  <a
                    href="#"
                    className="block text-black/70 hover:text-[#b8862d]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* BOTTOM */}
            <div
              className="
                pt-10

                border-t
                border-[#d4af37]/20

                flex
                flex-col
                md:flex-row

                items-center
                justify-between

                gap-4
              "
            >
              <p
                className="
                  text-black/50
                "
              >
                © {currentYear} Bernald Arts.
                All rights reserved.
              </p>

              <p
                className="
                  uppercase

                  tracking-[0.3em]

                  text-xs

                  text-black/40
                "
              >
                Crafted With Passion
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </VantaBackground>
  );
}