// Archivo común para las prácticas de funciones
// Función para pedir palabras al usuario hasta que cancele o deje vacío

function pedirPalabras() {
    let palabras = [];
    while(true) {
        let palabra = prompt("Introduce una palabra (deja en blanco para terminar):");
        if (palabra === null || palabra === ""){
            break;
        }
        palabras.push(palabra);
    }
    return palabras;
}

