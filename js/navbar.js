document.addEventListener("DOMContentLoaded", function() {
  fetch("navbar.html")
    .then(response => response.text())
    .then(html => {
      const body = document.querySelector("body");
      if (body) {
        body.insertAdjacentHTML("afterbegin", html);

        // Hamburguesa
        const toggle = document.querySelector('.navbar-toggle');
        const links = document.querySelector('.navbar-links');
        toggle.addEventListener('click', function() {
          links.classList.toggle('navbar-links-open');
          toggle.classList.toggle('open');
        });

        // Cierra menú al hacer click en un enlace (en móvil)
        links.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            links.classList.remove('navbar-links-open');
            toggle.classList.remove('open');
          });
        });
      }
    });
});