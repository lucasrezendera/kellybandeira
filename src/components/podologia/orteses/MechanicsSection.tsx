"use client";

import React from 'react';
import { Hammer, Move, ArrowRight, ShieldCheck } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const MechanicsSection: React.FC = () => {
    return (
        <section className="section-padding bg-white section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="bg-stone-50 rounded-sm overflow-hidden shadow-xl border border-stone-100">
                        <div className="grid lg:grid-cols-2">
                            {/* Left: Image */}
                            <div className="relative min-h-[400px] order-2 lg:order-1">
                                <Image src="https://picsum.photos/id/1025/800/800" alt="Aplicação de órtese" fill className="object-cover" />
                                <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
                            </div>

                            {/* Right: Content */}
                            <div className="p-10 md:p-14 flex flex-col justify-center mobile-center order-1 lg:order-2">
                                <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Mecanismo de Ação</span>
                                <h2 className="text-4xl font-serif text-stone-900 mb-6 leading-tight">
                                    Tração Constante e Indolor
                                </h2>
                                <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                                    Assim como um aparelho ortodôntico alinha os dentes, a órtese puxa as bordas da unha para cima, corrigindo a curvatura e evitando que ela entre na carne.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Hammer size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Sem Cirurgia</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Move size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Correção Real</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><ArrowRight size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Guia o Crescimento</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><ShieldCheck size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Discreto</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default MechanicsSection;
