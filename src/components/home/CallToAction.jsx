import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="rounded-3xl overflow-hidden islamic-pattern">
          <div className="bg-islamic-navy/90 py-16 px-8 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à rejoindre la communauté MuslimVerse?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
              Commencez dès aujourd'hui et découvrez comment notre plateforme peut enrichir votre parcours éducatif et spirituel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-islamic-emerald hover:bg-islamic-emerald/90 py-6 px-8 text-white text-lg">
                Commencer gratuitement
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 py-6 px-8 text-lg">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
