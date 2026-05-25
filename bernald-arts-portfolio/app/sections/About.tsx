"use client";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ParallaxImage from "../components/ParallaxImage";
import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Parallax Background */}
      <ParallaxImage speed={-0.3} direction="down" className="absolute top-20 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-10 blur-3xl" />

      <Container>
        <div className="relative z-10">
          <ScrollReveal direction="up">
            <SectionTitle
              title="About Me"
              subtitle="Discover my journey and passion for creating exceptional art"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            {/* Image */}
            <ParallaxImage speed={0.3} direction="up">
              <ScrollReveal direction="left" delay={0.2}>
                <motion.div
                  className="h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-white text-center">
                    <motion.p
                      className="text-6xl mb-4"
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      👨‍🎨
                    </motion.p>
                    <p className="text-2xl font-semibold">Bernald</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            </ParallaxImage>

            {/* Content */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="space-y-6">
                <motion.p
                  className="text-lg text-gray-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  With over 8 years of experience in the art and design industry, I
                  have developed a deep passion for creating meaningful and
                  visually stunning work that connects with audiences.
                </motion.p>

                <motion.p
                  className="text-lg text-gray-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  My approach combines traditional artistic techniques with modern
                  digital tools to produce unique and memorable designs. I believe
                  in the power of creativity to transform ideas into reality.
                </motion.p>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Specializations</h3>
                  <ul className="space-y-2">
                    {[
                      "Digital Illustration",
                      "Branding & Identity",
                      "UI/UX Design",
                      "Photography",
                      "Video Production",
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
