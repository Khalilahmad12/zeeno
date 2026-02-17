
import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    {
      title: 'Consultation & Enrollment',
      desc: 'Connect with our career advisors to select the module that aligns with your professional goals.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: 'Intensive Training',
      desc: 'Master the tech stack through 300+ hours of hands-on, instructor-led engineering sessions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Live Project Cycle',
      desc: 'Join a sprint team and contribute to production-grade software for global clients.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 01-2-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: 'Certification & Placement',
      desc: 'Receive ISO-accredited certification and access our global network of hiring partners.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-brand-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Success Roadmap</h2>
        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">The Academy <span className="text-brand-blue">Journey</span></h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step, idx) => (
          <div key={idx} className="relative group">
            {/* Connector Line */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-full w-full h-[1px] bg-white/10 z-0 -translate-x-10" />
            )}
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                {step.icon}
              </div>
              <div className="absolute -top-4 -right-2 text-6xl font-black text-white/5 pointer-events-none select-none">
                0{idx + 1}
              </div>
              <h4 className="text-lg font-black text-white mb-4 uppercase tracking-tight">{step.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-medium px-4">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
