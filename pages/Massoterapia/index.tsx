import React from 'react';
import Button from '../../components/UI/Button';
import { Sparkles, Droplets, Activity, Flame, Trophy, HeartPulse, CheckCircle2, ArrowRight, Flower2, Sliders, Fingerprint, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../../components/UI/RevealOnScroll';

const MassoterapiaPage: React.FC = () => {
  const therapies = [
    {
      id: 1,
      title: "Massagem Relaxante & Anti-Estresse",
      description: "Combate direto aos sintomas de ansiedade, insônia e fadiga mental. Utiliza movimentos suaves para baixar o cortisol e relaxar a musculatura tensa pelo estresse do trabalho.",
      icon: <Sparkles size={24} />,
      indication: "Indicado para: Ansiedade, cansaço excessivo e insônia.",
      link: "/massoterapia/relaxante" 
    },
    {
      id: 2,
      title: "Massagem Terapêutica (Dor nas Costas)",
      description: "Foco total na eliminação de dores. Tratamento específico para lombalgia, cervicalgia, torcicolo e dores causadas por má postura ou muito tempo sentado.",
      icon: <HeartPulse size={24} />,
      indication: "Indicado para: Dores nas costas, pescoço travado e 'nós' musculares.",
      link: "/massoterapia/terapeutica" 
    },
    {
      id: 3,
      title: "Drenagem Linfática (Xô Inchaço)",
      description: "Técnica manual sem dor que elimina a retenção de líquidos e toxinas. Reduz medidas instantaneamente pelo desinchaço e melhora a sensação de pernas pesadas.",
      icon: <Droplets size={24} />,
      indication: "Indicado para: Retenção de líquido, pós-operatório e gestantes.",
      link: "/massoterapia/drenagem"
    },
    {
      id: 4,
      title: "Liberação Miofascial",
      description: "Técnica profunda para soltar a fáscia (tecido que envolve o músculo). Resolve limitações de movimento e dores crônicas que massagens comuns não resolvem.",
      icon: <Activity size={24} />,
      indication: "Indicado para: Rigidez muscular, atletas e dores crônicas.",
      link: "/massoterapia/miofascial"
    },
    {
      id: 5,
      title: "Massagem Desportiva",
      description: "Preparo e recuperação muscular. Acelera a recuperação pós-treino, previne lesões e melhora a performance física através da liberação de ácido lático.",
      icon: <Trophy size={24} />,
      indication: "Indicado para: Praticantes de musculação, corrida e esportes.",
      link: "/massoterapia/desportiva"
    },
    {
      id: 6,
      title: "Pedras Quentes",
      description: "A união do calor com a massagem. O calor penetra profundamente nos músculos, proporcionando um relaxamento muscular superior e alívio imediato de tensões.",
      icon: <Flame size={24} />,
      indication: "Indicado para: Dias frios e tensão muscular profunda.",
      link: "/massoterapia/pedras-quentes"
    }
  ];

  return (
    <div className="pt-24 pb-0">
      
      {/* Hero Section */}
      <div className="relative bg-stone-100 py-16 md:py-24 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-50/50 hidden lg:block skew-x-12 transform translate-x-1/4"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
            <RevealOnScroll variant="blur-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                 <HeartPulse size={14} /> Terapias Manuais
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="blur-up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-none">
                Massoterapia Especializada <br/><span className="text-brand-400 italic">em Campinas</span>
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={400}>
              <p className="text-xl md:text-2xl text-stone-600 font-light mb-10 max-w-3xl mx-auto leading-snug">
                Chega de viver com dor ou tensão. Protocolos manuais focados em resultados reais: elimine dores nas costas, reduza o inchaço e recupere sua disposição.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="px-10 py-4 text-lg font-bold shadow-xl">
                  Agendar Horário
                </Button>
              </div>
            </RevealOnScroll>
        </div>
      </div>

      {/* Seção de Identificação */}
      <div className="bg-white py-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-stone-50 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Coluna Visual */}
              <RevealOnScroll variant="scale" className="relative order-2 lg:order-1">
                <div className="relative rounded-t-[12rem] rounded-b-lg overflow-hidden shadow-2xl">
                    <img 
                        src="/images/massoterapia.jpg" 
                        alt="Massagem terapêutica relaxante" 
                        className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
                    
                    <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-sm max-w-xs shadow-lg border-l-4 border-brand-500 hidden md:block">
                        <p className="text-brand-900 font-serif italic text-xl">"O corpo fala. Escute os sinais."</p>
                    </div>
                </div>
              </RevealOnScroll>

              {/* Coluna de Conteúdo */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <RevealOnScroll variant="right">
                  <span className="text-brand-600 font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Sintomas Comuns</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-none">
                      Sinais de que você <br/>
                      <span className="text-stone-400 italic">precisa parar.</span>
                  </h2>
                  <p className="text-stone-600 text-lg font-light leading-relaxed mb-12">
                      O corpo não foi feito para viver em estado de alerta constante ou suportar dores "normais". Identifique os avisos de que seu limite chegou.
                  </p>

                  <div className="space-y-10">
                      {/* Item 1 */}
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                      <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                          <Activity size={28} strokeWidth={1.5} />
                          </div>
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">Dores Musculares</h3>
                          <p className="text-stone-500 font-light leading-relaxed">
                          Dores constantes na lombar, pescoço travado ou tensão nos ombros por ficar muito tempo sentado. O corpo pede alívio mecânico.
                          </p>
                      </div>
                      </div>

                      {/* Item 2 */}
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                      <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                          <Droplets size={28} strokeWidth={1.5} />
                          </div>
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">Inchaço & Peso</h3>
                          <p className="text-stone-500 font-light leading-relaxed">
                          Sensação de pernas pesadas e inchadas ao final do dia. Sinal de que o sistema linfático precisa de ajuda para drenar toxinas.
                          </p>
                      </div>
                      </div>

                      {/* Item 3 */}
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                      <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                          <Brain size={28} strokeWidth={1.5} />
                          </div>
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">Estresse & Insônia</h3>
                          <p className="text-stone-500 font-light leading-relaxed">
                          Irritabilidade, ansiedade e dificuldade para dormir. O toque terapêutico reduz o cortisol e devolve o equilíbrio mental.
                          </p>
                      </div>
                      </div>
                  </div>
                </RevealOnScroll>
              </div>

          </div>
          </div>
      </div>

      {/* Grid de Serviços */}
      <div className="bg-stone-50 pt-16 pb-40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="blur-up">
            <div className="text-center mb-12 max-w-4xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 leading-tight">Escolha seu Tratamento</h3>
                <p className="text-stone-600 font-light text-xl leading-snug">
                Nossos protocolos são personalizados. Se tiver dúvida, nossa equipe irá indicar a melhor técnica para o seu caso na avaliação.
                </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapies.map((therapy, index) => (
              <RevealOnScroll key={therapy.id} delay={index * 100} className="h-full">
                <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-200/60 flex flex-col h-full text-center lg:text-left">
                    <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-brand-100 rounded-full text-brand-800">
                        {therapy.icon}
                    </div>
                    <ArrowRight size={20} className="text-stone-300" />
                    </div>
                    <h4 className="text-xl font-bold text-stone-900 mb-3">{therapy.title}</h4>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
                    {therapy.description}
                    </p>
                    
                    {therapy.link ? (
                    <Link to={therapy.link} className="inline-flex items-center justify-center lg:justify-start text-brand-700 font-bold uppercase tracking-wide text-xs hover:text-brand-900 transition-colors mt-auto border-t border-stone-100 pt-4">
                        Saiba Mais <ArrowRight size={14} className="ml-1" />
                    </Link>
                    ) : (
                    <div className="pt-4 border-t border-stone-100 mt-auto">
                        <p className="text-xs font-bold text-brand-700 uppercase tracking-wide bg-brand-50 inline-block px-2 py-1 rounded">
                            {therapy.indication}
                        </p>
                    </div>
                    )}

                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* NOVA SEÇÃO: Personalização */}
      <div className="relative z-30 -mt-24 px-4 max-w-7xl mx-auto">
          <RevealOnScroll variant="blur-up">
            <div className="bg-stone-900 rounded-sm overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                    <div className="absolute inset-0 bg-brand-900/10 z-10"></div>
                    <img 
                    src="https://picsum.photos/id/514/800/800" 
                    alt="Óleos essenciais e personalização" 
                    className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center text-center lg:text-left">
                    <span className="text-brand-400 font-bold tracking-[0.2em] text-xs uppercase mb-3">Experiência Única</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 leading-tight">
                    Não existe massagem padrão.<br/>
                    <span className="italic text-brand-300">Existe a que você precisa.</span>
                    </h2>
                    
                    <div className="space-y-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
                        <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center flex-shrink-0 text-brand-400">
                        <Fingerprint size={24} />
                        </div>
                        <div>
                        <h4 className="text-white font-bold text-lg mb-1">Toque Personalizado</h4>
                        <p className="text-stone-400 text-sm leading-relaxed">
                            Avaliamos sua tensão muscular antes de começar.
                        </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
                        <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center flex-shrink-0 text-brand-400">
                        <Flower2 size={24} />
                        </div>
                        <div>
                        <h4 className="text-white font-bold text-lg mb-1">Aromaterapia Inclusa</h4>
                        <p className="text-stone-400 text-sm leading-relaxed">
                            Óleos essenciais escolhidos para acalmar ou energizar.
                        </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
                        <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center flex-shrink-0 text-brand-400">
                        <Sliders size={24} />
                        </div>
                        <div>
                        <h4 className="text-white font-bold text-lg mb-1">Pressão Ideal</h4>
                        <p className="text-stone-400 text-sm leading-relaxed">
                            Do relaxamento suave à liberação profunda. Você decide.
                        </p>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
            </div>
          </RevealOnScroll>
      </div>

      {/* Call to Action Final */}
      <RevealOnScroll variant="blur-up">
        <div className="bg-stone-900 pt-32 pb-16 relative z-10 -mt-20 border-t border-stone-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-serif text-white mb-4 leading-none">Seu corpo precisa desse cuidado</h2>
            <p className="text-xl text-stone-400 mb-8 max-w-2xl mx-auto leading-snug">
                Atendimento com hora marcada, sem atrasos, em ambiente climatizado e exclusivo. Valores justos para um serviço de excelência.
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
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default MassoterapiaPage;