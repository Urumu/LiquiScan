import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-burgundy-gradient-dark bg-cover bg-fixed px-2">
      <form className="w-full max-w-md bg-burgundy-dark border border-gold/30 p-8 flex flex-col gap-6 text-white shadow-gold-deep rounded-lg">
        <h2 className="text-4xl font-bold text-gold mb-2 text-center tracking-wide leading-tight">Recuperar contraseña</h2>
        <div className="flex flex-col gap-3">
          <label className="block text-gold font-semibold text-lg" htmlFor="email">Correo electrónico</label>
          <input className="w-full px-6 py-4 rounded-xl bg-burgundy-light text-white border border-gold/30 focus:border-gold focus:outline-none text-lg placeholder:text-gold/50 transition-all" type="email" id="email" required placeholder="usuario@email.com" />
        </div>
        <button type="submit" className="w-full bg-gold text-burgundy-dark font-bold py-4 rounded-xl hover:bg-gold/90 transition-all text-xl shadow-md mt-2">Recuperar</button>
        <div className="flex flex-col gap-3 mt-10">
          <Link to="/login" className="text-gold hover:underline text-center text-base">Volver a iniciar sesión</Link>
        </div>
      </form>
    </div>
  );
}