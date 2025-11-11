/* 
Crea una página HTML que permita al usuario 
ingresar su nombre en un campo de texto. Al
hacer clic en un botón "Guardar", guarda el 
nombre en el navegador. Al cargar la página, si
ya existe el dato, muestra un mensaje de bienvenida
con el nombre del usuario en lugar del
campo de texto.
 */

// Elementos del DOM
const inputNombre = document.getElementById('nombre');
const btnGuardar = document.getElementById('btnGuardar');
const btnBorrar = document.getElementById('btnBorrar');
const divFormulario = document.getElementById('formulario');
const divBienvenida = document.getElementById('bienvenida');

// Al cargar la página, verificar si hay un nombre guardado
// En vez de location.reload(), que fuerza a cargar la pagina, asi lo compruebo cada vez que se carga.
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

