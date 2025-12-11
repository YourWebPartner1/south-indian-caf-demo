import { Coffee, Users, Clock, Award } from "lucide-react";

const stats = [
  { icon: Coffee, value: "50+", label: "Menu Items" },
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Quality Assured" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Welcome to our café demo website. This layout showcases how a modern café 
              site will look — mobile-responsive, fast, and customer-friendly.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our demonstration highlights clean design principles, warm aesthetics, 
              and user-friendly navigation that any food business would benefit from. 
              This is a template to show clients the quality and experience we deliver.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-xl p-4 text-center shadow-soft"
                >
                  <stat.icon className="w-8 h-8 text-golden mx-auto mb-2" />
                  <div className="font-serif text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-golden/20 to-primary/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-3xl p-8 shadow-card">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                {[
                  "Authentic South Indian recipes",
                  "Fresh ingredients daily",
                  "Quick and friendly service",
                  "Comfortable dining atmosphere",
                  "Affordable pricing",
                  "Takeaway & delivery options",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-golden rounded-full" />
                    <span className="text-foreground">{item}</span>
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
