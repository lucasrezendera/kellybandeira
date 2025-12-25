"use client";

import React from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const GalleryBento: React.FC = () => {
    return (
        <section className="py-24 bg-stone-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-16">
                        <span className="text-brand-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Galeria</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
                            Momentos de <span className="italic text-brand-400">cuidado</span>
                        </h2>
                    </div>
                </RevealOnScroll>

                {/* Bento Grid - More Dynamic */}
                <div className="grid grid-cols-12 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
                    {/* Item 1 - Principal (6 cols, 2 rows) */}
                    <RevealOnScroll variant="scale" delay={0} className="col-span-12 md:col-span-6 row-span-2">
                        <div className="relative w-full h-full rounded-lg overflow-hidden group cursor-pointer">
                            <Image
                                src="/images/kellybandeira.webp"
                                alt="Kelly Bandeira"
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p className="text-brand-400 text-xs font-bold tracking-widest uppercase mb-2">Profissional</p>
                                <p className="font-serif text-3xl text-white">Kelly Bandeira</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Item 2 - (3 cols, 1 row) */}
                    <RevealOnScroll variant="scale" delay={100} className="col-span-6 md:col-span-3 row-span-1">
                        <div className="relative w-full h-full rounded-lg overflow-hidden group cursor-pointer">
                            <Image
                                src="/images/kellypodologia.webp"
                                alt="Podologia"
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/20 transition-colors duration-300"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-white font-bold text-lg tracking-wider">Podologia</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Item 3 - (3 cols, 1 row) */}
                    <RevealOnScroll variant="scale" delay={150} className="col-span-6 md:col-span-3 row-span-1">
                        <div className="relative w-full h-full rounded-lg overflow-hidden group cursor-pointer">
                            <Image
                                src="/images/kellyreflexologia.webp"
                                alt="Reflexologia"
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/20 transition-colors duration-300"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-white font-bold text-lg tracking-wider">Reflexologia</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Item 4 - (6 cols, 1 row) */}
                    <RevealOnScroll variant="scale" delay={200} className="col-span-12 md:col-span-6 row-span-1">
                        <div className="relative w-full h-full rounded-lg overflow-hidden group cursor-pointer">
                            <Image
                                src="/images/limpeza-hero.webp"
                                alt="Limpeza Técnica"
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/20 transition-colors duration-300"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-white font-bold text-lg tracking-wider">Limpeza Técnica</p>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default GalleryBento;
