/* ===========================================
   TodoStock S.A. — Landing Page Scripts
   ===========================================
   Modulos:
     1. HeaderScroll  — agrega/quita clase .scrolled al header
     2. HamburgerMenu — toggle del menu mobile
     3. SmoothNav     — scrollIntoView en links de navegacion
     4. ScrollReveal  — IntersectionObserver para animacion de entrada
     5. FormHandler   — previene envio del formulario (solo visual)
   =========================================== */

(function() {
  'use strict';

  // ---- 1. HeaderScroll ----
  var header = document.getElementById('header');

  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- 2. HamburgerMenu ----
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
  });

  // ---- 3. SmoothNav ----
  var navLinks = document.querySelectorAll('[data-nav]');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      hamburger.classList.remove('active');
      nav.classList.remove('open');
    });
  });

  // Smooth scroll para cualquier otro ancla (CTA, footer links)
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    if (anchor.hasAttribute('data-nav')) return;
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ---- 4. ScrollReveal ----
  var revealEls = document.querySelectorAll('.reveal');

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(function(el) {
    observer.observe(el);
  });

  // ---- 5. FormHandler ----
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
    });
  }

})();
