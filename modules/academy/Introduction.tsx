
import React from 'react';
import { motion } from 'framer-motion';

const Introduction: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/30 blur-[120px] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-blue text-[10px] font-black uppercase tracking-[0.4em] mb-6"
        >
          Zeeno Skills Academy
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter"
        >
          Master the <span className="text-brand-orange text-glow">Future</span> of Tech
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium"
        >
          Bridge the gap between academic theory and industry reality. Learn from masters who build global software daily.
        </motion.p>
      </div>
    </section>
  );
};

export default Introduction;
