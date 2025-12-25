"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const ProcessSection = () => {
    return (
        <section className="py-16 bg-stone-50">
            <div className="max-w-3xl mx-auto px-4">
                <RevealOnScroll variant="blur-up">
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-12 text-center">Como funciona o Plantão de Alívio</h2>
                </RevealOnScroll>

                <div className="space-y-4">
                    {/* Step 1 */}
                    <RevealOnScroll variant="left">
                        <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 items-center border-l-4 border-stone-300">
                            <span className="text-3xl font-bold text-stone-200">01</span>
                            <div>
                                <h3 className="font-bold text-lg text-stone-900">Avaliação e Anestesia</h3>
                                <p className="text-stone-600">Limpamos a área infeccionada e aplicamos produto para tirar a sensibilidade local.</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Step 2 */}
                    <RevealOnScroll variant="scale" delay={150}>
                        <div className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-center border-l-4 border-green-600 z-10">
                            <span className="text-3xl font-bold text-green-200">02</span>
                            <div>
                                <h3 className="font-bold text-lg text-stone-900">Remoção Técnica</h3>
                                <p className="text-stone-600">Removemos a espícula (ponta da unha) com bisturi especial. O alívio é instantâneo.</p>
                            </div>
                            <CheckCircle2 size={24} className="text-green-600 ml-auto hidden sm:block" />
                        </div>
                    </RevealOnScroll>

                    {/* Step 3 */}
                    <RevealOnScroll variant="left" delay={300}>
                        <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 items-center border-l-4 border-stone-300">
                            <span className="text-3xl font-bold text-stone-200">03</span>
                            <div>
                                <h3 className="font-bold text-lg text-stone-900">Curativo e Vida Normal</h3>
                                <p className="text-stone-600">Curativo cicatrizante. Você sai caminhando e pode voltar ao trabalho.</p>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
