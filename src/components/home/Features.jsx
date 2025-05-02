import React from 'react';
import { Book, MessageSquare, School, Users, FileText, Settings } from 'lucide-react';

const featuresList = [
  {
    icon: School,
    title: "Gestion des écoles",
    description: "Administration complète des écoles islamiques avec gestion des élèves, des cours et des examens."
  },
  {
    icon: Book,
    title: "Ressources numérisées",
    description: "Accédez au Coran et aux hadiths numérisés via nos technologies OCR et scraping avancées."
  },
  {
    icon: MessageSquare,
    title: "Chatbot intelligent",
    description: "Posez vos questions religieuses à notre chatbot IA qui répond avec précision et références."
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Partagez et consultez des prières, anashid, poèmes dans un espace social sécurisé."
  },
  {
    icon: FileText,
    title: "Contenu islamique",
    description: "Découvrez du contenu sélectionné depuis YouTube, TikTok et Facebook sur des sujets islamiques."
  },
  {
    icon: Settings,
    title: "Personnalisation",
    description: "Adaptez la plateforme à vos besoins spécifiques avec nos options de personnalisation."
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Fonctionnalités principales</h2>
          <p className="text-lg text-gray-600">
            Notre plateforme offre une gamme complète d'outils et de ressources pour enrichir votre expérience islamique numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg islamic-gradient flex items-center justify-center mb-5">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
