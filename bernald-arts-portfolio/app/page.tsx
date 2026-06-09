import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Achievements from "./sections/Achievements";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="w-full bg-black overflow-x-hidden flex flex-col m-0 p-0">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Achievements />
      <Contact />
    </main>
  );
}