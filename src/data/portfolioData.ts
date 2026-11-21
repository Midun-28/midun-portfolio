import { PersonalInfo, Project, SkillCategory, TimelineItem } from '../types/portfolio';

/**
 * ============================================================================
 * MIDUN D - CENTRAL PORTFOLIO CONFIGURATION DATA FILE
 * ============================================================================
 */

export const personalInfo: PersonalInfo = {
  name: "MIDUN D",
  tamilName: "மிதுன் தா",
  role: "Computer Science Engineering Student | Full Stack & AI Enthusiast",
  tagline: "Building intuitive, high-performance web applications and intelligent digital experiences.",
  
  // Midun's transparent cutout portrait photo
  profileImage: "/media/midun_cutout.png",
  
  // Midun's authentic resume PDF
  resumeUrl: "/media/Midun_D_Resume.pdf",
  
  email: "mmidun866@gmail.com",
  phone: "+91 63831 48977",
  location: "Coimbatore, Tamil Nadu",
  
  socials: {
    github: "https://github.com/Midun-28",
    linkedin: "https://linkedin.com/in/midund",
    email: "mailto:mmidun866@gmail.com",
    twitter: "https://x.com",
  },

  // Cinematic Intro Screen Media Configuration
  introMedia: {
    videoUrl: "", 
    fallbackPoster: "/media/porikkalam_clean_bg.jpg", 
    welcomeSubtitle: "AN ARENA FOR ENGINEERS • திறன்களின் திடல்",
    welcomeTamilGreeting: "வணக்கம் • வருகை தருக",
  },

  // "MY ROOTS" / என் வேர்கள் Section Configuration
  nativeRoots: {
    title: "MY ROOTS & HERITAGE",
    tamilTitle: "என் வேர்கள் • தமிழ்நாடு",
    quote: "Deep roots anchor the tree that reaches the highest sky.",
    quoteTamil: "வேர்கள் ஆழம் எனில், கிளைகள் வானம் தொடும்.",
    locationName: "Karaikudi to Coimbatore, Tamil Nadu",
    heritageText: [
      "Born and raised with roots in Karaikudi—a heritage town renowned for its magnificent Chettinad architectural discipline and enduring stone craftsmanship—and now pursuing engineering in Coimbatore, the industrial and technological powerhouse of Tamil Nadu.",
      "Just as ancient Tamil stone architecture was engineered with millimeter precision to withstand centuries, I approach modern software engineering with foundational discipline, aesthetic clarity, and algorithmic rigor.",
      "Blending cultural humility with modern Full Stack development and Generative AI, my goal is to build digital products that solve genuine real-world challenges for our communities."
    ],
    videoUrl: "", 
    fallbackImage: "/media/porikkalam_clean_bg.jpg",
    galleryImages: [
      "/media/roots_chettinad_palace.jpg",
      "/media/roots_jallikattu.jpg",
      "/media/roots_vazhaielai_feast.jpg"
    ]
  },

  bioParagraphs: [
    "Hello! I am Midun D, a motivated Computer Science Engineering student at Dr. N.G.P Institute of Technology, Coimbatore. I specialize in Full Stack Web Development, Python, Java, and emerging Generative AI technologies.",
    "My development journey is driven by solving practical challenges. From building an AI-powered Campus Guidance System with multilingual assistance to developing an Alumni Management System (AMS) and hyperlocal workforce solutions, I focus on building intuitive, high-performance software.",
    "With a strong foundation in C, Python, Java with Data Structures, and cloud workflows, I constantly explore innovative solutions that combine robust backend architecture with modern interactive interfaces."
  ]
};

/**
 * ============================================================================
 * FEATURED PROJECTS (Authentic from Midun's Resume & Portfolio)
 * ============================================================================
 */
