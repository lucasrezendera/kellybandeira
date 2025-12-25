"use client";

import React, { useState } from 'react';
import Button from '../ui/Button';
import { MapPin, Wifi, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const AboutSpace: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        { src: "/images/relaxante-hero.webp", alt: "Ambiente de massagem" },
        { src: "/images/pedras-quentes-hero.webp", alt: "Tratamento com pedras quentes" },
        { src: "/images/drenagem-hero.webp", alt: "Sala de tratamento" }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="py-16 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-5 order-2 lg:order-1 text-center lg:text-left">
                        <span className="text-brand-600 font-bold tracking-[0.2em] text-sm uppercase mb-2 block">O Espaço</span>
                        <h2 className="text-4xl font-serif text-stone-900 mb-4 leading-none">
                            Um refúgio no <br />coração de Campinas
                        </h2>
                        <p className="text-stone-600 text-xl font-light leading-snug mb-8">
                            Nosso espaço foi projetado para desconectar você do caos urbano. Situado no Cambuí, oferecemos a estrutura perfeita para quem busca excelência, silêncio e conforto absoluto.
                        </p>

                        <ul className="space-y-4 mb-10 inline-block text-left lg:block">
                            <li className="flex items-center gap-3 text-stone-700 justify-center lg:justify-start">
                                <MapPin className="text-brand-500 flex-shrink-0" size={20} />
                                <span>Localização nobre com estacionamentos próximos</span>
                            </li>
                            <li className="flex items-center gap-3 text-stone-700 justify-center lg:justify-start">
                                <Coffee className="text-brand-500 flex-shrink-0" size={20} />
                                <span>Sala de espera privativa com café premium</span>
                            </li>
                            <li className="flex items-center gap-3 text-stone-700 justify-center lg:justify-start">
                                <Wifi className="text-brand-500 flex-shrink-0" size={20} />
                                <span>Ambiente climatizado e aromatizado</span>
                            </li>
                        </ul>

                        <div className="flex justify-center lg:justify-start">
                            <Button variant="outline" onClick={() => window.open('https://maps.google.com', '_blank')}>
                                Ver Localização no Mapa
                            </Button>
                        </div>
                    </div>

                    {/* Slider */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={images[currentSlide].src}
                                    alt={images[currentSlide].alt}
                                    fill
                                    className="object-cover transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent"></div>
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
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSpace;
