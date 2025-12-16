import React from 'react';
import Button from '../../components/UI/Button';
import { MapPin, Wifi, Coffee } from 'lucide-react';

const AboutSpace: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1 text-center lg:text-left">
            <span className="text-brand-600 font-bold tracking-[0.2em] text-sm uppercase mb-2 block">O Espaço</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-4 leading-none">
              Um refúgio no <br/>coração de Campinas
            </h2>
            <p className="text-stone-600 text-xl font-light leading-snug mb-8">
              Nosso consultório foi projetado para desconectar você do caos urbano. Situado no Cambuí, oferecemos a estrutura perfeita para quem busca excelência, silêncio e conforto absoluto.
            </p>
            
            <ul className="space-y-4 mb-10 inline-block text-left lg:block">
              <li className="flex items-center gap-3 text-stone-700 justify-center lg:justify-start">
                <MapPin className="text-brand-500 flex-shrink-0" size={20} />
                <span>Localização nobre com estacionamentos próximos</span>
              </li>
              <li className="flex items-center gap-3 text-stone-700 justify-center lg:justify-start">
                <Coffee className="text-brand-500 flex-shrink-0" size={20} />
                <span>Sala de espera privativa com café premium</span>
              </li>
              <li className="flex items-center gap-3 text-stone-700 justify-center lg:justify-start">
                <Wifi className="text-brand-500 flex-shrink-0" size={20} />
                <span>Ambiente climatizado e aromatizado</span>
              </li>
            </ul>

            <div className="flex justify-center lg:justify-start">
              <Button variant="outline" onClick={() => window.open('https://maps.google.com', '_blank')}>
                Ver Localização no Mapa
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <img src="https://picsum.photos/id/20/400/500" alt="Detalhes do consultório" className="w-full h-64 object-cover rounded-sm shadow-lg" />
              <img src="https://picsum.photos/id/175/400/300" alt="Sala de espera" className="w-full h-48 object-cover rounded-sm shadow-lg" />
            </div>
            <div className="space-y-4">
              <img src="https://picsum.photos/id/364/400/300" alt="Equipamentos esterilizados" className="w-full h-48 object-cover rounded-sm shadow-lg" />
              <img src="https://picsum.photos/id/24/400/500" alt="Ambiente de atendimento" className="w-full h-64 object-cover rounded-sm shadow-lg" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSpace;