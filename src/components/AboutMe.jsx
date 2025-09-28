import React from 'react';
import myPhoto from '../assets/Imagen de WhatsApp 2025-09-28 a las 00.21.16_f2e8aae7.jpg';

export default function AboutMe() {
  return (
    <section id="about" className="pt-28 pb-16 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 border border-gray-200 rounded-2xl p-6 shadow-md">
        {/* Foto */}
        <div className="flex-shrink-0">
          <img
            src={myPhoto}
            alt="Pablo Piris"
            className="w-48 h-48 rounded-full object-cover border-4 border-gray-300"
          />
        </div>

        {/* Texto */}
        <div className="text-gray-100">
          <h1 className="text-5xl font-extrabold uppercase mb-4 text-center md:text-left">
            Pablo Darío Piris
          </h1>
          <h2 className="text-2xl font-semibold mb-4">Frontend Developer | WordPress & React JS | Mendoza, Argentina</h2>

          <p className="mb-2">
            Soy un profesional con experiencia en desarrollo web y administración, apasionado por crear soluciones digitales funcionales y atractivas. Nací en Grand Bourg, Buenos Aires, y actualmente vivo en Mendoza.
          </p>

          <p className="mb-2">
            Durante mi carrera laboral, trabajé en SocialTravel como administrativo, desarrollando páginas web en WordPress y gestionando áreas administrativas y contables. Anteriormente, adquirí experiencia en atención al cliente y logística trabajando en Carrefour en diversos roles.
          </p>

          <p className="mb-2">
            Cuento con formación en Logística Empresarial y cursos especializados en Frontend Development con React JS. Además, estoy completando el curso de Project Manager de Google en Coursera.
          </p>

          <p className="mb-2">
            Me destaco por mi capacidad para aprender rápido, resolver problemas de manera práctica y combinar habilidades técnicas con experiencia en gestión y atención al cliente.
          </p>

          <p className="mb-2">
            ✨ <strong>Habilidades principales:</strong> React JS, WordPress, HTML, CSS, JavaScript, SEO local, manejo de bases de datos y herramientas de marketing digital.
          </p>

          <p className="mt-2">
            Si querés conocer mis proyectos y trabajos, podés explorar mi portafolio y ver ejemplos de sitios web y aplicaciones que desarrollé.
          </p>
        </div>
      </div>
    </section>
  );
}
