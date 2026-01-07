
import React from 'react';
import { Service, TeamMember, FAQItem } from './types';
import { 
  Brain, 
  Stethoscope, 
  Baby, 
  Music, 
  Speech, 
  Users, 
  Activity, 
  HeartPulse, 
  Palette,
  Crosshair
} from 'lucide-react';

export const SERVICES: Service[] = [
  {
    id: 'psicoterapia',
    title: 'Psicoterapia',
    description: 'Apoio especializado para autoconhecimento, manejo de emoções e superação de desafios através de diversas linhas terapêuticas.',
    icon: 'Brain',
    category: 'ambos'
  },
  {
    id: 'avaliacao-neuro',
    title: 'Avaliação Neuropsicológica',
    description: 'Investigação detalhada das funções cognitivas, sensoriais e motoras para diagnósticos precisos.',
    icon: 'Activity',
    category: 'ambos'
  },
  {
    id: 'terapia-aba',
    title: 'Terapia ABA',
    description: 'Análise do Comportamento Aplicada, focada em desenvolvimento de habilidades sociais e autonomia.',
    icon: 'Crosshair',
    category: 'infantil'
  },
  {
    id: 'fonoaudiologia',
    title: 'Fonoaudiologia',
    description: 'Prevenção, avaliação e tratamento de distúrbios da comunicação humana e funções orofaciais.',
    icon: 'Speech',
    category: 'ambos'
  },
  {
    id: 'terapia-ocupacional',
    title: 'Terapia Ocupacional',
    description: 'Auxílio na realização de atividades do cotidiano para pessoas com dificuldades físicas ou cognitivas.',
    icon: 'Users',
    category: 'ambos'
  },
  {
    id: 'psicomotricidade',
    title: 'Psicomotricidade',
    description: 'Estimulação do desenvolvimento motor integrado aos aspectos cognitivos e emocionais.',
    icon: 'Baby',
    category: 'infantil'
  },
  {
    id: 'musicoterapia',
    title: 'Musicoterapia',
    description: 'Uso da música e seus elementos para facilitar a comunicação, aprendizado e expressão.',
    icon: 'Music',
    category: 'ambos'
  },
  {
    id: 'psiquiatria',
    title: 'Psiquiatria',
    description: 'Atendimento médico focado no diagnóstico e tratamento de transtornos mentais.',
    icon: 'Stethoscope',
    category: 'ambos'
  },
  {
    id: 'nutricao',
    title: 'Nutrição',
    description: 'Acompanhamento nutricional especializado para saúde integral e bem-estar físico.',
    icon: 'HeartPulse',
    category: 'ambos'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Eslen Delanogare',
    role: 'Doutor em Neurociências',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'João Perini',
    role: 'Mestre em Neurociências',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'José Siqueira',
    role: 'Mestre em Psicobiologia',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Juliana Fonseca',
    role: 'Médica Psiquiatra',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&w=400&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'sobre',
    question: 'O que é a Gama Terapias Integradas?',
    answer: 'Somos uma clínica multidisciplinar localizada na Ilha do Governador, Rio de Janeiro, focada em oferecer saúde integral através de ciência e acolhimento.'
  },
  {
    id: 'faq-2',
    category: 'atendimento',
    question: 'Os atendimentos são online ou presenciais?',
    answer: 'Oferecemos ambas as modalidades. Nossas salas são equipadas para atendimentos presenciais seguros e utilizamos plataformas criptografadas para teleconsultas.'
  },
  {
    id: 'faq-3',
    category: 'convenios',
    question: 'Vocês aceitam planos de saúde?',
    answer: 'Trabalhamos com os principais planos de saúde da região. Entre em contato para confirmar a cobertura específica do seu plano.'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Brain: <Brain size={24} />,
  Stethoscope: <Stethoscope size={24} />,
  Baby: <Baby size={24} />,
  Music: <Music size={24} />,
  Speech: <Speech size={24} />,
  Users: <Users size={24} />,
  Activity: <Activity size={24} />,
  HeartPulse: <HeartPulse size={24} />,
  Palette: <Palette size={24} />,
  Crosshair: <Crosshair size={24} />
};
