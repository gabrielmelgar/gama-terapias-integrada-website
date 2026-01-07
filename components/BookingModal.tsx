
import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    // Simulate API call
    setTimeout(() => {
      // Logic for success or error
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative glass w-full max-w-xl rounded-3xl overflow-hidden animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          {step === 1 ? (
            <>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Agendar Consulta</h2>
              <p className="text-slate-500 mb-8">Preencha os dados abaixo e entraremos em contato para confirmar.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      required
                      type="text"
                      placeholder="Seu nome completo"
                      className="w-full bg-slate-50 dark:bg-surface-800 border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary outline-none"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        required
                        type="email"
                        placeholder="E-mail"
                        className="w-full bg-slate-50 dark:bg-surface-800 border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary outline-none"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        required
                        type="tel"
                        placeholder="WhatsApp"
                        className="w-full bg-slate-50 dark:bg-surface-800 border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary outline-none"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <select
                    required
                    className="w-full bg-slate-50 dark:bg-surface-800 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-primary outline-none appearance-none"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Selecione o serviço</option>
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all"
                >
                  Solicitar Agendamento
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Solicitação Enviada!</h2>
              <p className="text-slate-500 mb-8 max-w-sm mx-auto">
                Obrigado, {formData.name.split(' ')[0]}. Nossa equipe de atendimento entrará em contato em breve via WhatsApp para confirmar seu horário.
              </p>
              <button
                onClick={onClose}
                className="px-10 py-3 bg-slate-100 dark:bg-surface-800 text-slate-900 dark:text-white font-bold rounded-xl"
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
