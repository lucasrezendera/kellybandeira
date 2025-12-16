import React from 'react';
import Button from '../../../components/UI/Button';
import FAQ from '../../../components/UI/FAQ';
import { Sparkles, Scissors, Droplets, CheckCircle2, XCircle, Search, FileText } from 'lucide-react';
import RevealOnScroll from '../../../components/UI/RevealOnScroll';

const LimpezaPage: React.FC = () => {
  
  const faqItems = [
    { question: "Com que frequência devo fazer?", answer: "O ciclo ideal de crescimento da unha e renovação celular é de 28 dias. Recomendamos a manutenção mensal (a cada 30 dias) para manter a saúde e prevenir problemas." },
    { question: "Vocês tiram a cutícula funda?", answer: "Não. A cutícula é a barreira de proteção da unha contra bactérias e fungos. Removemos apenas o excesso de pele morta (o que levanta) e fazemos o acabamento com brocas, deixando o contorno limpo e estético, sem agredir a matriz." },
    { question: "Vocês esmaltam?", answer: "Somos uma clínica de saúde. Finalizamos com óleos essenciais e hidratantes de alta performance. Não aplicamos esmalte para permitir que a lâmina ungueal respire e absorva os nutrientes do tratamento." }
  ];

  return (
    <div className="pt-24 pb-0 bg-white">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-stone-100 py-24 md:py-32 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-50 hidden lg:block skew-x-12 transform translate-x-1/4"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <RevealOnScroll variant="blur-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-[0.15em] mb-6 rounded-sm">
                <Sparkles size={12} /> Profilaxia (Prevenção)
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll variant="blur-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-none">
                Podoprofilaxia <br/><span className="text-brand-600 italic">Limpeza Técnica</span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll variant="blur-up" delay={300}>
            <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-snug font-light max-w-3xl mx-auto">
                Esqueça a pedicure tradicional. Experimente um protocolo clínico de assepsia, corte anatômico e hidratação que renova a saúde dos seus pés.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll variant="scale" delay={400}>
            <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="px-10 py-4 text-lg bg-brand-800 hover:bg-brand-900 border-none shadow-lg">
                Agendar Horário
            </Button>
          </RevealOnScroll>
        </div>
      </div>

      {/* 2. COMPARATIVO - AUTORIDADE */}
      <section className="py-20 bg-white">
         <div className="max-w-4xl mx-auto px-4">
            <RevealOnScroll variant="blur-up">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-serif text-stone-900 mb-4">Pedicure Comum vs. Podologia</h2>
                <p className="text-stone-500 font-light">Entenda porque a podologia é um investimento em saúde.</p>
                </div>
            </RevealOnScroll>

            <RevealOnScroll variant="scale" delay={200}>
                <div className="grid md:grid-cols-2 gap-0 border border-stone-200 rounded-sm overflow-hidden shadow-sm">
                {/* Lado Esquerdo - Comum */}
                <div className="bg-stone-50 p-8 border-b md:border-b-0 md:border-r border-stone-200">
                    <h3 className="text-lg font-bold text-stone-400 mb-6 uppercase tracking-wider text-center">Salão Comum</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-stone-500 text-sm">
                            <XCircle size={18} className="text-stone-300 flex-shrink-0 mt-0.5" />
                            <span>Corte arredondado (risco de encravar)</span>
                        </li>
                        <li className="flex items-start gap-3 text-stone-500 text-sm">
                            <XCircle size={18} className="text-stone-300 flex-shrink-0 mt-0.5" />
                            <span>Retirada profunda de cutícula</span>
                        </li>
                        <li className="flex items-start gap-3 text-stone-500 text-sm">
                            <XCircle size={18} className="text-stone-300 flex-shrink-0 mt-0.5" />
                            <span>Lixamento excessivo</span>
                        </li>
                        <li className="flex items-start gap-3 text-stone-500 text-sm">
                            <XCircle size={18} className="text-stone-300 flex-shrink-0 mt-0.5" />
                            <span>Risco de contaminação cruzada</span>
                        </li>
                    </ul>
                </div>

                {/* Lado Direito - Podologia */}
                <div className="bg-brand-50 p-8">
                    <h3 className="text-lg font-bold text-brand-800 mb-6 uppercase tracking-wider text-center">Podologia Clínica</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-stone-700 text-sm font-medium">
                            <CheckCircle2 size={18} className="text-brand-600 flex-shrink-0 mt-0.5" />
                            <span>Corte técnico reto (previne encravamento)</span>
                        </li>
                        <li className="flex items-start gap-3 text-stone-700 text-sm font-medium">
                            <CheckCircle2 size={18} className="text-brand-600 flex-shrink-0 mt-0.5" />
                            <span>Limpeza de sulcos e peles mortas apenas</span>
                        </li>
                        <li className="flex items-start gap-3 text-stone-700 text-sm font-medium">
                            <CheckCircle2 size={18} className="text-brand-600 flex-shrink-0 mt-0.5" />
                            <span>Desbastamento controlado de calosidades</span>
                        </li>
                        <li className="flex items-start gap-3 text-stone-700 text-sm font-medium">
                            <CheckCircle2 size={18} className="text-brand-600 flex-shrink-0 mt-0.5" />
                            <span>Instrumental estéril em autoclave</span>
                        </li>
                    </ul>
                </div>
                </div>
            </RevealOnScroll>
         </div>
      </section>

      {/* 3. OS 4 PILARES */}
      <section className="bg-stone-50 py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll variant="blur-up">
                <h2 className="text-3xl md:text-4xl font-serif text-center text-stone-900 mb-16">O Protocolo Completo</h2>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                   { icon: <Scissors size={24} />, title: "1. Corte Técnico", desc: "Corte reto respeitando a anatomia da unha para guiar o crescimento saudável." },
                   { icon: <FileText size={24} />, title: "2. Desbastamento", desc: "Remoção indolor de calosidades e hiperqueratose (pele grossa) plantar e digital." },
                   { icon: <Search size={24} />, title: "3. Inspeção", desc: "Análise minuciosa entre os dedos e lâminas para detectar início de micoses ou lesões." },
                   { icon: <Droplets size={24} />, title: "4. Hidratação", desc: "Finalização com massagem rápida e cremes de ureia/óleos para recuperar a barreira cutânea." }
               ].map((item, index) => (
                    <RevealOnScroll key={index} delay={index * 100} variant="scale" className="h-full">
                        <div className="bg-white p-8 rounded-sm shadow-sm hover:-translate-y-1 transition-transform duration-300 h-full">
                            <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-700 mb-6">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </RevealOnScroll>
               ))}
            </div>
         </div>
      </section>

      <FAQ items={faqItems} title="Dúvidas sobre o Procedimento" />
      
       <section className="bg-brand-900 py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <RevealOnScroll variant="blur-up">
            <h2 className="text-4xl font-serif mb-6">Seus pés sustentam sua vida</h2>
            <p className="text-brand-100/80 mb-10 text-lg">
                Dê a eles o cuidado profissional que merecem. Agende sua manutenção mensal.
            </p>
            <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="bg-white text-brand-900 hover:bg-brand-50 border-none px-10 py-4">
                Agendar Horário
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default LimpezaPage;