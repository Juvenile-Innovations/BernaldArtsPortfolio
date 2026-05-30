"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("hero");

  const navLinks = [
    { number: "01", label: "ABOUT", href: "#about" },
    { number: "02", label: "SERVICES", href: "#services" },
    { number: "03", label: "GALLERY", href: "#gallery" },
    { number: "04", label: "ACHIEVEMENTS", href: "#achievement" },
    { number: "05", label: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.3, 0.7, 1],
      rootMargin: "-50% 0px -50% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || "hero";
          setCurrentSection(sectionId);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const isLightSection = currentSection === "about";
  const isDarkText = isLightSection;

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-[999]

          transition-all
          duration-500

          ${
            isLightSection
              ? scrolled
                ? "bg-[#f5f1eb]/90 backdrop-blur-2xl border-b border-black/10"
                : "bg-[#f5f1eb]/70 backdrop-blur-2xl border-b border-black/10"
              : scrolled
              ? "bg-black/40 backdrop-blur-2xl border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="w-full px-5 md:px-10">
          <nav
            className={`
              flex
              items-center
              justify-between

              transition-all
              duration-500

              ${
                scrolled
                  ? "h-16 md:h-20"
                  : "h-20 md:h-24"
              }
            `}
          >
            {/* LOGO */}
            <div
              className="
                flex
                items-center
                gap-3

                relative
                z-[1001]
              "
            >
              <div
                className={`
                  w-11
                  h-11
                  md:w-14
                  md:h-14

                  rounded-full

                  border

                  flex
                  items-center
                  justify-center

                  transition-all
                  duration-500

                  ${
                    isDarkText
                      ? "border-black/20"
                      : "border-white/70"
                  }
                `}
              >
                <span
                  className={`
                    text-2xl
                    md:text-3xl

                    font-light

                    transition-all
                    duration-500

                    ${
                      isDarkText
                        ? "text-black"
                        : "text-white"
                    }
                  `}
                >
                  B
                </span>
              </div>

              <div>
                <p
                  className={`
                    text-[12px]
                    md:text-[14px]

                    uppercase

                    tracking-[0.18em]

                    font-medium

                    transition-all
                    duration-500

                    ${
                      isDarkText
                        ? "text-black"
                        : "text-white"
                    }
                  `}
                >
                  Bernald Arts
                </p>

                <p
                  className={`
                    text-[9px]
                    md:text-[11px]

                    uppercase

                    tracking-[0.22em]

                    transition-all
                    duration-500

                    ${
                      isDarkText
                        ? "text-black/40"
                        : "text-white/50"
                    }
                  `}
                >
                  Cinematic Creative Studio
                </p>
              </div>
            </div>

            {/* DESKTOP NAVIGATION */}
            <div
              className="
                hidden
                xl:flex

                items-center

                gap-10
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    group
                    relative

                    overflow-hidden

                    flex
                    flex-col

                    uppercase

                    transition-all
                    duration-500
                  "
                >
                  {/* NUMBER */}
                  <span
                    className={`
                      text-[9px]

                      tracking-[0.28em]

                      mb-1

                      transition-all
                      duration-500

                      ${
                        isDarkText
                          ? "text-black/35"
                          : "text-white/35"
                      }
                    `}
                  >
                    {link.number}
                  </span>

                  {/* LABEL */}
                  <span
                    className={`
                      relative

                      text-[12px]

                      tracking-[0.24em]

                      font-semibold

                      transition-all
                      duration-500

                      group-hover:tracking-[0.3em]

                      ${
                        isDarkText
                          ? "text-black"
                          : "text-white"
                      }
                    `}
                  >
                    {link.label}

                    {/* UNDERLINE */}
                    <span
                      className="
                        absolute
                        left-0
                        -bottom-2

                        h-[1px]
                        w-0

                        bg-current

                        transition-all
                        duration-500

                        group-hover:w-full
                      "
                    />
                  </span>
                </a>
              ))}
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                xl:hidden

                relative
                z-[1002]

                w-12
                h-12

                flex
                items-center
                justify-center
              "
            >
              <div className="relative w-7 h-7">
                <span
                  className={`
                    absolute
                    left-0
                    top-1

                    w-7
                    h-[1.5px]

                    transition-all
                    duration-500

                    ${
                      isDarkText
                        ? "bg-black"
                        : "bg-white"
                    }

                    ${
                      isOpen
                        ? "rotate-45 top-3.5"
                        : ""
                    }
                  `}
                />

                <span
                  className={`
                    absolute
                    left-0
                    top-3.5

                    w-7
                    h-[1.5px]

                    transition-all
                    duration-500

                    ${
                      isDarkText
                        ? "bg-black"
                        : "bg-white"
                    }

                    ${
                      isOpen
                        ? "opacity-0"
                        : "opacity-100"
                    }
                  `}
                />

                <span
                  className={`
                    absolute
                    left-0
                    top-6

                    w-7
                    h-[1.5px]

                    transition-all
                    duration-500

                    ${
                      isDarkText
                        ? "bg-black"
                        : "bg-white"
                    }

                    ${
                      isOpen
                        ? "-rotate-45 top-3.5"
                        : ""
                    }
                  `}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed
          top-0
          left-0

          w-full
          h-[100dvh]

          z-[1000]

          xl:hidden

          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* BACKGROUND */}
        <div
          className={`
            absolute
            inset-0

            bg-cover
            bg-center
            bg-no-repeat

            ${
              isLightSection
                ? "bg-[#f5f1eb]"
                : "bg-black"
            }
          `}
          style={{
            backgroundImage: isLightSection ? "none" : "url('/images/menu-bg.png')",
          }}
        />

        <div
          className={`
            absolute
            inset-0

            ${
              isLightSection
                ? "bg-black/0"
                : "bg-black/5"
            }

            backdrop-blur-sm
          `}
        />

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsOpen(false)}
          className="
            absolute
            top-6
            right-6

            z-[1003]

            w-12
            h-12

            flex
            items-center
            justify-center

            rounded-full

            bg-black/40

            hover:bg-black/60

            transition-all
            duration-300

            group

            backdrop-blur-md

            border
            border-white/20
          "
        >
          <svg
            className="
              w-6
              h-6

              text-white

              group-hover:scale-110

              transition-transform
              duration-300
            "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* MENU CONTENT */}
        <div
          className="
            relative

            h-full

            flex
            flex-col

            px-8
            pt-28
            pb-12
          "
        >
          {/* NAV LINKS */}
          <div className="space-y-1 mb-12">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block

                  px-6
                  py-4

                  rounded-xl

                  transition-all
                  duration-700

                  group

                  ${
                    isLightSection
                      ? "hover:bg-black/5"
                      : "hover:bg-white/10"
                  }

                  ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${
                    isOpen
                      ? index * 80
                      : 0
                  }ms`,
                }}
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between

                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      items-center

                      gap-4
                    "
                  >
                    <span
                      className={`
                        text-[9px]

                        tracking-[0.25em]

                        font-semibold

                        ${
                          isLightSection
                            ? "text-black/40"
                            : "text-white/40"
                        }
                      `}
                    >
                      {link.number}
                    </span>

                    <span
                      className={`
                        text-[18px]
                        md:text-[22px]

                        uppercase

                        tracking-[0.18em]

                        font-bold

                        group-hover:translate-x-2

                        transition-transform
                        duration-300

                        ${
                          isLightSection
                            ? "text-black/90"
                            : "text-white/90"
                        }
                      `}
                    >
                      {link.label}
                    </span>
                  </div>

                  <svg
                    className={`
                      w-5
                      h-5

                      group-hover:translate-x-1

                      transition-all
                      duration-300

                      ${
                        isLightSection
                          ? "text-black/40"
                          : "text-white/40"
                      }
                    `}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* SPACER */}
          <div className="flex-1" />

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={`
              group
              relative

              w-full

              px-6
              py-5

              text-center

              font-bold

              uppercase

              tracking-[0.18em]

              rounded-xl

              border

              transition-all
              duration-500

              overflow-hidden

              ${
                isLightSection
                  ? "bg-black text-white border-black/50"
                  : "bg-white text-black border-white/50"
              }
            `}
          >
            <div
              className="
                relative
                z-10

                flex
                items-center
                justify-center

                gap-3
              "
            >
              <span>
                Book An Art Session
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}