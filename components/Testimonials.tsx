import React from 'react';
import { TESTIMONIAL_IMAGES } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testemunhos" className="py-12 md:py-24 bg-[#070914] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Resultados Reais de Pessoas Reais</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Não acredites apenas na nossa palavra. Vê o que os membros que já aplicaram estes métodos têm a dizer.
          </p>
        </div>
        
        <div className="relative">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {TESTIMONIAL_IMAGES.map((src, index) => (
              <div key={index} className="break-inside-avoid">
                <img 
                  src={src} 
                  alt={`Testemunho ${index + 1}`} 
                  className="rounded-lg shadow-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#070914] via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#070914] to-transparent pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;