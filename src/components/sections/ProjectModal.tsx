import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types/portfolio';
import { TempleArchOrnament } from '../cinematic/TempleArchOrnament';
import { 
  X, 
  Github, 
  ExternalLink, 
  Play, 
  CheckCircle, 
  Code2, 
  AlertCircle, 
  Calendar, 
  Layers 
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop Dark Tint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-heritage-950/85 backdrop-blur-md"
        />

        {/* Modal Dialog Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-heritage-900 border-2 border-gold-400/70 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.3)] overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Traditional Corner Ornaments */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold-300 pointer-events-none" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold-300 pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-heritage-950/80 border border-gold-500/40 text-gold-300 hover:text-white hover:bg-gold-500/20 transition-all"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>

          {/* Modal Header Media (Video Player on Demand OR High-Res Thumbnail) */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 bg-heritage-950 overflow-hidden shrink-0">
            {project.demoVideo && isPlayingVideo ? (
              <video
                src={project.demoVideo}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover filter brightness-80 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-900 via-transparent to-black/40" />

                {/* Video Play Trigger on demand */}
                {project.demoVideo && (
                  <button
                    onClick={() => setIsPlayingVideo(true)}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gold-500/90 hover:bg-gold-400 text-heritage-950 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-all transform hover:scale-110 z-10"
                    title="Play Video Demo"
                  >
                    <Play size={24} className="fill-current ml-1" />
                  </button>
                )}
              </>
            )}

            {/* Category Pill on top left */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-heritage-950/80 backdrop-blur-md border border-gold-500/50 text-gold-300 text-xs font-mono uppercase tracking-wider">
              <Layers size={13} className="text-gold-400" />
              <span>{project.category}</span>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Title & Tagline */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100 uppercase tracking-wide">
                  <span className="text-gold-3d">{project.title}</span>
                </h3>
                {project.date && (
                  <div className="flex items-center gap-1.5 text-xs font-mono text-gold-antique/70">
                    <Calendar size={13} />
                    <span>{project.date}</span>
                  </div>
                )}
              </div>
              <p className="text-gold-200/90 font-sans text-sm sm:text-base font-light">
                {project.tagline}
              </p>
            </div>

            <TempleArchOrnament className="my-2" />

            {/* Problem Statement Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-heritage-950/80 border border-gold-500/30">
              <div className="flex items-center gap-2 text-gold-400 font-serif font-bold text-sm sm:text-base mb-2">
                <AlertCircle size={18} />
                <span>THE CHALLENGE & PROBLEM STATEMENT</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed font-light">
                {project.problemStatement}
              </p>
            </div>

            {/* Key Features List */}
            <div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
                <Code2 size={18} className="text-gold-400" />
                <span>KEY ARCHITECTURAL FEATURES</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-heritage-950/60 border border-gold-500/15">
                    <CheckCircle size={16} className="text-gold-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 font-sans">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Stack Tags */}
            <div>
              <h4 className="font-mono text-xs text-gold-antique uppercase tracking-widest mb-2.5">
                TECHNOLOGIES EMPLOYED
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-heritage-950 border border-gold-500/30 text-gold-300 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links: GitHub & Live Demo */}
            <div className="pt-4 border-t border-gold-500/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-heritage-950 border border-gold-500/40 text-gold-200 hover:border-gold-300 hover:bg-gold-500/10 text-xs font-serif tracking-wider uppercase transition-all"
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold-600 to-gold-500 text-heritage-950 hover:shadow-gold-sm text-xs font-serif font-bold tracking-wider uppercase transition-all"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demonstration</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-xs font-mono text-slate-400 hover:text-gold-300 uppercase tracking-wider"
              >
                Close Window [Esc]
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
