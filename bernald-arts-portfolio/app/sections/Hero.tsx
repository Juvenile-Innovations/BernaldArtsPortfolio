"use client";

import Container from "../components/Container";
import Button from "../components/Button";
import ParallaxImage from "../components/ParallaxImage";
import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32 overflow-hidden">
      {/* Parallax Background Elements */}
      <ParallaxImage speed={0.3} direction="up" className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl" />
      <ParallaxImage speed={-0.2} direction="down" className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-200 rounded-full opacity-20 blur-3xl" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-8">
              <div>
                <motion.h1
                  className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Welcome to Bernald Arts
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-700 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Creating exceptional, innovative art and design solutions for creative brands and individuals.
                </motion.p>
              </div>

              <motion.div
                className="flex gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button variant="primary" size="lg">
                  View Portfolio
                </Button>
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </motion.div>

              <motion.div
                className="flex gap-8 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div>
                  <p className="text-3xl font-bold text-blue-600">150+</p>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">100+</p>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">8+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right Image with Parallax */}
          <ParallaxImage speed={0.4} direction="up">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex justify-center">
                <motion.div
                  className="w-full h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg shadow-2xl flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-white text-center">
                    <motion.p
                      className="text-6xl mb-4"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      🎨
                    </motion.p>
                    <p className="text-2xl font-semibold">Featured Artwork</p>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </ParallaxImage>
        </div>
      </Container>
    </section>
  );
}
