import React, { useState } from 'react';
import { FAQS } from '../constants';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-4 sm:px-2"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-medium text-gray-100">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <p className="pb-5 px-4 sm:px-2 text-gray-400 text-sm sm:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section className="py-12 md:py-24 bg-[#070914]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Perguntas Frequentes</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400">Tens dúvidas? Encontra aqui as respostas para as perguntas mais comuns.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, index) => (
            <FaqItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;