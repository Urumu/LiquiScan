import React from 'react';
import { SidebarProvider } from '../context/SidebarContext';
import { ProductSelectionProvider } from '../context/ProductSelectionContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CarouselSection from '../components/CarouselSection';
import FloatingAddBarButton from '../components/FloatingAddBarButton';

const CATEGORIES = [
  { key: 'piscos', label: 'Piscos' },
  { key: 'rones', label: 'Rones' },
  { key: 'vinos', label: 'Vinos' },
  { key: 'bebidas', label: 'Bebidas' },
  { key: 'vodkas', label: 'Vodkas' },
];

export default function HomePage() {
  return (
    <SidebarProvider>
      <ProductSelectionProvider>
        <div className="min-h-screen bg-gradient-to-b from-burgundy-dark via-burgundy-dark/90 to-black font-poppins">
          <Sidebar />
          <main className="flex flex-col min-h-screen transition-all md:ml-64">
            <Header />
            <div className="flex-1 px-2 md:px-8 py-6 space-y-6">
              <SearchBar />
              <div className="space-y-10">
                {CATEGORIES.map((cat) => (
                  <CarouselSection key={cat.key} category={cat.key} label={cat.label} />
                ))}
              </div>
            </div>
            <FloatingAddBarButton />
          </main>
        </div>
      </ProductSelectionProvider>
    </SidebarProvider>
  );
}
