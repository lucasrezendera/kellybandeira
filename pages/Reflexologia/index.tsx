import React from 'react';
import Button from '../../components/UI/Button';
import { Activity, Brain, BatteryCharging, Heart, Moon, Zap, ArrowRight, Map, ShieldCheck, Smile, Radio } from 'lucide-react';
import RevealOnScroll from '../../components/UI/RevealOnScroll';

const ReflexologiaPage: React.FC = () => {
  const benefits = [
    {
      id: 1,
      title: "Alívio do Estresse e Ansiedade",
      description: "A estimulação de pontos específicos reduz os níveis de cortisol, promovendo um relaxamento profundo imediato.",
      icon: <Brain size={24} />
    },
    {
      id: 2,
      title: "Melhora do Sono (Insônia)",
      description: "Regulariza o ciclo do sono, ajudando quem tem dificuldade para dormir ou acorda cansado.",
      icon: <Moon size={24} />
    },
    {
      id: 3,
      title: "Equilíbrio do Sistema Digestivo",
      description: "Pontos reflexos ligados ao estômago e intestino ajudam a aliviar gastrite, constipação e desconfortos abdominais.",
      icon: <Activity size={24} />
    },
    {
      id: 4,
      title: "Alívio de Dores Crônicas",
      description: "Eficaz contra dores de cabeça, enxaquecas e dores nas costas, atuando como um analgésico natural.",
      icon: <Zap size={24} />
    },
    {
      id: 5,
      title: "Aumento da Energia Vital",
      description: "Desbloqueia fluxos de energia estagnados, combatendo a fadiga crônica e o desânimo.",
      icon: <BatteryCharging size={24} />
    },
    {
      id: 6,
      title: "Circulação Sanguínea",
      description: "Melhora o retorno venoso e a oxigenação dos tecidos, reduzindo inchaços e a sensação de peso nas pernas.",
      icon: <Heart size={24} />
    }
  ];

  return (
    <div className="pt-24 pb-0 bg-stone-50">
      
      {/* 1. Hero Section */}
      <div className="relative bg-stone-100 py-16 md:py-24 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-100/40 hidden lg:block skew-x-12 transform translate-x-32"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <RevealOnScroll variant="blur-up">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 border border-brand-100 text-brand-800 text-xs font-bold uppercase tracking-widest mb-6 rounded-sm shadow-sm">
              <Activity size={14} /> Terapia Integrativa
            </div>
           </RevealOnScroll>
          
          <RevealOnScroll variant="blur-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-none">
              Reflexologia Podal <br/><span className="italic text-brand-700">em Campinas</span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll variant="blur-up" delay={400}>
            <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-snug font-light max-w-3xl mx-auto">
              Seus pés carregam o mapa da sua saúde. Uma terapia milenar que equilibra corpo e mente através de toques precisos.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll variant="blur-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="px-8 py-4 text-lg shadow-lg">
                Agendar Horário
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* 2. Sintomas */}
      <div className="bg-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-stone-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll variant="scale" className="relative order-2 lg:order-1">
               <div className="relative rounded-t-[12rem] rounded-b-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/images/reflexologia.jpg" 
                    alt="Mulher relaxada recebendo reflexologia" 
                    className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-sm max-w-xs shadow-lg border-l-4 border-brand-500 hidden md:block">
                    <p className="text-brand-900 font-serif italic text-xl">"O relaxamento começa quando você se permite parar."</p>
                  </div>
               </div>
            </RevealOnScroll>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <RevealOnScroll variant="right">
                <span className="text-brand-600 font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Sinais do Corpo</span>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-none">
                  O corpo fala através <br/>
                  <span className="text-stone-400 italic">dos seus pés.</span>
                </h2>
                <p className="text-stone-600 text-lg font-light leading-relaxed mb-12">
                  O desequilíbrio interno raramente acontece em silêncio. Ele se manifesta em tensões e desconfortos. A reflexologia escuta esses sinais e atua na causa.
                </p>
                <div className="space-y-10">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <Brain size={28} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">Mente Acelerada</h3>
                      <p className="text-stone-500 font-light leading-relaxed">
                        Para quem sofre com ansiedade, pensamentos excessivos e dificuldade para "desligar" ao chegar em casa. Acalma o fluxo mental.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <Activity size={28} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">Dores Físicas sem Causa</h3>
                      <p className="text-stone-500 font-light leading-relaxed">
                        Enxaquecas frequentes, tensão nos ombros e desconfortos digestivos. Tratamos o ponto reflexo para aliviar a dor na origem.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <ShieldCheck size={28} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">Baixa Imunidade</h3>
                      <p className="text-stone-500 font-light leading-relaxed">
                        Para quem vive gripado ou se sentindo sem energia vital. A técnica estimula o sistema linfático e de defesa.
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Lista de Benefícios */}
      <div className="bg-stone-50 pt-16 pb-40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="blur-up">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 leading-tight">Benefícios Comprovados</h3>
              <p className="text-stone-600 font-light text-xl leading-snug">Muito além de uma massagem nos pés. É tratamento.</p>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <RevealOnScroll key={item.id} variant="scale" delay={index * 100} className="h-full">
                <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-200/60 flex flex-col h-full group text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-between mb-6">
                    <div className="p-3 bg-brand-50 rounded-full text-brand-700 group-hover:bg-brand-100 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-stone-900 mb-3">{item.title}</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Overlap Section: A Técnica */}
      <div className="relative z-30 -mt-24 px-4 max-w-7xl mx-auto">
        <RevealOnScroll variant="blur-up">
          <div className="bg-brand-800 rounded-sm overflow-hidden shadow-2xl text-white">
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-7 p-10 md:p-14 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-brand-200 mb-6">
                    <Map size={24} />
                    <span className="font-bold uppercase tracking-widest text-xs">Conhecimento Milenar</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-none">
                    Como funciona o <br/>
                    <span className="text-brand-200 italic">Mapa Podal?</span>
                  </h2>
                  <p className="text-brand-100/90 text-xl leading-relaxed mb-8 font-light">
                    A reflexologia parte do princípio de que existem micro-regiões nos pés que correspondem a cada órgão, glândula e estrutura do corpo humano.
                  </p>
                  <p className="text-brand-100/90 text-xl leading-relaxed mb-8 font-light">
                    Ao pressionar esses pontos reflexos, enviamos estímulos nervosos ao cérebro, que responde promovendo o equilíbrio (homeostase) na região correspondente. É uma forma natural de estimular o corpo a se curar.
                  </p>
                  <div className="lg:border-l border-brand-500 lg:pl-6 mt-8">
                    <p className="text-white italic font-serif text-xl">
                      "Não tratamos apenas o pé, tratamos a pessoa inteira através dos pés."
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-5 relative bg-stone-900 min-h-[300px] lg:min-h-full">
                  <img 
                    src="/images/reflexologia.jpg" 
                    alt="Mapa dos pontos reflexos nos pés" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-center lg:text-left">
                    <p className="text-xs uppercase tracking-widest text-brand-400 mb-2">A Sessão</p>
                    <p className="text-white font-light text-sm">
                      Duração de 50 minutos. Ambiente climatizado, som terapêutico e aromaterapia inclusa.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* 5. Seção de Fechamento */}
      <RevealOnScroll variant="blur-up">
        <section className="pt-32 pb-16 bg-stone-900 text-white relative z-10 -mt-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-5xl font-serif text-white mb-4 leading-none">Reconecte-se com sua essência</h2>
              <p className="text-xl text-stone-400 mb-10 max-w-2xl mx-auto font-light leading-snug">
                Muitas vezes, a resposta para o cansaço mental está no relaxamento físico. Permita-se parar e receber este cuidado.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="bg-brand-600 hover:bg-brand-500 text-white border-none shadow-lg px-10 py-4">
                  Agendar Horário
                </Button>
                <Button variant="outline" className="border-stone-600 text-stone-300 hover:bg-stone-800 hover:text-white" onClick={() => window.open('https://wa.me/5519999999999', '_blank')}>
                  Tirar Dúvidas
                </Button>
              </div>
          </div>
        </section>
      </RevealOnScroll>

    </div>
  );
};

export default ReflexologiaPage;