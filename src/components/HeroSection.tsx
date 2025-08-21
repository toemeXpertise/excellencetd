import { ArrowRight, Star, Users, ShoppingBag, Smartphone, CreditCard, Zap, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FloatingCard {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
  borderColor: string;
  position: string;
  delay: number;
}

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const images = [
    "bg-[url('assets/money_transfert.jpg')]",
    "bg-[url('assets/sell_phone.jpg')]",
    "bg-[url('assets/orange_money.png')]",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const stats: { icon: LucideIcon; number: string; text: string; color: string }[] = [
    { icon: Users, number: "1200+", text: "Clients satisfaits", color: "from-teal-400 to-teal-600" },
    { icon: ShoppingBag, number: "10k+", text: "Produits vendus", color: "from-blue-400 to-blue-600" },
    { icon: Star, number: "4.9/5", text: "Note clients", color: "from-orange-400 to-orange-600" },
  ];

  const floatingCards: FloatingCard[] = [
    {
      icon: CreditCard,
      title: "Orange Money",
      subtitle: "Paiement sécurisé",
      color: "from-teal-500 to-emerald-500",
      borderColor: "border-teal-500",
      position: "-top-6 -left-8",
      delay: 0,
    },
    {
      icon: Zap,
      title: "Transfert d'argent",
      subtitle: "Rapide en 1 minute",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500",
      position: "-top-8 -right-6",
      delay: 1,
    },
    {
      icon: Smartphone,
      title: "Vente d'Appareils",
      subtitle: "Tout au meilleur prix",
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500",
      position: "-bottom-6 -right-8",
      delay: 2,
    },
  ];

  return (
    <section className="relative min-h-[85vh] flex flex-col overflow-hidden bg-gradient-to-br from-slate-100 via-white to-teal-100">
      {/* Subtle background */}
      <div className="absolute inset-0">
        {/* Static gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/15 to-blue-400/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-pink-400/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Top Section */}
      <div className="w-full relative z-10">
        <div className="container mx-auto px-6 py-6 ">
          <div className="flex items-center justify-between">
            <div className="hidden lg:inline-flex items-center px-4 py-2 bg-primary/10 text-primary backdrop-blur-sm border border-teal-200 rounded-full shadow-sm">
              <Star className="w-4 h-4 text-teal-500 mr-2 fill-current" />
              <span className="text-sm font-semibold text-teal-800">Excellence garantie depuis 2024</span>
            </div>

            {/* Floating Cards */}
            <div className="flex flex-col sm:flex-col md:flex-row gap-4 w-full lg:w-auto justify-between lg:justify-end">
              {floatingCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div key={index} className="group cursor-pointer">
                    <div
                      className={`bg-white/90 backdrop-blur-sm border-t-4 ${card.borderColor} rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform duration-300`}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-gray-900">{card.title}</div>
                          <div className="text-xs text-gray-500 font-medium">{card.subtitle}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-6 pb-12 pt-3 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Heading */}
              <div className="space-y-4">
                <h1 className="hidden lg:block text-4xl  font-bold leading-tight tracking-tight">
                  ETD, votre partenaire
                  <span className="block mb-2 bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                    <span>technologique</span>
                    <span className="text-gray-700 font-medium ml-4">de confiance</span>
                  </span>
                </h1>
                <h1 className="lg:hidden text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                  <span className="block bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                    Excellence Tech Depot, Votre partenaire technologique de confiance
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed  font-medium">
                  Excellence Tech Depot offre les derniers smartphones, tablettes et services financiers avec Orange
                  Money. L'innovation à portée de main.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/product")}
                  className="group relative bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
                  <div className="relative flex items-center justify-center">
                    Découvrir nos produits
                    <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </button>

                <button
                  onClick={() => navigate("/service")}
                  className="border-2 border-teal-500 hover:border-blue-500 text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  Nos services financiers
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-white/20"
                    >
                      <div
                        className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl mb-3 mx-auto shadow-sm`}
                      >
                        <Icon className={`w-7 h-7 text-white ${stat.icon === Star ? "fill-current" : ""}`} />
                      </div>
                      <div className="xs:text-2xl md:text-4xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative lg:block hidden">
              {/* Main visual container */}
              <div className="relative w-full h-[500px]">
                {/* Central device mockup avec animation d'images */}
                <div className="w-full h-full rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Images avec animation */}
                  {images.map((imageClass, index) => (
                    <motion.div
                      key={index}
                      className={`absolute inset-0 ${imageClass} bg-cover bg-center bg-no-repeat`}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{
                        opacity: currentImageIndex === index ? 1 : 0,
                        scale: currentImageIndex === index ? 1 : 1.1,
                      }}
                      transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}

                  {/* Overlay sombre pour améliorer la lisibilité */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40" />

                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5" />

                  {/* Central logo area */}
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center mb-4 mx-auto">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                        <span className="text-xl font-bold text-transparent bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text">
                          ETD
                        </span>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-white mb-2 drop-shadow-lg">Excellence Tech Depot</div>
                    <div className="text-sm text-white/90 drop-shadow-md">Innovation • Confiance • Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </section>
  );
}
