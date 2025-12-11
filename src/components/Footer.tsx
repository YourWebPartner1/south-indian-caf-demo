import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="container-narrow mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-golden" />
              <span className="font-serif text-xl font-bold text-cream">
                South Café
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              This is a demo website showcasing modern café design. 
              Not affiliated with any real business.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Menu", "About", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-golden transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-cream mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-golden hover:text-espresso transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 text-center text-sm">
          <p>© 2024 South Café Demo. This is a design demonstration only.</p>
          <p className="mt-2 text-cream/60">
            Built with love for showcasing modern web design
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
