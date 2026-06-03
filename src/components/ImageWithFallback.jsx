import React, { useState } from 'react';
import { Heart, Image as ImageIcon } from 'lucide-react';

export default function ImageWithFallback({ src, alt, className = '', containerClassName = '', fallbackText }) {
  const [error, setError] = useState(false);
  const fileName = src.split('/').pop();

  if (error || !src) {
    return (
      <div 
        className={`relative flex flex-col items-center justify-center min-h-[250px] w-full rounded-2xl glass-card border border-dashed border-pink-300 p-6 overflow-hidden text-center group transition-all duration-500 hover:border-pink-400 hover:shadow-lg ${containerClassName}`}
      >
        {/* Animated fluid water blob background for the placeholder */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/50 via-purple-50/30 to-amber-50/40 -z-10 animate-wobble" />
        
        {/* Hover decorative elements */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-pink-200/40 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200/40 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
        
        <div className="relative mb-3 flex items-center justify-center">
          <ImageIcon className="w-10 h-10 text-pink-400 animate-pulse" />
          <Heart className="absolute -top-1 -right-1 w-4 h-4 text-rose-500 animate-bounce" fill="currentColor" />
        </div>
        
        <p className="font-semibold text-pink-700 text-sm md:text-base">
          {fallbackText || "Memory Photo"}
        </p>
        
        <code className="mt-2 text-xs bg-white/70 px-2.5 py-1 rounded-md text-pink-500 font-mono shadow-sm border border-pink-100">
          /public/images/{fileName}
        </code>
        
        <p className="mt-2.5 text-xs text-pink-600/80 max-w-[200px] leading-relaxed">
          Place your image in the folder to display it here!
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 hover:scale-108 ${className}`}
        onError={() => setError(true)}
        loading="lazy"
      />
    </div>
  );
}
