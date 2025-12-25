"use client";

import React from 'react';
import Button from '../ui/Button';

interface CTASectionProps {
    title?: string;
    description?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    secondaryButtonText?: string;
    onSecondaryButtonClick?: () => void;
}

import { useRouter } from 'next/navigation';

const CTASection: React.FC<CTASectionProps> = ({
    title = "Pronta para se sentir renovada?",
    description = "Não adie seu bem-estar. Agende uma avaliação hoje mesmo e descubra o padrão de cuidado que você merece.",
    buttonText = "Agendar Horário",
    secondaryButtonText = "Tirar Dúvidas"
}) => {
    const router = useRouter();
    return (
        <section className="py-16 bg-brand-800 text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 leading-none">{title}</h2>
                <p className="text-lg md:text-xl text-brand-100/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button variant="cta" onClick={() => router.push('/agendar')} className="font-bold tracking-wide">
                        {buttonText}
                    </Button>
                    <Button variant="ghost" onClick={() => window.open('https://wa.me/5519983690695', '_blank')} className="bg-transparent text-white border border-brand-300 hover:bg-brand-700 font-bold px-8 py-4 h-auto text-base shadow-xl hover:text-white">
                        {secondaryButtonText}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
