"use client";

import React from 'react';
import Button from '@/components/ui/Button';
import { Phone, Zap, Award, Siren } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Link from 'next/link';
import { Flower2 } from 'lucide-react';

const Hero = () => {
    return (
        <div className="bg-white">
            <div className="bg-stone-900/95 backdrop-blur text-white text-center py-3 px-4 sticky top-0 z-50 shadow-sm border-b border-white/10 flex items-center justify-center">
                <p className="text-xs md:text-sm font-medium tracking-widest flex items-center justify-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    PLANTÃO PODOLOGIA | ATENDIMENTO ESPECIALIZADO EM CAMPINAS
                </p>
            </div>

            <div className="py-4 border-b border-stone-100 flex justify-center bg-white relative z-30">
                <Link href="/" className="flex items-center gap-2 group" title="Ir para Home">
                    <div className="p-2 rounded-full text-brand-800 bg-brand-50">
                        <Flower2 size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-xl md:text-2xl font-serif tracking-wide text-stone-900">
                        Kelly <span className="italic text-brand-800">Bandeira</span>
                    </span>
                </Link>
            </div>

            <header className="relative px-4 py-16 md:py-24 max-w-5xl mx-auto text-center">

                <RevealOnScroll variant="blur-up">
                    <div className="mb-8 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-brand-100/50 border border-brand-200 text-brand-800 text-sm font-bold uppercase tracking-widest shadow-sm backdrop-blur-sm">
                        <Award size={18} className="text-brand-700" /> Especialista em Campinas | Cambuí
                    </div>
                </RevealOnScroll>

                <RevealOnScroll variant="blur-up" delay={200}>
                    <h1 className="text-5xl md:text-7xl font-serif text-brand-950 leading-[1.1] mb-8 tracking-tight">
                        Especialista em <br className="hidden md:block" />
                        <span className="italic text-brand-800 relative inline-block">
                            Unha Encravada
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-red-100/50 -z-10 skew-x-12"></span>
                        </span>
                    </h1>
                </RevealOnScroll>

                <RevealOnScroll variant="blur-up" delay={300}>
                    <p className="text-xl md:text-2xl text-stone-600 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                        Procedimento seguro, sem dor e com <strong>alívio imediato</strong>. <br />
                        A referência técnica que você procura no coração de Campinas.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll variant="scale" delay={400}>
                    <div className="flex flex-col items-center gap-6">
                        <Button onClick={() => window.open('https://wa.me/5519983690695?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20unha%20encravada.', '_blank')} className="bg-brand-800 hover:bg-brand-900 text-white border-none text-lg md:text-xl px-10 py-5 rounded-full shadow-xl shadow-brand-900/10 font-medium tracking-wide flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform">
                            <Phone size={24} fill="currentColor" />
                            Agendar Avaliação Prioritária
                        </Button>

                        <div className="flex items-center gap-2 text-sm text-stone-500 font-medium bg-white px-4 py-2 rounded-full border border-stone-100 shadow-sm">
                            <Zap size={14} className="text-amber-500 fill-amber-500" />
                            <span>Poucos horários disponíveis hoje no Cambuí</span>
                        </div>
                    </div>
                </RevealOnScroll>
            </header>
        </div>
    );
};

export default Hero;
