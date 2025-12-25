"use client";

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const WarningSection = () => {
    return (
        <section className="bg-stone-100 py-16 px-4">
            <RevealOnScroll variant="scale">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-200 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">

                    <div className="bg-red-50 p-6 rounded-full shrink-0">
                        <AlertTriangle size={40} className="text-red-700" strokeWidth={1.5} />
                    </div>

                    <div className="relative z-10 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Por que você não deve mexer em casa?</h2>
                        <p className="text-stone-600 text-lg leading-relaxed">
                            O uso incorreto de alicates é a principal causa de <strong className="text-brand-800">granulomas e infecções graves</strong>.
                            Ao tentar resolver sozinha, você pode agravar o quadro. Deixe quem entende cuidar de você com segurança e esterilização.
                        </p>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default WarningSection;
