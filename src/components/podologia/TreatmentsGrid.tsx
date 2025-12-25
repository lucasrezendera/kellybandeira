"use client";

import React from 'react';
import { AlertCircle, Sparkles, Footprints, ShieldCheck, Microscope, FileSearch } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import TreatmentCard from '@/components/ui/TreatmentCard';

const TreatmentsGrid: React.FC = () => {
    const treatments = [
        {
            id: 1,
            title: "Unha Encravada",
            subtitle: "Alívio Imediato",
            description: "Procedimento com técnica asséptica e indolor para remoção da espícula. Alívio imediato da inflamação.",
            icon: <AlertCircle size={22} />,
            link: "/podologia/unha-encravada",
            image: "/images/unha-encravada-hero.webp"
        },
        {
            id: 2,
            title: "Limpeza Técnica",
            subtitle: "Manutenção Mensal",
            description: "Corte correto das unhas, remoção de pele morta, lixamento plantar e hidratação profunda.",
            icon: <Sparkles size={22} />,
            link: "/podologia/limpeza",
            image: "/images/limpeza-hero.webp"
        },
        {
            id: 3,
            title: "Calos e Calosidades",
            subtitle: "Conforto",
            description: "Remoção técnica e indolor, devolvendo a maciez e o conforto ao caminhar.",
            icon: <Footprints size={22} />,
            link: "/podologia/calos",
            image: "/images/calos-hero.webp"
        },
        {
            id: 4,
            title: "Pé Diabético",
            subtitle: "Saúde Crítica",
            description: "Avaliação da sensibilidade e circulação. Corte seguro e monitoramento preventivo.",
            icon: <ShieldCheck size={22} />,
            link: "/podologia/diabetico",
            image: "/images/diabetico-hero.webp"
        },
        {
            id: 5,
            title: "Micoses e Fungos",
            subtitle: "Tratamento Longo Prazo",
            description: "Protocolos para eliminar fungos nas unhas e na pele com acompanhamento completo.",
            icon: <Microscope size={22} />,
            link: "/podologia/micose",
            image: "/images/micoses-hero.webp"
        },
        {
            id: 6,
            title: "Órteses Corretivas",
            subtitle: "Correção Definitiva",
            description: "Aplicação de aparelhos para corrigir a curvatura da unha e evitar encravamento.",
            icon: <FileSearch size={22} />,
            link: "/podologia/orteses",
            image: "/images/podologia-v2.webp"
        }
    ];

    return (
        <div id="tratamentos" className="bg-gradient-to-b from-stone-50 via-stone-100 to-stone-200 pt-16 pb-40 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-12 max-w-4xl mx-auto">
                        <span className="text-brand-600 font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Especialidades</span>
                        <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 leading-tight">Tratamentos Especializados</h3>
                        <p className="text-stone-600 font-light text-xl leading-relaxed">Procedimentos realizados com técnica apurada, focando no mínimo desconforto e máxima eficácia.</p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {treatments.map((item, index) => (
                        <RevealOnScroll key={item.id} variant="scale" delay={index * 80} className="h-full">
                            <TreatmentCard
                                title={item.title}
                                subtitle={item.subtitle}
                                description={item.description}
                                icon={item.icon}
                                link={item.link}
                                image={item.image}
                            />
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TreatmentsGrid;
