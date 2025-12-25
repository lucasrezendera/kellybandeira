"use client";

import React from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const EducationSection: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <RevealOnScroll variant="left">
                            <h2 className="text-4xl font-serif text-stone-900 mb-6">Não é estético. É defesa.</h2>
                            <p className="text-stone-600 text-xl leading-relaxed mb-6">
                                O calo não nasce "do nada". Ele é a forma inteligente do seu corpo criar um escudo de proteção. Quando um sapato aperta ou um osso pisa torto, a pele engrossa para não rasgar.
                            </p>
                            <p className="text-stone-600 text-xl leading-relaxed mb-8">
                                Porém, quando esse escudo fica grosso demais, ele endurece e passa a funcionar como uma "pedra" no sapato, pressionando as terminações nervosas e causando dor aguda.
                            </p>

                            <div className="p-6 bg-brand-50 border-l-4 border-brand-400 rounded-r-sm">
                                <p className="text-brand-900 font-medium text-sm">
                                    <span className="font-bold block mb-1">Atenção:</span>
                                    Nunca use lixas de ferro ou giletes em casa. Isso estimula o "efeito rebote", fazendo o calo voltar ainda mais grosso e duro em poucos dias.
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>

                    <div className="order-1 md:order-2 relative h-[400px] bg-stone-100 rounded-sm overflow-hidden shadow-lg">
                        <RevealOnScroll variant="right" className="w-full h-full relative">
                            <Image src="https://picsum.photos/id/237/800/800" alt="Pés macios após tratamento" fill className="object-cover grayscale" />
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
