"use client";

import React from 'react';
import { AlertCircle, Activity, Ban } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const ProblemSection: React.FC = () => {
    const problems = [
        { icon: <AlertCircle size={24} />, title: "Rigidez Crônica", desc: "Sensação de corpo 'travado', dificuldade para se movimentar com fluidez e naturalidade." },
        { icon: <Activity size={24} />, title: "Dor Irradiada", desc: "A dor começa em um ponto mas se espalha para outras regiões, dificultando o diagnóstico." },
        { icon: <Ban size={24} />, title: "Amplitude Limitada", desc: "Você não consegue mais fazer movimentos que antes eram simples, como olhar para trás." }
    ];

    return (
        <section className="bg-white py-16 border-b border-stone-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-8">
                        <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-1 block">O Problema</span>
                        <h2 className="text-4xl font-serif text-stone-900 mb-3">O que é a Fáscia?</h2>
                        <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto">
                            É uma membrana de tecido conjuntivo que envolve todos os músculos. Quando ela fica rígida (aderida), causa dor e limita o movimento.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <RevealOnScroll key={index} delay={index * 150} variant="scale" className="h-full">
                            <div className="bg-stone-50 p-8 rounded-sm border border-stone-100 text-center h-full group hover:border-brand-200 hover:shadow-lg transition-all duration-300">
                                <div className="w-16 h-16 rounded-full bg-white border-2 border-stone-200 flex items-center justify-center mx-auto mb-6 text-brand-600 group-hover:border-brand-500 group-hover:scale-110 transition-all duration-300">
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
