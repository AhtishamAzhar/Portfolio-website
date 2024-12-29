// scripts.js

// Add any interactive functionality or animations
console.log('Website is fully loaded and ready!');

// Example: Add animation to hero section content
const heroContent = document.querySelector('.hero-content');

window.addEventListener('load', () => {
  heroContent.style.animation = 'zoomIn 2s ease-out';
});

// Smooth scrolling for navigation links
document.querySelectorAll('header a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').slice(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Example animation keyframes
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes zoomIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}`, styleSheet.cssRules.length);
