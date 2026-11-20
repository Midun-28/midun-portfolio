import React from 'react';

interface HeritageCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  withCorners?: boolean;
  onClick?: () => void;
}

export const HeritageCard: React.FC<HeritageCardProps> = ({
  children,
  className = "",
  glowOnHover = true,
  withCorners = true,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-xl bg-heritage-900/70 border border-gold-500/25 backdrop-blur-md transition-all duration-300 group ${
        glowOnHover
          ? 'hover:border-gold-400/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]'
          : ''
      } ${className}`}
    >
      {/* Decorative Traditional Corner Accents */}
      {withCorners && (
        <>
          {/* Top-Left Corner */}
          <div className="absolute -top-[1px] -left-[1px] w-3.5 h-3.5 border-t-2 border-l-2 border-gold-400/80 pointer-events-none rounded-tl"></div>
          {/* Top-Right Corner */}
          <div className="absolute -top-[1px] -right-[1px] w-3.5 h-3.5 border-t-2 border-r-2 border-gold-400/80 pointer-events-none rounded-tr"></div>
          {/* Bottom-Left Corner */}
          <div className="absolute -bottom-[1px] -left-[1px] w-3.5 h-3.5 border-b-2 border-l-2 border-gold-400/80 pointer-events-none rounded-bl"></div>
          {/* Bottom-Right Corner */}
          <div className="absolute -bottom-[1px] -right-[1px] w-3.5 h-3.5 border-b-2 border-r-2 border-gold-400/80 pointer-events-none rounded-br"></div>
        </>
      )}

      {/* Subtle interior highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold-500/[0.03] to-transparent rounded-xl pointer-events-none"></div>

      {children}
    </div>
  );
};
