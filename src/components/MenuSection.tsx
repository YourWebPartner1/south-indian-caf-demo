const menuItems = [
  { name: "Masala Dosa", price: 60, category: "Dosa" },
  { name: "Plain Dosa", price: 45, category: "Dosa" },
  { name: "Idly (2 pcs)", price: 30, category: "Breakfast" },
  { name: "Medu Vada (2 pcs)", price: 35, category: "Breakfast" },
  { name: "Rava Upma", price: 40, category: "Breakfast" },
  { name: "Pongal", price: 45, category: "Breakfast" },
  { name: "Veg Puff", price: 25, category: "Snacks" },
  { name: "Samosa", price: 20, category: "Snacks" },
  { name: "Filter Coffee", price: 20, category: "Beverages" },
  { name: "Tea", price: 15, category: "Beverages" },
  { name: "Badam Milk", price: 35, category: "Beverages" },
  { name: "Buttermilk", price: 15, category: "Beverages" },
];

const MenuSection = () => {
  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-accent/20 text-accent-foreground rounded-full">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sample pricing for demonstration purposes only
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4 pb-2 border-b border-border">
                {category}
              </h3>
              <div className="space-y-3">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-2 group hover:bg-muted/50 px-3 -mx-3 rounded-lg transition-colors"
                    >
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="hidden sm:block flex-1 border-b border-dotted border-border mx-4 w-16" />
                        <span className="text-primary font-semibold">
                          ₹{item.price}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Prices shown are for demonstration purposes only
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
