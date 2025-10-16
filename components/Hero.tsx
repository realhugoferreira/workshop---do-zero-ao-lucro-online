import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-800/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 bg-blue-700/50 rounded-full blur-3xl animate-pulse"></div>
        </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-blue-500/10 border border-blue-500/30 text-blue-300 px-4 py-1.5 rounded-full inline-block text-sm font-semibold mb-6">
          NOVO WORKSHOP • ACESSO IMEDIATO
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-6 leading-tight">
          Cria o Teu Próprio Negócio Online, Passo a Passo
        </h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 mb-10">
          Descobre os métodos comprovados para criares o teu negócio online do zero, mesmo que não tenhas experiência ou não queiras aparecer.
        </p>
        <a href="https://buy.stripe.com/14AaEX7LXe2zghA9MN5sA07" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-lg shadow-blue-500/40 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500/60 hover:brightness-110">
          <span>Quero Começar Agora!</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <p className="mt-4 text-gray-400 text-sm">Pagamento único • Acesso vitalício</p>
      </div>
    </section>
  );
};

export default Hero;