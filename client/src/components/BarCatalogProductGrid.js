import React from 'react';
import CatalogProductCard from './CatalogProductCard';

export default function BarCatalogProductGrid({ products, managedIds, onToggle }) {
  if (products.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12 text-lg">No hay bebidas que coincidan con la búsqueda.</div>
    );
  }
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] gap-6 pb-6 w-full">
      {products.map(prod => (
        <CatalogProductCard
          key={prod.id}
          image={prod.image}
          name={prod.name}
          category={prod.category}
          brand={prod.brand}
          description={prod.description}
          checked={managedIds.includes(prod.id)}
          onToggle={() => onToggle(prod.id)}
        />
      ))}
    </div>
  );
}
