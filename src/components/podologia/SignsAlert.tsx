"use client";

import React from 'react';
import { AlertCircle, Footprints, ShieldCheck } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';

const SignsAlert: React.FC = () => {
    return (
        <div className="bg-gradient-to-b from-stone-50 via-stone-100 to-stone-200 py-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-stone-50 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-4 items-center">
                    <RevealOnScroll variant="scale" className="relative order-2 lg:order-1">
                        <div className="relative rounded-t-[12rem] rounded-b-lg overflow-hidden shadow-2xl h-[700px] w-full max-w-sm mx-auto">
                            <Image
                                src="/images/kellypodologia.webp"
                                alt="Cuidado podológico especializado"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
                        </div>
                    </RevealOnScroll>
                    <div className="order-1 lg:order-2 text-center lg:text-left">
                        <RevealOnScroll variant="right">
                            <span className="text-brand-600 font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Sinais de Alerta</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-none">
                                Seus pés pedem <br />
                                <span className="text-stone-400 italic">socorro?</span>
                            </h2>
                            <p className="text-stone-600 text-xl font-light leading-relaxed mb-12">
                                Muitas vezes ignoramos pequenos desconfortos até que virem dores insuportáveis. Identifique os sinais de que é hora de visitar a podóloga.
                            </p>
                            <div className="space-y-10">
                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                            <AlertCircle size={28} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">Dor & Inflamação</h3>
                                        <p className="text-stone-500 font-light leading-relaxed">
                                            Unhas encravadas (com ou sem pus), dores nas pontas dos dedos ao caminhar ou calos que "queimam". Resolvemos o quadro agudo para alívio imediato.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                            <Footprints size={28} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">Estética & Textura</h3>
                                        <p className="text-stone-500 font-light leading-relaxed">
                                            Rachaduras no calcanhar (fissuras), pele extremamente seca, unhas deformadas ou com coloração estranha. Devolvemos a aparência saudável.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                            <ShieldCheck size={28} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">Prevenção & Diabetes</h3>
                                        <p className="text-stone-500 font-light leading-relaxed">
                                            Pacientes diabéticos, idosos ou praticantes de corrida precisam de acompanhamento mensal preventivo para evitar lesões graves.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignsAlert;
