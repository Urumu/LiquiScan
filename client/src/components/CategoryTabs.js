import React from 'react';

export default function CategoryTabs({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-row gap-2 mb-6 w-full overflow-x-auto no-scrollbar" role="tablist">
      {categories.map(cat => (
        <button
          key={cat.key}
          className={`px-5 py-2 rounded-t-xl font-semibold text-base transition-all outline-none border-b-4 whitespace-nowrap ${selected === cat.key ? 'bg-burgundy-dark text-gold border-gold' : 'bg-burgundy-light/80 text-white border-transparent hover:bg-burgundy-dark/70'}`}
          onClick={() => onSelect(cat.key)}
          role="tab"
          aria-selected={selected === cat.key}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
