import { useState } from "react";
import { X } from "lucide-react";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import gallerySpread from "@/assets/gallery-spread.jpg";
import galleryTea from "@/assets/gallery-tea.jpg";
import masalaDosa from "@/assets/masala-dosa.jpg";
import filterCoffee from "@/assets/filter-coffee.jpg";

const images = [
  { src: galleryInterior, alt: "Café Interior" },
  { src: galleryKitchen, alt: "Kitchen View" },
  { src: gallerySpread, alt: "South Indian Spread" },
  { src: galleryTea, alt: "Traditional Tea" },
  { src: masalaDosa, alt: "Masala Dosa" },
  { src: filterCoffee, alt: "Filter Coffee" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            Visual Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A glimpse into our cozy café and delicious offerings
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-cream font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-espresso/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-cream p-2 hover:bg-cream/10 rounded-full transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain animate-scale-in"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
