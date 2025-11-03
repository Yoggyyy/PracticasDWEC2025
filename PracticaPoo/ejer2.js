/*
Ejercicio 2: Ordenadores y Portátiles

Crea un tipo de objeto que sirve para representar ordenadores. Sus propiedades serán:
• Marca, un texto
• Modelo, un texto
• Memoria RAM, un número que indica los GB de capacidad
• Capacidad de disco duro, un número que indica el GB de capacidad
• Pulgadas de pantalla, un número que indica Pulgadas

Métodos de los ordenadores:
• toString, sirve para obtener en forma de texto los detalles del ordenador

Al crear un ordenador se pueden indicar todos sus valores, pero por defecto (sin ser
obligado indicarlos) se toman como valores: 17 pulgadas, 512 GB de disco duro y 4 GB de
RAM. La marca y modelo sí son necesarias.

Crea otro tipo de objeto que represente a los ordenadores portátiles. Los que heredan todo
lo que tiene un ordenador y añaden una nueva propiedad:
• autonomía, que es un número que expresa horas.

Se construye este objeto de la misma forma que los ordenadores, pero puede añadirse la
autonomía, que por defecto son 4 horas. Por defecto, todos los portátiles son de 12
pulgadas, 4 GB de RAM y disco duro de 256 GB. Además, el toString de un portátil añade la
autonomía a los detalles.
*/

class Ordenador {
    constructor(marca, modelo, memoriaRAM = 4, capacidadDiscoDuro = 512, pulgadasPantalla = 17) {
        this.marca = marca;
        this.modelo = modelo;
        this.memoriaRAM = memoriaRAM;
        this.capacidadDiscoDuro = capacidadDiscoDuro;
        this.pulgadasPantalla = pulgadasPantalla;
    }

    toString() {
        return `Ordenador ${this.marca} ${this.modelo} - RAM: ${this.memoriaRAM}GB, Disco: ${this.capacidadDiscoDuro}GB, Pantalla: ${this.pulgadasPantalla}"`;
    }
}

class Portatil extends Ordenador {
    constructor(marca, modelo, memoriaRAM = 4, capacidadDiscoDuro = 256, pulgadasPantalla = 12, autonomia = 4) {
        super(marca, modelo, memoriaRAM, capacidadDiscoDuro, pulgadasPantalla);
        this.autonomia = autonomia;
    }

    toString() {
        return `${super.toString()}, Autonomía: ${this.autonomia}h`;
    }
}

// Función para mostrar en el navegador
function mostrar(texto) {
    const div = document.getElementById('resultados');
    div.innerHTML += '<p>' + texto + '</p>';
    console.log(texto);
}

// Ejemplos de uso - Ordenadores
mostrar('=== ORDENADORES ===');

// Ordenador con solo marca y modelo (valores por defecto)
const pc1 = new Ordenador('Dell', 'Optiplex 7010');
mostrar(pc1.toString());

// Ordenador con todos los parámetros personalizados
const pc2 = new Ordenador('HP', 'Pavilion', 16, 1024, 24);
mostrar(pc2.toString());

// Ordenador con algunos parámetros personalizados
const pc3 = new Ordenador('Lenovo', 'ThinkCentre', 8);
mostrar(pc3.toString());

mostrar('');
mostrar('=== PORTÁTILES ===');

// Portátil con solo marca y modelo (valores por defecto de portátil)
const laptop1 = new Portatil('Apple', 'MacBook Air');
mostrar(laptop1.toString());

// Portátil con todos los parámetros personalizados
const laptop2 = new Portatil('ASUS', 'ZenBook', 16, 512, 14, 8);
mostrar(laptop2.toString());

// Portátil con algunos parámetros personalizados
const laptop3 = new Portatil('Acer', 'Aspire', 8, 256, 15);
mostrar(laptop3.toString());

// Portátil con autonomía personalizada
const laptop4 = new Portatil('MSI', 'Prestige', 32, 1024, 17, 6);
mostrar(laptop4.toString());

