import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Generate static floating items for background
const FLOATING_HEARTS_COUNT = 10;
const SPARKLES_COUNT = 10;
const BALLOONS_COUNT = 4;

export default function BackgroundEffects() {
  const [hearts, setHearts] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    // Reduce particle count on low-power or mobile screens
    const isMobile = window.innerWidth < 768;
    const hCount = isMobile ? 5 : FLOATING_HEARTS_COUNT;
    const sCount = isMobile ? 6 : SPARKLES_COUNT;
    const bCount = isMobile ? 2 : BALLOONS_COUNT;

    // Generate hearts data
    const heartsArr = Array.from({ length: hCount }, (_, i) => ({
      id: i,
      left: Math.random() * 95 + '%',
      size: Math.floor(Math.random() * 14) + 14, // 14px to 28px
      duration: Math.random() * 8 + 10, // 10s to 18s
      delay: Math.random() * 8,
      opacity: Math.random() * 0.4 + 0.35,
      heartSymbol: ['🩵', '💙', '✨', '☁️', '🌸', '🤍'][Math.floor(Math.random() * 6)]
    }));
    setHearts(heartsArr);

    // Generate sparkles data
    const sparklesArr = Array.from({ length: sCount }, (_, i) => ({
      id: i,
      top: Math.random() * 95 + '%',
      left: Math.random() * 95 + '%',
      scale: Math.random() * 0.8 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 4,
    }));
    setSparkles(sparklesArr);

    // Generate balloons data - Sky Blue palette
    const balloonColors = ['#38bdf8', '#0ea5e9', '#7dd3fc', '#0284c7', '#60a5fa'];
    const balloonsArr = Array.from({ length: bCount }, (_, i) => ({
      id: i,
      left: (i * 24 + 8) + '%',
      color: balloonColors[i % balloonColors.length],
      size: Math.floor(Math.random() * 10) + 36, // 36px to 46px
      duration: Math.random() * 6 + 14,
      delay: i * 2.5
    }));
    setBalloons(balloonsArr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Hearts */}
      {hearts.map((h) => (
        <motion.div
          key={`heart-${h.id}`}
          className="absolute select-none gpu-accelerated"
          style={{
            left: h.left,
            bottom: '-50px',
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
          animate={{
            y: ['0vh', '-115vh'],
            x: ['0px', (h.id % 2 === 0 ? 20 : -20) + 'px', '0px'],
            rotate: [0, h.id % 2 === 0 ? 15 : -15, 0]
          }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            delay: h.delay,
            ease: 'linear'
          }}
        >
          {h.heartSymbol}
        </motion.div>
      ))}

      {/* Floating Balloons */}
      {balloons.map((b) => (
        <motion.div
          key={`balloon-${b.id}`}
          className="absolute flex flex-col items-center gpu-accelerated"
          style={{
            left: b.left,
            bottom: '-120px',
            opacity: 0.75,
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
          animate={{
            y: ['0vh', '-120vh'],
            x: ['0px', (b.id % 2 === 0 ? 30 : -30) + 'px', '0px'],
            rotate: [0, b.id % 2 === 0 ? 6 : -6, 0]
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: 'easeInOut'
          }}
        >
          <div
            style={{
              width: `${b.size}px`,
              height: `${b.size * 1.2}px`,
              backgroundColor: b.color,
              borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
              boxShadow: `inset -6px -6px 12px rgba(0,0,0,0.1), 0 6px 16px ${b.color}35`,
              position: 'relative'
            }}
          >
            {/* Balloon Shine */}
            <div
              className="absolute top-2 left-2 rounded-full bg-white opacity-40"
              style={{ width: `${b.size * 0.25}px`, height: `${b.size * 0.25}px` }}
            />
          </div>
          {/* Balloon knot */}
          <div
            style={{
              width: '4px',
              height: '4px',
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderBottom: `6px solid ${b.color}`,
              marginTop: '-1px'
            }}
          />
          {/* Balloon string */}
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'rgba(56, 189, 248, 0.4)'
            }}
          />
        </motion.div>
      ))}

      {/* Twinkling Sparkles */}
      {sparkles.map((s) => (
        <motion.div
          key={`sparkle-${s.id}`}
          className="absolute select-none text-sky-300 pointer-events-none gpu-accelerated"
          style={{
            top: s.top,
            left: s.left,
            fontSize: `${14 * s.scale}px`,
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
          animate={{
            scale: [0, 1.2, 0],
            opacity: [0, 0.8, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            delay: s.delay,
            ease: 'easeInOut'
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
}
