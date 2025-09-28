// src/components/Header.jsx
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">PABLO PIRIS</h1>
        <nav className="header-nav">
          <ul>
            <li><Link to="/">Sobre mí</Link></li>
            <li><Link to="/portfolio">Proyectos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
