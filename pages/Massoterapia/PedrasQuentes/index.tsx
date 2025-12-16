import React from 'react';
import Button from '../../../components/UI/Button';
import FAQ from '../../../components/UI/FAQ';
import { Flame, Sun, ThermometerSun, CheckCircle2, Cloud, Sparkles, Gem } from 'lucide-react';
import RevealOnScroll from '../../../components/UI/RevealOnScroll';

const PedrasQuentesPage: React.FC = () => {
  
  const faqItems = [
    {
      question: "As pedras queimam a pele?",
      answer: "Não. As pedras vulcânicas são aquecidas em água a uma temperatura controlada e segura, testada sempre antes do contato com a pele."
    },
    {
      question: "Qual o benefício do calor?",
      answer: "O calor causa vasodilatação, o que aumenta o fluxo sanguíneo e relaxa a musculatura profunda muito mais rápido do que apenas as mãos."
    },
    {
      question: "Quanto tempo dura?",
      answer: "Geralmente 90 minutos. É um ritual lento, que envolve a colocação das pedras nos chakras e a massagem com as pedras deslizando no óleo."
    }
  ];

  return (
    <div className="pt-24 pb-0 bg-stone-50">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-stone-100 py-24 md:py-32 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-amber-50/50 hidden lg:block skew-x-12 transform translate-x-1/4"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <RevealOnScroll variant="blur-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-brand-800 text-xs font-bold uppercase tracking-[0.15em] mb-6 rounded-sm">
                <Flame size={12} /> Termoterapia
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-none">
                Massagem com <br/><span className="text-amber-700 italic">Pedras Quentes</span>
                </h1>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={300}>
                <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-snug font-light max-w-3xl mx-auto">
                A união do calor das pedras vulcânicas com a massagem relaxante. Uma experiência sensorial profunda que derrete a tensão muscular.
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
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-3 leading-tight">O Poder da Geoterapia</h2>
                <p className="text-stone-600 font-light text-xl leading-snug">
                    Ideal para dias frios ou para quem sente dificuldade em relaxar apenas com o toque manual.
                </p>
            </div>
           </RevealOnScroll>

           <div className="grid md:grid-cols-3 gap-6">
              {[
                  { icon: <ThermometerSun size={20} />, title: "Tensão Profunda", desc: "O calor penetra nas camadas mais profundas do músculo, soltando rigidez que as mãos sozinhas demorariam para alcançar." },
                  { icon: <Cloud size={20} />, title: "Ansiedade Extrema", desc: "O peso e o calor das pedras sobre pontos específicos (chakras) induzem a um estado quase meditativo de calma." },
                  { icon: <Sun size={20} />, title: "Circulação Lenta", desc: "A vasodilatação provocada pelo calor melhora a distribuição de nutrientes pelo corpo e oxigena os tecidos." }
              ].map((item, index) => (
                  <RevealOnScroll key={index} delay={index * 150} variant="scale">
                    <div className="bg-stone-50 p-6 rounded-sm border border-stone-100 h-full">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="text-amber-600">{item.icon}</div>
                            <h3 className="text-lg font-bold text-stone-800">{item.title}</h3>
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
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-3 leading-tight">Harmonia Total</h2>
                <p className="text-stone-600 font-light text-xl leading-snug">
                    Equilíbrio físico, mental e energético.
                </p>
            </div>
           </RevealOnScroll>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 "Relaxamento muscular imediato",
                 "Alívio de cólicas menstruais",
                 "Redução do estresse e insônia",
                 "Equilíbrio energético",
                 "Hidratação da pele (óleos nobres)",
                 "Sensação de acolhimento"
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
                    <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">O Ritual</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                        Pedras Vulcânicas & Óleos.
                    </h2>
                    <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                        Utilizamos pedras de basalto vulcânico, que retêm o calor por longo tempo. Elas são deslizadas pelo corpo com óleos essenciais, criando uma dança de sensações.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="bg-amber-50 p-3 rounded-full h-fit text-brand-600 flex-shrink-0"><Gem size={20}/></div>
                            <div>
                                <h4 className="font-bold text-stone-900 text-lg">Pedras de Basalto</h4>
                                <p className="text-stone-500 font-light">Minerais naturais lisos e arredondados, perfeitos para deslizar na pele sem atrito.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-amber-50 p-3 rounded-full h-fit text-brand-600 flex-shrink-0"><Sparkles size={20}/></div>
                            <div>
                                <h4 className="font-bold text-stone-900 text-lg">Energização</h4>
                                <p className="text-stone-500 font-light">As pedras também são posicionadas estaticamente em pontos chave para alinhar a energia.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right: Image */}
                <div className="relative min-h-[400px]">
                    <img src="https://picsum.photos/id/1056/800/800" alt="Pedras Quentes" className="absolute inset-0 w-full h-full object-cover" />
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
            <h2 className="text-5xl font-serif text-white mb-4 leading-none">Aqueça seu corpo e alma</h2>
            <p className="text-lg text-stone-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                Uma experiência única de conforto. Perfeito para presentear a si mesma ou a alguém especial.
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

      <FAQ items={faqItems} title="Dúvidas Frequentes" className="bg-white border-t border-stone-200" />

    </div>
  );
};

export default PedrasQuentesPage;