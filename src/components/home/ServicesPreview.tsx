"use client";

import React from 'react';
import { ArrowUpRight, Footprints, Hand, Activity } from 'lucide-react';
import Link from 'next/link';
import RevealOnScroll from '../ui/RevealOnScroll';
import Image from 'next/image';

const ServicesPreview: React.FC = () => {
    const services = [
        {
            id: 'podologia',
            title: 'Podologia Especializada',
            subtitle: 'Saúde dos pés',
            desc: 'Protocolos rigorosos de biossegurança para tratamentos preventivos e corretivos.',
            icon: <Footprints size={24} strokeWidth={1.5} />,
            link: '/podologia',
            image: "/images/podologia-v2.webp"
        },
        {
            id: 'massoterapia',
            title: 'Massoterapia',
            subtitle: 'Alívio de tensões',
            desc: 'Técnicas manuais especializadas para dores musculares e estresse.',
            icon: <Hand size={24} strokeWidth={1.5} />,
            link: '/massoterapia',
            image: "/images/massoterapia.webp"
        },
        {
            id: 'reflexologia',
            title: 'Reflexologia',
            subtitle: 'Equilíbrio sistêmico',
            desc: 'Estimulação de pontos reflexos para relaxamento profundo.',
            icon: <Activity size={24} strokeWidth={1.5} />,
            link: '/reflexologia',
            image: "/images/reflexologia.webp"
        }
    ];

    return (
        <section className="py-16 lg:py-20 bg-gradient-to-b from-stone-50 via-stone-100 to-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-10 max-w-3xl mx-auto">
                        <span className="text-brand-600 font-bold tracking-[0.2em] text-sm uppercase mb-1 block">Nossas Especialidades</span>
                        <h2 className="text-4xl font-serif text-stone-900 mb-3 leading-tight">Tratamentos Exclusivos</h2>
                        <p className="text-stone-600 text-xl font-light leading-relaxed">
                            Cada atendimento inicia com uma avaliação minuciosa. Unimos conhecimento técnico e acolhimento para entregar resultados reais.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
                    {services.map((service, index) => (
                        <RevealOnScroll key={service.id} variant="scale" delay={index * 100} className="h-full">
                            <Link
                                href={service.link}
                                className="group relative flex flex-col h-[420px] rounded-sm overflow-hidden"
                            >
                                {/* Background Image */}
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-800 via-brand-700/80 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Icon Badge - Top Right */}
                                <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                                    {service.icon}
                                </div>

                                {/* Content */}
                                <div className="relative z-10 mt-auto p-8 flex flex-col">
                                    {/* Subtitle */}
                                    <span className="text-white/80 text-xs font-bold tracking-widest uppercase mb-1">
                                        {service.subtitle}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-3 leading-none group-hover:translate-x-1 transition-transform duration-300">
                                        {service.title}
                                    </h3>

                                    {/* Description - Hidden, shows on hover */}
                                    <p className="text-white/70 text-sm leading-relaxed mb-6 max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out">
                                        {service.desc}
                                    </p>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors duration-300">
                                        <span className="text-sm font-medium tracking-wide">Explorar</span>
                                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </div>
                                </div>

                                {/* Decorative Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </Link>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
