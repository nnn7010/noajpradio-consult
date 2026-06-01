/* ===== SCROLL PROGRESS BAR ===== */
const scrollBar = document.getElementById('scroll-bar');
window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollBar) scrollBar.style.width = Math.min(100, (scrollY / total) * 100) + '%';
}, { passive: true });

/* ===== SCROLL REVEAL ===== */
function addReveal(el, type = 'reveal', delay = 0) {
  el.classList.add(type);
  if (delay) el.style.setProperty('--reveal-delay', delay + 'ms');
}

// Hero
addReveal(document.querySelector('.hero-text h1'), 'reveal', 0);
addReveal(document.querySelector('.hero-sub'), 'reveal', 80);
addReveal(document.querySelector('.hero-text .btn-primary'), 'reveal', 160);
const heroImg = document.querySelector('.hero-image');
if (heroImg) addReveal(heroImg, 'reveal-right', 120);

// Problem section
const problemH2 = document.querySelector('.problem h2');
if (problemH2) addReveal(problemH2, 'reveal', 0);
document.querySelectorAll('.problem-list li').forEach((li, i) => {
  addReveal(li, 'reveal', i * 80);
});

// Solution section
const solImg = document.querySelector('.solution-image');
const solText = document.querySelector('.solution-text');
if (solImg) addReveal(solImg, 'reveal-left', 0);
if (solText) addReveal(solText, 'reveal-right', 120);

// Service detail
const serviceH2 = document.querySelector('.service-detail h2');
const serviceIntro = document.querySelector('.service-intro');
if (serviceH2) addReveal(serviceH2, 'reveal', 0);
if (serviceIntro) addReveal(serviceIntro, 'reveal', 80);
document.querySelectorAll('.service-row').forEach((row, i) => {
  const img = row.querySelector('.service-img');
  const text = row.querySelector('.service-text');
  const even = i % 2 === 1;
  if (img) addReveal(img, even ? 'reveal-right' : 'reveal-left', 0);
  if (text) addReveal(text, even ? 'reveal-left' : 'reveal-right', 120);
});

// How it works
const howH2 = document.querySelector('.how-it-works h2');
if (howH2) addReveal(howH2, 'reveal', 0);
document.querySelectorAll('.steps li').forEach((li, i) => {
  addReveal(li, 'reveal', i * 100);
});

// Plans
const plansH2 = document.querySelector('.plans h2');
if (plansH2) addReveal(plansH2, 'reveal', 0);
document.querySelectorAll('.plan-card').forEach((card, i) => {
  addReveal(card, 'reveal-scale', i * 100);
});

// FAQ
const faqH2 = document.querySelector('.faq h2');
if (faqH2) addReveal(faqH2, 'reveal', 0);
document.querySelectorAll('.faq-item').forEach((item, i) => {
  addReveal(item, 'reveal', i * 60);
});

// Final CTA
const finalCta = document.querySelector('.final-cta');
if (finalCta) addReveal(finalCta, 'reveal', 0);

// IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
  .forEach(el => observer.observe(el));

/* ===== HOW IT WORKS — line draw ===== */
const steps = document.querySelector('.steps');
if (steps) {
  const lineObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(() => steps.classList.add('line-drawn'), 300);
      lineObserver.disconnect();
    }
  }, { threshold: 0.2 });
  lineObserver.observe(steps);
}

/* ===== FAQ SMOOTH ACCORDION ===== */
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });
    if (!isOpen) {
      button.setAttribute('aria-expanded', 'true');
      button.nextElementSibling.classList.add('open');
    }
  });
});
