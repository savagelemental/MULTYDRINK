import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto" id="faq-accordion-container">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-forest-800/10 bg-white overflow-hidden transition-all duration-300 hover:border-gold-400/30 hover:shadow-md"
          >
            <button
              onClick={() => toggleItem(item.id)}
              id={`faq-btn-${item.id}`}
              className="w-full text-left p-5 sm:p-6 flex items-start gap-4 justify-between font-serif group"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-forest-700 shrink-0 mt-1 group-hover:text-gold-500 transition-colors" />
                <span className="font-sans font-semibold text-forest-900 text-base sm:text-lg leading-tight">
                  {item.question}
                </span>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="text-forest-700 mt-1 shrink-0 bg-cream-100 p-1 rounded-full group-hover:bg-forest-100 transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-forest-800/80 pl-12 leading-relaxed border-t border-forest-800/5 bg-cream-50/30">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