export const projectsData: Project[] = [
  {
    id: "ai-campus-assist",
    title: "Ai-Campus Assist",
    tagline: "AI-powered campus guidance system with multilingual chatbot interaction and database-backed navigation.",
    category: "AI / ML",
    featured: true,
    description: "Developed an AI-powered Campus Guidance System to assist parents, visitors, and newcomers in navigating campus locations efficiently using multilingual chatbot interaction and database-based guidance.",
    problemStatement: "Navigating university campuses, finding specific departments, and locating event venues often causes confusion for new visitors, parents, and students. A multilingual contextual AI assistant simplifies campus discovery instantly.",
    keyFeatures: [
      "Multilingual chatbot interaction supporting queries in regional and global languages.",
      "Contextual database-backed campus location and department lookup.",
      "Automated visitor FAQ assistance and administrative guidance.",
      "Clean, modern responsive user interface with golden accents.",
      "Fast response pipeline powered by Generative AI concepts."
    ],
    technologies: ["Python", "Generative AI", "React", "TypeScript", "Database", "Git & GitHub"],
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    demoVideo: "",
    githubUrl: "https://github.com/Midun-28",
    liveUrl: "https://github.com/Midun-28",
    date: "2024 - 2025"
  },
  {
    id: "alumni-management-system",
    title: "Alumni Management System (AMS)",
    tagline: "Comprehensive networking and institutional platform connecting alumni, current students, and academia.",
    category: "Full Stack",
    featured: true,
    description: "Developed an Alumni Management System (AMS) to connect alumni, students, and institutions. Implemented profile management, event updates, and communication features, significantly improving networking and information sharing.",
    problemStatement: "Universities and colleges often lose touch with graduating batches, making mentorship, networking, and institutional alumni donations fragmented across different channels.",
    keyFeatures: [
      "Alumni directory with profile management and career milestone updates.",
      "Event scheduling, reunion notifications, and campus news distribution.",
      "Direct messaging and mentorship connect between alumni and students.",
      "Secure role-based access for students, alumni, and administrators.",
      "Robust relational database schema for long-term records."
    ],
    technologies: ["Python", "Django", "HTML5", "CSS3", "JavaScript", "SQL", "Git"],
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    demoVideo: "",
    githubUrl: "https://github.com/Midun-28",
    liveUrl: "https://github.com/Midun-28",
    date: "2024"
  },
  {
    id: "vaanga-bro",
    title: "Vaanga Bro – Hire Nearby Employees",
    tagline: "Hyperlocal workforce hiring platform connecting everyday skilled workers with immediate neighborhood opportunities.",
    category: "Full Stack",
    featured: true,
    description: "A localized recruitment platform designed to solve the friction of finding and hiring verified blue-collar and skilled workers in nearby localities with real-time location matching.",
    problemStatement: "In local neighborhoods, finding reliable daily-wage workers, electricians, plumbers, and technicians remains informal and inefficient. Workers struggle to find consistent gigs, while homeowners lack a trusted, immediate hiring channel.",
    keyFeatures: [
      "Hyperlocal radius-based matching for immediate worker discovery.",
      "Profile verification and skill-badge system to establish trust.",
      "Direct instant call & messaging connect without intermediaries.",
      "Simple bilingual UI designed for accessible mobile usage.",
      "Real-time status tracking for worker availability."
    ],
    technologies: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Supabase", "Git"],
    thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
    demoVideo: "",
    githubUrl: "https://github.com/Midun-28",
    liveUrl: "https://github.com/Midun-28",
    date: "2024 - 2025"
  }
];

/**
 * ============================================================================
 * TECHNICAL SKILLS (Accurately from Midun's Resume)
 * ============================================================================
 */
export const skillsData: SkillCategory[] = [
  {
    category: "Programming",
    tamilCategoryName: "நிரலாக்க மொழிகள்",
    description: "Core languages for algorithmic problem solving and backend application development.",
    skills: [
      { name: "C Programming", level: "Proficient", experienceNote: "Data structures, memory fundamentals & problem solving" },
      { name: "Python", level: "Proficient", experienceNote: "Automation, backend scripting & AI pipelines" },
      { name: "Java with Data Structures", level: "Intermediate", experienceNote: "OOP concepts, collections & algorithms" }
    ]
  },
  {
    category: "Web Development",
    tamilCategoryName: "வலைத்தள உருவாக்கம்",
    description: "Modern frontend and full-stack technologies to build responsive web applications.",
    skills: [
      { name: "HTML5 / CSS3", level: "Proficient", experienceNote: "IIT Bombay Certified, semantic layouts & responsive styling" },
      { name: "JavaScript / TypeScript", level: "Intermediate", experienceNote: "ES6+, async flows & type-safe frontend components" },
      { name: "React", level: "Intermediate", experienceNote: "Component architectures, interactive UIs & state management" },
      { name: "Python / Django", level: "Certified", experienceNote: "Value Added Course Certified, backend APIs & web services" }
    ]
  },
  {
    category: "AI & Emerging Tech",
    tamilCategoryName: "செயற்கை நுண்ணறிவு",
    description: "Applied generative intelligence and modern automation tools.",
    skills: [
      { name: "Generative AI", level: "Exploring", experienceNote: "Multilingual campus chatbots, LLM prompting & assistant workflows" },
      { name: "Automation & AI Applications", level: "Active", experienceNote: "Workflow automation, video generation & scripting" }
    ]
  },
  {
    category: "Tools & Personal Skills",
    tamilCategoryName: "கருவிகள் & திறன்கள்",
    description: "Version control tooling and professional collaborative attributes.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", experienceNote: "Version control discipline, repository management & teamwork" },
      { name: "Leadership & Adaptability", level: "Core", experienceNote: "MSME Hackathon competitor, event organizing & team collaboration" },
      { name: "Problem Solving", level: "Core", experienceNote: "Critical thinking, algorithmic analysis & continuous learning" }
    ]
  }
];

