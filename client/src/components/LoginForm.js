import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-burgundy-gradient-dark bg-cover bg-fixed px-2">
      <form className="w-full max-w-md bg-burgundy-dark border border-gold/30 p-8 flex flex-col gap-6 text-white shadow-gold-deep rounded-lg">
        <h2 className="text-4xl font-bold text-gold mb-4 text-center tracking-wide">Iniciar sesión</h2>
        <div className="flex flex-col gap-4">
          <label className="block text-gold font-semibold text-lg" htmlFor="email">Correo electrónico</label>
          <input className="w-full px-6 py-4 rounded-xl bg-burgundy-light text-white border border-gold/30 focus:border-gold focus:outline-none text-lg placeholder:text-gold/50 transition-all" type="email" id="email" autoComplete="username" required placeholder="usuario@email.com" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="block text-gold font-semibold text-lg" htmlFor="password">Contraseña</label>
          <input className="w-full px-6 py-4 rounded-xl bg-burgundy-light text-white border border-gold/30 focus:border-gold focus:outline-none text-lg placeholder:text-gold/50 transition-all" type="password" id="password" autoComplete="current-password" required placeholder="Tu contraseña" />
        </div>
        <button type="submit" className="w-full bg-gold text-burgundy-dark font-bold py-4 rounded-xl hover:bg-gold/90 transition-all text-xl shadow-md mt-4">Entrar</button>
        <div className="flex flex-col gap-3 mt-8">
          <Link to="/forgot-password" className="text-gold hover:underline text-center text-base">¿Olvidaste tu contraseña?</Link>
          <Link to="/register" className="text-gold hover:underline text-center text-base">¿No tienes cuenta? Registrarse</Link>
        </div>
      </form>
    </div>
  );
}