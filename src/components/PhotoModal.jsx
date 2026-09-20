import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Calendar, Sparkles } from 'lucide-react';

export default function PhotoModal({ photo, onClose }) {
  if (!photo) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-2xl w-full bg-white rounded-3xl p-4 sm:p-6 shadow-2xl z-10 border border-sky-100 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-100 flex items-center justify-center transition-colors shadow-md focus:outline-none border border-sky-200"
            aria-label="Close photo preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Container */}
          <div className="relative w-full max-h-[65vh] rounded-2xl overflow-hidden bg-sky-50 flex items-center justify-center">
            <img
              src={photo.image}
              alt={photo.caption}
              className="max-h-[65vh] w-full object-contain rounded-2xl"
            />
            <Sparkles className="absolute top-3 left-3 text-white/80 w-6 h-6 drop-shadow-md" />
          </div>

          {/* Photo Information */}
          <div className="mt-5 text-center px-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-semibold mb-2 border border-sky-200">
              <Calendar className="w-3.5 h-3.5" />
              <span>{photo.date || "Memory"}</span>
            </div>

            <p className="font-handwriting text-2xl sm:text-3xl text-slate-800 font-bold leading-tight">
              "{photo.caption}"
            </p>

            <div className="mt-4 flex items-center justify-center gap-2 text-sky-500 text-sm">
              <Heart className="w-4 h-4 fill-sky-500 animate-pulse" />
              <span>Captured with love</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
