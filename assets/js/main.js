document.addEventListener('DOMContentLoaded', () => {

  // ── Header scroll effect — throttled via rAF to eliminate layout thrashing ──
  const header = document.querySelector('.site-header');
  if (header) {
    let isScrolled = false;
    let ticking = false;

    const updateHeader = () => {
      const shouldScroll = window.scrollY > 50;
      if (shouldScroll !== isScrolled) {
        isScrolled = shouldScroll;
        header.classList.toggle('is-scrolled', isScrolled);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateHeader(); // Run once on load in case page is already scrolled
  }

  // ── Contact form — AJAX submit + custom redirect ─────────────────────
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          const isEnglish = window.location.pathname.startsWith('/en');
          window.location.href = isEnglish ? '/en/thanks/' : '/thanks/';
        } else {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          alert('Something went wrong. Please try again or email me directly.');
        }
      } catch (err) {
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
    document.body.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.querySelector('i').classList.replace('fa-bars', 'fa-xmark');
  }

  function closeMenu() {
    mainNav.classList.remove('nav-open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.contains('nav-open');
      isOpen ? closeMenu() : openMenu();
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
      if (header && !header.contains(e.target) && mainNav.classList.contains('nav-open')) {
        closeMenu();
      }
    });
  }

  // ── CV Carousel (mobile only): 3 slides without scroll reflows ──
  const cvGrid = document.querySelector('.cv-grid');
  const cvContainer = document.querySelector('.cv-container');
  const educationColumn = cvGrid ? cvGrid.querySelectorAll('.cv-column')[1] : null;
  const certSection = educationColumn ? educationColumn.querySelector('.cv-certifications') : null;

  let dotsWrapper = null;
  let isMobileCarousel = false;
  let dotObserver = null;

  function buildCarousel() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile && !isMobileCarousel && certSection && cvGrid) {
      certSection.classList.add('cv-carousel-slide');
      cvGrid.appendChild(certSection);
      isMobileCarousel = true;
      renderDots();
    } else if (!isMobile && isMobileCarousel && certSection && educationColumn) {
      if (dotObserver) {
        dotObserver.disconnect();
        dotObserver = null;
      }
      certSection.classList.remove('cv-carousel-slide');
      educationColumn.appendChild(certSection);
      isMobileCarousel = false;
      if (dotsWrapper) {
        dotsWrapper.remove();
        dotsWrapper = null;
      }
    }
  }

  function renderDots() {
    if (dotsWrapper) dotsWrapper.remove();
    if (dotObserver) {
      dotObserver.disconnect();
      dotObserver = null;
    }

    const slides = cvGrid.querySelectorAll('.cv-column, .cv-certifications.cv-carousel-slide');
    if (!slides.length) return;

    dotsWrapper = document.createElement('div');
    dotsWrapper.className = 'cv-dots';

    slides.forEach((slide, i) => {
      const dot = document.createElement('button');
      dot.className = 'cv-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => {
        slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      });
      dotsWrapper.appendChild(dot);
    });

    cvContainer.appendChild(dotsWrapper);

    // Use IntersectionObserver to track active slide with 0 forced layout reflows
    dotObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const index = Array.prototype.indexOf.call(slides, entry.target);
          if (index !== -1 && dotsWrapper) {
            const dots = dotsWrapper.querySelectorAll('.cv-dot');
            dots.forEach((d, i) => d.classList.toggle('active', i === index));
          }
        }
      });
    }, {
      root: cvGrid,
      threshold: 0.5
    });

    slides.forEach(slide => dotObserver.observe(slide));
  }

  if (cvGrid && cvContainer && certSection) {
    buildCarousel();
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      if (resizeTimer) cancelAnimationFrame(resizeTimer);
      resizeTimer = requestAnimationFrame(buildCarousel);
    }, { passive: true });
  }

  // ── UI/UX Overhaul for Long-Form Content & Case Studies ────────────────
  const proseContainers = document.querySelectorAll('.mkt-pro-prose, .mkt-cs-prose');
  if (proseContainers.length > 0) {
    
    // 1. Wrap all tables in a responsive overflow container
    document.querySelectorAll('.mkt-pro-prose table, .mkt-cs-prose table').forEach(table => {
      if (!table.parentNode.classList.contains('table-responsive-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-responsive-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });

    // 2. Parse text patterns like [حرج], [عالي], [متوسط] and convert to CSS status badges
    const badgeMap = [
      { text: '[حرج]', replacement: '<span class="badge-status badge-critical">حرج</span>' },
      { text: '[Critical]', replacement: '<span class="badge-status badge-critical">Critical</span>' },
      { text: '[عالي]', replacement: '<span class="badge-status badge-high">عالي</span>' },
      { text: '[High]', replacement: '<span class="badge-status badge-high">High</span>' },
      { text: '[متوسط]', replacement: '<span class="badge-status badge-medium">متوسط</span>' },
      { text: '[Medium]', replacement: '<span class="badge-status badge-medium">Medium</span>' }
    ];

    proseContainers.forEach(container => {
      const elementsToSearch = container.querySelectorAll('p, li, strong, h2, h3, td');
      elementsToSearch.forEach(el => {
        let html = el.innerHTML;
        let modified = false;
        
        badgeMap.forEach(badge => {
          if (html.includes(badge.text)) {
            html = html.replaceAll(badge.text, badge.replacement);
            modified = true;
          }
        });
        
        if (modified) {
          el.innerHTML = html;
        }
      });

      // 3. Upgrade standard blockquotes into callout boxes
      container.querySelectorAll('blockquote').forEach(bq => {
        const html = bq.innerHTML;
        const text = bq.textContent;
        
        if (text.includes('💡') || text.includes('[رؤية]') || text.includes('Insight')) {
          bq.className = 'callout-insight';
          bq.innerHTML = `<i class="fa-solid fa-lightbulb callout-icon" aria-hidden="true"></i><div class="callout-content">${html}</div>`;
        } else if (text.includes('⚠️') || text.includes('Strategic') || text.includes('[استراتيجية]')) {
          bq.className = 'callout-strategic';
          bq.innerHTML = `<i class="fa-solid fa-triangle-exclamation callout-icon" aria-hidden="true"></i><div class="callout-content">${html}</div>`;
        } else {
          bq.className = 'callout-strategic';
          bq.innerHTML = `<i class="fa-solid fa-circle-info callout-icon" aria-hidden="true"></i><div class="callout-content">${html}</div>`;
        }
      });
    });
  }

  // ── Scroll Reveal (Dawn Light Effect) ──────────────────────────────────
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
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
  }

});
