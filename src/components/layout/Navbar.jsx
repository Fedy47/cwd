import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 islamic-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-heading font-bold text-xl">M</span>
          </div>
          <span className="font-heading font-semibold text-xl">Muslim<span className="text-islamic-emerald">Verse</span></span>
        </Link>
        
        {/* Mobile menu button */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-foreground/80 hover:text-islamic-emerald font-medium transition-colors">Accueil</Link>
          <Link to="/features" className="text-foreground/80 hover:text-islamic-emerald font-medium transition-colors">Fonctionnalités</Link>
          <Link to="/pricing" className="text-foreground/80 hover:text-islamic-emerald font-medium transition-colors">Tarifs</Link>
          <Link to="/about" className="text-foreground/80 hover:text-islamic-emerald font-medium transition-colors">À propos</Link>
          <Link to="/contact" className="text-foreground/80 hover:text-islamic-emerald font-medium transition-colors">Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="outline">Se connecter</Button>
          <Button className="bg-islamic-emerald hover:bg-islamic-emerald/90">S'inscrire</Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t absolute w-full left-0 right-0 shadow-lg animate-fade-in">
          <nav className="container-custom py-6 flex flex-col gap-4">
            <Link to="/" className="text-foreground/80 hover:text-islamic-emerald font-medium transition-colors py-2" onClick={toggleMenu}>Accueil</Link>
            <Link to="/features" className="text-foreground/80 hover:text-islamic-emerald font-medium transition-colors py-2" onClick={toggleMenu}>Fonctionnalités</Link>
            <Link to="/pricing" className="text-foreground/80 hover:text-islamic-emerald font-medium transition-colors py-2" onClick={toggleMenu}>Tarifs</Link>
            <Link to="/about" className="text-foreground/80 hover:text-islamic-emerald font-medium transition-colors py-2" onClick={toggleMenu}>À propos</Link>
            <Link to="/contact" className="text-foreground/80 hover:text-islamic-emerald font-medium transition-colors py-2" onClick={toggleMenu}>Contact</Link>
            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline" onClick={toggleMenu}>Se connecter</Button>
              <Button className="bg-islamic-emerald hover:bg-islamic-emerald/90" onClick={toggleMenu}>S'inscrire</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
