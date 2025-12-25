"use client";

import React from 'react';
import { Waves, Sparkles, Heart, Zap } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import StepsConnector from '@/components/ui/StepsConnector';

const TechniqueSection: React.FC = () => {
    const techniques = [
        { icon: <Waves size={32} />, title: "Estímulo Hidráulico", desc: "Movimentos de bombeamento que reativam a circulação natural." },
        { icon: <Sparkles size={32} />, title: "Sem Hematomas", desc: "Respeitamos a fisiologia do corpo. Você sai leve, não dolorida." },
        { icon: <Heart size={32} />, title: "Método Vodder", desc: "Técnica suave e ritmada desenvolvida na Dinamarca." },
        { icon: <Zap size={32} />, title: "Resultado Imediato", desc: "Sensação de leveza logo após a primeira sessão." }
    ];

    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-10">
                        <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-1 block">A Técnica</span>
                        <h2 className="text-4xl font-serif text-stone-900 mb-3">Ritmo, Pressão e Direção</h2>
                        <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto">
                            A Drenagem Linfática não deve doer. Utilizamos manobras leves e rítmicas que "empurram" a linfa para os gânglios.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="relative">
                    <StepsConnector stepsCount={4} />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                        {techniques.map((tech, index) => (
                            <RevealOnScroll key={index} delay={index * 150} variant="scale" className="relative z-10 flex flex-col items-center text-center group h-full">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-stone-200 flex items-center justify-center shadow-sm mb-6 text-stone-400 group-hover:border-brand-500 group-hover:text-brand-600 transition-all duration-500">
                                    {React.cloneElement(tech.icon as React.ReactElement<any>, { strokeWidth: 1.5 })}
                                </div>
                                <div className="bg-stone-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">Etapa 0{index + 1}</div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">{tech.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed px-4">
                                    {tech.desc}
                                </p>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechniqueSection;
