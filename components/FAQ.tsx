
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Does Google penalize AI-generated content or code?",
      a: "No. Google rewards helpful, high-quality content and clean code. We use AI for initial velocity, then our senior engineers manually optimize every line for SEO crawlers and indexability."
    },
    {
      q: "Who owns the code after the project?",
      a: "You do. 100%. We hand over the full GitHub repository and administrative rights. No vendor lock-in, no monthly rental fees."
    },
    {
      q: "Can you migrate my current slow WordPress site?",
      a: "Absolutely. We specialize in 'Next.js Rescues' where we take your existing slow site and transform it into a headless high-performance engine while keeping your current URLs intact."
    },
    {
      q: "What is your typical project timeline?",
      a: "A standard enterprise landing page takes 14 days. More complex multi-page apps or custom integrations typically take 21-30 days."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
            FAQS
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed uppercase font-bold tracking-widest max-w-xs">
            Addressing technical fears and project logistics.
          </p>
          <div className="mt-12 text-[#0070f3] font-black uppercase tracking-widest border-b border-[#0070f3] inline-block cursor-pointer hover:text-white hover:border-white transition-colors">
            Contact Support
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-white/10 overflow-hidden transition-all duration-500 ${openIndex === idx ? 'bg-white/[0.03] border-white/20' : ''}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-8 text-left group"
              >
                <span className="text-xl md:text-2xl font-black uppercase tracking-tight group-hover:text-[#0070f3] transition-colors pr-8">
                  {faq.q}
                </span>
                {openIndex === idx ? <Minus className="text-[#0070f3] shrink-0" /> : <Plus className="text-gray-500 shrink-0" />}
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 p-8 pt-0' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 text-lg leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FAQ;
