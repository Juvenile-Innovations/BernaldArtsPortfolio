"use client";

import { useState } from "react";
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
  "Acrylic Painting",
  "Oil Painting",
  "Water Colour",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🎨 *BOOK YOUR ART*\n👤 Name: ${formData.name}\n📞 Mobile: ${formData.mobile}\n📍 Location: ${formData.location}\n🖼️ Type: ${formData.artType}\n📐 Size: ${formData.size} Sq.ft\n📅 Date: ${formData.date}\n📝 Comments: ${formData.comments}`;
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

                  {/* SELECT ART TYPE */}
                  <select
                    name="artType"
                    value={formData.artType}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white outline-none transition-colors focus:border-[#f3d08a] appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-gray-900 text-white">Select Art Type</option>
                    {ART_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-gray-900 text-white">
                        {type}
                      </option>
                    ))}
                  </select>

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