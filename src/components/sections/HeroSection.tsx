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
  Cpu, 
  Code2, 
  User, 
  BookmarkCheck,
  Compass
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { name, tamilName, role, bioParagraphs, profileImage, socials, resumeUrl, location } = personalInfo;

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-24 flex items-center justify-center overflow-hidden">
      
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
        
        {/* Subtle Edge Transitions */}
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
        {/* 3. TOP PRESENTATION BANNER (PORIKKALAM EXACT HEADER SHAPE)     */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
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


        {/* ============================================================== */}
        {/* 4. CENTERED PROFILE IMAGE IN ORNATE GOLDEN CHARIOT WHEEL FRAME */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative my-4"
        >
          {/* Floating Animation Wrapper */}
          <div className="relative animate-float flex flex-col items-center">
            
            {/* Concentric Rotating Mandala Rings */}
            <div className="absolute -inset-6 rounded-full border border-gold-500/25 animate-spin-slow pointer-events-none" />
            <div className="absolute -inset-3 rounded-full border border-dashed border-gold-400/35 pointer-events-none" />
            
            {/* Outer Golden Aura Glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-600 opacity-60 blur-lg" />

            {/* Profile Avatar Frame (Centered Circular/Rounded) */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-heritage-900 border-2 border-gold-400/90 shadow-[0_0_35px_rgba(212,175,55,0.4)]">
              <img
                src={profileImage}
                alt={name}
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-transform duration-700 hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-950/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Status Pill Attached Below Image */}
            <div className="mt-3 bg-heritage-900/90 backdrop-blur-md border border-gold-500/40 rounded-full px-3.5 py-1 flex items-center gap-2 shadow-gold-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-sans font-medium text-emerald-300 tracking-wider uppercase">
                Open to Opportunities
              </span>
              <span className="text-gold-500/40">•</span>
              <span className="font-mono text-[10px] text-gold-300">{location}</span>
            </div>

            {/* Floating Mini Tech Badges around the frame */}
            <div className="hidden sm:flex absolute -left-12 top-1/2 -translate-y-1/2 bg-heritage-900/95 border border-gold-500/60 rounded-xl px-2.5 py-1.5 shadow-gold-sm items-center gap-1.5 backdrop-blur-md">
              <Code2 size={14} className="text-gold-400" />
              <span className="text-[11px] font-mono text-gold-200">Full Stack</span>
            </div>

            <div className="hidden sm:flex absolute -right-12 top-1/2 -translate-y-1/2 bg-heritage-900/95 border border-gold-500/60 rounded-xl px-2.5 py-1.5 shadow-gold-sm items-center gap-1.5 backdrop-blur-md">
              <Cpu size={14} className="text-gold-400" />
              <span className="text-[11px] font-mono text-gold-200">AI / ML</span>
            </div>
          </div>
        </motion.div>


        {/* ============================================================== */}
        {/* 5. 3D GOLD EMBOSSED BRANDING (EXACT PORIKKALAM STYLE)          */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="flex flex-col items-center mt-2 max-w-3xl"
        >
          {/* Greeting */}
          <div className="flex items-center gap-2 mb-1">
            <span className="font-serif text-[11px] sm:text-xs font-bold tracking-[0.25em] text-gold-400 uppercase">
              HELLO, I'M
            </span>
            <span className="text-gold-500/50">•</span>
            <span className="font-tamil text-xs text-gold-antique tracking-wider">
              வணக்கம், நான்
            </span>
          </div>

          {/* 3D Gold Main Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight uppercase text-gold-3d leading-none my-1">
            {name}
          </h1>

          {/* Iconic Porikkalam 3D Gold Tamil Lettering */}
          <div className="flex items-center justify-center gap-3 my-1">
            <span className="font-tamil text-3xl sm:text-4xl md:text-5xl text-gold-3d font-bold tracking-wider">
              {tamilName}
            </span>
            <span className="text-gold-500/60 font-serif text-xl">•</span>
            <span className="font-tamil text-lg sm:text-2xl text-gold-antique font-semibold">
              பொறியியலாளர்
            </span>
          </div>

          {/* Sub-heading in Porikkalam Serifs */}
          <div className="my-1">
            <h2 className="text-lg sm:text-2xl font-serif font-bold tracking-[0.16em] text-gold-200 uppercase">
              AN ARENA FOR ENGINEERS
            </h2>
            <p className="font-tamil text-sm sm:text-base text-gold-antique/90 font-medium tracking-wide">
              திறன்களின் திடல்
            </p>
          </div>

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

          {/* Professional Introduction Summary */}
          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed font-light mb-6 max-w-xl text-center">
            {bioParagraphs[0]}
          </p>

          {/* ============================================================== */}
          {/* 6. CENTERED ACTION & CONTACT INFORMATION                       */}
          {/* ============================================================== */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full mb-6">
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
