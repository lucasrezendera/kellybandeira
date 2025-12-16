import React, { useState } from 'react';
import ServiceSelection from './Steps/ServiceSelection';
import DateTimeSelection from './Steps/DateTimeSelection';
import ReviewForm from './Steps/ReviewForm';
import BookingSummary from './BookingSummary';
import { ArrowLeft } from 'lucide-react';

// Interfaces
interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
}

const BookingPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    if (time) {
        setSelectedTime(time);
        setStep(3);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (step > 1) {
       setStep(step - 1);
       // Limpa seleções futuras ao voltar
       if (step === 2) {
         setSelectedDate(null);
         setSelectedTime(null);
       }
    }
  };

  return (
    <div className="pt-28 pb-20 bg-stone-50 min-h-screen">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Simples */}
          <div className="mb-8 flex items-center justify-between">
             {step > 1 ? (
                <button onClick={handleBack} className="flex items-center text-stone-500 hover:text-brand-800 transition-colors text-sm font-bold uppercase tracking-wide group">
                   <div className="p-2 bg-white rounded-full border border-stone-200 mr-3 group-hover:border-brand-400 shadow-sm">
                      <ArrowLeft size={16} />
                   </div>
                   Voltar para etapa anterior
                </button>
             ) : (
               <h1 className="text-2xl font-serif text-stone-900">Agendamento Online</h1>
             )}
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
             
             {/* COLUNA ESQUERDA: Onde a ação acontece (Ocupa 8 colunas) */}
             <div className="lg:col-span-8">
                <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-100 min-h-[500px]">
                   
                   {step === 1 && (
                      <ServiceSelection 
                         onSelect={handleServiceSelect} 
                         selectedService={selectedService}
                      />
                   )}

                   {step === 2 && (
                      <DateTimeSelection 
                         selectedDate={selectedDate}
                         selectedTime={selectedTime}
                         onSelect={handleDateTimeSelect}
                      />
                   )}

                   {step === 3 && selectedService && selectedDate && selectedTime && (
                      <ReviewForm 
                         service={selectedService}
                         date={selectedDate}
                         time={selectedTime}
                      />
                   )}
                </div>
             </div>

             {/* COLUNA DIREITA: Resumo Sticky (Ocupa 4 colunas) */}
             <div className="lg:col-span-4 hidden lg:block h-full">
                <BookingSummary 
                  service={selectedService}
                  date={selectedDate}
                  time={selectedTime}
                  step={step}
                />
             </div>
             
             {/* MOBILE SUMMARY: Versão simplificada que aparece só no mobile se tiver serviço selecionado */}
             <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 p-4 z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
               {selectedService ? (
                 <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase">Total</p>
                      <p className="text-lg font-bold text-brand-800">{selectedService.price}</p>
                    </div>
                    <div className="text-right">
                       <p className="text-xs text-stone-500 font-medium">{selectedService.name}</p>
                       <p className="text-xs text-stone-400">{selectedService.duration}</p>
                    </div>
                 </div>
               ) : (
                 <p className="text-center text-sm text-stone-400">Selecione um serviço para continuar</p>
               )}
             </div>

          </div>
          
       </div>
    </div>
  );
};

export default BookingPage;