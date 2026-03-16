/* ==========================================
   ALI KAMAL PORTFOLIO — MAIN.JS
   ========================================== */

/* ---- THEME TOGGLE ---- */
function toggleTheme() {
  const html   = document.documentElement;
  const sun    = document.getElementById('sunIcon');
  const moon   = document.getElementById('moonIcon');
  const isDark = html.getAttribute('data-theme') === 'dark';

  if (isDark) {
    html.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    sun?.classList.add('hidden');
    moon?.classList.remove('hidden');
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    moon?.classList.add('hidden');
    sun?.classList.remove('hidden');
  }
}

/* Apply saved theme on load */
(function applySavedTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  const html  = document.documentElement;
  const sun   = document.getElementById('sunIcon');
  const moon  = document.getElementById('moonIcon');

  html.setAttribute('data-theme', saved);
  if (saved === 'light') {
    sun?.classList.add('hidden');
    moon?.classList.remove('hidden');
  } else {
    moon?.classList.add('hidden');
    sun?.classList.remove('hidden');
  }
})();


/* ---- CUSTOM CURSOR ---- */
const cursor = document.getElementById('cursor');

if (cursor) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
  });
}


/* ---- SCROLL REVEAL ---- */
const revealItems = document.querySelectorAll('.reveal-item');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('revealed'), i * 80);
    }
  });
}, { threshold: 0.1 });

revealItems.forEach(item => revealObserver.observe(item));


/* ---- SKILL BAR ANIMATIONS ---- */
const skillBars = document.querySelectorAll('.skill-bar');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.dataset.width + '%';
      skillObserver.unobserve(bar);
    }
  });
}, { threshold: 0.4 });

skillBars.forEach(bar => skillObserver.observe(bar));


/* ---- ACTIVE NAV HIGHLIGHT ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.style.color = isActive ? 'var(--accent)' : '';
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(sec => navObserver.observe(sec));


/* ---- HERO REVEAL ---- */
window.addEventListener('load', () => {
  document.querySelectorAll('#hero .reveal-item').forEach((el, i) => {
    setTimeout(() => el.classList.add('revealed'), 200 + i * 150);
  });
});


/* ---- DEV LOG ---- */
console.log(
  '%c Ali Kamal Portfolio ',
  'background: #4F9EFF; color: #fff; font-weight: bold; font-size: 13px; padding: 4px 8px; border-radius: 4px;'
);
