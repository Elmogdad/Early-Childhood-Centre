
import Header from '../components/landingPageComponents/Header';
import HeroSection from '../components/landingPageComponents/HeroSection';
import FeaturesSection from '../components/landingPageComponents/FeaturesSection';
import ProgramSection from '../components/landingPageComponents/ProgramSection';
import GallerySection from '../components/landingPageComponents/GallerySection';
import TestimonialsSection from '../components/landingPageComponents/TestimonialsSection';
import Contact from '../components/landingPageComponents/Contact';
import Footer from '../components/landingPageComponents/Footer';

export default function HomePage() {

  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
    <Header />
      
      {/* Hero Section */}
   <HeroSection />
      {/* Features Section */}

      <FeaturesSection />
      {/* Programs Section */}

      <ProgramSection />

      {/* Gallery Section */}
    <GallerySection />

      {/* Testimonials Section */}
      
      <TestimonialsSection />
      
      {/* Contact Section */}
      <Contact />

      {/* Footer */}
    <Footer />
    </div>
  );
}