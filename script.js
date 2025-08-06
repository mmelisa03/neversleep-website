document.addEventListener('DOMContentLoaded', () => {
  const cornerLogo = document.querySelector('.corner-logo');
  const socialColumn = document.querySelector('.social-column');
  const hero = document.querySelector('#hero');

  if (!cornerLogo || !socialColumn || !hero) return;

  window.addEventListener('scroll', () => {
    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom < 0) {
      // User scrolled past the hero section
      socialColumn.style.opacity = '1';
      socialColumn.style.pointerEvents = 'auto';
      cornerLogo.style.opacity = '1';
      cornerLogo.style.pointerEvents = 'auto';
    } else {
      // Hero is still visible
      socialColumn.style.opacity = '0';
      socialColumn.style.pointerEvents = 'none';
      cornerLogo.style.opacity = '0';
      cornerLogo.style.pointerEvents = 'none';
    }
  });
});
