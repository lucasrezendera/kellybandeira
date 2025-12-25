"use client";

import React, { useState } from 'react';
import { Footprints, Hand, Sparkles, ChevronRight, Check } from 'lucide-react';

interface Service {
    id: string;
    name: string;
    duration: string;
    price: string;
}

interface Category {
    id: string;
    title: string;
    icon: React.ReactNode;
    services: Service[];
}

interface ServiceSelectionProps {
    onSelect: (service: Service) => void;
    selectedService: Service | null;
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({ onSelect, selectedService }) => {
    const [activeCategory, setActiveCategory] = useState<string>('podologia');

    const categories: Category[] = [
        {
            id: 'podologia',
            title: 'Podologia',
            icon: <Footprints size={20} />,
            services: [
                { id: 'podologia-tradicional', name: 'Podologia Tradicional (Limpeza)', duration: '45 min', price: 'R$ 120' },
                { id: 'unha-encravada', name: 'Tratamento Unha Encravada', duration: '30 min', price: 'R$ 150' },
                { id: 'calosidade', name: 'Remoção de Calosidades', duration: '40 min', price: 'R$ 130' },
                { id: 'pe-diabetico', name: 'Protocolo Pé Diabético', duration: '60 min', price: 'R$ 140' },
            ]
        },
        {
            id: 'massoterapia',
            title: 'Massoterapia',
            icon: <Hand size={20} />,
            services: [
                { id: 'relaxante', name: 'Massagem Relaxante', duration: '60 min', price: 'R$ 180' },
                { id: 'terapeutica', name: 'Massagem Terapêutica', duration: '60 min', price: 'R$ 200' },
                { id: 'drenagem', name: 'Drenagem Linfática', duration: '50 min', price: 'R$ 160' },
                { id: 'pedras', name: 'Pedras Quentes', duration: '90 min', price: 'R$ 250' },
                { id: 'desportiva', name: 'Massagem Desportiva', duration: '60 min', price: 'R$ 200' },
            ]
        },
        {
            id: 'reflexologia',
            title: 'Reflexologia',
            icon: <Sparkles size={20} />,
            services: [
                { id: 'reflexo-45', name: 'Reflexologia Podal', duration: '45 min', price: 'R$ 140' },
                { id: 'spa-pes', name: 'Spa dos Pés + Reflexologia', duration: '60 min', price: 'R$ 190' },
            ]
        }
    ];

    const currentCategory = categories.find(c => c.id === activeCategory);

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="mb-8 text-center lg:text-left">
                <h2 className="text-3xl font-serif text-stone-900 mb-2">Selecione o Serviço</h2>
                <p className="text-stone-500 font-light text-lg">Escolha o procedimento que deseja realizar.</p>
            </div>

            {/* Tabs de Categoria - Full Width em Desktop */}
            <div className="flex flex-wrap gap-3 pb-6 border-b border-stone-100 justify-center lg:justify-start">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex items-center gap-3 px-6 py-4 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-300 flex-grow md:flex-grow-0 justify-center ${activeCategory === cat.id
                                ? 'bg-stone-900 text-white shadow-lg transform -translate-y-1'
                                : 'bg-stone-50 text-stone-500 hover:bg-stone-100'
                            }`}
                    >
                        {cat.icon}
                        {cat.title}
                    </button>
                ))}
            </div>

            {/* Grid de Serviços - 2 Colunas no Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentCategory?.services.map((service) => (
                    <button
                        key={service.id}
                        onClick={() => onSelect(service)}
                        className={`text-left p-6 rounded-xl border-2 transition-all duration-300 group flex justify-between items-start h-full ${selectedService?.id === service.id
                                ? 'border-brand-600 bg-brand-50/50 ring-1 ring-brand-600'
                                : 'border-transparent bg-stone-50 hover:bg-white hover:border-brand-200 hover:shadow-md'
                            }`}
                    >
                        <div className="space-y-2">
                            <h3 className={`font-bold text-lg leading-tight ${selectedService?.id === service.id ? 'text-brand-900' : 'text-stone-800'}`}>
                                {service.name}
                            </h3>
                            <p className="text-stone-500 text-sm flex items-center gap-2">
                                <span>⏱ {service.duration}</span>
                            </p>
                            <p className="font-serif text-lg text-stone-900 font-medium pt-2">
                                {service.price}
                            </p>
                        </div>

                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors mt-1 ${selectedService?.id === service.id ? 'bg-brand-600 text-white' : 'bg-white text-stone-300 group-hover:text-brand-400 border border-stone-200'
                            }`}>
                            {selectedService?.id === service.id ? <Check size={16} /> : <ChevronRight size={18} />}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ServiceSelection;
