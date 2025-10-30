/* 
[X]Crea un menú con varias opciones. El usuario debe seleccionar
  una opción y se realizará una acción dependiendo de la opción
  elegida. Las acciones disponibles son:
     [X]1. Saludar: Muestra un mensaje de saludo.
     [X]2. Crear Caja: generará una caja de color rojo con el 
    texto "nueva caja".
     [X]3. Generar Número Aleatorio: Genera un número aleatorio 
    entre 1 y 100.
     [X]Finalmente crea un botón restablecer para restablecer la página a su estado inicial. 
*/

// Obtener los elementos del DOM
const menu = document.getElementById('menu');
const btnRestablecer = document.getElementById('btnRestablecer');
const resultado = document.getElementById('resultado');

// Evento cuando el usuario selecciona una opción del menú
menu.addEventListener('change', function() {
    const opcion = menu.value;
    
    // Switch para ejecutar la acción según la opción seleccionada
    switch(opcion) {
        case 'saludar':
            // 1. Saludar
            resultado.innerHTML = '<h2>¡Hola! Bienvenido/a</h2>';
            break;
            
        case 'crearCaja':
            // 2. Crear Caja
            const caja = document.createElement('div');
            caja.textContent = 'nueva caja';
            caja.style.backgroundColor = 'red';
            caja.style.padding = '20px';
            caja.style.margin = '10px';
            caja.style.color = 'white';
            // Vacio resultado xq si nos se superpone y aparece la caja y la opcion anterior
            resultado.innerHTML = ''
            resultado.appendChild(caja);
            break;
            
        case 'numeroAleatorio':
            // 3. Generar Número Aleatorio
            const numero = Math.floor(Math.random() * 100) + 1;
            resultado.innerHTML = '<h2>Número aleatorio: ' + numero + '</h2>';
            break;
    }
});

// Función para restablecer
btnRestablecer.addEventListener('click', function() {
    resultado.innerHTML = '';
    // Resetear el menú a la opción por defecto
    menu.value = ''; 
});