import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../config';

export default function AudioPlayer({ isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.7);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Audio autoplay prevented or error:", err);
          setIsPlaying(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, setIsPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: '16px',
        right: '16px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <audio
        ref={audioRef}
        src={BIRTHDAY_CONFIG.music.url}
        loop
        preload="none"
      />

      <div 
        style={{
          borderRadius: '999px',
          background: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 8px 30px rgba(2, 132, 199, 0.2)',
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        {/* Animated Sound Wave or Music Note */}
        <div 
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: '#e0f2fe',
            color: '#0284c7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          {isPlaying ? (
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '14px' }}>
              <span className="animate-bounce" style={{ width: '3px', height: '100%', background: '#0284c7', borderRadius: '4px', animationDuration: '0.6s' }} />
              <span className="animate-bounce" style={{ width: '3px', height: '60%', background: '#0ea5e9', borderRadius: '4px', animationDuration: '0.9s' }} />
              <span className="animate-bounce" style={{ width: '3px', height: '80%', background: '#38bdf8', borderRadius: '4px', animationDuration: '0.4s' }} />
            </div>
          ) : (
            <Music style={{ width: '16px', height: '16px' }} />
          )}
        </div>

        {/* Music Title Label */}
        <span 
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: '#0c4a6e',
            maxWidth: '110px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {isPlaying ? 'Playing 🎵' : 'Music 🎵'}
        </span>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0284c7'
          }}
        >
          {isPlaying ? (
            <Pause style={{ width: '18px', height: '18px', fill: '#0284c7' }} />
          ) : (
            <Play style={{ width: '18px', height: '18px', fill: '#0284c7', marginLeft: '2px' }} />
          )}
        </button>

        {/* Volume Button */}
        <div 
          style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
          onMouseEnter={() => setShowVolumeSlider(true)}
          onMouseLeave={() => setShowVolumeSlider(false)}
        >
          <button
            onClick={toggleMute}
            aria-label="Toggle mute"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0284c7'
            }}
          >
            {isMuted || volume === 0 ? (
              <VolumeX style={{ width: '18px', height: '18px', color: '#7dd3fc' }} />
            ) : (
              <Volume2 style={{ width: '18px', height: '18px', color: '#0284c7' }} />
            )}
          </button>

          {/* Expanded Volume Slider Dropdown */}
          {showVolumeSlider && (
            <div 
              style={{
                position: 'absolute',
                top: '40px',
                right: '0',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                borderRadius: '999px',
                padding: '8px 12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid #bae6fd'
              }}
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                style={{
                  width: '80px',
                  accentColor: '#0284c7',
                  height: '4px',
                  cursor: 'pointer'
                }}
              />
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#0284c7', width: '28px' }}>
                {Math.round((isMuted ? 0 : volume) * 100)}%
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
