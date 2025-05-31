// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import BarCatalogPage from './pages/BarCatalogPage';
import BarManagementPage from './pages/BarManagementPage';
import ReportsPage from './pages/ReportsPage';
import BarClosingCountPage from './pages/BarClosingCountPage';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route path="/catalogo-bebidas" element={<BarCatalogPage />} />
        <Route path="/gestion-bebidas" element={<BarManagementPage />} />
        <Route path="/reportes" element={<ReportsPage />} />
        <Route path="/cierre-barra" element={<BarClosingCountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
