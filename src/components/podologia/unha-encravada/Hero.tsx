"use client";

import React from 'react';
import Button from '@/components/ui/Button';
import { Siren } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-stone-100 min-h-[60vh] flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <RevealOnScroll variant="scale" className="w-full h-full">
                    <Image
                        src="/images/unha-encravada-hero.webp"
                        alt="Tratamento Unha Encravada"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                </RevealOnScroll>
                <div className="absolute inset-0 bg-stone-50/80 sm:bg-white/60 bg-gradient-to-r from-stone-50 via-white/80 to-transparent"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <RevealOnScroll variant="blur-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-brand-900 text-xs font-bold uppercase tracking-[0.15em] mb-6 rounded-sm border border-red-100">
                        <Siren size={12} className="text-red-500" /> Alívio Imediato
                    </div>
                </RevealOnScroll>

                <RevealOnScroll variant="blur-up" delay={200}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-none">
                        Unha Encravada <br /><span className="text-brand-600 italic">Tratamento sem Dor</span>
                    </h1>
                </RevealOnScroll>

                <RevealOnScroll variant="blur-up" delay={400}>
                    <p className="text-lg md:text-xl text-stone-700 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
                        Procedimento técnico estéril para remoção da espícula com uso de anestésicos tópicos. Recupere seu conforto e volte a caminhar livremente.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll variant="scale" delay={600}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={() => window.open('https://wa.me/5519983690695', '_blank')} className="shadow-xl bg-brand-800 hover:bg-brand-900">
                            Agendar Horário
                        </Button>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Hero;
