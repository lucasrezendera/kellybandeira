"use client";

import React from 'react';
import Button from '@/components/ui/Button';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const CTASection: React.FC = () => {
    return (
        <section className="bg-stone-900 pt-48 pb-20 relative z-10 -mt-20 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <RevealOnScroll variant="blur-up">
                    <h2 className="text-5xl font-serif text-white mb-4 leading-none">Sinta-se leve novamente</h2>
                    <p className="text-lg text-stone-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                        Agende uma sessão avulsa para conhecer ou feche um pacote de tratamento para resultados duradouros.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="ghost" onClick={() => window.open('https://wa.me/5519983690695', '_blank')} className="bg-transparent text-white border border-brand-300 hover:bg-stone-800 shadow-xl font-bold px-8 py-4 text-base hover:text-white">
                            Agendar Horário
                        </Button>
                        <Button variant="outline" className="border-stone-600 text-stone-300 hover:bg-stone-800 hover:text-white px-10 py-4" onClick={() => window.open('https://wa.me/5519999999999', '_blank')}>
                            Tirar Dúvidas
                        </Button>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default CTASection;
