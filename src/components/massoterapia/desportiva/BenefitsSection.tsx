"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const BenefitsSection: React.FC = () => {
    const benefits = [
        "Remoção de resíduos metabólicos (Lactato)",
        "Melhora da oxigenação muscular",
        "Relaxamento de áreas sobrecarregadas",
        "Preparo mental para competição",
        "Flexibilidade e elasticidade",
        "Identificação precoce de lesões"
    ];

    return (
        <section className="py-16 bg-stone-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <RevealOnScroll variant="blur-up">
                    <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-1 block">Benefícios</span>
                    <h2 className="text-4xl font-serif text-stone-900 mb-8">Vantagens do Atleta</h2>
                </RevealOnScroll>

                <div className="flex flex-wrap justify-center gap-4">
                    {benefits.map((benefit, index) => (
                        <RevealOnScroll key={index} delay={index * 100} variant="scale">
                            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-stone-200 hover:border-brand-300 hover:shadow-md transition-all duration-300 group">
                                <CheckCircle2 className="text-brand-600 group-hover:scale-110 transition-transform" size={18} />
                                <span className="text-stone-700 font-medium">{benefit}</span>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
