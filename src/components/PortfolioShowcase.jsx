import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Search } from 'lucide-react';
import './PortfolioShowcase.css'; // <-- nuestro CSS

const projectsSeed = [
  { id: 'p1', title: 'Cabañas Uspallata', desc: 'Página de WordPress con información y SEO local.', url: 'https://uspallata.net/piletas-en-cabanas-uspallata/', tags: ['WordPress'] },
  { id: 'p2', title: 'Cabañas El Challao', desc: 'Landing promocional en WordPress.', url: 'https://elchallao.com.ar/inicio/piletas-de-nuestras-cabanas/', tags: ['WordPress'] },
  { id: 'p3', title: 'En Boca de Todos', desc: 'Página de pedidos en React y Netlify.', url: 'https://enbocadetod0s.netlify.app', tags: ['React', 'Netlify'] },
  { id: 'p4', title: 'RC Fragancias', desc: 'Tienda en React alojada en Netlify.', url: 'https://rc-fragancias.netlify.app/', tags: ['React', 'Netlify'] },
  { id: 'p5', title: 'Under Perfumes', desc: 'Proyecto de perfumería React en Netlify.', url: 'https://under-perfumes.netlify.app/', tags: ['React', 'Netlify'] },
  { id: 'p6', title: 'VerduApp', desc: 'App con backend en Firebase alojada en Netlify.', url: 'https://verduapp.netlify.app/', tags: ['React', 'Firebase', 'Netlify'] },
  { id: 'p7', title: 'La Verdulería', desc: 'Proyecto en React y Netlify.', url: 'https://laverduleria.netlify.app/', tags: ['React', 'Netlify'] },
  { id: 'p8', title: 'Alaniz Boxing', desc: 'Página en React y Netlify.', url: 'https://alanizboxing.netlify.app/', tags: ['React', 'Netlify'] },
  { id: 'p9', title: 'Perfume Low Cost', desc: 'Tienda React en Netlify.', url: 'https://perfume-lowcost.netlify.app/', tags: ['React', 'Netlify'] },
  { id: 'p10', title: 'Tu Hondita Wave', desc: 'Proyecto React alojado en Vercel.', url: 'https://tu-honditawave-jtxl.vercel.app/', tags: ['React', 'Vercel'] },
  { id: 'p11', title: 'Lavadero AppOne', desc: 'App con backend Firebase (base de datos vencida) alojada en Vercel.', url: 'https://lavadero-appone.vercel.app/', tags: ['React', 'Firebase', 'Vercel'] },
];

export default function PortfolioShowcase({ items = projectsSeed }) {
  const [query, setQuery] = useState('');
  const [activeTags, setActiveTags] = useState([]);

  const allTags = useMemo(() => {
    const s = new Set();
    items.forEach(it => it.tags.forEach(t => s.add(t)));
    return Array.from(s);
  }, [items]);

  const toggleTag = t => {
    setActiveTags(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  };

  const filtered = useMemo(() => {
    return items.filter(p => {
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase());
      const matchesTags = activeTags.length === 0 || activeTags.every(t => p.tags.includes(t));
      return matchesQuery && matchesTags;
    });
  }, [items, query, activeTags]);

  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <div>
          <h1>✨ Portafolio — Apps & Páginas</h1>
          <p>Algunos de mis trabajos realizados en React y WordPress.</p>
        </div>
        <div className="portfolio-controls">
          <div className="search-box">
            <Search className="search-icon" />
            <input 
              value={query} 
              onChange={e => setQuery(e.target.value)} 
              placeholder="Buscar proyecto..." 
            />
          </div>
          <button onClick={() => { setQuery(''); setActiveTags([]); }}>Limpiar</button>
        </div>
        <div className="portfolio-tags">
          {allTags.map(t => (
            <button 
              key={t} 
              onClick={() => toggleTag(t)} 
              className={activeTags.includes(t) ? 'active' : ''}
            >
              {t}
            </button>
          ))}
        </div>
      </header>

      <main className="portfolio-grid">
        <AnimatePresence>
          {filtered.map(p => (
            <motion.article 
              key={p.id} 
              layout 
              initial={{ opacity: 0, y: 12, scale: 0.98 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, y: 6, scale: 0.98 }} 
              whileHover={{ y: -6, scale: 1.02 }} 
              className="portfolio-card"
            >
              <div className="iframe-container">
                <iframe src={p.url} title={p.title} sandbox="allow-same-origin allow-scripts allow-popups allow-forms"/>
              </div>
              <div className="card-body">
                <div className="card-header">
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                  <a href={p.url} target="_blank" rel="noreferrer">
                    Abrir <ExternalLink className="icon"/>
                  </a>
                </div>
                <div className="card-tags">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </main>
    </div>
  );
}
