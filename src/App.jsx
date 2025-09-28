import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import PortfolioShowcase from './components/PortfolioShowcase';

export default function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 min-h-screen">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<AboutMe />} />      {/* Página About */}
            <Route path="/portfolio" element={<PortfolioShowcase />} /> {/* Página Proyectos */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
