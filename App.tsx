
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default dark mode as per request

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen">
      <Header 
        onOpenBooking={() => setIsBookingOpen(true)} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      <main>
        <section id="inicio">
          <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        </section>
        
        <section id="como-funciona" className="py-20 bg-primary/5">
          <HowItWorks onOpenBooking={() => setIsBookingOpen(true)} />
        </section>
        
        <section id="servicos" className="py-20">
          <Services />
        </section>
        
        <section id="sobre" className="py-20 bg-slate-50 dark:bg-surface-800">
          <Team />
        </section>
        
        <section id="faq" className="py-20">
          <FAQ />
        </section>
      </main>
      
      <Footer />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

      <AIAssistant />
    </div>
  );
};

export default App;
