"use client";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";

export default function UseCases() {
  const useCases = [
    {
      title: "E-commerce Brand",
      description:
        "Created a complete visual identity including logo, packaging design, and website interface for a growing online boutique.",
      result: "150% increase in brand recognition",
      icon: "🛍️",
    },
    {
      title: "Tech Startup",
      description:
        "Designed user-centered UI/UX for a mobile application connecting freelancers with clients.",
      result: "10,000+ active users in first month",
      icon: "📱",
    },
    {
      title: "Creative Agency",
      description:
        "Produced multimedia content including photography, videography, and digital illustrations for marketing campaigns.",
      result: "Award-winning campaign results",
      icon: "🎬",
    },
    {
      title: "Non-Profit Organization",
      description:
        "Designed educational materials and promotional graphics to increase awareness and donations.",
      result: "200% increase in engagement",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <Container>
        <ScrollReveal direction="up">
          <SectionTitle
            title="Use Cases"
            subtitle="Real-world examples of successful projects and their impact"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {useCases.map((useCase, index) => (
            <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
              <motion.div
                className="p-8 bg-gray-50 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {useCase.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-700 mb-4">{useCase.description}</p>
                <motion.div
                  className="flex items-center text-green-600 font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  {useCase.result}
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