/**
 * ============================================================================
 * TIMELINE / EXPERIENCE / ACHIEVEMENTS / EDUCATION (Exact from Midun's Resume)
 * ============================================================================
 */
export const timelineData: TimelineItem[] = [
  {
    id: "edu-be",
    title: "B.E. Computer Science Engineering",
    organization: "Dr. N.G.P Institute of Technology, Coimbatore",
    period: "2024 – 2028",
    location: "Coimbatore",
    category: "education",
    highlight: "CGPA: 7.7",
    description: [
      "Pursuing Bachelor of Engineering in Computer Science with a strong academic standing (CGPA: 7.7).",
      "Actively developing full-stack web applications, AI chatbots, and participating in national hackathons."
    ]
  },
  {
    id: "edu-hsc",
    title: "Higher Secondary Certificate (HSC) & SSLC",
    organization: "Alagappa Matriculation Higher Secondary School, Karaikudi",
    period: "2020 – 2024",
    location: "Karaikudi",
    category: "education",
    highlight: "HSC: 76.8% | SSLC: 69.2%",
    description: [
      "Completed Higher Secondary Certificate with 76.8% (2024) and SSLC with 69.2% (2022)."
    ]
  },
  {
    id: "intern-livestream",
    title: "Internship Trainee – Java Full Stack",
    organization: "Live Stream Technologies",
    period: "2024",
    location: "Coimbatore",
    category: "experience",
    highlight: "Java Full Stack",
    description: [
      "Completed internship training in Java Full Stack development.",
      "Developed practical skills in Java, backend logic, and full-stack web application development workflows."
    ]
  },
  {
    id: "achievement-msme",
    title: "Top 40 Teams – MSME Hackathon 2025",
    organization: "MSME Hackathon 2025",
    period: "2025",
    category: "achievement",
    highlight: "Top 40 Finalist",
    description: [
      "Recognized among the Top 40 teams in the national MSME Hackathon 2025.",
      "Showcased innovative engineering and problem-solving capabilities under competitive evaluation."
    ]
  },
  {
    id: "cert-nptel",
    title: "NPTEL Cloud Computing – Elite Silver",
    organization: "NPTEL (IIT/IISc)",
    period: "2024",
    category: "certification",
    highlight: "Elite Silver Badge",
    description: [
      "Successfully certified in Cloud Computing with an Elite Silver distinction.",
      "Gained deep foundational knowledge in virtualization, cloud infrastructure, and distributed storage."
    ]
  },
  {
    id: "cert-django",
    title: "Full Stack with Python & Django Certification",
    organization: "Value Added Course – Dr. N.G.P.iTech",
    period: "2024",
    category: "certification",
    highlight: "Certified Full Stack",
    description: [
      "Completed intensive hands-on coursework in Python, Django MVC architecture, and backend integration."
    ]
  },
  {
    id: "cert-html",
    title: "HTML Training Certification",
    organization: "IIT Bombay Spoken Tutorial",
    period: "2024",
    category: "certification",
    highlight: "IIT Bombay",
    description: [
      "Demonstrated proficiency in semantic HTML, modern web standards, and document structuring."
    ]
  },
  {
    id: "achievement-marathon",
    title: "KMCH Kovai Marathon – Finisher",
    organization: "KMCH, Coimbatore",
    period: "2024",
    category: "achievement",
    highlight: "Marathon Finisher",
    description: [
      "Completed the Kovai Marathon promoting health and road safety awareness."
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
