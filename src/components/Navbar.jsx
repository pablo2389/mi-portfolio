import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-white">
          PABLO PIRIS
        </div>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-pink-500 transition-colors">Sobre mí</Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-pink-500 transition-colors">Proyectos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
