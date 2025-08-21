import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LegalPageSection from "@/components/LegalSection";

export default function Service() {
  return (
    <div className="min-h-screen">
      <title>Delma - Services</title>
      <Header />
      <main>
        <ServicesSection />
        <ProductsSection />
        <TestimonialsSection />
        <ContactSection />
         <LegalPageSection />
      </main>
      <Footer />
    </div>
  );
}
