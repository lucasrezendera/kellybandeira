"use client";

import React from 'react';
import { Crosshair, Activity, Zap, Hand } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import StepsConnector from '@/components/ui/StepsConnector';

const TechniqueSection: React.FC = () => {
    const techniques = [
        { icon: <Crosshair size={32} />, title: "Trigger Points", desc: "Pressionamos os 'nós' musculares que irradiam dor para outras regiões." },
        { icon: <Activity size={32} />, title: "Liberação Miofascial", desc: "Soltura da fáscia para devolver mobilidade e fluidez ao movimento." },
        { icon: <Zap size={32} />, title: "Mobilização Articular", desc: "Movimentos passivos nas articulações para aumentar amplitude." },
        { icon: <Hand size={32} />, title: "Técnicas Manuais", desc: "Deslizamento, amassamento e fricção profunda adaptados ao seu caso." }
    ];

    return (
        <section className="section-padding bg-stone-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-10">
                        <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-1 block">Metodologia</span>
                        <h2 className="text-4xl font-serif text-stone-900 mb-3">Técnica manual e precisão</h2>
                        <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto">
                            Um protocolo clínico que identifica a origem da dor e libera a tensão acumulada nas fibras musculares.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="relative">
                    {/* Linha Conectora */}
                    <StepsConnector stepsCount={4} />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                        {techniques.map((tech, index) => (
                            <RevealOnScroll key={index} delay={index * 150} variant="scale" className="relative z-10 flex flex-col items-center text-center group h-full">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-stone-200 flex items-center justify-center shadow-sm mb-6 text-stone-400 group-hover:border-brand-500 group-hover:text-brand-600 transition-all duration-500">
                                    {React.cloneElement(tech.icon as React.ReactElement<any>, { strokeWidth: 1.5 })}
                                </div>
                                <div className="bg-stone-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">Técnica 0{index + 1}</div>
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
