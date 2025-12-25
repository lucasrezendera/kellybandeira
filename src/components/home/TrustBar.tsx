"use client";

import React from 'react';
import { UserCheck, ShieldCheck, MapPin, Star } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

const TrustBar: React.FC = () => {
    const items = [
        { icon: <UserCheck size={20} />, title: "Atendimento Individual", desc: "Seu tempo é respeitado" },
        { icon: <ShieldCheck size={20} />, title: "Profissional Qualificada", desc: "Anos de experiência" },
        { icon: <MapPin size={20} />, title: "Localização Premium", desc: "Fácil acesso" },
        { icon: <Star size={20} />, title: "Satisfação Garantida", desc: "Clientes indicam" },
    ];

    return (
        <section className="bg-white py-6 lg:py-8 border-b border-stone-100 shadow-sm relative z-20 -mt-4 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-sm">
            <div className="px-4 sm:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                    {items.map((item, index) => (
                        <RevealOnScroll key={index} delay={index * 100}>
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-3 p-2 rounded-lg hover:bg-stone-50 transition-colors duration-300 text-center lg:text-left">
                                <div className="text-brand-600 bg-brand-50 p-2 rounded-full flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-stone-900 text-xs lg:text-sm uppercase tracking-wide leading-tight">{item.title}</h3>
                                    <p className="text-stone-500 text-xs leading-snug hidden lg:block">{item.desc}</p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
