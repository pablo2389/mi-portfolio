import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Nombre grande */}
        <div className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight 
                        drop-shadow-[0_0_15px_rgba(99,102,241,0.8)] hover:drop-shadow-[0_0_25px_rgba(255,105,180,0.9)] 
                        transition-all cursor-pointer">
          PABLO PIRIS
        </div>

        {/* Navbar a la derecha */}
        <nav>
          <ul className="flex gap-8 text-lg md:text-xl font-semibold text-gray-100">
            <li>
              <Link
                to="/"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pink-500 after:transition-all hover:after:w-full"
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pink-500 after:transition-all hover:after:w-full"
              >
                Proyectos
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
