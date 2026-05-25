export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Custom Art Design",
    description:
      "Bespoke artwork tailored to your specific vision and requirements.",
    icon: "🎨",
    features: ["Concept Development", "Unlimited Revisions", "High Resolution"],
  },
  {
    id: "2",
    title: "Digital Illustration",
    description: "Professional digital illustrations for various media and platforms.",
    icon: "🖼️",
    features: ["Vector Graphics", "3D Modeling", "Animation Support"],
  },
  {
    id: "3",
    title: "Branding & Identity",
    description:
      "Complete branding solutions including logo, color palette, and visual guidelines.",
    icon: "✨",
    features: ["Logo Design", "Brand Guidelines", "Style Sheets"],
  },
  {
    id: "4",
    title: "Photography",
    description: "Professional photography services for events, products, and portraits.",
    icon: "📸",
    features: ["Event Coverage", "Post-Processing", "High Resolution Files"],
  },
  {
    id: "5",
    title: "UI/UX Design",
    description: "User-centered digital design for web and mobile applications.",
    icon: "💻",
    features: ["Wireframing", "Prototyping", "User Testing"],
  },
  {
    id: "6",
    title: "Video Production",
    description:
      "Creative video content production and editing services.",
    icon: "🎬",
    features: ["Storyboarding", "Editing", "Motion Graphics"],
  },
];
