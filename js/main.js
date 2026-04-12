/* =============================================================
   NAV — scroll state
   ============================================================= */
const nav = document.getElementById('nav');
const syncNav = () => nav && nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', syncNav, { passive: true });
syncNav();

/* =============================================================
   NAV — mobile menu
   ============================================================= */
const burger  = document.querySelector('.nav__burger');
const overlay = document.querySelector('.nav__overlay');

if (burger && overlay) {
  const open  = () => { overlay.classList.add('open');    document.body.style.overflow = 'hidden'; };
  const close = () => { overlay.classList.remove('open'); document.body.style.overflow = '';       };
  burger.addEventListener('click', () => overlay.classList.contains('open') ? close() : open());
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

/* =============================================================
   SCROLL REVEAL
   ============================================================= */
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.07, rootMargin: '0px 0px -36px 0px' });
  reveals.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    obs.observe(el);
  });
}

/* =============================================================
   PARALLAX — project hero image (desktop only)
   ============================================================= */
const heroImg = document.querySelector('.project-hero__img');
if (heroImg && window.matchMedia('(min-width: 701px)').matches) {
  heroImg.style.transform = 'translateY(0) scale(1.08)';
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      heroImg.style.transform = `translateY(${window.scrollY * 0.22}px) scale(1.08)`;
    }
  }, { passive: true });
}

/* =============================================================
   NAV VOID MODE — light text over dark hero
   ============================================================= */
const voidHero = document.querySelector('.project-hero, .hero--space');
if (voidHero && nav) {
  nav.classList.add('nav--void');
  new IntersectionObserver(([e]) => {
    nav.classList.toggle('nav--void', e.isIntersecting);
  }, { threshold: 0.05 }).observe(voidHero);
}

/* =============================================================
   STARFIELD — space hero canvas with glow and depth
   ============================================================= */
const starCanvas = document.getElementById('starfield');
if (starCanvas) {
  const ctx = starCanvas.getContext('2d');
  const stars = [];

  const resize = () => {
    starCanvas.width  = starCanvas.offsetWidth  || window.innerWidth;
    starCanvas.height = starCanvas.offsetHeight || window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize, { passive: true });

  // Create stars with varied sizes and brightness for depth effect
  for (let i = 0; i < 180; i++) {
    const size = Math.random();
    const isBright = Math.random() > 0.7; // 30% chance of being a brighter star
    stars.push({
      x:     Math.random(),
      y:     Math.random(),
      r:     (isBright ? 0.8 : 0.4) + Math.random() * 0.9, // Larger range
      base:  isBright ? (0.5 + Math.random() * 0.45) : (0.25 + Math.random() * 0.35),
      phase: Math.random() * Math.PI * 2,
      speed: 0.25 + Math.random() * 0.75,
      glow:  isBright ? (8 + Math.random() * 12) : (3 + Math.random() * 6),
    });
  }

  // Add a few slow-moving "nebula points"
  for (let i = 0; i < 3; i++) {
    stars.push({
      x:     Math.random(),
      y:     Math.random(),
      r:     2 + Math.random() * 3,
      base:  0.08 + Math.random() * 0.12,
      phase: Math.random() * Math.PI * 2,
      speed: 0.05 + Math.random() * 0.15,
      glow:  25 + Math.random() * 25,
    });
  }

  let t = 0;
  const draw = () => {
    ctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
    const W = starCanvas.width, H = starCanvas.height;

    stars.forEach(s => {
      const a = Math.max(0, Math.min(1, s.base + Math.sin(t * s.speed + s.phase) * 0.28));
      const x = s.x * W;
      const y = s.y * H;

      // Soft glow
      if (s.glow > 3) {
        const grad = ctx.createRadialGradient(x, y, 0, x, y, s.glow);
        grad.addColorStop(0, `rgba(100, 200, 255, ${a * 0.4})`);
        grad.addColorStop(0.5, `rgba(100, 200, 255, ${a * 0.15})`);
        grad.addColorStop(1, 'rgba(100, 200, 255, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(x - s.glow, y - s.glow, s.glow * 2, s.glow * 2);
      }

      // Star core (sharp and bright)
      ctx.beginPath();
      ctx.arc(x, y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, a + 0.2)})`;
      ctx.fill();
    });

    t += 0.008;
    requestAnimationFrame(draw);
  };
  draw();
}

/* =============================================================
   ACTIVE NAV LINK
   ============================================================= */
const cur = window.location.pathname;
document.querySelectorAll('.nav__links a, .nav__overlay a').forEach(a => {
  try {
    const p = new URL(a.href, location.href).pathname;
    if (p === cur || (cur.endsWith('/') && p.endsWith('index.html')) || (cur === '/' && p.endsWith('index.html')))
      a.classList.add('active');
  } catch (_) {}
});
