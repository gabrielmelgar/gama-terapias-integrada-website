
import React from 'react';
import { PhoneCall, ClipboardCheck, Link, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      icon: <PhoneCall />,
      title: '1. Contato Inicial',
      desc: 'Preencha nosso formulário ou ligue. Damos o primeiro passo juntos.'
    },
    {
      icon: <ClipboardCheck />,
      title: '2. Triagem/Análise',
      desc: 'Avaliamos suas necessidades para entender o melhor caminho terapêutico.'
    },
    {
      icon: <Link />,
      title: '3. Conexão com Especialista',
      desc: 'Nossa equipe te conecta ao profissional ideal para o seu perfil.'
    },
    {
      icon: <Sparkles />,
      title: '4. Início do Tratamento',
      desc: 'Inicie sua jornada personalizada rumo à saúde e equilíbrio.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
        Como Funciona – Nossa Abordagem Integrada
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
        Um processo simplificado para garantir que você receba o melhor cuidado desde o primeiro contato.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 border-t-2 border-dashed border-primary/30 z-0"></div>

        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 group">
            <div className="w-24 h-24 rounded-full bg-white dark:bg-surface-800 shadow-xl border-4 border-primary mx-auto flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">
              {React.cloneElement(step.icon as React.ReactElement, { size: 36 })}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed px-4">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <button
          onClick={onOpenBooking}
          className="px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-lg transition-all"
        >
          Agendar Minha Triagem
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
