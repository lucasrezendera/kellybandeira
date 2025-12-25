"use client";

import React from 'react';
import { Quote } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const PhilosophySection: React.FC = () => {
    return (
        <section className="py-20 bg-brand-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <RevealOnScroll variant="blur-up">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-8">
                        <Quote size={32} className="text-brand-200" />
                    </div>
                </RevealOnScroll>

                <RevealOnScroll variant="blur-up" delay={200}>
                    <blockquote className="text-3xl md:text-4xl font-serif leading-relaxed mb-8 italic">
                        "Cuidar dos pés é cuidar da base que sustenta toda a sua vida.
                        Quando você anda bem, vive bem."
                    </blockquote>
                </RevealOnScroll>

                <RevealOnScroll variant="blur-up" delay={400}>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-1 bg-brand-400 mb-4"></div>
                        <p className="text-brand-200 font-bold tracking-widest uppercase text-sm">Kelly Bandeira</p>
                        <p className="text-brand-300 text-sm">Podóloga & Massoterapeuta</p>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default PhilosophySection;
