"use client";

import React from 'react';
import { Shield, Clock, Award, Heart } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const ImageSection: React.FC = () => {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="bg-stone-50 rounded-sm overflow-hidden shadow-xl border border-stone-100">
                        <div className="grid lg:grid-cols-2">
                            {/* Left: Content */}
                            <div className="p-10 md:p-14 flex flex-col justify-center">
                                <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Por Que Nos Escolher</span>
                                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                                    Atendimento Exclusivo e Personalizado
                                </h2>
                                <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                                    Cada sessão é adaptada às suas necessidades. Aqui você não é só mais um número na agenda.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Shield size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Biossegurança</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Clock size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Pontualidade</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Award size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Experiência</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Heart size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Cuidado</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="relative min-h-[400px]">
                                <Image src="/images/terapeutica-hero.webp" alt="Massagem Terapêutica" fill className="object-cover" />
                                <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default ImageSection;
