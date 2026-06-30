import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, CheckCircle2, Shield, ArrowRight, Loader2 } from 'lucide-react';
import { Lead } from '../types';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  source?: string;
}

export default function LeadModal({
  isOpen,
  onClose,
  title = "Agenda tu Sesión de Diagnóstico Gratuita",
  subtitle = "Analizaremos tu vitalidad actual y diseñaremos un plan personalizado de 3 pasos.",
  ctaText = "Confirmar y Agendar Llamada →",
  source = "Coaching Session"
}: LeadModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);

    // Simulate luxury server response
    setTimeout(() => {
      const newLead: Lead = {
        name,
        email,
        whatsapp,
        status: 'new',
        createdAt: new Date().toISOString()
      };

      // Store lead in localstorage
      const existingLeads: Lead[] = JSON.parse(localStorage.getItem('vital_coach_leads') || '[]');
      existingLeads.push(newLead);
      localStorage.setItem('vital_coach_leads', JSON.stringify(existingLeads));

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setWhatsapp('');
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-forest-950/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            id="lead-capture-modal"
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-cream-50 border border-gold-300/30 shadow-2xl z-10"
          >
            {/* Upper decorative gold bar */}
            <div className="h-2 w-full bg-gradient-to-r from-gold-500 via-forest-500 to-gold-400" />

            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-modal-btn"
              className="absolute top-4 right-4 p-2 rounded-full text-forest-800 hover:bg-forest-100 hover:text-forest-900 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 sm:p-10">
              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-forest-100 text-forest-800 mb-3">
                      <Calendar className="w-3.5 h-3.5" /> Cupos Limitados de Asesoría
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-forest-900 leading-tight">
                      {title}
                    </h3>
                    <p className="text-sm text-forest-800/80 mt-2">
                      {subtitle}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="modal-name" className="block text-xs font-semibold text-forest-900 uppercase tracking-wider mb-1">
                        Tu Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="modal-name"
                        required
                        placeholder="Ej. Desarrollador Gus hazme esta pagina "
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-forest-800/20 bg-white text-forest-950 focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="block text-xs font-semibold text-forest-900 uppercase tracking-wider mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        required
                        placeholder="Ej. ocamgustavo@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-forest-800/20 bg-white text-forest-950 focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-whatsapp" className="block text-xs font-semibold text-forest-900 uppercase tracking-wider mb-1">
                        Teléfono / WhatsApp (Opcional)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-forest-800/50 font-medium">
                          +
                        </span>
                        <input
                          type="tel"
                          id="modal-whatsapp"
                          placeholder="57 315 564 6015"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-forest-800/20 bg-white text-forest-950 focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent transition-all"
                        />
                      </div>
                      <p className="text-[10px] text-forest-800/60 mt-1">
                        Te contactaremos por WhatsApp para coordinar el horario de tu llamada.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="submit-lead-btn"
                      className="w-full py-4 px-6 mt-2 rounded-xl bg-forest-900 text-white font-medium hover:bg-forest-800 shadow-lg shadow-forest-900/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-gold-400/20"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Procesando tu solicitud...
                        </>
                      ) : (
                        <>
                          {ctaText}
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-6 pt-4 border-t border-forest-800/10 flex items-center justify-between text-xs text-forest-800/60">
                    <span className="flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 text-gold-500" /> Datos 100% Protegidos
                    </span>
                    <span>No enviamos Spam.</span>
                  </div>
                </>
              ) : (
                <div className="text-center py-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6 text-forest-700"
                  >
                    <CheckCircle2 className="w-10 h-10 text-forest-600" />
                  </motion.div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-900">
                    ¡Asesoría Reservada con Éxito!
                  </h3>
                  <p className="text-base text-forest-800/80 mt-3 max-w-sm mx-auto">
                    Gracias por confiar en mí, <strong className="text-forest-900 font-semibold">{name}</strong>. Hemos registrado tu solicitud para <strong>{source}</strong>.
                  </p>
                  
                  <div className="my-6 p-4 rounded-2xl bg-forest-100 text-left border border-forest-700/10 text-sm space-y-2">
                    <p className="text-forest-900 font-medium">📋 Próximos Pasos:</p>
                    <ul className="list-disc list-inside text-forest-800 space-y-1 pl-1">
                      <li>Revisa tu correo <strong className="font-semibold">{email}</strong>. Te enviamos los detalles iniciales.</li>
                      {whatsapp && (
                        <li>Te escribiremos a tu WhatsApp <strong className="font-semibold">+{whatsapp}</strong> en las próximas horas para confirmar fecha y hora.</li>
                      )}
                    </ul>
                  </div>

                  <button
                    onClick={handleReset}
                    id="modal-success-btn"
                    className="w-full py-3.5 rounded-xl bg-forest-900 text-white font-medium hover:bg-forest-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Volver a la Página <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
