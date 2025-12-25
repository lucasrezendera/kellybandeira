"use client";

import React from 'react';
import { AlertTriangle, Siren, ThermometerSun, Droplet } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const ExplanationSection: React.FC = () => {
    return (
        <section className="section-padding bg-white section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="bg-stone-50 rounded-sm overflow-hidden shadow-xl border border-stone-100">
                        <div className="grid lg:grid-cols-2">
                            {/* Left: Image */}
                            <div className="relative min-h-[400px] order-2 lg:order-1">
                                <Image src="/images/unha-encravada-hero.webp" alt="Tratamento de Unha Encravada" fill className="object-cover" />
                                <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
                            </div>

                            {/* Right: Content */}
                            <div className="p-10 md:p-14 flex flex-col justify-center mobile-center order-1 lg:order-2">
                                <span className="text-red-500 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Alívio Imediato</span>
                                <h2 className="text-4xl font-serif text-stone-900 mb-6 leading-tight">
                                    Por que a unha encrava?
                                </h2>
                                <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                                    A onicocriptose (unha encravada) acontece quando a lâmina ungueal penetra na pele do canto do dedo.
                                    Pode ser causada por corte arredondado, calçados apertados ou curvatura genética da unha.
                                    A dor é intensa e pode evoluir para infecção se não tratada.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="icon-list-item">
                                        <div className="bg-red-50 p-2 rounded-full text-red-500"><AlertTriangle size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Dor Intensa</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-red-50 p-2 rounded-full text-red-500"><ThermometerSun size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Inflamação</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-red-50 p-2 rounded-full text-red-500"><Droplet size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Secreção</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-red-50 p-2 rounded-full text-red-500"><Siren size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Urgente</span>
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
