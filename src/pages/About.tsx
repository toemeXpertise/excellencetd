import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LegalPageSection from "@/components/LegalSection";

export default function About() {
  return (
    <div className="min-h-screen">
      <title>Delma - A propos</title>
      <Header />
      <main>
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
        <LegalPageSection />
      </main>
      <Footer />
    </div>
  );
}
