import React from 'react';
import Button from '../../../components/UI/Button';
import FAQ from '../../../components/UI/FAQ';
import { HeartPulse, Eye, ShieldCheck, Activity, AlertOctagon, Stethoscope, FileSearch } from 'lucide-react';
import RevealOnScroll from '../../../components/UI/RevealOnScroll';

const DiabeticoPage: React.FC = () => {
  const faqItems = [
    { question: "Por que o diabético não pode cortar a unha em casa?", answer: "O risco é triplo: 1) Perda de sensibilidade (pode se cortar e não sentir); 2) Má circulação (o sangue não chega para cicatrizar); 3) Imunidade baixa (risco alto de infecção). Um pequeno 'pique' pode virar uma úlcera grave." },
    { question: "Com que frequência devo vir?", answer: "A Associação Brasileira de Diabetes recomenda inspeção diária em casa e podologia mensal. O monitoramento constante previne complicações silenciosas." },
    { question: "Vocês tratam feridas?", answer: "Realizamos curativos em lesões superficiais e acompanhamos a cicatrização. Casos de infecção profunda, necrose ou gangrena são encaminhados imediatamente para cirurgião vascular com nosso relatório." }
  ];

  return (
    <div className="pt-24 pb-0 bg-white">
      
      {/* 1. HERO - CLÍNICO E SÉRIO (Dark Brand) */}
      <div className="relative bg-brand-950 py-24 md:py-32 overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <RevealOnScroll variant="blur-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-900 text-brand-200 border border-brand-800 text-xs font-bold uppercase tracking-[0.15em] mb-6 rounded-sm">
                <HeartPulse size={14} /> Protocolo de Risco
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
                Pé Diabético: <br/><span className="text-brand-300 italic">Prevenção é Vida</span>
                </h1>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={300}>
                <p className="text-lg text-brand-100 mb-10 leading-relaxed font-light">
                Para quem tem Diabetes, o cuidado com os pés não é estética, é saúde vital. A neuropatia (perda de sensibilidade) é silenciosa. Nós somos os olhos que vigiam a saúde dos seus pés.
                </p>
            </RevealOnScroll>
            
            <RevealOnScroll variant="scale" delay={400}>
                <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="px-8 py-4 bg-white text-brand-900 hover:bg-brand-50 border-none shadow-xl">
                Agendar Horário
                </Button>
            </RevealOnScroll>
          </div>
          
          <div className="relative hidden md:block">
             <RevealOnScroll variant="scale" delay={300}>
                <div className="absolute -inset-4 border border-brand-800/50 rounded-full"></div>
                <img src="https://picsum.photos/id/885/600/600" alt="Cuidado com pé diabético" className="rounded-full shadow-2xl border-4 border-brand-800 w-96 h-96 object-cover mx-auto grayscale hover:grayscale-0 transition-all duration-700" />
             </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* 2. AMEAÇA SILENCIOSA */}
      <section className="py-20 bg-white border-b border-stone-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <RevealOnScroll variant="blur-up">
                <h2 className="text-3xl font-serif text-stone-900 mb-6">O Perigo da Neuropatia</h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-12">
                O excesso de açúcar no sangue danifica os nervos dos pés ao longo dos anos. O resultado? Você perde a capacidade de sentir dor, calor ou frio. Você pode pisar em um prego, queimar a pele ou ter um sapato machucando o dia todo e <strong>não sentir absolutamente nada</strong>.
                </p>
            </RevealOnScroll>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
               {[
                   { icon: <AlertOctagon size={28} />, title: "Sem Dor", desc: "A ausência de dor mascara lesões graves que evoluem rápido." },
                   { icon: <Activity size={28} />, title: "Má Circulação", desc: "O sangue não chega corretamente, dificultando a cicatrização de qualquer corte." },
                   { icon: <ShieldCheck size={28} />, title: "Pele Seca", desc: "Ressecamento extremo que causa fissuras (portas de entrada para bactérias)." }
               ].map((item, index) => (
                    <RevealOnScroll key={index} delay={index * 150} variant="scale">
                        <div className="p-6 bg-stone-50 border-t-4 border-brand-600 shadow-sm h-full">
                            <div className="text-brand-700 mb-4">{item.icon}</div>
                            <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-stone-500">{item.desc}</p>
                        </div>
                    </RevealOnScroll>
               ))}
            </div>
         </div>
      </section>

      {/* 3. NOSSO PROTOCOLO - OVERLAP CARD */}
      <div className="bg-stone-50 py-24 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll variant="blur-up">
                <div className="bg-white rounded-sm shadow-xl overflow-hidden border border-stone-200">
                <div className="grid md:grid-cols-2">
                    <div className="p-10 md:p-14">
                        <span className="text-brand-700 font-bold tracking-widest text-xs uppercase mb-4 block">Segurança Total</span>
                        <h2 className="text-3xl font-serif text-stone-900 mb-8">Check-up Preventivo Mensal</h2>
                        
                        <div className="space-y-8">
                            {[
                                { icon: <FileSearch size={24} />, title: "1. Teste de Sensibilidade", desc: "Usamos o monofilamento (estesiômetro) para mapear áreas onde você perdeu a sensibilidade." },
                                { icon: <Eye size={24} />, title: "2. Inspeção de Frieiras", desc: "Verificação rigorosa entre os dedos. Frieiras são perigosas para diabéticos." },
                                { icon: <Stethoscope size={24} />, title: "3. Corte Anatômico", desc: "Sem cuticulagem profunda. Corte técnico e lixamento suave para evitar qualquer trauma." }
                            ].map((step, idx) => (
                                <RevealOnScroll key={idx} delay={idx * 100} variant="left">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-700 flex-shrink-0">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-stone-900 text-lg">{step.title}</h4>
                                            <p className="text-stone-600 text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                    <div className="bg-stone-100 relative min-h-[400px]">
                        <img src="https://picsum.photos/id/1059/800/800" alt="Exame dos pés" className="absolute inset-0 w-full h-full object-cover grayscale" />
                        <div className="absolute inset-0 bg-brand-900/20 mix-blend-multiply"></div>
                    </div>
                </div>
                </div>
            </RevealOnScroll>
         </div>
      </div>

      <FAQ items={faqItems} title="Perguntas Frequentes" />
      
      <section className="bg-stone-900 py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <RevealOnScroll variant="blur-up">
            <h2 className="text-4xl font-serif mb-6">Não corra riscos desnecessários</h2>
            <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="bg-white text-stone-900 hover:bg-stone-100 border-none px-10 py-4">
                Tirar Dúvidas
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default DiabeticoPage;