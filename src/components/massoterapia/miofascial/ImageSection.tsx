"use client";

import React from 'react';
import { Briefcase, Monitor, Sofa, Car } from 'lucide-react';
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
                                <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Indicações</span>
                                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                                    Quem Mais Precisa Dessa Técnica
                                </h2>
                                <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                                    A fáscia "gruda" em quem passa horas na mesma posição. Se você se identifica, essa técnica é para você.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Monitor size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Home Office</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Briefcase size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Escritório</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Car size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Motoristas</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Sofa size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Sedentários</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="relative min-h-[400px]">
                                <Image src="/images/miofascial-hero.webp" alt="Liberação Miofascial" fill className="object-cover" />
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
