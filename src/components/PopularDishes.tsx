import masalaDosa from "@/assets/masala-dosa.jpg";
import filterCoffee from "@/assets/filter-coffee.jpg";
import idlyVada from "@/assets/idly-vada.jpg";
import vegSnacks from "@/assets/veg-snacks.jpg";
import upma from "@/assets/upma.jpg";

const dishes = [
  {
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato masala",
    image: masalaDosa,
  },
  {
    name: "Filter Coffee",
    description: "Traditional South Indian decoction coffee",
    image: filterCoffee,
  },
  {
    name: "Idly & Vada",
    description: "Soft steamed rice cakes with crispy lentil fritters",
    image: idlyVada,
  },
  {
    name: "Veg Snacks",
    description: "Assorted savory bites - samosa, puff & more",
    image: vegSnacks,
  },
  {
    name: "Rava Upma",
    description: "Savory semolina dish with vegetables & spices",
    image: upma,
  },
];

const PopularDishes = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            Our Specialties
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Popular Dishes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Experience the authentic taste of South India with our carefully crafted dishes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dishes.map((dish, index) => (
            <div
              key={dish.name}
              className="card-warm group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 md:h-56 -mx-6 -mt-6 mb-4 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {dish.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {dish.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
