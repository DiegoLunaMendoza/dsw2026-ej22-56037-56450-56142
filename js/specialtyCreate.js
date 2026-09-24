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

    const descripcion = document.getElementById("descripcion");

    function autoAjustar() {
        descripcion.style.height = "auto";
        const bordes = descripcion.offsetHeight - descripcion.clientHeight;
        descripcion.style.height = descripcion.scrollHeight + bordes + "px";
    }

    descripcion.addEventListener("input", autoAjustar);

});
