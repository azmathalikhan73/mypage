import React from 'react';
import { motion } from 'framer-motion';
import { MailOpen, Heart } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';

export default function Page2_Letter({ onNext, onBack }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-4 md:p-6 select-none">
      {/* Soft background glow */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl -z-10 animate-float" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl px-6 md:px-10 py-10 md:py-12 rounded-3xl glass-card border border-white/70 shadow-2xl relative"
      >
        {/* Envelope Top Flap Decor */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center bg-pink-500 text-white p-2.5 rounded-full shadow-md z-10">
          <MailOpen className="w-5 h-5" />
        </div>

        {/* Decorative Borders */}
        <div className="absolute inset-4 border border-pink-200/40 rounded-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
          </motion.div>
          
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800 text-center mb-6 border-b border-pink-100 pb-3 w-full max-w-xs font-semibold">
            {birthdayData.letterTitle}
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full text-left font-serif text-gray-700 space-y-4 md:space-y-5 text-sm md:text-base leading-relaxed md:leading-loose px-2 max-h-[50vh] overflow-y-auto pr-2"
          >
            <motion.p variants={itemVariants} className="font-bold text-gray-900 text-lg">
              {birthdayData.letterGreeting}
            </motion.p>

            {birthdayData.letterParagraphs.map((paragraph, index) => (
              <motion.p key={index} variants={itemVariants} className="text-gray-700 indent-4 md:indent-6">
                {paragraph}
              </motion.p>
            ))}

            <motion.div variants={itemVariants} className="pt-4 text-right">
              <p className="italic text-gray-600 text-xs md:text-sm">{birthdayData.letterClosing}</p>
              <p className="font-script text-3xl md:text-4xl text-rose-600 mt-1 font-bold">
                {birthdayData.letterClosing.includes("❤️") ? "With Love," : birthdayData.letterClosing}
              </p>
            </motion.div>
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
              Read Next →
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
