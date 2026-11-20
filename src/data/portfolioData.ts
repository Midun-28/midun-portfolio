import { PersonalInfo, Project, SkillCategory, TimelineItem } from '../types/portfolio';

/**
 * ============================================================================
 * MIDUN D - CENTRAL PORTFOLIO CONFIGURATION DATA FILE
 * ============================================================================
 * Welcome Midun! All your personal details, links, project descriptions,
 * media files, skills, and timeline entries are managed right here.
 * 
 * TO UPDATE AN IMAGE OR VIDEO:
 * 1. Place your file in the `public/media/` folder (e.g., `public/media/profile.jpg`).
 * 2. Update the corresponding path below (e.g., `profileImage: '/media/profile.jpg'`).
 * ============================================================================
 */

export const personalInfo: PersonalInfo = {
  name: "MIDUN D",
  tamilName: "மிதுன் தா",
  role: "Full Stack Developer | AI Enthusiast",
  tagline: "Bridging timeless Tamil heritage and modern digital intelligence to craft resilient software.",
  
  // Midun's real portrait photo uploaded by user
  profileImage: "/media/midun_profile.jpg",
  
  // Replace with your real resume file path in public/ (e.g., '/media/Midun_D_Resume.pdf')
  resumeUrl: "#contact",
  
  email: "midun.developer@gmail.com",
  location: "Tamil Nadu, India",
  
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:midun.developer@gmail.com",
    twitter: "https://x.com",
  },

  // Cinematic Intro Screen Media Configuration
  introMedia: {
    // Drop your intro video into public/media/intro_bg.mp4 and set: videoUrl: '/media/intro_bg.mp4'
    videoUrl: "", // If empty string, portfolio gracefully displays the iconic Porikkalam temple x cyber city template
    fallbackPoster: "/media/porikkalam_hero.jpg", // Iconic Porikkalam 2026 heritage x cyber banner
    welcomeSubtitle: "AN ARENA FOR ENGINEERS • திறன்களின் திடல்",
    welcomeTamilGreeting: "வணக்கம் • வருகை தருக",
  },

  // "MY ROOTS" / என் வேர்கள் Section Configuration
  nativeRoots: {
    title: "MY ROOTS & HERITAGE",
    tamilTitle: "என் வேர்கள் • தமிழ் மண்",
    quote: "Deep roots anchor the tree that reaches the highest sky.",
    quoteTamil: "வேர்கள் ஆழம் எனில், கிளைகள் வானம் தொடும்.",
    locationName: "Tamil Nadu, India",
    heritageText: [
      "Hailing from the ancient cultural cradle of Tamil Nadu, my mindset as an engineer is deeply shaped by thousands of years of Dravidian architectural mastery—where grand stone temples like Thanjavur Brihadisvara and Madurai Meenakshi were engineered with millimeter precision to withstand centuries.",
      "Just as ancient artisans chiseled stone into timeless monuments, I approach modern software engineering with discipline, aesthetic balance, and uncompromising attention to foundational architecture.",
      "Combining deep-rooted cultural values of hard work and humility with cutting-edge AI and Full Stack technologies, my goal is to build digital products that endure and empower communities."
    ],
    // Drop your native village or cultural drone video into public/media/my_roots_bg.mp4
    videoUrl: "", // If empty string, beautiful ambient Dravidian heritage canvas is rendered
    fallbackImage: "/media/porikkalam_hero.jpg",
    galleryImages: [
      "/media/porikkalam_hero.jpg",
      "/media/porikkalam_flagship.jpg",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop"
    ]
  },

  bioParagraphs: [
    "Hello! I am Midun D, a passionate Full Stack Developer and AI enthusiast dedicated to building intuitive, high-performance web applications and intelligent digital experiences.",
    "My engineering journey is driven by a deep curiosity about how software solves tangible real-world problems. Whether designing clean responsive frontends with React & TypeScript or architecting backend services with Python, I love translating complex challenges into elegant solutions.",
    "I actively explore Generative AI, machine learning fundamentals, and cloud databases like Supabase, striving to integrate practical intelligence into everyday tools for students, local communities, and modern enterprises."
  ]
};

