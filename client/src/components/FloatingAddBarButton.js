import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import AddBarModal from './AddBarModal';

export default function FloatingAddBarButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="fixed bottom-8 right-8 z-40 bg-gold text-burgundy-dark shadow-gold rounded-full p-4 flex items-center gap-2 font-bold text-lg hover:scale-105 hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-gold"
        onClick={() => setOpen(true)}
        aria-label="Añadir a Barra"
      >
        <Plus className="w-6 h-6" /> Añadir a Barra
      </button>
      {open && <AddBarModal onClose={() => setOpen(false)} />}
    </>
  );
}
