import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Compass } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';

export default function Page1_Welcome({ onNext }) {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-6 text-center select-none">
      {/* Soft background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-pink-300/30 to-purple-300/30 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl px-6 py-6 md:py-10 rounded-3xl glass-panel-dark relative border border-white/60 shadow-2xl flex flex-col items-center"
      >
        {/* Decorative corner flowers */}
        <span className="absolute top-4 left-4 text-2xl opacity-60">🌸</span>
        <span className="absolute top-4 right-4 text-2xl opacity-60">🌸</span>
        <span className="absolute bottom-4 left-4 text-2xl opacity-60">🌸</span>
        <span className="absolute bottom-4 right-4 text-2xl opacity-60">🌸</span>

        {/* Happy Birthday Heading */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-2 mb-2"
        >
          <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
          <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">A Special Dedication</span>
          <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 md:mb-4"
        >
          <span className="block text-gray-800">Happy Birthday</span>
          <span className="text-gold-gradient font-serif mt-1 block">{birthdayData.motherName} ❤️</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xs md:text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-4 md:mb-6"
        >
          {birthdayData.welcomeSubtitle}
        </motion.p>

        {/* Animated SVG Birthday Cake */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 100 }}
          className="relative w-32 h-32 md:w-36 md:h-36 mb-6 md:mb-8 flex items-center justify-center animate-wave cursor-pointer"
        >
          {/* Cake Glow */}
          <div className="absolute inset-0 bg-pink-300/20 rounded-full blur-2xl -z-10" />
          
          <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-md">
            {/* Candle Sparkle */}
            <circle cx="100" cy="20" r="4" fill="#fbbf24" className="animate-ping" />
            {/* Candle Flame */}
            <path d="M100 15 Q95 30 100 35 Q105 30 100 15 Z" fill="#f59e0b" className="animate-pulse" />
            <path d="M100 20 Q98 27 100 30 Q102 27 100 20 Z" fill="#ef4444" />
            {/* Candle Stick */}
            <rect x="97" y="35" width="6" height="25" fill="#f43f5e" rx="2" />
            <rect x="97" y="38" width="6" height="5" fill="#ffffff" />
            <rect x="97" y="48" width="6" height="5" fill="#ffffff" />
            
            {/* Cake Top Layer */}
            <rect x="50" y="60" width="100" height="40" fill="#f87171" rx="8" />
            {/* Cream details top */}
            <path d="M50 70 Q60 65 70 70 T90 70 T110 70 T130 70 T150 70" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <circle cx="65" cy="80" r="3" fill="#fff" />
            <circle cx="90" cy="80" r="3" fill="#fff" />
            <circle cx="115" cy="80" r="3" fill="#fff" />
            <circle cx="135" cy="80" r="3" fill="#fff" />

            {/* Cake Bottom Layer */}
            <rect x="30" y="100" width="140" height="50" fill="#fca5a5" rx="10" />
            {/* Chocolate drips */}
            <path d="M30 110 Q40 100 50 115 T70 115 T90 115 T110 115 T130 115 T150 115 T170 110" fill="none" stroke="#b45309" strokeWidth="5" strokeLinecap="round" />
            
            {/* Base Stand */}
            <rect x="20" y="150" width="160" height="10" fill="#cbd5e1" rx="4" />
            
            {/* Hearts floating out of cake */}
            <g className="animate-bounce">
              <path d="M45 50 Q45 42 50 42 T55 50 Q55 58 45 64 Q35 58 45 50 Z" fill="#e11d48" transform="scale(0.5) translate(20, 20)" />
              <path d="M280 50 Q280 42 285 42 T290 50 Q290 58 280 64 Q270 58 280 50 Z" fill="#e11d48" transform="scale(0.5) translate(80, 20)" />
            </g>
          </svg>
        </motion.div>

        {/* Start Button */}
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white font-semibold rounded-full shadow-lg shadow-pink-500/20 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 cursor-pointer overflow-hidden group"
        >
          <span className="absolute inset-0 bg-white/10 group-hover:scale-105 transition-transform duration-500" />
          <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
          <span>Start the Journey</span>
          <Heart className="w-4 h-4 fill-white text-white animate-pulse" />
        </motion.button>
      </motion.div>
    </div>
  );
}
