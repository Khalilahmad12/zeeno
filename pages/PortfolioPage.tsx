import React, { useState, useRef } from 'react';
import { ArrowRight, ExternalLink, Filter, Briefcase, Rocket } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  highlight: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EcoSmart Dashboard",
    category: "Web Development",
    description: "A comprehensive IoT dashboard for monitoring renewable energy consumption in real-time.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    highlight: "Energy efficiency increased by 22%"
  },
  {
    id: 2,
    title: "Luxe Branding Identity",
    category: "Branding",
    description: "Complete visual identity overhaul for a premium fashion house including logo and guidelines.",
    image: "https://images.unsplash.com/photo-1522071823991-b5ae7724a64e?q=80&w=800&auto=format&fit=crop",
    highlight: "Brand recognition up by 45%"
  },
  {
    id: 3,
    title: "HealthSync Mobile App",
    category: "App Design",
    description: "A cross-platform healthcare application connecting patients with specialized doctors.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=800&auto=format&fit=crop",
    highlight: "100k+ active monthly users"
  },
  {
    id: 4,
    title: "OmniChannel E-com",
    category: "Web Development",
    description: "Scalable e-commerce architecture supporting millions of SKU with lightning-fast search.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    highlight: "Conversion rate improved by 12%"
  },
  {
    id: 5,
    title: "FinTrack Analytics",
    category: "App Design",
    description: "Complex financial data visualization tool for investment banking professionals.",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e7a7?q=80&w=800&auto=format&fit=crop",
    highlight: "Processing $2B+ in daily transactions"
  },
  {
    id: 6,
    title: "UrbanGrowth SEO",
    category: "Marketing",
    description: "Intensive SEO and content strategy for an urban planning consultancy firm.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop",
    highlight: "Organic traffic grew by 300%"
  },
  {
    id: 7,
    title: "CloudStream Platform",
    category: "Web Development",
    description: "Media streaming service optimized for high-concurrency and low latency delivery.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    highlight: "Uptime maintained at 99.99%"
  },
  {
    id: 8,
    title: "SecurePay Wallet",
    category: "App Design",
    description: "Biometric-secured digital wallet for secure peer-to-peer crypto transactions.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    highlight: "Zero security breaches reported"
  },
  {
    id: 9,
    title: "SocialBoost Campaign",
    category: "Marketing",
    description: "Multi-channel influencer marketing campaign for a global tech launch.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    highlight: "Reached over 5M targeted users"
  },
  {
    id: 10,
    title: "ProLearning LMS",
    category: "Web Development",
    description: "A robust learning management system with AI-driven course recommendations.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
    highlight: "Student engagement up by 60%"
  },
  {
    id: 11,
    title: "Visionary Real Estate",
    category: "Web Development",
    description: "Modern property listing portal with VR tour integrations.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    highlight: "Reduced bounce rate by 35%"
  },
  {
    id: 12,
    title: "Spark Brand Refresh",
    category: "Branding",
    description: "Full logo and identity refresh for a leading sustainable energy startup.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    highlight: "Launch featured on TechCrunch"
  },
  {
    id: 13,
    title: "NeoBank Interface",
    category: "App Design",
    description: "User-centric mobile banking experience designed for Gen-Z users.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
    highlight: "4.9/5 App Store Rating"
  },
  {
    id: 14,
    title: "GreenHarvest AgriTech",
    category: "Web Development",
    description: "Agricultural tracking software for large scale farm management and yield prediction.",
    image: "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?q=80&w=800&auto=format&fit=crop",
    highlight: "Increased crop yield by 15%"
  },
  {
    id: 15,
    title: "Pulse Fitness Tracker",
    category: "App Design",
    description: "Wearable-integrated fitness application with community-based challenges.",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop",
    highlight: "Reached 1M user milestone"
  }
];

