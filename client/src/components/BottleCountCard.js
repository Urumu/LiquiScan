import React from 'react';

export default function BottleCountCard({ image, name, brand, description, closedBottles, openOunces }) {
  return (
    <div className="flex items-center bg-black/60 rounded-xl shadow-md p-4 gap-6 relative group w-full max-w-2xl mx-auto">
      <img
        src={image}
        alt={name}
        className="w-20 h-28 object-contain rounded-lg bg-white/10 shadow-md"
      />
      <div className="flex-1 min-w-0">
        <div className="text-white font-semibold text-lg truncate">{name}</div>
        <div className="text-gold text-sm font-medium truncate">{brand}</div>
        <div className="text-gray-300 text-sm mt-2 line-clamp-2">{description}</div>
      </div>
      <div className="flex flex-col gap-2 items-end">
        <div className="flex gap-2">
          <div className="flex flex-col items-center bg-white/10 rounded-lg px-4 py-2 min-w-[90px]">
            <span className="text-gold font-bold text-lg">{closedBottles}</span>
            <span className="text-xs text-white/80 font-medium">Botellas cerradas</span>
          </div>
          <div className="flex flex-col items-center bg-white/10 rounded-lg px-4 py-2 min-w-[90px]">
            <span className="text-gold font-bold text-lg">{openOunces}</span>
            <span className="text-xs text-white/80 font-medium">Onzas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
