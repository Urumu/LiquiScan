import React from 'react';
import { LayoutGrid, Library } from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';
import logo from '../assets/logo.svg';

export default function Sidebar() {
  const { collapsed, toggleSidebar } = useSidebar();

  return (
    <>
      {/* Overlay móvil */}
      {!collapsed && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={toggleSidebar}
          aria-label="Cerrar menú lateral"
        />
      )}
      <aside
        className={`fixed top-0 left-0 h-full z-40 flex flex-col items-center bg-gradient-to-b from-burgundy-dark via-burgundy-dark/90 to-black shadow-[8px_0_16px_-8px_rgba(0,0,0,0.7)] transition-all duration-300
          ${collapsed ? '-translate-x-full pointer-events-none w-0 md:translate-x-0 md:pointer-events-auto md:w-64' : 'translate-x-0 w-4/5 max-w-xs md:w-64'}
        `}
        aria-label="Sidebar"
      >
        <div 
          className={`flex flex-col items-center py-8 w-full relative 
            ${collapsed ? 'hidden md:flex' : 'flex'}` // <-- Clases condicionales hidden/flex
          }
        >
          {/* Botón cerrar sólo en móvil */}
          <button
            className="absolute top-2 right-2 md:hidden text-gold bg-black/40 rounded-full p-2 hover:bg-gold/20 focus:outline-none focus:ring-2 focus:ring-gold"
            onClick={toggleSidebar}
            aria-label="Cerrar menú lateral"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="flex items-center gap-4 mb-10 px-2">
            <img src={logo} alt="LiquiScan Logo" className="h-14 w-14" />
            <span className="text-2xl font-extrabold text-gold tracking-tight" style={{textShadow: '0 1px 2px #0006'}}>LiquiScan</span>
          </div>
          <nav className="mt-4 w-full">
            <ul className="flex flex-col gap-8 px-6" data-component-name="Sidebar">
              <li className="menu-item">
                <a href="/" className="flex flex-row items-center gap-4 w-full text-lg font-montserrat text-gray-200 hover:text-gold hover:scale-105 transition-all">
                  <span className="text-gold text-xl inline shrink-0">🍸</span>
                  <span className="italic truncate min-w-0">Mi Bar</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="/gestion-bebidas" className="flex flex-row items-center gap-4 w-full text-lg font-montserrat text-gray-200 hover:text-gold hover:scale-105 transition-all">
                  <LayoutGrid className="text-gold text-xl inline shrink-0" />
                  <span className="italic truncate min-w-0">Mis Barras</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="/reportes" className="flex flex-row items-center gap-4 w-full text-lg font-montserrat text-gray-200 hover:text-gold hover:scale-105 transition-all">
                  <span className="text-gold text-xl inline shrink-0">📅</span>
                  <span className="italic truncate min-w-0">Reportes</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="/catalogo-bebidas" className="flex flex-row items-center gap-4 w-full text-lg font-montserrat text-gray-200 hover:text-gold hover:scale-105 transition-all">
                  <Library className="text-gold text-xl inline shrink-0" />
                  <span className="italic truncate min-w-0">Catálogo Bebidas</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      {/* Botón hamburguesa flotante para abrir sidebar en móvil */}
      <button
        className={`fixed top-4 left-4 z-50 md:hidden bg-burgundy-dark/80 text-gold rounded-full shadow-gold p-3 focus:outline-none focus:ring-2 focus:ring-gold transition-all ${collapsed ? 'block' : 'hidden'}`}
        aria-label="Abrir menú lateral"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Abrir menú</span>
        <span className="block w-7 h-1 bg-gold mb-1 rounded"></span>
        <span className="block w-7 h-1 bg-gold mb-1 rounded"></span>
        <span className="block w-7 h-1 bg-gold rounded"></span>
      </button>
    </>
  );
}