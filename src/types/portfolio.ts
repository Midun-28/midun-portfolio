export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'AI / ML' | 'Web Innovation' | 'Flagship';
  description: string;
  problemStatement: string;
  keyFeatures: string[];
  technologies: string[];
  thumbnail: string;
  demoVideo?: string; // Optional video path or URL
  videoPoster?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  date?: string;
}

export interface SkillCategory {
  category: string;
  tamilCategoryName?: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Proficient", "Intermediate", "Exploring"
    experienceNote?: string;
    icon?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  location?: string;
  category: 'experience' | 'education' | 'workshop' | 'certification' | 'achievement';
  description: string[];
  highlight?: string;
  badge?: string;
  credentialUrl?: string;
}

export interface PersonalInfo {
  name: string;
  tamilName?: string;
  role: string;
  tagline: string;
  bioParagraphs: string[];
  profileImage: string;
  resumeUrl: string;
  email: string;
  phone?: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
    email: string;
  };
  nativeRoots: {
    title: string;
    tamilTitle: string;
    quote: string;
    quoteTamil: string;
    locationName: string;
    heritageText: string[];
    videoUrl?: string;
    fallbackImage: string;
    galleryImages?: string[];
  };
  introMedia: {
    videoUrl?: string;
    fallbackPoster: string;
    welcomeSubtitle: string;
    welcomeTamilGreeting: string;
  };
}
