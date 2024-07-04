const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío automático del formulario

    // Validación básica de campos (puedes personalizar esto)
    if (validateForm()) {
        // Si la validación es exitosa, puedes enviar los datos
        // (por ejemplo, usando fetch para enviarlos a un servidor)
        alert('Formulario enviado correctamente!');
        form.reset(); // Limpia el formulario después de enviar
    }
});

function validateForm() {
    let isValid = true;
    const requiredFields = document.querySelectorAll('[required]');

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            alert(`Por favor, complete el campo "${field.previousElementSibling.textContent.trim()}".`);
            field.focus();
            isValid = false;
        }
    });

    // Puedes agregar más validaciones aquí (por ejemplo, formato de email)

    return isValid;
}
