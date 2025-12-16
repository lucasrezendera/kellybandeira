import React from 'react';
import Button from '../../components/UI/Button';
import { Calendar, MessageCircle } from 'lucide-react';
import RevealOnScroll from '../../components/UI/RevealOnScroll';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-16 overflow-hidden bg-stone-100 min-h-[80vh] flex items-center">
      {/* Background Image with Overlay - Scale Effect */}
      <div className="absolute inset-0 z-0">
        <RevealOnScroll variant="scale" className="w-full h-full">
            <img 
            src="https://picsum.photos/id/431/1920/1080" 
            alt="Ambiente de spa relaxante e limpo" 
            className="w-full h-full object-cover opacity-90 transition-transform duration-[2s] hover:scale-105"
            />
        </RevealOnScroll>
        <div className="absolute inset-0 bg-white/60 sm:bg-white/50 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
          
          <RevealOnScroll variant="blur-up">
            <div className="inline-block px-4 py-1.5 mb-6 border-l-4 border-brand-500 bg-white/80 backdrop-blur-sm shadow-sm">
                <span className="text-xs font-bold tracking-[0.25em] text-brand-900 uppercase">
                Referência em Campinas
                </span>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll variant="blur-up" delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 leading-none mb-6">
                Cuidado Especializado. <br/>
                <span className="italic text-brand-800">Bem-estar Absoluto.</span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll variant="blur-up" delay={400}>
            <p className="text-xl md:text-2xl text-stone-700 mb-8 leading-snug font-light max-w-2xl mx-auto lg:mx-0">
                Podologia clínica e massoterapia terapêutica de alto padrão. Recupere sua saúde e equilíbrio com quem é referência na cidade.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll variant="blur-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="gap-3 shadow-xl text-lg px-10 py-5">
                <Calendar size={20} />
                Agendar Horário
                </Button>
                <Button variant="outline" onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="gap-3 bg-white/60 hover:bg-white backdrop-blur-sm border-stone-400 text-lg px-10 py-5">
                <MessageCircle size={20} />
                Tirar Dúvidas
                </Button>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Hero;