# MEDIA ASSETS FOLDER

Welcome Midun! This folder is where you can easily drop your own personal photos, project demonstration videos, and background videos.

### How to use your own media:

1. **Profile Picture**:
   - Save your photo as `profile.jpg` inside this `public/media/` folder.
   - In `src/data/portfolioData.ts`, change:
     ```ts
     profileImage: '/media/profile.jpg',
     ```

2. **Cinematic Intro Video**:
   - Drop your South Indian temple or cinematic intro video as `intro_bg.mp4` in this folder.
   - In `src/data/portfolioData.ts`, inside `introMedia`:
     ```ts
     videoUrl: '/media/intro_bg.mp4',
     ```
   - If left empty (`videoUrl: ""`), the portfolio automatically displays the high-res Dravidian temple background with golden particle dust.

3. **My Roots Video / Photos**:
   - Drop your native village or cultural drone video as `my_roots_bg.mp4` in this folder.
   - In `src/data/portfolioData.ts`, inside `nativeRoots`:
     ```ts
     videoUrl: '/media/my_roots_bg.mp4',
     ```

4. **Project Videos & Thumbnails**:
   - Drop videos such as `vaaga_bro_demo.mp4`, `campus_assistant_demo.mp4`, etc.
   - In `src/data/portfolioData.ts`, update the `demoVideo` property of each project:
     ```ts
     demoVideo: '/media/vaaga_bro_demo.mp4',
     ```

5. **Resume PDF**:
   - Drop your resume as `Midun_D_Resume.pdf` into this folder.
   - In `src/data/portfolioData.ts`, set:
     ```ts
     resumeUrl: '/media/Midun_D_Resume.pdf',
     ```
