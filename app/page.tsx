import HeroScrollSequence from "./components/HeroScrollSequence";
import TextParallax from "./sections/TextParallax";
import Services from "./sections/Services";
import Achievements from "./sections/Achievements";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { SmoothCursor } from "./components/smooth-cursor";

export default function Home() {
  return (
    <main className="w-full bg-black flex flex-col m-0 p-0">
      <SmoothCursor />

      {/*
       * HeroScrollSequence owns the GSAP pin+scrub timeline.
       * It renders Hero (pinned) and About (slides over) together
       * so GSAP can reach both DOM nodes from a single useEffect context.
       */}
      <HeroScrollSequence />

      <Services />
      <TextParallax />
      <Gallery />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}