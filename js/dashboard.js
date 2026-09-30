document.addEventListener('DOMContentLoaded', () => {
  const activeCard = document.getElementById('number-active-specialities');
  const activas = obtenerEspecialidades().filter(e => e.estado === 'activo');
  activeCard.textContent = activas.length;
});