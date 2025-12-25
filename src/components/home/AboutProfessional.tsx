"use client";

import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import Image from 'next/image';

const AboutProfessional: React.FC = () => {
    return (
        <section className="py-16 bg-brand-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Image Side - Vem da Esquerda */}
                    <RevealOnScroll variant="left" className="relative">
                        <div className="absolute top-0 -left-4 w-24 h-24 bg-brand-200 rounded-full opacity-50 blur-2xl"></div>
                        <div className="absolute bottom-0 -right-4 w-32 h-32 bg-brand-300 rounded-full opacity-50 blur-2xl"></div>

                        <div className="relative z-10">
                            <Image
                                src="/images/kellybandeira.webp"
                                alt="Kelly Bandeira Podóloga e Massoterapeuta em Campinas"
                                width={450}
                                height={550}
                                className="w-full max-w-xs lg:max-w-md mx-auto h-auto rounded-sm shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-xl max-w-xs hidden md:block">
                                <p className="font-serif text-2xl text-brand-800 italic">"Cuidar é uma arte que exige técnica e coração."</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Text Side - Vem da Direita */}
                    <div className="text-center lg:text-left">
                        <RevealOnScroll variant="right" delay={200}>
                            <span className="text-brand-600 font-bold tracking-[0.2em] text-sm uppercase mb-2 block">Sobre a Especialista</span>
                            <h2 className="text-4xl font-serif text-stone-900 mb-6 leading-none">
                                Experiência profissional e <br />olhar integrativo
                            </h2>

                            <div className="space-y-6 text-stone-600 font-light text-xl leading-relaxed mb-10">
                                <p>
                                    Com sólida formação em Podologia e especialização em terapias manuais, dedico minha carreira a proporcionar alívio e qualidade de vida aos meus pacientes.
                                </p>
                                <p>
                                    Acredito que cada pessoa é única. Por isso, meus atendimentos não são protocolados: são personalizados. Seja para tratar uma patologia nos pés ou aliviar o estresse da rotina executiva, meu compromisso é com o seu resultado e conforto.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Item 1 */}
                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                                    <div className="bg-white p-3 shadow-sm rounded-full h-fit text-brand-600">
                                        <GraduationCap size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Formação Sólida</h4>
                                        <p className="text-sm text-stone-500 mt-1">Certificações nacionais e atualização constante.</p>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                                    <div className="bg-white p-3 shadow-sm rounded-full h-fit text-brand-600">
                                        <Award size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Excelência</h4>
                                        <p className="text-sm text-stone-500 mt-1">Materiais estéreis e técnicas de ponta.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Signature */}
                            <div className="mt-10 text-center lg:text-left">
                                <p className="text-4xl text-brand-700" style={{ fontFamily: 'var(--font-signature)' }}>Kelly Bandeira</p>
                            </div>
                        </RevealOnScroll>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutProfessional;
