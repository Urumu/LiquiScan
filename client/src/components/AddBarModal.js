import React, { useState } from 'react';

const bars = [
  { id: 1, name: 'Barra Central' },
  { id: 2, name: 'Barra VIP' },
];

export default function AddBarModal({ onClose }) {
  const [selectedBar, setSelectedBar] = useState(bars[0].id);
  const [newBar, setNewBar] = useState('');
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (newBar.trim().length < 3) {
      setError('El nombre debe tener al menos 3 caracteres');
      return;
    }
    // Aquí iría la lógica para crear la barra
    setError('');
    alert(`Barra añadida: ${newBar}`);
    setNewBar('');
    onClose();
  };

  const handleInput = (e) => {
    setNewBar(e.target.value);
    if (e.target.value.trim().length < 3) {
      setError('El nombre debe tener al menos 3 caracteres');
    } else {
      setError('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-burgundy-dark rounded-xl shadow-2xl p-8 w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-gold hover:text-white text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ×
        </button>
        <h3 className="text-xl font-bold text-gold mb-4">Añadir a Barra</h3>
        <label className="block mb-2 text-white font-semibold">Selecciona una barra existente:</label>
        <select
          className="w-full mb-4 px-4 py-2 rounded-lg bg-burgundy-light text-white focus:outline-none focus:ring-2 focus:ring-gold"
          value={selectedBar}
          onChange={e => setSelectedBar(Number(e.target.value))}
        >
          {bars.map(bar => (
            <option key={bar.id} value={bar.id}>{bar.name}</option>
          ))}
        </select>
        <div className="my-4">
          <label className="block mb-2 text-white font-semibold">O crea una nueva barra:</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
            placeholder="Nombre de la nueva barra"
            value={newBar}
            onChange={handleInput}
            aria-invalid={!!error}
          />
          {error && <span className="text-red-400 text-sm mt-1 block">{error}</span>}
        </div>
        <button
          className="w-full mt-2 py-2 rounded-lg bg-gold text-burgundy-dark font-bold hover:bg-white hover:text-gold transition-all disabled:opacity-60"
          onClick={handleAdd}
          disabled={!!error || !newBar.trim()}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}
