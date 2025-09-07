import { Phone, Mail, MapPin, Clock, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";

import { DelmaEmail, DelmaPhoneNumber } from "@/constants/delmaInfos";
import React from "react";

type ContactInfoItem = {
  icon: LucideIcon;
  title: string;
  details: string[];
  color: string;
  onClick: () => void;
};

export default function ContactSection() {
  const [message, setMessage] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [telephone, setTelephone] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");

  const handleWhatsapp = () => {
    if (DelmaPhoneNumber) {
      window.open(`https://wa.me/${DelmaPhoneNumber.replace(/\s/g, "")}`);
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

  const contactInfo: ContactInfoItem[] = [
    {
      icon: Phone,
      title: "Téléphone",
      details: [DelmaPhoneNumber, "Appels et WhatsApp"],
      color: "text-primary",
      onClick: handleWhatsapp,
    },
    {
      icon: Mail,
      title: "Email",
      details: [DelmaEmail, "Réponse sous 24h"],
      color: "text-secondary",
      onClick: handleEmail,
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Ouagadougou, Burkina Faso", "Nous communiquerons l'adresse"],
      color: "text-accent",
      onClick: () => {},
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun - Sam: 8h - 18h", "Dim: 10h - 16h"],
      color: "text-navy",
      onClick: () => {},
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-teal-800 mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes là pour vous accompagner. N'hésitez pas à nous contacter pour toute question ou demande
            d'information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-teal-800 mb-6">Nos coordonnées</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    onClick={info.onClick}
                    key={index}
                    className="hover:shadow-elegant transition-shadow cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className={`${info.color} mb-4 flex items-center`}>
                        <info.icon className="h-8 w-8 mr-4" />
                        <h4 className="font-bold text-teal-800 mb-2">{info.title}</h4>
                      </div>

                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className={`text-gray-600 ${detailIndex === 0 ? "font-medium" : "text-sm"}`}
                        >
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-teal-800 text-white">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4">Pourquoi Excellence Tech Depot ?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Produits authentiques garantis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Service client réactif
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Livraison rapide sur Ouaga
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Services financiers sécurisés
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-teal-800">Envoyez-nous un message</CardTitle>
            </CardHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
                setTelephone("");
                setSubject("");
                setMessage("");
                setName("");
                toast.success("Merci pour votre message, nous vous contacterons sous peu.");
              }}
            >
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                    <Input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      value={name}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <Input
                      onChange={(e) => setTelephone(e.target.value)}
                      type="tel"
                      value={telephone}
                      placeholder={"+226 XX XX XX XX"}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    type="email"
                    placeholder="votreInfo@gmail.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sujet *</label>
                  <Input
                    onChange={(e) => setSubject(e.target.value)}
                    type="text"
                    value={subject}
                    required
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                    placeholder="Décrivez votre demande en détail..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full bg-teal-900 hover:bg-primary/90 text-lg py-3">
                  Envoyer le message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Champs obligatoires. Nous vous répondrons dans les plus brefs délais.
                </p>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
