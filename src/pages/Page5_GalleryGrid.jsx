import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';
import ImageWithFallback from '../components/ImageWithFallback';

export default function Page5_GalleryGrid({ onNext, onBack }) {
  // Take only the first 3 images for Page 5
  const displayImages = birthdayData.galleryGrid.slice(0, 3);

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-4 md:p-6 select-none">
      {/* Background soft design */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl -z-10 animate-float" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl px-4 md:px-8 py-8 rounded-3xl glass-card border border-white/70 shadow-2xl relative"
      >
        {/* Gallery Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Memory Lanes
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-800 mt-2">
            Beautiful Moments
          </h2>
          <p className="text-xs text-gray-500 mt-1 italic">
            A few sweet snapshots we hold close to our hearts.
          </p>
        </div>

        {/* 3-Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-1"
        >
          <AnimatePresence mode="popLayout">
            {displayImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl bg-white/40 p-2 border border-pink-100/40 hover:border-pink-300 hover:shadow-md transition-all duration-300 aspect-[4/3] sm:aspect-square"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-pink-50/30">
                  <ImageWithFallback 
                    src={img.src} 
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    fallbackText={img.caption}
                  />
                </div>
                
                {/* Micro Caption Banner */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-pink-100/40 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[10px] md:text-xs font-semibold text-gray-700 truncate text-center">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between w-full mt-8 pt-6 border-t border-pink-100/60">
          <button
            onClick={onBack}
            className="text-sm font-medium text-pink-600 hover:text-pink-700 cursor-pointer active:scale-95 transition"
          >
            ← Back
          </button>
          <button
            onClick={onNext}
            className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium text-sm rounded-full shadow-md shadow-pink-500/10 cursor-pointer hover:shadow-lg active:scale-95 transition-all"
          >
            Open Mom's Portrait →
          </button>
        </div>
      </motion.div>
    </div>
  );
}
