
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Mobile', 'Web', 'Enterprise', 'E-commerce'];
  
  const projects = [
    { title: 'Global Shop', cat: 'E-commerce', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800' },
    { title: 'Nexus App', cat: 'Mobile', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' },
    { title: 'Fintech Hub', cat: 'Web', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { title: 'CRM Master', cat: 'Enterprise', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800' },
    { title: 'Social Connect', cat: 'Web', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Foodie Delivery', cat: 'Mobile', img: 'https://images.unsplash.com/photo-1526367790999-015078648c0a?auto=format&fit=crop&q=80&w=800' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.cat === filter);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(c => (
            <button 
              key={c}
              onClick={() => setFilter(c)}
              className={`px-8 py-3 rounded-full font-black uppercase tracking-widest text-xs transition-all ${
                filter === c ? 'bg-brand-blue text-white shadow-xl shadow-brand-blue/20' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((p, i) => (
              <motion.div
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.title} />
                </div>
                <div className="p-8">
                  <span className="text-brand-orange text-[10px] font-black uppercase tracking-widest mb-2 block">{p.cat}</span>
                  <h4 className="text-xl font-black text-brand-dark group-hover:text-brand-blue transition-colors">{p.title}</h4>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">View Details</span>
                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
