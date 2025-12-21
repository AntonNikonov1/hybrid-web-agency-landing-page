
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Ready to <span className="text-[#0070f3]">Scale?</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">
              Stop settling for slow code. Start building your legacy.
            </p>
          </div>
          
          <button className="px-12 py-6 bg-[#0070f3] text-white font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
            Start A Project
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/5">
          <div className="col-span-2">
            <div className="text-2xl font-black uppercase tracking-tighter mb-6">NAKULA<span className="text-[#0070f3]">®</span></div>
            <p className="text-gray-500 max-w-sm">
              The world's first hybrid AI agency. We combine the velocity of artificial intelligence with the precision of senior human engineering.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">Navigate</h4>
            <ul className="text-gray-500 space-y-4 text-sm uppercase font-bold tracking-tight">
              <li><a href="#" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">Connect</h4>
            <ul className="text-gray-500 space-y-4 text-sm uppercase font-bold tracking-tight">
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Clutch</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-700">
          <div>© 2025 NAKULA HYBRID AGENCY. ALL RIGHTS RESERVED.</div>
          <div className="mt-4 md:mt-0 flex gap-8">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
