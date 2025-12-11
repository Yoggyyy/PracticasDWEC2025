// Función para crear una promesa con timeout
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Función para actualizar la cuenta regresiva
async function iniciarCuentaRegresiva() {
    const elemento = document.getElementById('cuentaRegresiva');
    
    for (let contador = 5; contador >= 0; contador--) {
        elemento.textContent = contador;
        
        if (contador === 0) {
            mostrarNotificacion();
        } else {
            await timeout(1000); 
        }
    }
}

// Función para mostrar la notificación
function mostrarNotificacion() {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('¡Nuevo Video!', {
            body: 'Haz clic para ver el video publicado.',
        });

        notificacion.onclick = () => {
            window.location.href = 'video.html';
        };

    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permiso => {
            if (permiso === 'granted') {
                mostrarNotificacion();
            }
        });
    }
}

// Iniciar la cuenta regresiva inmediatamente
iniciarCuentaRegresiva();
