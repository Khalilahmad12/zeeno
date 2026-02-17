
import React from 'react';
import { motion } from 'framer-motion';

const Credentials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-brand-orange font-black uppercase tracking-widest text-xs mb-4">Accreditation</h2>
            <h3 className="text-4xl font-black text-brand-dark mb-8">Recognized for <span className="text-brand-blue">Quality</span></h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              As a SECP-incorporated firm and ISO-certified service provider, we maintain the highest standards of corporate governance and technical quality control.
            </p>
            <div className="flex flex-wrap gap-8">
               {['ISO 9001', 'SECP INC', 'PASHA Member', 'Google Partner'].map(c => (
                 <div key={c} className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100 text-brand-dark font-black uppercase tracking-widest text-xs">
                    {c}
                 </div>
               ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-brand-blue text-white p-8 rounded-3xl flex flex-col justify-center items-center text-center">
              <div className="text-4xl font-black mb-2">100%</div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Compliant</p>
            </div>
            <div className="bg-brand-orange text-white p-8 rounded-3xl flex flex-col justify-center items-center text-center">
              <div className="text-4xl font-black mb-2">GOLD</div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Agency Status</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
