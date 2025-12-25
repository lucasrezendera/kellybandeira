"use client";

import React from 'react';
import Button from '@/components/ui/Button';
import { Phone, Siren, MapPin } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { useRouter } from 'next/navigation';

const CTASection = () => {
    const router = useRouter();
    return (
        <>
            {/* 8. CTA MOBILE */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 p-3 z-50 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.15)]">
                <Button onClick={() => window.open('https://wa.me/5519983690695', '_blank')} className="bg-green-600 text-white border-none hover:bg-green-700 shadow-xl font-bold px-10 py-5 text-lg h-auto font-medium text-base py-4 rounded-full shadow-lg flex items-center justify-center gap-2 tracking-wide">
                    <Siren size={20} className="text-white" />
                    Verificar Encaixe pelo WhatsApp
                </Button>
            </div>

            {/* CTA DESKTOP */}
            <div className="hidden md:flex flex-col items-center py-20 px-4 bg-white">
                <RevealOnScroll variant="blur-up">
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-5xl font-serif text-brand-950 mb-8 leading-tight">Está com muita dor? <br /> Não espere dias por uma consulta.</h2>
                        <Button onClick={() => router.push('/agendar')} className="mx-auto bg-brand-800 hover:bg-brand-900 border-none text-white font-medium text-xl px-12 py-5 rounded-full shadow-xl flex items-center gap-3 hover:-translate-y-1 transition-all">
                            <Siren size={24} className="text-red-200" fill="currentColor" />
                            Solicitar Encaixe Agora
                        </Button>
                        <p className="mt-4 text-stone-500 text-sm font-medium mx-auto flex items-center justify-center gap-1">
                            <MapPin size={16} className="text-brand-800" /> Rua Antônio Lapa, 1066, Cambuí - Campinas/SP • Estacionamento no Local
                        </p>
                    </div>
                </RevealOnScroll>
            </div>
        </>
    );
};

export default CTASection;
