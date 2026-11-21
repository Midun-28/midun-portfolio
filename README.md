# Midun D | Cinematic Tamil Heritage-Inspired Developer Portfolio
**Theme: Tamil Heritage × Digital Innovation (தமிழ் மரபும் நவீன மென்பொருள் அறிவியலும்)**  
*Inspired by the visual aesthetics of Porikkalam 2026*

---

## 🌟 Visual Identity & Overview

This developer portfolio departs from generic SaaS dashboard templates to forge a unique synthesis between **ancient South Indian Dravidian architecture** and **futuristic digital engineering**.

- **Palette**: Midnight Navy (`#070B14`, `#0B1221`), Deep Space Obsidian, Antique Gold (`#D4AF37`, `#F3C64F`), Bronze & Sacred Ruby accents.
- **Typography**: Regal Serif (`Cinzel`, `Cormorant Garamond`), Tamil Calligraphy (`Noto Serif Tamil`), Clean Tech Sans (`Plus Jakarta Sans`), and Code (`JetBrains Mono`).
- **Cinematic Motifs**: Kalasam finials, Dravidian Gopuram vector blueprint silhouettes, cybernetic grid lines, and interactive golden particle canvas embers.

---

## 🚀 Key Features

1. **Cinematic Intro Experience**:
   - Fullscreen temple heritage entrance with dark cinematic overlay and divine golden lighting.
   - Replay and skip capabilities (saves session state so it doesn't interrupt navigation on refresh, with a glowing replay button in the header).
   - Video upload / replace ready.
2. **Main Navigation**:
   - Sticky navbar with glassmorphism, gold indicator dot, active section tracking, and mobile drawer.
3. **Split-Layout Hero Section**:
   - **Left**: Circular/portrait profile image framed in an ornate layered gold chariot ring with floating animation, status badge, and social links.
   - **Right**: "HELLO, I'M" greeting, 3D Gold gradient typography for "MIDUN D", title, summary, Download Resume, and Explore Projects buttons.
4. **Editorial About Section**:
   - Storytelling layout covering Education, Development Journey, Full Stack & AI Interests, Problem-Solving Mindset, and Engineering Philosophy.
5. **Categorized Technical Skills**:
   - Strictly organized into Midun's stack:
     - **Programming**: Python, C, Java
     - **Web Development**: HTML, CSS, JavaScript, React, TypeScript
     - **AI & Emerging Tech**: Generative AI, AI/ML fundamentals
     - **Tools**: Git, GitHub, Supabase
6. **Featured Projects Showcase & Modal Deep-Dive**:
   - **Vaanga Bro – Hire Nearby Employees**
   - **AI Campus Assistant**
   - **AI Video Editor – Concept / Development**
   - Each project supports custom thumbnails, on-demand video demonstrations, problem statements, architectural feature breakdowns, tech badges, and GitHub / demo links.
7. **Experience & Milestones Timeline**:
   - Golden nodes tracking Education, Independent Product Initiatives, Workshops, and Certifications.
8. **My Roots (என் வேர்கள்) Section**:
   - Dedicated cultural heritage showcase connecting the endurance of Tamil stone architecture with durable software engineering. Supports custom background video/imagery.
9. **Interactive Contact & Royal Footer**:
   - Direct channels, email, LinkedIn, GitHub, resume download, functional message form, and back-to-top button.

---

## 🛠️ How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production deployment
npm run build
```

The site will be live at `http://localhost:3000/`.

---

## 📝 How to Update Your Content (For Midun)

All content is managed in **one single centralized file**:
👉 [`src/data/portfolioData.ts`](file:///d:/Midun_port/src/data/portfolioData.ts)

### 1. Replacing Your Profile Photo:
- Save your portrait as `profile.jpg` in [`public/media/`](file:///d:/Midun_port/public/media/).
- In `src/data/portfolioData.ts`, update:
  ```ts
  profileImage: "/media/profile.jpg",
  ```

### 2. Adding an Intro or Roots Background Video:
- Save your video as `intro_bg.mp4` or `my_roots_bg.mp4` in [`public/media/`](file:///d:/Midun_port/public/media/).
- In `src/data/portfolioData.ts`:
  ```ts
  introMedia: {
    videoUrl: "/media/intro_bg.mp4",
    ...
  }
  ```

### 3. Updating Projects or Skills:
- Simply edit the `projectsData` or `skillsData` arrays in `src/data/portfolioData.ts`.
- Everything is strictly typed with TypeScript for error-free editing.
