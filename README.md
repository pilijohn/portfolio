# Pili John’s Portfolio

## Tools Used
- **VS Code** for development
- **Git & GitHub Pages** for version control & hosting
- **W3C Validators** for HTML/CSS validation

## Key Features
- Semantic HTML5 structure with `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Responsive design (mobile‑first, CSS grid/flexbox)
- Dark/light theme toggle
- Contact form with regex validation
- Image map & embedded video via `<iframe>`
- Print‑friendly CSS for resume section
- Dynamic greeting based on time of day
- Accessibility best practices (alt attributes, labels, keyboard focus)

## Challenges & Solutions
- **Print layout**: initially nav printed on resume. Solved with `@media print { nav { display: none; } }`
- **Form regex**: phone formats vary—used simple `/^\+?\d{7,15}$/` to cover most international numbers.
- **Cross‑browser responsive**: tested breakpoints and adjusted grid `minmax()` values.

---

**Live Demo:** https://pilijohn.github.io/portfolio/
**Github codes** https://github.com/pilijohn/portfolio
**Download ZIP:** `portfolio.zip`
