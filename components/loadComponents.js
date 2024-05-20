document.addEventListener("DOMContentLoaded", function() {
  loadComponent('header-container', '/components/header.html');
  loadComponent('footer-container', '/components/footer.html');
});

function loadComponent(containerId, url) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          document.getElementById(containerId).innerHTML = data;
          if (containerId === 'header-container') {
              setActiveLink();
          }
      });
}

function setActiveLink() {
  let currentUrl = window.location.pathname;
  let navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function(link) {
      if (link.getAttribute('href') === currentUrl) {
          link.classList.add('active');
      }
  });
}