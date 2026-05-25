"use client";

import Container from "../components/Container";
import ScrollReveal from "../components/ScrollReveal";
import { stats } from "../data/stats";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full opacity-10 blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-56 h-56 bg-indigo-400 rounded-full opacity-10 blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <Container>
        <ScrollReveal direction="up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My Achievements
          </h2>
          <p className="text-center text-blue-100 text-lg mb-16 max-w-2xl mx-auto">
            A testament to years of dedication, hard work, and commitment to excellence.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.15}>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-5xl md:text-6xl font-bold mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                {stat.description && (
                  <p className="text-blue-100 text-sm">{stat.description}</p>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
