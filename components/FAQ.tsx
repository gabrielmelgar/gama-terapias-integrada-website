
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  const categories = [
    { id: 'sobre', label: 'Sobre a Gama' },
    { id: 'atendimento', label: 'Atendimentos' },
    { id: 'convenios', label: 'Convênios e Valores' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-5xl font-bold font-display text-center text-primary mb-16">
        Perguntas Frequentes
      </h2>

      <div className="space-y-12">
        {categories.map((cat) => (
          <div key={cat.id}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pl-4 border-l-4 border-primary">
              {cat.label}
            </h3>
            <div className="space-y-4">
              {FAQS.filter(f => f.category === cat.id).map((faq) => (
                <div 
                  key={faq.id} 
                  className={`glass rounded-2xl border transition-all ${
                    openId === faq.id ? 'border-primary shadow-lg shadow-primary/5' : 'border-white/10'
                  }`}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex justify-between items-center p-6 text-left"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">{faq.question}</span>
                    {openId === faq.id ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-slate-400" />}
                  </button>
                  
                  {openId === faq.id && (
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
