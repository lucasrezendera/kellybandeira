"use client";

import React from 'react';
import { ShieldCheck, Clock, Award, CheckCircle2 } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const AuthoritySection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-950 mb-6">Excelência Técnica e Segurança</h2>
                        <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light">
                            Nosso protocolo une a precisão técnica com o conforto de um ambiente acolhedor no Cambuí.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: <ShieldCheck size={32} />, title: "Biossegurança", desc: "Processo de esterilização hospitalar rigoroso para sua total proteção." },
                        { icon: <Clock size={32} />, title: "Agilidade", desc: "Técnica apurada que resolve o desconforto em sessões de 30 minutos." },
                        { icon: <Award size={32} />, title: "Especialista", desc: "Atendimento realizado por Kelly Bandeira, referência na região." },
                        { icon: <CheckCircle2 size={32} />, title: "Conforto", desc: "Aplicação de anestésicos tópicos premium para minimizar qualquer sensibilidade." }
                    ].map((item, index) => (
                        <RevealOnScroll key={index} delay={index * 100} variant="blur-up">
                            <div className="group p-8 rounded-2xl bg-stone-50 hover:bg-brand-50/50 transition-colors duration-500 text-center h-full">
                                <div className="mx-auto w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand-700 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-xl text-stone-900 mb-3">{item.title}</h3>
                                <p className="text-stone-600 leading-relaxed font-light text-sm">{item.desc}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AuthoritySection;
