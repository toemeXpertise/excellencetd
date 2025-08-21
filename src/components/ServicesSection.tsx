import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, CreditCard, DollarSign, ShoppingCart, Headphones, Shield, type LucideIcon } from "lucide-react";
import orangeMoneyImg from "@/assets/orange_money_banier.jpg";
import { DelmaPhoneNumber } from "@/constants/delmaInfos";
import { toast } from "react-toastify";

const ServicesSection = () => {
    const handleCall = () => {
      if (DelmaPhoneNumber) {
        window.open(`tel:${DelmaPhoneNumber}`);
      } else {
        toast.info("Aucun numéro de téléphone disponible");
      }
  };
  
  const services: { icon: LucideIcon; title: string; description: string; features: string[]; color: string }[] = [
    {
      icon: Smartphone,
      title: "Vente d'Appareils",
      description: "Smartphones, tablettes et accessoires de dernière génération",
      features: ["iPhone, Samsung, Xiaomi", "Garantie officielle", "Prix compétitifs", "Stock permanent"],
      color: "primary",
    },
    {
      icon: CreditCard,
      title: "Orange Money",
      description: "Services de paiement mobile sécurisés, rapides et fiables",
      features: ["Transferts instantanés", "Paiements en ligne", "Recharges mobiles", "Factures & services"],
      color: "accent",
    },
    {
      icon: DollarSign,
      title: "Transfert d'Argent",
      description: "Solutions de transfert d'argent fiables et sécurisées",
      features: ["Transferts nationaux", "Transferts internationaux", "Taux préférentiels", "Service 24/7"],
      color: "secondary",
    },
  ];

  const additionalServices: { icon: LucideIcon; title: string; description: string }[] = [
    {
      icon: ShoppingCart,
      title: "Vente en Gros",
      description: "Tarifs préférentiels pour revendeurs et entreprises",
    },
    {
      icon: Headphones,
      title: "Support Technique",
      description: "Assistance et maintenance pour tous vos appareils",
    },
    {
      icon: Shield,
      title: "Garantie & Assurance",
      description: "Service après-vente professionnel et garanties étendues",
    },
  ];

  return (
    <section id="services" className="py-20 bg-tertiary/30 border-t-2 border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="hero-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions complètes en technologie et services financiers pour répondre à tous vos besoins
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="card-hover group relative overflow-hidden border-2 border-gray-100 hover:border-primary/20"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-${service.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <div
                    className={`mx-auto w-16 h-16 rounded-full bg-gradient-${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className={`w-2 h-2 rounded-full bg-${service.color}`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleCall}
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Orange Money Highlight */}
        <div className="bg-teal-700 rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Orange Money</h3>
              <p className="text-white/90 text-lg mb-6">
                Simplifiez vos transactions avec Orange Money. Envoyez, recevez et payez en toute sécurité depuis votre
                mobile.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/20 rounded-full px-4 py-2 text-white text-sm">✓ Transferts instantanés</div>
                <div className="bg-white/20 rounded-full px-4 py-2 text-white text-sm">✓ Paiements sécurisés</div>
                <div className="bg-white/20 rounded-full px-4 py-2 text-white text-sm">✓ Recharges mobiles</div>
              </div>
              <Button variant="hero" size="lg" className="bg-white text-accent hover:bg-white/90">
                Activer Orange Money
              </Button>
            </div>
            <div className="float-animation">
              <img src={orangeMoneyImg} alt="Orange Money Service" className="rounded-lg shadow-elegant w-full" />
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-background border border-border hover:shadow-elegant transition-all duration-300"
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