/**
 * ============================================================================
 * FEATURED PROJECTS
 * ============================================================================
 * All 3 initial projects with detailed problem statements, tech stacks,
 * key features, and video/thumbnail configurations.
 */
export const projectsData: Project[] = [
  {
    id: "vaaga-bro",
    title: "Vaaga Bro – Hire Nearby Employees",
    tagline: "Hyperlocal workforce hiring platform connecting everyday skilled workers with immediate neighborhood opportunities.",
    category: "Full Stack",
    featured: true,
    description: "A localized recruitment platform designed to solve the friction of finding and hiring verified blue-collar and skilled workers in nearby localities with real-time location matching.",
    problemStatement: "In many local neighborhoods, finding reliable daily-wage workers, electricians, plumbers, and local technicians remains informal, unorganized, and inefficient. Workers struggle to find consistent gigs, while homeowners and local businesses lack a trusted, immediate hiring channel.",
    keyFeatures: [
      "Hyperlocal radius-based matching for immediate worker discovery.",
      "Profile verification and skill-badge system to establish trust.",
      "Direct instant call & messaging connect without intermediaries.",
      "Simple bilingual UI designed for accessible mobile usage.",
      "Real-time status tracking for worker availability."
    ],
    technologies: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Supabase", "Git"],
    thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
    // To add your video preview: demoVideo: "/media/vaaga_bro_demo.mp4"
    demoVideo: "",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    date: "2025"
  },
  {
    id: "ai-campus-assistant",
    title: "AI Campus Assistant",
    tagline: "An intelligent multimodal assistant for college students and faculty providing instant academic intelligence.",
    category: "AI / ML",
    featured: true,
    description: "An AI-powered academic companion that answers campus queries, guides students through course materials, and provides automated administrative support.",
    problemStatement: "Navigating university resources, exam timetables, campus department contacts, and study references often involves fragmented portals and slow response times. Students need an immediate, contextual AI assistant.",
    keyFeatures: [
      "Context-aware FAQ and academic syllabus query engine using Generative AI.",
      "Campus announcement summaries and event schedule assistant.",
      "Conversational memory for seamless multi-turn student queries.",
      "Clean dashboard interface with dark mode and golden accents.",
      "Secure authentication and student query logging."
    ],
    technologies: ["Python", "Generative AI", "React", "TypeScript", "Supabase", "Git"],
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    demoVideo: "",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    date: "2025"
  },
  {
    id: "ai-video-editor",
    title: "AI Video Editor – Concept & Development",
    tagline: "Next-gen intelligent video curation suite transforming raw clips into polished cinematic stories.",
    category: "Web Innovation",
    featured: true,
    description: "A forward-looking video editing workflow exploring automated clip sequencing, AI transcript analysis, and smart highlight generation for digital creators.",
    problemStatement: "Manual video editing involves hours of repetitive trimming, caption synchronization, and audio leveling. Creators need an intelligent assistant that automates rough cuts and audio-visual alignments.",
    keyFeatures: [
      "AI-driven scene detection and automated transcript-based cut suggestions.",
      "Dynamic subtitle styling with customizable animated overlays.",
      "Timeline scrubbing interface with lightweight browser-side playback.",
      "Audio normalization and background noise reduction concept.",
      "Direct export presets optimized for multi-platform distribution."
    ],
    technologies: ["Python", "AI/ML fundamentals", "React", "TypeScript", "HTML5 Canvas"],
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
    demoVideo: "",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    date: "2025"
  }
];

/**
 * ============================================================================
 * TECHNICAL SKILLS
 * ============================================================================
 * Categorized strictly according to what Midun has learned and worked with.
 */
