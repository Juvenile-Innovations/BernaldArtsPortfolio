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
    src: "/images/gallery/gallery_4.mp4",
    title: "Charcoal Depth",
    subtitle: "Drawing",
    description: "Exploring deep contrasts and fine details",
  },
  {
    src: "/images/gallery/gallery_7.mp4",
    title: "Subtle Form",
    subtitle: "Pencil Art",
    description: "Delicate lines defining intricate shapes",
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

        <GalleryCarousel items={GALLERY_ITEMS} />
      </section>
    </>
  );
}