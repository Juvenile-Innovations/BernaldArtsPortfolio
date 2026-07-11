"use client";

import GalleryCarousel from "../components/GalleryCarousel";
import type { GalleryItem } from "../components/GalleryCarousel";
import "../gallery.css";

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/images/gallery/gallery_1.mp4",
    title: "Mural Artistry",
    subtitle: "Wall Art",
    description: "Vibrant compositions transforming environments",
  },
  {
    src: "/images/gallery/gallery_2.jpg",
    title: "Graphite Study",
    subtitle: "Pencil",
    description: "Perfecting the craft of visual storytelling",
  },
  {
    src: "/images/gallery/gallery_3.jpg",
    title: "Mural Execution",
    subtitle: "Street Art",
    description: "Unique artworks delivered across commercial spaces",
  },
  {
    src: "/images/gallery/gallery_4.mp4",
    title: "Charcoal Depth",
    subtitle: "Drawing",
    description: "Exploring deep contrasts and fine details",
  },
  {
    src: "/images/gallery/gallery_5.jpg",
    title: "Vivid Strokes",
    subtitle: "Acrylic",
    description: "Bold colours brought to life on canvas",
  },
  {
    src: "/images/gallery/gallery_6.jpg",
    title: "Oil Impression",
    subtitle: "Oil Painting",
    description: "Rich textures and luminous tones",
  },
  {
    src: "/images/gallery/gallery_7.mp4",
    title: "Subtle Form",
    subtitle: "Pencil Art",
    description: "Delicate lines defining intricate shapes",
  },
  {
    src: "/images/gallery/gallery_8.jpg",
    title: "Urban Canvas",
    subtitle: "Wall Art",
    description: "Transforming blank walls into living art",
  },
  {
    src: "/images/gallery/gallery_9.mp4",
    title: "Portrait Study",
    subtitle: "Sketch",
    description: "Capturing emotion through careful observation",
  },
  {
    src: "/images/gallery/gallery_10.mp4",
    title: "Creative Process",
    subtitle: "Behind the Scenes",
    description: "A cinematic look at the artistic execution",
  },
];

export default function Gallery() {
  return (
    <>
      <section id="gallery" className="gallery-section">
        {/* Infinite vertical scrolling label — right side */}
        <div className="gallery-marquee-vertical">
          <div className="gallery-marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="gallery-marquee-set" aria-hidden={copy === 1}>
                {[
                  "ART", "✦", "SKETCH", "✦", "MURAL", "✦", "PAINT", "✦",
                  "DRAW", "✦", "CANVAS", "✦", "CRAFT", "✦", "STROKE", "✦",
                  "INK", "✦", "FORM", "✦", "VISION", "✦", "BRUSH", "✦",
                  "HUES", "✦", "SHADE", "✦", "GLYPH", "✦", "MOTIF", "✦",
                  "TONE", "✦", "LIGHT", "✦", "DEPTH", "✦", "STYLE", "✦",
                  "LAYER", "✦", "PIGMENT", "✦", "TEXTURE", "✦", "FIGURE", "✦",
                  "MUSE", "✦",
                ].map((word, i) => (
                  <span key={i} className={word === "✦" ? "gallery-marquee-dot" : "gallery-marquee-word"}>
                    {word}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <GalleryCarousel items={GALLERY_ITEMS} />
      </section>
    </>
  );
}