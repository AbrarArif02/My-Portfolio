# Abrar Arif - Portfolio

## 📋 Overview
A personal portfolio website showcasing my work as a Frontend Web Developer and DSA enthusiast. Built as a single-page, section-based website with smooth navigation across the Home, About, Projects, Skills, Achievements, Blog, Publications, and Contact sections.
   - Static, vanilla HTML/CSS/JavaScript portfolio
   - No build tools or frameworks required
   - Top bar navigation switches between full-page slide sections
   - Each section has its own layout and animations

## Live site: 
   - https://abrararif02.github.io/My-Portfolio/
## Figma Linki: 
   - https://www.figma.com/design/q2F7BKtAmIpRqY2ye94tRY/My-Portfolio?node-id=0-1&t=61LTEBFalXfY0cwA-1


## ✨ Key Features

- **Single-page slide navigation** — top bar switches between 8 full-screen sections without page reloads

- **Custom animated cursor** — dot + ring cursor follow effect for a polished feel

- **Responsive design** — mobile-first layouts across all sections

- **Dynamic project showcase** — hover overlays with direct "View Project" links to 5 live deployed projects

- **Categorized skills grid** — icon-based tags grouped by language, frontend, core CS concepts, tools, and soft skills

- **Animated achievement timeline** — scroll-progress line highlighting competitions, awards, and certifications

- **Blog with expandable articles** — modal popup reveals full article content on click

- **Expandable publication abstracts** — "Click to read full abstract" toggle with DOI and citation info

- **Direct contact integration** — mailto/Gmail compose link and social icon links

- **SweetAlert2 integration** — styled alert/notification popups


## 📊 Sections

- **Home:**
  - Intro and tagline
  - Social links
  - CV / résumé download

- **About:**
  - Bio
  - Quick stats — projects built, problems solved, competitions, years coding
  - Education timeline

- **Projects:**
  - Bangladesh 2.0 — Responsive Bangladesh-themed site with donation, news, and newsletter sections
  - Kids Education— Responsive school website with dynamic date display and marquee announcements
  - Nature's Platter — Tailwind CSS vegetable-themed site with animations and hover effects
  - DevBoard — Task management app with activity logs and customizable themes
  - English Janala — API-powered vocabulary learning app with login auth and voice pronunciation

- **Skills:**
  - Programming languages
  - Frontend development
  - Core CS concepts
  - Tools & technologies
  - Currently learning
  - Soft skills

- **Achievements:**
  - Timeline of competitions, awards, and certifications

- **Blog:**
  - Data Structures
  - Time Complexity
  - Career journey
  - Artificial Intelligence
  - Next.js
  - Tailwind CSS

- **Publications:**
  - Academic/research publication listings with abstracts and citation info

- **Contact:**
  - Email and social links to get in touch


## 🛠 Tech Stack

- **Frontend:**
  - HTML5 — semantic structure
  - CSS3 — custom styling
  - JavaScript (Vanilla) — section navigation, interactivity

- **Alert:** 
  - SweetAlert2 — alert/notification UI (via CDN)

- **Google Fonts:** 
  - Syne
  - Lora
  - IBM Plex Mono 
  - Bree Serif

- **Deployment:** 
  - GitHub Pages


## 📁 Project Structure

```
My-Portfolio/
├── Asset/          # Images (profile photo, project screenshots, blog covers)
├── Icon/           # Skill/tech icons
├── Demo.pdf        # Downloadable CV / résumé
├── index.html      # Main page markup and content
├── style.css       # Styling
└── script.js       # Navigation logic and interactivity
└── README.md       # Documentation
```


## 🚀 Getting Started

No build step is required — it's a static site.

1. Clone the repository

  ```bash
  git clone https://github.com/AbrarArif02/My-Portfolio.git
  cd My-Portfolio
  ```

2. Open `index.html` directly in a browser, **or** serve it locally:
  ```bash
  npx serve.
  ```

## 🌐 Deployment

This project is well-suited for **GitHub Pages**:

- Go to repo **Settings → Pages**
- Set the source branch to `main` and root folder
- Save — the site will be published at `https://abrararif02.github.io/My-Portfolio/`

---