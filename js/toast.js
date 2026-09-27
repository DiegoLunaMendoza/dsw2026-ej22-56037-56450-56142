let toastTimeout;

function obtenerToast() {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        toast.setAttribute("role", "status");
        toast.setAttribute("aria-live", "polite");
        document.body.appendChild(toast);
    }

    return toast;
}

function mostrarToast(mensaje, tipo = "success") {
    const toast = obtenerToast();

    toast.textContent = mensaje;
    toast.classList.remove("toast-success", "toast-warning");
    toast.classList.add(`toast-${tipo}`, "visible");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove("visible"), 2500);
}