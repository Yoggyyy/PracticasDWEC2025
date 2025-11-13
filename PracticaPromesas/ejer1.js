/* 
Crea una pequeña simulación de proceso de compra online.
La página tendrá:
• Un campo de texto para introducir el nombre del producto.
• Otro campo para la dirección de envío.
• Un botón “Realizar compra”.
• Un elemento <p> para mostrar el resultado.
Cuando el usuario pulse el botón, deben ocurrir dos pasos encadenados:

1. Función procesarPago(producto) que devuelve una promesa.
o Espera 1,5 segundos antes de resolverse o rechazarse.
o Si se ha introducido un producto, se resuelve con el mensaje
" Pago procesado correctamente para [producto]".
o Si el campo está vacío, se rechaza con el mensaje
" No se puede procesar el pago sin producto".
2. Función enviarPedido() que devuelve una promesa.
o Se ejecuta solo si el pago fue correcto.
o Valida que la dirección no esté vacía. Si está vacía, se rechaza con
"Dirección de envío no válida".
o Si es válida, espera 2 segundos y tiene un 20% de probabilidad de error
aleatorio:
• Si hay error → reject("Error durante el envío, intente de nuevo.")
• Si no hay error → resolve("Pedido enviado correctamente a [dirección]")
El resultado final (o el error) debe mostrarse en un <p> del DOM. 
*/

const inputProducto = document.getElementById("producto");
const inputDireccion = document.getElementById("direccion");
const btnGuardar = document.getElementById("btnComprar");
const resultado = document.getElementById("resultado");

btnGuardar.addEventListener("click", function () {
  const producto = inputProducto.value.trim();
  const direccion = inputDireccion.value.trim();

  procesarPago(producto)
    .then((mensaje) => {
      resultado.innerHTML = mensaje;
      return enviarPedido(direccion);
    })
    .then((mensaje) => {
      resultado.innerHTML = mensaje;
    })
    .catch((error) => {
      resultado.innerHTML = error;
    });
});

function procesarPago(producto) {
  return new Promise((resolver, rechazar) => {
    setTimeout(() => {
      if (producto !== "") {
        resolver(`Pago procesado correctamente para ${producto}`);
      } else {
        rechazar(`No se puede procesar el pago sin producto`);
      }
    }, 1500);
  });
}

function enviarPedido(direccion) {
  return new Promise((resolver, rechazar) => {
    if (direccion !== "") {
      setTimeout(() => {
        if (Math.random() < 0.2) {
          rechazar("Error durante el envío, intente de nuevo");
        } else {
          resolver(`Pedido enviado correctamente a ${direccion}`);
        }
      }, 2000);
    } else {
      rechazar("Direccion de envio no valida");
    }
  });
}
