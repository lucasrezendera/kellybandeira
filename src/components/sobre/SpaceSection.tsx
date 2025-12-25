"use client";

import React from 'react';
import { Sparkles, Shield, ThermometerSun, Clock, MapPin, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';
import { useState } from 'react';

const SpaceSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        { src: "/images/relaxante-hero.webp", alt: "Ambiente de massagem" },
        { src: "/images/pedras-quentes-hero.webp", alt: "Tratamento com pedras quentes" },
        { src: "/images/drenagem-hero.webp", alt: "Sala de tratamento" }
    ];

    const features = [
        { icon: <Sparkles size={20} />, text: "Ambiente exclusivo e climatizado" },
        { icon: <Shield size={20} />, text: "Biossegurança total" },
        { icon: <ThermometerSun size={20} />, text: "Maca aquecida" },
        { icon: <Clock size={20} />, text: "Pontualidade garantida" },
        { icon: <MapPin size={20} />, text: "Fácil acesso em Campinas" },
        { icon: <Heart size={20} />, text: "Atendimento humanizado" }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="section-padding bg-stone-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Slider */}
                    <RevealOnScroll variant="left">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative h-[450px] rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={images[currentSlide].src}
                                    alt={images[currentSlide].alt}
                                    fill
                                    className="object-cover transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent"></div>
                            </div>

                            {/* Navigation */}
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                <button
                                    onClick={prevSlide}
                                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                {/* Dots */}
                                <div className="flex gap-2">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextSlide}
                                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Right: Content */}
                    <div className="text-center lg:text-left">
                        <RevealOnScroll variant="blur-up">
                            <span className="text-brand-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">O Espaço</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                                Um ambiente <br />
                                <span className="italic text-stone-400">pensado para você</span>
                            </h2>
                            <p className="text-stone-400 font-light text-lg leading-relaxed mb-10">
                                Cada detalhe foi planejado para que você se sinta acolhido e seguro.
                                Do momento que entra até a hora de ir embora, a experiência é completa.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll variant="blur-up" delay={100}>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-3 text-stone-300">
                                        <div className="text-brand-400">
                                            {feature.icon}
                                        </div>
                                        <span className="text-sm font-light text-center lg:text-left">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpaceSection;
