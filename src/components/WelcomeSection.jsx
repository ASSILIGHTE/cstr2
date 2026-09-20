import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Gift, PackageCheck } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../config';
import { triggerHeartBurst, triggerSoftConfetti } from '../utils/confetti';
import CountdownTimer from './CountdownTimer';

export default function WelcomeSection({ onOpenGift }) {
  const [typedTitle, setTypedTitle] = useState('');
  const [typedSubtext, setTypedSubtext] = useState('');
  const fullTitle = BIRTHDAY_CONFIG.welcome.title;
  const fullSubtext = BIRTHDAY_CONFIG.welcome.subtext;
  const [titleDone, setTitleDone] = useState(false);

  // Typewriter effect for title
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullTitle.length) {
        setTypedTitle(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTitleDone(true);
      }
    }, 60);

    return () => clearInterval(timer);
  }, [fullTitle]);

  // Typewriter effect for subtext
  useEffect(() => {
    if (!titleDone) return;
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullSubtext.length) {
        setTypedSubtext(fullSubtext.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [titleDone, fullSubtext]);

  const handleButtonClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const originX = (rect.left + rect.width / 2) / window.innerWidth;
    const originY = (rect.top + rect.height / 2) / window.innerHeight;

    triggerHeartBurst(originX, originY);
    setTimeout(() => {
      triggerSoftConfetti();
    }, 350);

    onOpenGift();
  };

  return (
    <section 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 16px 40px 16px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
        perspective: '1200px'
      }}
    >
      {/* Background Orbs */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ffb3c1 0%, #bae6fd 100%)',
          filter: 'blur(10px)',
          opacity: 0.6,
          pointerEvents: 'none'
        }}
      />
      <motion.div
        animate={{ y: [12, -12, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '12%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ffd166 0%, #a855f7 100%)',
          filter: 'blur(12px)',
          opacity: 0.5,
          pointerEvents: 'none'
        }}
      />

      {/* 3D Card Container */}
      <div className="card-3d-wrapper max-w-xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="glass-card card-3d-body relative"
          style={{
            transformStyle: 'preserve-3d',
            padding: '36px 24px 36px 24px',
            borderRadius: '32px',
            border: '2px solid rgba(255, 255, 255, 0.95)',
            boxShadow: '0 25px 50px -12px rgba(2, 132, 199, 0.22), 0 10px 25px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Ambient Glow inside 3D Card */}
          <div style={{ position: 'absolute', top: '-40px', left: '-40px', width: '160px', height: '160px', background: 'rgba(255, 182, 193, 0.35)', borderRadius: '50%', filter: 'blur(45px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '160px', height: '160px', background: 'rgba(56, 189, 248, 0.35)', borderRadius: '50%', filter: 'blur(45px)', pointerEvents: 'none' }} />

          {/* Countdown Timer to 11 November 2026 */}
          <CountdownTimer />

          {/* 3D Floating Gift Box Badge */}
          <motion.div
            style={{ transform: 'translateZ(40px)', display: 'inline-block' }}
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div 
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                boxShadow: '0 12px 24px rgba(2, 132, 199, 0.35)',
                border: '2px solid rgba(255,255,255,0.6)'
              }}
            >
              <Gift style={{ width: '32px', height: '32px' }} />
            </div>
          </motion.div>

          {/* Decorative Top Pill */}
          <motion.div 
            style={{ transform: 'translateZ(30px)' }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                borderRadius: '999px',
                background: '#e0f2fe',
                color: '#0284c7',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '20px',
                border: '1.5px solid #bae6fd',
                boxShadow: '0 4px 12px rgba(2, 132, 199, 0.12)'
              }}
            >
              <Sparkles style={{ width: '15px', height: '15px', color: '#38bdf8' }} />
              <span>A Special Digital Gift For You</span>
              <Heart style={{ width: '13px', height: '13px', fill: '#0284c7', color: '#0284c7' }} />
            </div>
          </motion.div>

          {/* 3D Pastel Rainbow Title */}
          <div style={{ transform: 'translateZ(35px)', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <h1 
              className="font-handwriting text-3d-pastel"
              style={{
                fontSize: 'clamp(2.3rem, 6vw, 3.5rem)',
                fontWeight: 'bold',
                lineHeight: 1.25,
                margin: 0
              }}
            >
              <span>{typedTitle}</span>
              <span className="animate-pulse" style={{ color: '#ff758c', marginLeft: '4px' }}>|</span>
            </h1>
          </div>

          {/* Subtext */}
          <p 
            style={{
              fontSize: '15px',
              color: '#0369a1',
              fontWeight: 500,
              lineHeight: 1.6,
              maxWidth: '440px',
              margin: '0 auto 32px auto',
              transform: 'translateZ(25px)'
            }}
          >
            {typedSubtext}
          </p>

          {/* 3D Press Button */}
          <motion.div
            style={{ transform: 'translateZ(45px)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <button
              onClick={handleButtonClick}
              className="btn-3d-primary"
              style={{
                width: '100%',
                maxWidth: '290px'
              }}
            >
              <PackageCheck style={{ width: '22px', height: '22px' }} />
              <span>{BIRTHDAY_CONFIG.welcome.buttonText}</span>
            </button>
          </motion.div>

          {/* Sparkles */}
          <Sparkles style={{ position: 'absolute', top: '24px', left: '24px', color: '#bae6fd', width: '22px', height: '22px', transform: 'translateZ(25px)' }} />
          <Sparkles style={{ position: 'absolute', bottom: '24px', right: '24px', color: '#7dd3fc', width: '26px', height: '26px', transform: 'translateZ(25px)' }} />
        </motion.div>
      </div>

      {/* Down arrow scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '24px',
          color: '#0284c7',
          fontSize: '12px',
          fontWeight: 600,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          opacity: 0.85
        }}
      >
        <span>Scroll kebawah atau tekan tombol diatas</span>
        <div style={{ width: '18px', height: '30px', border: '2px solid #bae6fd', borderRadius: '999px', display: 'flex', justifyContent: 'center', paddingTop: '4px' }}>
          <div style={{ width: '4px', height: '8px', background: '#0284c7', borderRadius: '999px' }} className="animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
