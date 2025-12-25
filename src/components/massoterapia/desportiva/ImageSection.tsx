"use client";

import React from 'react';
import { Users, Medal, Target, Dumbbell } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const ImageSection: React.FC = () => {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="bg-stone-50 rounded-sm overflow-hidden shadow-xl border border-stone-100">
                        <div className="grid lg:grid-cols-2">
                            {/* Left: Image */}
                            <div className="relative min-h-[400px] order-2 lg:order-1">
                                <Image src="/images/desportiva-hero.webp" alt="Massagem Desportiva" fill className="object-cover" />
                                <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
                            </div>

                            {/* Right: Content */}
                            <div className="p-10 md:p-14 flex flex-col justify-center order-1 lg:order-2">
                                <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Para Quem É</span>
                                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                                    Feito Para Quem Treina Sério
                                </h2>
                                <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                                    De corredores amadores a atletas de alto rendimento. Entendemos as demandas do seu corpo.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="icon-list-item">
                                        <div className="bg-red-50 p-2 rounded-full text-brand-600"><Dumbbell size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Musculação</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-red-50 p-2 rounded-full text-brand-600"><Target size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Crossfit</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-red-50 p-2 rounded-full text-brand-600"><Medal size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Corrida</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-red-50 p-2 rounded-full text-brand-600"><Users size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Esportistas</span>
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

export default ImageSection;
