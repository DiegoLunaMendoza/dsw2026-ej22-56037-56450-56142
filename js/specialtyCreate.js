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

    const form = document.getElementById("form-especialidad");
    const inputNombre = document.getElementById("nombre");
    const errorNombre = document.getElementById("nombre-error");
    const btnCancelar = document.getElementById("btn-cancelar");

    function mostrarError(mensaje) {
        errorNombre.textContent = mensaje;
        inputNombre.closest(".field").classList.toggle("has-error", Boolean(mensaje));
    }

    function validarNombre() {
        const nombre = inputNombre.value.trim();
        if (nombre.length === 0) {
            mostrarError("El nombre de la especialidad es obligatorio.");
            return false;
        }
        if (nombre.length < 3 || nombre.length > 30) {
            mostrarError("El nombre debe tener entre 3 y 30 caracteres.");
            return false;
        }
        mostrarError("");
        return true;
    }

    inputNombre.addEventListener("input", () => mostrarError(""));

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!validarNombre()) {
            inputNombre.focus();
            return;
        }
        mostrarToast("Nueva especialidad creada correctamente");
        form.reset();
        autoAjustar();
    });

    const especialidad = {
        nombre: inputNombre.value.trim(),
        descripcion: document.getElementById("descripcion").value.trim(),
        estado: document.getElementById("estado").value,
    };


    const toast = document.getElementById("toast");
    let toastTimeout;
    // aprenderlo mejor 
    function mostrarToast(mensaje) {
        toast.textContent = mensaje;
        toast.classList.add("visible");
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => toast.classList.remove("visible"), 2500);
    }

    btnCancelar.addEventListener("click", () => {
        window.location.href = "specialties.html";
    });


});
