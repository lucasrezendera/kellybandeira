"use client";

import React from 'react';
import { Brain, Moon, BatteryCharging } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const SinaisSection: React.FC = () => {
    const sinais = [
        { icon: <Brain size={24} />, title: "Mente Agitada", desc: "Dificuldade para 'desligar' os pensamentos, ansiedade e irritabilidade constante." },
        { icon: <Moon size={24} />, title: "Insônia", desc: "Sono picado ou acordar já cansada. O corpo não consegue entrar no estágio de relaxamento profundo." },
        { icon: <BatteryCharging size={24} />, title: "Fadiga Crônica", desc: "Cansaço que não passa mesmo após o fim de semana. Sensação de 'bateria fraca'." }
    ];

    return (
        <section className="bg-white py-16 border-b border-stone-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-8">
                        <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-1 block">Sinais de Alerta</span>
                        <h2 className="text-4xl font-serif text-stone-900 mb-3">Sinais de Sobrecarga</h2>
                        <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto">
                            Seu corpo não foi feito para viver em estado de alerta constante.
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
