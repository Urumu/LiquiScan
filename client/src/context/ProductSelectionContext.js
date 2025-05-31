import React, { createContext, useContext, useState } from 'react';

const ProductSelectionContext = createContext();

export function ProductSelectionProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState({}); // { productId: true/false }

  const toggleProduct = (id) => {
    setSelectedProducts((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const clearSelection = () => setSelectedProducts({});

  return (
    <ProductSelectionContext.Provider value={{ selectedProducts, toggleProduct, clearSelection }}>
      {children}
    </ProductSelectionContext.Provider>
  );
}

export function useProductSelection() {
  return useContext(ProductSelectionContext);
}
