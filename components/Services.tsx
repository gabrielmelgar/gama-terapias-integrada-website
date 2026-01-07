
import React, { useState } from 'react';
import { SERVICES, ICON_MAP } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [filter, setFilter] = useState<'todos' | 'infantil' | 'adulto'>('todos');

  const filteredServices = SERVICES.filter(s => 
    filter === 'todos' || s.category === filter || s.category === 'ambos'
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl">
            Abordagens integradas para o seu bem-estar mental e físico, com especialistas em diversas áreas.
          </p>
        </div>

        <div className="flex p-1 bg-slate-100 dark:bg-surface-800 rounded-xl">
          {['todos', 'infantil', 'adulto'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-6 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${
                filter === f 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-slate-500 hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div 
            key={service.id}
            className="group glass p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden"
          >
            {/* Background Icon */}
            <div className="absolute -top-4 -right-4 text-primary/5 group-hover:text-primary/10 transition-colors">
              {React.cloneElement(ICON_MAP[service.icon] as React.ReactElement, { size: 120 })}
            </div>

            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              {ICON_MAP[service.icon]}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
              {service.description}
            </p>

            <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all">
              Saiba mais <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
