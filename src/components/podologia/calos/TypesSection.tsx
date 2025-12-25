"use client";

import React from 'react';
import { Layers, Shield, Hammer } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const TypesSection: React.FC = () => {
    return (
        <section className="bg-stone-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-stone-900">O que removemos?</h2>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-3 gap-8">
                    <RevealOnScroll variant="scale" delay={0} className="h-full">
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 hover:border-brand-200 transition-colors h-full">
                            <Layers size={32} className="text-brand-600 mb-6" />
                            <h3 className="text-xl font-bold text-stone-900 mb-3">Hiperqueratose</h3>
                            <p className="text-stone-500 text-sm leading-relaxed mb-4">
                                Aquela pele grossa, amarela e ressecada no calcanhar ou na planta do pé. Causa rachaduras (fissuras) que podem sangrar.
                            </p>
                            <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">Tratamento: Desbastamento</span>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll variant="scale" delay={150} className="h-full">
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 hover:border-brand-200 transition-colors h-full">
                            <Shield size={32} className="text-brand-600 mb-6" />
                            <h3 className="text-xl font-bold text-stone-900 mb-3">Calo com Núcleo</h3>
                            <p className="text-stone-500 text-sm leading-relaxed mb-4">
                                Pequeno, circular e profundo. Tem um "núcleo" duro que penetra na carne como um prego. Muito comum em cima dos dedos ou na sola.
                            </p>
                            <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">Tratamento: Enucleação</span>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll variant="scale" delay={300} className="h-full">
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 hover:border-brand-200 transition-colors h-full">
                            <Hammer size={32} className="text-brand-600 mb-6" />
                            <h3 className="text-xl font-bold text-stone-900 mb-3">Calo Mole</h3>
                            <p className="text-stone-500 text-sm leading-relaxed mb-4">
                                Fica entre os dedos, geralmente úmido e doloroso. Causado pelo atrito de um dedo contra o outro.
                            </p>
                            <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">Tratamento: Remoção + Afastador</span>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default TypesSection;
