"use client";

import React from 'react';
import { ArrowDown, Activity, Scale } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const SinaisSection: React.FC = () => {
    const sinais = [
        { icon: <ArrowDown size={24} />, title: "Pernas Cansadas", desc: "Sensação de peso nas pernas ao final do dia, marcas de meia ou sapato apertado e desconforto ao caminhar." },
        { icon: <Activity size={24} />, title: "Pós-Operatório", desc: "Indispensável após cirurgias plásticas (lipoaspiração, abdominoplastia) para evitar fibrose e acelerar a cicatrização." },
        { icon: <Scale size={24} />, title: "Gestação", desc: "Alívio seguro para o inchaço natural da gravidez, controlando a pressão e proporcionando bem-estar para a mãe." }
    ];

    return (
        <section className="bg-white py-16 border-b border-stone-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-8">
                        <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-1 block">Sinais de Alerta</span>
                        <h2 className="text-4xl font-serif text-stone-900 mb-3">Sensação de "Peso"?</h2>
                        <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto">
                            Quando o sistema linfático desacelera, seu corpo acumula toxinas, líquidos e a sensação de inchaço persiste.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-3 gap-8">
                    {sinais.map((item, index) => (
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

export default SinaisSection;
