/*

[X] Crea una aplicación web que pida al usuario palabras continuamente 
    hasta que el popup se deje vacío o se cancele. 

[]  A continuación, se eliminarán todas las palabras repetidas y además 
    se ordenarán en español, pero en orden inverso (de la Z a la A) y 
    se mostrará el resultado por pantalla. 

    Utilizar funciones flecha si se considera apropiado. 

Ayuda: cancelar el popup devuelve null. 
*/

// funcion pedirPalabras, definir un array y pedir palabras hasta que este en 
// blanco o sea null, luego guardar y devolver
function pedirPalabras() {
    let palabras= [];
    while(true) {
        let palabra = prompt("Introduce una palabra (deja en blanco para terminar):");
        if (palabra === null || palabra === ""){
            break;
        }
        palabras.push(palabra);
    }
    return palabras;
}

// [x] OPCIONAL: Transformar a func flecha:(suele usarse con una linea y podemos eliminar
//               las llaves y el return)

/* const pedirPalabras = () => {
    let palabras= [];
    while(true) {
        let palabra = prompt("Introduce una palabra (deja en blanco para terminar):");
        if (palabra === null || palabra === ""){
            break;
        }
        palabras.push(palabra);
    }
    return palabras;
} */

// funcion ordenInverso, usar un Set para eliminar duplicados y ordenar mediante sort 
// debo modificar sort de alguna manera para que ordene al reves.

function ordenInverso(palabras) {
    //defino el array de nuevo y lo paso por el set para eliminar duplicados 
    sinRepetir = new Set(palabras);
    //Convertir el set en un array de nuevo
    palabras = [...sinRepetir];

    // Utilizo sort mas localeCompare para ordenar alfabeticamente, si invierto los valores de local
    // conseguire el orden inverso, tmb hay que especificar el idioma

    // [X] OPCIONAL: Transformar a func flecha:
    //    transformo solo esto debido a que lo demas quedaria igual 
    //    y no tendria sentido alguno
    
    palabras.sort((a,b)=> b.localeCompare(a, "es"));

    /* palabras.sort(function(a, b){
         return b.localeCompare(a, "es");
    }); */

    return palabras;
}

// funcion mostrarResultados usamos modificacion del DOM basico visto al principio
let mostrarResultados = (palabras) => {
    // accedo 
    document.getElementById("sol").innerHTML = palabras.join("<br>");
}

//llamar y probar
mostrarResultados(ordenInverso(pedirPalabras()));


