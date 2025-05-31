import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import BottleCountCard from '../components/BottleCountCard';

const EXAMPLE_BOTTLES = [
  {
    image: 'https://images.unsplash.com/photo-1514361892635-cebb9b6b9a09?auto=format&fit=facearea&w=256&q=80',
    name: 'Pisco Alto del Carmen',
    brand: 'Alto del Carmen',
    description: 'Pisco chileno 35° 1L. Frutal y suave.',
    closedBottles: 3,
    openOunces: 8
  },
  {
    image: 'https://images.unsplash.com/photo-1514361892635-cebb9b6b9a09?auto=format&fit=facearea&w=256&q=80',
    name: 'Whiskey Glenfiddich 12 años',
    brand: 'Glenfiddich',
    description: 'Whiskey escocés single malt, aroma a frutas y roble.',
    closedBottles: 2,
    openOunces: 5
  },
  {
    image: 'https://images.unsplash.com/photo-1580894908361-1edc4f334c97?auto=format&fit=crop&w=256&q=80',
    name: 'Tequila Patrón Silver',
    brand: 'Patrón',
    description: 'Tequila blanco 100% agave, sabor fresco y suave.',
    closedBottles: 1,
    openOunces: 12
  },
  {
    image: 'https://images.unsplash.com/photo-1579613831959-679e20d15a35?auto=format&fit=crop&w=256&q=80',
    name: 'Ron Havana Club 7 años',
    brand: 'Havana Club',
    description: 'Ron cubano añejado, notas de vainilla y caramelo.',
    closedBottles: 4,
    openOunces: 10
  },
  {
    image: 'https://images.unsplash.com/photo-1510626176961-4b30c5f6f3f7?auto=format&fit=crop&w=256&q=80',
    name: 'Vodka Grey Goose',
    brand: 'Grey Goose',
    description: 'Vodka premium francés, limpio y suave.',
    closedBottles: 5,
    openOunces: 6
  },
  {
    image: 'https://images.unsplash.com/photo-1556911073-52527ac437f5?auto=format&fit=crop&w=256&q=80',
    name: 'Ginebra Bombay Sapphire',
    brand: 'Bombay Sapphire',
    description: 'Ginebra inglesa, equilibrada y aromática.',
    closedBottles: 3,
    openOunces: 8
  },
  {
    image: 'https://images.unsplash.com/photo-1514361892635-cebb9b6b9a09?auto=format&fit=facearea&w=256&q=80',
    name: 'Vino tinto Malbec',
    brand: 'Trapiche',
    description: 'Vino argentino robusto y frutal.',
    closedBottles: 7,
    openOunces: 5
  },
  {
    image: 'https://images.unsplash.com/photo-1514361892635-cebb9b6b9a09?auto=format&fit=crop&w=256&q=80',
    name: 'Champagne Moët & Chandon',
    brand: 'Moët & Chandon',
    description: 'Champagne francés, burbujeante y elegante.',
    closedBottles: 2,
    openOunces: 3
  }
];

export default function BarClosingCountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-burgundy-dark via-burgundy-dark/90 to-black font-poppins">
      <Sidebar />
      <main className="flex flex-col min-h-screen transition-all md:ml-64">
        <Header />
        <div className="flex-1 px-2 md:px-8 py-6 space-y-8 relative">
          <h1 className="text-2xl font-bold text-gold drop-shadow mb-6">Cierre de Barra</h1>
          <div className="flex flex-col items-center gap-8">
            {EXAMPLE_BOTTLES.map((bottle, index) => (
              <BottleCountCard key={index} {...bottle} />
            ))}
            <button
              className="bg-gold text-burgundy-dark font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-all hover:bg-yellow-400 focus:ring-2 focus:ring-gold outline-none disabled:bg-yellow-200 disabled:text-gray-400 mt-4"
              onClick={() => alert('Funcionalidad de exportar a Excel próximamente')}
            >
              Generar Reporte Excel
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
