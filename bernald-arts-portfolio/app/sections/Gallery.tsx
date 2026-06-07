"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const images = [
  "/images/gallery/IMG_20230305_144727_290.jpg",
  "/images/gallery/IMG-20240721-WA0040.jpg",
  "/images/gallery/IMG-20240723-WA0048.jpg",
  "/images/gallery/IMG-20240926-WA0001.jpg",
  "/images/gallery/IMG_20260225_100436_892.jpg",
  "/images/gallery/IMG_20260225_100439_745.jpg",
  "/images/gallery/IMG_20260225_100442_146.jpg",
  "/images/gallery/IMG_20260225_100444_307.jpg",
  "/images/gallery/IMG_20260225_100446_588.jpg",
  "/images/gallery/IMG_20260225_100448_730.jpg",
];

const row1 = [...images, ...images];
const row2 = [...images.slice().reverse(), ...images.slice().reverse()];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section
        id="gallery"
        className="
          relative
          overflow-hidden
          bg-white
          py-24
        "
      >
        {/* Heading */}
        <div className=" ml-16 mb-16">
          <p
            className="
              uppercase
              text-5text-white

            text-[15vw]
            sm:text-[12vw]
            md:text-[7vw]

            leading-[0.78]

            font-black

            tracking-[-0.09em]

            uppercasexl
              md:text-5xl
              font-light
              text-[#D4AF37]
            "
          >
            Gallery
          </p>

          <h2
            className="
              uppercase
              tracking-[0.5em]
              text-[#D4AF37]
              text-sm
              mb-3
            "
          >
            Our Works
          </h2>
        </div>

        {/* ROW 1 */}
        <div className="overflow-hidden mb-8">
          <motion.div
            className="flex gap-6 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {row1.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="
                  group
                  relative
                  cursor-pointer
                  flex-shrink-0

                  w-[320px]
                  h-[420px]

                  overflow-hidden
                  rounded-xl

                  border
                  border-[#D4AF37]/40

                  bg-white
                "
              >
                <img
                  src={image}
                  alt=""
                  className="
                    w-full
                    h-full
                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    inset-0

                    border-2
                    border-transparent

                    group-hover:border-[#D4AF37]

                    transition-all
                    duration-500
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2 */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {row2.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="
                  group
                  relative
                  cursor-pointer
                  flex-shrink-0

                  w-[320px]
                  h-[420px]

                  overflow-hidden
                  rounded-xl

                  border
                  border-[#D4AF37]/40

                  bg-white
                "
              >
                <img
                  src={image}
                  alt=""
                  className="
                    w-full
                    h-full
                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    inset-0

                    border-2
                    border-transparent

                    group-hover:border-[#D4AF37]

                    transition-all
                    duration-500
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Gold Lines */}
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-px
            bg-[#D4AF37]/30
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-px
            bg-[#D4AF37]/30
          "
        />
      </section>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]

              bg-black/95

              flex
              items-center
              justify-center

              cursor-pointer
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt=""
              className="
                max-w-[90vw]
                max-h-[90vh]
                object-contain
              "
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}