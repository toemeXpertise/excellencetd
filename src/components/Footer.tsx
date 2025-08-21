import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { DelmaEmail, DelmaPhoneNumber } from "@/constants/delmaInfos";
import { MapPin, Phone, Mail, Smartphone, CreditCard, DollarSign, ArrowRight, type LucideIcon } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

import { DelmaFaceBookLink, DelmaInstagramLink, DelmaTwitterLink, DelmaLinkedInLink } from "@/constants/delmaInfos";

export default function Footer() {
  const [email, setEmail] = React.useState<string>("");

  const handleCall = () => {
    if (DelmaPhoneNumber) {
      window.open(`tel:${DelmaPhoneNumber}`);
    } else {
      toast.info("Aucun numéro de téléphone disponible");
    }
  };

  const quickLinks: { name: string; href: string }[] = [
    { name: "Accueil", href: "/" },
    { name: "Produits", href: "/product" },
    { name: "Services", href: "/service" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services: { name: string; icon: LucideIcon }[] = [
    { name: "Smartphones", icon: Smartphone },
    { name: "Orange Money", icon: CreditCard },
    { name: "Transfert d'argent", icon: DollarSign },
    { name: "Support technique", icon: Phone },
  ];

  const socialLinks: { name: string; icon: React.ElementType; href: string }[] = [
    { name: "Facebook", icon: FaFacebook, href: DelmaFaceBookLink },
    { name: "Instagram", icon: FaInstagram, href: DelmaInstagramLink },
    { name: "Twitter", icon: FaTwitter, href: DelmaTwitterLink },
    { name: "LinkedIn", icon: FaLinkedin, href: DelmaLinkedInLink },
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Newsletter Section */}
      <div className="bg-yellow-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Restez connecté avec Excellence Tech Depot</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Recevez nos dernières offres, nouveaux produits et conseils technologiques directement dans votre boîte
              mail
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
                toast.success("Merci pour votre abonnement !");
              }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Votre adresse email"
                  className="bg-gray-700 border-white/20 text-white placeholder:text-white/70"
                />
                <Button type="submit" variant="hero" className="bg-white px-6 text-accent hover:bg-white/90">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  S'abonner
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-teal-600 p-2 rounded-lg">
                <span className="text-white font-bold text-xl">ETD</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">EXCELLENCE</span>
                <span className="text-accent text-sm font-semibold">TECH DEPOT</span>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Votre partenaire de confiance pour l'achat d'appareils électroniques et les services financiers au Burkina
              Faso.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Ouagadougou, Burkina Faso</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span>{DelmaPhoneNumber}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span>{DelmaEmail}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Informations légales</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="/legal" className="hover:text-accent transition-colors">
                    Conditions générales
                  </a>
                </li>
                <li>
                  <a href="/legal" className="hover:text-accent transition-colors">
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a href="/legal" className="hover:text-accent transition-colors">
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <li key={index} className="flex items-center gap-3">
                    <IconComponent className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-white/80 text-sm">{service.name}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Horaires d'ouverture</h4>
              <div className="space-y-2 text-sm text-white/80">
                <div className="flex justify-between">
                  <span>Lun - Sam</span>
                  <span>8h00 - 19h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>10h00 - 17h00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Suivez-nous</h4>
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Contact Urgent</h5>
              <p className="text-sm text-white/80 mb-3">Service client disponible 24/7 pour vos urgences</p>
              <Button onClick={handleCall} variant="accent" size="sm" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Urgence 24/7
              </Button>
            </div>

            <div className="mt-6 bg-gradient-primary/20 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Orange Money</h5>
              <p className="text-sm text-white/80">Paiements sécurisés et transferts d'argent disponibles</p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} Excellence Tech Depot. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <span>Site web: www.excellencetd.com</span>
            <span>•</span>
            <span>Développé avec ❤️ au Burkina Faso</span>
          </div>
        </div>
      </div>
      <ScrollToTop smooth style={{ borderRadius: "50%" }} />
    </footer>
  );
}
