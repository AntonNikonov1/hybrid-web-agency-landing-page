
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const Methodology: React.FC = () => {
  const steps = [
    {
      num: "01.",
      title: "AI Acceleration",
      desc: "We leverage proprietary AI models to generate 50+ unique concepts, layouts, and copy variants in hours, identifying the perfect product-market fit aesthetic instantly."
    },
    {
      num: "02.",
      title: "Human Engineering",
      desc: "Our senior engineers strip the AI-suggested code, refactoring it for pure Next.js performance and conducting a rigorous bank-grade security audit to eliminate vulnerabilities."
    },
    {
      num: "03.",
      title: "Business Integration",
      desc: "Final deployment includes deep technical integration: Stripe for payments, CRM hooks for sales, and custom analytics to track your conversion ROI with surgical precision."
    }
  ];

  return (
    <SectionWrapper id="process" className="overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-white/10 pb-16">
           <h2 className="text-[15rem] font-black uppercase leading-none tracking-tighter opacity-[0.03] absolute -top-24 -left-20 select-none pointer-events-none hidden lg:block">
             SYSTEM
           </h2>
           <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter relative z-10">
             The Cyborg<br /><span className="text-[#0070f3]">Methodology</span>
           </h2>
           <div className="md:text-right">
             <div className="text-xs font-black uppercase tracking-widest text-[#0070f3] mb-4">Speed meets security</div>
             <p className="text-gray-500 max-w-sm font-medium">Why settle for slow human agencies or buggy AI code? We combine the best of both worlds.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 relative">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-[#0070f3]/5 to-transparent opacity-50"></div>
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              className={`relative z-10 p-12 md:p-16 border-white/10 ${idx !== 2 ? 'md:border-r border-b md:border-b-0' : ''} transition-all duration-500 group overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0070f3]/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="text-6xl font-black text-white/5 mb-10 group-hover:text-[#0070f3] transition-colors duration-500">{step.num}</div>
              <h3 className="text-3xl font-black uppercase mb-8 tracking-tight leading-none group-hover:translate-x-2 transition-transform duration-500">{step.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">{step.desc}</p>
              
              <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#0070f3]"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0070f3]">Active Process</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Methodology;
