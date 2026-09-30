document.addEventListener('DOMContentLoaded', () => {
  // Logout
  const logoutButton = document.getElementById('logout');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }

  // Menú lateral
  const menuButton = document.querySelector('.menu');
  const nav = document.getElementById('sidebar');
  const backdrop = document.getElementById('backdrop');

  function toggleMenu() {
    if (nav) nav.classList.toggle('open');
    if (backdrop) backdrop.classList.toggle('visible');
  }

  if (menuButton) menuButton.addEventListener('click', toggleMenu);
  if (backdrop) backdrop.addEventListener('click', toggleMenu);
});