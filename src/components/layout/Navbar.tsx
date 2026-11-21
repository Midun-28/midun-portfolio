import React, { useState, useEffect } from 'react';
import { personalInfo, navLinks } from '../../data/portfolioData';
import { Menu, X, FileDown, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-heritage-950/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-[0_4px_25px_rgba(3,5,9,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo: Midun D with Tamil emblem */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group"
          >
            {/* Golden Temple Chariot/Kalasam Emblem */}
            <div className="w-10 h-10 rounded-lg bg-heritage-900 border border-gold-500/50 flex items-center justify-center relative overflow-hidden group-hover:border-gold-400 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
              <span className="font-serif text-lg font-black text-gold-400">M</span>
              <div className="absolute -bottom-1 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-slate-100 group-hover:text-gold-300 transition-colors">
                  MIDUN D
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-gold-antique/70 uppercase">
                ENGINEER • INNOVATOR
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Porikkalam aesthetic with gold dot indicators) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 rounded-md font-sans text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-gold-300 font-semibold'
                      : 'text-slate-300 hover:text-gold-200 hover:bg-gold-500/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Subtle Porikkalam Gold Dot Indicator */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-[0_0_8px_rgba(212,175,55,0.9)] animate-pulse" />
                  )}
                  {/* Active bottom border accent */}
                  {isActive && (
                    <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="p-2 rounded-full text-slate-400 hover:text-gold-300 hover:bg-heritage-800/80 transition-colors border border-transparent hover:border-gold-500/30"
                title="Replay Cinematic Intro"
              >
                <Sparkles size={16} />
              </button>
            )}

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Midun_D_Resume.pdf"
              className="px-4 py-1.5 rounded-full border border-gold-500/40 text-gold-300 hover:text-white hover:border-gold-400 hover:bg-gold-500/10 font-serif text-xs tracking-wider uppercase transition-all flex items-center gap-1.5"
            >
              <FileDown size={14} className="text-gold-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="relative px-5 py-2 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-heritage-950 font-serif font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
            >
              <span>CONNECT</span>
              <ChevronRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="p-2 text-slate-400 hover:text-gold-300"
                title="Replay Intro"
              >
                <Sparkles size={18} />
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-heritage-900 border border-gold-500/30 text-gold-400 hover:text-gold-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-heritage-950/95 backdrop-blur-xl border-b border-gold-500/30 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'bg-gold-500/15 border border-gold-500/40 text-gold-300 font-bold'
                      : 'text-slate-300 hover:bg-heritage-900 hover:text-gold-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400/70" />
                    <span>{link.label}</span>
                  </div>
                  <span className="font-tamil text-xs text-gold-antique/60">{link.tamil}</span>
                </a>
              );
            })}

            <div className="mt-4 pt-4 border-t border-gold-500/20 flex flex-col gap-3">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Midun_D_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gold-400/50 text-gold-300 font-serif text-xs tracking-widest uppercase hover:bg-gold-500/10 transition-colors"
              >
                <FileDown size={16} />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-heritage-950 font-serif font-bold text-xs tracking-widest uppercase shadow-gold-sm"
              >
                <span>GET IN TOUCH</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
