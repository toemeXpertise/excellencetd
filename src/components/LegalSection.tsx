import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Lock, Phone, Mail, MapPin, Calendar, User, Building, type LucideIcon } from "lucide-react";
import { DelmaEmail, DelmaPhoneNumber } from "@/constants/delmaInfos";
import { toast } from "react-toastify";

export default function LegalPageSection() {
  const handleCall = () => {
    if (DelmaPhoneNumber) {
      window.open(`tel:${DelmaPhoneNumber}`);
    } else {
      toast.info("Aucun numéro de téléphone disponible");
    }
  };

  const handleEmail = () => {
    if (DelmaEmail) {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${DelmaEmail}`);
    } else {
      toast.info("Aucune adresse email disponible pour ce fournisseur");
    }
  };
    const legalSections: { id: string; icon: LucideIcon; title: string; color: string }[] = [
    {
      id: "conditions",
      icon: FileText,
      title: "Conditions Générales",
      color: "primary",
    },
    {
      id: "confidentialite",
      icon: Lock,
      title: "Politique de Confidentialité",
      color: "accent",
    },
    {
      id: "mentions",
      icon: Shield,
      title: "Mentions Légales",
      color: "secondary",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b-2 border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Informations <span className="hero-text">Légales</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Toutes les informations légales concernant l'utilisation de nos services et la protection de vos données
          </p>

          {/* Navigation Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {legalSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card
                  key={index}
                  className="card-hover cursor-pointer group border-2 border-gray-100 hover:border-primary/20"
                  onClick={() => scrollToSection(section.id)}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`mx-auto w-12 h-12 rounded-full bg-gradient-${section.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Conditions Générales */}
        <section id="conditions" className="mb-16">
          <Card className="border-2 border-primary/20">
            <CardHeader className="bg-teal-500 text-white">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6" />
                <CardTitle className="text-2xl">Conditions Générales d'Utilisation</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  1. Objet et Champ d'Application
                </h3>
                <p className="text-muted-foreground mb-6">
                  Les présentes conditions générales régissent l'utilisation des services proposés par Delma Technology,
                  notamment la vente d'appareils électroniques, les services Orange Money, et les transferts d'argent.
                  L'utilisation de nos services implique l'acceptation pleine et entière de ces conditions.
                </p>

                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  2. Services Proposés
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-tertiary/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Vente d'Appareils</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Smartphones de dernière génération</li>
                      <li>• Tablettes et accessoires</li>
                      <li>• Garantie officielle constructeur</li>
                      <li>• Service après-vente inclus</li>
                    </ul>
                  </div>
                  <div className="bg-tertiary/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Services Financiers</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Orange Money</li>
                      <li>• Transferts d'argent</li>
                      <li>• Recharges mobiles</li>
                      <li>• Paiements de factures</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  3. Conditions de Vente et de Paiement
                </h3>
                <p className="text-muted-foreground mb-4">
                  Tous les prix sont affichés en francs CFA et incluent les taxes applicables. Les paiements peuvent
                  être effectués en espèces, par carte bancaire ou via Orange Money. Les garanties s'appliquent selon
                  les conditions du constructeur.
                </p>

                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  4. Responsabilités et Limitations
                </h3>
                <p className="text-muted-foreground mb-6">
                  Delma Technology s'engage à fournir des services de qualité. Notre responsabilité est limitée au
                  remplacement ou à la réparation des produits défectueux dans le cadre de la garantie. Les services
                  financiers sont régis par les conditions spécifiques d'Orange Money.
                </p>

                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Dernière mise à jour :</strong> Août 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Politique de Confidentialité */}
        <section id="confidentialite" className="mb-16">
          <Card className="border-2 border-accent/20">
            <CardHeader className="bg-gradient-accent text-white">
              <div className="flex items-center gap-3">
                <Lock className="h-6 w-6" />
                <CardTitle className="text-2xl">Politique de Confidentialité</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Protection de Vos Données Personnelles
                </h3>
                <p className="text-muted-foreground mb-6">
                  Chez Delma Technology, nous nous engageons à protéger votre vie privée et vos données personnelles.
                  Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
                </p>

                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Données Collectées
                </h3>
                <div className="bg-tertiary/30 p-6 rounded-lg mb-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Informations Personnelles</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Nom et prénom</li>
                        <li>• Numéro de téléphone</li>
                        <li>• Adresse email</li>
                        <li>• Informations de paiement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Données de Service</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Historique des transactions</li>
                        <li>• Préférences de service</li>
                        <li>• Données de localisation</li>
                        <li>• Journaux d'activité</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Utilisation des Données
                </h3>
                <p className="text-muted-foreground mb-4">
                  Vos données sont utilisées exclusivement pour fournir nos services, traiter vos transactions, vous
                  contacter concernant vos commandes, et améliorer la qualité de nos services. Nous ne vendons jamais
                  vos données personnelles à des tiers.
                </p>

                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Sécurité et Conservation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nous utilisons des mesures de sécurité avancées pour protéger vos données. Les informations sont
                  conservées uniquement le temps nécessaire à la fourniture de nos services et dans le respect des
                  obligations légales.
                </p>

                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Vos Droits
                </h3>
                <div className="bg-accent/10 p-4 rounded-lg mb-6">
                  <p className="text-muted-foreground mb-2">
                    Vous disposez des droits suivants concernant vos données :
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Droit d'accès à vos données</li>
                    <li>• Droit de rectification</li>
                    <li>• Droit de suppression</li>
                    <li>• Droit à la portabilité</li>
                  </ul>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Contact :</strong> Pour toute question concernant vos données personnelles, contactez-nous à
                    l'adresse contact@delma-tech.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mentions Légales */}
        <section id="mentions" className="mb-16">
          <Card className="border-2 border-secondary/20">
            <CardHeader className="bg-gradient-secondary text-white">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6" />
                <CardTitle className="text-2xl">Mentions Légales</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Building className="h-5 w-5 text-secondary" />
                      Informations Légales
                    </h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <User className="h-4 w-4 mt-1 text-secondary" />
                        <div>
                          <p className="font-medium text-foreground">Raison Sociale</p>
                          <p className="text-sm">Delma Technology SARL</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText className="h-4 w-4 mt-1 text-secondary" />
                        <div>
                          <p className="font-medium text-foreground">Forme Juridique</p>
                          <p className="text-sm">Société à Responsabilité Limitée</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="h-4 w-4 mt-1 text-secondary" />
                        <div>
                          <p className="font-medium text-foreground">Capital Social</p>
                          <p className="text-sm">5.000.000 FCFA</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-secondary" />
                      Coordonnées
                    </h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 mt-1 text-secondary" />
                        <div>
                          <p className="font-medium text-foreground">Adresse</p>
                          <p className="text-sm">
                            Quartier Residential
                            <br />
                            Bamako, Mali
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-4 w-4 mt-1 text-secondary" />
                        <div>
                          <p className="font-medium text-foreground">Téléphone</p>
                          <p className="text-sm">{DelmaPhoneNumber || "+223 XX XX XX XX"}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="h-4 w-4 mt-1 text-secondary" />
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <p className="text-sm">contact@delma-tech.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  Hébergement du Site Web
                </h3>
                <div className="bg-tertiary/30 p-4 rounded-lg mb-6">
                  <p className="text-muted-foreground text-sm">
                    Ce site web est hébergé par un prestataire technique certifié, garantissant la sécurité et la
                    disponibilité de nos services en ligne. Les données sont stockées dans des centres de données
                    sécurisés respectant les standards internationaux.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  Propriété Intellectuelle
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tous les contenus de ce site (textes, images, logos, marques) sont la propriété de Delma Technology ou
                  font l'objet d'une autorisation d'utilisation. Toute reproduction non autorisée est interdite.
                </p>

                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  Droit Applicable
                </h3>
                <p className="text-muted-foreground mb-6">
                  Les présentes mentions légales sont régies par le droit malien. En cas de litige, les tribunaux de
                  Bamako seront seuls compétents.
                </p>

                <div className="bg-secondary/10 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Directeur de Publication :</strong> Direction Générale de Delma Technology
                    <br />
                    <strong>Dernière mise à jour :</strong> Août 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Des Questions ?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos conditions
              d'utilisation, notre politique de confidentialité ou nos mentions légales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleCall} variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="h-4 w-4 mr-2" />
                Nous Appeler
              </Button>
              <Button onClick={handleEmail} variant="outline" size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Nous Écrire
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
