import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { HeritageCard } from '../common/HeritageCard';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Trophy, 
  Calendar, 
  CheckCircle2, 
  Compass 
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Milestones', tamil: 'அனைத்தும்' },
    { id: 'achievement', label: 'Achievements & Projects', tamil: 'சாதனைகள்' },
    { id: 'workshop', label: 'Workshops & Events', tamil: 'பயிற்சிகள்' },
    { id: 'certification', label: 'Certifications', tamil: 'சான்றிதழ்கள்' },
    { id: 'education', label: 'Education', tamil: 'கல்வி' },
  ];

  const filteredItems = filter === 'all'
    ? timelineData
    : timelineData.filter(item => item.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'education':
        return <GraduationCap size={18} className="text-gold-400" />;
      case 'achievement':
        return <Trophy size={18} className="text-gold-400" />;
      case 'workshop':
        return <Compass size={18} className="text-gold-400" />;
      case 'certification':
        return <Award size={18} className="text-gold-400" />;
      default:
        return <Briefcase size={18} className="text-gold-400" />;
    }
  };

  return (
    <section id="experience" className="relative py-24 bg-heritage-900/40 border-t border-gold-500/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="JOURNEY & MILESTONES"
          badgeTamil="அனுபவம் • அடைவுகள்"
          title="TIMELINE OF PROGRESS"
          titleTamil="கல்வி • பயிற்சி • தொழில்நுட்பப் பதிவுகள்"
          subtitle="A transparent record of educational foundations, technical symposiums, workshops, and development milestones."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full font-serif text-xs tracking-wider uppercase transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gold-500 text-heritage-950 font-bold shadow-gold-sm'
                  : 'bg-heritage-900 border border-gold-500/25 text-slate-300 hover:text-gold-200 hover:border-gold-400'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Symmetrical Central / Left Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-gold-500/30 space-y-10">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Golden Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-heritage-950 border-2 border-gold-400 flex items-center justify-center shadow-gold-sm">
                <span className="w-2 h-2 rounded-full bg-gold-400" />
              </div>

              {/* Timeline Card */}
              <HeritageCard className="p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-heritage-950 border border-gold-500/30">
                      {getCategoryIcon(item.category)}
                    </span>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-slate-100 uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gold-antique font-medium">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.highlight && (
                      <span className="px-2.5 py-1 rounded bg-gold-900/30 border border-gold-500/30 text-gold-300 font-mono text-[11px] uppercase tracking-wider">
                        {item.highlight}
                      </span>
                    )}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-heritage-950 border border-gold-500/20 text-slate-400 font-mono text-xs">
                      <Calendar size={13} className="text-gold-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-4 pt-3 border-t border-gold-500/10">
                  {item.description.map((desc, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
                      <CheckCircle2 size={15} className="text-gold-400 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>
              </HeritageCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
