import Hero from "./sections/Hero";
import About from "./sections/About";
import Featured from "./sections/Featured";
import Services from "./sections/Services";
import Process from "./sections/Process";
import Achievements from "./sections/Achievements";
import UseCases from "./sections/UseCases";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Featured />
      <Services />
      <Process />
      <Achievements />
      <UseCases />
      <Gallery />
      <Contact />
    </main>
  );
}