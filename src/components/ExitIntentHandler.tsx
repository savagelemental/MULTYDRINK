import { useState, useEffect } from 'react';
import LeadModal from './LeadModal';

export default function ExitIntentHandler() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Only track desktop pointer exits
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggered) return;

      // Detect cursor leaving the top of the viewport
      if (e.clientY < 15) {
        setShowExitPopup(true);
        setHasTriggered(true);
      }
    };

    // Track mobile back-button or visibility changes (optional fallback)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && !hasTriggered) {
        // Trigger for mobile when switching tabs/apps
        setShowExitPopup(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [hasTriggered]);

  // Check if exit intent was already triggered in this browser session
  useEffect(() => {
    const sessionTriggered = sessionStorage.getItem('exit_intent_triggered');
    if (sessionTriggered === 'true') {
      setHasTriggered(true);
    }
  }, []);

  const handleOpenPopup = () => {
    setShowExitPopup(true);
    setHasTriggered(true);
    sessionStorage.setItem('exit_intent_triggered', 'true');
  };

  const handleClose = () => {
    setShowExitPopup(false);
    sessionStorage.setItem('exit_intent_triggered', 'true');
  };

  return (
    <LeadModal
      isOpen={showExitPopup}
      onClose={handleClose}
      title="🎁 ¡Espera! No te vayas con las manos vacías"
      subtitle="Descarga GRATIS mi Guía de Longevidad VITAL: 'Los 5 Hábitos Simples para Duplicar tu Energía y Desinflamar tu Intestino hoy'."
      ctaText="Descargar Guía Gratis Ahora →"
      source="Guía de Longevidad - Exit Intent"
    />
  );
}
