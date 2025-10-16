import React from 'react';

const CheckIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);


const Pricing: React.FC = () => {
    return (
        <section id="preco" className="py-12 md:py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto bg-gradient-to-b from-gray-900 to-[#050711] border border-blue-800/50 rounded-2xl shadow-2xl shadow-blue-900/40 p-6 sm:p-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Acesso Completo e Imediato</h2>
                    <p className="text-gray-400 mb-6 text-sm sm:text-base">Um único investimento para transformar a tua vida. Sem mensalidades, sem custos escondidos.</p>
                    
                    <div className="my-8">
                        <span className="text-4xl sm:text-5xl font-bold text-white">97€</span>
                        <span className="text-gray-400 ml-1 text-sm sm:text-base">Pagamento Único</span>
                    </div>

                    <div className="text-gray-300 my-6 text-sm sm:text-base">
                        <p>Ou divide em <strong>3x sem juros</strong> com Klarna</p>
                        <img src="https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg" alt="Klarna" className="h-5 sm:h-6 mx-auto mt-2"/>
                    </div>
                    
                    <a href="https://buy.stripe.com/14AaEX7LXe2zghA9MN5sA07" target="_blank" rel="noopener noreferrer" className="group mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-500/40 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500/60 hover:brightness-110">
                        <span>QUERO ACESSO IMEDIATO</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                    
                    <ul className="text-left mt-10 space-y-3 text-gray-300 text-sm sm:text-base">
                        <li className="flex items-center"><CheckIcon className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" /> Acesso vitalício a todos os módulos</li>
                        <li className="flex items-center"><CheckIcon className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" /> Todos os bónus incluídos</li>
                        <li className="flex items-center"><CheckIcon className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" /> Acompanhamento via WhatsApp</li>
                        <li className="flex items-center"><CheckIcon className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" /> Atualizações futuras gratuitas</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Pricing;