import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import PortfolioShowcase from './components/PortfolioShowcase';
import './styles/global.css'; // aquí va todo el CSS

export default function App() {
  return (
    <Router>
      <header className="header">
        <div className="header-container">
          <div className="header-title">PABLO PIRIS</div>
          <nav className="header-nav">
            <Link to="/">Sobre mí</Link>
            <Link to="/portfolio">Proyectos</Link>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<PortfolioShowcase />} />
        </Routes>
      </main>
    </Router>
  );
}
