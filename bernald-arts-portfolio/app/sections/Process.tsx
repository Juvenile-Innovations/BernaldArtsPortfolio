"use client";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understanding your vision, goals, and requirements through collaborative discussion.",
    },
    {
      number: "02",
      title: "Conceptualization",
      description:
        "Creating initial concepts and sketches to explore different creative directions.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Refining and developing the chosen concept into a polished, professional design.",
    },
    {
      number: "04",
      title: "Refinement",
      description:
        "Incorporating feedback and making adjustments to perfect the final deliverable.",
    },
    {
      number: "05",
      title: "Finalization",
      description:
        "Preparing all files in required formats and delivering the completed project.",
    },
    {
      number: "06",
      title: "Support",
      description:
        "Providing ongoing support and revisions as needed after project completion.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <Container>
        <ScrollReveal direction="up">
          <SectionTitle
            title="My Process"
            subtitle="A structured approach to creating outstanding work"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step number background */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-0"
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex items-start relative z-10">
                  <motion.div
                    className="text-4xl font-bold text-blue-600 mr-4 opacity-30"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {step.number}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