// Premium Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const PortfolioPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Web Development', 'App Design', 'Branding', 'Marketing'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Background Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="min-h-screen bg-white">
      {/* 1️⃣ HERO SECTION (Updated to match Home Tech background) */}
      <section ref={containerRef} className="relative pt-32 pb-24 lg:pt-44 h-screen lg:pb-40 px-4 bg-[#05080F] overflow-hidden text-white">
        
        {/* Cinematic Background */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Tech Circuitry" 
            className="w-full h-[120%] object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05080F] via-transparent to-[#05080F]" />
        </motion.div>

        {/* Digital Overlay & Scanner Effect */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(2, 154, 227, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 154, 227, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          <motion.div 
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent blur-[2px]"
          />
        </div>

        <motion.div 
          className="container mx-auto text-center relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className="inline-block bg-brand-blue/10 text-brand-blue px-8 py-2 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] mb-6 shadow-sm border border-brand-blue/20"
            whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(2, 154, 227, 0.1)" }}
          >
            Our Work Portfolio
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tighter"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Showcasing Our Digital <span className="text-brand-orange block">Excellence</span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Explore our curated gallery of success stories. We transform complex business 
            challenges into intuitive digital products that drive real-world results.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-12 py-4 bg-brand-orange text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-orange/30 flex items-center justify-center gap-3"
            >
              <Rocket size={18} fill="white" className="text-white" /> Start a Project
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-12 py-4 bg-white/5 text-white border-2 border-white/20 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center gap-3 group"
            >
              <Briefcase size={18} /> View Case Studies <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-brand-blue" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2️⃣ PORTFOLIO SECTION - Centered Header & Instant Cards */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header - Centered Layout */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter"
            >
              Featured Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
            >
              A selection of high-impact digital solutions delivered to our global clients.
            </motion.p>

            {/* Filter Buttons - Centered and in 1 line */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                    activeFilter === cat 
                      ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20' 
                      : 'bg-slate-50 text-slate-400 border-transparent hover:bg-brand-blue/5 hover:text-brand-blue'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Staggered Portfolio Grid - Uses AnimatePresence for instant feedback on filter change */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  key={project.id}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
                >
                  <div className="relative overflow-hidden h-64">
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <button className="bg-white text-brand-dark px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl hover:scale-110 transition-transform">
                        Project Details <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-4">
                      <span className="text-[9px] font-black text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-lg uppercase tracking-[0.2em]">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors leading-tight tracking-tight uppercase">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
                      {project.description}
                    </p>
                    
                    <div className="pt-5 border-t border-slate-50 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Impact: <span className="text-green-600">{project.highlight}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <div className="mb-6 inline-block p-6 bg-slate-50 rounded-full">
                <Filter size={48} className="text-slate-200" />
              </div>
              <p className="text-xl text-slate-400 font-bold">No projects found in this category.</p>
              <button onClick={() => setActiveFilter('All')} className="mt-4 text-brand-blue font-bold hover:underline">
                View all projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* 3️⃣ CALL TO ACTION SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-brand-blue/5">
        <motion.div 
          className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-blue/10 blur-[150px] rounded-full -mr-[20rem] -mt-[20rem]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-brand-orange/5 blur-[120px] rounded-full -ml-[15rem] -mb-[15rem]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="mb-8"
            >
              <span className="inline-block py-2 px-6 bg-white border border-slate-100 rounded-full text-brand-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
                Ready to elevate?
              </span>
              
              <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] tracking-tighter mb-8 uppercase">
                Ready to build your next <br />
                <span className="text-brand-blue italic underline decoration-brand-blue/10 underline-offset-8 tracking-tighter">GLOBAL PRODUCT?</span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                Our team of elite strategists and engineers is standing by to transform 
                your digital roadmap into a market-leading reality.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 25px 50px -12px rgba(254,136,14,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-12 py-5 bg-brand-orange text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(254,136,14,0.3)] flex items-center justify-center gap-3"
              >
                Book a Free Consultation <ArrowRight size={20} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, y: -5, backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-12 py-5 bg-white border border-slate-200 text-brand-dark rounded-xl font-black text-xs uppercase tracking-widest shadow-sm"
              >
                Get a Custom Quote
              </motion.button>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#029ae3 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </section>
    </div>
  );
};

export default PortfolioPage;