/*
Propiedades del rectángulo: Deben tener ancho (width) y alto (height) como
propiedades. Estas representarán las dimensiones del rectángulo.
• Validación en el constructor: La construcción de los rectángulos se realizará con
una función constructora que recibe dos números (ancho y alto). Si alguno no es un
número o es menor o igual a cero, se asignará un valor por defecto de 1.
• Método cambiarDimensiones: Este método recibe dos números y permite
cambiar las dimensiones del rectángulo.
• Método calcularArea: Este método devuelve el área del rectángulo (ancho x alto).
• Método copia: Este método devuelve un nuevo objeto que es una copia del
rectángulo.
• Método comparar: Este método recibe otro rectángulo y devuelve:
o "mayor" si el área del rectángulo actual es mayor.
o "menor" si es menor.
o "igual" si las áreas son iguales.
Añadir código para validar que todos los requisitos funcionan correctamente.
*/

class Rectangulo {

    constructor(width, height) {
        if (typeof width !== 'number' || width <= 0) {
            this.width = 1;
        } else {
            this.width = width;
        }
        
        if (typeof height !== 'number' || height <= 0) {
            this.height = 1;
        } else {
            this.height = height;
        }
    }

    cambiarDimensiones(width2, height2) {
        if (typeof width2 !== 'number' || width2 <= 0 || typeof height2 !== 'number' || height2 <= 0) {
            console.log('No has introducido un valor valido');
        } else {
            this.width = width2;
            this.height = height2;
        }
    }

    calcularArea() {
        return this.width * this.height;
    }

    copia() {
        return new Rectangulo(this.width, this.height);
    }

    compara(rectangulo) {
        const area1 = this.calcularArea();
        const area2 = rectangulo.calcularArea();

        if (area1 > area2) {
            return 'mayor';
        } else if (area1 < area2) {
            return 'menor';
        } else {
            return 'igual';
        }
    }

    toString() {
        const area = this.calcularArea();
        return `El ancho ${this.width} y el alto ${this.height} dan como resultado el siguiente área ${area}`;
    }
}

// Función para mostrar en el navegador
function mostrar(texto) {
    const div = document.getElementById('resultados');
    div.innerHTML += '<p>' + texto + '</p>';
    console.log(texto);
}

// Ejemplo de uso
const rect1 = new Rectangulo(3, 4);
mostrar('Rectángulo 1 inicial: ' + rect1.toString()); 

rect1.cambiarDimensiones(5, 6);
mostrar('Rectángulo 1 después de cambiar dimensiones: ' + rect1.toString()); 

const rect2 = rect1.copia();
mostrar('Comparación rect1 con rect2 (su copia): ' + rect1.compara(rect2)); 

const rect3 = new Rectangulo(2, 3);
mostrar('Rectángulo 3: ' + rect3.toString());
mostrar('Comparación rect1 con rect3: ' + rect1.compara(rect3)); 