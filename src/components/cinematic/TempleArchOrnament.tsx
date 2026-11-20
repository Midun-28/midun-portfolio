import React from 'react';

interface TempleArchOrnamentProps {
  className?: string;
  variant?: 'divider' | 'crest' | 'corner' | 'mandala';
}

/**
 * Traditional South Indian architectural motif component
 * Inspired by Dravidian temple gopuram finials, kalasams, and royal carved torana arches.
 */
export const TempleArchOrnament: React.FC<TempleArchOrnamentProps> = ({
  className = "w-full flex items-center justify-center my-6",
  variant = 'divider'
}) => {
  if (variant === 'crest') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        {/* Sacred Temple Kalasam / Finial silhouette */}
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]">
          <path d="M22 2L24.5 9H19.5L22 2Z" fill="#FDE68A" />
          <path d="M22 8L27 15H17L22 8Z" fill="#D4AF37" />
          <circle cx="22" cy="18" r="4" fill="#F3C64F" />
          {/* Temple Dome / Kalasam base */}
          <path d="M14 24C14 19 30 19 30 24C32 29 34 35 22 40C10 35 12 29 14 24Z" fill="url(#kalasamGrad)" stroke="#C5A059" strokeWidth="1" />
          <path d="M12 40H32L34 45H10L12 40Z" fill="#8C6D23" stroke="#D4AF37" strokeWidth="0.8" />
          <defs>
            <linearGradient id="kalasamGrad" x1="12" y1="20" x2="32" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE68A" />
              <stop offset="0.5" stopColor="#D4AF37" />
              <stop offset="1" stopColor="#8C6D23" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {/* Left ornamental flourish line */}
      <div className="flex items-center gap-1.5 opacity-80 flex-1 max-w-[120px] sm:max-w-[180px]">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold-500/40 to-gold-400"></div>
        <div className="w-1.5 h-1.5 rotate-45 border border-gold-400 bg-gold-600/60"></div>
      </div>

      {/* Center Diamond Cluster (as seen in Porikkalam 2026 header) */}
      <div className="flex items-center gap-1.5 px-1">
        <span className="w-1.5 h-1.5 rotate-45 bg-gold-500/60"></span>
        <div className="relative flex items-center justify-center">
          <span className="w-3.5 h-3.5 rotate-45 bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>
          <span className="absolute w-1.5 h-1.5 rotate-45 bg-heritage-900"></span>
        </div>
        <span className="w-1.5 h-1.5 rotate-45 bg-gold-500/60"></span>
      </div>

      {/* Right ornamental flourish line */}
      <div className="flex items-center gap-1.5 opacity-80 flex-1 max-w-[120px] sm:max-w-[180px]">
        <div className="w-1.5 h-1.5 rotate-45 border border-gold-400 bg-gold-600/60"></div>
        <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-gold-500/40 to-gold-400"></div>
      </div>
    </div>
  );
};
