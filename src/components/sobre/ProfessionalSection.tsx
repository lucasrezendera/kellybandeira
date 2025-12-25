"use client";

import React from 'react';
import { Award, BookOpen, Heart, Star } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const ProfessionalSection: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="bg-stone-50 rounded-sm overflow-hidden shadow-xl border border-stone-100">
                        <div className="grid lg:grid-cols-2">
                            {/* Left: Image */}
                            <div className="relative min-h-[500px] order-2 lg:order-1">
                                <Image src="/images/kellypodologia.webp" alt="Kelly Bandeira em atendimento" fill className="object-cover" />
                                <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
                            </div>

                            {/* Right: Content */}
                            <div className="p-10 md:p-14 flex flex-col justify-center order-1 lg:order-2">
                                <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">A Profissional</span>
                                <h2 className="text-4xl font-serif text-stone-900 mb-6 leading-tight">
                                    Paixão pelos pés, <br />
                                    <span className="italic text-brand-600">cuidado pelo todo.</span>
                                </h2>
                                <p className="text-stone-600 font-light leading-relaxed mb-6 text-lg">
                                    Kelly Bandeira é podóloga e massoterapeuta formada, com mais de uma década de experiência
                                    no cuidado com os pés e no alívio de dores através das terapias manuais.
                                </p>
                                <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                                    Sua filosofia é simples: cada pessoa é única, e cada tratamento deve ser personalizado.
                                    Não existe receita pronta. Existe escuta, avaliação e a técnica certa para você.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Award size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">+10 Anos de Experiência</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><BookOpen size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Formação Contínua</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Heart size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">Atendimento Humanizado</span>
                                    </div>
                                    <div className="icon-list-item">
                                        <div className="bg-brand-50 p-2 rounded-full text-brand-600"><Star size={18} /></div>
                                        <span className="text-stone-700 text-sm font-medium">+5000 Atendimentos</span>
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

export default ProfessionalSection;
