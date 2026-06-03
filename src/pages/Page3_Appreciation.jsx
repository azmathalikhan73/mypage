import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldAlert } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';
import ImageWithFallback from '../components/ImageWithFallback';

export default function Page3_Appreciation({ onNext, onBack }) {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-4 md:p-6 select-none">
      {/* Background glow blobs */}
      <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-amber-200/20 to-pink-200/20 rounded-full blur-3xl -z-10 animate-float-slow" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl px-4 md:px-8 py-8 md:py-10 rounded-3xl glass-card border border-white/70 shadow-2xl relative"
      >
        <div className="absolute inset-4 border border-pink-100/50 rounded-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Section (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left space-y-4 md:space-y-6 Order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-500">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-pink-600">Family Gratitude</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold font-serif text-gray-800 leading-tight">
              {birthdayData.familyAppreciation.title}
            </h2>

            <p className="text-pink-600 font-medium text-sm md:text-base italic">
              "{birthdayData.familyAppreciation.subtitle}"
            </p>

            <blockquote className="text-sm md:text-base text-gray-600 leading-relaxed border-l-2 lg:border-l-4 border-pink-400 pl-4 py-1 italic font-light">
              {birthdayData.familyAppreciation.quote}
            </blockquote>
          </div>

          {/* Photo Section (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-7 w-full order-1 lg:order-2"
          >
            <div className="relative p-2 bg-white/60 rounded-3xl shadow-lg border border-pink-100 hover:shadow-xl transition-shadow duration-300">
              {/* Photo Frame Frame effect */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-amber-400/90 rounded-full flex items-center justify-center text-white text-xs font-bold rotate-12 shadow z-10">
                Mom ❤️
              </div>
              
              <ImageWithFallback 
                src={birthdayData.familyAppreciation.image}
                alt="Family Photo"
                containerClassName="aspect-[4/3] rounded-2xl w-full"
                className="hover:scale-103 duration-500"
                fallbackText="Family Portrait"
              />
            </div>
          </motion.div>
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
            See Mom's Awards →
          </button>
        </div>
      </motion.div>
    </div>
  );
}
