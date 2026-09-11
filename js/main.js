const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  menu.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
}

const previewForm = document.querySelector('#kontakt-form');
if (previewForm) {
  previewForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = previewForm.action;
  });
}

if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js');
  const reveal = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((element) => reveal.observe(element));
}
