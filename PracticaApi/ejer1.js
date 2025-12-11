// Función para crear una promesa con timeout
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Función para actualizar la cuenta regresiva
function iniciarCuentaRegresiva() {
    let contador = 5;
    const elemento = document.getElementById('cuentaRegresiva');
    
    const intervalo = setInterval(() => {
        contador--;
        elemento.textContent = contador;
        
        if (contador === 0) {
            clearInterval(intervalo);
            mostrarNotificacion();
        }
    }, 1000);
}

// Función para mostrar la notificación
function mostrarNotificacion() {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('¡Nuevo Video!', {
            body: 'Haz clic para ver el video publicado.',
        });

        notificacion.onclick = () => {
            window.location.href = 'video.html'; // Redirige al hacer clic
        };

    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permiso => {
            if (permiso === 'granted') {
                mostrarNotificacion();
            }
        });
    }
}

// Iniciar la cuenta regresiva después de 5 segundos
timeout(5000).then(iniciarCuentaRegresiva);