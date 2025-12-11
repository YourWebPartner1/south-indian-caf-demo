import { Instagram, Facebook, Twitter, MapPin, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-espresso text-cream/80 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-golden via-amber to-golden" />
      
      <div className="container-narrow mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-2xl font-bold text-cream">
                Bangalore Cafe
              </span>
            </div>
            <p className="text-cream/60 leading-relaxed mb-6 max-w-sm">
              This is a demo website showcasing modern café design. 
              Not affiliated with any real business. Built to demonstrate 
              quality web design and user experience.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-golden hover:to-amber hover:text-espresso transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Menu", "About", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase() === "home" ? "hero" : link.toLowerCase()}`}
                    className="text-cream/60 hover:text-golden transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-golden group-hover:w-4 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-golden flex-shrink-0 mt-0.5" />
                <span className="text-cream/60 text-sm">123 Sample Street, Demo City, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-golden flex-shrink-0" />
                <span className="text-cream/60 text-sm">+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm text-center md:text-left">
            © 2025 Demo Café Website. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gradient-to-br from-golden to-amber rounded-full flex items-center justify-center text-espresso hover:-translate-y-1 transition-transform shadow-golden"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
