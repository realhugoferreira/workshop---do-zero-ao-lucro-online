import React from 'react';
import { MODULES, IconProps } from '../constants';

interface ModuleCardProps {
    icon: React.FC<IconProps>;
    title: string;
    description: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ icon: Icon, title, description }) => (
    <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20">
        <div className="mb-4 inline-block p-3 bg-blue-900/50 text-blue-400 rounded-lg">
            <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm sm:text-base">{description}</p>
    </div>
);

const Modules: React.FC = () => {
    return (
        <section id="modulos" className="py-12 md:py-24 bg-[#070914]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Um Ecossistema Completo Para o Teu Sucesso</h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-400">
                        Vais ter acesso a um conjunto de estratégias e modelos de negócio que podes começar a aplicar hoje mesmo, com baixo ou nenhum investimento.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MODULES.map((module, index) => (
                        <ModuleCard key={index} icon={module.icon} title={module.title} description={module.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Modules;