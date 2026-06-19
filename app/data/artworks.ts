export interface Artwork {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  featured: boolean;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Abstract Horizon",
    description: "A stunning abstract representation of nature's boundless horizon.",
    category: "Abstract",
    image: "/images/artworks/artwork-1.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Urban Reflections",
    description: "Capturing the essence of city life through modern lens.",
    category: "Photography",
    image: "/images/artworks/artwork-2.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "Digital Dreams",
    description: "Exploring digital art and its infinite possibilities.",
    category: "Digital Art",
    image: "/images/artworks/artwork-3.jpg",
    featured: true,
  },
  {
    id: "4",
    title: "Nature's Canvas",
    description: "Celebrating the natural beauty of our world.",
    category: "Landscape",
    image: "/images/artworks/artwork-4.jpg",
    featured: false,
  },
  {
    id: "5",
    title: "Color Fusion",
    description: "A vibrant explosion of colors and emotions.",
    category: "Abstract",
    image: "/images/artworks/artwork-5.jpg",
    featured: false,
  },
  {
    id: "6",
    title: "Minimalist Thought",
    description: "Less is more in this elegant composition.",
    category: "Minimalism",
    image: "/images/artworks/artwork-6.jpg",
    featured: false,
  },
];
