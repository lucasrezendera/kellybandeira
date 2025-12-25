"use client";

import React from 'react';
import { Brain, Moon, Activity, Zap, BatteryCharging, Heart } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const BenefitsSection: React.FC = () => {
    const benefits = [
        {
            id: 1,
            title: "Alívio do Estresse e Ansiedade",
            description: "A estimulação de pontos específicos reduz os níveis de cortisol, promovendo um relaxamento profundo imediato.",
            icon: <Brain size={24} />
        },
        {
            id: 2,
            title: "Melhora do Sono (Insônia)",
            description: "Regulariza o ciclo do sono, ajudando quem tem dificuldade para dormir ou acorda cansado.",
            icon: <Moon size={24} />
        },
        {
            id: 3,
            title: "Equilíbrio do Sistema Digestivo",
            description: "Pontos reflexos ligados ao estômago e intestino ajudam a aliviar gastrite, constipação e desconfortos abdominais.",
            icon: <Activity size={24} />
        },
        {
            id: 4,
            title: "Alívio de Dores Crônicas",
            description: "Eficaz contra dores de cabeça, enxaquecas e dores nas costas, atuando como um analgésico natural.",
            icon: <Zap size={24} />
        },
        {
            id: 5,
            title: "Aumento da Energia Vital",
            description: "Desbloqueia fluxos de energia estagnados, combatendo a fadiga crônica e o desânimo.",
            icon: <BatteryCharging size={24} />
        },
        {
            id: 6,
            title: "Circulação Sanguínea",
            description: "Melhora o retorno venoso e a oxigenação dos tecidos, reduzindo inchaços e a sensação de peso nas pernas.",
            icon: <Heart size={24} />
        }
    ];

    return (
        <div className="bg-stone-50 pt-16 pb-40 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-8 max-w-4xl mx-auto">
                        <h3 className="text-4xl font-serif text-stone-900 mb-2 leading-tight">Benefícios Comprovados</h3>
                        <p className="text-stone-600 font-light text-xl leading-snug">Muito além de uma massagem nos pés. É um tratamento terapêutico completo.</p>
                    </div>
                </RevealOnScroll>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((item, index) => (
                        <RevealOnScroll key={item.id} variant="scale" delay={index * 100} className="h-full">
                            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-200/60 flex flex-col h-full group text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-between mb-6">
                                    <div className="p-3 bg-brand-50 rounded-full text-brand-700 group-hover:bg-brand-100 transition-colors">
                                        {item.icon}
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold text-stone-900 mb-3">{item.title}</h4>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;
