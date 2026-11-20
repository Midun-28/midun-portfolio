import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { SectionHeading } from '../common/SectionHeading';
import { HeritageCard } from '../common/HeritageCard';
import { ProjectModal } from './ProjectModal';
import { 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Play 
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'AI / ML', 'Web Innovation'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 bg-heritage-950 border-t border-gold-500/10">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading (Inspired directly by Porikkalam FLAGSHIP EVENT aesthetic) */}
        <SectionHeading
          badge="PORTFOLIO CENTERPIECE"
          badgeTamil="முதன்மைத் திட்டங்கள்"
          title="FEATURED INNOVATIONS"
          titleTamil="களப்பணித் திட்டங்கள் • தொழில்நுட்பப் படைப்புகள்"
          subtitle="Engineered with modern full-stack architectures and AI intelligence to address concrete community and workflow needs."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full font-serif text-xs tracking-widest uppercase transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-heritage-950 font-bold shadow-gold-sm scale-105'
                  : 'bg-heritage-900/80 border border-gold-500/30 text-slate-300 hover:text-gold-200 hover:border-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cinematic Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex"
            >
              <HeritageCard
                className="flex flex-col justify-between overflow-hidden group/card w-full h-full cursor-pointer"
              >
                <div>
                  {/* Thumbnail / Video Preview Header */}
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="relative w-full h-52 sm:h-56 bg-heritage-950 overflow-hidden"
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-85 contrast-110 group-hover/card:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-900 via-transparent to-black/30" />

                    {/* Category Badge on top left */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-heritage-950/80 border border-gold-500/40 text-gold-300 text-[10px] font-mono uppercase tracking-wider backdrop-blur-md">
                      <span>{project.category}</span>
                    </div>

                    {/* Optional Video Indicator */}
                    {project.demoVideo && (
                      <div className="absolute top-3 right-3 p-1.5 rounded-full bg-gold-500 text-heritage-950 shadow-gold-sm">
                        <Play size={12} className="fill-current" />
                      </div>
                    )}

                    {/* Hover Click Hint */}
                    <div className="absolute inset-0 bg-gold-950/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-4 py-2 rounded-full bg-heritage-900/90 border border-gold-400 text-gold-300 text-xs font-serif tracking-widest uppercase flex items-center gap-2 shadow-gold-sm">
                        <span>EXPLORE DETAILS</span>
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Project Title in 3D Gold Font */}
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="font-serif text-lg sm:text-xl font-bold text-slate-100 uppercase tracking-wide group-hover/card:text-gold-300 transition-colors line-clamp-1 mb-2"
                    >
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-slate-400 font-sans text-xs sm:text-sm font-light leading-relaxed line-clamp-2 mb-4">
                      {project.tagline}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-heritage-950 border border-gold-500/20 text-gold-300/80"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-500">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Links & Action Button */}
                <div className="px-6 pb-6 pt-3 border-t border-gold-500/15 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-heritage-950 border border-gold-500/30 text-slate-400 hover:text-gold-300 hover:border-gold-400 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-heritage-950 border border-gold-500/30 text-slate-400 hover:text-gold-300 hover:border-gold-400 transition-colors"
                        title="Live Demonstration"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-serif font-bold tracking-wider text-gold-400 hover:text-gold-200 group/btn uppercase"
                  >
                    <span>DETAILS</span>
                    <ArrowUpRight size={14} className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </HeritageCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
