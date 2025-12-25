"use client";

import React from 'react';
import { Anchor, Smile } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const VisualizationSection: React.FC = () => {
    return (
        <div className="bg-stone-900 py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <RevealOnScroll variant="left">
                        <div className="text-white">
                            <span className="text-brand-400 font-bold tracking-widest text-xs uppercase mb-4 block">Resultados Reais</span>
                            <h2 className="text-4xl font-serif mb-6">Vida Normal</h2>
                            <p className="text-stone-400 text-lg leading-relaxed mb-8">
                                O tratamento com órteses não impede sua rotina.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Anchor className="text-brand-400" size={24} />
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Esportes Liberados</h4>
                                        <p className="text-stone-400 text-sm">Pode correr, nadar e treinar. A fixação é resistente à água.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Smile className="text-brand-400" size={24} />
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Estética Preservada</h4>
                                        <p className="text-stone-400 text-sm">Pode esmaltar por cima da fibra (dependendo do caso) ou mantê-la discreta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll variant="scale">
                        <div className="relative">
                            <div className="absolute -inset-4 border-2 border-brand-500/30 rounded-sm"></div>
                            <div className="relative w-full min-h-[450px]">
                                <Image src="https://picsum.photos/id/20/800/600" alt="Aplicação de órtese" fill className="relative rounded-sm shadow-2xl w-full grayscale object-cover" />
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </div>
    );
};

export default VisualizationSection;
