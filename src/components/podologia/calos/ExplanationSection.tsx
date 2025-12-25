"use client";

import React from 'react';
import { Layers, AlertTriangle, ShieldCheck, Heart } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const ExplanationSection: React.FC = () => {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="bg-stone-50 rounded-sm overflow-hidden shadow-xl border border-stone-100">
                        <div className="grid lg:grid-cols-2">
                            {/* Left: Image */}
                            <div className="relative min-h-[400px] order-2 lg:order-1">
                                <Image src="/images/calos-hero.webp" alt="Tratamento de Calosidades" fill className="object-cover" />
                                <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
                            </div>

                            {/* Right: Content */}
                            <div className="p-10 md:p-14 flex flex-col justify-center mobile-center order-1 lg:order-2">
                                <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">O Problema</span>
                                <h2 className="text-4xl font-serif text-stone-900 mb-6 leading-tight">
                                    Por que os calos doem?
                                </h2>
                                <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                                    A hiperqueratose é uma defesa do corpo contra o atrito constante. A pele engrossa para proteger o osso, mas esse excesso acaba virando uma "pedra" que machuca ao pisar.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Layers size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Pele Espessa</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><AlertTriangle size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Atrito Constante</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><ShieldCheck size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Defesa Natural</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Heart size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Dor ao Pisar</span>
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

export default ExplanationSection;
