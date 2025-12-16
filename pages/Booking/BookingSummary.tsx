import React from 'react';
import { Calendar, Clock, Check, Sparkles, MapPin } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
}

interface BookingSummaryProps {
  service: Service | null;
  date: Date | null;
  time: string | null;
  step: number;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ service, date, time, step }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-stone-200 p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-stone-100">
        <Sparkles size={18} className="text-brand-600" />
        <h3 className="font-serif text-xl text-stone-900">Seu Agendamento</h3>
      </div>

      {/* Estado Vazio */}
      {!service && (
        <div className="text-center py-8 text-stone-400">
          <p className="text-sm">Selecione um serviço para começar.</p>
        </div>
      )}

      {/* Serviço Selecionado */}
      {service && (
        <div className="mb-6 animate-fade-in">
           <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Serviço</p>
           <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-stone-800 text-lg leading-tight">{service.name}</p>
                <p className="text-sm text-stone-500 mt-1">{service.duration}</p>
              </div>
              <p className="font-bold text-brand-800 text-lg">{service.price}</p>
           </div>
        </div>
      )}

      {/* Data e Hora */}
      {service && (
        <div className={`mb-6 p-4 bg-stone-50 rounded-lg border border-stone-100 transition-all duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-50 grayscale'}`}>
           <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Data & Hora</p>
           
           {date ? (
             <div className="space-y-3">
                <div className="flex items-center gap-3">
                   <Calendar size={18} className="text-brand-600" />
                   <span className="text-stone-700 font-medium capitalize">
                     {date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
                   </span>
                </div>
                {time ? (
                  <div className="flex items-center gap-3">
                     <Clock size={18} className="text-brand-600" />
                     <span className="text-stone-700 font-medium">{time}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-stone-400">
                     <Clock size={18} />
                     <span className="text-sm italic">Selecione um horário...</span>
                  </div>
                )}
             </div>
           ) : (
             <p className="text-sm text-stone-400 italic">Aguardando seleção de data...</p>
           )}
        </div>
      )}

      {/* Localização Fixa */}
      <div className="mt-8 pt-4 border-t border-stone-100">
         <div className="flex items-start gap-3 text-sm text-stone-500">
            <MapPin size={16} className="mt-0.5 text-brand-400" />
            <p>Rua Maria Monteiro, 1234 <br/> Cambuí, Campinas - SP</p>
         </div>
      </div>

      {/* Indicador de Passos Visual */}
      <div className="mt-6 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-stone-300">
         <span className={step >= 1 ? "text-brand-600" : ""}>1. Serviço</span>
         <span className="h-px w-4 bg-stone-200"></span>
         <span className={step >= 2 ? "text-brand-600" : ""}>2. Horário</span>
         <span className="h-px w-4 bg-stone-200"></span>
         <span className={step >= 3 ? "text-brand-600" : ""}>3. Confirmar</span>
      </div>
    </div>
  );
};

export default BookingSummary;