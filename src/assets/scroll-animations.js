// Scroll-triggered animations
document.addEventListener('DOMContentLoaded', () => {
  // Get all elements that should animate
  const animateElements = document.querySelectorAll(
    'section, .step, .feature-item, .hero-section'
  );

  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation class when element comes into view
        entry.target.classList.add('animate-on-scroll', 'in-view');
        // Optional: stop observing this element
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Start animation 50px before element reaches viewport
  });

  // Observe all elements
  animateElements.forEach((element) => {
    element.classList.add('animate-on-scroll');
    observer.observe(element);
  });
});
