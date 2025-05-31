import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange, onSubmit, placeholder }) {
  return (
    <form className="w-full flex items-center justify-center" onSubmit={e => { e.preventDefault(); onSubmit && onSubmit(); }}>
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold shadow-lg transition-all"
          placeholder={placeholder || "Buscar productos, marcas o categorías..."}
          aria-label={placeholder || "Buscar productos"}
          value={value}
          onChange={e => onChange && onChange(e.target.value)}
        />
        <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-6 h-6 flex items-center justify-center bg-transparent border-none p-0 m-0 focus:outline-none" tabIndex={-1} aria-label="Buscar">
          <Search />
        </button>
      </div>
    </form>
  );
}
