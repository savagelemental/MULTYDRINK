import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Smile } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedText = encodeURIComponent(message || "Hola, me gustaría recibir más información sobre el Método VITAL y el producto MultyDrink.");
    const whatsappUrl = `https://wa.me/5491112345678?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-80 rounded-2xl bg-white border border-forest-800/10 shadow-2xl overflow-hidden mb-4 mr-1 text-left"
            id="whatsapp-chat-widget"
          >
            {/* Header */}
            <div className="bg-forest-900 text-cream-50 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center border border-gold-300/20 font-serif font-bold text-lg text-gold-400">
                    VC
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm leading-tight">Vital Coach</h4>
                  <p className="text-[10px] text-gold-300 font-medium">En línea para ayudarte</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-cream-50/80 hover:text-cream-50 transition-colors"
                id="close-whatsapp-chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-4 bg-cream-50 max-h-60 overflow-y-auto space-y-3">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-forest-800/5 text-xs text-forest-900 max-w-[85%] shadow-sm">
                <p className="font-semibold text-forest-800 mb-1">¡Hola! Soy tu coach 👋</p>
                <p>¿Tienes dudas sobre cómo tomar MultyDrink o si el Método VITAL es para ti? Escríbeme, te responderé personalmente.</p>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-forest-800/5 flex items-center gap-2">
              <input
                type="text"
                placeholder="Escribe tu mensaje aquí..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-3 py-2 bg-cream-50 text-xs text-forest-950 rounded-xl focus:outline-none focus:ring-1 focus:ring-forest-600 border border-transparent"
              />
              <button
                type="submit"
                id="send-whatsapp-msg"
                className="p-2 rounded-xl bg-forest-900 text-gold-400 hover:bg-forest-800 transition-colors shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Float Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        id="whatsapp-float-btn"
        className="w-14 h-14 rounded-full bg-forest-900 text-gold-400 hover:text-gold-300 flex items-center justify-center shadow-xl border border-gold-400/20 relative cursor-pointer group"
      >
        <span className="absolute inset-0 rounded-full bg-forest-800/20 animate-ping group-hover:hidden" />
        <MessageSquare className="w-6 h-6 animate-pulse" />
      </motion.button>
    </div>
  );
}
