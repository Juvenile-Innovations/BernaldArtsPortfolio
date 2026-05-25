"use client";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import { artworks } from "../data/artworks";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-gray-50">
      <Container>
        <ScrollReveal direction="up">
          <SectionTitle
            title="Gallery"
            subtitle="A comprehensive collection of my diverse and creative works"
          />
        </ScrollReveal>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {artworks.map((artwork, index) => (
            <ScrollReveal key={artwork.id} direction="up" delay={index * 0.08}>
              <motion.div
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <motion.div
                  className="h-64 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-6xl"
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  🎨
                </motion.div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-white text-center"
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1 }}
                  >
                    <p className="text-xl font-bold">{artwork.title}</p>
                    <p className="text-sm mt-2">{artwork.category}</p>
                  </motion.div>
                </motion.div>

                {/* Info */}
                <motion.div
                  className="p-4 bg-white"
                  initial={{ y: 0 }}
                  whileHover={{ y: -2 }}
                >
                  <h3 className="font-bold text-gray-900">{artwork.title}</h3>
                  <p className="text-sm text-gray-600">{artwork.category}</p>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
