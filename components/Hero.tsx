
import React from 'react';
import { Users, Heart } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-400/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight text-slate-900 dark:text-white">
              Conectando você à <span className="text-primary">saúde integral</span> e bem-estar.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Atendimento multidisciplinar baseado em ciência e acolhimento para todas as idades na Ilha do Governador.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-3 glass px-5 py-3 rounded-2xl">
                <div className="w-10 h-10 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">+100</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">Profissionais</p>
                </div>
              </div>

              <div className="flex items-center gap-3 glass px-5 py-3 rounded-2xl">
                <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                  <Heart size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">+10 mil</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">Vidas Impactadas</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold shadow-xl shadow-primary/20 transition-all hover:-translate-y-1"
              >
                Agendar Minha Consulta
              </button>
              <a
                href="#servicos"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-slate-900 dark:text-white border border-white/10 rounded-2xl font-bold transition-all text-center"
              >
                Conheça Nossos Serviços
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="Cuidador e paciente em sessão"
                className="w-full h-full object-cover grayscale-[20%] dark:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl border border-primary/20 shadow-xl max-w-[200px] hidden sm:block">
              <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Destaque</p>
              <p className="text-sm text-slate-900 dark:text-white font-medium">Avaliação Neuropsicológica Referência no RJ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
