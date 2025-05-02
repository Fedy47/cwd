import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Youssef Hakim",
    role: "Directeur d'école",
    content: "MuslimVerse a révolutionné notre gestion scolaire et enrichi nos programmes pédagogiques avec des ressources inestimables. Nos élèves adorent le chatbot pour approfondir leurs connaissances.",
    rating: 5
  },
  {
    name: "Amina Kaddour",
    role: "Enseignante",
    content: "L'accès aux ressources numérisées m'a permis de créer des cours plus riches et interactifs. Le support est très réactif et à l'écoute de nos besoins spécifiques.",
    rating: 5
  },
  {
    name: "Ibrahim Benali",
    role: "Utilisateur Premium",
    content: "L'abonnement premium vaut vraiment la peine. Les livres exclusifs et les échanges avec les spécialistes ont considérablement approfondi ma compréhension de notre religion.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce que disent nos utilisateurs</h2>
          <p className="text-lg text-gray-600">
            Découvrez comment MuslimVerse transforme l'expérience d'apprentissage et de pratique islamique pour nos utilisateurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border relative">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-islamic-gold fill-islamic-gold" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-islamic-navy/80 flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

