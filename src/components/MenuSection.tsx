import { Utensils } from "lucide-react";

const menuItems = [
  { name: "Masala Dosa", price: 60, category: "Dosa", popular: true },
  { name: "Plain Dosa", price: 45, category: "Dosa" },
  { name: "Rava Dosa", price: 55, category: "Dosa" },
  { name: "Set Dosa (3 pcs)", price: 50, category: "Dosa" },
  { name: "Idly (2 pcs)", price: 30, category: "Breakfast" },
  { name: "Medu Vada (2 pcs)", price: 35, category: "Breakfast", popular: true },
  { name: "Rava Upma", price: 40, category: "Breakfast" },
  { name: "Pongal", price: 45, category: "Breakfast" },
  { name: "Veg Puff", price: 25, category: "Snacks" },
  { name: "Samosa", price: 20, category: "Snacks" },
  { name: "Bonda", price: 20, category: "Snacks" },
  { name: "Filter Coffee", price: 20, category: "Beverages", popular: true },
  { name: "Tea", price: 15, category: "Beverages" },
  { name: "Badam Milk", price: 35, category: "Beverages" },
  { name: "Buttermilk", price: 15, category: "Beverages" },
  { name: "Fresh Lime Soda", price: 25, category: "Beverages" },
];

const MenuSection = () => {
  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <section id="menu" className="section-padding bg-secondary/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-50" />
      
      <div className="container-narrow mx-auto relative">
        <div className="text-center mb-16">
          <span className="section-badge">What We Offer</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Menu</span>
          </h2>
          <div className="decorative-line mt-6" />
          <p className="text-muted-foreground max-w-xl mx-auto mt-6 text-lg">
            Sample pricing for demonstration purposes only
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-golden to-amber flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-espresso" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-2 group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-foreground font-medium group-hover:text-golden transition-colors">
                          {item.name}
                        </span>
                        {item.popular && (
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-golden/20 text-copper rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex-1 border-b border-dotted border-border/50 w-8" />
                        <span className="text-golden font-bold text-lg">
                          ₹{item.price}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          * Prices shown are for demonstration purposes only
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
