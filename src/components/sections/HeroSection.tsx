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
  const { name, tamilName, role, bioParagraphs, profileImage, socials, resumeUrl } = personalInfo;

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* ============================================================== */}
      {/* 1. AUTHENTIC PORIKKALAM TEMPLATE BACKDROP LAYER               */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Exact Porikkalam reference backdrop image (Temple on left, Cyberpunk City on right) */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105"
          style={{
            backgroundImage: `url('/media/porikkalam_hero.jpg')`,
            filter: 'brightness(0.35) contrast(1.2) saturate(0.9)',
          }}
        />

        {/* Blueprint Grid Lines Overlay */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-25" />

        {/* Deep Midnight Navy & Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-950 via-heritage-950/70 to-heritage-950/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-heritage-950/60 to-heritage-950/95" />

        {/* Subtle Ambient Golden Glow Center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold-500/10 rounded-full blur-[140px]" />
      </div>

      {/* ============================================================== */}
      {/* 2. FLOATING RIGHT-SIDE ACTION DOCK (PORIKKALAM SIGNATURE)      */}
      {/* ============================================================== */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 p-1.5 rounded-2xl bg-heritage-950/80 border border-gold-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)]">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* ============================================================== */}
        {/* 3. TOP PRESENTATION BANNER (PORIKKALAM EXACT HEADER SHAPE)     */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8"
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
        {/* 4. MAIN SPLIT CONTENT: Profile On Left | Porikkalam Text Right */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ============================================================== */}
          {/* LEFT: Portrait in Layered Temple Chariot Frame (Required)       */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Floating Frame Container */}
            <div className="relative animate-float">
              
              {/* Concentric Temple Mandala / Engineering Blueprint Rings */}
              <div className="absolute -inset-8 rounded-full border border-gold-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-4 rounded-full border border-dashed border-gold-400/30 pointer-events-none" />
              
              {/* Outer Golden Aura */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-600 opacity-60 blur-xl" />

              {/* Profile Card / Portrait Container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden bg-heritage-900 border-2 border-gold-400/90 shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                
                {/* Profile Image with subtle golden contrast */}
                <img
                  src={profileImage}
                  alt={name}
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                  }}
                />

                {/* Dark Vignette Bottom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-950 via-heritage-950/25 to-transparent opacity-90" />

                {/* Carved Corner Accents on the frame */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-300 pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-300 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-300 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-300 pointer-events-none" />

                {/* Floating Status Pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-heritage-900/90 backdrop-blur-md border border-gold-500/40 rounded-xl px-3 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11px] font-sans font-medium text-emerald-300 tracking-wider uppercase">
                      Open to Innovation
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-gold-400/90">TAMIL NADU</span>
                </div>
              </div>

              {/* Floating Mini Tech Badges */}
              <div className="absolute -top-3 -right-3 bg-heritage-900/95 border border-gold-500/70 rounded-lg p-2.5 shadow-gold-sm flex items-center gap-2 backdrop-blur-md">
                <Code2 size={16} className="text-gold-400" />
                <span className="text-xs font-mono text-gold-200">Full Stack</span>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-heritage-900/95 border border-gold-500/70 rounded-lg p-2.5 shadow-gold-sm flex items-center gap-2 backdrop-blur-md">
                <Cpu size={16} className="text-gold-400" />
                <span className="text-xs font-mono text-gold-200">AI / ML</span>
              </div>
            </div>

            {/* Social Media Link Icons with Gold Hover Effects */}
            <div className="flex items-center gap-3.5 mt-7">
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


          {/* ============================================================== */}
          {/* RIGHT: Porikkalam 3D Gold Branding, Emblem & Call-To-Actions  */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Architectural Clock Tower / Kalasam Blueprint Emblem */}
            <div className="relative mb-3 flex items-center gap-3">
              <div className="w-12 h-14 relative flex items-center justify-center">
                {/* Concentric Blueprint Compass Circle */}
                <svg className="w-full h-full drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]" viewBox="0 0 48 56" fill="none">
                  <circle cx="24" cy="28" r="22" stroke="rgba(212,175,55,0.4)" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="24" cy="28" r="16" stroke="rgba(212,175,55,0.6)" strokeWidth="0.8" />
                  {/* Temple Finial / Clock Tower motif */}
                  <rect x="18" y="14" width="12" height="26" rx="2" fill="#D4AF37" stroke="#FDE68A" strokeWidth="1" />
                  <circle cx="24" cy="24" r="3.5" fill="#070B14" stroke="#FFF" strokeWidth="0.8" />
                  <path d="M16 40H32L34 46H14L16 40Z" fill="#8C6D23" />
                  <path d="M24 6L28 14H20L24 6Z" fill="#FDE68A" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-[11px] font-bold tracking-[0.25em] text-gold-400 uppercase">
                  HELLO, I'M
                </span>
                <span className="font-tamil text-xs text-gold-antique tracking-wider">
                  வணக்கம், நான்
                </span>
              </div>
            </div>

            {/* 3D Gold Embossed Title: MIDUN D & தமிழ் முத்திரை */}
            <div className="mb-2 w-full">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight uppercase text-gold-3d leading-none">
                {name}
              </h1>

              {/* Iconic Porikkalam Tamil Calligraphy */}
              <div className="flex items-center gap-3 mt-1.5">
                <span className="font-tamil text-3xl sm:text-4xl text-gold-3d font-bold tracking-wider">
                  {tamilName}
                </span>
                <span className="text-gold-500/60 font-serif">•</span>
                <span className="font-tamil text-lg sm:text-xl text-gold-antique/80">
                  பொறியியலாளர்
                </span>
              </div>
            </div>

            {/* Sub-heading in Porikkalam Serifs */}
            <div className="mt-2 mb-1">
              <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold tracking-[0.14em] text-gold-200 uppercase">
                AN ARENA FOR ENGINEERS
              </h2>
              <p className="font-tamil text-base sm:text-lg text-gold-antique font-medium tracking-wide">
                திறன்களின் திடல்
              </p>
            </div>

            {/* Role & Tagline Badge */}
            <p className="font-mono text-xs sm:text-sm text-gold-300/90 tracking-widest uppercase my-2 flex items-center gap-2">
              <Terminal size={14} className="text-gold-400" />
              <span>{role}</span>
            </p>

            {/* Feature Pills: + ENGINEERING | INNOVATION | ENTREPRENEURSHIP + Style */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-900/30 border border-gold-500/30 text-gold-300 font-serif text-[11px] sm:text-xs tracking-widest uppercase my-3 backdrop-blur-sm">
              <span className="text-gold-500 font-bold">✦</span>
              <span>FULL STACK</span>
              <span className="text-gold-500/40">|</span>
              <span>AI INNOVATION</span>
              <span className="text-gold-500/40">|</span>
              <span>PROBLEM SOLVING</span>
              <span className="text-gold-500 font-bold">✦</span>
            </div>

            {/* Professional Summary */}
            <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed font-light mb-8 max-w-xl">
              {bioParagraphs[0]}
            </p>

            {/* Action Buttons: Explore Projects & Resume */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="relative px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-heritage-950 font-serif font-bold text-xs sm:text-sm tracking-[0.18em] uppercase hover:shadow-[0_0_25px_rgba(212,175,55,0.7)] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2.5 group"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowUpRight size={17} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={resumeUrl}
                download
                className="relative px-7 py-3.5 rounded-full bg-heritage-900/90 border border-gold-400/60 text-gold-200 font-serif font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase hover:bg-gold-500/15 hover:border-gold-300 hover:shadow-gold-sm active:scale-95 transition-all flex items-center gap-2.5 backdrop-blur-sm"
              >
                <FileDown size={17} className="text-gold-400" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

          </motion.div>

        </div>

        {/* Bottom Ornamental Symmetrical Divider */}
        <div className="mt-14 max-w-xl mx-auto">
          <TempleArchOrnament />
        </div>

      </div>
    </section>
  );
};
