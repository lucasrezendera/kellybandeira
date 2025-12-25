"use client";

import React from 'react';
import { Fingerprint, Flower2, Sliders } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const ExperienceSection: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-stone-200 to-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="bg-stone-50 rounded-sm overflow-hidden shadow-xl border border-stone-100">
                        <div className="grid lg:grid-cols-2">
                            <div className="relative min-h-[400px] order-2 lg:order-1">
                                <div className="absolute inset-0 bg-brand-900/10 z-10"></div>
                                <Image
                                    src="/images/relaxante-hero.webp"
                                    alt="Experiência de Massoterapia"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-10 md:p-14 flex flex-col justify-center order-1 lg:order-2">
                                <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Experiência Única</span>
                                <h2 className="text-4xl font-serif text-stone-900 mb-6 leading-tight">
                                    Não existe massagem padrão.<br />
                                    <span className="italic text-brand-600">Existe a que você precisa.</span>
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 text-brand-600">
                                            <Fingerprint size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-stone-900 font-bold text-lg mb-1">Toque Personalizado</h4>
                                            <p className="text-stone-500 text-sm leading-relaxed">
                                                Avaliamos sua tensão muscular antes de começar.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 text-brand-600">
                                            <Flower2 size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-stone-900 font-bold text-lg mb-1">Aromaterapia Inclusa</h4>
                                            <p className="text-stone-500 text-sm leading-relaxed">
                                                Óleos essenciais escolhidos para acalmar ou energizar.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 text-brand-600">
                                            <Sliders size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-stone-900 font-bold text-lg mb-1">Pressão Ideal</h4>
                                            <p className="text-stone-500 text-sm leading-relaxed">
                                                Do relaxamento suave à liberação profunda. Você decide.
                                            </p>
                                        </div>
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

export default ExperienceSection;
