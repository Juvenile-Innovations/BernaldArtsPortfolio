import Container from "./Container";

const NAV_LINKS = ["About", "Services", "Gallery", "Contact"];
const SOCIAL_LINKS = ["Instagram", "Facebook", "WhatsApp"];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      // Added 'bg-fixed' here for the CSS-only parallax effect
      className="relative overflow-hidden py-20 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}
    >
      {/* Soft White Overlay */}
      <div className="absolute inset-0 bg-white/70" />

      <Container>
        <div className="relative z-10 flex flex-col justify-between gap-16 md:gap-24">
          
          {/* TOP SECTION */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <p className="uppercase tracking-[0.5em] text-[#b8862d] text-xs mb-4">
                Fine Art Studio
              </p>
              <h1 className="text-[15vw] md:text-[8vw] leading-[0.8] font-black tracking-[-0.05em] uppercase text-[#b8862d]">
                Bernald
                <br />
                Arts
              </h1>
            </div>

            <div className="max-w-md">
              <p className="text-black/60 text-lg leading-relaxed">
                Creating timeless artwork through imagination, craftsmanship, and visual storytelling.
              </p>
            </div>
          </div>

          {/* MIDDLE SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Navigation */}
            <div>
              <h3 className="text-[#b8862d] uppercase tracking-[0.3em] text-xs mb-6">
                Navigation
              </h3>
              <div className="space-y-3">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-xl text-black/70 hover:text-[#b8862d] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[#b8862d] uppercase tracking-[0.3em] text-xs mb-6">
                Contact
              </h3>
              <div className="space-y-3 text-black/70">
                <p>hello@bernaldarts.com</p>
                <p>+91 90475 76773</p>
                <p>Tamil Nadu, India</p>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-[#b8862d] uppercase tracking-[0.3em] text-xs mb-6">
                Follow
              </h3>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="block text-black/70 hover:text-[#b8862d] transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="pt-8 border-t border-[#d4af37]/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-black/50 text-sm">
              © {currentYear} Bernald Arts. All rights reserved.
            </p>
            <p className="uppercase tracking-[0.3em] text-xs text-black/40">
              Crafted With Passion
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}