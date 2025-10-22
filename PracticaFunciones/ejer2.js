/*
[X] Crea una aplicación web que pida al usuario palabras continuamente 
    hasta que el popup se deje vacío o se cancele.

[X] Crear una función que recibirá todas las palabras y devolverá un mapa 
    que contenga como clave cada palabra y cuyo valor será el número de 
    veces que aparece esa palabra en el array. Mostrar los resultados 
    por pantalla.

Ayuda: Como en las 2 prácticas se pide introducir las palabras y devolver 
el resultado de la misma forma, podéis sacar esa parte del código a un 
script común que utilicen las 2 prácticas (main.js).
*/

// Funcion contarPalabras: recibe array de palabras y devuelve un Map
// con cada palabra y su numero de apariciones
function contarPalabras(palabras) {
    // creo un mapa vacio
    let mapaPalabras = new Map();
    
    // recorro el array de palabras
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        
        // si la palabra ya esta en el mapa, sumo 1 al contador
        if (mapaPalabras.has(palabra)) {
            let contador = mapaPalabras.get(palabra);
            mapaPalabras.set(palabra, contador + 1);
        } else {
            // si no esta, la añado con valor 1
            mapaPalabras.set(palabra, 1);
        }
    }
    
    return mapaPalabras;
}

// Funcion para mostrar los resultados en el DOM
function mostrarResultados(mapa) {
    let resultado = "";
    
    // recorro el mapa y construyo el html
    for (let [palabra, cantidad] of mapa) {
        resultado += palabra + ": " + cantidad + "<br>";
    }
    
    // muestro en el elemento con id "sol"
    document.getElementById("sol").innerHTML = resultado;
}

// Ejecutar el programa: pedir palabras, contarlas y mostrar
let palabrasUsuario = pedirPalabras();
let mapaContador = contarPalabras(palabrasUsuario);
mostrarResultados(mapaContador);

