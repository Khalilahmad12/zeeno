
import React from 'react';
import { motion } from 'framer-motion';

const FeaturedCaseStudy: React.FC = () => {
  return (
    <section className="py-24 bg-brand-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
           <div className="lg:w-1/2 aspect-video lg:aspect-auto">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Case study main" />
           </div>
           <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-brand-blue font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Highlight Project</span>
              <h3 className="text-4xl font-black text-brand-dark mb-6 tracking-tighter leading-tight">Revitalizing Fintech <br/><span className="text-brand-orange">Banking Systems</span></h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                A deep dive into how we transformed a traditional banking interface into a high-converting, user-centric digital asset platform.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                 <div>
                    <div className="text-2xl font-black text-brand-dark">400%</div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">User Growth</p>
                 </div>
                 <div>
                    <div className="text-2xl font-black text-brand-dark">3.2s</div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Load Time Reduction</p>
                 </div>
              </div>
              <button className="btn-primary w-max px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs">Full Case Study</button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
