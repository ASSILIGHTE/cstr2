import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, Sparkles, Heart } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../config';
import PhotoModal from './PhotoModal';

export default function MemoriesSection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section 
      ref={containerRef}
      id="memories-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '100px 16px 80px 16px',
        maxWidth: '1100px',
        margin: '0 auto',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Header Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '48px', maxWidth: '600px', paddingTop: '20px' }}
      >
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '999px',
            background: '#e0f2fe',
            color: '#0284c7',
            fontSize: '13px',
            fontWeight: 600,
            marginBottom: '14px',
            border: '1px solid #bae6fd'
          }}
        >
          <Camera style={{ width: '16px', height: '16px', color: '#0284c7' }} />
          <span>Our Special Gallery</span>
        </div>

        <h2 
          className="font-handwriting gradient-text"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 3.8rem)',
            fontWeight: 'bold',
            marginBottom: '12px'
          }}
        >
          {BIRTHDAY_CONFIG.memoriesTitle}
        </h2>

        <p style={{ fontSize: '14px', color: '#0369a1', fontWeight: 500, lineHeight: 1.6 }}>
          Klik foto polaroid untuk memperbesar momen indah yang tak terlupakan 🩵
        </p>
      </motion.div>

      {/* Grid Cards Layout */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          width: '100%',
          marginTop: '10px'
        }}
      >
        {BIRTHDAY_CONFIG.memories.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedPhoto(photo)}
            className="polaroid-card group"
            style={{
              transform: `rotate(${photo.rotation || '0deg'})`,
              background: '#ffffff',
              padding: '16px 16px 24px 16px',
              borderRadius: '16px',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <div 
              style={{
                width: '100%',
                aspectRatio: '4/3',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#e0f2fe',
                marginBottom: '14px',
                position: 'relative'
              }}
            >
              <img
                src={photo.image}
                alt={photo.caption}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="group-hover:scale-108 transition-transform duration-500 ease-out"
              />

              {/* Hover Overlay Badge */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(15, 23, 42, 0.35)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                className="group-hover:opacity-100"
              >
                <span 
                  style={{
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: 600,
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 14px',
                    borderRadius: '999px',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Sparkles style={{ width: '12px', height: '12px', color: '#bae6fd' }} />
                  Perbesar
                </span>
              </div>
            </div>

            {/* Photo Caption */}
            <div style={{ textAlign: 'center' }}>
              <p className="font-handwriting" style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#0c4a6e', marginBottom: '4px' }}>
                "{photo.caption}"
              </p>
              {photo.date && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#0284c7', fontWeight: 600 }}>
                  <Heart style={{ width: '11px', height: '11px', fill: '#0284c7' }} />
                  <span>{photo.date}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
}
