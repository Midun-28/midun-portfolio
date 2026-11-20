import React, { useState } from 'react';
import { CinematicIntro } from './components/cinematic/CinematicIntro';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline';
import { MyRootsSection } from './components/sections/MyRootsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { GoldenParticlesCanvas } from './components/cinematic/GoldenParticlesCanvas';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    // Check if the user already entered the portfolio in the current session
    return !sessionStorage.getItem('midun_portfolio_entered');
  });

  const handleEnterPortfolio = () => {
    sessionStorage.setItem('midun_portfolio_entered', 'true');
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <div className="relative min-h-screen bg-heritage-950 text-slate-200 selection:bg-gold-500/30 selection:text-gold-200">
      
      {/* Cinematic Fullscreen Entrance */}
      {showIntro && <CinematicIntro onEnter={handleEnterPortfolio} />}

      {/* Global Ambient Floating Gold Dust */}
      <GoldenParticlesCanvas density={30} className="fixed inset-0 pointer-events-none z-20" />

      {/* Main Sticky Navigation */}
      <Navbar onReplayIntro={handleReplayIntro} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col w-full overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceTimeline />
        <MyRootsSection />
        <ContactSection />
      </main>

      {/* Royal Heritage Footer */}
      <Footer />

    </div>
  );
};

export default App;
