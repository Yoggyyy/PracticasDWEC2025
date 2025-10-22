/*
[X] Crea una función que se llame filtro y que reciba un array y una función 
    callback. La función callback se entenderá que sólo tiene un parámetro. 
    Esta función se aplicará a cada elemento del array y el resultado volverá 
    a guardarse en el mismo array.

    Por ejemplo: Array [1,2,3,4]
    función = multiplicar por 2
    Resultado: [2, 4, 6, 8]

[X] Crear otros dos casos:
    - Dado un array de palabras en minúsculas, pasarlas a mayúsculas.
    - Dado un array de números, calcular el factorial de cada uno.
*/

// Funcion filtro: recibe un array y una funcion callback
// aplica la funcion a cada elemento y modifica el array
function filtro(array, funcionCallback) {
    // recorro el array
    for (let i = 0; i < array.length; i++) {
        // aplico la funcion callback a cada elemento
        array[i] = funcionCallback(array[i]);
    }
    return array;
}

// CASO 1: Multiplicar por 2
function multiplicarPor2(numero) {
    return numero * 2;
}

// CASO 2: Pasar a mayúsculas
function aMayusculas(palabra) {
    return palabra.toUpperCase();
}

// CASO 3: Calcular factorial
// el factorial es el producto de todos los numeros desde 1 hasta n
// ejemplo: 5! = 5 * 4 * 3 * 2 * 1 = 120
function calcularFactorial(numero) {
    // si el numero es 0 o 1, el factorial es 1
    if (numero === 0 || numero === 1) {
        return 1;
    }
    
    // si no, multiplico desde el numero hasta 1
    let resultado = 1;
    for (let i = numero; i > 1; i--) {
        resultado = resultado * i;
    }
    return resultado;
}

// Probar los 3 casos y mostrar resultados

// Caso 1: Multiplicar por 2
let numeros = [1, 2, 3, 4];
let resultado1 = filtro(numeros, multiplicarPor2);

// Caso 2: Mayúsculas
let palabras = ["hola", "mundo", "javascript"];
let resultado2 = filtro(palabras, aMayusculas);

// Caso 3: Factorial
let numerosFactorial = [3, 4, 5];
let resultado3 = filtro(numerosFactorial, calcularFactorial);

// Mostrar resultados en el DOM
let salida = "";
salida += "<h2>Caso 1: Multiplicar por 2</h2>";
salida += "Array original: [1, 2, 3, 4]<br>";
salida += "Resultado: [" + resultado1.join(", ") + "]<br><br>";

salida += "<h2>Caso 2: Palabras a mayúsculas</h2>";
salida += "Array original: [hola, mundo, javascript]<br>";
salida += "Resultado: [" + resultado2.join(", ") + "]<br><br>";

salida += "<h2>Caso 3: Factorial</h2>";
salida += "Array original: [3, 4, 5]<br>";
salida += "Resultado: [" + resultado3.join(", ") + "]<br>";
salida += "(3! = 6, 4! = 24, 5! = 120)<br>";

document.getElementById("sol").innerHTML = salida;

