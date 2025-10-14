document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('contactForm');

  if(form) {
    form.addEventListener('submit', function() {
      // Small delay to let Formspree process the submission
      setTimeout(() => form.reset(), 100);
    });
  }
});
