import heroCafe from "@/assets/hero-cafe.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCafe}
          alt="South Indian Café Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/50 to-espresso/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider uppercase bg-golden/20 text-golden rounded-full animate-fade-up">
          Authentic South Indian Flavors
        </span>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 animate-fade-up delay-100">
          Welcome to Our Café
        </h1>
        
        <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto animate-fade-up delay-200">
          Fresh Food • Quick Service • Dine-In & Takeaway
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
          <a
            href="#menu"
            className="btn-primary bg-golden text-espresso hover:bg-golden/90"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="btn-secondary bg-cream/10 text-cream border-cream/30 hover:bg-cream/20"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-cream/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
