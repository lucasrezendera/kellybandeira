import React from 'react';
import Button from '../../components/UI/Button';
import FAQ from '../../components/UI/FAQ';
import { Siren, Ban, ShieldCheck, Clock, Phone, Star, CheckCircle2, AlertTriangle, Flower2, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../../components/UI/RevealOnScroll';

const UnhaEncravadaLP: React.FC = () => {
  
  const faqItems = [
    { 
      question: "Estou com muita dor e pus, vocês atendem hoje?", 
      answer: "Sim. Nosso espaço no Cambuí reserva horários de encaixe prioritário para casos infeccionados. Clique no botão verde para verificar o horário mais próximo." 
    },
    { 
      question: "Tenho medo de doer na hora de mexer.", 
      answer: "Esqueça experiências ruins do passado. Somos especialistas nisso. Usamos anestésico tópico potente e técnica de alívio sem cortes traumáticos na pele. O foco é seu alívio." 
    },
    { 
      question: "Já fui em manicure e piorou. Vocês resolvem?", 
      answer: "Sim. Manicures cuidam da beleza, nós cuidamos da patologia. Temos instrumental esterilizado para remover a espícula (ponta da unha) que está lá no fundo causando a infecção." 
    },
    { 
      question: "Aceitam convênio ou reembolso?", 
      answer: "Emitimos nota fiscal para você solicitar reembolso no seu convênio (se cobrir Podologia). O pagamento no local é particular para garantir a excelência dos materiais." 
    }
  ];

  return (
    <div className="bg-white font-sans text-stone-800">
      
      {/* 1. BARRA DE ALERTA - URGÊNCIA */}
      <div className="bg-red-700 text-white text-center py-3 px-4 sticky top-0 z-40 shadow-md">
         <p className="text-xs md:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 animate-pulse">
            <Siren size={18} className="text-white" />
            Plantão de Dor: Unha Encravada em Campinas
         </p>
      </div>

      {/* 1.1 HEADER MINIMALISTA */}
      <div className="py-4 border-b border-stone-100 flex justify-center bg-white relative z-30">
        <Link to="/" className="flex items-center gap-2 group" title="Ir para Home">
            <div className="p-2 rounded-full text-brand-800 bg-brand-50">
              <Flower2 size={24} strokeWidth={1.5} />
            </div>
            <span className="text-xl md:text-2xl font-serif tracking-wide text-stone-900">
              Kelly <span className="italic text-brand-800">Bandeira</span>
            </span>
          </Link>
      </div>

      {/* 2. HERO: EQUILIBRADO */}
      <header className="relative px-4 py-16 md:py-20 max-w-4xl mx-auto text-center">
         
         <RevealOnScroll variant="blur-up">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 text-brand-900 text-xs md:text-sm font-bold uppercase tracking-widest shadow-sm">
                <Award size={16} className="text-brand-600" /> Especialista em Unhas Encravadas
            </div>
         </RevealOnScroll>
         
         <RevealOnScroll variant="blur-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.1] mb-6 tracking-tight">
                Sua unha está <span className="text-red-700 font-bold italic">latejando</span> e você não consegue calçar sapato?
            </h1>
         </RevealOnScroll>
         
         <RevealOnScroll variant="blur-up" delay={300}>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl mx-auto font-light">
                Não tente "cutucar" em casa. Resolvemos a dor, a inflamação e a carne esponjosa em <strong>uma única sessão</strong>. <br className="hidden md:block" />
                <span className="font-bold text-stone-800">Saia do nosso espaço andando sem dor em 30 minutos.</span>
            </p>
         </RevealOnScroll>

         <RevealOnScroll variant="scale" delay={400}>
            <div className="flex flex-col items-center gap-4">
                <Button onClick={() => window.open('https://wa.me/5519999999999?text=URGENTE:%20Estou%20com%20dor%20de%20unha%20encravada%20em%20Campinas.', '_blank')} className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white border-none text-lg md:text-xl px-8 py-4 rounded-full shadow-lg shadow-green-900/20 font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-transform hover:scale-105 animate-bounce-slow">
                <Phone size={24} fill="currentColor" />
                Agendar Horário
                </Button>
                <p className="text-xs md:text-sm text-red-600 font-bold tracking-wide flex items-center gap-1">
                <Zap size={14} fill="currentColor"/> Poucos horários de encaixe hoje no Cambuí
                </p>
            </div>
         </RevealOnScroll>
      </header>

      {/* 3. AVISO DE RISCO (COMPACTO) */}
      <section className="bg-stone-900 py-12 px-4 text-white">
         <RevealOnScroll variant="scale">
            <div className="max-w-4xl mx-auto border border-red-500/30 bg-stone-800/50 p-8 rounded-xl relative overflow-hidden flex flex-col md:flex-row gap-6 items-center">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <AlertTriangle size={100} />
                </div>
                
                <div className="bg-red-600 p-4 rounded-full shadow-lg shrink-0">
                <Ban size={32} className="text-white" />
                </div>
                <div className="relative z-10 text-center md:text-left">
                <h2 className="text-2xl font-serif font-bold text-white mb-2">PARE DE MEXER AGORA!</h2>
                <p className="text-stone-300 text-lg leading-snug">
                    A "cirurgia de banheiro" com alicate é a principal causa de <strong>Granuloma (Carne Esponjosa)</strong>. 
                    Ao cortar errado, você deixa uma ponta afiada (espícula) que rasga a pele. Deixe uma especialista resolver.
                </p>
                </div>
            </div>
         </RevealOnScroll>
      </section>

      {/* 4. AUTORIDADE (GRID LIMPO) */}
      <section className="py-16 bg-white">
         <div className="max-w-6xl mx-auto px-4">
            <RevealOnScroll variant="blur-up">
                <div className="text-center mb-10">
                <h2 className="text-3xl font-serif text-stone-900 mb-2">Por que escolher nosso espaço?</h2>
                <p className="text-stone-500 text-lg">Não somos um salão comum. Somos especialistas em podologia.</p>
                </div>
            </RevealOnScroll>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                   { icon: <ShieldCheck size={32} />, title: "100% Estéril", desc: "Autoclave Hospitalar. Risco zero." },
                   { icon: <Clock size={32} />, title: "Alívio Rápido", desc: "Procedimento de 30 minutos." },
                   { icon: <Award size={32} />, title: "Especialista", desc: "Podóloga graduada." },
                   { icon: <CheckCircle2 size={32} />, title: "Sem Dor", desc: "Anestésicos tópicos potentes." }
               ].map((item, index) => (
                    <RevealOnScroll key={index} delay={index * 100} variant="scale">
                        <div className="bg-stone-50 p-6 rounded-lg text-center border border-stone-100 h-full">
                            <div className="mx-auto text-green-600 mb-3 flex justify-center">{item.icon}</div>
                            <h3 className="font-bold text-stone-900 text-sm uppercase mb-1">{item.title}</h3>
                            <p className="text-sm text-stone-600">{item.desc}</p>
                        </div>
                    </RevealOnScroll>
               ))}
            </div>
         </div>
      </section>

      {/* 5. COMO FUNCIONA */}
      <section className="py-16 bg-stone-50">
         <div className="max-w-3xl mx-auto px-4">
            <RevealOnScroll variant="blur-up">
                <h2 className="text-3xl font-serif text-stone-900 mb-10 text-center">Protocolo de Emergência</h2>
            </RevealOnScroll>
            
            <div className="space-y-4">
               {/* Step 1 */}
               <RevealOnScroll variant="left">
                <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 items-center border-l-4 border-stone-300">
                    <span className="text-3xl font-bold text-stone-200">01</span>
                    <div>
                        <h3 className="font-bold text-lg text-stone-900">Avaliação e Anestesia</h3>
                        <p className="text-stone-600">Limpamos a área infeccionada e aplicamos produto para tirar a sensibilidade local.</p>
                    </div>
                </div>
               </RevealOnScroll>
               
               {/* Step 2 */}
               <RevealOnScroll variant="scale" delay={150}>
                <div className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-center border-l-4 border-green-600 z-10">
                    <span className="text-3xl font-bold text-green-200">02</span>
                    <div>
                        <h3 className="font-bold text-lg text-stone-900">Remoção Técnica</h3>
                        <p className="text-stone-600">Removemos a espícula (ponta da unha) com bisturi especial. O alívio é instantâneo.</p>
                    </div>
                    <CheckCircle2 size={24} className="text-green-600 ml-auto hidden sm:block" />
                </div>
               </RevealOnScroll>

               {/* Step 3 */}
               <RevealOnScroll variant="left" delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 items-center border-l-4 border-stone-300">
                    <span className="text-3xl font-bold text-stone-200">03</span>
                    <div>
                        <h3 className="font-bold text-lg text-stone-900">Curativo e Vida Normal</h3>
                        <p className="text-stone-600">Curativo cicatrizante. Você sai caminhando e pode voltar ao trabalho.</p>
                    </div>
                </div>
               </RevealOnScroll>
            </div>
         </div>
      </section>

      {/* 6. PROVA SOCIAL */}
      <section className="py-16 px-4 bg-white">
         <div className="max-w-4xl mx-auto">
            <RevealOnScroll variant="blur-up">
                <h2 className="text-center text-3xl font-serif text-stone-900 mb-10">Quem chegou mancando e saiu sorrindo</h2>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-2 gap-6">
               <RevealOnScroll variant="scale" delay={0}>
                <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 relative h-full">
                    <div className="absolute -top-3 left-6 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Caso Grave</div>
                    <div className="flex text-yellow-500 mb-4 gap-1"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                    <p className="text-stone-700 italic mb-4 text-base">"Eu estava com o dedo muito inchado e com medo de doer. A Kelly tem a mão muito leve, usou um anestésico e eu nem senti quando ela tirou o canto. O espaço no Cambuí é super limpo."</p>
                    <p className="font-bold text-stone-900 text-sm">– Mariana S., Campinas</p>
                </div>
               </RevealOnScroll>
               
               <RevealOnScroll variant="scale" delay={150}>
                <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 relative h-full">
                    <div className="absolute -top-3 left-6 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Urgência</div>
                    <div className="flex text-yellow-500 mb-4 gap-1"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                    <p className="text-stone-700 italic mb-4 text-base">"Já tinha ido em 3 lugares e a unha sempre voltava a encravar. Aqui resolveram de verdade. O atendimento é outro nível, muito profissional."</p>
                    <p className="font-bold text-stone-900 text-sm">– Ricardo O., Campinas</p>
                </div>
               </RevealOnScroll>
            </div>
         </div>
      </section>

      {/* 7. FAQ */}
      <FAQ items={faqItems} title="Dúvidas Rápidas" className="bg-stone-50" />

      {/* 8. CTA MOBILE */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 p-3 z-50 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.15)]">
         <Button onClick={() => window.open('https://wa.me/5519999999999?text=SOS%20Unha%20Encravada%20Campinas', '_blank')} className="w-full bg-green-600 hover:bg-green-500 border-none text-white font-bold text-lg py-3 rounded-full shadow-lg flex items-center justify-center gap-2 animate-pulse">
            <Phone size={20} fill="currentColor" />
            Agendar Horário
         </Button>
      </div>

       {/* CTA DESKTOP */}
       <div className="hidden md:flex flex-col items-center py-20 px-4 bg-white">
          <RevealOnScroll variant="blur-up">
            <h2 className="text-4xl font-serif text-stone-900 mb-6">Não passe mais uma noite com dor.</h2>
            <Button onClick={() => window.open('https://wa.me/5519999999999?text=SOS%20Unha%20Encravada%20Campinas', '_blank')} className="bg-green-700 hover:bg-green-600 border-none text-white font-bold text-2xl px-12 py-6 rounded-full shadow-2xl flex items-center gap-3 hover:-translate-y-1 transition-transform">
                <Phone size={28} fill="currentColor" />
                Tirar Dúvidas
            </Button>
            <p className="mt-4 text-stone-500 text-sm font-medium">Atendimento no Cambuí • Estacionamento Próximo</p>
          </RevealOnScroll>
       </div>

    </div>
  );
};

export default UnhaEncravadaLP;