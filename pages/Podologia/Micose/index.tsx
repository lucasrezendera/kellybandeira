import React from 'react';
import Button from '../../../components/UI/Button';
import FAQ from '../../../components/UI/FAQ';
import { Microscope, Eraser, CalendarClock, ShieldX, RefreshCcw } from 'lucide-react';
import RevealOnScroll from '../../../components/UI/RevealOnScroll';

const MicosePage: React.FC = () => {
  const faqItems = [
    { question: "Quanto tempo demora o tratamento?", answer: "É um tratamento de longo prazo. As unhas dos pés crescem lentamente (cerca de 1 a 2mm por mês). Para renovar a unha inteira, leva-se de 6 a 12 meses. A persistência é o segredo." },
    { question: "Só passar remédio resolve?", answer: "Dificilmente. O fungo fica protegido embaixo da unha e sob camadas de queratina morta. O remédio tópico não consegue penetrar sozinho. A limpeza podológica mensal remove essa 'barreira', potencializando o efeito do medicamento em até 3x." },
    { question: "O laser cura a micose?", answer: "A Laserterapia (PDT) é um excelente coadjuvante que acelera a morte dos fungos, mas não substitui a limpeza mecânica e o uso diário do antifúngico. Usamos protocolos combinados para maior eficácia." }
  ];

  return (
    <div className="pt-24 pb-0 bg-white">
      
      {/* 1. HERO - ESTÉTICA LIMPA */}
      <div className="relative bg-stone-100 py-24 md:py-32 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-50/50 hidden lg:block skew-x-12 transform translate-x-1/4"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <RevealOnScroll variant="blur-up">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-800 border border-brand-200 text-xs font-bold uppercase tracking-[0.15em] mb-6 rounded-sm">
                <Microscope size={14} /> Tratamento de Onicomicose
             </div>
           </RevealOnScroll>
          
          <RevealOnScroll variant="blur-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-none">
                Recupere a Estética <br/><span className="text-brand-600 italic">das Suas Unhas</span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll variant="blur-up" delay={300}>
            <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-snug font-light max-w-3xl mx-auto">
                Unhas amareladas, ocas ou esfarelando não são apenas feias, são doentes. Oferecemos um protocolo combinado (Limpeza + Laser + Tópico) para eliminar os fungos de vez.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll variant="scale" delay={400}>
            <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="px-10 py-4 text-lg bg-stone-900 hover:bg-stone-800 text-white border-none shadow-lg">
                Agendar Horário
            </Button>
          </RevealOnScroll>
        </div>
      </div>

      {/* 2. O INIMIGO INVISÍVEL */}
      <section className="py-20 bg-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <RevealOnScroll variant="blur-up">
                <h2 className="text-3xl font-serif text-stone-900 mb-12">Por que é tão difícil curar?</h2>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                   { icon: <ShieldX size={40} />, title: "Proteção", desc: "O fungo se esconde embaixo da lâmina da unha e cria um 'biofilme' protetor que repele cremes e gotas." },
                   { icon: <RefreshCcw size={40} />, title: "Recontaminação", desc: "Meias e sapatos antigos podem conter esporos, reinfectando a unha constantemente." },
                   { icon: <CalendarClock size={40} />, title: "Tempo", desc: "O tratamento exige disciplina diária por meses. Muitos desistem antes do fim." }
               ].map((item, index) => (
                    <RevealOnScroll key={index} delay={index * 150} variant="scale">
                        <div className="flex flex-col items-center p-6 bg-stone-50 rounded-sm h-full">
                            <div className="text-stone-400 mb-4">{item.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-stone-500">{item.desc}</p>
                        </div>
                    </RevealOnScroll>
               ))}
            </div>
         </div>
      </section>

      {/* 3. NOSSO DIFERENCIAL - OVERLAP */}
      <div className="bg-stone-50 py-24 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               {/* Imagem */}
               <RevealOnScroll variant="left" className="relative h-[500px] rounded-sm overflow-hidden shadow-xl">
                  <img src="https://picsum.photos/id/1025/800/800" alt="Limpeza de unha" className="absolute inset-0 w-full h-full object-cover grayscale" />
                  <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
               </RevealOnScroll>

               {/* Conteúdo */}
               <RevealOnScroll variant="right">
                  <div>
                    <span className="text-brand-700 font-bold tracking-widest text-xs uppercase mb-4 block">O Segredo do Sucesso</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8">A Limpeza Mecânica</h2>
                    <p className="text-stone-600 text-lg leading-relaxed mb-8">
                        Não adianta aplicar remédio sobre uma unha morta e grossa. Nosso trabalho mensal é fundamental:
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-brand-500">
                            <div className="flex items-center gap-3 mb-2">
                            <Eraser className="text-brand-600" size={24} />
                            <h4 className="font-bold text-stone-900">Remoção da Carga Fúngica</h4>
                            </div>
                            <p className="text-stone-500 text-sm">Lixamos e cortamos toda a parte da unha que está oca, solta ou contaminada. Isso remove 80% dos fungos fisicamente.</p>
                        </div>

                        <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-brand-500">
                            <div className="flex items-center gap-3 mb-2">
                            <Microscope className="text-brand-600" size={24} />
                            <h4 className="font-bold text-stone-900">Permeabilidade</h4>
                            </div>
                            <p className="text-stone-500 text-sm">Deixamos a unha fina e porosa para que o antifúngico consiga penetrar e matar a raiz do problema.</p>
                        </div>
                    </div>
                  </div>
               </RevealOnScroll>
            </div>
         </div>
      </div>

      <FAQ items={faqItems} title="Perguntas Frequentes" />
      
      <section className="bg-stone-900 py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <RevealOnScroll variant="blur-up">
            <h2 className="text-4xl font-serif mb-6">Não esconda mais seus pés</h2>
            <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="bg-brand-600 hover:bg-brand-500 border-none px-10 py-4 shadow-lg text-white">
                Agendar Horário
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default MicosePage;