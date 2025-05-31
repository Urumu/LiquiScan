import React, { useState, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SearchBar from '../components/SearchBar';
import CategoryTabs from '../components/CategoryTabs';
import BarCatalogProductGrid from '../components/BarCatalogProductGrid';

// Categorías de ejemplo (puedes ajustar o cargar dinámicamente)
const CATEGORIES = [
  { key: "destilados", label: "Destilados" },
  { key: "licores", label: "Licores" },
  { key: "cervezas", label: "Cervezas" },
  { key: "vinos", label: "Vinos" },
  { key: "sin_alcohol", label: "Sin Alcohol" }
];

// Datos de ejemplo para bebidas (reemplaza por fetch real)
const MOCK_PRODUCTS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1514361892635-cebb9b6b9a09?auto=format&fit=facearea&w=256&q=80",
    name: "Pisco Alto del Carmen",
    category: "destilados",
    brand: "Alto del Carmen",
    description: "Pisco chileno 35° 1L. Frutal y suave."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1514361892635-cebb9b6b9a09?auto=format&fit=facearea&w=256&q=80",
    name: "Ron Havana Club",
    category: "destilados",
    brand: "Havana Club",
    description: "Ron blanco cubano clásico."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1514361892635-cebb9b6b9a09?auto=format&fit=facearea&w=256&q=80",
    name: "Cerveza Kunstmann Lager",
    category: "cervezas",
    brand: "Kunstmann",
    description: "Cerveza lager artesanal, 330cc."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1514361892635-cebb9b6b9a09?auto=format&fit=facearea&w=256&q=80",
    name: "Vino Concha y Toro Cabernet",
    category: "vinos",
    brand: "Concha y Toro",
    description: "Vino tinto reserva, 750ml."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1514361892635-cebb9b6b9a09?auto=format&fit=facearea&w=256&q=80",
    name: "Bebida Sprite",
    category: "sin_alcohol",
    brand: "Sprite",
    description: "Bebida gaseosa sin alcohol."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1581287050700-55f5e2b97c7a?auto=format&fit=facearea&w=256&q=80",
    name: "Agua Mineral Perrier",
    category: "sin_alcohol",
    brand: "Perrier",
    description: "Agua mineral con gas, refrescante y natural."
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1568051243853-9ed6d6b1b1b2?auto=format&fit=facearea&w=256&q=80",
    name: "Jugo de Naranja Natural",
    category: "sin_alcohol",
    brand: "Del Valle",
    description: "Jugo 100% natural de naranja fresca."
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1581287050700-55f5e2b97c7a?auto=format&fit=facearea&w=256&q=80",
    name: "Té Helado Lipton",
    category: "sin_alcohol",
    brand: "Lipton",
    description: "Té helado listo para beber con sabor a limón."
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1581287050700-55f5e2b97c7a?auto=format&fit=facearea&w=256&q=80",
    name: "Agua de Coco",
    category: "sin_alcohol",
    brand: "CocoFresh",
    description: "Agua de coco natural, hidratante y refrescante."
  }, 
];


const BarCatalogPage = () => {
  // Estado de búsqueda y categoría seleccionada
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].key);
  // Estado de bebidas gestionadas por el local
  const [managedIds, setManagedIds] = useState([1, 3]); // Ejemplo: productos ya gestionados
  // Estado de "guardado"
  const [saving, setSaving] = useState(false);

  // Filtrado de productos según búsqueda y categoría
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(prod =>
      prod.category === selectedCategory &&
      (
        prod.name.toLowerCase().includes(search.toLowerCase()) ||
        prod.brand.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, selectedCategory]);

  const handleToggleProduct = id => {
    setManagedIds(ids =>
      ids.includes(id) ? ids.filter(pid => pid !== id) : [...ids, id]
    );
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault(); // Prevenir recarga de página
    // La lógica de búsqueda ya está manejada por el estado 'search' y useMemo
  };

  const handleSave = () => {
    setSaving(true);
    // Simula guardado (reemplaza por API call real)
    setTimeout(() => {
      setSaving(false);
      alert("¡Cambios guardados!");
    }, 900);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-burgundy-dark via-burgundy-dark/90 to-black font-poppins">
      <Sidebar />
      <main className="flex flex-col min-h-screen transition-all md:ml-64">
        <Header />
        <div className="flex-1 px-2 md:px-8 py-6 space-y-6 relative">
          <header>
  <h1 className="text-2xl font-bold text-gold drop-shadow mb-3">Catálogo de Bebidas</h1>

</header>
          <div className="mb-5 w-full">
            <SearchBar
              value={search}
              onChange={setSearch}
              onSubmit={handleSearch}
              placeholder="Buscar por nombre o marca..."
            />
          </div>
          <CategoryTabs
            categories={CATEGORIES}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <section aria-live="polite">
            <BarCatalogProductGrid
              products={filteredProducts.map(prod => ({ ...prod, category: CATEGORIES.find(c => c.key === prod.category)?.label || prod.category }))}
              managedIds={managedIds}
              onToggle={handleToggleProduct}
            />
          </section>
          <div className="flex justify-end pt-4">
            <button
              className="bg-gold text-burgundy-dark font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-all hover:bg-yellow-400 focus:ring-2 focus:ring-gold outline-none disabled:bg-yellow-200 disabled:text-gray-400"
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? "Guardando..." : "Guardar Cambios"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BarCatalogPage;
