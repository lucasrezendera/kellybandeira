import React from 'react';
import Button from '../../../components/UI/Button';
import FAQ from '../../../components/UI/FAQ';
import { Settings, PenTool, GitCommit, ArrowRight, Anchor, Smile, CheckCircle } from 'lucide-react';
import RevealOnScroll from '../../../components/UI/RevealOnScroll';

const OrtesesPage: React.FC = () => {
  const faqItems = [
    { question: "Incomoda para usar sapato?", answer: "Geralmente não. As órteses (fibras ou botons) são extremamente finas e ficam coladas sobre a superfície da unha. Você pode usar calçados fechados e praticar esportes normalmente." },
    { question: "Dói colocar?", answer: "Não. A aplicação é totalmente indolor, feita com colas e resinas especiais. Você pode sentir uma leve sensação de 'repuxamento' nos primeiros dias, sinal de que ela está fazendo força para corrigir." },
    { question: "Quanto tempo tenho que usar?", answer: "O tratamento varia de 3 a 8 meses, dependendo da curvatura da unha e da velocidade de crescimento. As trocas (manutenções) são mensais para ajustar a tração." }
  ];

  return (
    <div className="pt-24 pb-0 bg-white">
      
      {/* 1. HERO - TECNOLÓGICO/PRECISÃO */}
      <div className="relative bg-stone-100 py-24 md:py-32 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-50/50 hidden lg:block skew-x-12 transform translate-x-1/4"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <RevealOnScroll variant="blur-up">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-800 border border-brand-200 text-xs font-bold uppercase tracking-[0.15em] mb-6 rounded-sm">
                <Settings size={14} /> Correção Ungueal
             </div>
           </RevealOnScroll>
          
          <RevealOnScroll variant="blur-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-none">
                Órteses Corretivas: <br/><span className="text-brand-800 italic">O Fim da Unha Encravada</span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll variant="blur-up" delay={300}>
            <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-snug font-light max-w-3xl mx-auto">
                Sua unha vive encravando porque é muito curvada? As órteses funcionam como um "aparelho dental" para as unhas, corrigindo o formato e eliminando a dor definitivamente.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll variant="scale" delay={400}>
            <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="px-10 py-4 text-lg bg-stone-900 hover:bg-stone-800 text-white border-none shadow-lg">
                Agendar Horário
            </Button>
          </RevealOnScroll>
        </div>
      </div>

      {/* 2. O CONCEITO */}
      <section className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-4">
            <RevealOnScroll variant="blur-up">
                <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-serif text-stone-900 mb-6">Mecânica de Precisão</h2>
                <p className="text-stone-600 text-lg leading-relaxed">
                    Muitas pessoas sofrem a vida toda cortando os cantos da unha para aliviar a dor. Isso só piora o problema. A Órtese ataca a causa: ela altera a curvatura da lâmina.
                </p>
                </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 gap-12">
               {/* FMM */}
               <RevealOnScroll variant="left" className="h-full">
                <div className="bg-stone-50 rounded-sm p-10 border border-stone-200 relative overflow-hidden group hover:border-brand-300 transition-colors h-full">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <PenTool size={100} />
                    </div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-700 shadow-sm mb-6">
                            <PenTool size={32} />
                        </div>
                        <h3 className="text-2xl font-serif text-stone-900 mb-4">Fibra de Memória</h3>
                        <p className="text-stone-600 mb-6">
                            Uma fita translúcida de material sintético com "memória elástica". Colamos ela sobre a unha curvada. A fibra tenta voltar a ficar reta a todo custo, puxando as bordas da unha para cima suavemente.
                        </p>
                        <ul className="text-sm text-stone-500 space-y-2">
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-600"/> Discreta e quase invisível</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-600"/> Ideal para unhas finas e médias</li>
                        </ul>
                    </div>
                </div>
               </RevealOnScroll>

               {/* BOTONS */}
               <RevealOnScroll variant="right" className="h-full">
                <div className="bg-stone-50 rounded-sm p-10 border border-stone-200 relative overflow-hidden group hover:border-brand-300 transition-colors h-full">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <GitCommit size={100} />
                    </div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-700 shadow-sm mb-6">
                            <GitCommit size={32} />
                        </div>
                        <h3 className="text-2xl font-serif text-stone-900 mb-4">Botons & Elástico</h3>
                        <p className="text-stone-600 mb-6">
                            Sistema de tração mecânica. Colamos dois pequenos botões nas laterais da unha e ligamos com um elástico de alta tensão. A força do elástico levanta as laterais imediatamente.
                        </p>
                        <ul className="text-sm text-stone-500 space-y-2">
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-600"/> Alta força de tração</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-600"/> Ideal para unhas muito curvas (telha)</li>
                        </ul>
                    </div>
                </div>
               </RevealOnScroll>
            </div>
         </div>
      </section>

      {/* 3. VISUALIZAÇÃO - OVERLAP */}
      <div className="bg-stone-900 py-24 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <RevealOnScroll variant="left">
                <div className="text-white">
                    <span className="text-brand-400 font-bold tracking-widest text-xs uppercase mb-4 block">Resultados Reais</span>
                    <h2 className="text-4xl font-serif mb-6">Vida Normal</h2>
                    <p className="text-stone-400 text-lg leading-relaxed mb-8">
                        O tratamento com órteses não impede sua rotina.
                    </p>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <Anchor className="text-brand-400" size={24} />
                            <div>
                            <h4 className="font-bold text-white text-lg">Esportes Liberados</h4>
                            <p className="text-stone-400 text-sm">Pode correr, nadar e treinar. A fixação é resistente à água.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Smile className="text-brand-400" size={24} />
                            <div>
                            <h4 className="font-bold text-white text-lg">Estética Preservada</h4>
                            <p className="text-stone-400 text-sm">Pode esmaltar por cima da fibra (dependendo do caso) ou mantê-la discreta.</p>
                            </div>
                        </div>
                    </div>
                </div>
               </RevealOnScroll>
               
               <RevealOnScroll variant="scale">
                <div className="relative">
                    <div className="absolute -inset-4 border-2 border-brand-500/30 rounded-sm"></div>
                    <img src="https://picsum.photos/id/20/800/600" alt="Aplicação de órtese" className="relative rounded-sm shadow-2xl w-full grayscale" />
                </div>
               </RevealOnScroll>
            </div>
         </div>
      </div>

      <FAQ items={faqItems} title="Perguntas Frequentes" />
      
      <section className="bg-white py-20 text-center border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-4">
          <RevealOnScroll variant="blur-up">
            <h2 className="text-4xl font-serif text-stone-900 mb-6">Pare de sofrer com unhas encravadas</h2>
            <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="bg-brand-800 hover:bg-brand-900 border-none text-white px-10 py-4 shadow-lg">
                Agendar Horário
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default OrtesesPage;