document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout');
  const addSpecialtyButton = document.getElementById('add-speciality');

  logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
  });

  addSpecialtyButton.addEventListener('click', () => {
    window.location.href = 'specialtyCreate.html';
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

  const especialidades = obtenerEspecialidades();
  document.getElementById("number-active-specialities").textContent = especialidades.length;
});