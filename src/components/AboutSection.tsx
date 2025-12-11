import { Coffee, Users, Clock, Award, Heart, Leaf } from "lucide-react";

const stats = [
  { icon: Coffee, value: "50+", label: "Menu Items" },
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Quality Assured" },
];

const features = [
  { icon: Leaf, text: "100% Vegetarian" },
  { icon: Heart, text: "Made with Love" },
  { icon: Coffee, text: "Fresh Daily" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-golden/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
      
      <div className="container-narrow mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-badge">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              About <span className="text-gradient">Bangalore Cafe</span>
            </h2>
            <div className="decorative-line !mx-0 mb-8" />
            
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Welcome to our café demo website. This layout showcases how a modern café 
              site will look — mobile-responsive, fast, and customer-friendly.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our demonstration highlights clean design principles, warm aesthetics, 
              and user-friendly navigation that any food business would benefit from. 
              This is a template to show clients the quality and experience we deliver.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-10">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full"
                >
                  <feature.icon className="w-4 h-4 text-golden" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-2xl p-4 text-center shadow-soft border border-border/50 hover:border-golden/30 transition-colors"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-golden/20 to-amber/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-golden" />
                  </div>
                  <div className="font-serif text-2xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-golden/20 via-amber/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border/50">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-golden to-amber rounded-2xl flex items-center justify-center shadow-golden rotate-12">
                <Award className="w-10 h-10 text-espresso -rotate-12" />
              </div>
              
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
                Why Choose Us?
              </h3>
              <ul className="space-y-5">
                {[
                  "Authentic South Indian recipes passed down generations",
                  "Fresh ingredients sourced daily",
                  "Quick and friendly service",
                  "Comfortable & hygienic dining atmosphere",
                  "Affordable pricing for everyone",
                  "Takeaway & delivery options available",
                ].map((item, index) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-golden/20 to-amber/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-golden font-bold text-sm">{index + 1}</span>
                    </span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
