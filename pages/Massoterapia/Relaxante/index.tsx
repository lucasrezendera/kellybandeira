import React from 'react';
import Button from '../../../components/UI/Button';
import FAQ from '../../../components/UI/FAQ';
import { Sparkles, Wind, Moon, Clock, CheckCircle2, Brain, BatteryCharging, CloudRain } from 'lucide-react';
import RevealOnScroll from '../../../components/UI/RevealOnScroll';

const MassagemRelaxantePage: React.FC = () => {
  
  const faqItems = [
    {
      question: "Essa massagem dói?",
      answer: "Não. A pressão é leve a moderada, focada exclusivamente no conforto. Se busca soltar 'nós' profundos, recomendamos a Massagem Terapêutica."
    },
    {
      question: "O que devo vestir?",
      answer: "Oferecemos roupa íntima descartável e toalhas higienizadas. Nosso protocolo de 'draping' garante total privacidade durante o atendimento."
    },
    {
      question: "Gestantes podem fazer?",
      answer: "Sim, após a 12ª semana e com liberação médica. Utilizamos posicionamento lateral seguro para mamãe e bebê."
    },
    {
      question: "Diferença entre 60 e 90 minutos?",
      answer: "Em 90 minutos, trabalhamos o corpo todo com mais detalhe, incluindo massagem craniana, facial e pés, para um relaxamento profundo."
    }
  ];

  return (
    <div className="pt-24 pb-0 bg-stone-50">
      
      {/* 1. HERO SECTION - Estilo Premium */}
      <div className="relative bg-stone-100 py-24 md:py-32 overflow-hidden">
        {/* Elemento decorativo de fundo */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-50/50 hidden lg:block skew-x-12 transform translate-x-1/4"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <RevealOnScroll variant="blur-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-[0.15em] mb-6 rounded-sm">
                <Sparkles size={12} /> Anti-Stress & Bem-Estar
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-none">
                Massagem Relaxante <br/><span className="text-brand-400 italic">em Campinas</span>
                </h1>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={300}>
                <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-snug font-light max-w-3xl mx-auto">
                Desligue o mundo lá fora. Uma terapia manual focada em zerar o cortisol, dissolver a tensão mental e devolver seu equilíbrio.
                </p>
            </RevealOnScroll>
            
            <RevealOnScroll variant="scale" delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="px-10 py-4 text-lg shadow-xl bg-brand-800 hover:bg-brand-900">
                    Agendar Horário
                </Button>
                <div className="flex items-center justify-center gap-2 px-6 py-4 border border-stone-300 rounded-sm text-stone-600 bg-white/50 backdrop-blur-sm shadow-sm">
                    <Clock size={18} className="text-brand-600"/>
                    <span className="text-sm font-bold tracking-wide">60 ou 90 min</span>
                </div>
                </div>
            </RevealOnScroll>
        </div>
      </div>

      {/* 2. O PROBLEMA - Cards Estilo Terapêutica (Clean) */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <RevealOnScroll variant="blur-up">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-3 leading-tight">Sinais de Sobrecarga</h2>
                <p className="text-stone-600 font-light text-xl leading-snug">
                    Seu corpo não foi feito para viver em estado de alerta constante. Identifique os sinais:
                </p>
            </div>
           </RevealOnScroll>

           <div className="grid md:grid-cols-3 gap-6">
              {[
                  { icon: <Brain size={20} />, title: "Mente Agitada", desc: "Dificuldade para 'desligar' os pensamentos, ansiedade e irritabilidade constante." },
                  { icon: <Moon size={20} />, title: "Insônia", desc: "Sono picado ou acordar já cansada. O corpo não consegue entrar no estágio de relaxamento profundo." },
                  { icon: <BatteryCharging size={20} />, title: "Fadiga Crônica", desc: "Cansaço que não passa mesmo após o fim de semana. Sensação de 'bateria fraca'." }
              ].map((item, index) => (
                  <RevealOnScroll key={index} delay={index * 150} variant="scale">
                    <div className="bg-stone-50 p-6 rounded-sm border border-stone-100 h-full">
                        <div className="flex items-center gap-3 mb-3">
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

      {/* 3. BENEFÍCIOS - Grid com Espaço para Overlap (pb-56) */}
      <section className="bg-stone-50 pt-20 pb-56 relative z-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <RevealOnScroll variant="blur-up">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-3 leading-tight">Benefícios Imediatos</h2>
                <p className="text-stone-600 font-light text-xl leading-snug">
                    O que você sente logo após a primeira sessão.
                </p>
            </div>
           </RevealOnScroll>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 "Redução drástica do Cortisol (Stress)",
                 "Melhora na qualidade do sono",
                 "Diminuição da ansiedade",
                 "Hidratação profunda da pele",
                 "Sensação de paz interior",
                 "Reequilíbrio emocional"
               ].map((benefit, index) => (
                 <RevealOnScroll key={index} delay={index * 100} variant="scale">
                    <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-lg transition-all border border-stone-100 flex items-center gap-4">
                        <div className="bg-brand-50 p-2 rounded-full text-brand-600">
                        <CheckCircle2 size={20} />
                        </div>
                        <span className="text-stone-700 font-medium">{benefit}</span>
                    </div>
                 </RevealOnScroll>
               ))}
           </div>
         </div>
      </section>

      {/* 4. OVERLAP SECTION - O destaque visual */}
      <div className="relative z-30 -mt-32 px-4 max-w-7xl mx-auto">
        <RevealOnScroll variant="blur-up">
            <div className="bg-white rounded-sm overflow-hidden shadow-2xl border border-stone-100">
                <div className="grid lg:grid-cols-2">
                {/* Left: Content */}
                <div className="p-10 md:p-14 flex flex-col justify-center bg-white">
                    <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Experiência Sensorial</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                        Toque, Aroma e Silêncio.
                    </h2>
                    <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                        Não é apenas uma massagem. É um ritual. Utilizamos movimentos longos, deslizantes e fluidos (Effleurage) que comunicam ao sistema nervoso que é hora de parar.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="bg-brand-50 p-3 rounded-full h-fit text-brand-600 flex-shrink-0"><Wind size={20}/></div>
                            <div>
                                <h4 className="font-bold text-stone-900 text-lg">Aromaterapia Inclusa</h4>
                                <p className="text-stone-500 font-light">Óleos essenciais de Lavanda ou Capim Limão para indução profunda ao relaxamento.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-brand-50 p-3 rounded-full h-fit text-brand-600 flex-shrink-0"><CloudRain size={20}/></div>
                            <div>
                                <h4 className="font-bold text-stone-900 text-lg">Ambiente Preparado</h4>
                                <p className="text-stone-500 font-light">Luz baixa, som frequencial (ondas theta) e temperatura controlada.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right: Image */}
                <div className="relative min-h-[400px]">
                    <img src="https://picsum.photos/id/65/800/800" alt="Massagem Relaxante Spa" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
                </div>
                </div>
            </div>
        </RevealOnScroll>
      </div>

      {/* 5. CTA FINAL - Conectado ao overlap (-mt-20) */}
      <section className="bg-stone-900 pt-48 pb-20 relative z-10 -mt-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll variant="blur-up">
            <h2 className="text-5xl font-serif text-white mb-4 leading-none">Você merece essa pausa</h2>
            <p className="text-lg text-stone-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                Recarregue suas energias para cuidar melhor de tudo ao seu redor. Agende agora e sinta a diferença no seu dia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="bg-brand-600 hover:bg-brand-500 text-white border-none shadow-lg px-10 py-4">
                    Agendar Horário
                </Button>
                <Button variant="outline" className="border-stone-600 text-stone-300 hover:bg-stone-800 hover:text-white px-10 py-4" onClick={() => window.open('https://wa.me/5519999999999', '_blank')}>
                    Tirar Dúvidas
                </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ Opcional - Mantendo para utilidade, mas visualmente separado */}
      <FAQ items={faqItems} title="Perguntas Frequentes" className="bg-white border-t border-stone-200" />

    </div>
  );
};

export default MassagemRelaxantePage;