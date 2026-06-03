import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';

export default function Page8_ThankYou({ onNext, onBack }) {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-4 md:p-6 select-none">
      {/* Dynamic background lights */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-pink-300/20 to-amber-200/20 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-purple-300/20 to-pink-200/20 rounded-full blur-3xl -z-10 animate-float-slow" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl px-6 md:px-12 py-10 md:py-14 rounded-3xl glass-panel-dark border border-white/60 shadow-2xl relative text-center"
      >
        <div className="absolute inset-4 border border-pink-200/30 rounded-2xl pointer-events-none" />

        {/* Top Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6"
        >
          <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
          <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-amber-500 animate-bounce" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold font-serif text-gray-800 tracking-tight mb-6"
        >
          {birthdayData.thankYouMessage.title}
        </motion.h2>

        {/* Content Paragraphs */}
        <div className="space-y-6 max-w-xl mx-auto mb-10 text-gray-600 text-sm md:text-lg leading-relaxed font-serif">
          {birthdayData.thankYouMessage.paragraphs.map((para, idx) => (
            <motion.p
              key={idx}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + idx * 0.25, duration: 0.8 }}
              className={idx === 1 ? "font-medium text-pink-600 italic" : "text-gray-700"}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Large Decorative Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2 }}
          className="font-script text-4xl md:text-5xl text-rose-600 mb-2 font-bold"
        >
          Forever grateful
        </motion.p>

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
            className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold text-sm rounded-full shadow-lg shadow-rose-500/10 cursor-pointer hover:shadow-xl active:scale-95 transition-all"
          >
            Let's Celebrate! 🎂
          </button>
        </div>
      </motion.div>
    </div>
  );
}
