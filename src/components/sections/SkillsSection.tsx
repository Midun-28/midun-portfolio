import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { HeritageCard } from '../common/HeritageCard';
import { Code, Layout, Sparkles, Wrench, CheckCircle2, ChevronRight } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number | null>(null);

  const toggleCategory = (idx: number) => {
    setSelectedCategoryIndex(prev => prev === idx ? null : idx);
  };

  // Category Icon mapper
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming":
        return <Code size={20} className="text-gold-400" />;
      case "Web Development":
        return <Layout size={20} className="text-gold-400" />;
      case "AI & Emerging Tech":
        return <Sparkles size={20} className="text-gold-400" />;
      case "Tools & Infrastructure":
        return <Wrench size={20} className="text-gold-400" />;
      default:
        return <Code size={20} className="text-gold-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-heritage-900/60 border-t border-gold-500/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="TECHNICAL REPERTOIRE"
          badgeTamil="தொழில்நுட்பத் திறன்கள்"
          title="WEAPONS OF CREATION"
          titleTamil="கற்றறிந்த மொழிகள் • கருவிகள்"
          subtitle="Ground-level proficiency in verified modern languages, robust web frameworks, emerging AI concepts, and version control."
        />

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((categoryGroup, idx) => {
            const isSelected = selectedCategoryIndex === idx;

            return (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <HeritageCard
                  className={`p-6 sm:p-8 h-full flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                    isSelected ? 'border-gold-400 shadow-gold-md' : ''
                  }`}
                  onClick={() => toggleCategory(idx)}
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-5 pb-4 border-b border-gold-500/20">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-heritage-800 border border-gold-500/40 shadow-inner-gold">
                          {getCategoryIcon(categoryGroup.category)}
                        </div>
                        <div>
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
                            <span>{categoryGroup.category}</span>
                          </h3>
                          {categoryGroup.tamilCategoryName && (
                            <p className="font-tamil text-xs text-gold-antique">
                              {categoryGroup.tamilCategoryName}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Count Badge */}
                      <span className="font-mono text-xs px-2.5 py-1 rounded bg-heritage-950/80 border border-gold-500/30 text-gold-300">
                        {categoryGroup.skills.length} Tech
                      </span>
                    </div>

                    {/* Category Description */}
                    <p className="text-xs sm:text-sm text-slate-400 mb-6 font-light">
                      {categoryGroup.description}
                    </p>

                    {/* Skill Cards Grid */}
                    <div className="grid grid-cols-1 gap-3">
                      {categoryGroup.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group/skill relative p-3 rounded-lg bg-heritage-950/70 border border-gold-500/20 hover:border-gold-400/50 hover:bg-heritage-800/80 transition-all flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-gold-400 group-hover/skill:scale-110 transition-transform" />
                            <div>
                              <p className="font-mono text-sm font-semibold text-slate-200 group-hover/skill:text-gold-200 transition-colors">
                                {skill.name}
                              </p>
                              {skill.experienceNote && (
                                <p className="text-[11px] text-slate-400 font-sans font-light">
                                  {skill.experienceNote}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Proficiency Level Badge */}
                          <div className="flex items-center gap-1.5 shrink-0 pl-2">
                            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-gold-950/50 border border-gold-500/30 text-gold-300">
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer hint */}
                  <div className="mt-6 pt-3 border-t border-gold-500/10 flex items-center justify-between text-[11px] font-mono text-gold-antique/60">
                    <span>VERIFIED HANDS-ON</span>
                    <span className="flex items-center gap-1">
                      <span>INSPECTION READY</span>
                      <ChevronRight size={12} />
                    </span>
                  </div>
                </HeritageCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
