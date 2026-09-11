# Folio — Modern Freelance Portfolio (React · Vite · Tailwind CSS)

A modern, high-performance freelance portfolio built with **React**, **Vite**, and **Tailwind CSS**. Migrated from static HTML/Alpine.js into a modular Single Page Application (SPA).

## 🚀 Features

- **Component-Driven SPA**: Multi-page routing with `react-router-dom`:
  - `/` — Homepage (Hero, Services, Selected Work, About, Reviews, Blog Preview, Contact)
  - `/projects` — Interactive Project Gallery with category filter tabs (SaaS, Landing page, Agency, E-commerce)
  - `/case-study/:slug` — In-depth Case Study view with top reading progress bar and metrics
  - `/blog` — Blog archive with topic filtering
  - `/blog/:slug` — Article reader with reading progress bar, author profile, and related articles
- **Theme Switcher**: Dark and Light mode toggle with automatic OS preference detection and `localStorage` persistence.
- **Scroll & Visual Effects**: Scroll-reveal animations, noise texture background, custom scrollbars, and shimmer button effects.
- **Interactive Forms**: Client-side contact form with validation and submission confirmation.
- **Clean Architecture**: Structured data models in `src/data/` for rapid portfolio editing.
- **Legacy Backup**: Original HTML templates safely archived in `legacy-html/`.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)

---

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production output will be generated in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```text
d:/Portfolio/
├── legacy-html/                 # Preserved original HTML templates
├── public/                      # Static public assets
├── src/
│   ├── components/
│   │   ├── common/              # ProgressBar, etc.
│   │   ├── home/                # Hero, Services, FeaturedWork, About, Testimonials, BlogPreview, Contact
│   │   └── layout/              # Navbar, Footer
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark / light theme provider
│   ├── data/
│   │   ├── blogData.js          # Blog articles dataset
│   │   ├── projectsData.js      # Portfolio projects dataset
│   │   ├── servicesData.js      # Services list & tech stack
│   │   └── testimonialsData.js  # Client reviews dataset
│   ├── hooks/
│   │   ├── useReadingProgress.js# Scroll progress percentage
│   │   └── useScrollReveal.js   # IntersectionObserver animations
│   ├── pages/
│   │   ├── BlogPage.jsx         # Full blog directory
│   │   ├── BlogPostPage.jsx     # Single article view
│   │   ├── CaseStudyPage.jsx    # Project case study page
│   │   ├── HomePage.jsx         # Main one-page overview
│   │   └── ProjectsPage.jsx     # All projects gallery
│   ├── App.jsx                  # Route definitions
│   ├── index.css                # Tailwind directives & styles
│   └── main.jsx                 # Vite application mount
├── index.html                   # Vite HTML entry point
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 📄 License & Credits

- Original Design & Code by [Laurent Begey](https://lbegey78.gumroad.com/)
- Distributed by [ThemeWagon](https://themewagon.com/)
- Licensed under [MIT](LICENSE)
