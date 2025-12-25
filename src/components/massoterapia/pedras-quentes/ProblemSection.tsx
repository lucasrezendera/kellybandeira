"use client";

import React from 'react';
import { Thermometer, Heart, Zap } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const ProblemSection: React.FC = () => {
    const problems = [
        { icon: <Thermometer size={24} />, title: "Tensão Profunda", desc: "Músculos cronicamente tensos que não respondem bem à massagem tradicional precisam do calor." },
        { icon: <Heart size={24} />, title: "Estresse Acumulado", desc: "O calor ativa o sistema nervoso parassimpático, induzindo relaxamento profundo e paz mental." },
        { icon: <Zap size={24} />, title: "Circulação Lenta", desc: "O calor das pedras causa vasodilatação, aumentando o fluxo sanguíneo e oxigenação dos tecidos." }
    ];

    return (
        <section className="bg-white py-16 border-b border-stone-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-12">
                        <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Indicações</span>
                        <h2 className="text-4xl font-serif text-stone-900 mb-6">Por que Pedras Quentes?</h2>
                        <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto">
                            O calor das pedras vulcânicas penetra profundamente na musculatura, potencializando os efeitos terapêuticos da massagem.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <RevealOnScroll key={index} delay={index * 150} variant="scale" className="h-full">
                            <div className="bg-stone-50 p-8 rounded-sm border border-stone-100 text-center h-full group hover:border-amber-200 hover:shadow-lg transition-all duration-300">
                                <div className="w-16 h-16 rounded-full bg-white border-2 border-stone-200 flex items-center justify-center mx-auto mb-6 text-amber-600 group-hover:border-amber-500 group-hover:scale-110 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
