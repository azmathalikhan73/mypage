import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Calendar } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';
import ImageWithFallback from '../components/ImageWithFallback';

export default function Page6_GalleryPolaroid({ onNext, onBack }) {
  // Rotation angles for the polaroids to make them look hand-placed
  const rotations = ['-rotate-3', 'rotate-2', '-rotate-2', 'rotate-3', '-rotate-1', 'rotate-1'];

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-4 md:p-6 select-none">
      {/* Background decoration */}
      <div className="absolute bottom-1/4 right-1/3 w-84 h-84 bg-purple-100/30 rounded-full blur-3xl -z-10 animate-float" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl px-4 md:px-8 py-8 rounded-3xl glass-card border border-white/70 shadow-2xl relative"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Memory Lanes • Part 2
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-800 mt-2">
            Polaroid Snapshots
          </h2>
          <p className="text-xs text-gray-500 mt-1 italic">
            Moments frozen in time, preserved in love.
          </p>
        </div>

        {/* Polaroids Container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-h-[50vh] overflow-y-auto pr-2 p-2">
          {birthdayData.galleryPolaroid.map((img, idx) => {
            const rotClass = rotations[idx % rotations.length];
            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                className={`bg-white p-4 pb-8 shadow-md border border-gray-150 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${rotClass} group`}
              >
                {/* Polaroid Image Slot */}
                <div className="aspect-square w-full bg-gray-50 overflow-hidden relative border border-gray-100">
                  <ImageWithFallback 
                    src={img.src} 
                    alt={img.caption}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    fallbackText={img.caption}
                  />
                </div>

                {/* Polaroid Text Slot */}
                <div className="mt-4 text-center">
                  <p className="font-script text-xl md:text-2xl text-gray-800 font-semibold truncate leading-none mb-1.5">
                    {img.caption}
                  </p>
                  
                  {img.date && (
                    <div className="inline-flex items-center gap-1 text-[10px] text-gray-400 font-mono">
                      <Calendar className="w-2.5 h-2.5" />
                      <span>{img.date}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

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
            Open Photo Gallery 3 →
          </button>
        </div>
      </motion.div>
    </div>
  );
}
