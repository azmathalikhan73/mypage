import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Check } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';

export default function Page4_Awards({ onNext, onBack }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-4 md:p-6 select-none">
      {/* Background soft lighting */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl -z-10 animate-float-slow" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl px-4 md:px-8 py-8 rounded-3xl glass-panel-dark border border-white/60 shadow-2xl relative"
      >
        <div className="text-center mb-8 relative">
          <div className="inline-flex items-center gap-1 bg-amber-100 px-3 py-1 rounded-full text-amber-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Official Recognition</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-800">
            Mom's Special Awards
          </h2>
          <p className="text-gray-500 text-sm mt-1 max-w-md mx-auto">
            Honoring the woman who does it all with infinite grace, wisdom, and love.
          </p>
        </div>

        {/* Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {birthdayData.awards.map((award, index) => {
            const isHovered = hoveredCard === award.id;

            return (
              <motion.div
                key={award.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(award.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative rounded-2xl p-5 border text-center transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHovered 
                    ? 'bg-amber-50/70 border-amber-300 shadow-lg shadow-amber-500/10' 
                    : 'bg-white/50 border-pink-100/80 shadow-sm'
                }`}
              >
                {/* Gold sparkle border when hovered */}
                {isHovered && (
                  <div className="absolute inset-0 border-2 border-amber-400/50 rounded-2xl pointer-events-none animate-pulse" />
                )}

                <div>
                  {/* Icon Frame */}
                  <div className="relative w-14 h-14 mx-auto mb-4 bg-gradient-to-tr from-amber-400 to-amber-200 rounded-full flex items-center justify-center text-2xl shadow-md border-2 border-white animate-wobble">
                    {award.icon}
                    <Star className="absolute -top-1 -right-1 w-4 h-4 text-amber-600 fill-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
                  </div>

                  <h3 className="font-bold text-gray-800 text-sm md:text-base mb-2 font-serif min-h-[40px] flex items-center justify-center">
                    {award.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {award.description}
                  </p>
                </div>

                {/* Score bullets */}
                <div className="border-t border-dashed border-gray-200/60 pt-3 text-left space-y-1.5">
                  {award.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[10px] text-pink-700 font-semibold font-sans">
                      <Check className="w-3 h-3 text-amber-500 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
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
            Open Photo Gallery 1 →
          </button>
        </div>
      </motion.div>
    </div>
  );
}
