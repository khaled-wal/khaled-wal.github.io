document.addEventListener('DOMContentLoaded', () => {

  // ── Header scroll effect ─────────────────────────────────────────────
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        header.style.paddingBlock = '0.5rem';
      } else {
        header.style.boxShadow = 'none';
        header.style.paddingBlock = '1rem';
      }
    }, { passive: true });
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

});
