# Divyansh Maurya — Personal Website

A clean, professional personal portfolio for **Divyansh Maurya** — AI & Software
Engineer, M.S. Computer Science @ NYU. Builds agentic AI systems and ships 0→1 products.

🔗 **Live site:** https://divyanshmaurya.com (hosted on Vercel)
🔗 **LinkedIn:** https://www.linkedin.com/in/divyansh-maurya/
🔗 **GitHub:** https://github.com/divyanshmaurya

---

## ✨ Highlights

- **Clean, corporate design** — light theme, single professional accent, conventional
  scannable layout. Recruiter- and ATS-friendly, minimal flash.
- **Zero build step** — hand-crafted HTML, CSS & vanilla JS. Fast, lightweight, and
  trivial to host anywhere.
- **Fully responsive** with a polished mobile navigation menu and a sticky header.
- **Subtle, tasteful motion** — gentle scroll reveals and hover states only; respects
  `prefers-reduced-motion`.
- **Accessible & SEO-ready** — semantic markup, Open Graph / Twitter meta tags, and
  keyboard-friendly navigation.
- **Perfect for GitHub Pages** — includes a ready-to-run deploy workflow.

## 🗂️ Structure

```
personal_website/
├── index.html                 # All page content & sections
├── css/styles.css             # Design system + components
├── js/main.js                 # Mobile menu, scroll reveal, active-nav
├── assets/
│   ├── favicon.svg            # DM monogram favicon
│   └── Divyansh_Maurya_Resume.pdf
├── sitemap.xml · robots.txt    # SEO
├── vercel.json                 # Vercel config (security headers, clean URLs)
└── README.md
```

## 🚀 Run locally

No dependencies required. Either open `index.html` directly, or serve it:

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 🌐 Hosting

The site is hosted on **Vercel** with the custom domain **https://divyanshmaurya.com**.
Every push to `main` triggers an automatic production deploy — there's no build step,
so Vercel serves the static files from the repo root as-is.

- `vercel.json` sets security headers (HSTS, Content-Security-Policy,
  X-Content-Type-Options, Referrer-Policy, …) and enables clean URLs.

To deploy your own copy: import the repo at [vercel.com/new](https://vercel.com/new),
keep the framework preset as **Other** (no build command, output directory = root),
then add your domain under the project's **Settings → Domains**.

## 🎨 Customize

- **Content** lives in `index.html` — update the hero, experience, projects, etc.
- **Colors / fonts** are CSS custom properties at the top of `css/styles.css`
  (`--accent`, `--ink`, `--bg`, fonts). Swap `--accent` to re-theme the whole site.

---

© Divyansh Maurya. Designed & built with care.
