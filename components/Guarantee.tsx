
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ShieldAlert } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <SectionWrapper className="bg-black py-0">
      <div className="max-w-7xl mx-auto border-x border-white/5 py-24 md:py-32 px-6 md:px-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <ShieldAlert className="w-16 h-16 text-[#0070f3] mb-12" />
          <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
            We work for <span className="text-gray-500 italic">Free</span> until you're <span className="text-[#0070f3]">100%</span> Satisfied.
          </h2>
          <p className="text-2xl md:text-3xl font-medium text-gray-400 leading-relaxed">
            50% deposit starts the sprint. Final payment <span className="text-white underline decoration-[#0070f3] underline-offset-8">ONLY</span> if your site scores 90+ on Google PageSpeed. If we don't hit the goals, we keep working on our dime until we do.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Guarantee;
