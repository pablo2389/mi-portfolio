import React from 'react';
import myPhoto from '../assets/Imagen de WhatsApp 2025-09-28 a las 00.21.16_f2e8aae7.jpg';

export default function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Foto */}
        <div className="about-photo">
          <img src={myPhoto} alt="Pablo Piris" />
        </div>

        {/* Texto */}
        <div className="about-text">
          <h1>Pablo Darío Piris</h1>
          <h2>Frontend Developer | WordPress & React JS | Mendoza, Argentina</h2>

          <p>Soy un profesional con experiencia en desarrollo web y administración, apasionado por crear soluciones digitales funcionales y atractivas. Nací en Grand Bourg, Buenos Aires, y actualmente vivo en Mendoza.</p>

          <p>Durante mi carrera laboral, trabajé en SocialTravel como administrativo, desarrollando páginas web en WordPress y gestionando áreas administrativas y contables. Anteriormente, adquirí experiencia en atención al cliente y logística trabajando en Carrefour en diversos roles.</p>

          <p>Cuento con formación en Logística Empresarial y cursos especializados en Frontend Development con React JS. Además, estoy completando el curso de Project Manager de Google en Coursera.</p>

          <p>Me destaco por mi capacidad para aprender rápido, resolver problemas de manera práctica y combinar habilidades técnicas con experiencia en gestión y atención al cliente.</p>

          <p>✨ <strong>Habilidades principales:</strong> React JS, WordPress, HTML, CSS, JavaScript, SEO local, manejo de bases de datos y herramientas de marketing digital.</p>

          <p>Si querés conocer mis proyectos y trabajos, podés explorar mi portafolio y ver ejemplos de sitios web y aplicaciones que desarrollé.</p>
        </div>
      </div>
    </section>
  );
}
