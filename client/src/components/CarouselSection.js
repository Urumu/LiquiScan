import React from 'react';
import ProductCard from './ProductCard';

// Simulación de productos por categoría
const demoProducts = {
  piscos: [
    { id: 'p1', name: 'Pisco Quebranta', stock: 12, image: '/assets/pisco.png' },
    { id: 'p2', name: 'Pisco Italia', stock: 8, image: '/assets/pisco2.png' },
    { id: 'p3', name: 'Pisco Acholado', stock: 15, image: '/assets/pisco3.png' },
    { id: 'p4', name: 'Pisco Mosto Verde', stock: 10, image: '/assets/pisco4.png' },
    { id: 'p5', name: 'Pisco Aromático', stock: 7, image: '/assets/pisco5.png' },
    { id: 'p6', name: 'Pisco Torontel', stock: 5, image: '/assets/pisco6.png' },
    { id: 'p7', name: 'Pisco Albilla', stock: 9, image: '/assets/pisco7.png' },
    { id: 'p8', name: 'Pisco Italia Premium', stock: 4, image: '/assets/pisco8.png' },
  ],
  rones: [
    { id: 'r1', name: 'Ron Cartavio', stock: 5, image: '/assets/ron.png' },
    { id: 'r2', name: 'Ron Diplomático', stock: 2, image: '/assets/ron2.png' },
    { id: 'r3', name: 'Ron Zacapa', stock: 6, image: '/assets/ron3.png' },
    { id: 'r4', name: 'Ron Bacardí', stock: 8, image: '/assets/ron4.png' },
    { id: 'r5', name: 'Ron Havana Club', stock: 4, image: '/assets/ron5.png' },
  ],
  
  vinos: [
    { id: 'v1', name: 'Vino Malbec', stock: 20, image: '/assets/vino.png' },
    { id: 'v2', name: 'Vino Cabernet', stock: 15, image: '/assets/vino2.png' },
    { id: 'v3', name: 'Vino Merlot', stock: 18, image: '/assets/vino3.png' },
    { id: 'v4', name: 'Vino Syrah', stock: 10, image: '/assets/vino4.png' },
    { id: 'v5', name: 'Vino Chardonnay', stock: 12, image: '/assets/vino5.png' },
  ],
  
  bebidas: [
    { id: 'b1', name: 'Tónica', stock: 40, image: '/assets/tonica.png' },
    { id: 'b2', name: 'Ginger Ale', stock: 18, image: '/assets/ginger.png' },
    { id: 'b3', name: 'Soda', stock: 30, image: '/assets/soda.png' },
    { id: 'b4', name: 'Agua Mineral', stock: 25, image: '/assets/agua.png' },
    { id: 'b5', name: 'Limonada', stock: 22, image: '/assets/limonada.png' },
  ],
  
  vodkas: [
    { id: 'vod1', name: 'Vodka Absolut', stock: 10, image: '/assets/vodka.png' },
    { id: 'vod2', name: 'Vodka Smirnoff', stock: 7, image: '/assets/vodka2.png' },
    { id: 'vod3', name: 'Vodka Grey Goose', stock: 5, image: '/assets/vodka3.png' },
    { id: 'vod4', name: 'Vodka Belvedere', stock: 6, image: '/assets/vodka4.png' },
    { id: 'vod5', name: 'Vodka Stolichnaya', stock: 8, image: '/assets/vodka5.png' },
  ],
};

export default function CarouselSection({ category, label }) {
  const products = demoProducts[category] || [];
  return (
    <section aria-label={`Carrusel de ${label}`} className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-gold mb-2">{label}</h2>
      <div
        className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-md px-6 py-2 md:px-5 md:py-4 transition-all"
      >
        {/* Desktop: grid de 5 columnas, móvil: scroll horizontal */}
        <div className="flex flex-row gap-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-burgundy-light w-full">
          {products.map((prod, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === products.length - 1;
            let extraClass = 'my-2 md:my-2';
            if (isFirst) extraClass += ' ml-2 md:ml-2';
            if (isLast) extraClass += ' mr-2 md:mr-2';
            return (
              <div key={prod.id} className={extraClass} style={{display: 'flex'}}>
                <ProductCard product={prod} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
