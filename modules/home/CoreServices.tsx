
import React from 'react';

const CoreServices: React.FC = () => {
  const services = [
    { title: 'Website Development', icon: '🌐', desc: 'Custom high-performance websites built with modern stacks like React, Next.js, and WordPress.' },
    { title: 'SEO Optimization', icon: '📈', desc: 'Data-driven SEO strategies to rank your business on page one and drive organic leads.' },
    { title: 'E-Commerce Solutions', icon: '🛒', desc: 'End-to-end online store setups using Shopify, WooCommerce, and custom Laravel solutions.' },
    { title: 'Social Media Marketing', icon: '📱', desc: 'Engaging social campaigns across TikTok, Meta, and YouTube to build loyal communities.' },
    { title: 'Skills Academy', icon: '🎓', desc: 'Practical industry-level training for students to master web development and digital marketing.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-black text-brand-blue uppercase tracking-widest mb-4">Our Core Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-black text-brand-dark">Growth Driven <span className="text-brand-orange">Services</span></h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
            <h4 className="text-lg font-bold text-brand-dark mb-4 group-hover:text-brand-blue">{s.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreServices;
