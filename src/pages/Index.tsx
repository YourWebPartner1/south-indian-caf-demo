import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularDishes from "@/components/PopularDishes";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PopularDishes />
      <MenuSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
