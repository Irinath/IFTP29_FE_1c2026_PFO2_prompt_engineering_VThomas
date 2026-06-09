/* ==========================================
   TodoStock SA - Main JavaScript
   ========================================== */

/* --- Header: scroll state & sticky shadow --- */
const header = document.getElementById('header');

function updateHeader() {
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

/* --- Mobile burger menu --- */
const burger = document.getElementById('burger');
const nav    = document.getElementById('nav');

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
});

// Close nav on link click
document.querySelectorAll('.header__nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Close nav on outside click
document.addEventListener('click', e => {
  if (!header.contains(e.target)) {
    nav.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

/* --- Smooth scroll for all anchor links --- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = 68; // header height
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* --- Active nav link on scroll (highlight current section) --- */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.header__nav-link');

function activateNavLink() {
  let currentId = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 90;
    if (window.scrollY >= sectionTop) {
      currentId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentId}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', activateNavLink, { passive: true });

/* --- Testimonials carousel --- */
const track       = document.getElementById('testimonialTrack');
const dotsWrapper = document.getElementById('testimonialDots');
const cards       = track ? Array.from(track.querySelectorAll('.testimonial-card')) : [];
let currentSlide  = 0;

function getVisibleCount() {
  return window.innerWidth <= 480 ? 1 : 2;
}

function buildDots() {
  if (!dotsWrapper) return;
  dotsWrapper.innerHTML = '';
  const visible = getVisibleCount();
  const totalSlides = Math.ceil(cards.length / visible);
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'testimonials__dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Ir al grupo ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrapper.appendChild(dot);
  }
}

function goToSlide(index) {
  const visible   = getVisibleCount();
  const totalSlides = Math.ceil(cards.length / visible);
  currentSlide = Math.max(0, Math.min(index, totalSlides - 1));

  // Card width including gap
  const cardWidth = cards[0].offsetWidth;
  const gap       = 24; // 1.5rem
  const offset    = currentSlide * visible * (cardWidth + gap);
  track.style.transform = `translateX(-${offset}px)`;

  // Update dots
  const dots = dotsWrapper.querySelectorAll('.testimonials__dot');
  dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

function nextSlide() {
  const visible     = getVisibleCount();
  const totalSlides = Math.ceil(cards.length / visible);
  goToSlide((currentSlide + 1) % totalSlides);
}

function prevSlide() {
  const visible     = getVisibleCount();
  const totalSlides = Math.ceil(cards.length / visible);
  goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
}

if (track && cards.length > 0) {
  buildDots();
  document.getElementById('nextBtn').addEventListener('click', nextSlide);
  document.getElementById('prevBtn').addEventListener('click', prevSlide);

  // Auto-advance
  let autoPlay = setInterval(nextSlide, 5000);

  track.closest('.testimonials__track-wrapper').addEventListener('mouseenter', () => clearInterval(autoPlay));
  track.closest('.testimonials__track-wrapper').addEventListener('mouseleave', () => {
    autoPlay = setInterval(nextSlide, 5000);
  });

  // Touch/swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? nextSlide() : prevSlide();
  }, { passive: true });

  // Rebuild on resize
  window.addEventListener('resize', () => {
    buildDots();
    goToSlide(0);
  });
}

/* --- Scroll reveal animation --- */
function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Number(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

// Assign reveal classes programmatically to page elements
function addRevealClasses() {
  // About
  const aboutImageWrap = document.querySelector('.about__image-wrap');
  const aboutContent   = document.querySelector('.about__content');
  if (aboutImageWrap) aboutImageWrap.classList.add('reveal', 'reveal--left');
  if (aboutContent)   aboutContent.classList.add('reveal', 'reveal--right');

  // Services header + cards
  const servicesHeader = document.querySelector('.services__header');
  if (servicesHeader) servicesHeader.classList.add('reveal');

  document.querySelectorAll('.service-card').forEach((card, i) => {
    card.classList.add('reveal');
    card.dataset.delay = i * 80;
  });

  // Testimonials header
  const testimonialsHeader = document.querySelector('.testimonials__header');
  if (testimonialsHeader) testimonialsHeader.classList.add('reveal');

  // Contact
  const contactInfo = document.querySelector('.contact__info');
  const contactForm = document.querySelector('.contact__form');
  if (contactInfo) { contactInfo.classList.add('reveal', 'reveal--left'); }
  if (contactForm) { contactForm.classList.add('reveal', 'reveal--right'); }
}

addRevealClasses();
initReveal();

/* --- Form: basic visual feedback on submit --- */
const form = document.querySelector('.contact__form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Consulta enviada';
    btn.style.background = '#2a9d5c';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}
