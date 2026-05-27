"use client";

import { useState } from "react";

import Container from "../components/Container";
import ScrollReveal from "../components/ScrollReveal";

import { motion } from "framer-motion";

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const message = `
🎨 *BOOK YOUR ART*

👤 Name: ${formData.name}

📞 Mobile: ${formData.mobile}

📍 Location: ${formData.location}

🖼️ Type of Art: ${formData.artType}

📐 Size (Sq.ft): ${formData.size}

📅 Required Date: ${formData.date}

📝 Additional Comments:
${formData.comments}
    `;

    const whatsappUrl = `https://wa.me/919047576773?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappUrl,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden

        py-24
        md:py-36

        bg-black

        text-white
      "
    >
      {/* NOISE */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.04]

          mix-blend-soft-light

          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('/noise.png')",
        }}
      />

      {/* GOLD GLOW */}

      
      <motion.div
        className="
          absolute
          top-[-10%]
          left-[-10%]

          w-[500px]
          h-[500px]

          rounded-full

          bg-[#d4a24c]/20

          blur-[160px]
        "
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container>
        {/* HEADER */}
        <ScrollReveal direction="up">
          <div className="text-center mb-20">
            <p
              className="
                text-[11px]

                uppercase

                tracking-[0.4em]

                text-[#d4a24c]

                mb-6
              "
            >
              COMMISSION YOUR ART
            </p>

            <h2
              className="
                text-[16vw]
                md:text-[7vw]

                leading-[0.82]

                font-black

                tracking-[-0.08em]

                uppercase
              "
            >
              Book
              <br />
              Your Art
            </h2>

            <p
              className="
                mt-8

                max-w-2xl

                mx-auto

                text-white/50

                text-sm
                md:text-lg

                leading-relaxed
              "
            >
              Share your vision and let us
              craft a cinematic artistic
              experience tailored uniquely
              for your space.
            </p>
          </div>
        </ScrollReveal>

        {/* FORM */}
        <ScrollReveal direction="up">
          <motion.form
            onSubmit={handleSubmit}
            className="
              relative

              max-w-5xl

              mx-auto

              rounded-[32px]

              border
              border-white/10

              bg-white/[0.03]

              backdrop-blur-2xl

              p-6
              md:p-12
            "
          >
            {/* INNER GLOW */}
            <div
              className="
                absolute
                inset-0

                rounded-[32px]

                bg-[radial-gradient(circle_at_top,rgba(212,162,76,0.12),transparent_70%)]

                pointer-events-none
              "
            />

            <div
              className="
                relative
                z-10

                grid
                grid-cols-1
                md:grid-cols-2

                gap-6
              "
            >
              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="
                  w-full

                  px-5
                  py-4

                  rounded-2xl

                  bg-white/[0.04]

                  border
                  border-white/10

                  text-white

                  placeholder:text-white/30

                  outline-none

                  focus:border-[#d4a24c]

                  transition-all
                "
              />

              {/* MOBILE */}
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="
                  w-full

                  px-5
                  py-4

                  rounded-2xl

                  bg-white/[0.04]

                  border
                  border-white/10

                  text-white

                  placeholder:text-white/30

                  outline-none

                  focus:border-[#d4a24c]

                  transition-all
                "
              />

              {/* LOCATION */}
              <input
                type="text"
                name="location"
                placeholder="Location / City"
                value={formData.location}
                onChange={handleChange}
                required
                className="
                  w-full

                  px-5
                  py-4

                  rounded-2xl

                  bg-white/[0.04]

                  border
                  border-white/10

                  text-white

                  placeholder:text-white/30

                  outline-none

                  focus:border-[#d4a24c]

                  transition-all
                "
              />

              {/* ART TYPE */}
              <select
                name="artType"
                value={formData.artType}
                onChange={handleChange}
                required
                className="
                  w-full

                  px-5
                  py-4

                  rounded-2xl

                  bg-black

                  border
                  border-white/10

                  text-white

                  outline-none

                  focus:border-[#d4a24c]

                  transition-all
                "
              >
                <option value="">
                  Select Art Type
                </option>

                <option>
                  Wall Art
                </option>

                <option>
                  Pencil Art
                </option>

                <option>
                  Acrylic Painting
                </option>

                <option>
                  Oil Painting
                </option>

                <option>
                  Water Colour
                </option>

                <option>
                  Blood Art
                </option>

                <option>
                  Custom Artwork
                </option>
              </select>

              {/* SIZE */}
              <input
                type="text"
                name="size"
                placeholder="Size in Sq.ft"
                value={formData.size}
                onChange={handleChange}
                required
                className="
                  w-full

                  px-5
                  py-4

                  rounded-2xl

                  bg-white/[0.04]

                  border
                  border-white/10

                  text-white

                  placeholder:text-white/30

                  outline-none

                  focus:border-[#d4a24c]

                  transition-all
                "
              />

              {/* DATE */}
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="
                  w-full

                  px-5
                  py-4

                  rounded-2xl

                  bg-black

                  border
                  border-white/10

                  text-white

                  outline-none

                  focus:border-[#d4a24c]

                  transition-all
                "
              />

              {/* COMMENTS */}
              <textarea
                name="comments"
                placeholder="Additional Comments (Optional)"
                rows={6}
                value={formData.comments}
                onChange={handleChange}
                className="
                  md:col-span-2

                  w-full

                  px-5
                  py-5

                  rounded-2xl

                  bg-white/[0.04]

                  border
                  border-white/10

                  text-white

                  placeholder:text-white/30

                  outline-none

                  resize-none

                  focus:border-[#d4a24c]

                  transition-all
                "
              />

              {/* BUTTON */}
              <div className="md:col-span-2">
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    relative

                    overflow-hidden

                    w-full

                    py-5

                    rounded-2xl

                    bg-gradient-to-r
                    from-[#d4a24c]
                    via-[#f3d08a]
                    to-[#b8862d]

                    text-black

                    font-black

                    uppercase

                    tracking-[0.28em]

                    text-sm

                    shadow-[0_0_40px_rgba(212,162,76,0.28)]

                    transition-all
                    duration-500
                  "
                >
                  <span
                    className="
                      relative
                      z-10
                    "
                  >
                    Book Your Art
                  </span>

                  {/* SHINE */}
                  <div
                    className="
                      absolute
                      inset-0

                      translate-x-[-100%]

                      bg-gradient-to-r
                      from-transparent
                      via-white/30
                      to-transparent

                      hover:translate-x-[100%]

                      transition-transform
                      duration-1000
                    "
                  />
                </motion.button>
              </div>
            </div>
          </motion.form>
        </ScrollReveal>
      </Container>
    </section>
  );
}