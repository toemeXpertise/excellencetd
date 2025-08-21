import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Shield, Award, Clock, ThumbsUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: "1200+",
      label: "Clients satisfaits",
      color: "primary"
    },
    {
      icon: Trophy,
      number: "2+",
      label: "Années d'expérience",
      color: "accent"
    },
    {
      icon: Award,
      number: "50+",
      label: "Marques partenaires",
      color: "secondary"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support disponible",
      color: "primary"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Produits authentiques avec garantie officielle"
    },
    {
      icon: ThumbsUp,
      title: "Qualité",
      description: "Sélection rigoureuse des meilleurs appareils"
    },
    {
      icon: Users,
      title: "Service Client",
      description: "Accompagnement personnalisé à chaque étape"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À <span className="hero-text">Propos</span> de Nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Excellence Tech Depot, votre partenaire de confiance depuis plus de 2 ans dans la vente d'appareils électroniques et les services financiers
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Notre Histoire</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Fondée avec la vision de démocratiser l'accès aux technologies modernes, Excellence Tech Depot s'est rapidement imposée comme une référence dans la vente d'appareils électroniques au Burkina Faso.
              </p>
              <p>
                Nous avons débuté avec une simple boutique et une conviction : offrir des produits de qualité à des prix accessibles. Aujourd'hui, nous sommes fiers d'avoir élargi notre offre aux services financiers avec Orange Money et les transferts d'argent.
              </p>
              <p>
                Notre engagement reste inchangé : accompagner nos clients dans leur transformation digitale en leur proposant les meilleures solutions technologiques et financières.
              </p>
            </div>
            <Button variant="cta" size="lg" className="mt-6 bg-teal-800">
              Découvrir notre équipe
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Notre Mission</h4>
              <p className="text-lg leading-relaxed">
                "Rendre la technologie accessible à tous en proposant des produits innovants, des services financiers sécurisés et un accompagnement personnalisé."
              </p>
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <p className="text-sm">
                  <strong>Vision 2025 :</strong> Devenir le leader incontournable des services technologiques et financiers en Afrique de l'Ouest.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center p-6 card-hover">
                <CardContent className="p-0">
                  <div className={`mx-auto w-12 h-12 rounded-full bg-gradient-${stat.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">Nos Valeurs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Certifications & Partenaires</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="bg-muted rounded-lg p-4 text-center min-w-[120px]">
              <div className="font-bold text-lg">ORANGE</div>
              <div className="text-xs">Partenaire Officiel</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center min-w-[120px]">
              <div className="font-bold text-lg">APPLE</div>
              <div className="text-xs">Revendeur Agréé</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center min-w-[120px]">
              <div className="font-bold text-lg">SAMSUNG</div>
              <div className="text-xs">Distributeur</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center min-w-[120px]">
              <div className="font-bold text-lg">XIAOMI</div>
              <div className="text-xs">Partenaire</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;