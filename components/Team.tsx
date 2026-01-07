
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-green-600 dark:text-primary mb-4">
          Saúde mental e física por quem leva a ciência a sério.
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Conheça a direção clínica e acadêmica da Gama Terapias Integradas
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {TEAM.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center group">
            <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-xl mb-6 border-4 border-transparent group-hover:border-primary transition-all duration-500 relative">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-widest">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/20">
          Conheça nossa trajetória completa
        </button>
      </div>
    </div>
  );
};

export default Team;
