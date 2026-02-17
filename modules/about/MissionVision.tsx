
import React from 'react';
import { motion } from 'framer-motion';

const MissionVision: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-soft p-12 rounded-[2rem] border border-brand-blue/5"
          >
            <div className="w-12 h-12 bg-brand-blue rounded-xl mb-6 flex items-center justify-center text-white shadow-lg shadow-brand-blue/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 className="text-2xl font-black mb-6 text-brand-dark uppercase tracking-wider">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              To deliver transformative digital solutions that drive measurable business growth while fostering a culture of innovation and technical mastery across the globe.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-dark p-12 rounded-[2rem] text-white"
          >
            <div className="w-12 h-12 bg-brand-orange rounded-xl mb-6 flex items-center justify-center text-white shadow-lg shadow-brand-orange/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </div>
            <h3 className="text-2xl font-black mb-6 text-brand-blue uppercase tracking-wider">Our Vision</h3>
            <p className="text-slate-300 leading-relaxed font-medium text-lg">
              To be the global benchmark for digital innovation, recognized for our engineering excellence and the unparalleled success of the brands we empower.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
