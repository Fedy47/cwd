import React from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatbotPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Chatbot IA pour vos questions religieuses</h2>
          <p className="text-lg text-gray-600">
            Notre chatbot intelligent répond à vos questions sur l'islam avec précision, citations du Coran et références aux hadiths.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold">Obtenez des réponses <span className="text-islamic-emerald">fiables</span> et <span className="text-islamic-emerald">documentées</span></h3>
            <p className="text-gray-600">
              Notre chatbot utilise l'intelligence artificielle pour fournir des réponses précises et documentées à vos questions religieuses, en s'appuyant sur des sources fiables et reconnues.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <div className="h-6 w-6 rounded-full bg-islamic-emerald/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <MessageSquare size={14} className="text-islamic-emerald" />
                </div>
                <span>Posez vos questions en langage naturel, comme à un professeur</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="h-6 w-6 rounded-full bg-islamic-emerald/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <MessageSquare size={14} className="text-islamic-emerald" />
                </div>
                <span>Recevez des réponses avec citations du Coran et des hadiths</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="h-6 w-6 rounded-full bg-islamic-emerald/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <MessageSquare size={14} className="text-islamic-emerald" />
                </div>
                <span>Explorez des explications détaillées adaptées à votre niveau de connaissance</span>
              </li>
            </ul>
            <Button className="bg-islamic-emerald hover:bg-islamic-emerald/90">
              Essayer le chatbot
            </Button>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg border overflow-hidden max-w-md mx-auto">
              <div className="bg-islamic-navy p-4 text-white flex items-center gap-2">
                <MessageSquare size={18} />
                <span className="font-medium">Chatbot MuslimVerse</span>
              </div>
              <div className="h-72 overflow-y-auto p-4 bg-gray-50">
                <div className="flex flex-col gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%] self-end">
                    <p className="text-gray-800">Quelles sont les cinq piliers de l'Islam ?</p>
                  </div>
                  <div className="bg-islamic-emerald/10 p-3 rounded-lg max-w-[80%]">
                    <p className="text-gray-800">Les cinq piliers de l'Islam sont :</p>
                    <ol className="list-decimal pl-5 mt-2 space-y-1">
                      <li>La profession de foi (Shahada)</li>
                      <li>La prière (Salat)</li>
                      <li>L'aumône (Zakat)</li>
                      <li>Le jeûne du Ramadan (Sawm)</li>
                      <li>Le pèlerinage à La Mecque (Hajj)</li>
                    </ol>
                    <p className="text-xs text-gray-500 mt-2">Source : Hadith rapporté par Al-Bukhari et Muslim</p>
                  </div>
                </div>
              </div>
              <div className="p-3 border-t">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Posez votre question..." 
                    className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-islamic-emerald"
                  />
                  <Button size="sm" className="bg-islamic-emerald hover:bg-islamic-emerald/90">
                    <Send size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotPreview;
