# Divyansh Maurya — Personal Website

A premium, fully responsive personal portfolio for **Divyansh Maurya** — MS Computer
Science @ NYU, AI Developer, and Software Engineer.

🔗 **Live site:** _enable GitHub Pages to publish (see below)_
🔗 **LinkedIn:** https://www.linkedin.com/in/divyansh-maurya/

---

## ✨ Highlights

- **Zero build step** — hand-crafted HTML, CSS & vanilla JS. Fast, lightweight, and
  trivial to host anywhere.
- **Dark / light theme** with a refined toggle and `localStorage` persistence.
- **Premium motion** — animated aurora background, scroll-reveal sections, typed role
  headline, animated stat counters, cursor spotlight, and magnetic hover states.
- **Fully responsive** with a polished mobile navigation menu.
- **Accessible & SEO-ready** — semantic markup, Open Graph / Twitter meta tags,
  `prefers-reduced-motion` support, and keyboard-friendly navigation.
- **Perfect for GitHub Pages** — includes a ready-to-run deploy workflow.

## 🗂️ Structure

```
personal_website/
├── index.html                 # All page content & sections
├── css/styles.css             # Design system + components
├── js/main.js                 # Theme, reveal, typed text, counters, spotlight
├── assets/
│   ├── favicon.svg            # DM monogram favicon
│   └── Divyansh_Maurya_Resume.pdf
├── .github/workflows/deploy.yml
└── README.md
```

## 🚀 Run locally

No dependencies required. Either open `index.html` directly, or serve it:

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 🌐 Deploy to GitHub Pages

This repo ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`).

1. Push these files to the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. The site deploys automatically on every push to `main`. Your URL will be
   `https://<username>.github.io/personal_website/`.

> Prefer the classic flow? You can instead pick **Deploy from a branch → main → / (root)**
> under Settings → Pages — the site is plain static files at the repo root.

## 🎨 Customize

- **Content** lives in `index.html` — update the hero, experience, projects, etc.
- **Colors / fonts** are CSS custom properties at the top of `css/styles.css`
  (`--c1`, `--c2`, `--c3`, `--grad`, fonts).
- **Typed roles** and **stat numbers** are configured in `js/main.js` and via
  `data-*` attributes in `index.html`.

---

© Divyansh Maurya. Designed & built with care.
