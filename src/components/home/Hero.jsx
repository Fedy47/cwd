import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-16 pb-20 md:pt-20 md:pb-24 islamic-pattern">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              La plateforme <span className="text-islamic-emerald">complète</span> pour 
              les <span className="islamic-gradient bg-clip-text text-transparent">écoles islamiques</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Gérez vos élèves, vos cours, accédez à des ressources religieuses numérisées et bénéficiez d'un chatbot intelligent pour répondre à toutes vos questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-islamic-emerald hover:bg-islamic-emerald/90 text-white py-6 px-8 text-lg">
                Commencer gratuitement
              </Button>
              <Button variant="outline" className="py-6 px-8 text-lg">
                Voir la démo
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Aucune carte de crédit requise. Essai gratuit de 14 jours.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 islamic-gradient rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border">
                <div className="bg-islamic-navy p-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-60">
                    <div className="text-center">
                      <div className="h-20 w-20 islamic-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-heading font-bold text-2xl">M</span>
                      </div>
                      <p className="text-lg font-medium">Tableau de bord MuslimVerse</p>
                      <p className="text-sm text-gray-500">Interface intuitive et complète</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
