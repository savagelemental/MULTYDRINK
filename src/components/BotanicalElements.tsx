import { motion } from 'motion/react';

export default function BotanicalElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft Floating Leaf 1 - Top Left Hero */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 6, -6, 0],
          scale: [1, 1.03, 0.97, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[15%] left-[5%] opacity-15 text-forest-700 hidden lg:block"
      >
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 C30 30 10 50 10 70 C10 85 25 90 40 80 C50 73 50 50 50 50 C50 50 50 73 60 80 C75 90 90 85 90 70 C90 50 70 30 50 10 Z" />
        </svg>
      </motion.div>

      {/* Soft Floating Leaf 2 - Mid Right VITAL Method */}
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -8, 8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[35%] right-[8%] opacity-10 text-forest-500 hidden md:block"
      >
        <svg className="w-24 h-24" viewBox="0 0 100 100" fill="currentColor">
          <path d="M10 50 C10 30 30 10 50 10 C70 10 90 30 90 50 C90 70 70 90 50 90 C30 90 10 70 10 50 Z" opacity="0.3"/>
          <path d="M50 10 C65 30 75 50 50 90 C25 50 35 30 50 10 Z" />
        </svg>
      </motion.div>

      {/* Soft Floating Leaf 3 - Bottom Left Testimonials */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[20%] left-[3%] opacity-15 text-forest-600 hidden lg:block"
      >
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
          <path d="M30 10 C45 25 55 45 30 90 C5 45 15 25 30 10 Z" />
        </svg>
      </motion.div>

      {/* Floating Sparkle / Natural Pollen Element - Right Bottom */}
      <motion.div
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[75%] right-[5%] w-8 h-8 rounded-full bg-gold-300 blur-xl hidden sm:block"
      />
    </div>
  );
}
export function BotanicalSingleLeaf({ className }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`opacity-20 text-forest-600 ${className}`}
    >
      <svg className="w-10 h-10" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 15 C35 35 25 50 50 85 C75 50 65 35 50 15 Z" />
      </svg>
    </motion.div>
  );
}
