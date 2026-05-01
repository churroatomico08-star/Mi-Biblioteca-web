document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const submitBtn = document.getElementById('submitBtn');

    loginForm.addEventListener('submit', function() {
        // Solo cambiamos el texto para dar retroalimentación visual al usuario.
        // NO usamos e.preventDefault() porque necesitamos que Flask reciba los datos.
        submitBtn.innerText = 'Verificando...';
    });
});