import React from 'react';
import { MapPin, Phone, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Container: Text Center no Mobile, Text Left no Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-stone-800 pb-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <h3 className="text-3xl text-white font-serif tracking-wide">Kelly <span className="italic text-brand-500">Bandeira</span></h3>
            <p className="text-stone-400 max-w-xs leading-relaxed font-light">
              Cuidado especializado e exclusivo. Um refúgio de bem-estar e saúde no coração de Campinas.
            </p>
          </div>

          {/* Contact - Ícones e Texto Centralizados no Mobile */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <h4 className="text-white uppercase tracking-[0.2em] text-xs font-bold mb-2 md:mb-6">Contato</h4>
            
            <div className="flex items-center gap-4 group justify-center md:justify-start">
              <div className="p-2 bg-stone-900 rounded-full group-hover:bg-brand-900 transition-colors shrink-0">
                <MapPin className="text-brand-500" size={18} />
              </div>
              <p className="font-light text-sm md:text-base">Rua Maria Monteiro, 1234<br/>Cambuí, Campinas - SP</p>
            </div>
            
            <div className="flex items-center gap-4 group justify-center md:justify-start">
              <div className="p-2 bg-stone-900 rounded-full group-hover:bg-brand-900 transition-colors shrink-0">
                 <Phone className="text-brand-500" size={18} />
              </div>
              <p className="font-light text-sm md:text-base">(19) 99999-9999</p>
            </div>
            
            <div className="flex items-center gap-4 group justify-center md:justify-start">
              <div className="p-2 bg-stone-900 rounded-full group-hover:bg-brand-900 transition-colors shrink-0">
                <Mail className="text-brand-500" size={18} />
              </div>
              <p className="font-light text-sm md:text-base">contato@kellybandeira.com.br</p>
            </div>
          </div>

          {/* Links - Centralizados no Mobile */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <h4 className="text-white uppercase tracking-[0.2em] text-xs font-bold mb-2 md:mb-6">Serviços</h4>
            <ul className="space-y-4 font-light w-full">
              <li>
                <Link to="/podologia" className="hover:text-brand-400 transition-colors flex items-center justify-center md:justify-start gap-2 group">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Podologia Clínica
                </Link>
              </li>
              <li>
                <Link to="/massoterapia" className="hover:text-brand-400 transition-colors flex items-center justify-center md:justify-start gap-2 group">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Massoterapia Terapêutica
                </Link>
              </li>
              <li>
                <Link to="/reflexologia" className="hover:text-brand-400 transition-colors flex items-center justify-center md:justify-start gap-2 group">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Reflexologia
                </Link>
              </li>
              <li>
                <Link to="/agendar" className="hover:text-brand-400 transition-colors flex items-center justify-center md:justify-start gap-2 group">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Agendamento Online
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-center md:text-left">
          <p className="text-xs text-stone-500 tracking-wider">© {new Date().getFullYear()} Kelly Bandeira. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-stone-400 hover:text-white transition-colors p-2 hover:bg-stone-900 rounded-full border border-transparent hover:border-stone-800">
                <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;