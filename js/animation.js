// Fade-in and progress bar animation for sections and skills
window.addEventListener('DOMContentLoaded', function() {
  // Fade-in effect for each .fade-in-section
  const faders = document.querySelectorAll('.fade-in-section');
  const appearOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Animate progress bars when skills section is visible
  const skillSection = document.getElementById('skill');
  if (skillSection) {
    const progressBars = skillSection.querySelectorAll('.progress-bar.progress-animate');
    const animateBars = () => {
      progressBars.forEach(bar => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.width = value + '%';
        bar.classList.add('animated');
      });
    };
    // Use IntersectionObserver for skills section
    const skillObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateBars();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    skillObserver.observe(skillSection);
  }
});
