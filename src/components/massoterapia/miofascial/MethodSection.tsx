"use client";

import React from 'react';
import { Crosshair, Layers, Activity, Zap } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import StepsConnector from '@/components/ui/StepsConnector';

const MethodSection: React.FC = () => {
    const methods = [
        { icon: <Crosshair size={32} />, title: "Trigger Points", desc: "Pressão sustentada em pontos específicos que irradiam dor." },
        { icon: <Layers size={32} />, title: "Liberação Fascial", desc: "Movimentos lentos e profundos para soltar as aderências da fáscia." },
        { icon: <Activity size={32} />, title: "Mobilização", desc: "Movimentos articulares para restaurar a amplitude de movimento." },
        { icon: <Zap size={32} />, title: "Alongamento Ativo", desc: "Técnicas de contração-relaxamento para soltar músculos tensos." }
    ];

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-10">
                        <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-1 block">Metodologia</span>
                        <h2 className="text-4xl font-serif text-stone-900 mb-3">Técnicas Utilizadas</h2>
                        <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto">
                            Combinamos abordagens complementares para liberar a fáscia de forma eficiente, duradoura e sem dor.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="relative">
                    <StepsConnector stepsCount={4} />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                        {methods.map((method, index) => (
                            <RevealOnScroll key={index} delay={index * 150} variant="scale" className="relative z-10 flex flex-col items-center text-center group h-full">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-stone-200 flex items-center justify-center shadow-sm mb-6 text-stone-400 group-hover:border-brand-500 group-hover:text-brand-600 transition-all duration-500">
                                    {React.cloneElement(method.icon as React.ReactElement<any>, { strokeWidth: 1.5 })}
                                </div>
                                <div className="bg-stone-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">Técnica 0{index + 1}</div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">{method.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed px-4">
                                    {method.desc}
                                </p>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MethodSection;
