import React from 'react';
import Button from '../../../components/UI/Button';
import FAQ from '../../../components/UI/FAQ';
import { Droplets, Sparkles, Feather, Scale, ArrowDown, Activity, Waves, CheckCircle2 } from 'lucide-react';
import RevealOnScroll from '../../../components/UI/RevealOnScroll';

const DrenagemLinfaticaPage: React.FC = () => {
  
  const faqItems = [
    {
      question: "Drenagem Linfática dói ou deixa roxo?",
      answer: "Não! Esse é um mito comum. A drenagem real é feita com pressão suave e ritmo lento, pois os vasos linfáticos são superficiais. Se doer ou deixar roxo, não é drenagem, é massagem modeladora (que é outra técnica)."
    },
    {
      question: "Quantas sessões são necessárias para pós-operatório?",
      answer: "Depende da cirurgia, mas geralmente indicamos o início imediato (com liberação médica) e pacotes de 10 sessões para garantir a redução total do edema e evitar fibrose."
    },
    {
      question: "Gestantes podem fazer?",
      answer: "Devem! É a técnica mais indicada para gestantes a partir do 3º mês, aliviando o inchaço nas pernas e pés e melhorando a circulação sanguínea."
    }
  ];

  return (
    <div className="pt-24 pb-0 bg-stone-50">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-stone-100 py-24 md:py-32 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-50/50 hidden lg:block skew-x-12 transform translate-x-1/4"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <RevealOnScroll variant="blur-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-brand-800 text-xs font-bold uppercase tracking-[0.15em] mb-6 rounded-sm">
                <Droplets size={12} /> Detox Corporal
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-none">
                Drenagem Linfática <br/><span className="text-brand-400 italic">Manual</span>
                </h1>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={300}>
                <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-snug font-light max-w-3xl mx-auto">
                Elimine a retenção de líquidos, reduza o inchaço e sinta seu corpo mais leve imediatamente. Técnica manual suave e precisa.
                </p>
            </RevealOnScroll>
            
            <RevealOnScroll variant="scale" delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="px-10 py-4 text-lg shadow-xl bg-brand-800 hover:bg-brand-900">
                    Agendar Horário
                </Button>
                <div className="flex items-center justify-center gap-2 px-6 py-4 border border-stone-300 rounded-sm text-stone-600 bg-white/50 backdrop-blur-sm shadow-sm">
                    <Feather size={18} className="text-brand-600"/>
                    <span className="text-sm font-bold tracking-wide">Técnica Vodder</span>
                </div>
                </div>
            </RevealOnScroll>
        </div>
      </div>

      {/* 2. O PROBLEMA - Sinais */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <RevealOnScroll variant="blur-up">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-3 leading-tight">Sensação de "Peso"?</h2>
                <p className="text-stone-600 font-light text-xl leading-snug">
                    Quando o sistema linfático fica lento, o corpo acumula toxinas e líquidos.
                </p>
            </div>
           </RevealOnScroll>

           <div className="grid md:grid-cols-3 gap-6">
              {[
                  { icon: <ArrowDown size={20} />, title: "Pernas Cansadas", desc: "Sensação de peso nas pernas ao final do dia, marcas de meia ou sapato apertado e desconforto ao caminhar." },
                  { icon: <Activity size={20} />, title: "Pós-Operatório", desc: "Indispensável após cirurgias plásticas (lipoaspiração, abdominoplastia) para evitar fibrose e acelerar a cicatrização." },
                  { icon: <Scale size={20} />, title: "Gestação", desc: "Alívio seguro para o inchaço natural da gravidez, controlando a pressão e proporcionando bem-estar para a mãe." }
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
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-3 leading-tight">Resultados Visíveis</h2>
                <p className="text-stone-600 font-light text-xl leading-snug">
                    Não é sobre emagrecer, é sobre desinchar e limpar o organismo.
                </p>
            </div>
           </RevealOnScroll>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 "Redução imediata de medidas (líquido)",
                 "Melhora da celulite (aspecto casca de laranja)",
                 "Aceleração do metabolismo",
                 "Relaxamento profundo",
                 "Eliminação de toxinas",
                 "Melhora da circulação sanguínea"
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
                    <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">A Técnica</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                        Ritmo, Pressão e Direção.
                    </h2>
                    <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                        A Drenagem Linfática não deve doer. Utilizamos manobras leves e rítmicas que "empurram" a linfa para os gânglios, onde será filtrada e eliminada.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="bg-blue-50 p-3 rounded-full h-fit text-brand-600 flex-shrink-0"><Waves size={20}/></div>
                            <div>
                                <h4 className="font-bold text-stone-900 text-lg">Estímulo Hidráulico</h4>
                                <p className="text-stone-500 font-light">Movimentos de bombeamento que reativam a circulação natural.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-blue-50 p-3 rounded-full h-fit text-brand-600 flex-shrink-0"><Sparkles size={20}/></div>
                            <div>
                                <h4 className="font-bold text-stone-900 text-lg">Sem Hematomas</h4>
                                <p className="text-stone-500 font-light">Respeitamos a fisiologia do corpo. Você sai leve, não dolorida.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right: Image */}
                <div className="relative min-h-[400px]">
                    <img src="https://picsum.photos/id/338/800/800" alt="Drenagem Linfática" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
                </div>
                </div>
            </div>
        </RevealOnScroll>
      </div>

      {/* 5. CTA FINAL */}
      <section className="bg-stone-900 pt-48 pb-20 relative z-10 -mt-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll variant="blur-up">
            <h2 className="text-5xl font-serif text-white mb-4 leading-none">Sinta-se leve novamente</h2>
            <p className="text-lg text-stone-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                Agende uma sessão avulsa para conhecer ou feche um pacote de tratamento para resultados duradouros.
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

      <FAQ items={faqItems} title="Dúvidas sobre Drenagem" className="bg-white border-t border-stone-200" />

    </div>
  );
};

export default DrenagemLinfaticaPage;