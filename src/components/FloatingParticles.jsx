import React, { useEffect, useState } from 'react';

export default function FloatingParticles({ count = 25 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const types = ['heart', 'petal', 'sparkle'];
    const emojis = {
      heart: ['❤️', '💖', '💝', '💕'],
      petal: ['🌸', '🌹', '🌷'],
      sparkle: ['✨', '⭐']
    };

    const newParticles = Array.from({ length: count }).map((_, idx) => {
      const type = types[Math.floor(Math.random() * types.length)];
      const emojiList = emojis[type];
      const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];
      
      return {
        id: idx,
        emoji,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 20 + 12}px`,
        delay: `${Math.random() * 12}s`,
        duration: `${Math.random() * 15 + 10}s`,
        horizontalShift: `${Math.random() * 60 - 30}px`,
        opacity: Math.random() * 0.4 + 0.3,
      };
    });

    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic Keyframes injected style block to handle random horizontal movement smoothly */}
      <style>{`
        @keyframes floatUpParticles {
          0% {
            transform: translateY(105vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--p-opacity);
          }
          90% {
            opacity: var(--p-opacity);
          }
          100% {
            transform: translateY(-10vh) translateX(var(--p-shift)) rotate(360deg);
            opacity: 0;
          }
        }
        .floating-particle-item {
          animation: floatUpParticles var(--p-duration) linear infinite;
          animation-delay: var(--p-delay);
          opacity: 0;
        }
      `}</style>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute floating-particle-item select-none"
          style={{
            left: p.left,
            fontSize: p.size,
            '--p-delay': p.delay,
            '--p-duration': p.duration,
            '--p-shift': p.horizontalShift,
            '--p-opacity': p.opacity,
            bottom: '-50px',
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
