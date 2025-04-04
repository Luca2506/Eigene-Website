 // Alle Icons selektieren
const icons = document.querySelectorAll('.circle-icon');

// Scroll-Event
window.addEventListener('scroll', () => {
  icons.forEach(icon => {
    const rect = icon.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.8;

    if (rect.top < triggerPoint) {
      icon.classList.add('active');
    } else {
      icon.classList.remove('active');
    }
  });
});

