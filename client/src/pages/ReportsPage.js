import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import CalendarCard from '../components/CalendarCard';

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-burgundy-dark via-burgundy-dark/90 to-black font-poppins">
      <Sidebar />
      <main className="flex flex-col min-h-screen transition-all md:ml-64">
        <Header />
        <div className="flex-1 px-2 md:px-8 py-6 space-y-6 relative">
          <h1 className="text-2xl font-bold text-gold drop-shadow mb-6">Reportes</h1>
          <CalendarCard />
        </div>
      </main>
    </div>
  );
}
