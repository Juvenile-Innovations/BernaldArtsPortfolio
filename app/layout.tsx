import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Viewport must be exported separately in Next.js 14+
export const viewport: Viewport = {
  themeColor: "#d4af37",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bernald.art/"),

  title: {
    default: "Bernald Arts | Multi-Surface Mixed-Media Artist",
    template: "%s | Bernald Arts",
  },
  description:
    "Explore exceptional art and mural services by Bernald George Raj J. Creating timeless artwork through imagination, craftsmanship, and visual storytelling in Tamil Nadu, India.",
  keywords: [
    "Fine Art Studio",
    "Wall Murals",
    "Mixed Media Art",
    "Cinematic Art",
    "Pencil Portraits",
    "Acrylic Painting",
    "Art Commissions India",
    "Bernald George Raj",
  ],
  authors: [{ name: "Bernald George Raj J" }],
  creator: "Bernald George Raj J",
  publisher: "Bernald Arts",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bernald.art",
    title: "Bernald Arts | Multi-Surface Mixed-Media Artist",
    description:
      "Creating timeless artwork through imagination, craftsmanship, and visual storytelling.",
    siteName: "Bernald Arts",
    images: [
      {
        url: "/images/share_image.png",
        width: 1200,
        height: 630,
        alt: "Bernald Arts Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bernald Arts | Multi-Surface Mixed-Media Artist",
    description:
      "Creating timeless artwork through imagination, craftsmanship, and visual storytelling.",
    images: ["/images/share_image.png"],
  },

  icons: {
    icon: "/favicon_io/favicon.ico",
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${poppins.className} min-h-screen flex flex-col antialiased bg-black text-white selection:bg-[#d4af37] selection:text-black`}
      >
        <Navbar />

        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}