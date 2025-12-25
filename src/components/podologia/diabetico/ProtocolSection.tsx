"use client";

import React from 'react';
import { FileSearch, Eye, Stethoscope } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const ProtocolSection: React.FC = () => {
    return (
        <div className="bg-stone-50 section-padding relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="bg-white rounded-sm shadow-xl overflow-hidden border border-stone-200">
                        <div className="grid md:grid-cols-2">
                            <div className="p-10 md:p-14">
                                <span className="text-brand-700 font-bold tracking-widest text-xs uppercase mb-4 block">Segurança Total</span>
                                <h2 className="text-4xl font-serif text-stone-900 mb-8">Check-up Preventivo Mensal</h2>

                                <div className="space-y-8">
                                    {[
                                        { icon: <FileSearch size={24} />, title: "1. Teste de Sensibilidade", desc: "Usamos o monofilamento (estesiômetro) para mapear áreas onde você perdeu a sensibilidade." },
                                        { icon: <Eye size={24} />, title: "2. Inspeção de Frieiras", desc: "Verificação rigorosa entre os dedos. Frieiras são perigosas para diabéticos." },
                                        { icon: <Stethoscope size={24} />, title: "3. Corte Anatômico", desc: "Sem cuticulagem profunda. Corte técnico e lixamento suave para evitar qualquer trauma." }
                                    ].map((step, idx) => (
                                        <RevealOnScroll key={idx} delay={idx * 100} variant="left">
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-700 flex-shrink-0">
                                                    {step.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-stone-900 text-lg">{step.title}</h4>
                                                    <p className="text-stone-600 text-sm">{step.desc}</p>
                                                </div>
                                            </div>
                                        </RevealOnScroll>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-stone-100 relative min-h-[400px]">
                                <Image src="/images/diabetico-hero.webp" alt="Exame de Pé Diabético" fill className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-brand-900/20 mix-blend-multiply"></div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
};

export default ProtocolSection;
