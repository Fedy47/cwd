import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center max-w-md px-4">
          <div className="islamic-gradient inline-block text-white text-5xl font-bold w-24 h-24 rounded-full flex items-center justify-center mb-6">
            404
          </div>
          <h1 className="text-3xl font-bold mb-4">Page non trouvée</h1>
          <p className="text-gray-600 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button asChild className="bg-islamic-emerald hover:bg-islamic-emerald/90">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
