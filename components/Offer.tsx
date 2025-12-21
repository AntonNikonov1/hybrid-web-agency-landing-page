
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

const Offer: React.FC = () => {
  const features = [
    "Enterprise UI/UX Design System",
    "Headless Next.js 15 Implementation",
    "Dynamic Edge Caching Layer",
    "Structured Schema.org JSON-LD",
    "AI-Powered Copy Optimization",
    "End-to-End Analytics Dashboard",
    "Bank-Grade Security Hardening"
  ];

  return (
    <SectionWrapper id="offer" className="bg-[#050505] py-40">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative bg-[#0a0a0a] border border-white/5 p-8 md:p-24 overflow-hidden">
          {/* Futuristic background patterns */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-grid opacity-10 pointer-events-none"></div>
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0070f3]/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0070f3]/10 border border-[#0070f3]/20 rounded-full text-[#0070f3] text-[10px] font-black uppercase tracking-[0.2em] mb-10">
                <Star className="w-3 h-3 fill-[#0070f3]" />
                Best Value Package
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
                The Grand<br /><span className="text-[#0070f3]">Slam Bundle</span>
              </h2>
              <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-xl font-medium">
                We've combined our entire engineering stack into a single, high-velocity 14-day sprint. No bloat, just performance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                 {features.map((item, i) => (
                   <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group"
                   >
                     <div className="w-5 h-5 rounded-full bg-[#0070f3]/10 flex items-center justify-center border border-[#0070f3]/20 group-hover:bg-[#0070f3] transition-colors">
                       <CheckCircle2 className="w-3 h-3 text-[#0070f3] group-hover:text-white" />
                     </div>
                     <span className="text-sm font-black text-gray-400 group-hover:text-white transition-colors uppercase tracking-tight">{item}</span>
                   </motion.div>
                 ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end">
              <div className="text-center lg:text-right w-full mb-12">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mb-6">Investment Structure</div>
                <div className="flex flex-col items-center lg:items-end">
                  <div className="text-gray-600 text-3xl font-black line-through mb-2">$12,000 VALUE</div>
                  <div className="text-7xl md:text-9xl font-black leading-none tracking-tighter text-white">
                    $3,499
                  </div>
                </div>
                <p className="text-gray-500 uppercase font-black text-[10px] tracking-[0.4em] mt-6">Transparent Flat-Fee Model</p>
              </div>
              
              <div className="w-full max-w-md space-y-6">
                <button className="group relative w-full py-8 bg-white text-black font-black uppercase tracking-[0.3em] text-lg overflow-hidden transition-all hover:bg-[#0070f3] hover:text-white">
                   <span className="relative z-10">Apply for a Slot</span>
                </button>
                <div className="p-4 border border-red-500/20 bg-red-500/5 text-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-red-500 animate-pulse">
                    Alert: Only 3 slots remain for current engineering cycle
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Offer;
