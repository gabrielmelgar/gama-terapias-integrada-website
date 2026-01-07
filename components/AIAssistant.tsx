
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { askAssistant } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    {role: 'assistant', content: 'Olá! Sou o assistente da Clínica Gama. Como posso ajudar você hoje?'}
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', content: userMsg}]);
    setIsLoading(true);

    const response = await askAssistant(userMsg);
    
    setMessages(prev => [...prev, {role: 'assistant', content: response}]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      {isOpen ? (
        <div className="glass w-80 md:w-96 h-[500px] rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-bold">Gama Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <X size={20} />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-primary text-white' 
                    : 'bg-slate-100 dark:bg-surface-800 text-slate-800 dark:text-slate-200'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-surface-800 p-3 rounded-2xl animate-pulse text-xs">
                  Digitando...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              placeholder="Pergunte algo..."
              className="flex-1 bg-slate-50 dark:bg-surface-900 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-dark transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center hover:scale-110 transition-transform hover:-rotate-12"
        >
          <MessageSquare size={30} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
