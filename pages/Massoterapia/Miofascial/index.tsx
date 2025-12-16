import React from 'react';
import Button from '../../../components/UI/Button';
import FAQ from '../../../components/UI/FAQ';
import { Activity, Layers, Zap, Unlock, Move, ShieldAlert, CheckCircle2, GripHorizontal } from 'lucide-react';
import RevealOnScroll from '../../../components/UI/RevealOnScroll';

const MiofascialPage: React.FC = () => {
  
  const faqItems = [
    {
      question: "O que é a Fáscia?",
      answer: "É uma membrana de tecido conjuntivo que envolve todos os músculos, ossos e órgãos. Quando ela fica rígida (aderida), causa dor e limita o movimento."
    },
    {
      question: "A liberação miofascial dói?",
      answer: "É uma técnica intensa. Você pode sentir um desconforto tolerável durante a manipulação dos pontos gatilho, mas a sensação de alívio e liberdade pós-sessão é imediata."
    },
    {
      question: "É indicada para quem não treina?",
      answer: "Sim! Má postura no trabalho, estresse e sedentarismo também 'grudam' a fáscia. É excelente para dores crônicas nas costas e pescoço."
    }
  ];

  return (
    <div className="pt-24 pb-0 bg-stone-50">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-stone-100 py-24 md:py-32 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-orange-50/50 hidden lg:block skew-x-12 transform translate-x-1/4"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <RevealOnScroll variant="blur-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-brand-800 text-xs font-bold uppercase tracking-[0.15em] mb-6 rounded-sm">
                <Activity size={12} /> Terapia da Dor
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-none">
                Liberação <span className="text-brand-600">Miofascial</span>
                </h1>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={300}>
                <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-snug font-light max-w-3xl mx-auto">
                Muito além da massagem. Uma técnica profunda que solta as aderências do tecido muscular, devolvendo sua amplitude de movimento e eliminando dores crônicas.
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
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-3 leading-tight">Você se sente "Travado"?</h2>
                <p className="text-stone-600 font-light text-xl leading-snug">
                    Quando a fáscia perde elasticidade, o corpo funciona como se estivesse usando uma roupa apertada demais.
                </p>
            </div>
           </RevealOnScroll>

           <div className="grid md:grid-cols-3 gap-6">
              {[
                  { icon: <Unlock size={20} />, title: "Rigidez Muscular", desc: "Dificuldade para alongar, sensação de encurtamento constante e mobilidade reduzida, mesmo sem lesão aparente." },
                  { icon: <ShieldAlert size={20} />, title: "Dor Crônica", desc: "Aquelas dores que a massagem relaxante resolve na hora, mas voltam no dia seguinte. O problema está na fáscia." },
                  { icon: <Zap size={20} />, title: "Pontos Gatilho", desc: "Nódulos sensíveis ao toque ('caroços') que irradiam dor para outras partes do corpo quando pressionados." }
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
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-3 leading-tight">Liberdade Corporal</h2>
                <p className="text-stone-600 font-light text-xl leading-snug">
                    Resgate a capacidade natural de movimento do seu corpo.
                </p>
            </div>
           </RevealOnScroll>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 "Aumento da amplitude de movimento",
                 "Melhora da postura",
                 "Prevenção de lesões musculares",
                 "Melhor desempenho nos treinos",
                 "Alívio de dores de cabeça tensionais",
                 "Recuperação muscular acelerada"
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
                    <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">A Abordagem</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                        Manual ou Instrumental?
                    </h2>
                    <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                        Utilizamos uma combinação de técnicas. A pressão manual profunda localiza os pontos de tensão, e quando necessário, utilizamos instrumentos (raspadore) para soltar aderências mais resistentes.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="bg-orange-50 p-3 rounded-full h-fit text-brand-600 flex-shrink-0"><Layers size={20}/></div>
                            <div>
                                <h4 className="font-bold text-stone-900 text-lg">Trabalho da Fáscia</h4>
                                <p className="text-stone-500 font-light">Deslizamos as camadas de tecido para que elas voltem a se mover livremente umas sobre as outras.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-orange-50 p-3 rounded-full h-fit text-brand-600 flex-shrink-0"><GripHorizontal size={20}/></div>
                            <div>
                                <h4 className="font-bold text-stone-900 text-lg">Fricção Profunda</h4>
                                <p className="text-stone-500 font-light">Pressão sustentada e movimentos de fricção para dissolver fibroses.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right: Image */}
                <div className="relative min-h-[400px]">
                    <img src="https://picsum.photos/id/106/800/800" alt="Liberação Miofascial" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-stone-900/20 mix-blend-multiply"></div>
                </div>
                </div>
            </div>
        </RevealOnScroll>
      </div>

      {/* 5. CTA FINAL */}
      <section className="bg-stone-900 pt-48 pb-20 relative z-10 -mt-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll variant="blur-up">
            <h2 className="text-5xl font-serif text-white mb-4 leading-none">Destrave seu corpo</h2>
            <p className="text-lg text-stone-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                Ideal para atletas de crossfit, musculação, corrida e também para quem trabalha muitas horas na mesma posição.
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

      <FAQ items={faqItems} title="Perguntas Frequentes" className="bg-white border-t border-stone-200" />

    </div>
  );
};

export default MiofascialPage;