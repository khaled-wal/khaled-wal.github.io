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
