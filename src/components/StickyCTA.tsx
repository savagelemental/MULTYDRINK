import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneCall, Award } from 'lucide-react';

interface StickyCTAProps {
  onCtaClick: () => void;
}

export default function StickyCTA({ onCtaClick }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          id="sticky-cta-bar"
          className="fixed bottom-0 left-0 right-0 z-40 bg-cream-50/95 backdrop-blur-md border-t border-gold-300/20 shadow-[0_-10px_30px_rgba(11,61,46,0.08)] py-3 px-4 sm:py-4 sm:px-6 transition-all"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-700 shrink-0 border border-gold-500/10">
                <Award className="w-5 h-5 text-forest-600" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs text-forest-800 font-medium">Asesoría de Vitalidad Gratuita</p>
                <h4 className="text-sm font-bold text-forest-900">Transforma tus hábitos y vitalidad con el Método VITAL</h4>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="hidden lg:inline-block text-xs text-forest-800/60 font-medium">
                ⚡ Solo 3 cupos esta semana
              </span>
              <button
                onClick={onCtaClick}
                id="sticky-booking-btn"
                className="w-full sm:w-auto py-2.5 px-5 rounded-full bg-forest-900 text-white font-medium text-xs sm:text-sm hover:bg-forest-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-gold-400/20 shadow-md shadow-forest-900/10"
              >
                <PhoneCall className="w-4 h-4 text-gold-400 animate-bounce" />
                Agendar Llamada Gratis
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
