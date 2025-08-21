import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aminata Traoré",
      role: "Commerçante",
      rating: 5,
      comment: "Excellent service ! J'ai acheté mon iPhone 15 chez ETD et je suis ravie. L'équipe est très professionnelle et les prix sont compétitifs. Je recommande vivement !",
      avatar: "AT"
    },
    {
      id: 2,
      name: "Kouassi Jean",
      role: "Entrepreneur",
      rating: 5,
      comment: "Le service Orange Money d'ETD m'a énormément facilité la vie. Les transferts sont rapides et sécurisés. Un grand merci à toute l'équipe !",
      avatar: "KJ"
    },
    {
      id: 3,
      name: "Mariam Coulibaly",
      role: "Étudiante",
      rating: 5,
      comment: "J'ai trouvé la tablette parfaite pour mes études chez Excellence Tech Depot. Le rapport qualité-prix est imbattable et le service après-vente est top !",
      avatar: "MC"
    },
    {
      id: 4,
      name: "Ibrahim Diabaté",
      role: "Ingénieur",
      rating: 5,
      comment: "ETD propose les dernières innovations technologiques. J'y achète tous mes appareils depuis 3 ans et je n'ai jamais été déçu. Très professionnel !",
      avatar: "ID"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 bg-orange-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ce que disent nos <span className="hero-text">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits qui nous font confiance pour leurs besoins
            technologiques
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover group">
              <CardContent className="p-6">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-teal-800 mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground font-semibold">Note moyenne</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-teal-800 mb-2">500+</div>
            <div className="text-sm text-muted-foreground font-semibold">Avis clients</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-teal-800 mb-2">98%</div>
            <div className="text-sm text-muted-foreground font-semibold">Satisfaction</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-teal-800 mb-2">24h</div>
            <div className="text-sm text-muted-foreground font-semibold">Réponse support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;