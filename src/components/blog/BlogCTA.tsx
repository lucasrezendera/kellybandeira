"use client";

import React from 'react';
import Button from '@/components/ui/Button';

const BlogCTA = () => {
    return (
        <div className="bg-brand-50 rounded-2xl p-8 md:p-10 text-center border border-brand-100">
            <h3 className="text-2xl font-serif font-bold text-brand-900 mb-4">Gostou das dicas?</h3>
            <p className="text-stone-600 mb-8 max-w-lg mx-auto">
                Se você se identificou com esse problema, não sofra em silêncio. Agende uma avaliação e cuide da sua saúde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.open('https://wa.me/5519983690695', '_blank')}>
                    Agendar pelo WhatsApp
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/agendar'}>
                    Ver Horários Disponíveis
                </Button>
            </div>
        </div>
    );
};

export default BlogCTA;
