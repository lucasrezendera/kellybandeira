import React from 'react';
import { UserCheck, ShieldCheck, MapPin, Star } from 'lucide-react';
import RevealOnScroll from '../../components/UI/RevealOnScroll';

const TrustBar: React.FC = () => {
  const items = [
    { icon: <UserCheck size={24} />, title: "Atendimento Individualizado", desc: "Seu tempo é respeitado" },
    { icon: <ShieldCheck size={24} />, title: "Profissional Qualificada", desc: "Anos de experiência clínica" },
    { icon: <MapPin size={24} />, title: "Localização Premium", desc: "Fácil acesso no Cambuí" },
    { icon: <Star size={24} />, title: "Satisfação Garantida", desc: "Clientes que indicam clientes" },
  ];

  return (
    <section className="bg-white py-8 border-b border-stone-100 shadow-sm relative z-20 -mt-4 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-sm">
      <div className="px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
                <div className="flex items-start space-x-4 p-2 rounded-lg hover:bg-stone-50 transition-colors duration-300">
                <div className="text-brand-600 bg-brand-50 p-2 rounded-full">
                    {item.icon}
                </div>
                <div>
                    <h3 className="font-semibold text-stone-900 text-sm uppercase tracking-wide mb-1">{item.title}</h3>
                    <p className="text-stone-500 text-sm leading-snug">{item.desc}</p>
                </div>
                </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;