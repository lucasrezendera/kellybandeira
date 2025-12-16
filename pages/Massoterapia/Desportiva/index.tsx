import React from 'react';
import Button from '../../../components/UI/Button';
import FAQ from '../../../components/UI/FAQ';
import { Trophy, Timer, Zap, Target, Activity, CheckCircle2, Dumbbell, Repeat } from 'lucide-react';
import RevealOnScroll from '../../../components/UI/RevealOnScroll';

const DesportivaPage: React.FC = () => {
  
  const faqItems = [
    {
      question: "Devo fazer antes ou depois do treino?",
      answer: "Depende do objetivo. A pré-evento é rápida e vigorosa para aquecer (preparar). A pós-evento (recovery) é mais lenta e profunda para drenar ácido lático e relaxar."
    },
    {
      question: "É só para atletas profissionais?",
      answer: "Não! É indicada para qualquer pessoa que pratica atividade física regular (musculação, corrida, crossfit, tênis) e quer evitar lesões."
    },
    {
      question: "Com que frequência devo fazer?",
      answer: "Para quem treina intensamente, recomendamos 1 vez por semana ou quinzenalmente para manutenção e prevenção."
    }
  ];

  return (
    <div className="pt-24 pb-0 bg-stone-50">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-stone-100 py-24 md:py-32 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-red-50/50 hidden lg:block skew-x-12 transform translate-x-1/4"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <RevealOnScroll variant="blur-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-brand-800 text-xs font-bold uppercase tracking-[0.15em] mb-6 rounded-sm">
                <Trophy size={12} /> Alta Performance
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-none">
                Massagem <span className="text-brand-700">Desportiva</span>
                </h1>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={300}>
                <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-snug font-light max-w-3xl mx-auto">
                Prepare sua musculatura para o esforço máximo e acelere sua recuperação pós-treino. A escolha inteligente para quem leva o corpo a sério.
                </p>
            </RevealOnScroll>
            
            <RevealOnScroll variant="scale" delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="px-10 py-4 text-lg shadow-xl bg-brand-800 hover:bg-brand-900">
                    Agendar Horário
                </Button>
                </div>
            </RevealOnScroll>
        </div>
      </div>

      {/* 2. O PROBLEMA - Sinais */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <RevealOnScroll variant="blur-up">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-3 leading-tight">Treine, Recupere, Repita.</h2>
                <p className="text-stone-600 font-light text-xl leading-snug">
                    A falta de recuperação adequada é a principal causa de lesões e estagnação nos resultados.
                </p>
            </div>
           </RevealOnScroll>

           <div className="grid md:grid-cols-3 gap-6">
              {[
                  { icon: <Activity size={20} />, title: "Fadiga Muscular", desc: "Acúmulo de ácido lático e toxinas que deixam o músculo 'pesado', dolorido e sem força para o próximo treino." },
                  { icon: <Target size={20} />, title: "Risco de Lesão", desc: "Músculos tensos e encurtados estão mais propensos a distensões e estiramentos durante movimentos explosivos." },
                  { icon: <Timer size={20} />, title: "Queda de Performance", desc: "Seu corpo não consegue atingir o pico de performance se estiver ocupado tentando 'consertar' microlesões antigas." }
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

      {/* 3. BENEFÍCIOS */}
      <section className="bg-stone-50 pt-20 pb-56 relative z-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <RevealOnScroll variant="blur-up">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-3 leading-tight">Vantagens do Atleta</h2>
                <p className="text-stone-600 font-light text-xl leading-snug">
                    Técnicas específicas para manipular tecidos moles e otimizar sua fisiologia.
                </p>
            </div>
           </RevealOnScroll>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 "Remoção de resíduos metabólicos (Lactato)",
                 "Melhora da oxigenação muscular",
                 "Relaxamento de áreas sobrecarregadas",
                 "Preparo mental para competição",
                 "Flexibilidade e elasticidade",
                 "Identificação precoce de lesões"
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

      {/* 4. OVERLAP SECTION */}
      <div className="relative z-30 -mt-32 px-4 max-w-7xl mx-auto">
        <RevealOnScroll variant="blur-up">
            <div className="bg-white rounded-sm overflow-hidden shadow-2xl border border-stone-100">
                <div className="grid lg:grid-cols-2">
                {/* Left: Content */}
                <div className="p-10 md:p-14 flex flex-col justify-center bg-white">
                    <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Protocolos</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                        Pré ou Pós Treino?
                    </h2>
                    <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                        A técnica muda completamente dependendo do seu momento. Adaptamos a sessão ao seu calendário de treinos.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="bg-red-50 p-3 rounded-full h-fit text-brand-600 flex-shrink-0"><Zap size={20}/></div>
                            <div>
                                <h4 className="font-bold text-stone-900 text-lg">Pré-Treino (Ativação)</h4>
                                <p className="text-stone-500 font-light">Movimentos rápidos e superficiais para aquecer, despertar a musculatura e aumentar o fluxo sanguíneo.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-red-50 p-3 rounded-full h-fit text-brand-600 flex-shrink-0"><Repeat size={20}/></div>
                            <div>
                                <h4 className="font-bold text-stone-900 text-lg">Pós-Treino (Recovery)</h4>
                                <p className="text-stone-500 font-light">Movimentos lentos, profundos e drenantes para "limpar" o músculo e acalmar o sistema nervoso.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right: Image */}
                <div className="relative min-h-[400px]">
                    <img src="https://picsum.photos/id/1081/800/800" alt="Massagem Desportiva" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
                </div>
                </div>
            </div>
        </RevealOnScroll>
      </div>

      {/* 5. CTA FINAL */}
      <section className="bg-stone-900 pt-48 pb-20 relative z-10 -mt-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll variant="blur-up">
            <h2 className="text-5xl font-serif text-white mb-4 leading-none">Melhore sua Performance</h2>
            <p className="text-lg text-stone-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                Seu corpo é seu principal equipamento. Faça a manutenção preventiva que ele precisa.
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

      <FAQ items={faqItems} title="Dúvidas sobre Desportiva" className="bg-white border-t border-stone-200" />

    </div>
  );
};

export default DesportivaPage;