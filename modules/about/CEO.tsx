
import React from 'react';
import { motion } from 'framer-motion';

const CEO: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-orange/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                className="rounded-3xl shadow-2xl relative z-10 w-full grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="CEO" 
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <h3 className="text-brand-orange font-black uppercase tracking-[0.3em] text-xs mb-6">Leadership Message</h3>
            <p className="text-2xl md:text-3xl italic font-medium leading-relaxed mb-8 text-slate-300">
              "We believe in the power of digital transformation not just as a tool, but as a gateway to global leadership for our clients. At Zeeno, every project is a heartbeat of innovation."
            </p>
            <div className="border-l-4 border-brand-blue pl-6">
              <h4 className="text-xl font-black uppercase tracking-widest">S. Alexander</h4>
              <p className="text-brand-blue font-bold text-sm uppercase">Founder & CEO, Zeeno Globle Solution</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
