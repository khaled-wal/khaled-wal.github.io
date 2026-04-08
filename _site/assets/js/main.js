document.addEventListener('DOMContentLoaded', () => {

  // Removed JS Smooth Scroll Polyfill to fix desktop interaction bugs with the expanding Resume container.
  // We now rely purely on CSS native scroll-behavior: smooth on HTML.

  // ── Header scroll effect — toggles .is-scrolled for CSS-driven glass ──
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load in case page is already scrolled
  }

  // ── Contact form — AJAX submit + custom redirect ─────────────────────
  // Submits via fetch() so we control the redirect ourselves,
  // bypassing Formspree's default thank-you page entirely.
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Visual feedback while sending
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          // Redirect to the correct thanks page based on language
          const isEnglish = window.location.pathname.startsWith('/en');
          window.location.href = isEnglish
            ? 'https://khaled-wal.github.io/en/thanks/'
            : 'https://khaled-wal.github.io/thanks/';
        } else {
          // Server returned an error — restore button and alert user
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          alert('Something went wrong. Please try again or email me directly.');
        }
      } catch (err) {
        // Network error
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        alert('Could not send your message. Please check your connection.');
      }
    });
  }

  // ── Mobile menu toggle ───────────────────────────────────────────────
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');

  function openMenu() {
    mainNav.classList.add('nav-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.querySelector('i').classList.replace('fa-bars', 'fa-xmark');
  }

  function closeMenu() {
    mainNav.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.contains('nav-open');
      isOpen ? closeMenu() : openMenu();
    });

    // Close menu when a nav link is clicked (important for same-page anchors)
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && mainNav.classList.contains('nav-open')) {
        closeMenu();
      }
    });
  }

  // ── CV Carousel (mobile only): 3 slides — Experience, Education, Certifications ──
  // On mobile (≤768px), pulls .cv-certifications out of its parent cv-column
  // and appends it to .cv-grid as a 3rd independent scroll slide.
  // On desktop resize, it is moved back inside the Education column.
  const cvGrid = document.querySelector('.cv-grid');
  const cvContainer = document.querySelector('.cv-container');
  const educationColumn = cvGrid ? cvGrid.querySelectorAll('.cv-column')[1] : null;
  const certSection = educationColumn ? educationColumn.querySelector('.cv-certifications') : null;

  let dotsWrapper = null;
  let isMobileCarousel = false;

  function buildCarousel() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile && !isMobileCarousel && certSection && cvGrid) {
      // Move certifications out of Education column → becomes 3rd slide
      certSection.classList.add('cv-carousel-slide');
      cvGrid.appendChild(certSection);
      isMobileCarousel = true;
      renderDots();
    } else if (!isMobile && isMobileCarousel && certSection && educationColumn) {
      // Restore certifications back inside Education column
      certSection.classList.remove('cv-carousel-slide');
      educationColumn.appendChild(certSection);
      isMobileCarousel = false;
      if (dotsWrapper) dotsWrapper.remove();
      dotsWrapper = null;
    }
  }

  function renderDots() {
    if (dotsWrapper) dotsWrapper.remove();

    const slides = cvGrid.querySelectorAll('.cv-column, .cv-certifications.cv-carousel-slide');
    dotsWrapper = document.createElement('div');
    dotsWrapper.className = 'cv-dots';

    slides.forEach((slide, i) => {
      const dot = document.createElement('button');
      dot.className = 'cv-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => {
        cvGrid.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
      });
      dotsWrapper.appendChild(dot);
    });

    cvContainer.appendChild(dotsWrapper);

    // Update active dot on scroll
    cvGrid.addEventListener('scroll', () => {
      const dots = dotsWrapper.querySelectorAll('.cv-dot');
      const allSlides = cvGrid.querySelectorAll('.cv-column, .cv-certifications.cv-carousel-slide');
      const scrollMid = cvGrid.scrollLeft + cvGrid.clientWidth / 2;
      let activeIndex = 0;
      allSlides.forEach((s, i) => {
        if (s.offsetLeft <= scrollMid) activeIndex = i;
      });
      dots.forEach((d, i) => d.classList.toggle('active', i === activeIndex));
    }, { passive: true });
  }

  if (cvGrid && cvContainer && certSection) {
    buildCarousel();
    window.addEventListener('resize', buildCarousel, { passive: true });
  }

});

// ── Scroll Reveal (Dawn Light Effect) ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay');
        if (delay) entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
