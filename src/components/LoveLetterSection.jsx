import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Mail, Heart, Sparkles, Feather } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../config';
import { triggerHeartBurst } from '../utils/confetti';

export default function LoveLetterSection({ onOpenLetterState }) {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const handleOpenLetter = (e) => {
    if (!isOpen) {
      const rect = e?.currentTarget?.getBoundingClientRect?.();
      if (rect) {
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;
        triggerHeartBurst(x, y);
      } else {
        triggerHeartBurst(0.5, 0.5);
      }
      setIsOpen(true);
      if (onOpenLetterState) onOpenLetterState(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="letter-section"
      className={`relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center transition-colors duration-1000 z-10 ${isOpen ? 'bg-sky-50/60' : 'bg-transparent'
        }`}
    >
      <div className="max-w-2xl w-full text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 text-sky-700 text-xs sm:text-sm font-semibold mb-3 border border-sky-200">
            <Mail className="w-4 h-4 text-sky-600" />
            <span>Personal Letter</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold font-handwriting text-slate-800 mb-3">
            <span className="gradient-text">{BIRTHDAY_CONFIG.letter.title}</span>
          </h2>

          <p className="text-xs sm:text-sm text-sky-900/70 font-medium max-w-md mx-auto">
            {BIRTHDAY_CONFIG.letter.subtext}
          </p>
        </motion.div>

        {/* Envelope Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-lg mx-auto"
        >
          {!isOpen ? (
            /* Closed Envelope View */
            <div
              onClick={handleOpenLetter}
              className="glass-card p-8 sm:p-12 relative cursor-pointer group hover:shadow-2xl border border-sky-200/80 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #e0f2fe 100%)'
              }}
            >
              {/* Envelope Flap Overlay Simulation */}
              <div className="w-20 h-20 rounded-full bg-sky-100/90 flex items-center justify-center mb-6 text-sky-600 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 fill-sky-500 text-sky-500 group-hover:animate-ping" style={{ animationDuration: '2s' }} />
              </div>

              <div className="text-center">
                <p className="font-handwriting text-2xl text-slate-800 font-bold mb-2">
                  {BIRTHDAY_CONFIG.letter.envelopeLabel}
                </p>
                <p className="text-xs text-sky-600 font-medium mb-6 flex items-center justify-center gap-1">
                  <Feather className="w-3.5 h-3.5" />
                  Written with love by {BIRTHDAY_CONFIG.senderName}
                </p>

                <button
                  onClick={handleOpenLetter}
                  className="btn-primary text-sm sm:text-base px-6 py-3.5"
                >
                  <span>{BIRTHDAY_CONFIG.letter.buttonText}</span>
                </button>
              </div>

              {/* Decorative Wax Seal Sticker */}
              <div className="absolute top-4 right-4 text-sky-400">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
            </div>
          ) : (
            /* Open Letter Paper View */
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', damping: 20 }}
                className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-sky-100/90 text-left text-slate-800 overflow-hidden"
                style={{
                  backgroundImage: 'radial-gradient(#bae6fd 0.65px, transparent 0.65px)',
                  backgroundSize: '24px 24px'
                }}
              >
                {/* Stamp & Seal Badge */}
                <div className="flex items-center justify-between border-b border-sky-100 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 fill-sky-500 text-sky-500" />
                    <span className="font-handwriting text-xl text-sky-600 font-bold">
                      21 November 2025.
                    </span>
                  </div>
                  <div className="text-xs px-3 py-1 rounded-full bg-sky-50 text-sky-600 font-semibold border border-sky-200">
                    💌 Special Edition
                  </div>
                </div>

                {/* Letter Content Paragraphs */}
                <div className="space-y-4 font-body text-slate-700 text-sm sm:text-base leading-relaxed">
                  {BIRTHDAY_CONFIG.letter.content.map((paragraph, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.2 }}
                      className={idx === 0 ? "font-handwriting text-2xl text-sky-900 font-bold" : ""}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Letter Footer Signature */}
                <div className="mt-8 pt-6 border-t border-sky-100 flex items-center justify-between">
                  <span className="text-xs text-sky-500 italic">
                    🩵
                  </span>
                  <span className="font-handwriting text-2xl text-sky-600 font-bold">
                    {BIRTHDAY_CONFIG.senderName}
                  </span>
                </div>

                {/* Subtle Floating Sparkles on Letter */}
                <Sparkles className="absolute bottom-4 left-4 text-sky-300 w-5 h-5 animate-pulse" />
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
}
