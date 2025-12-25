"use client";

import React from 'react';
import { Star } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { motion } from 'framer-motion';

const testimonials = [
    {
        tag: "Caso Inflamado",
        tagColor: "bg-brand-700",
        initial: "M",
        initialBg: "bg-brand-200",
        initialColor: "text-brand-800",
        name: "Mariana S.",
        location: "Campinas",
        text: "Eu estava com o dedo muito inchado e com medo de doer. A Kelly tem a mão muito leve, usou um anestésico e eu nem senti quando ela tirou o canto. O espaço no Cambuí é super limpo, virei cliente."
    },
    {
        tag: "Recorrente",
        tagColor: "bg-stone-700",
        initial: "R",
        initialBg: "bg-stone-200",
        initialColor: "text-stone-800",
        name: "Ricardo O.",
        location: "Campinas",
        text: "Já tinha ido em 3 lugares e a unha sempre voltava a encravar. Aqui resolveram de verdade, fizeram o corte correto e nunca mais inflamou. O atendimento é outro nível, muito técnico e profissional."
    },
    {
        tag: "Segurança",
        tagColor: "bg-blue-600",
        initial: "S",
        initialBg: "bg-brand-200",
        initialColor: "text-brand-800",
        name: "Silvia M.",
        location: "Valinhos",
        text: "Sou diabética e tenho pavor de quem mexe no meu pé sem cuidado. O protocolo de esterilização do espaço me deixou 100% segura. A Kelly é extremamente cuidadosa e técnica."
    },
    {
        tag: "Crianças",
        tagColor: "bg-purple-600",
        initial: "P",
        initialBg: "bg-stone-200",
        initialColor: "text-stone-800",
        name: "Patricia G.",
        location: "Campinas",
        text: "Levei meu filho de 10 anos que estava morrendo de dor e medo. Ela teve uma paciência incrível, conversou com ele o tempo todo e resolveu sem trauma. Recomendo para todas as mães!"
    },
    {
        tag: "Urgência",
        tagColor: "bg-red-600",
        initial: "F",
        initialBg: "bg-brand-200",
        initialColor: "text-brand-800",
        name: "Fernanda L.",
        location: "Campinas",
        text: "Consegui um encaixe no mesmo dia pelo plantão. Estava mancando de dor e saí andando normalmente. O alívio foi imediato mesmo, vale cada centavo."
    }
];

const SocialProofSection = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-12">
                <RevealOnScroll variant="blur-up">
                    <h2 className="text-center text-3xl md:text-4xl font-serif text-brand-950">Histórias de Alívio Real</h2>
                    <p className="text-center text-stone-500 mt-4 max-w-2xl mx-auto">Clientes que confiaram no nosso protocolo e hoje vivem sem dor.</p>
                </RevealOnScroll>
            </div>

            <div className="relative w-full">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Marquee Track */}
                <div className="flex">
                    <motion.div
                        className="flex gap-6 pl-4"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40 // Adjust speed here
                        }}
                    >
                        {/* Duplicate content 3 times to ensure smooth loop on wide screens */}
                        {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                            <div key={index} className="w-[300px] md:w-[400px] shrink-0 bg-stone-50 p-8 rounded-2xl border border-stone-100 relative">
                                <div className={`absolute -top-3 left-6 ${item.tagColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm`}>
                                    {item.tag}
                                </div>
                                <div className="flex text-yellow-500 mb-4 gap-1">
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                </div>
                                <p className="text-stone-700 italic mb-6 text-base leading-relaxed h-32 md:h-24 overflow-hidden">
                                    "{item.text}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full ${item.initialBg} flex items-center justify-center ${item.initialColor} font-serif font-bold`}>
                                        {item.initial}
                                    </div>
                                    <div>
                                        <p className="font-bold text-stone-900 text-sm">{item.name}</p>
                                        <p className="text-xs text-stone-500">{item.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;
