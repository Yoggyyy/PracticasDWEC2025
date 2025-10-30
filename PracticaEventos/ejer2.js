/* 
[x]Muestra una página en la que muestre un formulario con dos campos: email y password,
  con un botón para enviar el formulario.
  Se quiere que la aplicación valide que el email y password sean válidos una vez se pierde
  el foco del campo y de lo contrario, muestren un mensaje de error indicando el formato
  esperado.
  Los formatos son:
     [x]- Para el email: Comprobar que tenga un @
     [x]- Para el password: Comprobar que tenga longitud entre 8 y 10 caracteres.
  Los mensajes de error se eliminarán cuando el usuario entre a modificar de nuevo el
  campo.
  El botón de enviar no funcionará si las validaciones no son correctas (ponedlo en gris
  mientras no sean correctas).
*/

// Obtener elementos del DOM
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');
const btnEnviar = document.getElementById('btnEnviar');

// Variables para controlar validación
let emailValido = false;
let passwordValido = false;

// Validar email cuando pierde el foco
email.addEventListener('blur', function() {
    if (!email.value.includes('@')) {
        errorEmail.textContent = 'El email debe contener un @';
        emailValido = false;
    } else {
        errorEmail.textContent = '';
        emailValido = true;
    }
    actualizarBoton();
});

// Limpiar error cuando el usuario entra al campo de email
email.addEventListener('focus', function() {
    errorEmail.textContent = '';
});

// Validar password cuando pierde el foco
password.addEventListener('blur', function() {
    const longitud = password.value.length;
    if (longitud < 8 || longitud > 10) {
        errorPassword.textContent = 'La contraseña debe tener entre 8 y 10 caracteres';
        passwordValido = false;
    } else {
        errorPassword.textContent = '';
        passwordValido = true;
    }
    actualizarBoton();
});

// Limpiar error cuando el usuario entra al campo de password
password.addEventListener('focus', function() {
    errorPassword.textContent = '';
});

// Función para habilitar/deshabilitar botón
function actualizarBoton() {
    if (emailValido && passwordValido) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}