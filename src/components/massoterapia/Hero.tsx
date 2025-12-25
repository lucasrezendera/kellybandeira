"use client";

import React from 'react';
import Button from '@/components/ui/Button';
import { HeartPulse } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-stone-100 min-h-[60vh] flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <RevealOnScroll variant="scale" className="w-full h-full">
                    <Image
                        src="/images/relaxante-hero.webp"
                        alt="Sessão de Massoterapia Relaxante e Terapêutica em Campinas"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                </RevealOnScroll>
                <div className="absolute inset-0 bg-stone-50/80 sm:bg-white/60 bg-gradient-to-r from-stone-50 via-white/80 to-transparent"></div>
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
                <RevealOnScroll variant="blur-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-widest mb-3 rounded-sm">
                        <HeartPulse size={14} /> Terapias Manuais
                    </div>
                </RevealOnScroll>

                <RevealOnScroll variant="blur-up" delay={200}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-3 leading-none">
                        Massoterapia Especializada <br /><span className="text-brand-400 italic">em Campinas</span>
                    </h1>
                </RevealOnScroll>

                <RevealOnScroll variant="blur-up" delay={400}>
                    <p className="text-lg md:text-xl text-stone-700 mb-5 leading-relaxed font-light max-w-2xl mx-auto">
                        Chega de viver com dor ou tensão. Protocolos manuais focados em resultados reais: elimine dores nas costas, reduza o inchaço e recupere sua disposição.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll variant="blur-up" delay={600}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={() => window.open('https://wa.me/5519983690695', '_blank')} className="font-bold shadow-xl bg-black text-white hover:bg-stone-800 border-none">
                            Agendar Horário
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => document.getElementById('tratamentos')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border-stone-300 text-stone-600 hover:bg-white/50"
                        >
                            Tratamentos
                        </Button>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Hero;
