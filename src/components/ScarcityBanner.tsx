import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Flame, Clock } from 'lucide-react';

export default function ScarcityBanner() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 24, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          // Reset timer to keep high-urgency illusion for other visitors
          return { minutes: 29, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      id="scarcity-top-banner"
      className="bg-forest-950 text-cream-50 text-xs sm:text-sm py-2.5 px-4 text-center font-medium relative z-40 border-b border-gold-300/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5"
    >
      <div className="flex items-center gap-1.5 justify-center">
        <Flame className="w-4 h-4 text-gold-400 animate-pulse fill-gold-400/20" />
        <span>
          OFERTA EXCLUSIVA: <strong className="text-gold-300 font-semibold">Solo quedan 3 cupos</strong> para la sesión de diagnóstico gratuita de esta semana.
        </span>
      </div>
      
      <div className="flex items-center gap-1.5 justify-center bg-forest-900 px-3 py-0.5 rounded-full border border-gold-300/20 text-[11px] sm:text-xs">
        <Clock className="w-3.5 h-3.5 text-gold-400" />
        <span>La reserva cierra en:</span>
        <span className="font-mono text-gold-300 font-bold">
          {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
    </motion.div>
  );
}
