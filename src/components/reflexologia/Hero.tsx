"use client";

import React from 'react';
import Button from '@/components/ui/Button';
import { Activity } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-stone-100 min-h-[60vh] flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <RevealOnScroll variant="scale" className="w-full h-full">
                    <Image
                        src="/images/headerinicio.webp"
                        alt="Reflexologia Podal"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                </RevealOnScroll>
                <div className="absolute inset-0 bg-stone-50/80 sm:bg-white/60 bg-gradient-to-r from-stone-50 via-white/80 to-transparent"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <RevealOnScroll variant="blur-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 border border-brand-100 text-brand-800 text-xs font-bold uppercase tracking-widest mb-3 rounded-sm shadow-sm">
                        <Activity size={14} /> Terapia Integrativa
                    </div>
                </RevealOnScroll>

                <RevealOnScroll variant="blur-up" delay={200}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-3 leading-none">
                        Reflexologia Podal <br /><span className="italic text-brand-700">em Campinas</span>
                    </h1>
                </RevealOnScroll>

                <RevealOnScroll variant="blur-up" delay={300}>
                    <p className="text-lg md:text-xl text-stone-700 mb-5 leading-relaxed font-light max-w-2xl mx-auto">
                        Seus pés carregam o mapa da sua saúde. Uma terapia milenar que equilibra corpo e mente através de toques precisos.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll variant="scale" delay={400}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={() => window.open('https://wa.me/5519983690695', '_blank')} className="shadow-xl bg-brand-800 hover:bg-brand-900 border-none">
                            Agendar Horário
                        </Button>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Hero;
