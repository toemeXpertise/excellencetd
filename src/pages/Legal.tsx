import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageSection from "@/components/LegalSection";

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      <title>Delma - Produits</title>
      <Header />
      <main>
        <LegalPageSection />
      </main>
      <Footer />
    </div>
  );
}
