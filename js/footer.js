document.addEventListener("DOMContentLoaded", function() {
  fetch("footer.html")
    .then(response => response.text())
    .then(html => {
      const footer = document.querySelector("footer");
      if (footer) {
        footer.innerHTML = html;
      }
    });
});