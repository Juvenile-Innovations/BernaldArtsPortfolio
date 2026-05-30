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

        py-28
        md:py-40

        bg-[radial-gradient(circle_at_top_left,#2b1a08_0%,#120d08_18%,#050505_42%,#000000_100%)]

        text-white
      "
    >
      {/* NOISE */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          mix-blend-soft-light

          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('/noise.png')",
        }}
      />

      {/* GOLD ORB 1 */}
      <motion.div
        className="
          absolute
          top-[-10%]
          left-[-10%]

          w-[700px]
          h-[700px]

          rounded-full

          bg-[#d4a24c]/10

          blur-[180px]
        "
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* GOLD ORB 2 */}
      <motion.div
        className="
          absolute
          bottom-[-20%]
          right-[-10%]

          w-[800px]
          h-[800px]

          rounded-full

          bg-[#f6d28f]/[0.05]

          blur-[220px]
        "
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* FLOATING FLOWER PATTERNS */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${(i * 12.5) % 100}%`,
            top: `${(i * 15) % 100}%`,
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* FLOWER BLOOM */}
          {[...Array(6)].map((_, petal) => (
            <motion.div
              key={petal}
              className="
                absolute

                w-5
                h-8

                rounded-full

                bg-gradient-to-b
                from-[#f3d08a]/60
                to-[#d4a24c]/30

                blur-sm
              "
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) rotate(${(petal * 60)}deg) translateY(-20px)`,
              }}
            />
          ))}

          {/* CENTER CIRCLE */}
          <div
            className="
              absolute

              w-3
              h-3

              rounded-full

              bg-[#f6d28f]/80
              blur-sm

              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2
            "
          />
        </motion.div>
      ))}

      <Container>
        {/* HEADER */}
        <ScrollReveal direction="up">
          <div className="text-center mb-24">
            <p
              className="
                text-[11px]

                uppercase

                tracking-[0.45em]

                text-[#f3d08a]

                mb-6
              "
            >
              COMMISSION YOUR ART
            </p>

            <h2
              className="
                text-[16vw]
                md:text-[7vw]

                leading-[0.8]

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

              max-w-6xl

              mx-auto

              overflow-hidden

              border
              border-[#f3d08a]/10

              bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]

              backdrop-blur-3xl

              p-6
              md:p-14

              shadow-[0_20px_120px_rgba(212,162,76,0.08)]

              before:absolute
              before:inset-0
              before:border
              before:border-white/[0.03]
            "
          >
            {/* TOP GOLD LINE */}
            <div
              className="
                absolute
                top-0
                left-0

                w-full
                h-px

                bg-gradient-to-r
                from-transparent
                via-[#f6d28f]/70
                to-transparent
              "
            />

            {/* INNER LIGHT */}
            <div
              className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_top,rgba(246,210,143,0.10),transparent_70%)]

                pointer-events-none
              "
            />

            {/* MASSIVE GLASS BALL */}
            <motion.div
              className="
                absolute
                top-[-15%]
                right-[-5%]

                w-[300px]
                h-[300px]

                rounded-full

                border
                border-[#f6d28f]/10

                bg-white/[0.04]

                backdrop-blur-3xl
              "
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
              {/* INPUT STYLE */}
              {[
                {
                  type: "text",
                  name: "name",
                  placeholder: "Full Name",
                },

                {
                  type: "tel",
                  name: "mobile",
                  placeholder: "Mobile Number",
                },

                {
                  type: "text",
                  name: "location",
                  placeholder: "Location / City",
                },

                {
                  type: "text",
                  name: "size",
                  placeholder: "Size in Sq.ft",
                },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={
                    formData[
                      field.name as keyof typeof formData
                    ]
                  }
                  onChange={handleChange}
                  required
                  className="
                    w-full

                    px-5
                    py-4

                    bg-white/[0.025]

                    border
                    border-white/10

                    text-white

                    placeholder:text-white/30

                    outline-none

                    transition-all
                    duration-500

                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]

                    focus:border-[#f6d28f]/40
                    focus:bg-white/[0.04]
                  "
                />
              ))}

              {/* SELECT */}
              <select
                name="artType"
                value={formData.artType}
                onChange={handleChange}
                required
                className="
                  w-full

                  px-5
                  py-4

                  bg-black/60

                  border
                  border-white/10

                  text-white

                  outline-none

                  transition-all
                  duration-500

                  focus:border-[#f6d28f]/40
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

                  bg-black/60

                  border
                  border-white/10

                  text-white

                  outline-none

                  transition-all
                  duration-500

                  focus:border-[#f6d28f]/40
                "
              />

              {/* TEXTAREA */}
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

                  bg-white/[0.025]

                  border
                  border-white/10

                  text-white

                  placeholder:text-white/30

                  outline-none

                  resize-none

                  transition-all
                  duration-500

                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]

                  focus:border-[#f6d28f]/40
                  focus:bg-white/[0.04]
                "
              />

              {/* BUTTON */}
              <div className="md:col-span-2">
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.99,
                  }}
                  className="
                    relative

                    overflow-hidden

                    w-full

                    py-5

                    bg-gradient-to-r
                    from-[#9f6b1b]
                    via-[#f6d28f]
                    to-[#7a4d10]

                    text-black

                    font-black

                    uppercase

                    tracking-[0.3em]

                    text-sm

                    shadow-[0_10px_60px_rgba(212,162,76,0.22)]

                    transition-all
                    duration-500
                  "
                >
                  <span className="relative z-10">
                    Book Your Art
                  </span>

                  {/* METAL SHINE */}
                  <div
                    className="
                      absolute
                      inset-0

                      translate-x-[-100%]

                      bg-gradient-to-r
                      from-transparent
                      via-white/40
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