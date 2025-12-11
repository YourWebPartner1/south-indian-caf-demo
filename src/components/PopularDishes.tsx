import { Star } from "lucide-react";
import masalaDosa from "@/assets/masala-dosa.jpg";
import filterCoffee from "@/assets/filter-coffee.jpg";
import idlyVada from "@/assets/idly-vada.jpg";
import vegSnacks from "@/assets/veg-snacks.jpg";
import upma from "@/assets/upma.jpg";

const dishes = [
  {
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato masala, served with chutneys",
    image: masalaDosa,
    price: "₹60",
    rating: 4.9,
  },
  {
    name: "Filter Coffee",
    description: "Traditional South Indian decoction coffee in brass tumbler",
    image: filterCoffee,
    price: "₹20",
    rating: 5.0,
  },
  {
    name: "Idly & Vada",
    description: "Soft steamed rice cakes with crispy lentil fritters",
    image: idlyVada,
    price: "₹35",
    rating: 4.8,
  },
  {
    name: "Veg Snacks",
    description: "Assorted savory bites - samosa, puff & bonda",
    image: vegSnacks,
    price: "₹25",
    rating: 4.7,
  },
  {
    name: "Rava Upma",
    description: "Savory semolina dish with vegetables & aromatic spices",
    image: upma,
    price: "₹40",
    rating: 4.6,
  },
];

const PopularDishes = () => {
  return (
    <section id="popular" className="section-padding bg-background bg-pattern relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-golden/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
      
      <div className="container-narrow mx-auto relative">
        <div className="text-center mb-16">
          <span className="section-badge">Our Specialties</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Popular <span className="text-gradient">Dishes</span>
          </h2>
          <div className="decorative-line mt-6" />
          <p className="text-muted-foreground max-w-xl mx-auto mt-6 text-lg">
            Experience the authentic taste of South India with our carefully crafted dishes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={dish.name}
              className="card-warm group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-52 -mx-6 -mt-6 mb-5 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/20 to-transparent" />
                
                {/* Price tag */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-golden text-espresso text-sm font-bold rounded-full shadow-golden">
                  {dish.price}
                </div>
                
                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 px-2 py-1 bg-espresso/80 backdrop-blur-sm rounded-full">
                  <Star className="w-3.5 h-3.5 text-golden fill-golden" />
                  <span className="text-cream text-xs font-medium">{dish.rating}</span>
                </div>
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-golden transition-colors">
                {dish.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {dish.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#menu" className="btn-primary">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
