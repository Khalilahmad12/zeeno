
import React from 'react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  const team = [
    { name: 'Sarah Khan', role: 'Head of Engineering', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
    { name: 'John Doe', role: 'UX Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Amna Ali', role: 'Lead SEO Strategist', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
    { name: 'Kevin Hart', role: 'Mobile App Developer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-black uppercase tracking-widest text-xs mb-4">The Experts</h2>
          <h3 className="text-4xl font-black text-brand-dark">Meet Our <span className="text-brand-orange">Creative Mindset</span></h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <img src={member.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={member.name} />
                <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {['LI', 'TW'].map(s => <span key={s} className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center text-xs font-black cursor-pointer hover:bg-white hover:text-brand-blue">{s}</span>)}
                </div>
              </div>
              <h4 className="text-lg font-black text-brand-dark uppercase tracking-widest">{member.name}</h4>
              <p className="text-brand-blue font-bold text-xs uppercase">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
