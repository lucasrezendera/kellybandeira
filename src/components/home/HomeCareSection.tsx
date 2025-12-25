"use client";

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { Home, ShieldCheck, HeartHandshake } from 'lucide-react';

const HomeCareSection: React.FC = () => {
    return (
        <section className="py-20 bg-stone-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Coluna de Imagem */}
                    <RevealOnScroll variant="scale" className="relative order-2 lg:order-1">
                        <div className="relative">
                            {/* Moldura da Imagem */}
                            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/headerinicio.webp" // Imagem solicitada pelo usuário
                                    alt="Atendimento Podológico e Massagem Residencial em Campinas"
                                    fill
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
                            </div>

                            {/* Card Flutuante */}
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block animate-float">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-3 bg-brand-100 rounded-full text-brand-600">
                                        <Home size={24} />
                                    </div>
                                    <div>
                                        <p className="text-stone-900 font-bold text-lg">Home Care</p>
                                        <p className="text-stone-500 text-sm">Conforto & Segurança</p>
                                    </div>
                                </div>
                                <p className="text-stone-600 text-sm font-light">
                                    Levamos todo o equipamento necessário para um atendimento completo onde você estiver.
                                </p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Coluna de Conteúdo */}
                    <RevealOnScroll variant="right" className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-[0.15em] mb-6 rounded-sm">
                            <HeartHandshake size={14} /> Atendimento Exclusivo
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
                            O Cuidado da Clínica, <br />
                            <span className="text-brand-600 italic">no Conforto do Seu Lar.</span>
                        </h2>

                        <p className="text-lg text-stone-600 font-light leading-relaxed mb-8">
                            Entendemos que nem sempre é possível vir até nós. Por isso, oferecemos o serviço de <span className="font-bold text-stone-800">Home Care</span> com a mesma excelência, biossegurança e atenção que você encontra em nosso espaço.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 bg-stone-100 rounded-full text-brand-600 shrink-0">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-stone-900 mb-1">Biossegurança Rigorosa</h4>
                                    <p className="text-stone-500 font-light">Materiais 100% esterilizados e descartáveis, garantindo total segurança para você e sua família.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 bg-stone-100 rounded-full text-brand-600 shrink-0">
                                    <Home size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-stone-900 mb-1">Comodidade Total</h4>
                                    <p className="text-stone-500 font-light">Ideal para idosos, gestantes, pessoas com mobilidade reduzida ou quem busca a máxima conveniência.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={() => window.open('https://wa.me/5519983690695?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20Home%20Care.', '_blank')}
                                className="shadow-xl bg-brand-800 hover:bg-brand-900"
                            >
                                Solicitar Atendimento em Casa
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => window.open('https://wa.me/5519983690695', '_blank')}
                                className="border-stone-300 text-stone-600 hover:bg-white"
                            >
                                Consultar Taxa de Deslocamento
                            </Button>
                        </div>
                    </RevealOnScroll>

                </div>
            </div>
        </section>
    );
};

export default HomeCareSection;
