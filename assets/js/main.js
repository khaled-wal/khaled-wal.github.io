// Dynamic year is handled by Liquid natively now but leaving safe fallback just in case
document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth scrolling internal links (mostly handled by CSS)

  // 2. Add active state to header on scroll
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
    });
  }

  // 3. Mobile Menu Toggle
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');

      if (mainNav.style.display === 'block') {
        mainNav.style.display = 'none';
      } else {
        mainNav.style.display = 'block';
        // Inline styles to mimic the old open class behavior
        mainNav.style.position = 'absolute';
        mainNav.style.top = '70px';
        mainNav.style.left = '0';
        mainNav.style.width = '100%';
        mainNav.style.backgroundColor = 'var(--clr-navy)';
        mainNav.style.padding = '20px';
        mainNav.style.boxShadow = '0 10px 10px rgba(0, 0, 0, 0.1)';
        mainNav.style.textAlign = 'center';
      }
    });
  }
});
