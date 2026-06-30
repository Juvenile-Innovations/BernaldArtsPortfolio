"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { spaceGrotesk, shareTechMono } from "@/app/lib/fonts";
import { SilkWaveBg } from "@/app/components/ui/silk-wave-bg";

const INPUT_FIELDS = [
  {
    type: "text",
    name: "name",
    label: "Full Name",
    placeholder: "Enter your full name",
  },
  {
    type: "tel",
    name: "mobile",
    label: "Contact Number",
    placeholder: "Mobile or WhatsApp number",
  },
  {
    type: "text",
    name: "location",
    label: "Delivery Location",
    placeholder: "City or Location",
  },
  {
    type: "text",
    name: "size",
    label: "Dimensions (Sq.ft)",
    placeholder: "Dimensions (e.g. 10x12)",
  },
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

  const containerRef = useRef<HTMLDivElement>(null);
  const stickyMaskRef = useRef<HTMLDivElement>(null);
  const easedScrollProgressRef = useRef(0);

  useEffect(() => {
    let requestRef: number;
    const animate = () => {
      if (!stickyMaskRef.current || !containerRef.current) {
        requestRef = requestAnimationFrame(animate);
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress (0 when container top hits viewport top)
      let scrollProgress =
        -containerRect.top / (containerHeight - windowHeight);

      if (scrollProgress < 0) scrollProgress = 0;
      if (scrollProgress > 1) scrollProgress = 1;

      const delta = scrollProgress - easedScrollProgressRef.current;
      // Lower easing factor (0.08) creates a much smoother, fluid camera movement
      easedScrollProgressRef.current += delta * 0.08;

      // Spread the zoom out over 80% of the scroll container for a more gradual, smooth zoom
      const zoomProgress = Math.min(1, easedScrollProgressRef.current / 0.8);

      // Cube power creates a beautifully smooth acceleration curve, much less abrupt than power 4
      const maskSizeProgress = 150 * Math.pow(zoomProgress, 3);

      if (zoomProgress > 0.95) {
        // Fully remove the mask to ensure the video is 100% visible and unclipped
        stickyMaskRef.current.style.webkitMaskImage = "none";
        stickyMaskRef.current.style.maskImage = "none";
      } else {
        stickyMaskRef.current.style.webkitMaskImage = "url('/mask-hand-soul.svg')";
        stickyMaskRef.current.style.maskImage = "url('/mask-hand-soul.svg')";
        stickyMaskRef.current.style.webkitMaskSize =
          (0.8 + maskSizeProgress) * 100 + "%";
        stickyMaskRef.current.style.maskSize =
          (0.8 + maskSizeProgress) * 100 + "%";
      }

      requestRef = requestAnimationFrame(animate);
    };
    requestRef = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef);
  }, []);

  useEffect(() => {
    const handleSelectArtType = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const selectedType = customEvent.detail;

      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
      if (toastResetTimeoutRef.current)
        clearTimeout(toastResetTimeoutRef.current);

      setFormData((prev) => ({ ...prev, artType: selectedType }));

      animTimeoutRef.current = setTimeout(() => {
        setHighlightField(true);
        setShowToast(true);
        if (selectRef.current) {
          selectRef.current.focus();
        }
      }, 500);

      resetTimeoutRef.current = setTimeout(() => {
        setHighlightField(false);
      }, 3000);

      toastResetTimeoutRef.current = setTimeout(() => {
        setShowToast(false);
      }, 4000);
    };

    window.addEventListener("select-art-type", handleSelectArtType);
    return () => {
      window.removeEventListener("select-art-type", handleSelectArtType);
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
      if (toastResetTimeoutRef.current)
        clearTimeout(toastResetTimeoutRef.current);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const activeFields = INPUT_FIELDS.filter(
    (field) => field.name !== "size" || formData.artType === "Wall Art",
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let message = `*BOOK YOUR ART*\n Name: ${formData.name}\n Mobile: ${formData.mobile}\n Location: ${formData.location}\n Type: ${formData.artType}`;
    if (formData.artType === "Wall Art" && formData.size) {
      message += `\n Size: ${formData.size} Sq.ft`;
    }
    message += `\n Date: ${formData.date}\n Comments: ${formData.comments}`;
    window.open(
      `https://wa.me/919047576773?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <>
      <div ref={containerRef} className="relative h-[300vh] bg-black">
        <div
          ref={stickyMaskRef}
          className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black"
          style={{
            WebkitMaskImage: "url('/mask-hand-soul.svg')",
            maskImage: "url('/mask-hand-soul.svg')",
            WebkitMaskPosition: "50% center",
            maskPosition: "50% center",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "80%",
            maskSize: "80%",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/nature.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <section
        id="contact"
        className="relative w-full min-h-screen py-24 md:py-36 bg-neutral-950 overflow-hidden text-white flex items-center border-t border-neutral-900"
      >
        {/* Background Matrix Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

        {/* Decorative Crosshairs */}
        <div className="absolute top-10 left-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">
          +
        </div>
        <div className="absolute top-10 right-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">
          +
        </div>
        <div className="absolute bottom-10 left-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">
          +
        </div>
        <div className="absolute bottom-10 right-10 text-white/20 select-none pointer-events-none font-mono text-xs z-10">
          +
        </div>

        {/* Silk Wave Background */}
        <SilkWaveBg />

        <div
          id="contact-form-content"
          className="relative z-10 w-full max-w-[1700px] mx-auto px-6 md:px-12"
        >
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            {/* LEFT COLUMN: TITLE AND TELEMETRY */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <p
                    className={`text-[11px] uppercase tracking-[0.4em] text-rose-500 font-bold ${spaceGrotesk.className}`}
                  >
                    [ COMMISSION BOOKING ]
                  </p>
                </div>

                <h2
                  className={`text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight uppercase text-white ${spaceGrotesk.className}`}
                >
                  Launch <br />
                  <span className="rainbow-text-glow filter drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                    Your Art
                  </span>
                </h2>

                <p
                  className={`text-neutral-400 text-sm max-w-sm mx-auto lg:mx-0 leading-relaxed pt-4 ${spaceGrotesk.className}`}
                >
                  Specify your requirements, select the artistic medium, and
                  define the spatial scale to initiate your custom artwork
                  booking.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: MODERN TECH FORM */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="bg-neutral-950/80 border border-neutral-900 p-8 md:p-12 rounded-2xl shadow-2xl relative"
              >
                {/* Tech corner accents on the form panel */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-rose-500/40" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-rose-500/40" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-rose-500/40" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-rose-500/40" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Text Inputs */}
                  {activeFields.map((field) => (
                    <div key={field.name} className="flex flex-col gap-1.5">
                      <label
                        className={`text-[10px] md:text-xs uppercase tracking-wider text-neutral-400 font-semibold ${spaceGrotesk.className}`}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className={`w-full bg-neutral-900/40 border border-neutral-800 focus:border-rose-500/60 rounded-lg py-3 px-4 text-white text-xs md:text-sm placeholder:text-neutral-600 outline-none transition-all ${spaceGrotesk.className}`}
                      />
                    </div>
                  ))}

                  {/* Art Type Picker */}
                  <div className="flex flex-col gap-1.5 relative w-full">
                    <label
                      className={`text-[10px] md:text-xs uppercase tracking-wider text-neutral-400 font-semibold ${spaceGrotesk.className}`}
                    >
                      Artistic Medium
                    </label>

                    {/* Glow animation on auto-select */}
                    <AnimatePresence>
                      {highlightField && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{
                            opacity: 1,
                            backgroundPosition: [
                              "0% 50%",
                              "100% 50%",
                              "0% 50%",
                            ],
                            scale: [1.01, 1.02, 1.01],
                          }}
                          exit={{ opacity: 0 }}
                          transition={{
                            opacity: { duration: 0.4 },
                            backgroundPosition: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                            },
                            scale: {
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                          }}
                          className="absolute inset-0 -m-1 rounded-xl bg-gradient-to-r from-rose-500 via-amber-500 to-rose-500 opacity-60 blur z-0 pointer-events-none"
                          style={{ backgroundSize: "200% 200%" }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Toast Notification */}
                    <AnimatePresence>
                      {showToast && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.9 }}
                          animate={{ opacity: 1, y: -45, scale: 1 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          className={`absolute left-0 top-0 bg-gradient-to-r from-rose-500 to-amber-500 text-white text-[10px] font-bold py-1 px-3 rounded shadow-lg flex items-center gap-1.5 z-50 pointer-events-none ${spaceGrotesk.className}`}
                        >
                          <span>Selected Category: {formData.artType}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.select
                      ref={selectRef}
                      name="artType"
                      value={formData.artType}
                      onChange={handleChange}
                      required
                      animate={
                        highlightField
                          ? {
                              scale: [1, 1.02, 0.99, 1.01, 1],
                              borderColor: [
                                "#262626",
                                "#f43f5e",
                                "#f59e0b",
                                "#f43f5e",
                                "#262626",
                              ],
                            }
                          : {}
                      }
                      transition={{ duration: 1.2 }}
                      className={`relative z-10 w-full bg-neutral-900/40 border border-neutral-800 focus:border-rose-500/60 rounded-lg py-3 px-4 text-white text-xs md:text-sm outline-none transition-all appearance-none cursor-pointer ${spaceGrotesk.className}`}
                    >
                      <option value="" className="bg-neutral-950 text-white/50">
                        Select Art Type
                      </option>
                      {ART_TYPES.map((type) => (
                        <option
                          key={type}
                          value={type}
                          className="bg-neutral-950 text-white"
                        >
                          {type}
                        </option>
                      ))}
                    </motion.select>

                    <div className="absolute right-3.5 bottom-3.5 pointer-events-none z-20 text-neutral-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>

                  {/* Date Picker */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className={`text-[10px] md:text-xs uppercase tracking-wider text-neutral-400 font-semibold ${spaceGrotesk.className}`}
                    >
                      Preferred Deadline
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className={`w-full bg-neutral-900/40 border border-neutral-800 focus:border-rose-500/60 rounded-lg py-3 px-4 text-white text-xs md:text-sm outline-none transition-all cursor-pointer [&::-webkit-calendar-picker-indicator]:invert ${spaceGrotesk.className}`}
                    />
                  </div>

                  {/* Additional Textarea */}
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label
                      className={`text-[10px] md:text-xs uppercase tracking-wider text-neutral-400 font-semibold ${spaceGrotesk.className}`}
                    >
                      Detailed Requirements
                    </label>
                    <textarea
                      name="comments"
                      placeholder="Specify any special requests, framing options, or styling instructions..."
                      rows={4}
                      value={formData.comments}
                      onChange={handleChange}
                      className={`w-full bg-neutral-900/40 border border-neutral-800 focus:border-rose-500/60 rounded-lg py-3 px-4 text-white text-xs md:text-sm placeholder:text-neutral-600 outline-none resize-none transition-all ${spaceGrotesk.className}`}
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="md:col-span-2 mt-4">
                    <button
                      type="submit"
                      className={`group relative w-full py-4 bg-neutral-900 border border-neutral-800 hover:border-rose-500 hover:bg-rose-950/20 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)] rounded-lg text-white font-bold uppercase tracking-widest text-xs md:text-sm overflow-hidden transition-all ${spaceGrotesk.className}`}
                    >
                      <span className="relative z-10 transition-colors flex items-center justify-center gap-2">
                        <span>Submit Commission Request</span>
                        <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                          →
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
