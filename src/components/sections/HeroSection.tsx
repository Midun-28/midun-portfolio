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
  Sparkles, 
  Terminal, 
  Cpu, 
  Code2 
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { name, tamilName, role, bioParagraphs, profileImage, socials, resumeUrl } = personalInfo;

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Background Architectural & Blueprint Elements (Heritage x Cyber Innovation) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Blueprint Grid Background */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-25" />

        {/* Ambient Golden Radial Light Spots */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Stylized Temple Gopuram Architectural Vector Silhouette */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[750px] opacity-[0.06] pointer-events-none hidden xl:block">
          <svg viewBox="0 0 500 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-gold-400">
            {/* Architectural step pyramid levels */}
            <path d="M250 50L260 90H240L250 50Z" strokeWidth="2" />
            <path d="M230 90H270V140H230V90Z" strokeWidth="1.5" />
            <path d="M210 140H290V200H210V140Z" strokeWidth="1.5" />
            <path d="M190 200H310V270H190V200Z" strokeWidth="1.5" />
            <path d="M170 270H330V350H170V270Z" strokeWidth="1.5" />
            <path d="M150 350H350V440H150V350Z" strokeWidth="1.5" />
            <path d="M130 440H370V540H130V440Z" strokeWidth="1.5" />
            <path d="M110 540H390V650H110V540Z" strokeWidth="1.5" />
            {/* Center Sanctum Gateway */}
            <path d="M220 650V560C220 545 280 545 280 560V650" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Split Layout: Left Profile & Socials | Right Text & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: Circular/Portrait Profile Image in Royal Gold Frame */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Floating Container Animation */}
            <div className="relative animate-float">
              
              {/* Decorative Concentric Temple Mandalas / Chariot Wheel Rings */}
              <div className="absolute -inset-6 rounded-full border border-gold-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-3 rounded-full border border-dashed border-gold-400/30 pointer-events-none" />
              
              {/* Outer Golden Aura Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-600 opacity-50 blur-xl group-hover:opacity-80 transition-opacity" />

              {/* Profile Card / Portrait Container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden bg-heritage-900 border-2 border-gold-400/80 shadow-[0_0_35px_rgba(212,175,55,0.3)]">
                
                {/* Profile Image with subtle sepia/gold tint matching heritage palette */}
                <img
                  src={profileImage}
                  alt={name}
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Graceful fallback to aesthetic temple developer avatar
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop";
                  }}
                />

                {/* Dark Vignette Overlay on the bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-950 via-heritage-950/20 to-transparent opacity-90" />

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
                  <span className="font-mono text-[10px] text-gold-400/80">TAMIL NADU</span>
                </div>
              </div>

              {/* Floating Mini Badges around the frame */}
              <div className="absolute -top-3 -right-4 bg-heritage-900/90 border border-gold-500/60 rounded-lg p-2.5 shadow-gold-sm flex items-center gap-2 backdrop-blur-md">
                <Code2 size={16} className="text-gold-400" />
                <span className="text-xs font-mono text-gold-200">Full Stack</span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-heritage-900/90 border border-gold-500/60 rounded-lg p-2.5 shadow-gold-sm flex items-center gap-2 backdrop-blur-md">
                <Cpu size={16} className="text-gold-400" />
                <span className="text-xs font-mono text-gold-200">AI / ML</span>
              </div>
            </div>

            {/* Social Media Link Icons with Gold Hover Effects */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-heritage-900 border border-gold-500/30 flex items-center justify-center text-slate-300 hover:text-gold-300 hover:border-gold-400 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-heritage-900 border border-gold-500/30 flex items-center justify-center text-slate-300 hover:text-gold-300 hover:border-gold-400 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={socials.email}
                className="w-10 h-10 rounded-full bg-heritage-900 border border-gold-500/30 flex items-center justify-center text-slate-300 hover:text-gold-300 hover:border-gold-400 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1"
                aria-label="Email Me"
              >
                <Mail size={18} />
              </a>
              {socials.twitter && (
                <a
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-heritage-900 border border-gold-500/30 flex items-center justify-center text-slate-300 hover:text-gold-300 hover:border-gold-400 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={18} />
                </a>
              )}
            </div>
          </motion.div>


          {/* ============================================================== */}
          {/* RIGHT COLUMN: Cinematic Typography, Royal Title, Bio & CTAs */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Traditional Greeting Tagline */}
            <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-gold-900/20 border border-gold-500/30 mb-4 backdrop-blur-sm">
              <Sparkles size={14} className="text-gold-400 animate-pulse" />
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-gold-300">
                HELLO, I'M
              </span>
              <span className="text-gold-500/50">•</span>
              <span className="font-tamil text-xs text-gold-400 font-semibold">
                வணக்கம்
              </span>
            </div>

            {/* Regal Name Heading in Porikkalam 3D Gold Font */}
            <div className="relative mb-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight uppercase text-gold-3d leading-none">
                {name}
              </h1>
              {tamilName && (
                <p className="font-tamil text-xl sm:text-2xl text-gold-antique/70 font-bold mt-1 tracking-wider">
                  {tamilName}
                </p>
              )}
            </div>

            {/* Porikkalam-inspired Gold Motif Divider */}
            <div className="w-full max-w-sm my-3">
              <TempleArchOrnament className="my-2" />
            </div>

            {/* Title / Role */}
            <div className="flex items-center gap-2 font-mono text-sm sm:text-base text-gold-300 tracking-wider mb-5">
              <Terminal size={16} className="text-gold-500" />
              <span>{role}</span>
            </div>

            {/* Professional Summary / Introduction */}
            <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed font-light mb-8 max-w-2xl">
              {bioParagraphs[0]}
            </p>

            {/* Action Buttons: Resume & Explore Projects */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Explore Projects Button (Primary Gold) */}
              <a
                href="#projects"
                className="relative px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-heritage-950 font-serif font-bold text-xs sm:text-sm tracking-[0.16em] uppercase hover:shadow-[0_0_25px_rgba(212,175,55,0.7)] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2.5 group"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowUpRight size={17} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Download Resume Button (Gilded Outline) */}
              <a
                href={resumeUrl}
                download
                className="relative px-7 py-3.5 rounded-full bg-heritage-900/80 border border-gold-400/60 text-gold-200 font-serif font-semibold text-xs sm:text-sm tracking-[0.16em] uppercase hover:bg-gold-500/15 hover:border-gold-300 hover:shadow-gold-sm active:scale-95 transition-all flex items-center gap-2.5 backdrop-blur-sm"
              >
                <FileDown size={17} className="text-gold-400" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Quick Metrics Bar / Highlights */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-8 mt-8 border-t border-gold-500/20 w-full max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-gold-3d">03+</p>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-0.5">Core Projects</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-gold-3d">10+</p>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-0.5">Tech Learned</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-gold-3d">100%</p>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-0.5">Dedicated Mindset</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
