
import React from 'react';

interface FeaturedPortfolioProps {
  onNavigate: (page: string) => void;
}

const FeaturedPortfolio: React.FC<FeaturedPortfolioProps> = ({ onNavigate }) => {
  const projects = [
    { title: 'Global E-Shop', cat: 'E-Commerce', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800' },
    { title: 'HealthTrack Pro', cat: 'Mobile App', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' },
    { title: 'FinTech Dashboard', cat: 'Web App', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">Our Track Record</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-dark">Featured <span className="text-brand-orange">Projects</span></h3>
        </div>
        <button 
          onClick={() => onNavigate('portfolio')}
          className="text-brand-blue font-black uppercase tracking-widest text-xs border-b-2 border-brand-blue pb-1 hover:text-brand-orange hover:border-brand-orange transition-all"
        >
          View Full Portfolio
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer" onClick={() => onNavigate('portfolio')}>
            <div className="aspect-[4/3]">
               <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.title} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
               <span className="text-brand-orange text-xs font-black uppercase tracking-widest mb-2">{p.cat}</span>
               <h4 className="text-2xl font-black text-white">{p.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPortfolio;
