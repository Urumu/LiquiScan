import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Plus, Minus, X } from "lucide-react";

// Mock data for demonstration, replace with real fetch/API
const MOCK_BAR_PRODUCTS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1514361892635-cebb9b6b9a09?auto=format&fit=facearea&w=256&q=80",
    name: "Pisco Alto del Carmen",
    brand: "Alto del Carmen",
    quantity: 2,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1514361892635-cebb9b6b9a09?auto=format&fit=facearea&w=256&q=80",
    name: "Ron Havana Club",
    brand: "Havana Club",
    quantity: 1,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1514361892635-cebb9b6b9a09?auto=format&fit=facearea&w=256&q=80",
    name: "Whisky Johnnie Walker",
    brand: "Johnnie Walker",
    quantity: 3,
  },
];

export default function BarManagementPage() {
  const [products, setProducts] = useState(MOCK_BAR_PRODUCTS);
  const [adding, setAdding] = useState(false);
  const [newProduct, setNewProduct] = useState("");

  const handleQuantityChange = (id, value) => {
    setProducts(products =>
      products.map(product =>
        product.id === id
          ? { ...product, quantity: Math.max(0, Number(value)) }
          : product
      )
    );
  };

  const handleIncrement = id => {
    setProducts(products =>
      products.map(product =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const handleDecrement = id => {
    setProducts(products =>
      products.map(product =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleRemove = id => {
    setProducts(products => products.filter(product => product.id !== id));
  };

  const handleAddProduct = () => {
    if (!newProduct.trim()) return;
    setProducts(products => [
      ...products,
      {
        id: Date.now(),
        image: "https://placehold.co/64x96/000/fff?text=+",
        name: newProduct,
        brand: "Nueva Marca",
        quantity: 1,
      },
    ]);
    setNewProduct("");
    setAdding(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-burgundy-dark via-burgundy-dark/90 to-black font-poppins">
      <Sidebar />
      <main className="flex flex-col min-h-screen transition-all md:ml-64">
        <Header />
        <div className="flex flex-col items-center py-8 px-2 md:px-8 w-full h-full">
          <div className="max-w-3xl w-full mx-auto bg-white/5 rounded-2xl shadow-2xl p-10 mt-2 mb-8 relative">
            <div className="flex items-center gap-3 mb-6">
              <button className="bg-gold text-burgundy-dark font-bold rounded-lg px-4 py-2 shadow hover:bg-yellow-400 transition-all" onClick={() => alert('Funcionalidad de crear barra próximamente')}>+ Nueva Barra</button>
              <select className="bg-gold text-burgundy-dark font-bold rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">
                <option>Barra</option>
                {/* Otras barras aquí */}
              </select>
              <button className="ml-auto bg-red-600 text-white font-bold rounded-full px-6 py-2 shadow-xl hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-red-300" onClick={() => alert('Funcionalidad de eliminar barra próximamente')}>Eliminar Barra</button>
            </div>
            <div className="bmp-cards-container flex flex-col gap-4 max-h-[28rem] overflow-y-auto no-scrollbar pr-2">
              {products.map(product => (
                <div
                  key={product.id}
                  className="flex items-center bg-black/60 rounded-xl shadow-md p-3 gap-4 relative group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-24 object-contain rounded-lg bg-white/10"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-base truncate">{product.name}</div>
                    <div className="text-gold text-sm font-medium truncate">{product.brand}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-burgundy-light/80 text-gold hover:bg-gold hover:text-burgundy-dark transition-all"
                      onClick={() => handleDecrement(product.id)}
                      aria-label="Disminuir cantidad"
                    >
                      <Minus size={18} />
                    </button>
                    <input
                      type="number"
                      min="0"
                      className="w-12 text-center bg-transparent border-b-2 border-gold text-white font-semibold focus:outline-none focus:border-gold hide-number-spin"
                      value={product.quantity}
                      onChange={e => handleQuantityChange(product.id, e.target.value)}
                      aria-label="Cantidad"
                    />
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-burgundy-light/80 text-gold hover:bg-gold hover:text-burgundy-dark transition-all"
                      onClick={() => handleIncrement(product.id)}
                      aria-label="Aumentar cantidad"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <button
                    className="ml-3 text-white/60 hover:text-red-500 transition-colors p-2 rounded-full"
                    onClick={() => handleRemove(product.id)}
                    aria-label="Eliminar producto"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
              {/* Añadir producto */}
              <div className="flex items-center gap-4 bg-black/40 rounded-xl p-3 mt-2 border-2 border-dashed border-gold cursor-pointer hover:bg-burgundy-dark/70 transition-all" onClick={() => setAdding(true)}>
                <div className="w-16 h-24 flex items-center justify-center bg-white/10 rounded-lg">
                  <Plus className="text-gold w-8 h-8" />
                </div>
                <div className="flex-1 text-white/80 font-medium">Añadir producto desde mi catálogo</div>
              </div>
              {adding && (
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Nombre del producto..."
                    value={newProduct}
                    onChange={e => setNewProduct(e.target.value)}
                  />
                  <button className="bg-gold text-burgundy-dark px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-all" onClick={handleAddProduct}>Agregar</button>
                  <button className="text-red-500 px-2 py-2" onClick={() => setAdding(false)} aria-label="Cancelar">
                    <X />
                  </button>
                </div>
              )}
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-burgundy-dark text-white text-xl font-bold rounded-full px-10 py-4 shadow-lg hover:bg-burgundy-light/80 transition-all focus:outline-none focus:ring-2 focus:ring-gold">
                Abrir Barra
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
