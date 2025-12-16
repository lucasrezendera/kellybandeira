import React from 'react';
import { ArrowRight, Footprints, Hand, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../../components/UI/RevealOnScroll';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      id: 'podologia',
      title: 'Podologia Clínica',
      desc: 'Tratamentos preventivos e corretivos para a saúde dos seus pés. Protocolos rigorosos de biossegurança.',
      icon: <Footprints size={28} strokeWidth={1.5} />,
      link: '/podologia',
      image: "https://picsum.photos/id/1025/600/400"
    },
    {
      id: 'massoterapia',
      title: 'Massoterapia',
      desc: 'Técnicas manuais para alívio de dores, tensões musculares e estresse. Um momento de reconexão.',
      icon: <Hand size={28} strokeWidth={1.5} />,
      link: '/massoterapia',
      image: "https://picsum.photos/id/1029/600/400"
    },
    {
      id: 'reflexologia',
      title: 'Reflexologia',
      desc: 'Equilíbrio sistêmico através da estimulação de pontos reflexos nos pés. Relaxamento profundo.',
      icon: <Activity size={28} strokeWidth={1.5} />,
      link: '/reflexologia',
      image: "https://picsum.photos/id/1012/600/400"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll variant="blur-up">
            <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
            <span className="text-brand-600 font-bold tracking-[0.2em] text-sm uppercase mb-2 block">Nossas Especialidades</span>
            <h2 className="text-5xl md:text-6xl font-serif text-stone-900 mb-4 leading-tight">Tratamentos Exclusivos</h2>
            <p className="text-stone-500 text-xl font-light leading-snug">
                Cada atendimento inicia com uma avaliação minuciosa. Unimos conhecimento técnico e acolhimento para entregar resultados reais.
            </p>
            </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <RevealOnScroll key={service.id} variant="scale" delay={index * 150} className="h-full">
                <Link 
                to={service.link}
                className="group flex flex-col h-full"
                >
                <div className="relative h-64 overflow-hidden rounded-sm mb-6">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500 z-10"></div>
                    <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                </div>
                
                <div className="flex-grow flex flex-col items-center text-center px-4">
                    <div className="text-brand-700 mb-4 p-3 bg-brand-50 rounded-full group-hover:bg-brand-100 transition-colors">
                    {service.icon}
                    </div>
                    <h3 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-brand-800 transition-colors">{service.title}</h3>
                    <p className="text-stone-500 mb-6 leading-relaxed font-light">
                    {service.desc}
                    </p>
                    <div className="mt-auto flex items-center text-brand-800 font-bold text-xs tracking-widest uppercase border-b border-transparent group-hover:border-brand-300 pb-1 transition-all">
                    Conhecer Tratamento 
                    </div>
                </div>
                </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;