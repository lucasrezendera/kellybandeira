"use client";

import React from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const TechniqueSection: React.FC = () => {
    return (
        <section className="relative z-30 -mt-24 px-4 max-w-7xl mx-auto pb-24">
            <RevealOnScroll variant="blur-up">
                <div className="bg-white rounded-sm shadow-2xl overflow-hidden border border-stone-100">
                    <div className="p-8 md:p-12 lg:p-16">
                        <div className="text-center mb-8 max-w-3xl mx-auto">
                            <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-1 block">Conhecimento Milenar</span>
                            <h2 className="text-4xl font-serif text-stone-900 mb-3 leading-none">
                                Como funciona a <br />
                                <span className="text-brand-500 italic">Reflexologia?</span>
                            </h2>
                            <p className="text-stone-500 font-light text-xl leading-relaxed">
                                A reflexologia conecta pontos específicos dos pés a órgãos vitais. <br className="hidden md:block" />
                                Estimulando essas áreas, promovemos equilíbrio e cura natural.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Disclaimer */}
                    <div className="bg-stone-50 px-8 py-6 text-center border-t border-stone-100">
                        <p className="text-stone-400 text-sm italic font-serif">
                            "Não tratamos apenas o pé, tratamos a pessoa inteira através dos pés."
                        </p>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default TechniqueSection;
