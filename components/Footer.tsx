
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                G
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">GAMA</span>
                <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">Terapias Integradas</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Excelência em saúde multidisciplinar na Ilha do Governador. Ciência, ética e acolhimento para o seu bem-estar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#inicio" className="hover:text-primary">Início</a></li>
              <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-primary">Sobre Nós</a></li>
              <li><a href="#faq" className="hover:text-primary">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                (21) 2271-1800
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                contato@gama-terapias.com.br
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                <span>Rua Cambaúba, 250 - Ilha do Governador, Rio de Janeiro - RJ</span>
              </li>
            </ul>
          </div>

          {/* Map Embed Simulation */}
          <div className="rounded-2xl overflow-hidden bg-slate-800 border border-white/5 h-48">
             <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-500 italic text-xs p-4 text-center">
               [Google Maps Embed - Ilha do Governador]
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Gama Terapias Integradas. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-primary">Privacidade</a>
            <a href="#" className="hover:text-primary">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
