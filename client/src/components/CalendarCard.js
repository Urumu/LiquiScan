import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export default function CalendarCard() {
  const navigate = useNavigate();
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = new Date(year, month, 1).getDay(); // 0 (domingo) - 6 (sábado)

  // Arreglo de días para renderizar el calendario
  const daysArray = [];
  for (let i = 0; i < firstDay; i++) daysArray.push(null);
  for (let d = 1; d <= daysInMonth; d++) daysArray.push(d);

  return (
    <div className="bg-white/10 rounded-2xl shadow-gold border border-gold/30 p-6 md:p-10 max-w-2xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-6">
        <button
          className="text-gold text-2xl font-bold px-2 hover:text-yellow-400 focus:outline-none"
          onClick={() => setYear(y => y - 1)}
          aria-label="Año anterior"
        >
          «
        </button>
        <span className="text-white text-xl font-bold select-none">{year}</span>
        <button
          className="text-gold text-2xl font-bold px-2 hover:text-yellow-400 focus:outline-none"
          onClick={() => setYear(y => y + 1)}
          aria-label="Año siguiente"
        >
          »
        </button>
      </div>
      <div className="flex items-center justify-center mb-4 gap-2">
        <button
          className="text-gold px-2 py-1 rounded-full hover:bg-gold/10 focus:outline-none"
          onClick={() => setMonth(m => (m === 0 ? 11 : m - 1))}
          aria-label="Mes anterior"
        >
          ‹
        </button>
        <span className="text-white font-semibold text-lg select-none w-32 text-center">{MONTHS[month]}</span>
        <button
          className="text-gold px-2 py-1 rounded-full hover:bg-gold/10 focus:outline-none"
          onClick={() => setMonth(m => (m === 11 ? 0 : m + 1))}
          aria-label="Mes siguiente"
        >
          ›
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 md:gap-2 text-center mb-2">
        {["D","L","M","M","J","V","S"].map((d, i) => (
          <div key={i} className="text-gold font-semibold text-base md:text-lg pb-1">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 md:gap-2">
        {daysArray.map((d, i) => (
          <div
            key={i}
            className={`rounded-lg h-10 md:h-12 flex items-center justify-center text-lg font-medium transition-all min-w-[2.25rem] ${d ? 'bg-white/10 text-white hover:bg-gold/20 cursor-pointer' : ''}`}
            onClick={() => d && navigate('/cierre-barra')}
          >
            {d || ''}
          </div>
        ))}
      </div>
    </div>
  );
}
