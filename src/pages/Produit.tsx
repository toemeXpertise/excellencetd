import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LegalPageSection from "@/components/LegalSection";

export default function Product() {
  return (
      <div className="min-h-screen">
      <title>Delma - Produits</title>
      <Header />
      <main>
        <ProductsSection />
        <ContactSection />
         <LegalPageSection />
      </main>
      <Footer />
    </div>
  );
}
