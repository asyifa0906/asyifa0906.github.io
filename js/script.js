/**
 * ==============================================================================
 * ASYIFA'S PORTOFOLIO — SCRIPT INTERAKTIF
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ----------------------------------------------------------------------------
  // 1. MOBILE NAVIGATION (HAMBURGER MENU)
  // ----------------------------------------------------------------------------
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Tutup menu saat tautan navigasi diklik
    document.querySelectorAll('.nav-link, .dropdown-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Tutup menu saat mengklik di luar area navigasi
    document.addEventListener('click', (event) => {
      if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ----------------------------------------------------------------------------
  // 2. STICKY NAVBAR SHADOW ON SCROLL
  // ----------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ----------------------------------------------------------------------------
  // 3. LIGHTBOX MODAL FOR 5 CERTIFICATES
  // ----------------------------------------------------------------------------
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const certItems = document.querySelectorAll('.sertifikat-item');

  if (lightboxModal && certItems.length > 0) {
    certItems.forEach(item => {
      item.addEventListener('click', () => {
        const fullImgSrc = item.getAttribute('data-full-img') || item.querySelector('img').src;
        lightboxImg.src = fullImgSrc;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // ----------------------------------------------------------------------------
  // 4. TOAST NOTIFICATION FOR FORM SUBMIT (TANPA EMOJI)
  // ----------------------------------------------------------------------------
  const showToast = (message) => {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.textContent = message;

    setTimeout(() => {
      toast.classList.add('show');
    }, 50);

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  };

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Pesan Anda telah berhasil dikirim.');
      contactForm.reset();
    });
  }

  // ----------------------------------------------------------------------------
  // 5. SMOOTH SCROLLING FOR ANCHOR LINKS
  // ----------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navHeight = navbar ? navbar.offsetHeight + 20 : 70;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

});
