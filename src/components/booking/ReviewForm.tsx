"use client";

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { User, Phone, MessageSquare } from 'lucide-react';

interface Service {
    id: string;
    name: string;
    duration: string;
    price: string;
}

interface ReviewFormProps {
    service: Service;
    date: Date;
    time: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ service, date, time }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [obs, setObs] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Formata a data
        const dateStr = date.toLocaleDateString('pt-BR');

        // Monta a mensagem
        const message = `Olá! Gostaria de confirmar um agendamento.
    
*Cliente:* ${name}
*Serviço:* ${service.name}
*Data:* ${dateStr}
*Horário:* ${time}
*Obs:* ${obs || 'Nenhuma'}

Aguardo confirmação!`;

        // Codifica para URL
        // Codifica para URL
        const url = `https://wa.me/5519983690695?text=${encodeURIComponent(message)}`;

        // Abre WhatsApp
        window.open(url, '_blank');
    };

    return (
        <div className="max-w-xl mx-auto animate-fade-in-up">
            <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl font-serif text-stone-900 mb-2">Finalizar Agendamento</h2>
                <p className="text-stone-500 font-light text-lg">Preencha seus dados para enviarmos a confirmação.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                            <User size={16} className="text-brand-500" /> Seu Nome Completo
                        </label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ex: Maria Silva"
                            className="w-full px-4 py-4 rounded-lg bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder:text-stone-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                            <Phone size={16} className="text-brand-500" /> Telefone (WhatsApp)
                        </label>
                        <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(19) 98369-0695"
                            className="w-full px-4 py-4 rounded-lg bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder:text-stone-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                            <MessageSquare size={16} className="text-brand-500" /> Observações (Opcional)
                        </label>
                        <textarea
                            rows={3}
                            value={obs}
                            onChange={(e) => setObs(e.target.value)}
                            placeholder="Tem alguma dor específica? Alguma restrição?"
                            className="w-full px-4 py-4 rounded-lg bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none placeholder:text-stone-400"
                        />
                    </div>
                </div>

                <div className="pt-6">
                    <Button className="w-full py-5 text-xl bg-green-600 hover:bg-green-700 shadow-xl border-none">
                        Confirmar no WhatsApp
                    </Button>
                    <p className="text-center text-xs text-stone-400 mt-4">
                        Ao clicar, você será redirecionada para o WhatsApp do espaço.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;
