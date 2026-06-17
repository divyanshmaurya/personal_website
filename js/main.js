/* ============================================================
   Divyansh Maurya — Personal Website
   Interactions
   ============================================================ */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);

  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    document.querySelector('meta[name="theme-color"]')
      .setAttribute('content', next === 'dark' ? '#07070b' : '#f7f7fb');
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Nav: scrolled state + scroll progress ---------- */
  const nav = document.getElementById('nav');
  const progress = document.querySelector('.scroll-progress');

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 24);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('navBurger');
  const menu = document.getElementById('mobileMenu');
  function closeMenu() {
    burger.classList.remove('open');
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if (prefersReduced) {
    reveals.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((l) =>
            l.classList.toggle('active', l.getAttribute('href') === '#' + id)
          );
        }
      });
    },
    { threshold: 0.4, rootMargin: '-20% 0px -40% 0px' }
  );
  sections.forEach((s) => spy.observe(s));

  /* ---------- Typed role effect ---------- */
  const typedEl = document.getElementById('typed');
  const roles = [
    'AI / ML Engineer',
    'LLM & RAG Systems Builder',
    'Software Development Engineer',
    'MS Computer Science @ NYU',
  ];
  if (prefersReduced) {
    typedEl.textContent = roles[0];
  } else {
    let r = 0, c = 0, deleting = false;
    function tick() {
      const word = roles[r];
      typedEl.textContent = word.slice(0, c);
      if (!deleting && c < word.length) {
        c++;
        setTimeout(tick, 60 + Math.random() * 40);
      } else if (!deleting && c === word.length) {
        deleting = true;
        setTimeout(tick, 1800);
      } else if (deleting && c > 0) {
        c--;
        setTimeout(tick, 28);
      } else {
        deleting = false;
        r = (r + 1) % roles.length;
        setTimeout(tick, 320);
      }
    }
    tick();
  }

  /* ---------- Animated stat counters ---------- */
  const stats = document.querySelectorAll('.stat');
  const statObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const numEl = el.querySelector('.stat__num');
        const target = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const dur = 1500;
        const start = performance.now();

        function frame(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          const val = (target * eased).toFixed(decimals);
          numEl.textContent = prefix + val + suffix;
          if (p < 1) requestAnimationFrame(frame);
          else numEl.textContent = prefix + target.toFixed(decimals) + suffix;
        }
        if (prefersReduced) {
          numEl.textContent = prefix + target.toFixed(decimals) + suffix;
        } else {
          requestAnimationFrame(frame);
        }
        statObs.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  stats.forEach((s) => statObs.observe(s));

  /* ---------- Cursor spotlight ---------- */
  const spotlight = document.querySelector('.spotlight');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !prefersReduced) {
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    window.addEventListener('mousemove', (e) => {
      tx = e.clientX; ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(loop);
    });
    function loop() {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      spotlight.style.left = cx + 'px';
      spotlight.style.top = cy + 'px';
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    }
  }

  /* ---------- Project card pointer glow follows cursor ---------- */
  document.querySelectorAll('.project').forEach((card) => {
    const glow = card.querySelector('.project__glow');
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      glow.style.left = e.clientX - rect.left - 140 + 'px';
      glow.style.top = e.clientY - rect.top - 140 + 'px';
      glow.style.right = 'auto';
    });
    card.addEventListener('mouseleave', () => {
      glow.style.left = '';
      glow.style.top = '';
      glow.style.right = '';
    });
  });
})();
