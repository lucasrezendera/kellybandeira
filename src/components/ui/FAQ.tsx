"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    title?: string;
    className?: string;
}

const FAQ: React.FC<FAQProps> = ({ items, title = "Perguntas Frequentes", className = "" }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={`py-16 ${className}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-12">
                        <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Tire suas dúvidas</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">{title}</h2>
                    </div>
                </RevealOnScroll>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <RevealOnScroll key={index} delay={index * 100} variant="scale">
                            <div
                                className={`bg-white rounded-sm border transition-all duration-300 ${openIndex === index ? 'border-brand-300 shadow-md transform scale-[1.01]' : 'border-stone-200 hover:border-brand-200'}`}
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={`font-bold text-lg pr-8 ${openIndex === index ? 'text-brand-800' : 'text-stone-700'}`}>
                                        {item.question}
                                    </span>
                                    <span className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-600' : 'text-stone-400'}`}>
                                        <ChevronDown size={24} />
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48' : 'max-h-0'}`}
                                >
                                    <p className="p-6 pt-0 text-stone-600 font-light leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
