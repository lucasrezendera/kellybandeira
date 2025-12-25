"use client";

import React from 'react';
import { ShieldX, RefreshCcw, CalendarClock } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const EnemySection: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <RevealOnScroll variant="blur-up">
                    <h2 className="text-4xl font-serif text-stone-900 mb-8">Por que é tão difícil curar?</h2>
                </RevealOnScroll>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <ShieldX size={40} />, title: "Proteção", desc: "O fungo se esconde embaixo da lâmina da unha e cria um 'biofilme' protetor que repele cremes e gotas." },
                        { icon: <RefreshCcw size={40} />, title: "Recontaminação", desc: "Meias e sapatos antigos podem conter esporos, reinfectando a unha constantemente." },
                        { icon: <CalendarClock size={40} />, title: "Tempo", desc: "O tratamento exige disciplina diária por meses. Muitos desistem antes do fim." }
                    ].map((item, index) => (
                        <RevealOnScroll key={index} delay={index * 150} variant="scale">
                            <div className="flex flex-col items-center p-6 bg-stone-50 rounded-sm h-full">
                                <div className="text-stone-400 mb-4">{item.icon}</div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-stone-500">{item.desc}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EnemySection;
