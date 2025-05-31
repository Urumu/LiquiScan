import React from 'react';
import { useProductSelection } from '../context/ProductSelectionContext';

export default function ProductCard({ product }) {
  const { selectedProducts, toggleProduct } = useProductSelection();
  const checked = !!selectedProducts[product.id];

  return (
    <div
      className={`relative w-52 min-w-[13rem] bg-white/10 backdrop-blur-lg border-2 border-transparent rounded-2xl shadow-product overflow-hidden transition-all duration-300 hover:scale-105 group`}
      tabIndex={0}
      aria-label={`Producto: ${product.name}`}
    >
      {/* Checkbox circular dorado */}
      <label className="absolute bottom-3 right-3 z-10 cursor-pointer">
        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-gold bg-black/60 shadow-gold transition-all duration-200 ${checked ? 'bg-gold' : 'bg-black/60'}`}>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => toggleProduct(product.id)}
            className="opacity-0 absolute w-7 h-7 cursor-pointer"
            aria-checked={checked}
          />
          {checked && (
            <svg className="w-4 h-4 text-burgundy-dark animate-bounce" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          )}
        </span>
      </label>
      {/* Imagen con reflejo y sombra */}
      <div className="relative w-full h-36 flex items-center justify-center overflow-visible">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-32 object-contain rounded-xl shadow-lg group-hover:shadow-gold transition-all duration-300 bg-white/20 shadow-product"
        />
        {/* Reflejo sutil */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gradient-to-t from-gold/20 to-transparent rounded-full blur-sm opacity-60" />
      </div>
      <div className="p-4 flex flex-col items-center">
        <span className="text-white font-bold text-lg text-center truncate w-full group-hover:text-gold transition-colors duration-300" title={product.name}>{product.name}</span>
        <span className="text-gold font-extrabold text-base mt-2 drop-shadow-sm">Stock: {product.stock}</span>
      </div>
    </div>
  );
}
