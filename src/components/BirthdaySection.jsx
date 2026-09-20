import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Heart, Cake } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../config';
import { triggerSoftConfetti } from '../utils/confetti';

export default function BirthdaySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      triggerSoftConfetti();
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="birthday-section"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 z-10"
    >
      <div className="max-w-3xl w-full text-center">
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 text-sky-700 text-sm font-semibold mb-3 border border-sky-200">
            <Cake className="w-4 h-4 text-sky-600" />
            <span>Our Little Story 🤍!</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-handwriting leading-tight text-slate-800">
            <span className="gradient-text">{BIRTHDAY_CONFIG.birthday.title}</span>
          </h2>
        </motion.div>

        {/* Hero Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3, type: 'spring', stiffness: 100 }}
          className="relative inline-block mb-10 group"
        >
          {/* Sparkles orbiting photo frame */}
          <Sparkles className="absolute -top-4 -left-4 text-sky-400 w-8 h-8 animate-pulse z-20" />
          <Sparkles className="absolute -bottom-4 -right-4 text-sky-600 w-8 h-8 animate-pulse z-20" style={{ animationDelay: '0.8s' }} />
          <Heart className="absolute top-1/2 -right-6 text-sky-500 w-6 h-6 fill-sky-300 animate-bounce z-20" />

          {/* Polaroid Frame Wrapper */}
          <div className="polaroid-card max-w-xs md:max-w-sm mx-auto p-4 md:p-5 bg-white shadow-2xl rounded-2xl transform rotate-1 transition-transform duration-500 hover:rotate-0">
            <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-sky-50">
              <img
                src={BIRTHDAY_CONFIG.birthday.photo}
                alt={BIRTHDAY_CONFIG.recipientName}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/20 via-transparent to-transparent opacity-60" />
            </div>

            {/* Photo Caption */}
            <div className="mt-4 text-center">
              <p className="font-handwriting text-2xl text-sky-900 font-semibold">
                {BIRTHDAY_CONFIG.birthday.photoCaption}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Short Text Wishes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card p-6 md:p-8 max-w-xl mx-auto border border-white/90 shadow-lg text-center"
        >
          <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed mb-3">
            "{BIRTHDAY_CONFIG.birthday.message}"
          </p>
          {BIRTHDAY_CONFIG.birthday.subMessage && (
            <p className="text-xs md:text-sm text-sky-600 font-medium italic">
              {BIRTHDAY_CONFIG.birthday.subMessage}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
