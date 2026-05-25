"use client";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ScrollReveal from "../components/ScrollReveal";
import { artworks } from "../data/artworks";
import { motion } from "framer-motion";

export default function Featured() {
  const featuredWorks = artworks.filter((work) => work.featured);

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <Container>
        <ScrollReveal direction="up">
          <SectionTitle
            title="Featured Works"
            subtitle="A showcase of my best and most impactful projects"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {featuredWorks.map((artwork, index) => (
            <ScrollReveal key={artwork.id} direction="up" delay={index * 0.15}>
              <motion.div
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <motion.div
                  className="h-64 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-6xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  🖼️
                </motion.div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {artwork.title}
                    </h3>
                    <p className="text-sm text-blue-600 mt-1">{artwork.category}</p>
                  </div>

                  <p className="text-gray-600">{artwork.description}</p>

                  <motion.button
                    className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Details →
                  </motion.button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button variant="primary" size="lg">
            View All Works
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
