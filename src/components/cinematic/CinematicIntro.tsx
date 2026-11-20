import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import { GoldenParticlesCanvas } from './GoldenParticlesCanvas';
import { TempleArchOrnament } from './TempleArchOrnament';
import { Sparkles, ArrowRight, EyeOff, Shield } from 'lucide-react';

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
        {/* Background Layer: Video or High-Res Dravidian Temple Visual */}
        <div className="absolute inset-0">
          {introMedia.videoUrl ? (
            <video
              src={introMedia.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              className={`w-full h-full object-cover object-center filter brightness-50 contrast-125 transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-70' : 'opacity-0'
              }`}
            />
          ) : null}

          {/* High-Resolution Heritage Temple Backdrop Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{
              backgroundImage: `url(${introMedia.fallbackPoster})`,
              filter: 'brightness(0.32) contrast(1.15) saturate(0.85)',
            }}
          />

          {/* Dark Cinematic Vignette & Royal Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-heritage-950 via-heritage-900/80 to-heritage-950/90" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-heritage-950/60 to-heritage-950/95" />
          
          {/* Cybernetic Blueprint Grid Line Overlay (Digital Innovation) */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-30" />
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
          {/* Kalasam Heritage Crest */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TempleArchOrnament variant="crest" className="mb-2" />
          </motion.div>

          {/* Top Traditional Proverb / Welcome Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex items-center gap-2.5 text-xs sm:text-sm font-sans tracking-[0.25em] text-gold-400 uppercase mb-3"
          >
            <Shield size={13} className="text-gold-500" />
            <span>{introMedia.welcomeSubtitle}</span>
            <span className="text-gold-500/50">•</span>
            <span className="font-tamil text-gold-300 font-medium">{introMedia.welcomeTamilGreeting}</span>
          </motion.div>

          {/* Main Royal Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="my-3"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-black tracking-wider uppercase text-gold-3d leading-none">
              {name}
            </h1>
            {tamilName && (
              <p className="font-tamil text-2xl sm:text-3xl text-gold-antique/80 mt-2 tracking-widest font-bold">
                {tamilName}
              </p>
            )}
          </motion.div>

          {/* Traditional Symmetrical Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="w-full max-w-md my-4"
          >
            <TempleArchOrnament />
          </motion.div>

          {/* Subtitle / Role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl font-sans text-slate-300 max-w-xl font-light tracking-wide leading-relaxed mb-8"
          >
            Tamil Heritage <span className="text-gold-400 font-serif font-bold">×</span> Digital Innovation
            <br />
            <span className="text-xs sm:text-sm text-gold-antique/70 font-mono tracking-wider">
              FULL STACK DEVELOPER | AI ENTHUSIAST
            </span>
          </motion.p>

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
