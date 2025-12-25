"use client";

import React from 'react';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';

interface ServiceCTASectionProps {
    title: string;
    description: string;
}

import { useRouter } from 'next/navigation';

const ServiceCTASection: React.FC<ServiceCTASectionProps> = ({ title, description }) => {
    const router = useRouter();
    return (
        <section className="bg-brand-800 py-16 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <RevealOnScroll variant="blur-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 leading-none">{title}</h2>
                    <p className="text-lg md:text-xl text-brand-100/90 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="cta" onClick={() => router.push('/agendar')} className="px-10 py-4 font-bold tracking-wide">
                            Agendar Horário
                        </Button>
                        <Button variant="ghost" onClick={() => window.open('https://wa.me/5519983690695', '_blank')} className="bg-transparent text-white border border-brand-300 hover:bg-brand-700 shadow-xl font-bold px-8 py-4 text-base hover:text-white">
                            Tirar Dúvidas
                        </Button>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default ServiceCTASection;
