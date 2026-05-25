"use client";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import { services } from "../data/services";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl" />

      <Container>
        <div className="relative z-10">
          <ScrollReveal direction="up">
            <SectionTitle
              title="My Services"
              subtitle="Comprehensive creative solutions tailored to your needs"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} direction="up" delay={index * 0.1}>
                <motion.div
                  className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg hover:shadow-lg transition-shadow"
                  whileHover={{ y: -8, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
