import React from 'react';
import Button from '../../../components/UI/Button';
import FAQ from '../../../components/UI/FAQ';
import { Footprints, Shield, Layers, Hammer } from 'lucide-react';
import RevealOnScroll from '../../../components/UI/RevealOnScroll';

const CalosPage: React.FC = () => {
  const faqItems = [
    { question: "Dói remover o calo?", answer: "Não! O calo é formado por células mortas (queratina), que não possuem terminações nervosas. A remoção com bisturi é feita camada por camada, sem atingir a pele viva. É totalmente indolor e traz alívio imediato." },
    { question: "O calo volta?", answer: "O calo é uma resposta de defesa do corpo contra atrito ou pressão. Se você continuar usando o mesmo sapato apertado ou mantiver a pisada errada, ele voltará para 'proteger' o osso. Orientamos sobre calçados e palmilhas para evitar a recidiva." },
    { question: "Qual a diferença de calo e verruga plantar?", answer: "Muitas pessoas confundem. O calo dói quando pressionado diretamente. A verruga plantar (vírus HPV) dói quando pinçada lateralmente e costuma ter pontinhos pretos. O tratamento é completamente diferente." }
  ];

  return (
    <div className="pt-24 pb-0 bg-white">
      
      {/* 1. HERO - SENSORIAL */}
      <div className="relative bg-stone-200 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
            <RevealOnScroll variant="scale" className="w-full h-full">
                <img src="https://picsum.photos/id/1072/1920/1080" alt="Textura suave" className="w-full h-full object-cover opacity-50 grayscale" />
            </RevealOnScroll>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <RevealOnScroll variant="blur-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-900 text-xs font-bold uppercase tracking-[0.15em] mb-6 rounded-sm">
                <Footprints size={12} /> Desbastamento Indolor
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll variant="blur-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-none">
                Volte a Caminhar <br/><span className="italic text-stone-500">Nas Nuvens</span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll variant="blur-up" delay={300}>
            <p className="text-xl md:text-2xl text-stone-700 mb-10 leading-snug font-light max-w-3xl mx-auto">
                Sente que está pisando em pedras? Calos e hiperqueratose (pele grossa) causam queimação e desconforto. Devolvemos a maciez e a funcionalidade dos seus pés.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll variant="scale" delay={400}>
            <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="px-10 py-4 text-lg bg-stone-900 hover:bg-stone-800 text-white border-none shadow-lg">
                Agendar Horário
            </Button>
          </RevealOnScroll>
        </div>
      </div>

      {/* 2. EDUCAÇÃO - POR QUE ACONTECE? */}
      <section className="py-20 bg-white">
         <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="order-2 md:order-1">
                  <RevealOnScroll variant="left">
                    <h2 className="text-3xl font-serif text-stone-900 mb-6">Não é estético. É defesa.</h2>
                    <p className="text-stone-600 text-lg leading-relaxed mb-6">
                        O calo não nasce "do nada". Ele é a forma inteligente do seu corpo criar um escudo de proteção. Quando um sapato aperta ou um osso pisa torto, a pele engrossa para não rasgar.
                    </p>
                    <p className="text-stone-600 text-lg leading-relaxed mb-8">
                        Porém, quando esse escudo fica grosso demais, ele endurece e passa a funcionar como uma "pedra" no sapato, pressionando as terminações nervosas e causando dor aguda.
                    </p>
                    
                    <div className="p-6 bg-brand-50 border-l-4 border-brand-400 rounded-r-sm">
                        <p className="text-brand-900 font-medium text-sm">
                            <span className="font-bold block mb-1">Atenção:</span>
                            Nunca use lixas de ferro ou giletes em casa. Isso estimula o "efeito rebote", fazendo o calo voltar ainda mais grosso e duro em poucos dias.
                        </p>
                    </div>
                  </RevealOnScroll>
               </div>
               
               <div className="order-1 md:order-2 relative h-[400px] bg-stone-100 rounded-sm overflow-hidden shadow-lg">
                  <RevealOnScroll variant="right" className="w-full h-full">
                    <img src="https://picsum.photos/id/237/800/800" alt="Pés macios após tratamento" className="w-full h-full object-cover grayscale" />
                  </RevealOnScroll>
               </div>
            </div>
         </div>
      </section>

      {/* 3. TIPOS E TRATAMENTO - CARDS FLUTUANTES */}
      <section className="bg-stone-50 py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll variant="blur-up">
                <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900">O que removemos?</h2>
                </div>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-3 gap-8">
               <RevealOnScroll variant="scale" delay={0}>
                <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 hover:border-brand-200 transition-colors h-full">
                    <Layers size={32} className="text-brand-600 mb-6" />
                    <h3 className="text-xl font-bold text-stone-900 mb-3">Hiperqueratose</h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-4">
                        Aquela pele grossa, amarela e ressecada no calcanhar ou na planta do pé. Causa rachaduras (fissuras) que podem sangrar.
                    </p>
                    <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">Tratamento: Desbastamento</span>
                </div>
               </RevealOnScroll>

               <RevealOnScroll variant="scale" delay={150}>
                <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 hover:border-brand-200 transition-colors h-full">
                    <Shield size={32} className="text-brand-600 mb-6" />
                    <h3 className="text-xl font-bold text-stone-900 mb-3">Calo com Núcleo</h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-4">
                        Pequeno, circular e profundo. Tem um "núcleo" duro que penetra na carne como um prego. Muito comum em cima dos dedos ou na sola.
                    </p>
                    <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">Tratamento: Enucleação</span>
                </div>
               </RevealOnScroll>

               <RevealOnScroll variant="scale" delay={300}>
                <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 hover:border-brand-200 transition-colors h-full">
                    <Hammer size={32} className="text-brand-600 mb-6" />
                    <h3 className="text-xl font-bold text-stone-900 mb-3">Calo Mole</h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-4">
                        Fica entre os dedos, geralmente úmido e doloroso. Causado pelo atrito de um dedo contra o outro.
                    </p>
                    <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">Tratamento: Remoção + Afastador</span>
                </div>
               </RevealOnScroll>
            </div>
         </div>
      </section>

      <FAQ items={faqItems} title="Perguntas Frequentes" />
      
      <section className="bg-stone-900 py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <RevealOnScroll variant="blur-up">
            <h2 className="text-4xl font-serif mb-6">Pés macios e sem dor</h2>
            <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="bg-brand-600 hover:bg-brand-500 border-none text-white px-10 py-4 shadow-lg">
                Agendar Horário
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default CalosPage;