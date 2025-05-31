import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const bars = [
  { id: 1, name: 'Barra Central' },
  { id: 2, name: 'Barra VIP' },
];

export default function Header() {
  const [selectedBar, setSelectedBar] = useState(bars[0].id);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulación
  const [open, setOpen] = useState(false);

  // Cierra el dropdown al hacer click fuera
  React.useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (!e.target.closest('#bar-dropdown')) setOpen(false);
    }
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <header className="w-full flex items-center justify-between py-4 px-4 md:px-10 bg-transparent font-poppins">
      {/* Dropdown de selección de barra */}
      <div className="relative" id="bar-dropdown">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-burgundy-dark/80 text-white rounded-lg border-2 border-gold/60 shadow hover:shadow-gold focus:outline-none focus:ring-2 focus:ring-gold transition-all backdrop-blur-md"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="font-semibold text-gold drop-shadow">{bars.find(b => b.id === selectedBar)?.name}</span>
          <ChevronDown className="w-4 h-4 text-gold" />
        </button>
        {open && (
          <ul className="absolute left-0 mt-2 w-44 bg-burgundy-dark/90 backdrop-blur-xl border border-gold/30 text-white rounded-xl shadow-2xl z-20 py-2 transition-all">
            {bars.map(bar => (
              <li key={bar.id}>
                <button
                  onClick={() => { setSelectedBar(bar.id); setOpen(false); }}
                  className={`w-full text-left px-5 py-2 rounded-lg hover:bg-gold/10 transition-all text-base ${selectedBar === bar.id ? 'text-gold font-bold' : ''}`}
                >
                  {bar.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Pin diario */}
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center px-2 py-1 rounded-full bg-burgundy-light text-gold font-semibold text-xs">
          <ShieldCheck className="w-4 h-4 mr-1" /> Pin Diario
        </span>
      </div>
      {/* Botón Login/Logout o enlaces de autenticación */}
      {isLoggedIn ? (
        <button
          className="flex items-center gap-2 px-4 py-2 border border-gold text-gold rounded-lg bg-transparent hover:bg-gold hover:text-burgundy-dark transition-all focus:outline-none focus:ring-2 focus:ring-gold"
          onClick={() => setIsLoggedIn(false)}
          aria-label="Cerrar sesión"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      ) : (
        <div className="flex gap-3">
          <Link
            to="/login"
            className="flex items-center gap-2 px-4 py-2 border border-gold text-gold rounded-lg bg-transparent hover:bg-gold hover:text-burgundy-dark transition-all focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Iniciar sesión"
          >
            <User className="w-5 h-5" />
            Iniciar sesión
          </Link>
          
        </div>
      )}
    </header>
  );
}
