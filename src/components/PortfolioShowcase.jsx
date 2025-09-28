import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

const projectsSeed = [
  {
    id: 'p1',
    title: 'Cabañas Uspallata',
    desc: 'Página de WordPress con información y SEO local.',
    url: 'https://uspallata.net/piletas-en-cabanas-uspallata/',
    tags: ['WordPress']
  },
  {
    id: 'p2',
    title: 'Cabañas El Challao',
    desc: 'Landing promocional en WordPress.',
    url: 'https://elchallao.com.ar/inicio/piletas-de-nuestras-cabanas/',
    tags: ['WordPress']
  },
  {
    id: 'p3',
    title: 'En Boca de Todos',
    desc: 'Página de pedidos en React y Netlify.',
    url: 'https://enbocadetod0s.netlify.app',
    tags: ['React', 'Netlify']
  },
  {
    id: 'p4',
    title: 'RC Fragancias',
    desc: 'Tienda en React alojada en Netlify.',
    url: 'https://rc-fragancias.netlify.app',
    tags: ['React', 'Netlify']
  },
  {
    id: 'p5',
    title: 'Under Perfumes',
    desc: 'Proyecto de perfumería React en Netlify.',
    url: 'https://under-perfumes.netlify.app',
    tags: ['React', 'Netlify']
  },
  {
    id: 'p6',
    title: 'VerduApp',
    desc: 'App con backend en Firebase alojada en Netlify.',
    url: 'https://verduapp.netlify.app/',
    tags: ['React', 'Firebase', 'Netlify']
  },
  {
    id: 'p7',
    title: 'La Verdulería',
    desc: 'Proyecto en React y Netlify.',
    url: 'https://laverduleria.netlify.app/',
    tags: ['React', 'Netlify']
  },
  {
    id: 'p8',
    title: 'Alaniz Boxing',
    desc: 'Página en React y Netlify.',
    url: 'https://alanizboxing.netlify.app/',
    tags: ['React', 'Netlify']
  },
  {
    id: 'p9',
    title: 'Perfume Low Cost',
    desc: 'Tienda React en Netlify.',
    url: 'https://perfume-lowcost.netlify.app/',
    tags: ['React', 'Netlify']
  },
  {
    id: 'p10',
    title: 'Tu Hondita Wave',
    desc: 'Proyecto React alojado en Vercel.',
    url: 'https://tu-honditawave-jtxl.vercel.app/',
    tags: ['React', 'Vercel']
  },
  {
    id: 'p11',
    title: 'Lavadero AppOne',
    desc: 'App con backend Firebase (base de datos vencida) alojada en Vercel.',
    url: 'https://lavadero-appone.vercel.app/',
    tags: ['React', 'Firebase', 'Vercel']
  },
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
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#081129] to-[#061022] text-slate-100 p-6">
      <header className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-lg" style={{ textShadow: '0 0 10px rgba(99,102,241,0.6)' }}>
              <span className="inline-block mr-2 animate-pulse">✨</span>
              Portafolio — Apps & Páginas
            </h1>
            <p className="mt-2 text-slate-300/80">Algunos de mis trabajos realizados en React y WordPress.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-white/5 border border-white/6 rounded-xl px-3 py-2">
              <Search className="w-4 h-4 opacity-80" />
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar proyecto..." className="bg-transparent outline-none placeholder:text-slate-400 text-sm" />
            </div>
            <button onClick={() => { setQuery(''); setActiveTags([]); }} className="px-3 py-2 rounded-lg bg-white/6 hover:bg-white/8 text-sm">Limpiar</button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {allTags.map(t => {
            const active = activeTags.includes(t);
            return (
              <button key={t} onClick={() => toggleTag(t)} className={`text-sm px-3 py-1 rounded-full border transition-all ${active ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white border-transparent shadow-lg' : 'bg-white/3 border-white/6 text-slate-200'}`}>{t}</button>
            );
          })}
        </div>
      </header>
      <main className="max-w-6xl mx-auto">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map(p => (
              <motion.article key={p.id} layout initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 6, scale: 0.98 }} whileHover={{ y: -6, scale: 1.02 }} className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/6 bg-gradient-to-br from-white/3 to-white/6">
                <div className="relative z-10 h-52 sm:h-44 lg:h-56">
                  <iframe 
                    src={p.url} 
                    title={p.title} 
                    className="w-full h-full border-0 rounded-xl" 
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <p className="text-sm text-slate-300/90 mt-1">{p.desc}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href={p.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 text-white">
                        Abrir <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/4 border border-white/6">{t}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}
