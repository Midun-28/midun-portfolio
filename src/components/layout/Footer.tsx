import React from 'react';
import { personalInfo, navLinks } from '../../data/portfolioData';
import { TempleArchOrnament } from '../cinematic/TempleArchOrnament';
import { ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-heritage-950 border-t border-gold-500/20 pt-16 pb-12 overflow-hidden">
      
      {/* Background blueprint subtle line */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Ornament Crest */}
        <TempleArchOrnament variant="crest" className="mb-4" />

        {/* Brand & Tamil Calligraphy */}
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-gold-3d uppercase">
            {personalInfo.name}
          </h3>
          <p className="font-tamil text-sm text-gold-antique mt-1 tracking-wider">
            {personalInfo.tamilName} • பொறியியல் & செயற்கை நுண்ணறிவு
          </p>
          <p className="text-xs font-mono text-slate-400 mt-2 tracking-widest uppercase">
            {personalInfo.role}
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-xs font-sans tracking-wider uppercase text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-gold-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Traditional Heritage Symmetrical Divider */}
        <TempleArchOrnament className="my-8 max-w-md mx-auto" />

        {/* Bottom Attribution & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gold-500/10 text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} Midun D. Inspired by Porikkalam & Tamil Dravidian Heritage.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold-antique/70">
              <Sparkles size={13} className="text-gold-400" />
              <span>Built with Craft & Code</span>
            </span>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-heritage-900 border border-gold-500/30 text-gold-400 hover:text-gold-200 hover:border-gold-400 transition-all"
              title="Return to sanctum top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
