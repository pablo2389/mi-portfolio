import { ExternalLink, Github } from 'lucide-react';
import { useMemo, useState } from 'react';

const projects = [
  {
    id: 'p1', title: 'POS Bebidas',
    desc: 'SaaS para almacenes y kioscos. Gestión de ventas, stock y caja.',
    url: 'https://pablo2389-pablo2389-pos-bebidas.vercel.app',
    github: 'https://github.com/pablo2389/pablo2389-pablo2389-pos-bebidas',
    tags: ['React', 'Vercel', 'SaaS'], highlight: true,
  },
  {
    id: 'p2', title: 'Digital Flow',
    desc: 'Agente IA con Groq + Gemini para scraping de negocios en Google Business via Maps API.',
    url: 'https://digitalmza.vercel.app',
    github: 'https://github.com/pablo2389/digital-flow',
    tags: ['IA', 'Groq', 'Gemini', 'Maps API', 'Vanilla JS'], highlight: true,
  },
  {
    id: 'p3', title: 'App Lavadero',
    desc: 'Gestión de turnos con base de datos Firebase y envío automático por WhatsApp.',
    url: 'https://lavadero-appone.vercel.app',
    github: '',
    tags: ['Firebase', 'WhatsApp API', 'Vercel'], highlight: true,
  },
  {
    id: 'p4', title: 'Perfume Low Cost',
    desc: 'Tienda online con carrito flotante, Cloudinary, modo administrador y pedidos por WhatsApp.',
    url: 'https://perfume-lowcost.netlify.app',
    github: '',
    tags: ['E-commerce', 'Cloudinary', 'WhatsApp API'],
  },
  {
    id: 'p5', title: 'Presupuestos Albañilería',
    desc: 'Generador de presupuestos PDF según valores oficiales de la Cámara de Construcción. Envío por WhatsApp.',
    url: 'https://constructor-pro.vercel.app/',
    github: 'https://github.com/pablo2389/presupuestos-app',
    tags: ['React js ', 'WhatsApp', 'PDF'],
  },
  {
    id: 'p6', title: 'Alexis Alaniz – Boxeador',
    desc: 'Sitio personal para boxeador mendocino con contacto directo por WhatsApp y enlace a Google Maps.',
    url: 'https://alanizboxing.netlify.app',
    github: 'https://github.com/pablo2389/alexis-alaniz',
    tags: ['HTML', 'CSS', 'JS', 'Netlify'],
  },
  {
    id: 'p7', title: 'En Boca de Todos',
    desc: 'App de pedidos para rotisería. Menú interactivo con link directo a WhatsApp.',
    url: 'https://enbocadetodos.netlify.app',
    github: 'https://github.com/pablo2389/Enbocadetodos-',
    tags: ['Vanilla JS', 'Netlify'],
  },
  {
    id: 'p8', title: 'Under Perfumes',
    desc: 'Tienda de perfumes con catálogo y contacto por WhatsApp.',
    url: 'https://under-perfumes.netlify.app',
    github: '',
    tags: ['React', 'Netlify', 'E-commerce'],
  },
  {
    id: 'p9', title: 'Cabañas Uspallata',
    desc: 'Página WordPress con información turística y SEO local optimizado.',
    url: 'https://uspallata.net/piletas-en-cabanas-uspallata/',
    github: '',
    tags: ['WordPress', 'SEO'],
  },
  {
    id: 'p10', title: 'Cabañas El Challao',
    desc: 'Landing promocional WordPress con gestión de contenidos y SEO local.',
    url: 'https://elchallao.com.ar/inicio/piletas-de-nuestras-cabanas/',
    github: '',
    tags: ['WordPress', 'SEO'],
  },
];

const allTags = [...new Set(projects.flatMap(p => p.tags))].sort();

export default function PortfolioShowcase() {
  const [active, setActive] = useState([]);
  const [query, setQuery] = useState('');

  const toggle = t => setActive(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);

  const filtered = useMemo(() => projects.filter(p => {
    const q = query.toLowerCase();
    const matchQ = !q || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    const matchT = active.length === 0 || active.every(t => p.tags.includes(t));
    return matchQ && matchT;
  }), [active, query]);

  return (
    <section className="portfolio-section">
      <div className="portfolio-head">
        <h2 className="portfolio-title">Proyectos</h2>
        <p className="portfolio-sub">Apps reales, en producción. Código propio desde cero.</p>
      </div>

      <div className="portfolio-controls">
        <input
          className="portfolio-search"
          placeholder="Buscar proyecto..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className="portfolio-tags">
          {allTags.map(t => (
            <button key={t} className={`tag-btn ${active.includes(t) ? 'tag-active' : ''}`} onClick={() => toggle(t)}>
              {t}
            </button>
          ))}
          {(active.length > 0 || query) && (
            <button className="tag-clear" onClick={() => { setActive([]); setQuery(''); }}>✕ Limpiar</button>
          )}
        </div>
      </div>

      <div className="projects-grid">
        {filtered.map(p => (
          <article key={p.id} className={`project-card ${p.highlight ? 'card-highlight' : ''}`}>
            {p.highlight && <div className="card-badge">Destacado</div>}
            <div className="card-body">
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.desc}</p>
              <div className="card-tags">
                {p.tags.map(t => <span key={t} className="card-tag">{t}</span>)}
              </div>
            </div>
            <div className="card-actions">
              {p.url && (
                <a href={p.url} target="_blank" rel="noreferrer" className="card-link">
                  <ExternalLink size={14} /> Ver app
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="card-link card-link-ghost">
                  <Github size={14} /> Código
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}