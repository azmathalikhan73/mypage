import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Disc } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const audioRef = useRef(null);

  useEffect(() => {
    // Try to load the audio
    // We try to load local public music first, then fall back to a soothing piano track
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    // We check if local birthday.mp3 is available, else we use fallback piano instrumental URL
    // To check local we just set the src. We will set it to '/music/birthday.mp3' first,
    // and if it fails, we fall back to a royalty-free soft piano track
    audioRef.current.src = '/music/birthday.mp3';
    
    const handleFallback = () => {
      if (audioRef.current) {
        // Soft instrumental piano track from a reliable free audio URL
        audioRef.current.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3';
        // Play if it was playing
        if (isPlaying) {
          audioRef.current.play().catch(err => console.log("Audio play failed: ", err));
        }
      }
    };

    audioRef.current.addEventListener('error', handleFallback);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('error', handleFallback);
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.log("Audio playback was blocked by browser or failed. Retrying with fallback...");
          // If blocked, try to load fallback
          audioRef.current.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3';
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(e => console.log("Fallback also failed, browser interaction required: ", e));
        });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 group">
      <button 
        onClick={togglePlay}
        className="relative flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 text-white hover:bg-pink-600 active:scale-95 transition-all shadow-md overflow-hidden"
        title={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? (
          <Disc className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
        ) : (
          <Music className="w-5 h-5" />
        )}
      </button>

      <div className="flex items-center gap-2 max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 ease-in-out">
        <button
          onClick={() => setVolume(v => v === 0 ? 0.4 : 0)}
          className="text-pink-600 hover:text-pink-700 transition"
        >
          {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-16 h-1 bg-pink-200 rounded-lg appearance-none cursor-pointer accent-pink-500 outline-none"
        />
        <span className="text-[10px] text-pink-700 font-medium font-mono">
          {isPlaying ? "Playing" : "Muted"}
        </span>
      </div>
      
      {/* Decorative tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-pink-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
        Background Music
      </span>
    </div>
  );
}
