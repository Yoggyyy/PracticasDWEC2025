// URL base para obtener datos de usuario desde la API
const url = "https://randomuser.me/api/";

// Función para obtener y mostrar datos de un usuario
function obtenerUsuario() {
    // Usamos fetch para realizar una petición GET
    fetch(url)
        .then(response => {
            // Verificamos si la respuesta es exitosa
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json(); // Convertimos la respuesta a JSON
        })
        .then(data => {
            // Extraemos el primer usuario del array "results"
            const usuario = data.results[0];
            
            // Mostramos los datos del usuario en la página
            document.getElementById("name").textContent = usuario.name.first;
            document.getElementById("surname").textContent = usuario.name.last;
            document.getElementById("email").textContent = usuario.email;
            document.getElementById("address").textContent = 
                `${usuario.location.street.number} ${usuario.location.street.name}, ${usuario.location.city}`;
            document.getElementById("country").textContent = usuario.location.country;
            
            // Mostramos la imagen del usuario
            document.getElementById("picture").src = usuario.picture.large;
        })
        .catch(error => {
            // Manejamos errores en la petición
            console.error("Error al obtener los datos:", error);
        });
}

// Llamamos a la función para obtener datos al cargar la página
obtenerUsuario();