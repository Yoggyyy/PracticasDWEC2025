/* 
Simula un precio de una acción de la bolsa 
que cambia cada segundo:
• Empieza en 100 y cada segundo sube o baja entre 
-5 y +5 aleatoriamente y muestra el precio en pantalla.
• Si el precio llega a 120 → mensaje "¡Máximo alcanzado!" 
y detener. Si baja de 80 → mensaje "¡Mínimo alcanzado!" y detener.
 */

// Elementos del DOM
const spanPrecio = document.getElementById('precio');
const divMensaje = document.getElementById('mensaje');
const btnIniciar = document.getElementById('btnIniciar');
const btnDetener = document.getElementById('btnDetener');
const btnReiniciar = document.getElementById('btnReiniciar');

// Variables del simulador
let precio = 100;
let intervalo = null;

// Función para actualizar el precio
function actualizarPrecio() {
    // Generar cambio aleatorio entre -5 y +5
    const cambio = Math.floor(Math.random() * 11) - 5;
    precio += cambio;
    
    // Actualizar el precio en pantalla
    spanPrecio.textContent = precio;
    
    // Verificar límites
    if (precio >= 120) {
        divMensaje.innerHTML = '<p style="color: green; font-weight: bold;">¡Máximo alcanzado!</p>';
        detenerSimulacion();
    } else if (precio <= 80) {
        divMensaje.innerHTML = '<p style="color: red; font-weight: bold;">¡Mínimo alcanzado!</p>';
        detenerSimulacion();
    }
}

// Iniciar simulación
btnIniciar.addEventListener('click', function() {
    if (!intervalo) {
        divMensaje.innerHTML = '<p>Simulación en curso...</p>';
        intervalo = setInterval(actualizarPrecio, 1000);
    }
});

// Detener simulación
function detenerSimulacion() {
    if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;
    }
}

btnDetener.addEventListener('click', function() {
    detenerSimulacion();
    divMensaje.innerHTML = '<p>Simulación detenida</p>';
});

// Reiniciar simulación
btnReiniciar.addEventListener('click', function() {
    detenerSimulacion();
    precio = 100;
    spanPrecio.textContent = precio;
    divMensaje.innerHTML = '';
});

