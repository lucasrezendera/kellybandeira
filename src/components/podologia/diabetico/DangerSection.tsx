"use client";

import React from 'react';
import { AlertOctagon, Activity, ShieldCheck } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const DangerSection: React.FC = () => {
    return (
        <section className="py-16 bg-white border-b border-stone-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <RevealOnScroll variant="blur-up">
                    <h2 className="text-4xl font-serif text-stone-900 mb-6">O Perigo da Neuropatia</h2>
                    <p className="text-stone-600 text-xl leading-relaxed mb-12">
                        O excesso de açúcar no sangue danifica os nervos dos pés ao longo dos anos. O resultado? Você perde a capacidade de sentir dor, calor ou frio. Você pode pisar em um prego, queimar a pele ou ter um sapato machucando o dia todo e <strong>não sentir absolutamente nada</strong>.
                    </p>
                </RevealOnScroll>

                <div className="grid md:grid-cols-3 gap-6 text-left">
                    {[
                        { icon: <AlertOctagon size={28} />, title: "Sem Dor", desc: "A ausência de dor mascara lesões graves que evoluem rápido." },
                        { icon: <Activity size={28} />, title: "Má Circulação", desc: "O sangue não chega corretamente, dificultando a cicatrização de qualquer corte." },
                        { icon: <ShieldCheck size={28} />, title: "Pele Seca", desc: "Ressecamento extremo que causa fissuras (portas de entrada para bactérias)." }
                    ].map((item, index) => (
                        <RevealOnScroll key={index} delay={index * 150} variant="scale">
                            <div className="p-6 bg-stone-50 border-t-4 border-brand-600 shadow-sm h-full">
                                <div className="text-brand-700 mb-4">{item.icon}</div>
                                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-stone-500">{item.desc}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DangerSection;
