function validarFormulario(event) {
    // Obtener referencias a los campos del formulario
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');

    // Verificar si los campos están vacíos
    if (!nombre.value.trim() || !email.value.trim() || !asunto.value.trim() || !mensaje.value.trim()) {
        // Evitar que el formulario se envíe
        event.preventDefault();
        // Mostrar mensaje de error
        alert('Por favor, completa todos los campos obligatorios.');
    }
}

// Asociar la función validarFormulario al evento submit del formulario
document.getElementById('miFormulario').addEventListener('submit', validarFormulario);
