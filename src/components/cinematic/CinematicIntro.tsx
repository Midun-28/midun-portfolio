import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import { GoldenParticlesCanvas } from './GoldenParticlesCanvas';
import { TempleArchOrnament } from './TempleArchOrnament';
import { Sparkles, ArrowRight, EyeOff } from 'lucide-react';

interface CinematicIntroProps {
  onEnter: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onEnter }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { introMedia, name, tamilName } = personalInfo;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-heritage-950"
      >
        {/* Background Layer: Clear High-Resolution Dravidian Temple x Cyber City Visual */}
        <div className="absolute inset-0">
          {introMedia.videoUrl ? (
            <video
              src={introMedia.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              className={`w-full h-full object-cover object-center filter brightness-90 contrast-115 transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-80' : 'opacity-0'
              }`}
            />
          ) : null}

          {/* Crystal Clear Heritage Temple & Cyber City Artwork */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{
              backgroundImage: `url('/media/porikkalam_clean_bg.jpg')`,
              filter: 'brightness(0.95) contrast(1.08) saturate(1.05)',
            }}
          />

          {/* Soft Centered Focus Vignette - Leaves Temple on Left and Cyber City on Right 100% Crystal Clear */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 50%, rgba(5, 8, 17, 0.72) 0%, rgba(5, 8, 17, 0.4) 45%, rgba(5, 8, 17, 0.1) 70%, transparent 100%)'
            }}
          />
          
          {/* Subtle Top & Bottom Cinematic Edge Bars */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-heritage-950/80 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-heritage-950/80 to-transparent pointer-events-none" />
        </div>

        {/* Floating Golden Particles & Embers */}
        <GoldenParticlesCanvas density={60} />

        {/* Ambient Top Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-gold-400/15 via-gold-600/5 to-transparent blur-3xl pointer-events-none" />

        {/* Skip Intro Button in Top-Right */}
        <button
          onClick={onEnter}
          className="absolute top-6 right-6 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-heritage-900/70 border border-gold-500/30 text-gold-300/80 hover:text-gold-200 hover:border-gold-400 text-xs tracking-widest uppercase transition-all backdrop-blur-md group"
          title="Skip straight to portfolio"
        >
          <EyeOff size={14} className="group-hover:scale-110 transition-transform" />
          <span>Skip Intro</span>
        </button>

        {/* Central Gateway Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          
          {/* Top Presentation Lines (Porikkalam Style) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-4"
          >
            <p className="text-[11px] sm:text-xs font-serif tracking-[0.25em] text-slate-300 uppercase">
              TAMIL HERITAGE × DIGITAL INNOVATION
            </p>
            <p className="text-[10px] sm:text-[11px] font-serif tracking-[0.2em] text-gold-antique/80 uppercase my-0.5">
              AND
            </p>
            <p className="text-[11px] sm:text-xs font-serif tracking-[0.25em] text-slate-300 uppercase">
              FULL STACK ENGINEERING DISCIPLINE
            </p>

            {/* Symmetrical — PRESENTS — Divider */}
            <div className="flex items-center justify-center gap-3 my-2 opacity-90 max-w-xs mx-auto">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-500/40 to-gold-400"></div>
              <span className="font-serif text-[10px] sm:text-xs tracking-[0.3em] text-gold-300 uppercase font-semibold">
                PRESENTS
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-500/40 to-gold-400"></div>
            </div>
          </motion.div>

          {/* Clock Tower / Sanctum Blueprint Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="my-1"
          >
            <div className="w-12 h-14 relative flex items-center justify-center mx-auto">
              <svg className="w-full h-full drop-shadow-[0_0_15px_rgba(212,175,55,0.7)]" viewBox="0 0 48 56" fill="none">
                <circle cx="24" cy="28" r="22" stroke="rgba(212,175,55,0.4)" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="24" cy="28" r="16" stroke="rgba(212,175,55,0.6)" strokeWidth="0.8" />
                <rect x="18" y="14" width="12" height="26" rx="2" fill="#D4AF37" stroke="#FDE68A" strokeWidth="1" />
                <circle cx="24" cy="24" r="3.5" fill="#070B14" stroke="#FFF" strokeWidth="0.8" />
                <path d="M16 40H32L34 46H14L16 40Z" fill="#8C6D23" />
                <path d="M24 6L28 14H20L24 6Z" fill="#FDE68A" />
              </svg>
            </div>
          </motion.div>

          {/* Main Royal Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.45, ease: "easeOut" }}
            className="my-2"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-black tracking-wider uppercase text-gold-3d leading-none">
              {name}
            </h1>
            {tamilName && (
              <p className="font-tamil text-2xl sm:text-4xl text-gold-3d mt-2 tracking-widest font-bold">
                {tamilName}
              </p>
            )}
          </motion.div>

          {/* Arena Subtitle in Porikkalam Serifs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="my-1"
          >
            <h2 className="text-base sm:text-xl font-serif font-bold tracking-[0.2em] text-gold-200 uppercase">
              AN ARENA FOR ENGINEERS
            </h2>
            <p className="font-tamil text-sm sm:text-base text-gold-antique font-medium tracking-wide">
              திறன்களின் திடல்
            </p>
          </motion.div>

          {/* Traditional Symmetrical Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="w-full max-w-md my-3"
          >
            <TempleArchOrnament />
          </motion.div>

          {/* Feature Badges Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-900/40 border border-gold-500/40 text-gold-300 font-serif text-[11px] sm:text-xs tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <span className="text-gold-500 font-bold">✦</span>
            <span>ENGINEERING</span>
            <span className="text-gold-500/40">|</span>
            <span>INNOVATION</span>
            <span className="text-gold-500/40">|</span>
            <span>ARTIFICIAL INTELLIGENCE</span>
            <span className="text-gold-500 font-bold">✦</span>
          </motion.div>

          {/* ENTER PORTFOLIO Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative group"
          >
            {/* Pulsing golden aura background */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse-slow" />

            <button
              onClick={onEnter}
              className="relative flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-heritage-900 border-2 border-gold-400 text-gold-200 font-serif tracking-[0.18em] text-sm sm:text-base font-bold uppercase transition-all duration-300 group-hover:bg-gold-500 group-hover:text-heritage-950 group-hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] group-active:scale-95"
            >
              <Sparkles size={18} className="text-gold-400 group-hover:text-heritage-950 transition-colors" />
              <span>ENTER PORTFOLIO</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-12 text-xs font-mono text-slate-500 tracking-widest uppercase"
          >
            Crafted with Dravidian Aesthetics & Modern Code
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
