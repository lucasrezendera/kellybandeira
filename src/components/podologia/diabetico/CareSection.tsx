"use client";

import React from 'react';
import { Eye, Thermometer, Mic, ShieldAlert } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const CareSection: React.FC = () => {
    return (
        <section className="section-padding bg-white section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="bg-stone-50 rounded-sm overflow-hidden shadow-xl border border-stone-100">
                        <div className="grid lg:grid-cols-2">
                            {/* Left: Content */}
                            <div className="p-10 md:p-14 flex flex-col justify-center mobile-center">
                                <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Prevenção Total</span>
                                <h2 className="text-4xl font-serif text-stone-900 mb-6 leading-tight">
                                    Teste de Sensibilidade
                                </h2>
                                <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                                    A neuropatia diabética faz você perder a sensação de dor, calor e frio. Por isso, um machucado pode evoluir sem você perceber. Nosso exame mensal é sua segurança.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Eye size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Inspeção Visual</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Thermometer size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Sensibilidade Térmica</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Mic size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Monofilamento</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><ShieldAlert size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Prevenção de Ulceras</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="relative min-h-[400px]">
                                <Image src="/images/diabetico-hero.webp" alt="Cuidado Pé Diabético" fill className="object-cover" />
                                <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default CareSection;
