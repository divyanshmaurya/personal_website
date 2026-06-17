/* ============================================================
   Divyansh Maurya — Personal Website
   Minimal interactions (clean corporate)
   ============================================================ */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Header border on scroll ---------- */
  const header = document.getElementById('header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('burger');
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

  /* ---------- Subtle reveal on scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
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
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  }

  /* ---------- Active nav link ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav a');
  if ('IntersectionObserver' in window && navLinks.length) {
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
      { threshold: 0.3, rootMargin: '-25% 0px -45% 0px' }
    );
    sections.forEach((s) => spy.observe(s));
  }
})();
