"use client";

import { useState } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-10 blur-3xl"
        animate={{ y: [0, 100, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <Container>
        <ScrollReveal direction="up">
          <SectionTitle
            title="Get in Touch"
            subtitle="Have a project in mind? Let's discuss how I can help bring your vision to life."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16 relative z-10">
          {/* Contact Info */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-8">
              {[
                { title: "Email", content: "hello@bernaldarts.com" },
                { title: "Phone", content: "+1 (555) 123-4567" },
                { title: "Location", content: "New York, NY" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {["f", "𝕏", "📸", "in"].map((icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition ${
                        index === 0 ? "bg-blue-600 hover:bg-blue-700" :
                        index === 1 ? "bg-blue-400 hover:bg-blue-500" :
                        index === 2 ? "bg-pink-600 hover:bg-pink-700" :
                        "bg-blue-700 hover:bg-blue-800"
                      }`}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                whileFocus={{ scale: 1.02 }}
              />

              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition resize-none"
                whileFocus={{ scale: 1.02 }}
              />

              <div className="flex justify-between items-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                >
                  Send Message
                </Button>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={submitted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitted && (
                    <p className="text-green-600 font-semibold">
                      ✓ Message sent successfully!
                    </p>
                  )}
                </motion.div>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
