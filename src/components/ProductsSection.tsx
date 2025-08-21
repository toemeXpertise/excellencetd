import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import iphone15 from "@/assets/iphone-15.jpg";
import samsungS24 from "@/assets/s24_ultra.png";
import ipadPro from "@/assets/ipad_pro.jpg";
import { DelmaPhoneNumber } from "@/constants/delmaInfos";
import { toast } from "react-toastify";

const ProductsSection = () => {
    const handleCall = () => {
      if (DelmaPhoneNumber) {
        window.open(`tel:${DelmaPhoneNumber}`);
      } else {
        toast.info("Aucun numéro de téléphone disponible");
      }
  };
  
  const featuredProducts: { id: number; name: string; price: string; originalPrice: string | null; image: string; rating: number; badge: string; badgeColor: string; features: string[] }[] = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "1,200,000",
      originalPrice: "1,350,000",
      image: iphone15,
      rating: 4.9,
      badge: "Nouveau",
      badgeColor: "primary",
      features: ["128GB", "Titanium", "Pro Camera", "USB-C"]
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: "1,100,000",
      originalPrice: null,
      image: samsungS24,
      rating: 4.8,
      badge: "Populaire",
      badgeColor: "accent",
      features: ["256GB", "S Pen", "AI Camera", "5G"]
    },
    {
      id: 3,
      name: "iPad Pro 11''",
      price: "950,000",
      originalPrice: "1,050,000",
      image: ipadPro,
      rating: 4.9,
      badge: "Promo",
      badgeColor: "destructive",
      features: ["128GB", "M2 Chip", "ProRes", "Magic Keyboard"]
    }
  ];

  const categories: { name: string; count: string; icon: string }[] = [
    {
      name: "Smartphones",
      count: "50+ modèles",
      icon: "📱"
    },
    {
      name: "Tablettes",
      count: "25+ modèles",
      icon: "📱"
    },
    {
      name: "Accessoires",
      count: "100+ produits",
      icon: "🎧"
    },
    {
      name: "Montres Connectées",
      count: "15+ modèles",
      icon: "⌚"
    }
  ];

  return (
    <section id="products" className="py-20 border-t-2 border-gray-200 bg-orange-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="hero-text">Produits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre sélection d'appareils électroniques de dernière génération aux meilleurs prix
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center hover:bg-white/80 transition-colors cursor-pointer">
              <div className="text-2xl mb-2">{category.icon}</div>
              <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
              <p className="text-xs text-muted-foreground">{category.count}</p>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Produits Phares</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group card-hover overflow-hidden">
                <CardHeader className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge 
                      variant={product.badgeColor === 'primary' ? 'default' : product.badgeColor === 'accent' ? 'secondary' : 'destructive'}
                      className="absolute top-4 left-4"
                    >
                      {product.badge}
                    </Badge>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white transition-colors"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">(120+ avis)</span>
                  </div>
                  
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-teal-700">{product.price}</span>
                      <span className="text-sm text-muted-foreground">FCFA</span>
                    </div>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice} FCFA
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleCall} variant="default" className="flex-1 bg-blue-800">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Acheter
                    </Button>
                    <Button variant="default" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-teal-600 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Plus de 200 produits disponibles
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Smartphones, tablettes, accessoires, montres connectées... Trouvez l'appareil qui vous correspond au meilleur prix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Voir tous les produits
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;