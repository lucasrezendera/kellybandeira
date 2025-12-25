"use client";

import React from 'react';
import { Sparkles, HeartPulse, Droplets, Activity, Trophy, Flame } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import TreatmentCard from '@/components/ui/TreatmentCard';

const ServicesGrid: React.FC = () => {
    const therapies = [
        {
            id: 1,
            title: "Massagem Relaxante",
            subtitle: "Anti-Estresse",
            description: "Combate ansiedade, insônia e fadiga mental com movimentos suaves para baixar o cortisol.",
            icon: <Sparkles size={22} />,
            link: "/massoterapia/relaxante",
            image: "/images/relaxante-hero.webp"
        },
        {
            id: 2,
            title: "Massagem Terapêutica",
            subtitle: "Dor nas Costas",
            description: "Tratamento específico para lombalgia, cervicalgia, torcicolo e dores por má postura.",
            icon: <HeartPulse size={22} />,
            link: "/massoterapia/terapeutica",
            image: "/images/terapeutica-hero.webp"
        },
        {
            id: 3,
            title: "Drenagem Linfática",
            subtitle: "Xô Inchaço",
            description: "Técnica manual que elimina retenção de líquidos e toxinas. Reduz medidas pelo desinchaço.",
            icon: <Droplets size={22} />,
            link: "/massoterapia/drenagem",
            image: "/images/drenagem-hero.webp"
        },
        {
            id: 4,
            title: "Liberação Miofascial",
            subtitle: "Mobilidade",
            description: "Técnica profunda para soltar a fáscia. Resolve dores crônicas que massagens comuns não resolvem.",
            icon: <Activity size={22} />,
            link: "/massoterapia/miofascial",
            image: "/images/miofascial-hero.webp"
        },
        {
            id: 5,
            title: "Massagem Desportiva",
            subtitle: "Performance",
            description: "Preparo e recuperação muscular. Acelera recuperação pós-treino e previne lesões.",
            icon: <Trophy size={22} />,
            link: "/massoterapia/desportiva",
            image: "/images/desportiva-hero.webp"
        },
        {
            id: 6,
            title: "Pedras Quentes",
            subtitle: "Relaxamento Profundo",
            description: "O calor penetra nos músculos, proporcionando relaxamento superior e alívio de tensões.",
            icon: <Flame size={22} />,
            link: "/massoterapia/pedras-quentes",
            image: "/images/pedras-quentes-hero.webp"
        }
    ];

    return (
        <div id="tratamentos" className="bg-gradient-to-b from-stone-50 via-stone-100 to-stone-200 pt-16 pb-40 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll variant="blur-up">
                    <div className="text-center mb-12 max-w-4xl mx-auto">
                        <span className="text-brand-600 font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Especialidades</span>
                        <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 leading-tight">Escolha seu Tratamento</h3>
                        <p className="text-stone-600 font-light text-xl leading-relaxed">
                            Nossos protocolos são personalizados. Se tiver dúvida, indicaremos a melhor técnica na avaliação.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {therapies.map((therapy, index) => (
                        <RevealOnScroll key={therapy.id} variant="scale" delay={index * 80} className="h-full">
                            <TreatmentCard
                                title={therapy.title}
                                subtitle={therapy.subtitle}
                                description={therapy.description}
                                icon={therapy.icon}
                                link={therapy.link}
                                image={therapy.image}
                            />
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesGrid;
