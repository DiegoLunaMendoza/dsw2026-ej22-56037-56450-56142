document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Aquí puedes agregar la lógica para validar el usuario y la contraseña
        if(username === 'admin' && password === 'password') {
            // Redirigir a la página de productos o dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });

    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', function() {
        const isHidden = passwordInput.type === 'password';

        passwordInput.type = isHidden ? 'text' : 'password';
        togglePassword.src = isHidden ? 'icons/eye-slash.svg' : 'icons/eye.svg';
        togglePassword.alt = isHidden ? 'Ocultar contraseña' : 'Mostrar contraseña';
    });
});