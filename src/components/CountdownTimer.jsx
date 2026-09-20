import React, { useState, useEffect } from 'react';
import { Clock, Timer } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../config';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false
  });

  useEffect(() => {
    const targetTime = new Date(BIRTHDAY_CONFIG.targetDate).getTime();

    const calculateTimePassed = () => {
      const now = new Date().getTime();
      const difference = Math.max(0, now - targetTime);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isFinished: false });
    };

    calculateTimePassed();
    const interval = setInterval(calculateTimePassed, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNum = (num) => String(num).padStart(2, '0');

  return (
    <div style={{ transform: 'translateZ(30px)', width: '100%', marginBottom: '20px' }}>
      {/* Title Tag */}
      <div 
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 14px',
          borderRadius: '999px',
          background: '#e0f2fe',
          color: '#0284c7',
          fontSize: '12px',
          fontWeight: 700,
          marginBottom: '12px',
          border: '1px solid #bae6fd',
          boxShadow: '0 2px 8px rgba(2, 132, 199, 0.08)'
        }}
      >
        <Clock style={{ width: '14px', height: '14px', color: '#0284c7' }} />
        <span>{BIRTHDAY_CONFIG.welcome?.countdownTitle || `Hari Berlalu Sejak ${BIRTHDAY_CONFIG.birthdayDate}`}</span>
      </div>

      {/* Countdown Digits */}
      {timeLeft.isFinished ? (
        <div 
          style={{
            padding: '10px 16px',
            borderRadius: '16px',
            background: '#e0f2fe',
            color: '#0284c7',
            fontWeight: 800,
            fontSize: '15px',
            border: '1px solid #bae6fd'
          }}
        >
          🎉 Hari Yang Spesial Telah Tiba! 🎉
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          {/* Days */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '8px 12px',
              borderRadius: '14px',
              background: '#f0f9ff',
              border: '1.5px solid #bae6fd',
              minWidth: '58px',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.06)'
            }}
          >
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#0284c7', lineHeight: 1.1 }}>
              {timeLeft.days}
            </span>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#0369a1', textTransform: 'uppercase', marginTop: '2px' }}>
              Hari
            </span>
          </div>

          <span style={{ fontSize: '18px', fontWeight: 800, color: '#38bdf8' }}>:</span>

          {/* Hours */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '8px 12px',
              borderRadius: '14px',
              background: '#f0f9ff',
              border: '1.5px solid #bae6fd',
              minWidth: '58px',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.06)'
            }}
          >
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#0284c7', lineHeight: 1.1 }}>
              {formatNum(timeLeft.hours)}
            </span>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#0369a1', textTransform: 'uppercase', marginTop: '2px' }}>
              Jam
            </span>
          </div>

          <span style={{ fontSize: '18px', fontWeight: 800, color: '#38bdf8' }}>:</span>

          {/* Minutes */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '8px 12px',
              borderRadius: '14px',
              background: '#f0f9ff',
              border: '1.5px solid #bae6fd',
              minWidth: '58px',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.06)'
            }}
          >
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#0284c7', lineHeight: 1.1 }}>
              {formatNum(timeLeft.minutes)}
            </span>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#0369a1', textTransform: 'uppercase', marginTop: '2px' }}>
              Menit
            </span>
          </div>

          <span style={{ fontSize: '18px', fontWeight: 800, color: '#38bdf8' }}>:</span>

          {/* Seconds */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '8px 12px',
              borderRadius: '14px',
              background: '#f0f9ff',
              border: '1.5px solid #bae6fd',
              minWidth: '58px',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.06)'
            }}
          >
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#0284c7', lineHeight: 1.1 }}>
              {formatNum(timeLeft.seconds)}
            </span>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#0369a1', textTransform: 'uppercase', marginTop: '2px' }}>
              Detik
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
