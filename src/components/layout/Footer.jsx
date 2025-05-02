import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 islamic-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">M</span>
              </div>
              <span className="font-heading font-semibold text-xl">Muslim<span className="text-islamic-emerald">Verse</span></span>
            </div>
            <p className="text-gray-600 mb-4">
              Une plateforme SaaS complète pour les écoles islamiques, avec des ressources religieuses numérisées et un chatbot intelligent.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Plateforme</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-gray-600 hover:text-islamic-emerald transition-colors">Fonctionnalités</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-islamic-emerald transition-colors">Tarifs</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-islamic-emerald transition-colors">À propos</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Ressources</h3>
            <ul className="space-y-3">
              <li><Link to="/schools" className="text-gray-600 hover:text-islamic-emerald transition-colors">Écoles</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-islamic-emerald transition-colors">Ressources</Link></li>
              <li><Link to="/chatbot" className="text-gray-600 hover:text-islamic-emerald transition-colors">Chatbot</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-600 hover:text-islamic-emerald transition-colors">Nous contacter</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-islamic-emerald transition-colors">Support</Link></li>
              <li><a href="mailto:info@muslimverse.com" className="text-gray-600 hover:text-islamic-emerald transition-colors">info@muslimverse.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">&copy; {new Date().getFullYear()} MuslimVerse. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-gray-600 hover:text-islamic-emerald transition-colors">Conditions d'utilisation</Link>
            <Link to="/privacy" className="text-gray-600 hover:text-islamic-emerald transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
