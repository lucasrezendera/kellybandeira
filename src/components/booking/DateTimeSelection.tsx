"use client";

import React, { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Sun, Sunset, Moon } from 'lucide-react';

interface DateTimeSelectionProps {
    onSelect: (date: Date, time: string) => void;
    selectedDate: Date | null;
    selectedTime: string | null;
}

const DateTimeSelection: React.FC<DateTimeSelectionProps> = ({ onSelect, selectedDate, selectedTime }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);

    // Gera horários quando uma data é selecionada
    useEffect(() => {
        if (selectedDate) {
            // Mock de horários (Simulando disponibilidade real)
            // Em produção, isso viria de uma API baseado no dia da semana
            const times = [
                '09:00', '09:30', '10:00', '10:30', '11:00',
                '13:30', '14:00', '14:30', '15:00', '16:00', '16:30', '17:30', '18:00'
            ];
            setAvailableTimes(times);
        } else {
            setAvailableTimes([]);
        }
    }, [selectedDate]);

    // Lógica do Calendário
    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const days = new Date(year, month + 1, 0).getDate();
        return days;
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const handlePrevMonth = () => {
        const newDate = new Date(currentMonth);
        newDate.setMonth(currentMonth.getMonth() - 1);
        // Não permite voltar antes do mês atual
        const today = new Date();
        if (newDate.getMonth() < today.getMonth() && newDate.getFullYear() === today.getFullYear()) return;
        setCurrentMonth(newDate);
    };

    const handleNextMonth = () => {
        const newDate = new Date(currentMonth);
        newDate.setMonth(currentMonth.getMonth() + 1);
        setCurrentMonth(newDate);
    };

    const handleDateClick = (day: number) => {
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (newDate >= today) {
            // Se mudar a data, reseta a hora
            if (selectedTime) onSelect(newDate, '');
            else onSelect(newDate, '');
        }
    };

    const renderCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentMonth);
        const firstDay = getFirstDayOfMonth(currentMonth);
        const days = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Empty slots for previous month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-12 w-full"></div>);
        }

        // Days
        for (let i = 1; i <= daysInMonth; i++) {
            const dateToCheck = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
            const isSelected = selectedDate &&
                dateToCheck.getDate() === selectedDate.getDate() &&
                dateToCheck.getMonth() === selectedDate.getMonth();

            const isToday = dateToCheck.getDate() === today.getDate() &&
                dateToCheck.getMonth() === today.getMonth();

            const isPast = dateToCheck < today;
            // Simula domingo fechado
            const isSunday = dateToCheck.getDay() === 0;
            const isDisabled = isPast || isSunday;

            days.push(
                <button
                    key={i}
                    disabled={isDisabled}
                    onClick={() => handleDateClick(i)}
                    className={`
            h-12 w-full rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 relative
            ${isSelected
                            ? 'bg-brand-800 text-white shadow-md font-bold'
                            : isDisabled
                                ? 'text-stone-300 cursor-not-allowed bg-stone-50/50'
                                : 'text-stone-700 hover:bg-brand-50 hover:text-brand-800 border border-transparent hover:border-brand-200'
                        }
            ${isToday && !isSelected ? 'text-brand-600 font-bold border border-brand-200' : ''}
          `}
                >
                    {i}
                    {isToday && !isSelected && <span className="absolute bottom-1 w-1 h-1 bg-brand-600 rounded-full"></span>}
                </button>
            );
        }
        return days;
    };

    const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    // Agrupamento de horários por período
    const morningTimes = availableTimes.filter(t => parseInt(t) < 12);
    const afternoonTimes = availableTimes.filter(t => parseInt(t) >= 12 && parseInt(t) < 18);
    const eveningTimes = availableTimes.filter(t => parseInt(t) >= 18);

    const TimeButton = ({ time }: { time: string }) => (
        <button
            onClick={() => onSelect(selectedDate!, time)}
            className={`py-2 px-4 rounded-md text-sm font-bold border transition-all duration-200 ${selectedTime === time
                    ? 'bg-brand-600 text-white border-brand-600 shadow-md transform scale-105'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-brand-400 hover:text-brand-700 hover:shadow-sm'
                }`}
        >
            {time}
        </button>
    );

    return (
        <div className="animate-fade-in-up">
            <div className="mb-8 text-center lg:text-left">
                <h2 className="text-3xl font-serif text-stone-900 mb-2">Quando você gostaria de vir?</h2>
                <p className="text-stone-500 font-light text-lg">Selecione uma data disponível no calendário.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">

                {/* LADO ESQUERDO: CALENDÁRIO */}
                <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
                    {/* Header Calendário */}
                    <div className="flex items-center justify-between mb-6">
                        <button onClick={handlePrevMonth} className="p-2 hover:bg-stone-100 rounded-full text-stone-600 transition-colors">
                            <ChevronLeft size={20} />
                        </button>
                        <h3 className="text-lg font-serif font-bold text-stone-800 capitalize">
                            {currentMonth.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                        </h3>
                        <button onClick={handleNextMonth} className="p-2 hover:bg-stone-100 rounded-full text-stone-600 transition-colors">
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Dias da Semana */}
                    <div className="grid grid-cols-7 mb-2">
                        {weekDays.map(day => (
                            <div key={day} className="text-center text-xs font-bold text-stone-400 uppercase tracking-wider py-2">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Grade de Dias */}
                    <div className="grid grid-cols-7 gap-1">
                        {renderCalendarDays()}
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-4 text-xs text-stone-400">
                        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-800"></div> Selecionado</div>
                        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full border border-stone-300"></div> Disponível</div>
                        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-stone-100"></div> Indisponível</div>
                    </div>
                </div>

                {/* LADO DIREITO: HORÁRIOS */}
                <div className="flex flex-col">
                    {selectedDate ? (
                        <div className="animate-fade-in h-full">
                            <div className="flex items-center gap-2 mb-6 pb-2 border-b border-stone-100 justify-center lg:justify-start">
                                <Clock className="text-brand-600" size={20} />
                                <h3 className="font-bold text-stone-800">Horários para {selectedDate.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}</h3>
                            </div>

                            <div className="space-y-6 text-center lg:text-left">
                                {/* Manhã */}
                                {morningTimes.length > 0 && (
                                    <div>
                                        <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-stone-400 justify-center lg:justify-start">
                                            <Sun size={14} /> Manhã
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            {morningTimes.map(time => <TimeButton key={time} time={time} />)}
                                        </div>
                                    </div>
                                )}

                                {/* Tarde */}
                                {afternoonTimes.length > 0 && (
                                    <div>
                                        <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-stone-400 justify-center lg:justify-start">
                                            <Sunset size={14} /> Tarde
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            {afternoonTimes.map(time => <TimeButton key={time} time={time} />)}
                                        </div>
                                    </div>
                                )}

                                {/* Noite */}
                                {eveningTimes.length > 0 && (
                                    <div>
                                        <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-stone-400 justify-center lg:justify-start">
                                            <Moon size={14} /> Noite
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            {eveningTimes.map(time => <TimeButton key={time} time={time} />)}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-stone-300 border-2 border-dashed border-stone-100 rounded-xl bg-stone-50/50 p-8">
                            <CalendarIcon size={48} className="mb-4 opacity-50" />
                            <p className="text-center font-medium">Selecione um dia no calendário para ver os horários disponíveis.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default DateTimeSelection;
