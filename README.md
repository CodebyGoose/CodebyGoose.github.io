# CodebyGoose — Personal Portfolio

A clean, professional portfolio to showcase skills, projects, and background as a Computer Engineering student and web developer.

Live Site: https://codebygoose.github.io

## Overview
This site presents a concise profile, project highlights (including ADITRA and E‑Library AGHAMSI), education, skills, and contact information. The design follows a modern aesthetic with an accessible color palette and responsive layout.

## Features
- Consistent, professional visual design using a blue palette
- Project pages with media (video and slideshow) and tech stack badges
- Responsive layout across desktop and mobile
- Accessible markup (alt text, aria labels, semantic sections)
- Simple, static deployment with GitHub Pages

## Tech Stack
- HTML5
- CSS3
- JavaScript (vanilla)

## Project Structure
```
CodebyGoose.github.io/
├── index.html           # Home page
├── projects.html        # Projects + documentation
├── about.html           # About
├── contact.html         # Contact & social links
├── css/
│   ├── styles.css       # Global styles (palette, navbar, base)
│   ├── home.css         # Home-specific sections
│   ├── projects.css     # Projects layout & documentation styles
│   ├── about.css        # About page layout
│   └── contact.css      # Contact & social cards
├── js/
│   ├── sidebar.js       # Section nav activation & smooth scroll
│   └── slideshow.js     # Simple image carousel for project screenshots
├── img/                 # Images and logos
├── vid/                 # Project video(s)
└── README.md
```

## Color System
Defined in CSS variables (css/styles.css and referenced across page-specific CSS):
- --primary: #2563eb
- --primary-dark: #1e40af
- --primary-light: #e0e7ff
- --primary-shadow: rgba(37, 99, 235, 0.2)

These provide consistent theming for buttons, titles, badges, and shadows.

## Pages
- Home (index.html): Hero, profiles, education, skills, experience
- Projects (projects.html): Project cards and documentation with video/slideshow
- About (about.html): Background, specialties, tools, and focus areas
- Contact (contact.html): Email, phone, location, and social profiles

## Scripts
- sidebar.js: Smooth section navigation and active state handling
- slideshow.js: Lightweight carousel for AGHAMSI screenshots

## Local Development
No build step is required.
- Option 1: Double-click index.html to open in your browser
- Option 2 (recommended): Use a local web server to avoid any asset path issues
  - VS Code Live Server extension, or
  - Python: `python -m http.server` (then open http://localhost:8000)

## Deployment (GitHub Pages)
This repository is configured for GitHub Pages as a static site:
1. Push changes to the default branch (main/master)
2. In GitHub: Settings → Pages → Source: Deploy from a branch
3. Set the branch (e.g., main) and folder `/` (root)
4. The site will be available at https://<username>.github.io

## Accessibility
- Images include descriptive alt attributes
- Interactive elements include aria-labels where appropriate
- Color contrast targets WCAG AA using the blue palette

## Author
Joshua J. Atienza
- 3rd-Year Computer Engineering Student
- University of the Assumption
- GitHub: https://github.com/CodebyGoose

## License
This project is available under the MIT License.
