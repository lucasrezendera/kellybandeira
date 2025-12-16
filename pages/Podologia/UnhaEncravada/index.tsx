import React from 'react';
import Button from '../../../components/UI/Button';
import FAQ from '../../../components/UI/FAQ';
import { ShieldCheck, Siren, Microscope, Ban, CheckCircle2, Footprints, HeartHandshake, AlertTriangle, Activity, Stethoscope } from 'lucide-react';
import RevealOnScroll from '../../../components/UI/RevealOnScroll';

const UnhaEncravadaPage: React.FC = () => {
  
  const faqItems = [
    { question: "Vou sentir dor na hora de tirar?", answer: "Nosso foco é o 'Desconforto Zero'. Usamos produtos que amolecem a pele e anestésicos em spray/creme antes de encostar na sua unha. A maioria dos pacientes diz: 'Nossa, já acabou? Nem senti!'." },
    { question: "Consigo calçar sapato depois?", answer: "Sim. Fazemos um curativo especial que protege o dedo. Se possível, venha com um calçado mais folgado ou chinelo, mas se precisar voltar para o trabalho de sapato fechado, você conseguirá caminhar normalmente." },
    { question: "A unha vai encravar de novo?", answer: "Nós resolvemos a dor de agora. Porém, se o formato da sua unha for muito curvo ou se você continuar cortando os cantos em casa, ela pode voltar. Nesses casos, sugerimos o uso de Órteses." }
  ];

  return (
    <div className="pt-24 pb-0 bg-stone-50">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-stone-100 py-16 md:py-24 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-50/50 hidden lg:block skew-x-12 transform translate-x-1/4"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <RevealOnScroll variant="blur-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-brand-900 text-xs font-bold uppercase tracking-[0.15em] mb-6 rounded-sm border border-red-100">
                <Siren size={12} className="text-red-500" /> Alívio Imediato
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-none">
                Unha Encravada <br/><span className="text-brand-600 italic">Tratamento sem Dor</span>
                </h1>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={400}>
                <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-snug font-light max-w-3xl mx-auto">
                Procedimento técnico estéril para remoção da espícula com uso de anestésicos tópicos. Recupere seu conforto e volte a caminhar livremente.
                </p>
            </RevealOnScroll>
            
            <RevealOnScroll variant="scale" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="px-10 py-4 text-lg shadow-xl bg-brand-800 hover:bg-brand-900">
                    Agendar Horário
                </Button>
                </div>
            </RevealOnScroll>
        </div>
      </div>

      {/* 2. O ALERTA PREMIUM */}
      <section className="bg-white py-16 border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              
              {/* Lado Esquerdo */}
              <div className="text-center md:text-left">
                 <RevealOnScroll variant="left">
                    <span className="text-red-800 font-bold tracking-widest text-xs uppercase mb-4 flex items-center gap-2 justify-center md:justify-start">
                        <Ban size={16} /> Pare Agora Mesmo
                    </span>
                    <h2 className="text-4xl font-serif text-stone-900 mb-6 leading-tight">
                        A "cirurgia de banheiro" <br/>só piora a dor.
                    </h2>
                    <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
                    <p>
                        Sabemos que a dor é insuportável e a tentação de cortar o canto da unha é grande. Mas acredite: usar a tesourinha em casa é a principal causa de infecções graves.
                    </p>
                    <p>
                        <strong>O erro:</strong> Você corta o que vê, mas deixa uma ponta afiada escondida lá no fundo (a espícula). Quando a unha cresce, essa ponta perfura a pele, criando a "carne esponjosa".
                    </p>
                    </div>
                 </RevealOnScroll>
              </div>

              {/* Lado Direito: Diagrama */}
              <RevealOnScroll variant="scale" delay={200} className="relative">
                 <div className="absolute -inset-4 bg-stone-100 rounded-sm transform rotate-2"></div>
                 <div className="relative bg-white p-8 rounded-sm shadow-xl border border-stone-100">
                    <div className="flex items-center justify-between mb-8 border-b border-stone-100 pb-4">
                       <h3 className="font-serif text-xl text-stone-800">O Ciclo da Unha Encravada</h3>
                       <AlertTriangle className="text-brand-500" size={24} />
                    </div>
                    
                    <ul className="space-y-6">
                       <li className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 font-bold text-sm">1</div>
                          <div>
                             <h4 className="font-bold text-stone-900 text-sm">Corte Incorreto</h4>
                             <p className="text-xs text-stone-500 mt-1">Cortar os cantos muito curtos ou arredondados.</p>
                          </div>
                       </li>
                       <li className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 font-bold text-sm">2</div>
                          <div>
                             <h4 className="font-bold text-stone-900 text-sm">Pressão & Crescimento</h4>
                             <p className="text-xs text-stone-500 mt-1">O sapato aperta e a unha cresce para dentro da pele.</p>
                          </div>
                       </li>
                       <li className="flex gap-4 bg-red-50 p-3 rounded-sm -mx-3 border-l-2 border-red-400">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-red-600 font-bold text-sm shadow-sm">3</div>
                          <div>
                             <h4 className="font-bold text-red-900 text-sm">Infecção (Granuloma)</h4>
                             <p className="text-xs text-red-700/80 mt-1">O corpo reage criando pus e carne esponjosa. A dor se torna pulsante.</p>
                          </div>
                       </li>
                    </ul>
                 </div>
              </RevealOnScroll>

           </div>
        </div>
      </section>

      {/* 3. A JORNADA DO ALÍVIO */}
      <section className="py-16 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll variant="blur-up">
                <div className="text-center mb-16">
                <span className="text-brand-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Passo a Passo</span>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Como vamos te ajudar?</h2>
                <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto">
                    Entenda o que acontece na cadeira da podóloga. Sem nomes complicados, apenas cuidado.
                </p>
                </div>
            </RevealOnScroll>

            <div className="relative">
               {/* Linha Conectora */}
               <div className="hidden lg:block absolute top-[45px] left-0 w-full h-[2px] bg-stone-200 z-0"></div>
               
               <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                  {[
                    { icon: <HeartHandshake size={32} />, title: "Conforto Primeiro", desc: "Aplicamos produtos para amolecer a pele e um anestésico local." },
                    { icon: <Microscope size={32} />, title: "Encontrando a Causa", desc: "Com instrumentos delicados, afastamos suavemente a pele." },
                    { icon: <CheckCircle2 size={32} />, title: "A Remoção", desc: "Retiramos apenas a pontinha da unha (espícula). A dor alivia na hora.", highlight: true },
                    { icon: <Footprints size={32} />, title: "Proteção", desc: "Fazemos um curativo especial com cicatrizante. Você já sai calçando seu sapato." }
                  ].map((step, index) => (
                    <RevealOnScroll key={index} delay={index * 150} variant="scale" className="relative z-10 flex flex-col items-center text-center group h-full">
                         <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-sm mb-6 transition-all duration-500 ${step.highlight ? 'bg-brand-600 border-4 border-brand-200 text-white scale-110' : 'bg-white border-4 border-stone-200 group-hover:border-brand-500 text-stone-400 group-hover:text-brand-600'}`}>
                            {React.cloneElement(step.icon as React.ReactElement<any>, { strokeWidth: 1.5 })}
                         </div>
                         <div className="bg-stone-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">Etapa 0{index + 1}</div>
                         <h3 className="text-xl font-bold text-stone-900 mb-3">{step.title}</h3>
                         <p className="text-stone-500 text-sm leading-relaxed px-4">
                            {step.desc}
                         </p>
                    </RevealOnScroll>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 4. VISUAL PROOF - OVERLAP */}
      <section className="bg-stone-900 py-16 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 pattern-grid"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               <RevealOnScroll variant="left" className="order-2 lg:order-1 relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-500/30"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-500/30"></div>
                  <img 
                    src="https://picsum.photos/id/1058/800/600" 
                    alt="Podóloga com luvas realizando procedimento" 
                    className="w-full h-auto shadow-2xl rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                  />
               </RevealOnScroll>

               <RevealOnScroll variant="right" className="order-1 lg:order-2 text-white text-center lg:text-left">
                  <h2 className="text-4xl font-serif mb-8">Por que confiar na gente?</h2>
                  <div className="space-y-8">
                     <div className="flex gap-4 flex-col lg:flex-row items-center lg:items-start">
                        <div className="mt-1 bg-brand-900/50 p-2 rounded h-fit text-brand-400 border border-brand-800">
                           <ShieldCheck size={24} />
                        </div>
                        <div>
                           <h4 className="text-xl font-serif text-brand-100 mb-2">Tudo Limpo e Estéril</h4>
                           <p className="text-stone-400 font-light leading-relaxed">
                              Diferente de salões comuns, aqui cada alicate e bisturi passa por esterilização de hospital. Risco zero de pegar infecção.
                           </p>
                        </div>
                     </div>

                     <div className="flex gap-4 flex-col lg:flex-row items-center lg:items-start">
                        <div className="mt-1 bg-brand-900/50 p-2 rounded h-fit text-brand-400 border border-brand-800">
                           <Stethoscope size={24} />
                        </div>
                        <div>
                           <h4 className="text-xl font-serif text-brand-100 mb-2">Resolver de Vez</h4>
                           <p className="text-stone-400 font-light leading-relaxed">
                              Não queremos que você volte com dor mês que vem. Se precisar, indicamos correções definitivas.
                           </p>
                        </div>
                     </div>

                     <div className="flex gap-4 flex-col lg:flex-row items-center lg:items-start">
                        <div className="mt-1 bg-brand-900/50 p-2 rounded h-fit text-brand-400 border border-brand-800">
                           <Activity size={24} />
                        </div>
                        <div>
                           <h4 className="text-xl font-serif text-brand-100 mb-2">Acompanhamento</h4>
                           <p className="text-stone-400 font-light leading-relaxed">
                              Você não fica sozinha. Acompanhamos sua cicatrização pelo WhatsApp até seu dedo estar 100% recuperado.
                           </p>
                        </div>
                     </div>
                  </div>
               </RevealOnScroll>
            </div>
         </div>
      </section>

      <FAQ items={faqItems} title="Perguntas Frequentes sobre Unha Encravada" className="bg-white" />
      
      {/* 6. CTA FINAL */}
       <section className="bg-brand-900 py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-stone-950/20"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <RevealOnScroll variant="blur-up">
            <h2 className="text-5xl md:text-6xl font-serif mb-6 leading-none">Não espere a dor piorar.</h2>
            <p className="text-brand-100/90 mb-12 text-xl font-light max-w-2xl mx-auto">
                Infecção não espera. Atendemos casos de dor com prioridade na agenda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="bg-white text-brand-900 hover:bg-brand-50 border-none px-12 py-5 text-lg shadow-xl font-bold">
                Agendar Horário
                </Button>
                <Button variant="outline" className="border-brand-400 text-brand-100 hover:bg-brand-800 hover:text-white px-12 py-5 text-lg" onClick={() => window.open('https://wa.me/5519999999999', '_blank')}>
                Tirar Dúvidas
                </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default UnhaEncravadaPage;