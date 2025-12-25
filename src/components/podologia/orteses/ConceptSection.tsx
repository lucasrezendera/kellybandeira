"use client";

import React from 'react';
import { PenTool, CheckCircle, GitCommit } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const ConceptSection: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-serif text-stone-900 mb-6">Mecânica de Precisão</h2>
                        <p className="text-stone-600 text-xl leading-relaxed">
                            Muitas pessoas sofrem a vida toda cortando os cantos da unha para aliviar a dor. Isso só piora o problema. A Órtese ataca a causa: ela altera a curvatura da lâmina.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* FMM */}
                    <RevealOnScroll variant="left" className="h-full">
                        <div className="bg-stone-50 rounded-sm p-10 border border-stone-200 relative overflow-hidden group hover:border-brand-300 transition-colors h-full">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <PenTool size={100} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-700 shadow-sm mb-6">
                                    <PenTool size={32} />
                                </div>
                                <h3 className="text-2xl font-serif text-stone-900 mb-4">Fibra de Memória</h3>
                                <p className="text-stone-600 mb-6">
                                    Uma fita translúcida de material sintético com "memória elástica". Colamos ela sobre a unha curvada. A fibra tenta voltar a ficar reta a todo custo, puxando as bordas da unha para cima suavemente.
                                </p>
                                <ul className="text-sm text-stone-500 space-y-2">
                                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-600" /> Discreta e quase invisível</li>
                                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-600" /> Ideal para unhas finas e médias</li>
                                </ul>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* BOTONS */}
                    <RevealOnScroll variant="right" className="h-full">
                        <div className="bg-stone-50 rounded-sm p-10 border border-stone-200 relative overflow-hidden group hover:border-brand-300 transition-colors h-full">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <GitCommit size={100} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-700 shadow-sm mb-6">
                                    <GitCommit size={32} />
                                </div>
                                <h3 className="text-2xl font-serif text-stone-900 mb-4">Botons & Elástico</h3>
                                <p className="text-stone-600 mb-6">
                                    Sistema de tração mecânica. Colamos dois pequenos botões nas laterais da unha e ligamos com um elástico de alta tensão. A força do elástico levanta as laterais imediatamente.
                                </p>
                                <ul className="text-sm text-stone-500 space-y-2">
                                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-600" /> Alta força de tração</li>
                                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-600" /> Ideal para unhas muito curvas (telha)</li>
                                </ul>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default ConceptSection;
