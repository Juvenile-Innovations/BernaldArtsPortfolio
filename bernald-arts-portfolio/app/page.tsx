"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Process from "./sections/Process";
import Achievements from "./sections/Achievements";
import UseCases from "./sections/UseCases";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

export default function Home() {
  const { scrollY } = useScroll();

  /* GLOBAL PARALLAX */

  const heroY = useTransform(
    scrollY,
    [0, 1000],
    [0, -180]
  );

  const aboutY = useTransform(
    scrollY,
    [0, 1400],
    [0, -80]
  );

  const servicesY = useTransform(
    scrollY,
    [0, 1800],
    [0, -120]
  );

  const achievementsY = useTransform(
    scrollY,
    [0, 2200],
    [0, -100]
  );

  const galleryY = useTransform(
    scrollY,
    [0, 2600],
    [0, -140]
  );

  const contactY = useTransform(
    scrollY,
    [0, 3200],
    [0, -80]
  );

  return (
    <main
      className="
        relative
        overflow-x-hidden
        bg-black
      "
    >
      {/* HERO */}
      <motion.section
        style={{
          y: heroY,
        }}
        className="
          relative
          z-[1]
        "
      >
        <Hero />
      </motion.section>

      {/* ABOUT */}
      <motion.section
        style={{
          y: aboutY,
        }}
        className="
          relative
          z-[2]
        "
      >
        <About />
      </motion.section>

      {/* SERVICES */}
      <motion.section
        style={{
          y: servicesY,
        }}
        className="
          relative
          z-[4]
        "
      >
        <Services />
      </motion.section>

      {/* ACHIEVEMENTS */}
      <motion.section
        style={{
          y: achievementsY,
        }}
        className="
          relative
          z-[6]
        "
      >
        <Achievements />
      </motion.section>

      {/* GALLERY */}
      <motion.section
        style={{
          y: galleryY,
        }}
        className="
          relative
          z-[8]
        "
      >
        <Gallery />
      </motion.section>

      {/* CONTACT */}
      <motion.section
        style={{
          y: contactY,
        }}
        className="
          relative
          z-[9]
        "
      >
        <Contact />
      </motion.section>
    </main>
  );
}