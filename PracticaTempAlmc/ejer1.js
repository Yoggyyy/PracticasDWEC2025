//no funciona correctamente los botones no van 

// Elementos del DOM
const inputNombre = document.getElementById('nombre');
const btnGuardar = document.getElementById('btnGuardar');
const btnBorrar = document.getElementById('btnBorrar');
const divFormulario = document.getElementById('formulario');
const divBienvenida = document.getElementById('bienvenida');

// Al cargar la página, verificar si hay un nombre guardado
window.addEventListener('load', function() {
    const nombreGuardado = localStorage.getItem('nombreUsuario');
    
    if (nombreGuardado) {
        // Si existe el nombre, mostrar bienvenida y ocultar formulario
        divFormulario.style.display = 'none';
        divBienvenida.innerHTML = `<h2>¡Bienvenido de nuevo, ${nombreGuardado}!</h2>`;
    }
});

// Guardar el nombre al hacer clic en el botón
btnGuardar.addEventListener('click', function() {
    const nombre = inputNombre.value.trim();
    
    if (nombre !== '') {
        // Guardar en localStorage
        localStorage.setItem('nombreUsuario', nombre);
        // Recargar la página para mostrar el mensaje de bienvenida
        location.reload();
    } else {
        alert('Por favor, ingresa tu nombre');
    }
});

// Borrar los datos guardados
btnBorrar.addEventListener('click', function() {
    localStorage.removeItem('nombreUsuario');
    location.reload();
});

