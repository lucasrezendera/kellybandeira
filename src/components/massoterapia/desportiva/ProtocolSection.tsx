"use client";

import React from 'react';
import { Zap, Repeat, Activity, RefreshCw } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import StepsConnector from '@/components/ui/StepsConnector';

const ProtocolSection: React.FC = () => {
    const protocols = [
        { icon: <Zap size={32} />, title: "Pré-Treino (Ativação)", desc: "Movimentos rápidos e superficiais para aquecer e despertar a musculatura." },
        { icon: <Repeat size={32} />, title: "Pós-Treino (Recovery)", desc: "Movimentos lentos, profundos e drenantes para 'limpar' o músculo." },
        { icon: <Activity size={32} />, title: "Manutenção", desc: "Sessão semanal para manter a flexibilidade e prevenir lesões." },
        { icon: <RefreshCw size={32} />, title: "Competição", desc: "Protocolo especial para otimizar performance antes de eventos." }
    ];

    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-10">
                        <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-1 block">Protocolos</span>
                        <h2 className="text-4xl font-serif text-stone-900 mb-3">Pré ou Pós Treino?</h2>
                        <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto">
                            A técnica muda completamente dependendo do seu momento. Adaptamos a sessão ao seu calendário de treinos.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="relative">
                    <StepsConnector stepsCount={4} />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                        {protocols.map((protocol, index) => (
                            <RevealOnScroll key={index} delay={index * 150} variant="scale" className="relative z-10 flex flex-col items-center text-center group h-full">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-stone-200 flex items-center justify-center shadow-sm mb-6 text-stone-400 group-hover:border-brand-500 group-hover:text-brand-600 transition-all duration-500">
                                    {React.cloneElement(protocol.icon as React.ReactElement<any>, { strokeWidth: 1.5 })}
                                </div>
                                <div className="bg-stone-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">Protocolo 0{index + 1}</div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">{protocol.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed px-4">
                                    {protocol.desc}
                                </p>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProtocolSection;
