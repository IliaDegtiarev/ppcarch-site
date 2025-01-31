document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for header navigation links
  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust for fixed header height
          behavior: 'smooth'
        });
      }
    });
  });
});
