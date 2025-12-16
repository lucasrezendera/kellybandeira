import React from 'react';
import Button from '../../components/UI/Button';
import { ShieldCheck, Footprints, FileSearch, Sparkles, AlertCircle, Microscope, CheckCircle2, ArrowRight, HeartPulse, Stethoscope, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../../components/UI/RevealOnScroll';

const PodologiaPage: React.FC = () => {
  const treatments = [
    {
      id: 1,
      title: "Tratamento de Unha Encravada (Onicocriptose)",
      description: "Procedimento realizado com técnica asséptica e indolor para remoção da espícula. Alívio imediato da inflamação e curativos especializados.",
      icon: <AlertCircle size={24} />,
      tag: "Alívio Imediato",
      link: "/podologia/unha-encravada"
    },
    {
      id: 2,
      title: "Podoprofilaxia (Limpeza Técnica)",
      description: "O 'corte correto'. Remoção de excesso de pele, corte técnico das unhas para evitar encravamento, lixamento plantar e hidratação profunda.",
      icon: <Sparkles size={24} />,
      tag: "Manutenção Mensal",
      link: "/podologia/limpeza"
    },
    {
      id: 3,
      title: "Tratamento de Calos e Calosidades",
      description: "Remoção técnica e indolor de calos (núcleo) e hiperqueratoses (pele grossa), devolvendo a maciez e o conforto ao caminhar.",
      icon: <Footprints size={24} />,
      tag: "Conforto",
      link: "/podologia/calos"
    },
    {
      id: 4,
      title: "Pé Diabético (Preventivo)",
      description: "Avaliação da sensibilidade e circulação. Corte seguro e monitoramento para evitar feridas. Indispensável para quem tem Diabetes.",
      icon: <ShieldCheck size={24} />,
      tag: "Saúde Crítica",
      link: "/podologia/diabetico"
    },
    {
      id: 5,
      title: "Tratamento de Micoses e Fungos",
      description: "Protocolos combinados para eliminar fungos nas unhas (onicomicose) e na pele. Acompanhamento da evolução até a recuperação total.",
      icon: <Microscope size={24} />,
      tag: "Tratamento Longo Prazo",
      link: "/podologia/micose"
    },
    {
      id: 6,
      title: "Órteses Corretivas",
      description: "Aplicação de 'aparelhos' nas unhas (fibras ou botons) para corrigir a curvatura da unha e evitar que ela volte a encravar no futuro.",
      icon: <FileSearch size={24} />,
      tag: "Correção Definitiva",
      link: "/podologia/orteses"
    }
  ];

  return (
    <div className="pt-24 pb-0 bg-stone-50">
      
      {/* 1. Hero Section */}
      <div className="relative bg-stone-100 py-16 md:py-24 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-stone-200/50 hidden lg:block skew-x-12 transform translate-x-1/4 animate-fade-in"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <RevealOnScroll variant="blur-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                <ShieldCheck size={14} /> Biossegurança Garantida
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-none">
                Podologia Clínica <br/><span className="text-brand-700 italic">em Campinas</span>
                </h1>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={300}>
                <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-snug font-light max-w-3xl mx-auto">
                Saúde começa pelos pés. Tratamentos preventivos e especializados para patologias ungueais, com rigoroso padrão de higiene hospitalar.
                </p>
            </RevealOnScroll>
            
            <RevealOnScroll variant="blur-up" delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="px-10 py-4 text-lg shadow-xl">
                    Agendar Horário
                </Button>
                </div>
            </RevealOnScroll>
        </div>
      </div>

      {/* 2. Seção de Identificação (Conteúdo mantido) */}
      <div className="bg-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-stone-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll variant="scale" className="relative order-2 lg:order-1">
                <div className="relative rounded-t-[12rem] rounded-b-lg overflow-hidden shadow-2xl">
                    <img 
                        src="/images/podologia.jpg" 
                        alt="Cuidado podológico especializado" 
                        className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-sm max-w-xs shadow-lg border-l-4 border-brand-500 hidden md:block">
                        <p className="text-brand-900 font-serif italic text-xl">"Saúde e postura começam pela base."</p>
                    </div>
                </div>
            </RevealOnScroll>
            <div className="order-1 lg:order-2 text-center lg:text-left">
            <RevealOnScroll variant="right">
                <span className="text-brand-600 font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Sinais de Alerta</span>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-none">
                    Seus pés pedem <br/>
                    <span className="text-stone-400 italic">socorro?</span>
                </h2>
                <p className="text-stone-600 text-lg font-light leading-relaxed mb-12">
                    Muitas vezes ignoramos pequenos desconfortos até que virem dores insuportáveis. Identifique os sinais de que é hora de visitar a podóloga.
                </p>
                <div className="space-y-10">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                        <div className="flex-shrink-0">
                            <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                            <AlertCircle size={28} strokeWidth={1.5} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">Dor & Inflamação</h3>
                            <p className="text-stone-500 font-light leading-relaxed">
                            Unhas encravadas (com ou sem pus), dores nas pontas dos dedos ao caminhar ou calos que "queimam". Resolvemos o quadro agudo para alívio imediato.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                        <div className="flex-shrink-0">
                            <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                            <Footprints size={28} strokeWidth={1.5} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">Estética & Textura</h3>
                            <p className="text-stone-500 font-light leading-relaxed">
                            Rachaduras no calcanhar (fissuras), pele extremamente seca, unhas deformadas ou com coloração estranha. Devolvemos a aparência saudável.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                        <div className="flex-shrink-0">
                            <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                            <ShieldCheck size={28} strokeWidth={1.5} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">Prevenção & Diabetes</h3>
                            <p className="text-stone-500 font-light leading-relaxed">
                            Pacientes diabéticos, idosos ou praticantes de corrida precisam de acompanhamento mensal preventivo para evitar lesões graves.
                            </p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
            </div>
        </div>
        </div>
      </div>

      {/* 3. Lista de Procedimentos */}
      <div className="bg-stone-50 pt-16 pb-40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="blur-up">
            <div className="text-center mb-12 max-w-4xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-3 leading-tight">Tratamentos Especializados</h3>
                <p className="text-stone-600 font-light text-xl leading-snug">Procedimentos realizados com técnica apurada, focando no mínimo desconforto e máxima eficácia.</p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((item, index) => (
              <RevealOnScroll key={item.id} variant="scale" delay={index * 100} className="h-full">
                <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-200/60 flex flex-col h-full group text-center lg:text-left">
                    <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-brand-50 rounded-full text-brand-700 group-hover:bg-brand-100 transition-colors">
                        {item.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-600 border border-brand-200 px-2 py-1 rounded-sm">
                        {item.tag}
                    </span>
                    </div>
                    <h4 className="text-lg font-bold text-stone-900 mb-3">{item.title}</h4>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                    </p>
                    
                    <Link to={item.link} className="inline-flex items-center justify-center lg:justify-start text-brand-700 font-bold uppercase tracking-wide text-xs hover:text-brand-900 transition-colors mt-auto border-t border-stone-100 pt-4">
                        Saiba Mais <ArrowRight size={14} className="ml-1" />
                    </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* 4. OVERLAP SECTION: PÉ DIABÉTICO */}
      <div className="relative z-30 -mt-24 px-4 max-w-7xl mx-auto">
        <RevealOnScroll variant="blur-up">
            <div className="bg-brand-50 rounded-sm border border-brand-100 overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-7 p-10 md:p-14 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-brand-700 mb-6">
                    <HeartPulse size={28} />
                    <span className="font-bold uppercase tracking-widest text-sm">Atenção Especializada</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 leading-none">
                    Programa de Cuidado para <br/>
                    <span className="text-brand-800 italic">Pés Diabéticos</span>
                    </h2>
                    <p className="text-stone-600 text-xl leading-snug mb-8 font-light">
                    A diabetes exige um olhar clínico apurado. A perda de sensibilidade (neuropatia) é silenciosa e perigosa. Nosso protocolo foca na <strong>integridade da pele</strong> e na prevenção absoluta de lesões.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6 mt-8">
                    <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
                        <div className="bg-white p-2 rounded-full shadow-sm text-brand-600 mt-1">
                            <Stethoscope size={20} />
                        </div>
                        <div>
                        <h4 className="font-bold text-stone-900 text-sm mb-1">Avaliação de Sensibilidade</h4>
                        <p className="text-xs text-stone-500 leading-snug">Testes com monofilamento para monitorar a neuropatia periférica.</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
                        <div className="bg-white p-2 rounded-full shadow-sm text-brand-600 mt-1">
                            <Activity size={20} />
                        </div>
                        <div>
                        <h4 className="font-bold text-stone-900 text-sm mb-1">Corte Técnico Seguro</h4>
                        <p className="text-xs text-stone-500 leading-snug">Sem uso de materiais cortantes agressivos. Risco zero de ferimentos.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="lg:col-span-5 relative bg-brand-100/50 min-h-[300px] lg:min-h-full flex items-center justify-center p-8">
                    <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                    <div className="relative bg-white p-8 shadow-xl rounded-sm max-w-sm rotate-1 text-center lg:text-left">
                    <div className="border-l-4 border-brand-400 pl-4 mb-4 text-left">
                        <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Nota da Especialista</p>
                        <p className="font-serif text-xl text-stone-800 italic">"Prevenção é a única regra."</p>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                        Pés diabéticos não devem ser manipulados por curiosos. Uma simples cutícula removida incorretamente pode gerar uma úlcera de difícil cicatrização.
                    </p>
                    <Button variant="outline" className="w-full text-sm" onClick={() => window.open('https://wa.me/5519999999999', '_blank')}>
                        Agendar Horário
                    </Button>
                    </div>
                </div>
                </div>
            </div>
        </RevealOnScroll>
      </div>

      {/* 5. Diferencial: BIOSSEGURANÇA */}
      <section className="pt-32 pb-16 bg-stone-900 text-white relative z-10 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll variant="left">
                <div className="text-center lg:text-left">
                    <span className="text-brand-400 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Nossa Prioridade Absoluta</span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-none">Segurança Hospitalar em Consultório</h2>
                    <div className="space-y-6 text-stone-300 font-light text-xl leading-snug">
                    <p>
                        Sabemos que sua saúde não aceita riscos. Por isso, nosso protocolo de biossegurança é rígido e transparente.
                    </p>
                    <ul className="space-y-4 mt-6 text-lg inline-block text-left lg:block">
                        <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-brand-500 mt-1 flex-shrink-0" size={24} />
                        <span><strong>Instrumentais Estéreis:</strong> Tudo é lavado, embalado e esterilizado em autoclave a cada uso.</span>
                        </li>
                        <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-brand-500 mt-1 flex-shrink-0" size={24} />
                        <span><strong>Descartáveis:</strong> Lâminas, lixas e luvas são de uso único e descartadas na sua frente.</span>
                        </li>
                        <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-brand-500 mt-1 flex-shrink-0" size={24} />
                        <span><strong>Ambiente Asséptico:</strong> A cadeira e superfícies são higienizadas com desinfetantes hospitalares entre cada paciente.</span>
                        </li>
                    </ul>
                    </div>
                </div>
            </RevealOnScroll>
            <RevealOnScroll variant="scale">
                <div className="relative">
                    <div className="absolute -inset-4 border-2 border-stone-700 rounded-sm"></div>
                    <img src="https://picsum.photos/id/400/600/600" alt="Esterilização em Autoclave" className="relative shadow-2xl rounded-sm w-full grayscale hover:grayscale-0 transition-all duration-500"/>
                </div>
            </RevealOnScroll>
        </div>
        </div>
      </section>

      {/* 6. CTA Final */}
      <div className="bg-stone-900 py-16 border-t border-stone-800">
        <RevealOnScroll variant="blur-up">
            <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-serif text-white mb-4 leading-none">Cuide da sua base</h2>
            <p className="text-xl text-stone-400 mb-8 max-w-2xl mx-auto leading-snug">
                Não espere a dor limitar seus movimentos. Agende uma avaliação preventiva e descubra como é caminhar nas nuvens.
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
        </RevealOnScroll>
      </div>

    </div>
  );
};

export default PodologiaPage;