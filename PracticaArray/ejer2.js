// Ejercicio: Validar la aleatoriedad de Math.random()
// Generar 10,000 números aleatorios del 1 al 10 y mostrar frecuencias

console.log("=== VALIDACIÓN DE ALEATORIEDAD Math.random() ===\n");
console.log("Generando 10.000 números aleatorios del 1 al 10...\n");

// Crear un Map para almacenar las frecuencias
let frecuencias = new Map();

// Inicializar el Map con los números del 1 al 10 con frecuencia 0
for (let i = 1; i <= 10; i++) {
    frecuencias.set(i, 0);
}

// Generar 10,000 números aleatorios del 1 al 10
for (let i = 0; i < 10000; i++) {
    // Generar número aleatorio entre 1 y 10
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    
    // Incrementar la frecuencia del número generado
    frecuencias.set(numeroAleatorio, frecuencias.get(numeroAleatorio) + 1);
}

// Mostrar los resultados
console.log("Frecuencias:");
console.log("============\n");

frecuencias.forEach(function(frecuencia, numero) {
    console.log("Número " + numero + ": " + frecuencia);
});


