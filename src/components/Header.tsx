import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

import { DelmaEmail, DelmaPhoneNumber } from "@/constants/delmaInfos";
import logoImage from "@/assets/logo.png";

const linkBase = "text-foreground hover:text-primary transition-colors font-medium";
const activeLink = "text-teal-600";
const mobileBase = "block py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors";
const mobileActive = "text-teal-700 bg-muted";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((p) => !p);
  const closeMenu = () => setIsMenuOpen(false);

  const desktopClass = ({ isActive }: { isActive: boolean }) => `${linkBase} ${isActive ? activeLink : ""}`;

  const mobileClass = ({ isActive }: { isActive: boolean }) => `${mobileBase} ${isActive ? mobileActive : ""}`;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>{DelmaPhoneNumber}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>{DelmaEmail}</span>
            </div>
          </div>
          <div className="text-muted-foreground">Votre partenaire technologique de confiance au Burkina</div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-2">
          {/* Logo */}
          <div onClick={() => navigate("/")} className="flex items-center space-x-3 cursor-pointer">
            <img src={logoImage} alt="ETD Logo" className="h-10 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-teal-800">EXCELLENCE</span>
              <span className="text-sm font-semibold">
                <span className="text-yellow-600">TECH</span>
                <span className="ml-1 text-teal-800">DEPOT</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* end => actif uniquement sur "/" exact */}
            <NavLink to="/" end className={desktopClass}>
              Accueil
            </NavLink>
            <NavLink to="/product" className={desktopClass}>
              Produits
            </NavLink>
            <NavLink to="/service" className={desktopClass}>
              Services
            </NavLink>
            <NavLink to="/about" className={desktopClass}>
              À propos
            </NavLink>
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => navigate("/contact")}
              variant="default"
              size="lg"
              className="hidden md:inline-flex bg-teal-700 text-white font-semibold"
            >
              Nous contacter
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md border border-border hover:bg-muted transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="py-4 space-y-4">
              <NavLink to="/" end className={mobileClass} onClick={closeMenu}>
                Accueil
              </NavLink>
              <NavLink to="/product" className={mobileClass} onClick={closeMenu}>
                Produits
              </NavLink>
              <NavLink to="/service" className={mobileClass} onClick={closeMenu}>
                Services
              </NavLink>
              <NavLink to="/about" className={mobileClass} onClick={closeMenu}>
                À propos
              </NavLink>

              <div className="px-4 pt-4">
                <Button
                  onClick={() => {
                    navigate("/contact");
                    closeMenu();
                  }}
                  variant="cta"
                  size="lg"
                  className="w-full bg-teal-800 text-white font-semibold"
                >
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
