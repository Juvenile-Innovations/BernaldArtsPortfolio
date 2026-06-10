import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  
  // Prevents search engines from penalizing duplicate content
  alternates: {
    canonical: "/",
  },
  
  // Explicitly tell Google exactly how to crawl and index the site
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
  
  // Open Graph: Controls how links look when shared on WhatsApp, Facebook, LinkedIn, etc.
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bernaldarts.com",
    title: "Bernald Arts | Multi-Surface Mixed-Media Artist",
    description: "Creating timeless artwork through imagination, craftsmanship, and visual storytelling.",
    siteName: "Bernald Arts",
    images: [
      {
        url: "/images/share_image.png", // Acts as the default share image
        width: 1200,
        height: 630,
        alt: "Bernald Arts Portfolio",
      },
    ],
  },
  
  // Twitter Card: Controls how links look on X (Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Bernald Arts | Multi-Surface Mixed-Media Artist",
    description: "Creating timeless artwork through imagination, craftsmanship, and visual storytelling.",
    images: ["/images/share_image.png"],
  },
  
  // Defines browser tab icons and iOS home screen icons
  icons: {
    icon: "/favicon_io/favicon.ico",
    shortcut: "/BernaldArtsLogo.ico",
    apple: "/favicon_io/apple-touch-icon.png", // Recommended: Create a 180x180 png for iOS
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-screen flex flex-col antialiased bg-black text-white selection:bg-[#d4af37] selection:text-black"
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