/* ==========================================================================
   Pratham Dada — Portfolio Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---- 1. Footer year ----
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---- 2. Scroll-reveal animation ----
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => revealObserver.observe(el));

  // ---- 3. Hero name fade-in ----
  const heroName = document.querySelector('.hero-name');
  if (heroName) {
    heroName.style.opacity = 0;
    setTimeout(() => {
      heroName.style.transition = 'opacity .5s ease';
      heroName.style.opacity = 1;
    }, 300);
  }

});
