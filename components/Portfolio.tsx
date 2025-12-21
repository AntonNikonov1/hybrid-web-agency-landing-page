
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "LogiFlow AI",
      industry: "Enterprise Logistics",
      oldSpeed: "32",
      newSpeed: "100",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      color: "blue"
    },
    {
      title: "Verve Skin",
      industry: "High-Ticket Wellness",
      oldSpeed: "41",
      newSpeed: "99",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
      color: "purple"
    },
    {
      title: "Core Infrastructure",
      industry: "Industrial Tech",
      oldSpeed: "28",
      newSpeed: "100",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      color: "green"
    }
  ];

  return (
    <SectionWrapper id="work">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0070f3] mb-6">Execution Registry</div>
            <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">Engineered<br />Results<span className="text-[#0070f3]">.</span></h3>
          </div>
          <div className="max-w-md border-l border-white/10 pl-8">
            <p className="text-gray-500 text-lg leading-snug font-medium mb-6">
              We focus on performance-first engineering. Every pixel is calculated to maximize conversion and site velocity.
            </p>
            <div className="text-xs font-black uppercase tracking-widest text-white flex items-center gap-3">
               <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
               99.8% Average Uptime Across Portfolio
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-8 aspect-[4/5] bg-[#0a0a0a] border border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                />
                
                {/* Performance Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                   <div className="bg-black/80 backdrop-blur-xl p-6 border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4">Core Web Vitals Boost</div>
                      <div className="flex items-center justify-between">
                         <div className="flex flex-col">
                            <span className="text-xs font-bold text-red-500 line-through">LCP: {project.oldSpeed}s</span>
                            <span className="text-2xl font-black text-green-500">LCP: {project.newSpeed}ms</span>
                         </div>
                         <div className="w-12 h-12 bg-[#0070f3] rounded-full flex items-center justify-center text-white">
                           <ArrowUpRight className="w-6 h-6" />
                         </div>
                      </div>
                   </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-2xl font-black uppercase tracking-tight">{project.title}</h4>
                  <span className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 text-gray-400 font-bold uppercase tracking-widest">{project.industry}</span>
                </div>
                <div className="w-full h-[1px] bg-white/10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Portfolio;
