import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, RotateCcw, Sparkles } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../config';
import { triggerSoftConfetti } from '../utils/confetti';

export default function EndingSection({ onPlayAgain }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      triggerSoftConfetti();
    }
  }, [isInView]);

  return (
    <footer 
      ref={sectionRef}
      className="relative py-28 px-4 text-center z-10 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 sm:p-12 border border-white/90 shadow-2xl relative"
        >
          {/* Heart Icon Header */}
          <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-6 text-sky-600 shadow-sm border border-sky-200">
            <Heart className="w-8 h-8 fill-sky-500 text-sky-500 animate-pulse" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-5xl font-bold font-handwriting text-slate-800 mb-4 leading-tight">
            <span className="gradient-text">{BIRTHDAY_CONFIG.ending.title}</span>
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-sky-900/80 font-medium mb-10 max-w-md mx-auto">
            {BIRTHDAY_CONFIG.ending.subtext}
          </p>

          {/* Play Again Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPlayAgain}
            className="btn-secondary group text-sm sm:text-base px-8 py-3.5 mx-auto"
          >
            <RotateCcw className="w-4 h-4 text-sky-600 group-hover:-rotate-90 transition-transform duration-300" />
            <span>{BIRTHDAY_CONFIG.ending.buttonText}</span>
          </motion.button>

          {/* Sparkles */}
          <Sparkles className="absolute top-4 left-6 text-sky-300 w-5 h-5 animate-pulse" />
          <Sparkles className="absolute bottom-6 right-6 text-sky-400 w-6 h-6 animate-pulse" />
        </motion.div>
      </div>

      <div className="mt-12 text-xs text-sky-600/80 font-medium flex items-center gap-1">
        <span>Made with lots of love</span>
        <Heart className="w-3 h-3 fill-sky-500 text-sky-500 inline" />
        <span>for {BIRTHDAY_CONFIG.recipientName}</span>
      </div>
    </footer>
  );
}
