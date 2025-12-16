import React from 'react';
import Button from '../../../components/UI/Button';
import FAQ from '../../../components/UI/FAQ';
import { HeartPulse, Activity, CheckCircle2, AlertTriangle, Crosshair, Ban, ArrowRight } from 'lucide-react';
import RevealOnScroll from '../../../components/UI/RevealOnScroll';

const MassagemTerapeuticaPage: React.FC = () => {
  
  const faqItems = [
    {
      question: "Qual a diferença entre a Terapêutica e a Relaxante?",
      answer: "A Relaxante foca em baixar o estresse e promover sono. A Terapêutica foca em eliminar dores específicas, 'nós' musculares e contraturas, usando pressão mais firme e mobilizações."
    },
    {
      question: "Essa massagem dói?",
      answer: "Pode haver um leve desconforto (a 'dor boa') nos pontos de tensão, mas a pressão é sempre ajustada ao seu limite. O objetivo é o alívio."
    },
    {
      question: "Quantas sessões são necessárias?",
      answer: "Para dores agudas, 1 a 3 sessões costumam resolver. Para dores crônicas, recomendamos tratamento contínuo para reeducação muscular."
    }
  ];

  return (
    <div className="pt-24 pb-0 bg-white">
      
      {/* 1. HERO - Centralizado por padrão */}
      <div className="relative py-12 md:py-16 overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <RevealOnScroll variant="scale" className="w-full h-full">
            <img 
                src="https://picsum.photos/id/1029/1920/1080" 
                alt="Tratamento de dor nas costas" 
                className="w-full h-full object-cover grayscale-[20%]"
            />
          </RevealOnScroll>
          <div className="absolute inset-0 bg-white/85 bg-gradient-to-t from-white via-white/70 to-white/40"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <RevealOnScroll variant="blur-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-700 text-white text-xs font-bold uppercase tracking-[0.15em] mb-6 rounded-sm">
                <HeartPulse size={12} /> Alívio da Dor
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-4 leading-tight">
                Massagem Terapêutica
                </h1>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={300}>
                <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed font-light max-w-xl mx-auto">
                Especializada em dores lombares, tensão cervical e rigidez. Tratamos a causa mecânica da dor, não apenas o sintoma.
                </p>
            </RevealOnScroll>
            
            <RevealOnScroll variant="scale" delay={400}>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="px-8 py-3 shadow-lg bg-brand-800 hover:bg-brand-900">
                    Agendar Horário
                </Button>
                <Button variant="outline" onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="px-8 py-3 border-stone-400 text-stone-600">
                    Tirar Dúvidas
                </Button>
                </div>
            </RevealOnScroll>
        </div>
      </div>

      {/* 2. O PROBLEMA - Compacto */}
      <section className="py-16 border-b border-stone-50">
        <div className="max-w-6xl mx-auto px-4">
           <RevealOnScroll variant="blur-up">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Viver com dor não é normal</h2>
                <p className="text-stone-500 font-light max-w-2xl mx-auto">
                    A rotina de escritório e o estresse criam padrões que travam seu corpo. Identifique os sinais:
                </p>
            </div>
           </RevealOnScroll>

           <div className="grid md:grid-cols-3 gap-6">
              {[
                  { icon: <AlertTriangle size={20} />, title: "Pescoço Travado", desc: "Torcicolo ou peso nos ombros (trapézio). Tensão emocional ou má postura." },
                  { icon: <Activity size={20} />, title: "Lombalgia", desc: "Dor no final das costas e desconforto ao levantar. Comum em quem senta muito." },
                  { icon: <Ban size={20} />, title: "Limitação", desc: "Sensação de corpo 'enferrujado', dificuldade para girar ou se abaixar." }
              ].map((item, index) => (
                  <RevealOnScroll key={index} delay={index * 150} variant="scale">
                    <div className="bg-stone-50 p-6 rounded-sm border border-stone-100 text-center lg:text-left h-full">
                        <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
                            <div className="text-brand-600">{item.icon}</div>
                            <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
                        </div>
                        <p className="text-stone-500 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                  </RevealOnScroll>
              ))}
           </div>
        </div>
      </section>

      {/* 3. A TÉCNICA - Lado a Lado Compacto */}
      <section className="py-16">
         <div className="max-w-6xl mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Imagem Clean */}
              <RevealOnScroll variant="left" className="relative h-[400px] w-full bg-stone-100 rounded-sm overflow-hidden shadow-lg order-2 lg:order-1">
                 <img 
                   src="https://picsum.photos/id/1025/800/800" 
                   alt="Terapia manual" 
                   className="w-full h-full object-cover"
                 />
              </RevealOnScroll>

              {/* Texto */}
              <RevealOnScroll variant="right" className="order-1 lg:order-2 text-center lg:text-left">
                 <div>
                    <span className="text-brand-600 font-bold tracking-widest text-xs uppercase mb-2 block">Metodologia</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4 leading-tight">
                    Técnica manual e precisão.
                    </h2>
                    <p className="text-stone-600 font-light leading-relaxed mb-8">
                    Um protocolo clínico que identifica a origem da dor e libera a tensão acumulada nas fibras musculares.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-center lg:items-start flex-col lg:flex-row">
                        <Crosshair className="text-brand-600 mt-1 flex-shrink-0" size={20} />
                        <div>
                            <h4 className="font-bold text-stone-900 text-sm">Liberação de Trigger Points</h4>
                            <p className="text-stone-500 text-sm">Pressionamos os "nós" que causam dor.</p>
                        </div>
                        </div>

                        <div className="flex gap-4 items-center lg:items-start flex-col lg:flex-row">
                        <Activity className="text-brand-600 mt-1 flex-shrink-0" size={20} />
                        <div>
                            <h4 className="font-bold text-stone-900 text-sm">Liberação Miofascial</h4>
                            <p className="text-stone-500 text-sm">Soltura da fáscia para devolver mobilidade.</p>
                        </div>
                        </div>
                    </div>
                 </div>
              </RevealOnScroll>

           </div>
         </div>
      </section>

      {/* 4. RESULTADOS */}
      <section className="py-16 border-t border-stone-100 bg-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <RevealOnScroll variant="blur-up">
                <h2 className="text-2xl font-serif text-stone-900 mb-8">Resultados Esperados</h2>
            </RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
               {[
                 "Alívio imediato da dor",
                 "Amplitude de movimento",
                 "Corpo mais leve",
                 "Melhora na postura",
                 "Circulação ativada"
               ].map((benefit, index) => (
                 <RevealOnScroll key={index} delay={index * 100} variant="scale">
                    <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-full border border-stone-100">
                        <CheckCircle2 className="text-brand-600" size={16} />
                        <span className="text-stone-700 text-sm font-medium">{benefit}</span>
                    </div>
                 </RevealOnScroll>
               ))}
            </div>
         </div>
      </section>

      {/* 5. FAQ */}
      <FAQ items={faqItems} title="Dúvidas Frequentes" className="py-16" />

      {/* 6. CTA FINAL */}
      <section className="bg-stone-900 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <RevealOnScroll variant="blur-up">
            <h2 className="text-4xl font-serif text-white mb-4">Chega de sentir dor</h2>
            <p className="text-lg text-stone-400 mb-8 font-light">
                Seu corpo é sua ferramenta de vida. Cuide dele com quem entende.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="bg-brand-600 hover:bg-brand-500 text-white border-none shadow-lg px-8 py-3">
                    Agendar Horário
                </Button>
                <Button variant="outline" className="border-stone-600 text-stone-300 hover:bg-stone-800 hover:text-white px-8 py-3" onClick={() => window.open('https://wa.me/5519999999999', '_blank')}>
                    Tirar Dúvidas
                </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default MassagemTerapeuticaPage;