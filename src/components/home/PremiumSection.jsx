import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const premiumFeatures = [
  "Accès à des livres exclusifs",
  "Anashid et chansons premium",
  "Emplacements de monuments islamiques",
  "Échanges avec des spécialistes religieux",
  "Support prioritaire 24/7",
  "Espaces de stockage supplémentaires",
  "Téléchargements illimités",
  "Accès anticipé aux nouvelles fonctionnalités"
];

const PremiumSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="p-1 islamic-gradient rounded-2xl">
              <div className="bg-white rounded-xl p-6 md:p-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 islamic-gradient text-white text-sm font-semibold py-1 px-4 rounded-bl-lg">
                  Premium
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Expérience Premium</h3>
                <p className="text-gray-600 mb-8">
                  Débloquez l'accès à du contenu exclusif et des fonctionnalités avancées pour enrichir votre parcours spirituel et éducatif.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {premiumFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-islamic-emerald/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <Check size={12} className="text-islamic-emerald" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-islamic-emerald hover:bg-islamic-emerald/90">
                    Découvrir l'offre Premium
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Accès exclusif au <span className="text-islamic-emerald">contenu premium</span></h2>
            <p className="text-lg text-gray-600">
              Notre abonnement premium vous donne accès à une collection soigneusement sélectionnée de ressources éducatives, spirituelles et culturelles exclusives.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-islamic-emerald/20 flex-shrink-0 flex items-center justify-center">
                  <span className="font-semibold text-islamic-emerald">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Bibliothèque exclusive</h4>
                  <p className="text-gray-600">Accédez à des centaines de livres rares et précieux sur l'islam et son histoire.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-islamic-emerald/20 flex-shrink-0 flex items-center justify-center">
                  <span className="font-semibold text-islamic-emerald">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Consultations expertes</h4>
                  <p className="text-gray-600">Échangez directement avec des spécialistes et érudits sur des questions spécifiques.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-islamic-emerald/20 flex-shrink-0 flex items-center justify-center">
                  <span className="font-semibold text-islamic-emerald">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Découvertes culturelles</h4>
                  <p className="text-gray-600">Explorez les monuments islamiques du monde entier avec des guides virtuels détaillés.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
