import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';
import ImageWithFallback from '../components/ImageWithFallback';

export default function Page7_GalleryCarousel({ onNext, onBack }) {
  // Use the first image from the carousel array as the main mom portrait
  const momPortrait = birthdayData.galleryCarousel[0] || {
    src: '/images/image11.jpg',
    caption: 'My Mom'
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-4 md:p-6 select-none">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl -z-10 animate-float" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl px-6 py-8 rounded-3xl glass-card border border-white/70 shadow-2xl relative flex flex-col items-center"
      >
        {/* Header Section */}
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Mom's Portrait
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-800 mt-3 flex items-center justify-center gap-2">
            <span>My Mom</span>
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
          </h2>
          <p className="text-xs text-gray-500 mt-1.5 italic">
            "Your beautiful smile makes everything better."
          </p>
        </div>

        {/* Dedicated Portrait Frame */}
        <div className="w-full max-w-sm p-3 bg-white/60 rounded-3xl shadow-md border border-pink-100/40">
          <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-sm">
            <ImageWithFallback 
              src={momPortrait.src} 
              alt="My Mom"
              className="w-full h-full object-cover"
              fallbackText="My Mom"
            />
          </div>
        </div>

        {/* Micro Caption */}
        <p className="text-center mt-4 text-xs font-medium text-gray-600 italic px-4 max-w-xs">
          {momPortrait.caption}
        </p>

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
            Read Our Thanks →
          </button>
        </div>
      </motion.div>
    </div>
  );
}
