"use client";

import GalleryCarousel from "../components/GalleryCarousel";
import type { GalleryItem } from "../components/GalleryCarousel";
import "../gallery.css";

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/images/gallery/image_cc2640.jpg",
    title: "Mural Artistry",
    subtitle: "Street Art",
    description: "Vibrant compositions transforming environments",
  },
  // Keep your existing items here...
  {
    src: "/images/gallery/image01.jpg",
    title: "Graphite Study",
    subtitle: "Sketch",
    description: "Perfecting the craft of visual storytelling",
  },
  {
    src: "/images/gallery/image02.jpg",
    title: "Mural Execution",
    subtitle: "Street Art",
    description: "Unique artworks delivered across commercial spaces",
  },
  {
    src: "/images/gallery/image05.jpg",
    title: "Charcoal Depth",
    subtitle: "Drawing",
    description: "Exploring deep contrasts and fine details",
  },
  {
    src: "/images/gallery/image06.jpg",
    title: "Vivid Strokes",
    subtitle: "Acrylic",
    description: "Bold colours brought to life on canvas",
  },
  {
    src: "/images/gallery/image09.jpg",
    title: "Oil Impression",
    subtitle: "Oil Painting",
    description: "Rich textures and luminous tones",
  },
  {
    src: "/images/gallery/image11.jpg",
    title: "Subtle Form",
    subtitle: "Pencil Art",
    description: "Delicate lines defining intricate shapes",
  },
  {
    src: "/images/gallery/image12.jpg",
    title: "Urban Canvas",
    subtitle: "Wall Art",
    description: "Transforming blank walls into living art",
  },
  {
    src: "/images/gallery/image13.jpg",
    title: "Portrait Study",
    subtitle: "Sketch",
    description: "Capturing emotion through careful observation",
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