import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import { TempleArchOrnament } from '../cinematic/TempleArchOrnament';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  FileDown, 
  ArrowUpRight, 
  Terminal, 
  User, 
  BookmarkCheck,
  Compass
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { name, role, profileImage, socials, resumeUrl } = personalInfo;

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* ============================================================== */}
      {/* 1. AUTHENTIC CLEAN PORIKKALAM TEMPLATE BACKDROP LAYER          */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Crystal Clear Artwork: Temple on left, Cyberpunk City on right, open center */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-100"
          style={{
            backgroundImage: `url('/media/porikkalam_clean_bg.jpg')`,
            filter: 'brightness(0.92) contrast(1.08) saturate(1.05)',
          }}
        />

        {/* Soft Focused Center Vignette: Keeps Temple & Cyber City 100% Bright & Clear */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(5, 8, 17, 0.72) 0%, rgba(5, 8, 17, 0.38) 45%, rgba(5, 8, 17, 0.1) 70%, transparent 100%)'
          }}
        />

        {/* Ambient Top Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-b from-gold-400/20 via-gold-600/5 to-transparent blur-3xl pointer-events-none" />
        
        {/* Subtle Edge Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-heritage-950 to-transparent pointer-events-none" />
      </div>

      {/* ============================================================== */}
      {/* 2. FLOATING RIGHT-SIDE ACTION DOCK (PORIKKALAM SIGNATURE)      */}
      {/* ============================================================== */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 p-1.5 rounded-2xl bg-heritage-950/85 border border-gold-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)]">
        <a
          href="#about"
          className="p-2.5 rounded-xl text-gold-400 hover:text-white hover:bg-gold-500/20 transition-all group relative"
          title="About Midun"
        >
          <User size={18} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-heritage-900 border border-gold-500/30 text-[10px] font-mono text-gold-200 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            About Developer
          </span>
        </a>
        <a
          href="#projects"
          className="p-2.5 rounded-xl text-gold-400 hover:text-white hover:bg-gold-500/20 transition-all group relative"
          title="Flagship Projects"
        >
          <Compass size={18} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-heritage-900 border border-gold-500/30 text-[10px] font-mono text-gold-200 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Flagship Projects
          </span>
        </a>
        <a
          href="#contact"
          className="p-2.5 rounded-xl text-gold-400 hover:text-white hover:bg-gold-500/20 transition-all group relative"
          title="Direct Contact"
        >
          <BookmarkCheck size={18} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-heritage-900 border border-gold-500/30 text-[10px] font-mono text-gold-200 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Connect
          </span>
        </a>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* ============================================================== */}
        {/* 3. MIDUN D - CLEAN TRANSPARENT CUTOUT PORTRAIT (NO CIRCLE/RINGS) */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative my-2 sm:my-4 flex justify-center"
        >
          {/* Subtle Golden Ambient Backlight behind Midun */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Clean Cutout Image Standing Naturally */}
          <div className="relative">
            <img
              src={profileImage}
              alt={name}
              className="h-72 sm:h-88 md:h-[380px] lg:h-[420px] w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] filter contrast-105 brightness-100 transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </motion.div>


        {/* ============================================================== */}
        {/* 4. NAME, TITLE, ACTION BUTTONS & SOCIALS                       */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col items-center max-w-3xl -mt-1 sm:-mt-2"
        >
          {/* Greeting */}
          <div className="flex items-center gap-2 mb-1">
            <span className="font-serif text-xs font-bold tracking-[0.25em] text-gold-400 uppercase">
              HELLO, I'M
            </span>
          </div>

          {/* 3D Gold Main Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight uppercase text-gold-3d leading-none my-1">
            {name}
          </h1>

          {/* Role & Tagline Badge */}
          <p className="font-mono text-xs sm:text-sm text-gold-300 tracking-widest uppercase my-2 flex items-center justify-center gap-2">
            <Terminal size={14} className="text-gold-400" />
            <span>{role}</span>
          </p>

          {/* Feature Pills: + ENGINEERING | INNOVATION | ENTREPRENEURSHIP + Style */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-900/35 border border-gold-500/35 text-gold-300 font-serif text-[11px] sm:text-xs tracking-widest uppercase my-3 backdrop-blur-sm">
            <span className="text-gold-500 font-bold">✦</span>
            <span>FULL STACK</span>
            <span className="text-gold-500/40">|</span>
            <span>AI INNOVATION</span>
            <span className="text-gold-500/40">|</span>
            <span>PROBLEM SOLVING</span>
            <span className="text-gold-500 font-bold">✦</span>
          </div>

          {/* ============================================================== */}
          {/* 5. CENTERED ACTION & CONTACT INFORMATION                       */}
          {/* ============================================================== */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full mb-6 mt-2">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-heritage-950 font-serif font-bold text-xs sm:text-sm tracking-[0.18em] uppercase hover:shadow-[0_0_25px_rgba(212,175,55,0.7)] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 group"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowUpRight size={17} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={resumeUrl}
              download
              className="px-7 py-3.5 rounded-full bg-heritage-900/90 border border-gold-400/60 text-gold-200 font-serif font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase hover:bg-gold-500/15 hover:border-gold-300 hover:shadow-gold-sm active:scale-95 transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <FileDown size={17} className="text-gold-400" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-full bg-heritage-950/80 border border-gold-500/40 text-gold-300 font-serif text-xs sm:text-sm tracking-[0.18em] uppercase hover:border-gold-400 hover:text-white transition-all flex items-center gap-2"
            >
              <Mail size={16} />
              <span>CONTACT ME</span>
            </a>
          </div>

          {/* Centered Social Media Link Icons */}
          <div className="flex items-center justify-center gap-3 mt-1">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-heritage-900/90 border border-gold-500/40 flex items-center justify-center text-slate-300 hover:text-gold-300 hover:border-gold-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-heritage-900/90 border border-gold-500/40 flex items-center justify-center text-slate-300 hover:text-gold-300 hover:border-gold-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={socials.email}
              className="w-10 h-10 rounded-full bg-heritage-900/90 border border-gold-500/40 flex items-center justify-center text-slate-300 hover:text-gold-300 hover:border-gold-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1"
              aria-label="Email Me"
            >
              <Mail size={18} />
            </a>
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-heritage-900/90 border border-gold-500/40 flex items-center justify-center text-slate-300 hover:text-gold-300 hover:border-gold-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1"
                aria-label="Twitter Profile"
              >
                <Twitter size={18} />
              </a>
            )}
          </div>
        </motion.div>

        {/* Bottom Ornamental Symmetrical Divider */}
        <div className="mt-12 max-w-md mx-auto">
          <TempleArchOrnament />
        </div>

      </div>
    </section>
  );
};
