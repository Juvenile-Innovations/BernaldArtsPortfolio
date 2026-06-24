import Container from "./Container";
import { spaceGrotesk, shareTechMono } from "@/app/lib/fonts";

const NAV_LINKS = ["About", "Services", "Gallery", "Contact"];

const SOCIAL_LINKS = [
  { name: "Instagram", url: "https://www.instagram.com/bernald_george_official/" },
  { name: "Facebook", url: "#" },
  { name: "WhatsApp", url: "https://wa.me/919047576773" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-20 bg-neutral-950 border-t border-neutral-900">
      {/* Matrix Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-600/5 blur-[120px] pointer-events-none z-0" />

      {/* Tech Corners */}
      <div className="absolute top-10 left-10 text-white/10 select-none pointer-events-none font-mono text-xs z-10">+</div>
      <div className="absolute top-10 right-10 text-white/10 select-none pointer-events-none font-mono text-xs z-10">+</div>

      <Container>
        <div className="relative z-10 flex flex-col justify-between gap-16 md:gap-24">

          {/* TOP SECTION */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <p className={`uppercase tracking-[0.4em] text-rose-500 text-xs mb-3 font-bold ${shareTechMono.className}`}>
                [ FINE_ART_STUDIO_LEDGER ]
              </p>
              <h1 className={`text-[12vw] md:text-[6vw] leading-[0.85] font-black uppercase tracking-tight text-white ${spaceGrotesk.className}`}>
                Bernald
                <br />
                Arts
              </h1>
            </div>

            <div className="max-w-md">
              <p className={`text-neutral-400 text-base md:text-lg leading-relaxed ${spaceGrotesk.className}`}>
                Synthesizing custom contemporary multi-surface installations and mixed media compositions on a global scale.
              </p>
            </div>
          </div>

          {/* MIDDLE SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Navigation */}
            <div>
              <h3 className={`text-neutral-500 uppercase tracking-[0.3em] text-[11px] mb-6 font-bold ${shareTechMono.className}`}>
                // NAVIGATION
              </h3>
              <div className="space-y-3">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`block text-lg text-neutral-300 hover:text-rose-500 transition-colors ${spaceGrotesk.className}`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className={`text-neutral-500 uppercase tracking-[0.3em] text-[11px] mb-6 font-bold ${shareTechMono.className}`}>
                // INQUIRY_INDEX
              </h3>
              <div className={`space-y-3 text-neutral-300 ${shareTechMono.className} text-sm`}>
                <p className="hover:text-rose-400 transition-colors cursor-pointer">bernaldgeorge90475@gmail.com</p>
                <p>+91 90475 76773</p>
                <p>Tamil Nadu, India</p>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className={`text-neutral-500 uppercase tracking-[0.3em] text-[11px] mb-6 font-bold ${shareTechMono.className}`}>
                // BROADCAST_CHANNELS
              </h3>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-lg text-neutral-300 hover:text-rose-500 transition-colors ${spaceGrotesk.className}`}
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`text-neutral-500 text-xs ${shareTechMono.className}`}>
              © {currentYear} BERNALD ARTS. ALL RIGHTS RESERVED.
            </p>
            <p className={`uppercase tracking-[0.3em] text-[10px] text-neutral-600 font-bold ${shareTechMono.className}`}>
              SYS.INTELLIGENCE_DEPLOYED
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}