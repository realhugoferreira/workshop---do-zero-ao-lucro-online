import React from 'react';
import { BONUSES, IconProps } from '../constants';

interface BonusItemProps {
    icon: React.FC<IconProps>;
    title: string;
    description: string;
}

const BonusItem: React.FC<BonusItemProps> = ({ icon: Icon, title, description }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-2 bg-blue-900/50 text-blue-400 rounded-full">
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <h4 className="font-bold text-lg text-white">{title}</h4>
            <p className="text-gray-400 text-sm sm:text-base">{description}</p>
        </div>
    </div>
);


const Bonuses: React.FC = () => {
    return (
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                     <h2 className="text-3xl sm:text-4xl font-extrabold text-white">E Ainda Recebes Estes Bónus Exclusivos</h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-400">
                        Para acelerar ainda mais os teus resultados, incluí ferramentas e guias práticos que te vão poupar tempo e dinheiro.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    {BONUSES.map((bonus, index) => (
                        <BonusItem key={index} icon={bonus.icon} title={bonus.title} description={bonus.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bonuses;