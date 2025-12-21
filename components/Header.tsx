
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-white/5"
    >
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-black tracking-tighter uppercase">NAKULA<span className="text-[#0070f3]">®</span></span>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide uppercase text-gray-400">
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#process" className="hover:text-white transition-colors">Process</a>
        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
      </nav>

      <div className="flex items-center space-x-6">
        <div className="hidden lg:flex flex-col items-end text-[10px] uppercase font-bold tracking-widest leading-none">
          <div className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-white">Available for project</span>
          </div>
          <span className="text-gray-500 mt-1 uppercase">Feb 2025</span>
        </div>
        
        <button className="px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-[#0070f3] hover:text-white transition-all duration-300">
          Let's Talk
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
