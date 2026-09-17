document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout');

  logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
  });

  const menuButton = document.querySelector('.menu');
  const nav = document.getElementById('sidebar');
  const backdrop = document.getElementById('backdrop');

  function toggleMenu() {
    nav.classList.toggle('open');
    backdrop.classList.toggle('visible');
  }

  menuButton.addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', toggleMenu);
});