import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { HeritageCard } from '../common/HeritageCard';
import { Landmark, MapPin, Feather, Sparkles } from 'lucide-react';

export const MyRootsSection: React.FC = () => {
  const { nativeRoots } = personalInfo;

  const culturalCaptions = [
    { title: "Chettinad Heritage Mansion (Karaikudi)", tamil: "காரைக்குடி செட்டிநாடு மாளிகை" },
    { title: "Veera Vilaiyattu – Jallikattu Heritage", tamil: "ஜல்லிக்கட்டு • தமிழ் வீர விளையாட்டு" },
    { title: "Traditional Vazhaielai Virundhu", tamil: "பாரம்பரிய வாழை இலை விருந்து" },
  ];

  return (
    <section id="roots" className="relative py-28 bg-heritage-950 overflow-hidden border-t border-gold-500/10">
      
      {/* Background Cultural Visual / Uploadable Video Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {nativeRoots.videoUrl ? (
          <video
            src={nativeRoots.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter brightness-[0.22] contrast-125"
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center filter brightness-[0.20] contrast-120"
            style={{ backgroundImage: `url(${nativeRoots.fallbackImage})` }}
          />
        )}

        {/* Cinematic Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-950 via-heritage-950/80 to-heritage-950" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-heritage-950/70 to-heritage-950" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="CULTURAL HERITAGE & ORIGINS"
          badgeTamil="பண்பாட்டு வேர்கள்"
          title={nativeRoots.title}
          titleTamil={nativeRoots.tamilTitle}
          subtitle="Grounded by the soil of Tamil Nadu—where timeless Dravidian architecture meets modern computational engineering."
        />

        {/* Central Proverb Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center my-8 p-6 sm:p-8 rounded-2xl bg-heritage-900/60 border border-gold-500/40 backdrop-blur-md shadow-gold-sm max-w-3xl mx-auto"
        >
          <Feather size={24} className="text-gold-400 mx-auto mb-3" />
          <h3 className="font-tamil text-xl sm:text-2xl md:text-3xl font-bold text-gold-3d mb-2">
            "{nativeRoots.quoteTamil}"
          </h3>
          <p className="font-serif italic text-gold-200/90 text-sm sm:text-base font-light">
            "{nativeRoots.quote}"
          </p>
        </motion.div>

        {/* Heritage Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
          
          {/* Narrative Text (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <HeritageCard className="p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold-500/20">
                <div className="p-2.5 rounded-lg bg-heritage-800 border border-gold-500/40 text-gold-400">
                  <Landmark size={22} />
                </div>
                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-100">
                    The Architecture of Endurance
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-gold-antique">
                    <MapPin size={13} />
                    <span>{nativeRoots.locationName}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 font-sans text-sm sm:text-base font-light leading-relaxed">
                {nativeRoots.heritageText.map((para, idx) => (
                  <p key={idx} className="relative pl-3 border-l-2 border-gold-500/30">
                    {para}
                  </p>
                ))}
              </div>

              {/* Traditional Seal / Footnote */}
              <div className="mt-8 pt-4 border-t border-gold-500/20 flex items-center justify-between">
                <span className="font-tamil text-xs text-gold-antique/80">
                  தமிழ் கலாச்சாரம் • பண்பாடு • தொழில் திறன்
                </span>
                <span className="font-mono text-[11px] text-gold-400/80">
                  EST. TAMIL ROOTS
                </span>
              </div>
            </HeritageCard>
          </div>

          {/* Visual Gallery / Cultural Impressions (Right 5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {nativeRoots.galleryImages && nativeRoots.galleryImages.map((imgUrl, gIdx) => (
              <motion.div
                key={gIdx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: gIdx * 0.15 }}
                className="relative rounded-xl overflow-hidden border border-gold-500/30 group h-44 sm:h-52 shadow-lg hover:border-gold-400/60 transition-colors"
              >
                <img
                  src={imgUrl}
                  alt={culturalCaptions[gIdx]?.title || `Cultural impression ${gIdx + 1}`}
                  className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-950 via-heritage-950/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-gold-400 shrink-0" />
                    <div>
                      <p className="text-xs font-serif text-gold-200 tracking-wider font-semibold">
                        {culturalCaptions[gIdx]?.title || "Cultural Heritage"}
                      </p>
                      <p className="font-tamil text-[11px] text-gold-antique">
                        {culturalCaptions[gIdx]?.tamil}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
