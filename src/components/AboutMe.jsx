import myPhoto from '../assets/pablo_foto.png';

const skills = [
  { cat: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'MUI'] },
  { cat: 'Backend', items: ['FastAPI', 'Python', 'Node.js', 'REST APIs'] },
  { cat: 'Bases de datos', items: ['Firebase', 'Supabase', 'MongoDB', 'SQL'] },
  { cat: 'Bots & IA', items: ['Twilio', 'Telegram API', 'Groq', 'Gemini', 'ManyChat'] },
  { cat: 'CMS & Web', items: ['WordPress', 'SEO Local', 'Google Maps API', 'Cloudinary'] },
  { cat: 'Deploy', items: ['Vercel', 'Netlify', 'Railway', 'Render', 'GitHub'] },
];

export default function AboutMe() {
  return (
    <section className="about-section">
      <div className="about-hero">
        <div className="about-photo-wrap">
          <img src={myPhoto} alt="Pablo Piris" className="about-photo" />
          <div className="photo-ring" />
        </div>
        <div className="about-intro">
          <span className="about-tag">Disponible para trabajar</span>
          <h1 className="about-name">Pablo Darío Piris</h1>
          <h2 className="about-role">Full Stack Developer Jr.</h2>
          <p className="about-sub">Automatizaciones · Bots · APIs · Perfil híbrido tech–operativo</p>
          <p className="about-bio">
            Desarrollador con formación intensiva desde 2024. Construyo SaaS, bots de WhatsApp y Telegram,
            agentes de IA y apps web con bases de datos reales. Más de 17 años en operaciones comerciales
            y logística — entiendo el negocio tanto como el código.
          </p>
          <div className="about-links">
            <a href="https://github.com/pablo2389" target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
            <a href="https://linkedin.com/in/pablo-dario-piris-248032347" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
            <a href="mailto:pablodariopiris@gmail.com" className="btn-primary">Contactar</a>
          </div>
        </div>
      </div>
      <div className="skills-section">
        <h3 className="skills-title">Stack tecnológico</h3>
        <div className="skills-grid">
          {skills.map(({ cat, items }) => (
            <div key={cat} className="skill-card">
              <div className="skill-cat">{cat}</div>
              <div className="skill-items">
                {items.map(i => <span key={i} className="skill-badge">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about-extra">
        <div className="extra-card"><span className="extra-num">17+</span><span className="extra-label">años en operaciones</span></div>
        <div className="extra-card"><span className="extra-num">10+</span><span className="extra-label">proyectos publicados</span></div>
        <div className="extra-card"><span className="extra-num">2024</span><span className="extra-label">inicio en desarrollo</span></div>
        <div className="extra-card"><span className="extra-num">MZA</span><span className="extra-label">Las Heras, Mendoza</span></div>
      </div>
    </section>
  );
}
