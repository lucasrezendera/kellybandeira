"use client";

import React from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const StorySection: React.FC = () => {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Story */}
                    <div className="order-2 lg:order-2 text-center lg:text-left">
                        <RevealOnScroll variant="blur-up">
                            <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Minha História</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
                                Cuidado integral,<br />
                                <span className="italic text-stone-400">do pé ao bem-estar.</span>
                            </h2>
                        </RevealOnScroll>

                        <RevealOnScroll variant="blur-up" delay={100}>
                            <div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed">
                                <p>
                                    Minha jornada começou há mais de uma década, quando descobri que cuidar do corpo
                                    era muito mais do que estética — era devolver qualidade de vida e autoestima às pessoas.
                                </p>
                                <p>
                                    Como <strong className="text-stone-900">podóloga e massoterapeuta</strong>, atuo em duas frentes
                                    que se complementam: a saúde dos pés e o relaxamento corporal. Seja aliviando uma dor
                                    que te impede de caminhar ou liberando a tensão que te tira o sono, meu foco é você.
                                </p>
                                <p>
                                    <strong className="text-stone-900">Minha filosofia é simples:</strong> não existe
                                    tratamento padrão. Cada pessoa é única, e cada cuidado deve ser personalizado —
                                    seja na podologia, na massoterapia ou na reflexologia.
                                </p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll variant="blur-up" delay={200}>
                            <div className="mt-10 pt-10 border-t border-stone-200 inline-block lg:block">
                                <p className="text-2xl font-serif text-stone-900 italic">
                                    "Quando você anda bem, vive bem."
                                </p>
                                <p className="text-brand-600 font-bold text-sm mt-2 tracking-wider">— KELLY BANDEIRA</p>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Left: Bento Grid */}
                    <div className="lg:pr-8 order-1 lg:order-1">
                        <div className="grid grid-cols-2 gap-3 auto-rows-[100px]">
                            {/* Item 1 - Massoterapeuta (grande esquerda) */}
                            <RevealOnScroll variant="scale" delay={0} className="col-span-1 row-span-6">
                                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl group">
                                    <Image
                                        src="/images/kellymassoterapeuta.webp"
                                        alt="Kelly Massoterapeuta"
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </RevealOnScroll>

                            {/* Item 2 - Podologia */}
                            <RevealOnScroll variant="scale" delay={100} className="col-span-1 row-span-3">
                                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg group">
                                    <Image
                                        src="/images/kellypodologia.webp"
                                        alt="Podologia"
                                        fill
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </RevealOnScroll>

                            {/* Item 3 - Reflexologia */}
                            <RevealOnScroll variant="scale" delay={150} className="col-span-1 row-span-3">
                                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg group">
                                    <Image
                                        src="/images/kellyreflexologia.webp"
                                        alt="Reflexologia"
                                        fill
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
