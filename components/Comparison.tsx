
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Check, X, Minus } from 'lucide-react';

const Comparison: React.FC = () => {
  const features = [
    { name: "Speed Score (PageSpeed)", us: "95-100 (Instant)", wp: "40-70 (Slow)", diy: "50-80 (Medium)" },
    { name: "Security Level", us: "Bank-Grade", wp: "Low (Vulnerable)", diy: "Closed Box" },
    { name: "Full Ownership", us: "100% Client Owned", wp: "Partial", diy: "0% (Subscription)" },
    { name: "Custom Logic Cap", us: "Infinite", wp: "Plugin Hell", diy: "Very Limited" },
    { name: "Monthly Maintenance", us: "$0", wp: "$200+", diy: "$30+" }
  ];

  return (
    <SectionWrapper id="comparison" className="bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-20 text-center">
          Numbers <span className="text-[#0070f3]">Don't Lie</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-8 px-6 text-xs uppercase tracking-widest font-bold text-gray-500">Service Feature</th>
                <th className="py-8 px-6 text-lg font-black uppercase text-[#0070f3] bg-[#0070f3]/5">Our Hybrid App</th>
                <th className="py-8 px-6 text-lg font-black uppercase text-gray-400">WordPress Studio</th>
                <th className="py-8 px-6 text-lg font-black uppercase text-gray-400">Wix / DIY</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="py-8 px-6 font-bold text-gray-300 uppercase text-sm tracking-tight">{feature.name}</td>
                  <td className="py-8 px-6 text-white font-black bg-[#0070f3]/5 border-x border-[#0070f3]/10">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      {feature.us}
                    </div>
                  </td>
                  <td className="py-8 px-6 text-gray-500 italic">
                    <div className="flex items-center gap-2">
                      <X className="w-5 h-5 text-red-500" />
                      {feature.wp}
                    </div>
                  </td>
                  <td className="py-8 px-6 text-gray-500 italic">
                    <div className="flex items-center gap-2">
                      <Minus className="w-5 h-5 text-yellow-500" />
                      {feature.diy}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Comparison;
