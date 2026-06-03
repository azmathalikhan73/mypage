import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, RotateCcw, Sparkles } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';
import ImageWithFallback from '../components/ImageWithFallback';
import confetti from 'canvas-confetti';

export default function Page10_FinalSurprise({ onReplay, onBack }) {
  useEffect(() => {
    // Fire a celebration burst on load
    const end = Date.now() + 3 * 1000;
    const colors = ['#f43f5e', '#ec4899', '#fbbf24', '#a855f7'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-4 md:p-6 select-none">
      {/* Background glow and sparkles */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-rose-200/30 to-amber-100/30 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl -z-10 animate-float-slow" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl px-4 md:px-8 py-8 md:py-10 rounded-3xl glass-card border border-white/70 shadow-2xl relative"
      >
        <div className="absolute inset-4 border border-pink-100/50 rounded-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          
          {/* Pulsing Love Header */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gold-gradient font-serif filter drop-shadow-sm flex items-center justify-center gap-1.5 flex-wrap">
              <Heart className="w-8 h-8 md:w-12 md:h-12 fill-rose-500 text-rose-500 animate-pulse" />
              <span>WE LOVE YOU MOM</span>
              <Heart className="w-8 h-8 md:w-12 md:h-12 fill-rose-500 text-rose-500 animate-pulse" />
            </h2>
            <p className="text-gray-500 text-xs md:text-sm mt-2 max-w-md mx-auto italic font-medium">
              "{birthdayData.finalSurprise.message}"
            </p>
          </motion.div>

          {/* Central content - photo & signatures side by side */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch w-full">
            
            {/* Left Column: Final Photo (7 cols) */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="relative p-2 bg-white/60 rounded-3xl shadow border border-pink-100/50">
                <ImageWithFallback 
                  src={birthdayData.finalSurprise.image}
                  alt="Final Surprise Family"
                  containerClassName="aspect-square rounded-2xl bg-pink-50/30 flex items-center justify-center w-full"
                  className="!object-contain hover:scale-103 duration-500"
                  fallbackText="Grand Celebration Portrait"
                />
              </div>
            </div>

            {/* Right Column: Signatures Board (5 cols) */}
            <div className="md:col-span-5 flex flex-col justify-center gap-4">
              <span className="text-[10px] font-bold text-pink-600 bg-pink-50 self-center md:self-start px-2.5 py-1 rounded-full uppercase tracking-wider">
                Family Signature Board ✍️
              </span>
              
              <div className="space-y-4 max-h-[35vh] overflow-y-auto pr-1">
                {birthdayData.finalSurprise.signatures.map((sig, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.2 }}
                    className="p-4 rounded-2xl bg-white/70 border border-pink-100 shadow-sm relative overflow-hidden group hover:border-pink-300 hover:shadow-md transition-all duration-300"
                  >
                    {/* Small corner ribbon decorative overlay */}
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-pink-400 rounded-bl-lg" />
                    
                    <p className="text-xs text-gray-600 italic leading-relaxed mb-2.5">
                      "{sig.message}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-script text-2xl text-pink-600 font-bold">
                        - {sig.name}
                      </span>
                      <span className="text-[9px] text-gray-400 font-medium font-sans border border-gray-200 px-1.5 py-0.5 rounded-md bg-white">
                        {sig.relationship}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full mt-8 pt-6 border-t border-pink-100/60 justify-between">
            <button
              onClick={onBack}
              className="text-sm font-medium text-pink-600 hover:text-pink-700 cursor-pointer active:scale-95 transition"
            >
              ← Back
            </button>

            <motion.button
              onClick={onReplay}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 via-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg shadow-pink-500/10 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 cursor-pointer overflow-hidden group w-full sm:w-auto justify-center"
            >
              <RotateCcw className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-500" />
              <span>Replay the Journey</span>
              <Sparkles className="w-3.5 h-3.5 fill-white text-white" />
            </motion.button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
