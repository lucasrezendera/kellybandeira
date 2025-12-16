import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ 
  items, 
  title = "Dúvidas Frequentes",
  className = "" 
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primeiro item aberto por padrão

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 bg-white border-t border-stone-100 ${className}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
           <div className="bg-brand-50 p-3 rounded-full text-brand-600 mb-4">
              <HelpCircle size={24} />
           </div>
           <h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight">
             {title}
           </h2>
        </div>

        {/* Lista Acordeão */}
        <div className="space-y-2">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`border-b border-stone-100 transition-colors duration-300 ${isOpen ? 'bg-stone-50/50' : 'bg-transparent'}`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-serif transition-colors duration-300 ${isOpen ? 'text-brand-800 font-medium' : 'text-stone-800 group-hover:text-brand-700'}`}>
                    {item.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? (
                      <Minus className="text-brand-600" size={20} />
                    ) : (
                      <Plus className="text-stone-400 group-hover:text-brand-500" size={20} />
                    )}
                  </div>
                </button>

                {/* Conteúdo com Animação Simples */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                >
                  <div className="text-stone-600 font-light leading-relaxed text-base pr-8">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;