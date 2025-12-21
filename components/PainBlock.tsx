
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { AlertCircle, XCircle, DollarSign } from 'lucide-react';

const PainBlock: React.FC = () => {
  const pains = [
    {
      icon: <DollarSign className="w-8 h-8 text-red-500" />,
      title: "Extortionate Pricing",
      desc: "US/EU Agencies charge $15k-$50k for basic Next.js setups. You're paying for their fancy office, not the code."
    },
    {
      icon: <XCircle className="w-8 h-8 text-red-500" />,
      title: "The DIY Trap",
      desc: "Wix and Squarespace sites look like templates, run slow (40/100 Speed Score), and kill your SEO from day one."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      title: "The AI Hallucination",
      desc: "Pure AI-generated code is full of security holes, bugs, and lacks the structural integrity needed for scale."
    }
  ];

  return (
    <SectionWrapper id="pain" className="bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
              The Expat <br /><span className="text-[#0070f3]">Dilemma</span>
            </h2>
          </div>
          <div className="md:w-1/2 pt-4">
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              You need a world-class digital presence to compete globally, but traditional routes are either too expensive or too risky. We bridges that gap.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((pain, idx) => (
            <div key={idx} className="p-8 bg-white/5 border border-white/5 hover:border-red-500/30 transition-all duration-500 group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{pain.icon}</div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">{pain.title}</h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PainBlock;
