import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Music, Star, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Page9_Celebration({ onNext, onBack }) {
  const [isBlown, setIsBlown] = useState(false);
  const [balloons, setBalloons] = useState([]);

  const triggerConfetti = () => {
    // 1. Center burst
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#ec4899', '#f43f5e', '#fbbf24', '#a855f7', '#60a5fa']
    });

    // 2. Continuous fireworks
    const duration = 6 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 45 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.4), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.6, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  const handleBlowCandle = () => {
    if (isBlown) return;
    setIsBlown(true);
    triggerConfetti();

    // Spawn 15 colorful balloons floating up
    const balloonColors = ['#f472b6', '#fbbf24', '#c084fc', '#fca5a5', '#93c5fd', '#f43f5e'];
    const newBalloons = Array.from({ length: 18 }).map((_, idx) => ({
      id: idx,
      color: balloonColors[idx % balloonColors.length],
      left: `${Math.random() * 90 + 5}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${Math.random() * 6 + 6}s`,
      size: `${Math.random() * 20 + 35}px`,
    }));
    setBalloons(newBalloons);
  };

  const handleReset = () => {
    setIsBlown(false);
    setBalloons([]);
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-4 md:p-6 select-none overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl -z-10" />

      {/* Floating Balloons when candle is blown */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <style>{`
          @keyframes floatBalloon {
            0% {
              transform: translateY(110vh) rotate(0deg);
              opacity: 0;
            }
            10% { opacity: 0.95; }
            90% { opacity: 0.95; }
            100% {
              transform: translateY(-20vh) rotate(\${Math.random() * 40 - 20}deg);
              opacity: 0;
            }
          }
          .balloon-item {
            animation: floatBalloon var(--b-duration) ease-in-out infinite;
            animation-delay: var(--b-delay);
          }
        `}</style>
        {balloons.map((b) => (
          <div
            key={b.id}
            className="absolute balloon-item flex flex-col items-center"
            style={{
              left: b.left,
              '--b-duration': b.duration,
              '--b-delay': b.delay,
              bottom: '-100px',
            }}
          >
            {/* Balloon Body */}
            <div 
              className="rounded-full relative shadow-md"
              style={{
                backgroundColor: b.color,
                width: b.size,
                height: `calc(${b.size} * 1.2)`,
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              {/* Highlight */}
              <div className="absolute top-2 left-2.5 w-3 h-4 bg-white/35 rounded-full rotate-12" />
            </div>
            {/* Knot */}
            <div 
              className="w-2 h-2 -mt-0.5 border-t-[6px] border-x-[4px] border-x-transparent"
              style={{ borderTopColor: b.color }}
            />
            {/* String */}
            <div className="w-0.5 h-14 bg-gray-300/60" />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl px-6 py-10 rounded-3xl glass-panel-dark border border-white/60 shadow-2xl relative flex flex-col items-center"
      >
        <div className="absolute inset-4 border border-pink-200/30 rounded-2xl pointer-events-none" />

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-pink-100 px-3 py-1 rounded-full text-pink-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 fill-pink-500 text-pink-500 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Time to Celebrate</span>
          </div>
          <h2 className="text-3xl font-bold font-serif text-gray-800">
            Make a Wish! 🎂
          </h2>
          <p className="text-gray-500 text-xs md:text-sm mt-1.5 max-w-sm mx-auto">
            {isBlown 
              ? "Yay! Happy Birthday! May all your wishes come true! 🎉" 
              : "Click the cake or the flame to blow out the candle and make a wish!"}
          </p>
        </div>

        {/* The Interactive Cake */}
        <div 
          onClick={handleBlowCandle}
          className="relative w-64 h-64 flex items-center justify-center cursor-pointer group"
        >
          {/* Ripple glow surrounding the cake when flame is active */}
          {!isBlown && (
            <div className="absolute w-48 h-48 rounded-full bg-amber-300/10 blur-xl animate-pulse group-hover:bg-amber-300/20" />
          )}

          <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-lg">
            {/* Candle Flame and Sparkle */}
            <AnimatePresence>
              {!isBlown && (
                <motion.g
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Outer flame glow */}
                  <circle cx="100" cy="30" r="14" fill="#f59e0b" className="opacity-20 animate-ping" />
                  
                  {/* Outer yellow flame */}
                  <path 
                    d="M100 15 C92 30 100 45 100 45 C100 45 108 30 100 15 Z" 
                    fill="#fbbf24" 
                    className="animate-pulse origin-bottom" 
                  />
                  {/* Inner orange flame */}
                  <path 
                    d="M100 24 C96 32 100 42 100 42 C100 42 104 32 100 24 Z" 
                    fill="#ea580c" 
                  />
                  {/* Inner core */}
                  <path 
                    d="M100 32 C98 36 100 41 100 41 C100 41 102 36 100 32 Z" 
                    fill="#eff6ff" 
                  />
                </motion.g>
              )}
            </AnimatePresence>

            {/* Candle Smoke when blown */}
            {isBlown && (
              <motion.g
                initial={{ opacity: 0, y: 35, x: 100 }}
                animate={{ opacity: [0, 0.7, 0], y: [35, 10, -5], x: [100, 96, 104] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                {/* Thin gray smoke paths */}
                <path d="M 100 35 Q 95 25 102 15 T 98 0" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
              </motion.g>
            )}

            {/* Candle Stick */}
            <rect x="97.5" y="45" width="5" height="25" fill="#f43f5e" rx="1.5" />
            {/* White spirals on candle */}
            <path d="M 97.5 50 L 102.5 53 M 97.5 58 L 102.5 61 M 97.5 66 L 102.5 69" stroke="#ffffff" strokeWidth="1.5" />

            {/* Cake Layer Top */}
            <rect x="55" y="70" width="90" height="40" fill="#fca5a5" rx="6" />
            <rect x="55" y="70" width="90" height="8" fill="#f87171" rx="2" />
            {/* Cream drops */}
            <path d="M 55 78 Q 60 84 65 78 T 75 78 T 85 78 T 95 78 T 105 78 T 115 78 T 125 78 T 135 78 T 145 78" fill="#ffffff" />
            
            {/* Strawberries on top */}
            <circle cx="70" cy="66" r="4.5" fill="#e11d48" />
            <circle cx="100" cy="66" r="4.5" fill="#e11d48" />
            <circle cx="130" cy="66" r="4.5" fill="#e11d48" />

            {/* Cake Layer Bottom */}
            <rect x="35" y="110" width="130" height="50" fill="#f9a8d4" rx="8" />
            <rect x="35" y="110" width="130" height="8" fill="#f472b6" rx="2" />
            {/* Cream details bottom */}
            <path d="M 35 118 Q 41 125 48 118 T 60 118 T 72 118 T 84 118 T 96 118 T 108 118 T 120 118 T 132 118 T 144 118 T 156 118 T 165 118" fill="#ffffff" />
            {/* Colorful sprinkles */}
            <rect x="50" y="130" width="4" height="2" fill="#fbbf24" transform="rotate(30, 50, 130)" />
            <rect x="75" y="142" width="4" height="2" fill="#3b82f6" transform="rotate(-15, 75, 142)" />
            <rect x="95" y="132" width="4" height="2" fill="#ef4444" transform="rotate(45, 95, 132)" />
            <rect x="120" y="140" width="4" height="2" fill="#10b981" transform="rotate(-40, 120, 140)" />
            <rect x="145" y="128" width="4" height="2" fill="#a855f7" transform="rotate(20, 145, 128)" />

            {/* Plate Base */}
            <rect x="20" y="160" width="160" height="8" fill="#e2e8f0" rx="4" />
            <rect x="35" y="168" width="130" height="4" fill="#cbd5e1" rx="2" />
          </svg>

          {/* Sparkles or instruction */}
          {!isBlown && (
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute bottom-2 bg-pink-600 text-white text-[10px] px-3 py-1 rounded-full shadow font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>Click to Blow Candle 🕯️</span>
            </motion.div>
          )}
        </div>

        {/* Reset / Relight Button */}
        {isBlown && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100 border border-pink-200 px-3.5 py-1.5 rounded-full cursor-pointer transition shadow-sm active:scale-95 mb-4"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Relight Candle</span>
          </motion.button>
        )}

        {/* Navigation Controls */}
        <div className="flex items-center justify-between w-full mt-6 pt-6 border-t border-pink-100/60">
          <button
            onClick={onBack}
            className="text-sm font-medium text-pink-600 hover:text-pink-700 cursor-pointer active:scale-95 transition"
          >
            ← Back
          </button>
          <button
            onClick={onNext}
            disabled={!isBlown}
            className={`px-6 py-2.5 font-medium text-sm rounded-full shadow-md transition-all duration-300 ${
              isBlown
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white cursor-pointer hover:shadow-lg active:scale-95'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            title={!isBlown ? "Blow the candle first to unlock the final surprise!" : "Proceed to final page"}
          >
            Final Surprise 🎉 →
          </button>
        </div>
      </motion.div>
    </div>
  );
}
