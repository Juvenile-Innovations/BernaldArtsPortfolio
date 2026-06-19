"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/Container";
import ScrollReveal from "../components/ScrollReveal";

const INPUT_FIELDS = [
  { type: "text", name: "name", placeholder: "Full Name" },
  { type: "tel", name: "mobile", placeholder: "Mobile Number" },
  { type: "text", name: "location", placeholder: "Location / City" },
  { type: "text", name: "size", placeholder: "Size in Sq.ft" },
];

const ART_TYPES = [
  "Wall Art",
  "Pencil Art",
  "Colour Pencil",
  "Acrylic Art",
  "Oil Painting",
  "Watercolor",
  "Blood Art",
  "Custom Artwork",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
    artType: "",
    size: "",
    date: "",
    comments: "",
  });

  const [highlightField, setHighlightField] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const selectRef = useRef<HTMLSelectElement>(null);
  const animTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const toastResetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleSelectArtType = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const selectedType = customEvent.detail;

      // Clear any existing timeouts to avoid overlapping/stuck states
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
      if (toastResetTimeoutRef.current) clearTimeout(toastResetTimeoutRef.current);

      // Update form data immediately
      setFormData((prev) => ({ ...prev, artType: selectedType }));

      // Start animation with a slight delay (500ms) to sync with scroll duration
      animTimeoutRef.current = setTimeout(() => {
        setHighlightField(true);
        setShowToast(true);
        // Focus the select element to visually highlight it
        if (selectRef.current) {
          selectRef.current.focus();
        }
      }, 500);

      // Turn off highlight after 3 seconds
      resetTimeoutRef.current = setTimeout(() => {
        setHighlightField(false);
      }, 3000);

      // Turn off toast after 4 seconds
      toastResetTimeoutRef.current = setTimeout(() => {
        setShowToast(false);
      }, 4000);
    };

    window.addEventListener("select-art-type", handleSelectArtType);
    return () => {
      window.removeEventListener("select-art-type", handleSelectArtType);
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
      if (toastResetTimeoutRef.current) clearTimeout(toastResetTimeoutRef.current);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*BOOK YOUR ART*\n Name: ${formData.name}\n Mobile: ${formData.mobile}\n Location: ${formData.location}\n Type: ${formData.artType}\n Size: ${formData.size} Sq.ft\n Date: ${formData.date}\n Comments: ${formData.comments}`;
    window.open(`https://wa.me/919047576773?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-20 lg:py-0 flex items-center bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
    >
      {/* Subtle overlay to ensure general contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: ARTISTIC HEADER */}
          <div className="lg:col-span-5 text-center lg:text-left pt-10 lg:pt-0">
            <ScrollReveal direction="up">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-[#f3d08a] mb-4">
                Commission Your Masterpiece
              </p>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter uppercase text-white drop-shadow-lg">
                Book
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3d08a] to-white">
                  Your Art
                </span>
              </h2>
            </ScrollReveal>
          </div>

          {/* RIGHT: MINIMALIST FORM PANEL */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up">
              <form
                onSubmit={handleSubmit}
                className="bg-black/70 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* TEXT INPUTS */}
                  {INPUT_FIELDS.map((field) => (
                    <input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 outline-none transition-colors focus:border-[#f3d08a]"
                    />
                  ))}

                  {/* SELECT ART TYPE WITH CUSTOM ANIMATION AND GLOW */}
                  <div className="relative w-full">
                    {/* Glowing background ring that animates on auto-select */}
                    <AnimatePresence>
                      {highlightField && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{
                            opacity: 1,
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            scale: [1.02, 1.04, 1.02],
                          }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{
                            opacity: { duration: 0.4, ease: "easeOut" },
                            backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                          }}
                          className="absolute inset-0 -m-2 rounded-xl bg-gradient-to-r from-[#c1121f] via-[#fcbf49] to-[#c1121f] opacity-75 blur-md z-0 pointer-events-none"
                          style={{
                            backgroundSize: "200% 200%",
                          }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Toast Notification */}
                    <AnimatePresence>
                      {showToast && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.8 }}
                          animate={{ opacity: 1, y: -45, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.8 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="absolute left-0 top-0 bg-gradient-to-r from-[#c1121f] to-[#fcbf49] text-white text-xs font-bold font-mono py-1.5 px-3.5 rounded-full shadow-lg flex items-center gap-1.5 z-50 pointer-events-none"
                        >
                          <span className="animate-bounce">✨</span>
                          <span>Auto-selected: {formData.artType}!</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.select
                      ref={selectRef}
                      name="artType"
                      value={formData.artType}
                      onChange={handleChange}
                      required
                      animate={highlightField ? {
                        scale: [1, 1.05, 0.98, 1.02, 1],
                        borderColor: ["#ffffff", "#fcbf49", "#c1121f", "#fcbf49", "#ffffff"]
                      } : {}}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                      className="relative z-10 w-full bg-[#121212]/90 border-b border-white/30 py-3 px-2 text-white outline-none transition-all focus:border-[#fcbf49] appearance-none cursor-pointer rounded-sm"
                    >
                      <option value="" className="bg-gray-900 text-white">Select Art Type</option>
                      {ART_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-gray-900 text-white">
                          {type}
                        </option>
                      ))}
                    </motion.select>
                    
                    {/* Custom Dropdown Chevron Icon */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none z-20 text-white/50">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>

                  {/* DATE PICKER */}
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white outline-none transition-colors focus:border-[#f3d08a] cursor-pointer [&::-webkit-calendar-picker-indicator]:invert"
                  />

                  {/* TEXTAREA */}
                  <textarea
                    name="comments"
                    placeholder="Additional Details or Concepts..."
                    rows={3}
                    value={formData.comments}
                    onChange={handleChange}
                    className="md:col-span-2 w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 outline-none resize-none transition-colors focus:border-[#f3d08a]"
                  />

                  {/* SUBMIT BUTTON */}
                  <div className="md:col-span-2 mt-4">
                    <button
                      type="submit"
                      className="group relative w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-sm overflow-hidden transition-all hover:bg-[#f3d08a]"
                    >
                      <span className="relative z-10 transition-colors group-hover:text-black">
                        Submit Request
                      </span>
                    </button>
                  </div>

                </div>
              </form>
            </ScrollReveal>
          </div>

        </div>
      </Container>
    </section>
  );
}