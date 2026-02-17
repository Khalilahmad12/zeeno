
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    { title: 'Experienced Team', desc: 'Our developers and marketers are industry veterans with years of proven success.' },
    { title: 'Affordable Packages', desc: 'Premium quality services tailored to fit business budgets of all sizes.' },
    { title: 'Fast Delivery', desc: 'We value your time and maintain strict timelines for all project milestones.' },
    { title: 'Client Satisfaction', desc: 'Our 98% client retention rate speaks for our commitment to excellence.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">Why Partner With Us</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-dark leading-tight mb-8">The Zeeno Globle <span className="text-brand-orange">Advantage</span></h3>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            We combine strategic thinking with technical execution to deliver digital solutions that aren't just functional, but transformative for your bottom line.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((r, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">{r.title}</h4>
                  <p className="text-sm text-slate-500">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-brand-light rounded-3xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Team meeting" />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange rounded-full flex items-center justify-center text-white text-center p-6 shadow-xl animate-pulse">
             <span className="font-black text-xs uppercase tracking-widest leading-tight">Voted #1 Digital Agency</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
