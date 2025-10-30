/* 
[X]Crea una página que muestre dos capas del mismo tamaño (200px X 100px). 
  La primera capa mostrará el texto: "Soy arrastrable" y tendrá fondo amarillo. 
  La segunda mostrará el texto: "Soy el destino" y tendrá fondo blanco.
  La aplicación permitirá arrastrar la primera en la segundo.
  Durante el arrastre, la primera capa se mostrará con una opacidad del 50% y al arrastrar
  sobre la segunda, ésta (el destino) se cambiará a fondo rojo. 
  Al soltar en la segunda capa la primera, la primera desaparece y en la segundo aparece 
  el texto "Lo has logrado".
*/

// Obtener las capas
const capa1 = document.getElementById('capa1');
const capa2 = document.getElementById('capa2');

// Cuando empieza a arrastrar la capa1
capa1.addEventListener('dragstart', function() {
    capa1.style.opacity = '0.5';
});

// Cuando termina de arrastrar (se suelta en cualquier lado)
capa1.addEventListener('dragend', function() {
    capa1.style.opacity = '1';
});

// Cuando se arrastra sobre la capa2
capa2.addEventListener('dragover', function(e) {
    e.preventDefault(); // Necesario para permitir el drop
    capa2.style.backgroundColor = 'red';
});

// Cuando sale de la capa2
capa2.addEventListener('dragleave', function() {
    capa2.style.backgroundColor = 'white';
});

// Cuando se suelta en la capa2
capa2.addEventListener('drop', function(e) {
    e.preventDefault();
    capa1.style.display = 'none'; // Ocultar la capa1
    capa2.textContent = 'Lo has logrado';
    capa2.style.backgroundColor = 'white';
});

