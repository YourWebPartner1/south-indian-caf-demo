import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import gallerySpread from "@/assets/gallery-spread.jpg";
import galleryTea from "@/assets/gallery-tea.jpg";
import masalaDosa from "@/assets/masala-dosa.jpg";
import filterCoffee from "@/assets/filter-coffee.jpg";

const images = [
  { src: galleryInterior, alt: "Café Interior", span: "col-span-2 row-span-2" },
  { src: galleryKitchen, alt: "Kitchen View", span: "" },
  { src: gallerySpread, alt: "South Indian Spread", span: "" },
  { src: galleryTea, alt: "Traditional Tea", span: "" },
  { src: masalaDosa, alt: "Masala Dosa", span: "" },
  { src: filterCoffee, alt: "Filter Coffee", span: "col-span-2" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-30" />
      
      <div className="container-narrow mx-auto relative">
        <div className="text-center mb-16">
          <span className="section-badge">Visual Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <div className="decorative-line mt-6" />
          <p className="text-muted-foreground max-w-xl mx-auto mt-6 text-lg">
            A glimpse into our cozy café and delicious offerings
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-4">
                <ZoomIn className="w-8 h-8 text-golden mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                <span className="text-cream font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
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
          className="fixed inset-0 z-50 bg-espresso/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-cream p-3 hover:bg-cream/10 rounded-full transition-colors"
          >
            <X size={28} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain animate-scale-in shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
