
import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenBooking, isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              G
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">GAMA</span>
              <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">Terapias Integradas</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
            </button>
            <button
              onClick={onOpenBooking}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20"
            >
              Agendar Consulta
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                onOpenBooking();
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-3 py-4 text-base font-bold text-primary"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
