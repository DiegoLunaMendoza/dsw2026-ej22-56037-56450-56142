document.addEventListener('DOMContentLoaded', () => {
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

        const especialidad = {
            nombre: inputNombre.value.trim(),
            descripcion: descripcion.value.trim(),
            estado: document.getElementById("estado").value,
        };

        agregarEspecialidad(especialidad);

        mostrarToast("Nueva especialidad creada correctamente");
        form.reset();
        autoAjustar();
    });

    btnCancelar.addEventListener("click", () => {
        window.location.href = "specialties.html";
    });


});
