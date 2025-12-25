"use client";

import React from 'react';
import { Eraser, Microscope } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const DifferentialSection: React.FC = () => {
    return (
        <div className="bg-stone-50 py-16 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Imagem */}
                    <RevealOnScroll variant="left" className="relative h-[500px] rounded-sm overflow-hidden shadow-xl">
                        <Image src="/images/micoses-hero.webp" alt="Tratamento de Micoses" fill className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
                    </RevealOnScroll>

                    {/* Conteúdo */}
                    <RevealOnScroll variant="right">
                        <div>
                            <span className="text-brand-700 font-bold tracking-widest text-xs uppercase mb-1 block">O Segredo do Sucesso</span>
                            <h2 className="text-4xl font-serif text-stone-900 mb-3">A Limpeza Mecânica</h2>
                            <p className="text-stone-600 text-lg leading-relaxed mb-6">
                                Não adianta aplicar remédio sobre uma unha morta e grossa. A manutenção mensal é essencial para o sucesso do tratamento.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-brand-500">
                                    <div className="icon-list-item">
                                        <Eraser className="text-brand-600" size={24} />
                                        <h4 className="font-bold text-stone-900">Remoção da Carga Fúngica</h4>
                                    </div>
                                    <p className="text-stone-500 text-sm">Lixamos e cortamos toda a parte da unha que está oca, solta ou contaminada. Isso remove 80% dos fungos fisicamente.</p>
                                </div>

                                <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-brand-500">
                                    <div className="icon-list-item">
                                        <Microscope className="text-brand-600" size={24} />
                                        <h4 className="font-bold text-stone-900">Permeabilidade</h4>
                                    </div>
                                    <p className="text-stone-500 text-sm">Deixamos a unha fina e porosa para que o antifúngico consiga penetrar e matar a raiz do problema.</p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </div>
    );
};

export default DifferentialSection;