export const skillsData: SkillCategory[] = [
  {
    category: "Programming",
    tamilCategoryName: "நிரலாக்க மொழிகள்",
    description: "Foundational and core languages for problem solving and backend systems.",
    skills: [
      { name: "Python", level: "Intermediate", experienceNote: "Data processing, AI scripts & backend logic" },
      { name: "C", level: "Academic", experienceNote: "Data structures, memory fundamentals & algorithms" },
      { name: "Java", level: "Intermediate", experienceNote: "Object-oriented programming & core software concepts" }
    ]
  },
  {
    category: "Web Development",
    tamilCategoryName: "வலைத்தள உருவாக்கம்",
    description: "Modern frontend technologies to build responsive, accessible web applications.",
    skills: [
      { name: "React", level: "Intermediate", experienceNote: "Component architectures, hooks & state management" },
      { name: "TypeScript", level: "Intermediate", experienceNote: "Type-safe codebases & reliable UI interfaces" },
      { name: "JavaScript", level: "Proficient", experienceNote: "ES6+, async/await, DOM APIs & dynamic behaviors" },
      { name: "HTML5", level: "Proficient", experienceNote: "Semantic markup & SEO-friendly document structure" },
      { name: "CSS3 / Tailwind", level: "Proficient", experienceNote: "Custom layouts, responsive design & keyframe animations" }
    ]
  },
  {
    category: "AI & Emerging Tech",
    tamilCategoryName: "செயற்கை நுண்ணறிவு",
    description: "Practical intelligence and state-of-the-art machine learning foundations.",
    skills: [
      { name: "Generative AI", level: "Exploring", experienceNote: "Prompt engineering, LLM integration & AI assistants" },
      { name: "AI/ML Fundamentals", level: "Learning", experienceNote: "Model basics, data preprocessing & predictive concepts" }
    ]
  },
  {
    category: "Tools & Infrastructure",
    tamilCategoryName: "கருவிகள் & தரவுத்தளம்",
    description: "Modern workflow tooling, version control, and cloud database solutions.",
    skills: [
      { name: "Git", level: "Proficient", experienceNote: "Branching, staging, merge workflows & commit discipline" },
      { name: "GitHub", level: "Proficient", experienceNote: "Repository management, collaboration & CI/CD basics" },
      { name: "Supabase", level: "Intermediate", experienceNote: "PostgreSQL, Auth integration & real-time listeners" }
    ]
  }
];

/**
 * ============================================================================
 * TIMELINE / EXPERIENCE / ACHIEVEMENTS / EDUCATION
 * ============================================================================
 * Easily editable cards for placements, hackathons, and certifications.
 */
export const timelineData: TimelineItem[] = [
  {
    id: "edu-1",
    title: "Bachelor of Engineering (B.E.)",
    organization: "Engineering College, Tamil Nadu",
    period: "2022 - Present",
    category: "education",
    highlight: "Computer Science / Engineering Track",
    description: [
      "Focusing on core computer science subjects, algorithmic problem solving, and software engineering principles.",
      "Actively developing hands-on full stack applications and participating in technical symposiums."
    ]
  },
  {
    id: "proj-achievement-1",
    title: "Lead Developer – Vaaga Bro Platform",
    organization: "Independent Product Initiative",
    period: "2024 - 2025",
    category: "achievement",
    highlight: "Hyperlocal Innovation",
    description: [
      "Engineered the full frontend prototype and database schema for a neighborhood hiring solution.",
      "Implemented responsive UI components with React and Supabase backend services."
    ]
  },
  {
    id: "workshop-1",
    title: "Generative AI & Modern Web Development Workshops",
    organization: "Technical Symposiums & Developer Meetups",
    period: "2024",
    category: "workshop",
    highlight: "Hands-on Training",
    description: [
      "Participated in deep-dive technical workshops exploring API-driven AI integration and React performance patterns.",
      "Built prototype chat interfaces and smart utility apps."
    ]
  },
  {
    id: "cert-1",
    title: "Full Stack Web & Database Foundations",
    organization: "Verified Learning & Coursework",
    period: "2024",
    category: "certification",
    highlight: "Certified Skillset",
    description: [
      "Completed rigorous coursework covering modern JavaScript, React ecosystem, and relational database management."
    ]
  }
];

/**
 * Navigation items
 */
export const navLinks = [
  { label: "Home", href: "#home", tamil: "முகப்பு" },
  { label: "About", href: "#about", tamil: "அறிமுகம்" },
  { label: "Skills", href: "#skills", tamil: "திறன்கள்" },
  { label: "Projects", href: "#projects", tamil: "திட்டங்கள்" },
  { label: "Experience", href: "#experience", tamil: "அனுபவம்" },
  { label: "My Roots", href: "#roots", tamil: "என் வேர்கள்" },
  { label: "Contact", href: "#contact", tamil: "தொடர்பு" },
];
