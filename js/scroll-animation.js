
// scroll-animation.js
const icons = document.querySelectorAll('.circle-icon');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  },
  {
    threshold: 0.5, // 0.5 = 50% im Sichtbereich (Mitte des Bildschirms)
  }
);

icons.forEach((icon) => {
  observer.observe(icon);
});


