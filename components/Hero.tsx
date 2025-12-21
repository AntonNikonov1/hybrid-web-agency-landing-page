
import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Shield, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-40 pb-20 flex flex-col justify-center overflow-hidden border-b border-white/5">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#0070f3]/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative px-6 md:px-12 z-10 max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#0070f3] mb-8 flex items-center gap-3"
        >
          <span className="w-12 h-[1px] bg-[#0070f3]"></span>
          Hybrid AI + Human Engineering Agency
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl lg:text-[11rem] font-black uppercase leading-[0.82] tracking-tighter text-white mb-16"
        >
          Enterprise<br />
          <span className="text-gray-600">Grade Sites</span><br />
          In 14 Days<span className="text-[#0070f3]">.</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-xl md:text-3xl text-gray-400 font-medium max-w-2xl leading-tight mb-12">
              Get a custom Next.js site superior to traditional agencies at <span className="text-white">1/4 of the cost.</span> 100% SEO-optimized, ultra-secure, and legally compliant.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button className="group relative px-10 py-6 bg-[#0070f3] text-white font-black uppercase tracking-widest text-sm overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(0,112,243,0.5)]">
                <span className="relative z-10">Get My Free Prototype</span>
                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">Get My Free Prototype</span>
              </button>
              <button className="px-10 py-6 border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all backdrop-blur-sm">
                View Speed Audit
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="lg:col-span-5 flex flex-col space-y-12 lg:items-end"
          >
            <div className="grid grid-cols-2 gap-8 w-full">
              <div className="p-6 border border-white/5 bg-white/[0.02] backdrop-blur-md">
                 <div className="flex items-center gap-3 mb-2">
                   <Gauge className="text-green-500 w-5 h-5" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">PageSpeed</span>
                 </div>
                 <div className="text-4xl font-black text-white">100/100</div>
              </div>
              <div className="p-6 border border-white/5 bg-white/[0.02] backdrop-blur-md">
                 <div className="flex items-center gap-3 mb-2">
                   <Shield className="text-[#0070f3] w-5 h-5" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Security</span>
                 </div>
                 <div className="text-4xl font-black text-white">A+ GRADE</div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-[10px] uppercase font-black tracking-[0.5em] text-gray-500 mb-2">Powered by AI, Perfected by Humans</div>
              <div className="flex items-center gap-4 justify-end">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] font-bold">
                      {i === 4 ? '+5' : <img src={`https://i.pravatar.cc/100?u=${i}`} className="rounded-full" />}
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-tighter">Senior Engineers on Standby</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Ticker / Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-white/5 border-y border-white/5 py-4 whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          {Array(10).fill(0).map((_, i) => (
            <span key={i} className="text-[10px] font-black uppercase tracking-[0.4em] mx-12 text-gray-600">
              NEXT.JS • TYPESCRIPT • TAILWIND CSS • OPENAI • VERCEL • HEADLESS CMS • STRIPE • HUB SPOT • 
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
