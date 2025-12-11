import { ChevronDown } from "lucide-react";
import heroCafe from "@/assets/hero-cafe.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCafe}
          alt="Bangalore Cafe Interior"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/60 to-espresso/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/40 via-transparent to-espresso/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-golden/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 right-10 w-40 h-40 bg-amber/10 rounded-full blur-3xl animate-float delay-300" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-6 py-3 mb-8 text-xs font-bold tracking-[0.25em] uppercase bg-golden/20 text-golden rounded-full border border-golden/30 backdrop-blur-sm">
            <span className="w-2 h-2 bg-golden rounded-full animate-pulse" />
            Authentic South Indian Flavors
          </span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 animate-fade-up delay-100 leading-[1.1]">
          Welcome to
          <br />
          <span className="text-gradient">Bangalore Cafe</span>
        </h1>
        
        <p className="text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto animate-fade-up delay-200 font-light tracking-wide">
          Fresh Food • Quick Service • Dine-In & Takeaway
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
          <a href="#menu" className="btn-primary">
            Explore Menu
          </a>
          <a
            href="#contact"
            className="btn-secondary bg-cream/10 text-cream border-cream/30 hover:bg-cream/20 hover:border-cream/50 backdrop-blur-sm"
          >
            Contact Us
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up delay-500">
          {[
            { value: "15+", label: "Years" },
            { value: "50+", label: "Dishes" },
            { value: "10K+", label: "Customers" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-golden">{stat.value}</div>
              <div className="text-xs text-cream/60 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#popular"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50 hover:text-golden transition-colors cursor-pointer group"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
