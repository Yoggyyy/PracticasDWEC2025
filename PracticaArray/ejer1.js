// Ejercicio: Generar 50 combinaciones aleatorias de la lotería primitiva
// Cada combinación tiene 6 números del 1 al 49 sin repetir

console.log("=== LOTERÍA PRIMITIVA - 50 COMBINACIONES ===\n");

// Generar 50 combinaciones
for (let i = 1; i <= 50; i++) {
    let combinacion = [];
    
    // Generar 6 números únicos del 1 al 49
    while (combinacion.length < 6) {
        // Generar número aleatorio entre 1 y 49
        let numeroAleatorio = Math.floor(Math.random() * 49) + 1;
        
        // Verificar que el número no esté ya en la combinación
        if (!combinacion.includes(numeroAleatorio)) {
            combinacion.push(numeroAleatorio);
        }
    }
    
    // Ordenar la combinación de menor a mayor
    combinacion.sort(function(a, b) {
        return a - b;
    });
    
    // Mostrar la combinación, join sirve para formatear la salida y hacer que se intercale con el caracter que deses
    console.log("Combinación " + i + ": " + combinacion.join(" - "));
}

console.log("\n=== FIN DE LAS COMBINACIONES ===");

