"use client";

import React from 'react';
import Button from '../ui/Button';
import { Calendar, MessageCircle } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {
    const router = useRouter();
    return (
        <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-16 overflow-hidden bg-stone-100 min-h-[80vh] flex items-center">
            {/* Background Image with Overlay - Scale Effect */}
            <div className="absolute inset-0 z-0">
                <RevealOnScroll variant="scale" className="w-full h-full">
                    <Image
                        src="/images/headerinicio.webp"
                        alt="Ambiente de spa relaxante e limpo"
                        fill
                        className="object-cover opacity-90 transition-transform duration-[2s] hover:scale-105"
                        priority
                    />
                </RevealOnScroll>
                <div className="absolute inset-0 bg-white/60 sm:bg-white/50 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-4xl mx-auto text-center">

                    <RevealOnScroll variant="blur-up">
                        <div className="inline-block px-4 py-1.5 mb-3 border-l-4 border-brand-500 bg-white/80 backdrop-blur-sm shadow-sm">
                            <span className="text-xs font-bold tracking-[0.25em] text-brand-900 uppercase">
                                Referência em Campinas
                            </span>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll variant="blur-up" delay={200}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-none mb-3">
                            Cuidado Especializado. <br />
                            <span className="italic text-brand-800">Bem-estar Absoluto.</span>
                        </h1>
                    </RevealOnScroll>

                    <RevealOnScroll variant="blur-up" delay={400}>
                        <p className="text-lg md:text-xl text-stone-700 mb-5 leading-relaxed font-light max-w-2xl mx-auto">
                            Podologia especializada e massoterapia terapêutica de alto padrão. Recupere sua saúde e equilíbrio com quem é referência na cidade.
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll variant="blur-up" delay={600}>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Button onClick={() => router.push('/agendar')} className="gap-3 shadow-xl bg-black text-white hover:bg-stone-800 border-none">
                                <Calendar size={20} />
                                Agendar Horário
                            </Button>
                            <Button variant="ghost" onClick={() => window.open('https://wa.me/5519983690695', '_blank')} className="gap-3 bg-transparent text-stone-600 border border-brand-400 hover:bg-brand-50 hover:text-brand-900">
                                <MessageCircle size={20} />
                                Tirar Dúvidas
                            </Button>
                        </div>
                    </RevealOnScroll>

                </div>
            </div>
        </section>
    );
};

export default Hero;
