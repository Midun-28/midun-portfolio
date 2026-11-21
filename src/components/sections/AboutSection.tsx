import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { HeritageCard } from '../common/HeritageCard';
import { GraduationCap, Compass, BrainCircuit, Target, Sparkles, Code } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { bioParagraphs } = personalInfo;

  const editorialPillars = [
    {
      icon: <GraduationCap size={22} className="text-gold-400" />,
      title: "Foundational Education",
      tamil: "கல்வி அடித்தளம்",
      description: "Pursuing B.E. Computer Science Engineering at Dr. N.G.P Institute of Technology, Coimbatore (CGPA: 7.7), establishing a rigorous grounding in algorithms, systems design, and software engineering."
    },
    {
      icon: <Compass size={22} className="text-gold-400" />,
      title: "Development Journey",
      tamil: "மென்பொருள் பயணம்",
      description: "Trained in Java Full Stack at Live Stream Technologies, certified in Python, Django, and Cloud Computing. Selected in the Top 40 teams at MSME Hackathon 2025."
    },
    {
      icon: <BrainCircuit size={22} className="text-gold-400" />,
      title: "Full Stack & AI Interests",
      tamil: "செயற்கை நுண்ணறிவு ஆர்வம்",
      description: "Enthusiastic about uniting robust frontends with practical Generative AI capabilities, automating repetitive manual processes, and deploying modern cloud databases."
    },
    {
      icon: <Target size={22} className="text-gold-400" />,
      title: "Problem-Solving Mindset",
      tamil: "சிக்கல் தீர்க்கும் பார்வை",
      description: "Inspired by the generational engineering of Dravidian heritage: building structures that are fundamentally sound, durable, modular, and cleanly documented."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-heritage-950/80 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Tamil Subtitle */}
        <SectionHeading
          badge="ABOUT THE DEVELOPER"
          badgeTamil="என்னைப் பற்றி"
          title="ENGINEERING WITH PURPOSE"
          titleTamil="மரபும் நவீனமும் இணைந்த மென்பொருள் பயணம்"
          subtitle="A harmonious blend of cultural discipline, architectural precision, and cutting-edge software engineering."
        />

        {/* Editorial Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story Narrative Card (Left 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex"
          >
            <HeritageCard className="p-8 sm:p-10 flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold-500/20">
                  <span className="p-2.5 rounded-lg bg-gold-900/40 border border-gold-500/40 text-gold-400">
                    <Code size={20} />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100">
                      The Craft Behind The Code
                    </h3>
                    <p className="font-tamil text-xs text-gold-antique">
                      நேர்த்தியான குறியீட்டு கலை
                    </p>
                  </div>
                </div>

                <div className="space-y-5 text-slate-300 font-sans text-sm sm:text-base leading-relaxed font-light">
                  {bioParagraphs.map((paragraph, index) => (
                    <p key={index} className="relative pl-4 border-l-2 border-gold-500/30">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Quote / Guiding Philosophy */}
              <div className="mt-8 pt-6 border-t border-gold-500/20 bg-heritage-950/40 -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-xl flex items-start gap-4">
                <Sparkles size={24} className="text-gold-400 shrink-0 mt-1" />
                <div>
                  <p className="font-serif italic text-gold-200 text-sm sm:text-base">
                    "True engineering is timeless. Just as stone carvings communicate across centuries, clean code must communicate clarity across generations."
                  </p>
                  <p className="font-mono text-xs text-gold-antique/70 mt-2 tracking-widest uppercase">
                    — Midun D's Development Philosophy
                  </p>
                </div>
              </div>
            </HeritageCard>
          </motion.div>

          {/* Pillars & Aspirations (Right 5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {editorialPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <HeritageCard className="p-5 h-full flex flex-col justify-center">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-heritage-800 border border-gold-500/30 shrink-0">
                      {pillar.icon}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <h4 className="font-serif font-bold text-slate-100 text-sm sm:text-base">
                          {pillar.title}
                        </h4>
                        <span className="font-tamil text-[11px] text-gold-antique/70">
                          {pillar.tamil}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mt-1 font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </HeritageCard>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
