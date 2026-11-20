import React from 'react';
import { TempleArchOrnament } from '../cinematic/TempleArchOrnament';

interface SectionHeadingProps {
  badge?: string;
  badgeTamil?: string;
  title: string;
  titleTamil?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeTamil,
  title,
  titleTamil,
  subtitle,
  align = 'center',
  className = ""
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {/* Top Badge with subtle gold outline */}
      {(badge || badgeTamil) && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-900/20 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-sans tracking-widest uppercase mb-3 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.15)]`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
          <span>{badge}</span>
          {badgeTamil && (
            <>
              <span className="text-gold-500/40">•</span>
              <span className="font-tamil text-gold-400 font-medium">{badgeTamil}</span>
            </>
          )}
        </div>
      )}

      {/* Main Title in Regal Serif */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-wider text-slate-100 uppercase">
        <span className="text-gold-3d">{title}</span>
      </h2>

      {/* Tamil Calligraphy Subtitle */}
      {titleTamil && (
        <p className="font-tamil text-gold-antique/80 text-sm sm:text-base md:text-lg mt-1 tracking-wide">
          {titleTamil}
        </p>
      )}

      {/* Symmetrical Traditional Temple Divider */}
      <TempleArchOrnament className={`my-4 ${isCenter ? 'mx-auto' : ''}`} />

      {/* Descriptive subtitle text */}
      {subtitle && (
        <p className={`text-slate-400 font-sans text-sm sm:text-base max-w-2xl font-light leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
