
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'infantil' | 'adulto' | 'ambos';
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'sobre' | 'atendimento' | 'convenios';
}

export type Language = 'pt' | 'en' | 'es';
